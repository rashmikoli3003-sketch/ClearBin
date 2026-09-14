import React from 'react';
import { PaperClip, PushPin, MaskingTape } from './Fasteners';

/**
 * Reusable Physical Sticky Note Component
 * Supports note colors: 'yellow' | 'mint' | 'rose' | 'kraft'
 */
export function StickyNote({
  color = 'yellow',
  rotate = '-2deg',
  fastener = 'tape', // 'tape' | 'pin' | 'clip' | 'none'
  title = '',
  style = {},
  children,
  className = ''
}) {
  const getColorStyles = () => {
    switch (color) {
      case 'mint':
        return { bg: '#D4EAD8', text: '#173F35', border: '#B5C985' };
      case 'rose':
        return { bg: '#F8D7DA', text: '#5A2D2D', border: '#D88373' };
      case 'kraft':
        return { bg: '#E7D8BE', text: '#173F35', border: '#C89F70' };
      case 'yellow':
      default:
        return { bg: '#FFF3CD', text: '#383D41', border: '#FFEBAA' };
    }
  };

  const scheme = getColorStyles();

  return (
    <div
      className={`sticky-note-card ${className}`}
      style={{
        background: scheme.bg,
        color: scheme.text,
        border: `1px solid ${scheme.border}`,
        borderRadius: '3px',
        padding: '1.5rem',
        transform: `rotate(${rotate})`,
        boxShadow: '0 8px 22px rgba(23, 63, 53, 0.18)',
        position: 'relative',
        transition: 'transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.25s ease',
        ...style
      }}
    >
      {/* Fastener Placement */}
      {fastener === 'tape' && (
        <MaskingTape
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-1deg)',
            width: '90px',
            height: '26px'
          }}
        />
      )}
      {fastener === 'pin' && (
        <PushPin
          style={{
            position: 'absolute',
            top: '-16px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      )}
      {fastener === 'clip' && (
        <PaperClip
          style={{
            position: 'absolute',
            top: '-18px',
            right: '18px'
          }}
        />
      )}

      {title && (
        <h4
          className="font-handwritten"
          style={{
            fontSize: '1.75rem',
            marginBottom: '0.4rem',
            color: scheme.text,
            lineHeight: 1.1
          }}
        >
          {title}
        </h4>
      )}

      {children}
    </div>
  );
}
