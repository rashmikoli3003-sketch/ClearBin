import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { MATCHES } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function Matches() {
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

  const handleConfirmPickupRequest = (e) => {
    e.preventDefault();
    if (!selectedMatch) return;

    requestPickup({
      match: selectedMatch,
      listingId: selectedListingId,
      pickupDate,
      notes
    });

    setSelectedMatch(null);
    setActiveTab('pickups');
  };

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div className="section-header">
        <span className="section-tag">Circular Directory & Handoffs</span>
        <h1 className="section-title">Nearby Eco-Matches</h1>
        <p className="section-desc">
          Connect your household directly with local artisans, micro-entrepreneurs, and green NGOs within pickup range.
        </p>
      </div>

      {/* Main Tabs Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '1rem'
      }}>
        <button
          onClick={() => setActiveTab('directory')}
          className={`btn ${activeTab === 'directory' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}
        >
          🔍 Browse Upcyclers Directory ({MATCHES.length})
        </button>

        <button
          onClick={() => setActiveTab('pickups')}
          className={`btn ${activeTab === 'pickups' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem', position: 'relative' }}
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
              width: '20px',
              height: '20px',
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
          <div style={{
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
                    padding: '0.45rem 0.9rem',
                    fontSize: '0.85rem',
                    textTransform: 'capitalize'
                  }}
                >
                  {cat === 'all' ? '✨ All' : 
                   cat === 'plastic' ? '♻️ Plastic' :
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
                  padding: '0.55rem 1rem 0.55rem 2.2rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--text-primary)',
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
            gap: '1.75rem'
          }}>
            {filteredMatches.map(match => (
              <MatchCard 
                key={match.id} 
                match={match} 
                onRequestPickup={handleOpenPickupModal}
              />
            ))}
          </div>

          {filteredMatches.length === 0 && (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              No upcyclers found matching your search. Try resetting filters.
            </div>
          )}
        </>
      )}

      {/* TAB 2: MY ACTIVE PICKUPS */}
      {activeTab === 'pickups' && (
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {pickupRequests.length === 0 ? (
            <div className="card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>No Active Pickups Scheduled</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Browse our upcycler directory or post your waste to schedule doorstep pickups and earn EcoPoints.
              </p>
              <button onClick={() => setActiveTab('directory')} className="btn btn-primary">
                Browse Upcycler Directory ➔
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {pickupRequests.map(req => (
                <div
                  key={req.id}
                  className="card"
                  style={{
                    padding: '1.75rem',
                    border: req.status === 'completed' 
                      ? '1px solid rgba(16, 185, 129, 0.3)' 
                      : '1px solid var(--border-glow)'
                  }}
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
                      <span className="section-tag" style={{ marginBottom: '0.2rem' }}>
                        ID: {req.id}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
                        Pickup with {req.artisanName}
                      </h3>
                    </div>

                    <span style={{
                      background: req.status === 'completed' 
                        ? 'rgba(16, 185, 129, 0.15)' 
                        : 'rgba(234, 88, 12, 0.15)',
                      color: req.status === 'completed' ? 'var(--primary-light)' : 'var(--accent-terracotta)',
                      border: `1px solid ${req.status === 'completed' ? 'var(--primary-emerald)' : 'var(--accent-terracotta)'}`,
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: '700'
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
                    background: 'var(--bg-surface-elevated)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.25rem',
                    fontSize: '0.9rem'
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.775rem' }}>Material Needed</span>
                      <strong>{req.material}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.775rem' }}>Scheduled Time</span>
                      <strong>📅 {req.pickupDate}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.775rem' }}>Reward Offer</span>
                      <strong style={{ color: 'var(--primary-light)' }}>🌟 +{req.pointsOffer} EcoPoints</strong>
                    </div>
                  </div>

                  {req.notes && (
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
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
                      <span style={{ fontSize: '0.875rem', color: 'var(--primary-light)', fontWeight: '700' }}>
                        🌟 +{req.pointsOffer} EcoPoints Credited to Balance
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
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="card" style={{ maxWidth: '520px', width: '100%', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.4rem' }}>Schedule Pickup Request</h3>
              <button 
                onClick={() => setSelectedMatch(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleConfirmPickupRequest}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                You are scheduling a handoff with <strong>{selectedMatch.name}</strong>.
              </p>

              {/* Select Active Listing to Offer */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                  Select Your Waste Listing to Offer:
                </label>
                <select
                  value={selectedListingId}
                  onChange={(e) => setSelectedListingId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
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
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
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
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              {/* Instructions */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
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
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
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
