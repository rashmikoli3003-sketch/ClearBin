import React from 'react';

/**
 * PaperClip SVG Fastener Component
 */
export function PaperClip({ color = '#A0AAB2', size = 38, style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, position: 'relative', zIndex: 12, ...style }}>
      <svg width={size} height={size * 1.8} viewBox="0 0 32 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 18V44C10 48.4183 13.5817 52 18 52C22.4183 52 26 48.4183 26 44V12C26 6.47715 21.5228 2 16 2C10.4772 2 6 6.47715 6 12V46"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.25))' }}
        />
      </svg>
    </div>
  );
}

/**
 * PushPin SVG Fastener Component
 */
export function PushPin({ color = '#C85A32', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, position: 'relative', zIndex: 15, ...style }}>
      <svg width="28" height="36" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="14" r="10" fill={color} style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.3))' }} />
        <ellipse cx="12" cy="10" rx="3" ry="2" fill="#FFFFFF" opacity="0.6" />
        <path d="M15 24L15 38" stroke="#717D8A" strokeWidth="3" strokeLinecap="round" />
        <polygon points="10,24 20,24 16,14 14,14" fill={color} />
      </svg>
    </div>
  );
}

/**
 * MaskingTape Strip Overlay
 */
export function MaskingTape({ width = '110px', height = '32px', color = 'rgba(235, 222, 198, 0.75)', rotate = '-3deg', style = {} }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        height,
        backgroundColor: color,
        transform: `rotate(${rotate})`,
        borderRadius: '2px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        borderLeft: '2px dashed rgba(180, 160, 130, 0.5)',
        borderRight: '2px dashed rgba(180, 160, 130, 0.5)',
        backdropFilter: 'blur(2px)',
        zIndex: 10,
        pointerEvents: 'none',
        ...style
      }}
    />
  );
}

/**
 * WashiTape Strip with Pattern
 */
export function WashiTape({ width = '120px', height = '34px', pattern = 'dots', rotate = '2deg', style = {} }) {
  const bgStyle = pattern === 'dots' 
    ? 'radial-gradient(#C85A32 15%, transparent 16%), radial-gradient(#245C48 15%, transparent 16%)'
    : 'repeating-linear-gradient(45deg, rgba(200,90,50,0.3), rgba(200,90,50,0.3) 10px, rgba(36,92,72,0.3) 10px, rgba(36,92,72,0.3) 20px)';

  return (
    <div
      aria-hidden="true"
      style={{
        width,
        height,
        background: `rgba(245, 235, 215, 0.85)`,
        backgroundImage: bgStyle,
        backgroundSize: pattern === 'dots' ? '12px 12px' : 'auto',
        backgroundPosition: '0 0, 6px 6px',
        transform: `rotate(${rotate})`,
        borderLeft: '3px dashed rgba(0,0,0,0.15)',
        borderRight: '3px dashed rgba(0,0,0,0.15)',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(2px)',
        zIndex: 11,
        pointerEvents: 'none',
        ...style
      }}
    />
  );
}
