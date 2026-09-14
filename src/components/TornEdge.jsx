import React from 'react';

/**
 * Top SVG Torn Paper Edge Divider
 */
export function TornEdgeTop({ fill = '#F4ECD8', height = 40, style = {} }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0, width: '100%', marginTop: '-1px', zIndex: 5, position: 'relative', ...style }}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
      >
        <path 
          d="M0,0 L0,45 L15,10 L32,38 L50,12 L68,42 L85,15 L102,40 L120,18 L138,44 L155,10 L172,36 L190,14 L208,40 L225,12 L242,42 L260,18 L278,45 L295,10 L312,38 L330,14 L348,42 L365,15 L382,40 L400,12 L418,44 L435,10 L452,38 L470,14 L488,42 L505,15 L522,40 L540,12 L558,44 L575,10 L592,38 L610,14 L628,42 L645,15 L662,40 L680,12 L698,44 L715,10 L732,38 L750,14 L768,42 L785,15 L802,40 L820,12 L838,44 L855,10 L872,38 L890,14 L908,42 L925,15 L942,40 L960,12 L978,44 L995,10 L1012,38 L1030,14 L1048,42 L1065,15 L1082,40 L1100,12 L1118,44 L1135,10 L1152,38 L1170,14 L1188,42 L1200,15 L1200,0 Z" 
          fill={fill}
        />
      </svg>
    </div>
  );
}

/**
 * Bottom SVG Torn Paper Edge Divider
 */
export function TornEdgeBottom({ fill = '#F4ECD8', height = 40, style = {} }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0, width: '100%', marginBottom: '-1px', zIndex: 5, position: 'relative', ...style }}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
      >
        <path 
          d="M0,120 L0,75 L15,110 L32,82 L50,108 L68,78 L85,105 L102,80 L120,102 L138,76 L155,110 L172,84 L190,106 L208,80 L225,108 L242,78 L260,102 L278,75 L295,110 L312,82 L330,106 L348,78 L365,105 L382,80 L400,108 L418,76 L435,110 L452,82 L470,106 L488,78 L505,105 L522,80 L540,108 L558,76 L575,110 L592,82 L610,106 L628,78 L645,105 L662,80 L680,108 L698,76 L715,110 L732,82 L750,106 L768,78 L785,105 L802,80 L820,108 L838,76 L855,110 L872,82 L890,106 L908,78 L925,105 L942,80 L960,108 L978,76 L995,110 L1012,82 L1030,106 L1048,78 L1065,105 L1082,80 L1100,108 L1118,76 L1135,110 L1152,82 L1170,106 L1188,78 L1200,105 L1200,120 Z" 
          fill={fill}
        />
      </svg>
    </div>
  );
}
