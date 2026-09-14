import React from 'react';

/**
 * Hand-Drawn Recycling Arrow SVG Doodle
 */
export function RecyclingDoodle({ color = '#245C48', size = 52, rotate = '0deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, ...style }}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 8 C18 8 10 18 10 30 C10 36 12 42 16 46" stroke={color} strokeWidth="3" strokeLinecap="round" strokeDasharray="3 1" />
        <path d="M22 6 L30 8 L28 16" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        <path d="M46 16 C50 22 51 30 48 38 C45 46 38 52 30 52" stroke={color} strokeWidth="3" strokeLinecap="round" strokeDasharray="3 1" />
        <path d="M48 24 L46 16 L38 18" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Leaf SVG Doodle
 */
export function LeafDoodle({ color = '#4F7F4A', size = 42, rotate = '-15deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, ...style }}>
      <svg width={size} height={size * 1.2} viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 48 C20 48 38 35 36 18 C34 4 20 2 20 2 C20 2 6 4 4 18 C2 35 20 48 20 48 Z" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 48 L20 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 32 L28 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 24 L12 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Arrow Pointer Doodle
 */
export function ArrowDoodle({ color = '#C85A32', size = 64, rotate = '5deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, ...style }}>
      <svg width={size} height={size * 0.4} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 25 C30 15, 60 30, 92 18" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M78 8 L95 18 L82 32" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Sparkle / Star Doodle
 */
export function SparkleDoodle({ color = '#D9A036', size = 32, style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, ...style }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2 L23 15 L38 20 L23 25 L20 38 L17 25 L2 20 L17 15 Z" fill={color} opacity="0.85" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Underline / Scribble Line
 */
export function UnderlineDoodle({ color = '#C85A32', width = 140, style = {} }) {
  return (
    <div style={{ display: 'block', lineHeight: 0, marginTop: '2px', ...style }}>
      <svg width={width} height="12" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10 C40 2, 90 14, 158 6" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
