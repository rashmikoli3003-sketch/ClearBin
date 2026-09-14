import React from 'react';

/**
 * Hand-Drawn Glass Bottle Waste Illustration SVG
 */
export function GlassBottleWaste({ size = 70, rotate = '-8deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, filter: 'drop-shadow(2px 6px 10px rgba(23,63,53,0.25))', ...style }}>
      <svg width={size} height={size * 1.5} viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cork Cap */}
        <rect x="23" y="4" width="14" height="10" rx="2" fill="#C89F70" stroke="#7A5A35" strokeWidth="2" />
        {/* Bottle Neck */}
        <path d="M22 14 L22 30 C22 35 12 45 12 55 L12 88 C12 94 18 96 30 96 C42 96 48 94 48 88 L48 55 C48 45 38 35 38 30 L38 14 Z" fill="#789B62" fillOpacity="0.4" stroke="#245C48" strokeWidth="3.5" strokeLinejoin="round" />
        {/* Paper Label */}
        <rect x="16" y="58" width="28" height="22" rx="2" fill="#FFFDF7" stroke="#D8C8A8" strokeWidth="2" />
        <line x1="20" y1="65" x2="38" y2="65" stroke="#C85A32" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="72" x2="34" y2="72" stroke="#245C48" strokeWidth="2" strokeLinecap="round" />
        {/* Glass Reflection lines */}
        <path d="M18 42 C20 38 24 34 26 32" stroke="#FFFDF7" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Plastic Bottle Waste Illustration SVG
 */
export function PlasticBottleWaste({ size = 65, rotate = '12deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, filter: 'drop-shadow(2px 6px 10px rgba(23,63,53,0.25))', ...style }}>
      <svg width={size} height={size * 1.5} viewBox="0 0 60 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Plastic Blue Cap */}
        <rect x="22" y="2" width="16" height="10" rx="3" fill="#6B8E9C" stroke="#3D5A68" strokeWidth="2" />
        {/* Bottle Body */}
        <path d="M22 12 L22 24 L14 36 L14 82 C14 88 20 92 30 92 C40 92 46 88 46 82 L46 36 L38 24 L38 12 Z" fill="#B5C985" fillOpacity="0.35" stroke="#4F7F4A" strokeWidth="3" strokeLinejoin="round" />
        {/* Recycling Ripples */}
        <path d="M14 50 Q 30 54 46 50" stroke="#4F7F4A" strokeWidth="2" fill="none" />
        <path d="M14 62 Q 30 66 46 62" stroke="#4F7F4A" strokeWidth="2" fill="none" />
        {/* Hand-drawn Eco Stamp */}
        <circle cx="30" cy="74" r="7" fill="#4F7F4A" fillOpacity="0.2" stroke="#245C48" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Cardboard Box Illustration SVG
 */
export function CardboardWaste({ size = 75, rotate = '-5deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, filter: 'drop-shadow(3px 8px 12px rgba(23,63,53,0.25))', ...style }}>
      <svg width={size} height={size * 0.9} viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,25 45,10 80,25 45,40" fill="#E7D8BE" stroke="#7A5A35" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="10,25 45,40 45,72 10,55" fill="#C89F70" stroke="#7A5A35" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="45,40 80,25 80,55 45,72" fill="#BA8E5F" stroke="#7A5A35" strokeWidth="3" strokeLinejoin="round" />
        {/* Tape Strip */}
        <polygon points="35,14 55,20 50,42 30,36" fill="rgba(235, 222, 198, 0.7)" stroke="#A68860" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Aluminum Can Waste Illustration SVG
 */
export function CanWaste({ size = 55, rotate = '6deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, filter: 'drop-shadow(2px 5px 8px rgba(0,0,0,0.2))', ...style }}>
      <svg width={size} height={size * 1.3} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="25" cy="10" rx="20" ry="6" fill="#D8C8A8" stroke="#6B8E9C" strokeWidth="3" />
        <path d="M5 10 L5 60 C5 66 14 70 25 70 C36 70 45 66 45 60 L45 10" fill="#D9A036" fillOpacity="0.4" stroke="#6B8E9C" strokeWidth="3" />
        <ellipse cx="25" cy="10" rx="10" ry="3" fill="#6B8E9C" fillOpacity="0.5" />
        <line x1="5" y1="35" x2="45" y2="35" stroke="#C85A32" strokeWidth="2.5" strokeDasharray="4 2" />
      </svg>
    </div>
  );
}

/**
 * Hand-Drawn Banana Peel Organic Waste SVG
 */
export function BananaWaste({ size = 65, rotate = '-18deg', style = {} }) {
  return (
    <div style={{ display: 'inline-block', lineHeight: 0, transform: `rotate(${rotate})`, filter: 'drop-shadow(2px 6px 10px rgba(0,0,0,0.2))', ...style }}>
      <svg width={size} height={size} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 10 C45 20 60 30 65 50 C50 48 38 42 35 30 C30 45 15 52 5 50 C15 35 25 20 35 10 Z" fill="#D9A036" stroke="#7A5A35" strokeWidth="3" strokeLinejoin="round" />
        <path d="M35 10 C38 25 38 45 35 65" stroke="#7A5A35" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="35" cy="10" r="3" fill="#5A3A15" />
      </svg>
    </div>
  );
}
