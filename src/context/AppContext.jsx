import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';

const AppContext = createContext();

const INITIAL_ECO_POINTS = 250;

export function AppProvider({ children }) {
  // 1. EcoPoints state
  const [ecoPoints, setEcoPoints] = useState(() => {
    const saved = localStorage.getItem('clearbin_ecopoints');
    return saved ? parseInt(saved, 10) : INITIAL_ECO_POINTS;
  });

  // 2. User Listings state (Firestore)
  const [userListings, setUserListings] = useState([]);

  // 3. Pickup Requests state (Firestore)
  const [pickupRequests, setPickupRequests] = useState([]);

  // 4. Showcase Items state (Firestore)
  const [showcaseList, setShowcaseList] = useState([]);

  // 5. Toast Notifications state
  const [toasts, setToasts] = useState([]);

  // 6. Rewards Modal Open state
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);

  // 7. EcoCraft AI Modal Open state
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // EcoPoints Persistence Effect
  useEffect(() => {
    localStorage.setItem('clearbin_ecopoints', ecoPoints.toString());
  }, [ecoPoints]);

  // Real-time Firestore Listener: Listings
  useEffect(() => {
    const q = query(collection(db, 'listings'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : (data.createdAt || new Date().toISOString())
        };
      });
      setUserListings(docs);
    }, (err) => {
      console.warn('Firestore listings listener error:', err);
    });
    return () => unsubscribe();
  }, []);

  // Real-time Firestore Listener: Pickups
  useEffect(() => {
    const q = query(collection(db, 'pickups'), orderBy('requestedAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          requestedAt: data.requestedAt?.toDate ? data.requestedAt.toDate().toISOString() : (data.requestedAt || new Date().toISOString())
        };
      });
      setPickupRequests(docs);
    }, (err) => {
      console.warn('Firestore pickups listener error:', err);
    });
    return () => unsubscribe();
  }, []);

  // Real-time Firestore Listener: Showcase
  useEffect(() => {
    const q = query(collection(db, 'showcase'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : (data.createdAt || new Date().toISOString())
        };
      });
      setShowcaseList(docs);
    }, (err) => {
      console.warn('Firestore showcase listener error:', err);
    });
    return () => unsubscribe();
  }, []);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Add New Waste Listing
  const addListing = async (newListingData) => {
    const docData = {
      ...newListingData,
      status: 'active',
      createdAt: serverTimestamp()
    };
    const docRef = await addDoc(collection(db, 'listings'), docData);
    showToast('🎉 Waste item posted successfully!');
    return {
      id: docRef.id,
      ...newListingData,
      status: 'active',
      createdAt: new Date().toISOString()
    };
  };

  // Request Pickup with an Artisan
  const requestPickup = async ({ match, listingId, pickupDate, notes }) => {
    const pointsOfferNum = parseInt(match.pointsOffer ? match.pointsOffer.toString().replace(/[^0-9]/g, '') : '', 10) || 100;
    
    const newReqData = {
      listingId: listingId || null,
      artisanId: match.id,
      artisanName: match.name,
      material: match.neededMaterial,
      location: match.distance || match.location || '',
      pickupDate: pickupDate || 'Scheduled within 24-48 hours',
      notes: notes || '',
      status: 'requested',
      pointsOffer: pointsOfferNum,
      requestedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'pickups'), newReqData);

    // Update listing status if linked
    if (listingId) {
      await updateDoc(doc(db, 'listings', listingId), {
        status: 'matched',
        matchedArtisan: match.name
      });
    }

    showToast(`🚚 Pickup requested from ${match.name}!`);
    return {
      id: docRef.id,
      ...newReqData,
      requestedAt: new Date().toISOString()
    };
  };

  // Confirm Pickup Hand-off Complete (Collect EcoPoints)
  const completePickup = async (requestId) => {
    const target = pickupRequests.find(r => r.id === requestId);
    if (!target) return;

    if (target.status === 'completed') {
      showToast('This pickup has already been completed.', 'info');
      return;
    }

    // Mark request as completed
    await updateDoc(doc(db, 'pickups', requestId), {
      status: 'completed',
      completedAt: serverTimestamp()
    });

    // Award EcoPoints
    const pointsAwarded = target.pointsOffer || 150;
    setEcoPoints(prev => prev + pointsAwarded);

    // Update linked listing status
    if (target.listingId) {
      await updateDoc(doc(db, 'listings', target.listingId), {
        status: 'completed'
      });
    }

    showToast(`🌟 Hand-off complete! +${pointsAwarded} EcoPoints added to your balance!`, 'success');
  };

  // Redeem Reward
  const redeemReward = (reward) => {
    if (ecoPoints < reward.cost) {
      showToast(`⚠️ Insufficient EcoPoints. You need ${reward.cost - ecoPoints} more points.`, 'warning');
      return false;
    }

    setEcoPoints(prev => prev - reward.cost);
    showToast(`🎁 Reward claimed: ${reward.title}! Voucher Code: ${reward.voucherCode}`, 'success');
    return true;
  };

  // Add New Showcase Story
  const addShowcaseStory = async (story) => {
    const newStoryData = {
      bgGradient: 'linear-gradient(135deg, #e0f2fe, #eaf4ed)',
      icon: '✨',
      pointsEarned: `+${story.points || 150} EcoPoints`,
      ...story,
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'showcase'), newStoryData);
    showToast('🎨 Upcycling story added to community showcase!', 'success');
    return {
      id: docRef.id,
      ...newStoryData,
      createdAt: new Date().toISOString()
    };
  };

  return (
    <AppContext.Provider value={{
      ecoPoints,
      userListings,
      pickupRequests,
      showcaseList,
      toasts,
      isRewardsOpen,
      setIsRewardsOpen,
      isAiModalOpen,
      setIsAiModalOpen,
      showToast,
      removeToast,
      addListing,
      requestPickup,
      completePickup,
      redeemReward,
      addShowcaseStory
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

