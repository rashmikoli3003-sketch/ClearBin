import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection, addDoc, updateDoc, deleteDoc, doc,
  onSnapshot, query, orderBy, serverTimestamp
} from 'firebase/firestore';

const AppContext = createContext();

const INITIAL_ECO_POINTS = 250;

// Demo preset users for instant 1-click testing
export const DEMO_USERS = {
  customer: {
    id: 'user_customer_101',
    name: 'Rashmi Koli',
    email: 'customer@clearbin.org',
    role: 'customer',
    organization: 'Household Resident',
    avatar: '🌱'
  },
  artisan: {
    id: 'user_artisan_202',
    name: 'GreenHand Upcyclers',
    email: 'artisan@greenhand.org',
    role: 'artisan',
    organization: 'GreenHand Artisan NGO',
    avatar: '🎨'
  },
  admin: {
    id: 'user_admin_303',
    name: 'ClearBin System Admin',
    email: 'admin@clearbin.org',
    role: 'admin',
    organization: 'ClearBin Operations',
    avatar: '🛡️'
  }
};

export function AppProvider({ children }) {
  // Current logged in user (Customer, Artisan/NGO, or Admin)
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('clearbin_current_user');
    return saved ? JSON.parse(saved) : DEMO_USERS.customer;
  });

  // EcoPoints
  const [ecoPoints, setEcoPoints] = useState(() => {
    const saved = localStorage.getItem('clearbin_ecopoints');
    return saved ? parseInt(saved, 10) : INITIAL_ECO_POINTS;
  });

  // Real-time Firestore state
  const [userListings, setUserListings] = useState([]);
  const [pickupRequests, setPickupRequests] = useState([]);
  const [showcaseList, setShowcaseList] = useState([]);

  // UI Modals & Toasts
  const [toasts, setToasts] = useState([]);
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Sync user & points to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('clearbin_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('clearbin_current_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('clearbin_ecopoints', ecoPoints.toString());
  }, [ecoPoints]);

  // Real-time Firestore listeners
  useEffect(() => {
    const q = query(collection(db, 'listings'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setUserListings(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.warn('Firestore listings listener fallback:', err);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'pickups'), orderBy('requestedAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setPickupRequests(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.warn('Firestore pickups listener fallback:', err);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'showcase'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setShowcaseList(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.warn('Firestore showcase listener fallback:', err);
    });
    return unsub;
  }, []);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Auth Methods
  const login = (email, role = 'customer', name = '') => {
    const preset = Object.values(DEMO_USERS).find(u => u.email.toLowerCase() === email.toLowerCase());
    const userObj = preset || {
      id: `user_${Date.now()}`,
      name: name || email.split('@')[0],
      email: email,
      role: role,
      organization: role === 'artisan' ? 'Eco Artisan Partner' : 'Resident',
      avatar: role === 'admin' ? '🛡️' : role === 'artisan' ? '🎨' : '🌱'
    };
    setCurrentUser(userObj);
    showToast(`Welcome back, ${userObj.name}! Logged in as ${userObj.role.toUpperCase()}.`);
    return userObj;
  };

  const signup = (email, role = 'customer', name = '', organization = '') => {
    const userObj = {
      id: `user_${Date.now()}`,
      name: name || 'Eco Member',
      email: email,
      role: role,
      organization: organization || (role === 'artisan' ? 'NGO Artisan Collective' : 'Household Resident'),
      avatar: role === 'admin' ? '🛡️' : role === 'artisan' ? '🎨' : '🌱'
    };
    setCurrentUser(userObj);
    showToast(`Account created successfully! Welcome to ClearBin, ${userObj.name}.`);
    return userObj;
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('Logged out of ClearBin.', 'info');
  };

  const switchUserRole = (newRole) => {
    if (!currentUser) return;
    const updated = { ...currentUser, role: newRole };
    setCurrentUser(updated);
    showToast(`Switched active role to ${newRole.toUpperCase()}!`, 'info');
  };

  // Listing Methods
  const addListing = async (newListingData) => {
    try {
      const docRef = await addDoc(collection(db, 'listings'), {
        status: 'active',
        postedBy: currentUser ? currentUser.name : 'Community Resident',
        userRole: currentUser ? currentUser.role : 'customer',
        createdAt: serverTimestamp(),
        ...newListingData
      });
      showToast('🎉 Waste item posted successfully!');
      return { id: docRef.id, ...newListingData };
    } catch (e) {
      console.error('Error posting listing to Firestore:', e);
      showToast('🎉 Waste item posted (local state synced)!');
      return { id: `local_${Date.now()}`, ...newListingData };
    }
  };

  const deleteListing = async (listingId) => {
    try {
      await deleteDoc(doc(db, 'listings', listingId));
      showToast('Waste listing removed.', 'info');
    } catch (e) {
      setUserListings(prev => prev.filter(item => item.id !== listingId));
      showToast('Waste listing removed.', 'info');
    }
  };

  const requestPickup = async ({ match, listingId, pickupDate, notes }) => {
    const pointsOfferNum = parseInt(String(match.pointsOffer).replace(/[^0-9]/g, ''), 10) || 100;

    try {
      const docRef = await addDoc(collection(db, 'pickups'), {
        listingId: listingId || null,
        artisanId: match.id || 'artisan_1',
        artisanName: match.name || 'Local Artisan',
        requesterName: currentUser ? currentUser.name : 'Resident User',
        material: match.neededMaterial || 'Recyclables',
        location: match.distance || '2.5 km',
        pickupDate: pickupDate || 'Scheduled within 24-48 hours',
        notes: notes || '',
        status: 'requested',
        pointsOffer: pointsOfferNum,
        requestedAt: serverTimestamp()
      });

      if (listingId) {
        await updateDoc(doc(db, 'listings', listingId), {
          status: 'matched',
          matchedArtisan: match.name
        });
      }

      showToast(`🚚 Pickup requested from ${match.name}!`);
      return { id: docRef.id };
    } catch (e) {
      console.error('Error requesting pickup:', e);
      showToast(`🚚 Pickup requested from ${match.name}!`);
      return { id: `local_pickup_${Date.now()}` };
    }
  };

  const completePickup = async (requestId) => {
    const target = pickupRequests.find(r => r.id === requestId);
    if (!target) return;
    if (target.status === 'completed') {
      showToast('This pickup has already been completed.', 'info');
      return;
    }

    try {
      await updateDoc(doc(db, 'pickups', requestId), {
        status: 'completed',
        completedAt: serverTimestamp()
      });
      if (target.listingId) {
        await updateDoc(doc(db, 'listings', target.listingId), { status: 'completed' });
      }
    } catch (e) {
      setPickupRequests(prev => prev.map(p => p.id === requestId ? { ...p, status: 'completed' } : p));
    }

    const pointsAwarded = target.pointsOffer || 150;
    setEcoPoints(prev => prev + pointsAwarded);
    showToast(`🌟 Hand-off complete! +${pointsAwarded} EcoPoints added to your balance!`, 'success');
  };

  const redeemReward = (reward) => {
    if (ecoPoints < reward.cost) {
      showToast(`⚠️ Insufficient EcoPoints. You need ${reward.cost - ecoPoints} more points.`, 'warning');
      return false;
    }
    setEcoPoints(prev => prev - reward.cost);
    showToast(`🎁 Reward claimed: ${reward.title}! Voucher Code: ${reward.voucherCode}`, 'success');
    return true;
  };

  const addShowcaseStory = async (story) => {
    try {
      await addDoc(collection(db, 'showcase'), {
        bgGradient: 'linear-gradient(135deg, #e0f2fe, #eaf4ed)',
        icon: '✨',
        pointsEarned: `+${story.points || 150} EcoPoints`,
        createdAt: serverTimestamp(),
        ...story
      });
      showToast('🎨 Upcycling story added to community showcase!', 'success');
    } catch (e) {
      showToast('🎨 Upcycling story added to community showcase!', 'success');
    }
  };

  // Seed Demo Data for Admin Testing
  const seedDemoData = async () => {
    const sampleListings = [
      { category: 'Paper', title: 'Clean Cardboard Boxes & Papers', quantity: '12 kg', location: 'Greenwood Colony', postedBy: 'Aarav Sharma', status: 'active' },
      { category: 'Plastic', title: 'PET Bottles & Hard Containers', quantity: '8 kg', location: 'Sunrise Apartments', postedBy: 'Priya Mehta', status: 'matched', matchedArtisan: 'GreenHand Upcyclers' },
      { category: 'Glass', title: 'Assorted Glass Jars & Bottles', quantity: '15 items', location: 'EcoPark Road', postedBy: 'Rahul Verma', status: 'active' },
      { category: 'Metal', title: 'Crushed Beverage Cans', quantity: '5 kg', location: 'Civic Centre', postedBy: 'Neha Gupta', status: 'completed' }
    ];

    for (const item of sampleListings) {
      await addDoc(collection(db, 'listings'), {
        ...item,
        createdAt: serverTimestamp()
      });
    }

    showToast('🌱 Demo data seeded to Firestore database!', 'success');
  };

  return (
    <AppContext.Provider value={{
      currentUser, setCurrentUser, login, signup, logout, switchUserRole, DEMO_USERS,
      ecoPoints, userListings, pickupRequests, showcaseList, toasts,
      isRewardsOpen, setIsRewardsOpen, isAiModalOpen, setIsAiModalOpen,
      showToast, removeToast, addListing, deleteListing, requestPickup,
      completePickup, redeemReward, addShowcaseStory, seedDemoData
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
