import React from 'react';

/**
 * Reusable Physical Paper Sheet Component
 * Supports paper variants: 'parchment' | 'kraft' | 'notebook' | 'green' | 'dark'
 */
export function PaperSheet({
  variant = 'parchment',
  rotate = '0deg',
  shadow = 'medium',
  className = '',
  style = {},
  children,
  ...props
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'kraft':
        return {
          background: '#C89F70',
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(0, 0, 0, 0.08) 0%, transparent 20%),
            linear-gradient(135deg, #C89F70 0%, #BA8E5F 100%)
          `,
          color: '#173F35',
          border: '1px dashed rgba(23, 63, 53, 0.3)'
        };
      case 'notebook':
        return {
          background: '#FFFDF7',
          backgroundImage: 'repeating-linear-gradient(#FFFDF7, #FFFDF7 27px, #E7D8BE 28px)',
          color: '#173F35',
          border: '1px solid #E7D8BE',
          borderLeft: '3px double #C85A32'
        };
      case 'green':
        return {
          background: '#245C48',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(120, 155, 98, 0.15) 0%, transparent 60%)',
          color: '#FFFDF7',
          border: '1px solid rgba(255, 253, 247, 0.2)'
        };
      case 'dark':
        return {
          background: '#173F35',
          color: '#F5F0E6',
          border: '1px solid rgba(245, 240, 230, 0.15)'
        };
      case 'parchment':
      default:
        return {
          background: '#F5F0E6',
          backgroundImage: 'linear-gradient(135deg, #F5F0E6 0%, #E7D8BE 100%)',
          color: '#173F35',
          border: '1px solid #E7D8BE'
        };
    }
  };

  const getShadowStyle = () => {
    switch (shadow) {
      case 'flat':
        return '0 2px 6px rgba(23, 63, 53, 0.1)';
      case 'deep':
        return '0 16px 38px rgba(23, 63, 53, 0.28), 0 4px 10px rgba(0, 0, 0, 0.15)';
      case 'medium':
      default:
        return '0 10px 28px rgba(23, 63, 53, 0.2), 0 2px 6px rgba(0, 0, 0, 0.08)';
    }
  };

  return (
    <div
      className={`paper-sheet ${className}`}
      style={{
        ...getVariantStyles(),
        transform: `rotate(${rotate})`,
        boxShadow: getShadowStyle(),
        borderRadius: '6px',
        padding: '2rem',
        position: 'relative',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
        willChange: 'transform',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
