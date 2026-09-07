import React from 'react';

export default function ShowcaseCard({ item }) {
  return (
    <div className="card showcase-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Visual Placeholder Banner */}
      <div style={{
        height: '180px',
        background: item.bgGradient,
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '1.5rem',
        position: 'relative',
        marginBottom: '1.25rem',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Points Badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(16, 185, 129, 0.25)',
          color: 'var(--primary-light)',
          border: '1px solid rgba(16, 185, 129, 0.5)',
          backdropFilter: 'blur(8px)',
          padding: '0.35rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.8rem',
          fontWeight: '700'
        }}>
          🏆 {item.pointsEarned}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🗑️</div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Before</span>
        </div>

        <div style={{ fontSize: '1.75rem', color: 'var(--primary-light)', fontWeight: '800' }}>
          ➔
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>{item.icon}</div>
          <span style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: '700' }}>After</span>
        </div>
      </div>

      {/* Card Content */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        {item.title}
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginBottom: '0.75rem'
      }}>
        <span>🛠️</span>
        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.artisan}</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.5rem',
        marginBottom: '1rem',
        fontSize: '0.8rem'
      }}>
        <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>
          <strong>Was:</strong> {item.beforeText}
        </div>
        <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>
          <strong>Became:</strong> {item.afterText}
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
        {item.caption}
      </p>
    </div>
  );
}
