import React from 'react';

export default function ShowcaseCard({ item, index = 0 }) {
  // Pre-calculated rotation angles for authentic scrapbook feel
  const rotations = [-2.8, 3.2, -1.5, 2.4, -3.1, 1.8, -2.2, 3.5];
  const rotation = item.rotation || rotations[index % rotations.length];

  // Alternating between pushpin 📌 and washi tape 🎗️ top decoration
  const isWashiTape = index % 2 === 1;

  return (
    <div 
      className="polaroid-card" 
      style={{ 
        transform: `rotate(${rotation}deg)`,
        margin: '0.75rem 0'
      }}
    >
      {/* Top Pin / Washi Tape Accent */}
      {isWashiTape ? (
        <div className="washi-tape" title="Washi Tape" />
      ) : (
        <div className="pushpin" title="Pushpin">
          📌
        </div>
      )}

      {/* Inner Photo Window / Frame */}
      <div className="polaroid-photo-frame" style={{
        height: '210px',
        background: item.bgGradient || 'linear-gradient(135deg, #e0f2fe, #eaf4ed)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '1.25rem',
        position: 'relative'
      }}>
        {/* Points Badge */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(28, 56, 41, 0.85)',
          color: '#84CC16',
          border: '1px solid #84CC16',
          padding: '0.25rem 0.65rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.8rem',
          fontWeight: '700',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          fontFamily: 'var(--font-body)'
        }}>
          🏆 {item.pointsEarned || '+150 Pts'}
        </div>

        {/* Before Item */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>🗑️</div>
          <span style={{ 
            fontSize: '0.8rem', 
            color: '#37474F', 
            fontWeight: '700',
            background: 'rgba(255,255,255,0.85)',
            padding: '0.15rem 0.5rem',
            borderRadius: '4px'
          }}>
            Before
          </span>
        </div>

        {/* Arrow */}
        <div style={{ 
          fontSize: '1.75rem', 
          color: 'var(--primary-forest)', 
          fontWeight: '800',
          textShadow: '0 1px 2px rgba(255,255,255,0.8)'
        }}>
          ➔
        </div>

        {/* After Item */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>{item.icon || '✨'}</div>
          <span style={{ 
            fontSize: '0.8rem', 
            color: 'var(--primary-forest)', 
            fontWeight: '700',
            background: 'rgba(255,255,255,0.9)',
            padding: '0.15rem 0.5rem',
            borderRadius: '4px'
          }}>
            After
          </span>
        </div>
      </div>

      {/* Classic Bottom Polaroid Caption Area (Handwritten Cursive) */}
      <div style={{ paddingTop: '1.25rem', paddingBottom: '0.25rem' }}>
        <h3 className="font-handwritten" style={{ 
          fontSize: '1.75rem', 
          color: '#1C2421', 
          lineHeight: '1.2',
          marginBottom: '0.25rem' 
        }}>
          {item.title}
        </h3>

        {/* Handwritten Transformation Line */}
        <div className="font-handwritten" style={{ 
          fontSize: '1.35rem', 
          color: 'var(--accent-terracotta)',
          marginBottom: '0.65rem',
          fontWeight: '600'
        }}>
          "{item.beforeText} ➔ {item.afterText}"
        </div>

        {/* Artisan Tag */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.4rem', 
          fontSize: '0.85rem', 
          color: 'var(--text-secondary)',
          marginBottom: '0.65rem'
        }}>
          <span>🛠️</span>
          <span>Crafted by <strong>{item.artisan}</strong></span>
        </div>

        {/* Personal Handwritten Quote Story */}
        <p className="font-handwritten" style={{ 
          fontSize: '1.3rem', 
          color: '#4D5C54', 
          lineHeight: '1.35',
          fontStyle: 'italic',
          background: 'rgba(250, 247, 242, 0.6)',
          padding: '0.6rem 0.85rem',
          borderRadius: '6px',
          borderLeft: '3px solid var(--primary-leaf)'
        }}>
          "{item.caption}"
        </p>
      </div>
    </div>
  );
}
