import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { MATCHES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Matches() {
  useScrollReveal();
  const { userListings, pickupRequests, requestPickup, completePickup } = useApp();

  const [activeTab, setActiveTab] = useState('directory'); // 'directory' | 'pickups'
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal State
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [selectedListingId, setSelectedListingId] = useState('');
  const [pickupDate, setPickupDate] = useState('Tomorrow, 10:00 AM - 1:00 PM');
  const [notes, setNotes] = useState('');

  const filteredMatches = MATCHES.filter(m => {
    const matchesCat = filterCategory === 'all' || m.category === filterCategory;
    const matchesSearch = searchQuery === '' || 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.neededMaterial.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenPickupModal = (match) => {
    setSelectedMatch(match);
    // Pre-select first matching listing if available
    const matchingListing = userListings.find(l => l.category === match.category);
    setSelectedListingId(matchingListing ? matchingListing.id : (userListings[0]?.id || ''));
  };

  const handleConfirmPickupRequest = async (e) => {
    e.preventDefault();
    if (!selectedMatch) return;

    await requestPickup({
      match: selectedMatch,
      listingId: selectedListingId,
      pickupDate,
      notes
    });

    setSelectedMatch(null);
    setActiveTab('pickups');
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
      <div className="section-header reveal-on-scroll">
        <span className="section-tag">Circular Directory & Handoffs</span>
        <h1 className="section-title">Nearby Eco-Matches</h1>
        <p className="section-desc">
          Connect your household directly with local artisans, micro-entrepreneurs, and green NGOs within pickup range.
        </p>
      </div>

      {/* Main Tabs Header */}
      <div className="reveal-on-scroll" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '1px dashed var(--border-dark)',
        paddingBottom: '1.25rem'
      }}>
        <button
          onClick={() => setActiveTab('directory')}
          className={`btn ${activeTab === 'directory' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '0.65rem 1.65rem', fontSize: '0.95rem' }}
        >
          🔍 Browse Upcyclers Directory ({MATCHES.length})
        </button>

        <button
          onClick={() => setActiveTab('pickups')}
          className={`btn ${activeTab === 'pickups' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '0.65rem 1.65rem', fontSize: '0.95rem', position: 'relative' }}
        >
          🚚 My Active Pickups ({pickupRequests.length})
          {pickupRequests.filter(r => r.status !== 'completed').length > 0 && (
            <span style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              background: 'var(--accent-terracotta)',
              color: '#fff',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              fontSize: '0.75rem',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {pickupRequests.filter(r => r.status !== 'completed').length}
            </span>
          )}
        </button>
      </div>

      {/* TAB 1: DIRECTORY */}
      {activeTab === 'directory' && (
        <>
          {/* Controls: Search + Filter Tabs */}
          <div className="reveal-on-scroll" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            {/* Category Pill Filters */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['all', 'plastic', 'glass', 'fabric', 'ewaste'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`btn ${filterCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.85rem',
                    textTransform: 'capitalize'
                  }}
                >
                  {cat === 'all' ? '✨ All' : 
                   cat === 'plastic' ? '🌿 Plastic' :
                   cat === 'glass' ? '🍾 Glass' :
                   cat === 'fabric' ? '🧵 Fabric' : '💻 E-Waste'}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or material..."
                style={{
                  width: '100%',
                  padding: '0.6rem 1rem 0.6rem 2.2rem',
                  background: 'var(--bg-parchment)',
                  border: '1px solid var(--border-parchment)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--bg-main)',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
              <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
                🔍
              </span>
            </div>
          </div>

          {/* Matches Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {filteredMatches.map(match => (
              <div key={match.id} className="reveal-on-scroll">
                <MatchCard 
                  match={match} 
                  onRequestPickup={handleOpenPickupModal}
                />
              </div>
            ))}
          </div>

          {filteredMatches.length === 0 && (
            <div className="card-kraft reveal-on-scroll" style={{ padding: '3rem', textAlign: 'center' }}>
              No upcyclers found matching your search. Try resetting filters.
            </div>
          )}
        </>
      )}

      {/* TAB 2: MY ACTIVE PICKUPS */}
      {activeTab === 'pickups' && (
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {pickupRequests.length === 0 ? (
            <div className="card-kraft reveal-on-scroll" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#163023', fontFamily: 'var(--font-heading)' }}>
                No Active Pickups Scheduled
              </h3>
              <p style={{ color: '#2C4A38', marginBottom: '1.5rem', fontWeight: '500' }}>
                Browse our upcycler directory or post your waste to schedule doorstep pickups and earn EcoPoints.
              </p>
              <button onClick={() => setActiveTab('directory')} className="btn btn-primary">
                Browse Upcycler Directory ➔
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {pickupRequests.map(req => (
                <div
                  key={req.id}
                  className="card-parchment reveal-on-scroll"
                  style={{ padding: '2rem' }}
                >
                  {/* Status Banner Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <div>
                      <span className="badge badge-amber" style={{ marginBottom: '0.2rem' }}>
                        ID: {req.id}
                      </span>
                      <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--bg-main)', fontFamily: 'var(--font-heading)' }}>
                        Pickup with {req.artisanName}
                      </h3>
                    </div>

                    <span style={{
                      background: req.status === 'completed' ? 'rgba(77, 139, 85, 0.15)' : 'rgba(200, 90, 50, 0.15)',
                      color: req.status === 'completed' ? 'var(--primary-leaf)' : 'var(--accent-terracotta)',
                      border: `1px solid ${req.status === 'completed' ? 'var(--primary-leaf)' : 'var(--accent-terracotta)'}`,
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: '800'
                    }}>
                      {req.status === 'completed' ? '✅ Hand-off Completed' :
                       req.status === 'in_progress' ? '🚚 Pickup Scheduled' :
                       '⏳ Pending Artisan Confirmation'}
                    </span>
                  </div>

                  {/* Details Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    background: '#FFFFFF',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-parchment)',
                    marginBottom: '1.25rem',
                    fontSize: '0.9rem'
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-secondary-parchment)', display: 'block', fontSize: '0.775rem' }}>Material Needed</span>
                      <strong style={{ color: 'var(--bg-main)' }}>{req.material}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-secondary-parchment)', display: 'block', fontSize: '0.775rem' }}>Scheduled Time</span>
                      <strong style={{ color: 'var(--bg-main)' }}>📅 {req.pickupDate}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-secondary-parchment)', display: 'block', fontSize: '0.775rem' }}>Reward Offer</span>
                      <strong style={{ color: 'var(--accent-terracotta)' }}>🌟 +{req.pointsOffer} EcoPoints</strong>
                    </div>
                  </div>

                  {req.notes && (
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary-parchment)', marginBottom: '1.25rem' }}>
                      <strong>Notes:</strong> {req.notes}
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', alignItems: 'center' }}>
                    {req.status !== 'completed' ? (
                      <button
                        onClick={() => completePickup(req.id)}
                        className="btn btn-primary"
                        style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
                      >
                        ⚡ Confirm Hand-off & Collect +{req.pointsOffer} Pts
                      </button>
                    ) : (
                      <span className="badge badge-leaf bounce-badge" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                        🌟 +{req.pointsOffer} EcoPoints Credited to Balance!
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* REQUEST PICKUP MODAL DIALOG */}
      {selectedMatch && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="card-parchment" style={{ maxWidth: '520px', width: '100%', padding: '2.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--bg-main)', fontFamily: 'var(--font-heading)' }}>Schedule Pickup Request</h3>
              <button 
                onClick={() => setSelectedMatch(null)}
                style={{ background: 'none', border: 'none', color: 'var(--bg-main)', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleConfirmPickupRequest}>
              <p style={{ color: 'var(--text-secondary-parchment)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                You are scheduling a handoff with <strong>{selectedMatch.name}</strong>.
              </p>

              {/* Select Active Listing to Offer */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
                  Select Your Waste Listing to Offer:
                </label>
                <select
                  value={selectedListingId}
                  onChange={(e) => setSelectedListingId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--bg-main)',
                    fontSize: '0.9rem'
                  }}
                >
                  {userListings.length > 0 ? (
                    userListings.map(listing => (
                      <option key={listing.id} value={listing.id}>
                        {listing.categoryLabel} - {listing.quantity}
                      </option>
                    ))
                  ) : (
                    <option value="">General Household Waste Batch</option>
                  )}
                </select>
              </div>

              {/* Preferred Time */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
                  Preferred Pickup Time:
                </label>
                <input
                  type="text"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  placeholder="e.g. Tomorrow, 10:00 AM"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--bg-main)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              {/* Instructions */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
                  Doorstep / Gate Instructions:
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Leave with watchman or call upon arrival"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--bg-main)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="submit" className="btn btn-primary btn-full">
                  Confirm Pickup Request ➔
                </button>
                <button type="button" onClick={() => setSelectedMatch(null)} className="btn btn-secondary btn-full">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
