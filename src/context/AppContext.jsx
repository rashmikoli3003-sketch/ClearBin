import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection, addDoc, updateDoc, doc,
  onSnapshot, query, orderBy, serverTimestamp
} from 'firebase/firestore';

const AppContext = createContext();

const INITIAL_ECO_POINTS = 250;

export function AppProvider({ children }) {
  // EcoPoints - keeping this in localStorage for now (fine for prototype)
  const [ecoPoints, setEcoPoints] = useState(() => {
    const saved = localStorage.getItem('clearbin_ecopoints');
    return saved ? parseInt(saved, 10) : INITIAL_ECO_POINTS;
  });

  // These three now come from Firestore, not localStorage
  const [userListings, setUserListings] = useState([]);
  const [pickupRequests, setPickupRequests] = useState([]);
  const [showcaseList, setShowcaseList] = useState([]);

  const [toasts, setToasts] = useState([]);
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('clearbin_ecopoints', ecoPoints.toString());
  }, [ecoPoints]);

  // Real-time listeners - this replaces the old localStorage read
  useEffect(() => {
    const q = query(collection(db, 'listings'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setUserListings(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'pickups'), orderBy('requestedAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setPickupRequests(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'showcase'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setShowcaseList(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
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

  // Now writes to Firestore instead of local state - and is now ASYNC
  const addListing = async (newListingData) => {
    const docRef = await addDoc(collection(db, 'listings'), {
      status: 'active',
      createdAt: serverTimestamp(),
      ...newListingData
    });
    showToast('🎉 Waste item posted successfully!');
    return { id: docRef.id, ...newListingData };
  };

  const requestPickup = async ({ match, listingId, pickupDate, notes }) => {
    const pointsOfferNum = parseInt(String(match.pointsOffer).replace(/[^0-9]/g, ''), 10) || 100;

    const docRef = await addDoc(collection(db, 'pickups'), {
      listingId: listingId || null,
      artisanId: match.id,
      artisanName: match.name,
      material: match.neededMaterial,
      location: match.distance,
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
  };

  const completePickup = async (requestId) => {
    const target = pickupRequests.find(r => r.id === requestId);
    if (!target) return;
    if (target.status === 'completed') {
      showToast('This pickup has already been completed.', 'info');
      return;
    }

    await updateDoc(doc(db, 'pickups', requestId), {
      status: 'completed',
      completedAt: serverTimestamp()
    });

    const pointsAwarded = target.pointsOffer || 150;
    setEcoPoints(prev => prev + pointsAwarded);

    if (target.listingId) {
      await updateDoc(doc(db, 'listings', target.listingId), { status: 'completed' });
    }

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
    await addDoc(collection(db, 'showcase'), {
      bgGradient: 'linear-gradient(135deg, #e0f2fe, #eaf4ed)',
      icon: '✨',
      pointsEarned: `+${story.points || 150} EcoPoints`,
      createdAt: serverTimestamp(),
      ...story
    });
    showToast('🎨 Upcycling story added to community showcase!', 'success');
  };

  return (
    <AppContext.Provider value={{
      ecoPoints, userListings, pickupRequests, showcaseList, toasts,
      isRewardsOpen, setIsRewardsOpen, isAiModalOpen, setIsAiModalOpen,
      showToast, removeToast, addListing, requestPickup,
      completePickup, redeemReward, addShowcaseStory
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
