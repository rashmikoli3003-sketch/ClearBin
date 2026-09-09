import React, { createContext, useContext, useState, useEffect } from 'react';
import { SHOWCASE_ITEMS } from '../data/mockData';

const AppContext = createContext();

const INITIAL_ECO_POINTS = 250;

const DEFAULT_USER_LISTINGS = [
  {
    id: 'listing-demo-1',
    category: 'plastic',
    categoryLabel: 'Plastic (PET, HDPE, Bottles)',
    quantity: '12 clean PET bottles (~500g)',
    location: 'Kothrud, Block 4, Pune',
    notes: 'Rinsed, labels removed, dry and ready for upcycling.',
    photoUrl: null,
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'matched', // 'active' | 'matched' | 'completed'
    matchedArtisan: 'GreenCraft Upcycling Studio'
  }
];

const DEFAULT_PICKUP_REQUESTS = [
  {
    id: 'req-demo-1',
    listingId: 'listing-demo-1',
    artisanId: 1,
    artisanName: 'GreenCraft Upcycling Studio',
    material: 'Clean PET Plastic Bottles',
    location: 'Kothrud, Block 4, Pune',
    pickupDate: 'Tomorrow, 10:00 AM - 12:00 PM',
    status: 'in_progress', // 'requested' | 'confirmed' | 'in_progress' | 'completed'
    pointsOffer: 120,
    requestedAt: new Date(Date.now() - 3600000 * 12).toISOString()
  }
];

export function AppProvider({ children }) {
  // 1. EcoPoints state
  const [ecoPoints, setEcoPoints] = useState(() => {
    const saved = localStorage.getItem('clearbin_ecopoints');
    return saved ? parseInt(saved, 10) : INITIAL_ECO_POINTS;
  });

  // 2. User Listings state
  const [userListings, setUserListings] = useState(() => {
    const saved = localStorage.getItem('clearbin_listings');
    return saved ? JSON.parse(saved) : DEFAULT_USER_LISTINGS;
  });

  // 3. Pickup Requests state
  const [pickupRequests, setPickupRequests] = useState(() => {
    const saved = localStorage.getItem('clearbin_pickups');
    return saved ? JSON.parse(saved) : DEFAULT_PICKUP_REQUESTS;
  });

  // 4. Showcase Items state
  const [showcaseList, setShowcaseList] = useState(() => {
    const saved = localStorage.getItem('clearbin_showcase');
    return saved ? JSON.parse(saved) : SHOWCASE_ITEMS;
  });

  // 5. Toast Notifications state
  const [toasts, setToasts] = useState([]);

  // 6. Rewards Modal Open state
  const [isRewardsOpen, setIsRewardsOpen] = useState(false);

  // 7. EcoCraft AI Modal Open state
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('clearbin_ecopoints', ecoPoints.toString());
  }, [ecoPoints]);

  useEffect(() => {
    localStorage.setItem('clearbin_listings', JSON.stringify(userListings));
  }, [userListings]);

  useEffect(() => {
    localStorage.setItem('clearbin_pickups', JSON.stringify(pickupRequests));
  }, [pickupRequests]);

  useEffect(() => {
    localStorage.setItem('clearbin_showcase', JSON.stringify(showcaseList));
  }, [showcaseList]);

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
  const addListing = (newListingData) => {
    const newListing = {
      id: `listing-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'active',
      ...newListingData
    };

    setUserListings(prev => [newListing, ...prev]);
    showToast('🎉 Waste item posted successfully!');
    return newListing;
  };

  // Request Pickup with an Artisan
  const requestPickup = ({ match, listingId, pickupDate, notes }) => {
    const pointsOfferNum = parseInt(match.pointsOffer.replace(/[^0-9]/g, ''), 10) || 100;
    
    const newReq = {
      id: `req-${Date.now()}`,
      listingId: listingId || null,
      artisanId: match.id,
      artisanName: match.name,
      material: match.neededMaterial,
      location: match.distance,
      pickupDate: pickupDate || 'Scheduled within 24-48 hours',
      notes: notes || '',
      status: 'requested', // 'requested' -> 'confirmed' -> 'completed'
      pointsOffer: pointsOfferNum,
      requestedAt: new Date().toISOString()
    };

    setPickupRequests(prev => [newReq, ...prev]);

    // Update listing status if linked
    if (listingId) {
      setUserListings(prev => prev.map(item => 
        item.id === listingId ? { ...item, status: 'matched', matchedArtisan: match.name } : item
      ));
    }

    showToast(`🚚 Pickup requested from ${match.name}!`);
    return newReq;
  };

  // Confirm Pickup Hand-off Complete (Collect EcoPoints)
  const completePickup = (requestId) => {
    const target = pickupRequests.find(r => r.id === requestId);
    if (!target) return;

    if (target.status === 'completed') {
      showToast('This pickup has already been completed.', 'info');
      return;
    }

    // Mark request as completed
    setPickupRequests(prev => prev.map(req => 
      req.id === requestId ? { ...req, status: 'completed', completedAt: new Date().toISOString() } : req
    ));

    // Award EcoPoints
    const pointsAwarded = target.pointsOffer || 150;
    setEcoPoints(prev => prev + pointsAwarded);

    // Update linked listing status
    if (target.listingId) {
      setUserListings(prev => prev.map(item => 
        item.id === target.listingId ? { ...item, status: 'completed' } : item
      ));
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
  const addShowcaseStory = (story) => {
    const newStory = {
      id: Date.now(),
      bgGradient: 'linear-gradient(135deg, #e0f2fe, #eaf4ed)',
      icon: '✨',
      pointsEarned: `+${story.points || 150} EcoPoints`,
      ...story
    };

    setShowcaseList(prev => [newStory, ...prev]);
    showToast('🎨 Upcycling story added to community showcase!', 'success');
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
