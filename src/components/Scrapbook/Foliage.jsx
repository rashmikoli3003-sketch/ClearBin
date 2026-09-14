import React from 'react';

/**
 * Botanical Leaf / Foliage Cut-out Component
 */
export function BotanicalFoliage({ type = 'olive', size = 80, rotate = '0deg', color = '#2E7D32', style = {} }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'inline-block',
        lineHeight: 0,
        transform: `rotate(${rotate})`,
        pointerEvents: 'none',
        zIndex: 8,
        filter: 'drop-shadow(2px 6px 12px rgba(0,0,0,0.22))',
        ...style
      }}
    >
      {type === 'olive' ? (
        <svg width={size} height={size * 1.3} viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 120 C50 120, 48 70, 20 40 C10 25, 25 5, 50 20 C75 5, 90 25, 80 40 C52 70, 50 120, 50 120 Z" fill={color} opacity="0.9" />
          <path d="M50 120 L50 20" stroke="#9DBE9B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 80 C40 70, 30 65, 25 60" stroke="#9DBE9B" strokeWidth="1.8" />
          <path d="M50 65 C60 55, 70 50, 75 45" stroke="#9DBE9B" strokeWidth="1.8" />
          <path d="M50 45 C38 35, 32 30, 28 25" stroke="#9DBE9B" strokeWidth="1.8" />
        </svg>
      ) : (
        <svg width={size} height={size * 1.2} viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 130 C60 130, 20 90, 10 50 C5 30, 25 10, 60 30 C95 10, 115 30, 110 50 C100 90, 60 130, 60 130 Z" fill={color} opacity="0.88" />
          <path d="M60 130 L60 30" stroke="#1B3F2E" strokeWidth="3" strokeLinecap="round" />
          <circle cx="45" cy="40" r="4" fill="#9DBE9B" />
          <circle cx="75" cy="55" r="4" fill="#9DBE9B" />
        </svg>
      )}
    </div>
  );
}
