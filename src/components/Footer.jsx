import React from 'react';
import { Link } from 'react-router-dom';
import { TornEdgeMultiLayerTop } from './TornEdge';

export default function Footer() {
  return (
    <>
      <TornEdgeMultiLayerTop fillBack="#789B62" fillMid="#245C48" fillFront="#173F35" height={55} />
      <footer className="footer" style={{ background: '#173F35', color: '#F5F0E6', padding: '4rem 0 2rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Semi-transparent CLEARBIN Background Watermark */}
        <div style={{ position: 'absolute', bottom: '-20px', right: '-30px', fontSize: '10rem', fontFamily: 'var(--font-heading)', opacity: 0.04, color: '#FFFDF7', pointerEvents: 'none', select: 'none', fontWeight: '900', lineHeight: 1 }}>
          CLEARBIN
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Scrapbook Banner Note */}
          <div style={{
            background: 'rgba(245, 240, 230, 0.08)',
            border: '1px dashed rgba(245, 240, 230, 0.25)',
            borderRadius: 'var(--radius-sm)',
            padding: '1.25rem 1.75rem',
            fontSize: '0.925rem',
            color: '#F5F0E6',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
          }}>
            <span style={{ fontSize: '1.6rem' }}>♻️</span>
            <div>
              <strong>ClearBin Editorial Scrapbook:</strong> Connecting household waste with local upcycling artisans & neighborhood recovery collectives persistence powered by live Firebase Firestore persistence.
            </div>
          </div>

          {/* 4-Column Footer Grid */}
          <div className="footer-grid">
            {/* Brand Col */}
            <div className="footer-brand">
              <div className="logo-link" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="logo-icon" style={{ width: '38px', height: '38px', background: '#C85A32', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFDF7', fontWeight: '800' }}>🌿</div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#F5F0E6' }}>ClearBin</span>
              </div>
              <p style={{ color: '#B5C985', fontSize: '0.925rem', lineHeight: '1.6', maxWidth: '320px' }}>
                Transforming household waste into creative resource capital. Connecting everyday citizens with micro-artisans and NGOs.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', marginTop: '1.25rem', fontSize: '1.35rem' }}>
                <span style={{ cursor: 'pointer' }}>🌿</span>
                <span style={{ cursor: 'pointer' }}>☀️</span>
                <span style={{ cursor: 'pointer' }}>♻️</span>
                <span style={{ cursor: 'pointer' }}>🌸</span>
              </div>
            </div>

            {/* Platform Navigation */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#F5F0E6', fontSize: '1.15rem', marginBottom: '1.25rem' }}>Navigation</h4>
              <ul className="footer-links" style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/" style={{ color: '#B5C985' }}>Homepage</Link></li>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/post" style={{ color: '#B5C985' }}>Post Reusable Waste</Link></li>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/matches" style={{ color: '#B5C985' }}>Browse Local Upcyclers</Link></li>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/showcase" style={{ color: '#B5C985' }}>Before & After Gallery</Link></li>
              </ul>
            </div>

            {/* Quick Links / Initiatives */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#F5F0E6', fontSize: '1.15rem', marginBottom: '1.25rem' }}>Quick Links</h4>
              <ul className="footer-links" style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/about" style={{ color: '#B5C985' }}>Problem Statement</Link></li>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/about" style={{ color: '#B5C985' }}>Informal Waste Pickers</Link></li>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/about" style={{ color: '#B5C985' }}>Artisan Empowerment</Link></li>
                <li style={{ marginBottom: '0.65rem' }}><Link to="/about" style={{ color: '#B5C985' }}>Circular Loop Model</Link></li>
              </ul>
            </div>

            {/* Work Hours & Contact */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#F5F0E6', fontSize: '1.15rem', marginBottom: '1.25rem' }}>Work Hours & Contact</h4>
              <div style={{ fontSize: '0.9rem', color: '#B5C985', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div>🕒 <strong>Mon - Fri:</strong> 8:00 AM - 6:00 PM</div>
                <div>📅 <strong>Saturday:</strong> 9:00 AM - 4:00 PM</div>
                <div>📞 <strong>Helpline:</strong> (+91) 98765-43210</div>
                <div>✉️ <strong>Email:</strong> hello@clearbin.org</div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom" style={{ paddingTop: '2rem', marginTop: '3rem', borderTop: '1px solid rgba(245, 240, 230, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <p>© {new Date().getFullYear()} ClearBin — Editorial Scrapbook Circular Economy.</p>
            <span className="font-handwritten" style={{ fontSize: '1.4rem', color: '#D9A036' }}>
              ~ made for a cleaner tomorrow. ~
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
