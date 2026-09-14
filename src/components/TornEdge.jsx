import React from 'react';

/**
 * Single SVG Torn Edge Top
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
 * Single SVG Torn Edge Bottom
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

/**
 * Multi-Layered SVG Torn Paper Edge Top (Inspired by Reference Image 1: Green Layered Rips)
 * Renders 3 overlapping torn paper paths in Sage, Leaf Green, and Parchment Cream
 */
export function TornEdgeMultiLayerTop({ 
  fillBack = '#8BB096', 
  fillMid = '#4D8B55', 
  fillFront = '#F4ECD8', 
  height = 65, 
  style = {} 
}) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0, width: '100%', marginTop: '-1px', zIndex: 6, position: 'relative', ...style }}>
      <svg 
        viewBox="0 0 1200 140" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
      >
        {/* Layer 1 - Back Sage Green Layer */}
        <path 
          d="M0,0 L0,70 L25,40 L50,65 L75,35 L100,60 L125,25 L150,55 L175,30 L200,65 L225,35 L250,60 L275,25 L300,55 L325,30 L350,65 L375,35 L400,60 L425,25 L450,55 L475,30 L500,65 L525,35 L550,60 L575,25 L600,55 L625,30 L650,65 L675,35 L700,60 L725,25 L750,55 L775,30 L800,65 L825,35 L850,60 L875,25 L900,55 L925,30 L950,65 L975,35 L1000,60 L1025,25 L1050,55 L1075,30 L1100,65 L1125,35 L1150,60 L1175,25 L1200,50 L1200,0 Z" 
          fill={fillBack}
          opacity="0.9"
        />
        {/* Layer 2 - Middle Leaf Green Layer */}
        <path 
          d="M0,0 L0,55 L20,25 L40,48 L60,18 L80,42 L100,15 L120,40 L140,20 L160,45 L180,22 L200,48 L220,18 L240,42 L260,15 L280,40 L300,20 L320,45 L340,22 L360,48 L380,18 L400,42 L420,15 L440,40 L460,20 L480,45 L500,22 L520,48 L540,18 L560,42 L580,15 L600,40 L620,20 L640,45 L660,22 L680,48 L700,18 L720,42 L740,15 L760,40 L780,20 L800,45 L820,22 L840,48 L860,18 L880,42 L900,15 L920,40 L940,20 L960,45 L980,22 L1000,48 L1020,18 L1040,42 L1060,15 L1080,40 L1100,20 L1120,45 L1140,22 L1160,48 L1180,18 L1200,35 L1200,0 Z" 
          fill={fillMid}
          opacity="0.85"
        />
        {/* Layer 3 - Front Parchment Cream Layer */}
        <path 
          d="M0,0 L0,38 L15,10 L32,32 L50,12 L68,36 L85,15 L102,34 L120,18 L138,38 L155,10 L172,32 L190,14 L208,36 L225,12 L242,34 L260,18 L278,38 L295,10 L312,32 L330,14 L348,36 L365,15 L382,34 L400,12 L418,38 L435,10 L452,32 L470,14 L488,36 L505,15 L522,34 L540,12 L558,38 L575,10 L592,32 L610,14 L628,36 L645,15 L662,34 L680,12 L698,38 L715,10 L732,32 L750,14 L768,36 L785,15 L802,34 L820,12 L838,38 L855,10 L872,32 L890,14 L908,36 L925,15 L942,34 L960,12 L978,38 L995,10 L1012,32 L1030,14 L1048,36 L1065,15 L1082,34 L1100,12 L1118,38 L1135,10 L1152,32 L1170,14 L1188,36 L1200,15 L1200,0 Z" 
          fill={fillFront}
        />
      </svg>
    </div>
  );
}

/**
 * Multi-Layered SVG Torn Paper Edge Bottom
 */
