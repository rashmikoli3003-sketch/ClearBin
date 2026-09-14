import React from 'react';

export default function MatchCard({ match, onRequestPickup }) {
  return (
    <div className="card-parchment match-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: match.avatarBg || 'var(--accent-terracotta)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            flexShrink: 0
          }}>
            {match.category === 'plastic' ? '♻️' :
             match.category === 'glass' ? '🍾' :
             match.category === 'fabric' ? '🧵' : '💻'}
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '0.15rem', color: 'var(--bg-main)' }}>
              {match.name}
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary-parchment)' }}>
              {match.type} • ⭐ {match.rating}
            </span>
          </div>
        </div>

        <span className="badge badge-terracotta">
          {match.categoryLabel}
        </span>
      </div>

      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-parchment)',
        borderRadius: 'var(--radius-md)',
        padding: '0.85rem 1rem',
        marginBottom: '1rem',
        flex: 1
      }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--accent-terracotta)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
          Materials Needed
        </div>
        <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--bg-main)', marginBottom: '0.5rem' }}>
          {match.neededMaterial}
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary-parchment)' }}>
          {match.purpose}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary-parchment)', marginBottom: '1.25rem' }}>
        <span>📍 {match.distance}</span>
        <span>🚚 {match.pickupType}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
        <button 
          onClick={() => onRequestPickup(match)} 
          className="btn btn-primary btn-full"
          style={{ padding: '0.65rem 1rem', fontSize: '0.925rem' }}
        >
          Request Pickup
        </button>
      </div>
    </div>
  );
}
