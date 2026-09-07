import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { MATCHES } from '../data/mockData';

export default function Matches() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [requestedPickup, setRequestedPickup] = useState(false);

  const filteredMatches = filterCategory === 'all' 
    ? MATCHES 
    : MATCHES.filter(m => m.category === filterCategory);

  const handleRequestPickup = (match) => {
    setSelectedMatch(match);
    setRequestedPickup(false);
  };

  const handleConfirmPickup = () => {
    setRequestedPickup(true);
  };

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div className="section-header">
        <span className="section-tag">Active Directory</span>
        <h1 className="section-title">Nearby Eco-Matches</h1>
        <p className="section-desc">
          Connecting your household directly with local artisans, micro-entrepreneurs, and green NGOs within pickup range.
        </p>
      </div>

      {/* Material Filter Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginBottom: '2.5rem'
      }}>
        {['all', 'plastic', 'glass', 'fabric', 'ewaste'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`btn ${filterCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.875rem',
              textTransform: 'capitalize'
            }}
          >
            {cat === 'all' ? '✨ All Matches' : 
             cat === 'plastic' ? '♻️ Plastic' :
             cat === 'glass' ? '🍾 Glass' :
             cat === 'fabric' ? '🧵 Fabric' : '💻 E-Waste'}
          </button>
        ))}
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
            onRequestPickup={handleRequestPickup}
          />
        ))}
      </div>

      {/* Request Pickup Modal Dialog */}
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
          <div className="card" style={{ maxWidth: '500px', width: '100%', padding: '2rem' }}>
            {!requestedPickup ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>Request Pickup</h3>
                  <button 
                    onClick={() => setSelectedMatch(null)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                  You are scheduling a pickup or dropoff handoff with <strong>{selectedMatch.name}</strong>.
                </p>

                <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  <div style={{ marginBottom: '0.35rem' }}><strong>Material:</strong> {selectedMatch.neededMaterial}</div>
                  <div style={{ marginBottom: '0.35rem' }}><strong>Distance:</strong> {selectedMatch.distance}</div>
                  <div><strong>Reward:</strong> <span style={{ color: 'var(--primary-light)' }}>{selectedMatch.pointsOffer}</span></div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button onClick={handleConfirmPickup} className="btn btn-primary btn-full">
                    Confirm Pickup Request
                  </button>
                  <button onClick={() => setSelectedMatch(null)} className="btn btn-secondary btn-full">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>✅</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Pickup Requested!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  <strong>{selectedMatch.name}</strong> has received your listing request. They will contact you shortly to confirm handoff details.
                </p>
                <button onClick={() => setSelectedMatch(null)} className="btn btn-primary btn-full">
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