export function TornEdgeMultiLayerBottom({ 
  fillBack = '#8BB096', 
  fillMid = '#4D8B55', 
  fillFront = '#F4ECD8', 
  height = 65, 
  style = {} 
}) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0, width: '100%', marginBottom: '-1px', zIndex: 6, position: 'relative', ...style }}>
      <svg 
        viewBox="0 0 1200 140" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
      >
        {/* Layer 1 - Back Sage Green Layer */}
        <path 
          d="M0,140 L0,70 L25,100 L50,75 L75,105 L100,80 L125,115 L150,85 L175,110 L200,75 L225,105 L250,80 L275,115 L300,85 L325,110 L350,75 L375,105 L400,80 L425,115 L450,85 L475,110 L500,75 L525,105 L550,80 L575,115 L600,85 L625,110 L650,75 L675,105 L700,80 L725,115 L750,85 L775,110 L800,75 L825,105 L850,80 L875,115 L900,85 L925,110 L950,75 L975,105 L1000,80 L1025,115 L1050,85 L1075,110 L1100,75 L1125,105 L1150,80 L1175,115 L1200,90 L1200,140 Z" 
          fill={fillBack}
          opacity="0.9"
        />
        {/* Layer 2 - Middle Leaf Green Layer */}
        <path 
          d="M0,140 L0,85 L20,115 L40,92 L60,122 L80,98 L100,125 L120,100 L140,120 L160,95 L180,118 L200,92 L220,122 L240,98 L260,125 L280,100 L300,120 L320,95 L340,118 L360,92 L380,122 L400,98 L420,125 L440,100 L460,120 L480,95 L500,118 L520,92 L540,122 L560,98 L580,125 L600,100 L620,120 L640,95 L660,118 L680,92 L700,122 L720,98 L740,125 L760,100 L780,120 L800,95 L820,118 L840,92 L860,122 L880,98 L900,125 L920,100 L940,120 L960,95 L980,118 L1000,92 L1020,122 L1040,98 L1060,125 L1080,100 L1100,120 L1120,95 L1140,118 L1160,92 L1180,122 L1200,105 L1200,140 Z" 
          fill={fillMid}
          opacity="0.85"
        />
        {/* Layer 3 - Front Parchment Cream Layer */}
        <path 
          d="M0,140 L0,102 L15,130 L32,108 L50,128 L68,104 L85,125 L102,106 L120,122 L138,102 L155,130 L172,108 L190,126 L208,104 L225,128 L242,106 L260,122 L278,102 L295,130 L312,108 L330,126 L348,104 L365,125 L382,106 L400,128 L418,102 L435,130 L452,108 L470,126 L488,104 L505,125 L522,106 L540,128 L558,102 L575,130 L592,108 L610,126 L628,104 L645,125 L662,106 L680,128 L698,102 L715,130 L732,108 L750,126 L768,104 L785,125 L802,106 L820,128 L838,102 L855,130 L872,108 L890,126 L908,104 L925,125 L942,106 L960,128 L978,102 L995,130 L1012,108 L1030,126 L1048,104 L1065,125 L1082,106 L1100,128 L1118,102 L1135,130 L1152,108 L1170,126 L1188,104 L1200,125 L1200,140 Z" 
          fill={fillFront}
        />
      </svg>
    </div>
  );
}

/**
 * Vertical Side Deckle Paper Rip Accent Overlay (Inspired by Reference Image 2: Kraft Paper Scrap)
 */
export function TornSideEdgeOverlay({ fill = '#D4A875', style = {} }) {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '28px', pointerEvents: 'none', zIndex: 10, ...style }}>
      <svg viewBox="0 0 40 600" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <path 
          d="M0,0 L40,0 L35,20 L38,40 L30,60 L38,80 L32,100 L39,120 L34,140 L40,160 L32,180 L37,200 L31,220 L38,240 L33,260 L40,280 L34,300 L38,320 L32,340 L39,360 L33,380 L40,400 L34,420 L37,440 L31,460 L38,480 L33,500 L40,520 L34,540 L38,560 L32,580 L40,600 L0,600 Z" 
          fill={fill}
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
