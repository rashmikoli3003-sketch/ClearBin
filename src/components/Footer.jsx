import React from 'react';
import { Link } from 'react-router-dom';
import { TornEdgeTop } from './TornEdge';

export default function Footer() {
  return (
    <>
      <TornEdgeTop fill="#0F2319" height={36} />
      <footer className="footer">
        <div className="container">
          {/* Prototype Banner */}
          <div style={{
            background: 'rgba(244, 236, 216, 0.08)',
            border: '1px dashed rgba(244, 236, 216, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1.1rem 1.5rem',
            fontSize: '0.875rem',
            color: 'var(--bg-parchment)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            marginBottom: '3rem'
          }}>
            <span style={{ fontSize: '1.4rem' }}>🌿</span>
            <div>
              <strong>ClearBin Boho Platform:</strong> Connecting households with local upcycling artisans & waste recovery collectives using live Firestore database persistence.
            </div>
          </div>

          {/* 4-Column Footer Grid */}
          <div className="footer-grid">
            {/* Brand Col */}
            <div className="footer-brand">
              <div className="logo-link" style={{ marginBottom: '0.75rem' }}>
                <div className="logo-icon">🌿</div>
                <span>ClearBin</span>
              </div>
              <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Transforming household waste into creative capital. Connecting households directly with local artisans, upcyclers, and NGOs.
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
              <h4>Navigation</h4>
              <ul className="footer-links">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/post">Post Reusable Waste</Link></li>
                <li><Link to="/matches">Browse Local Upcyclers</Link></li>
                <li><Link to="/showcase">Before & After Gallery</Link></li>
              </ul>
            </div>

            {/* Quick Links / Initiatives */}
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about">Problem Statement</Link></li>
                <li><Link to="/about">Informal Waste Pickers</Link></li>
                <li><Link to="/about">Artisan Empowerment</Link></li>
                <li><Link to="/about">Circular Loop Model</Link></li>
              </ul>
            </div>

            {/* Work Hours & Contact */}
            <div>
              <h4>Work Hours & Contact</h4>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted-dark)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div>🕒 <strong>Mon - Fri:</strong> 8:00 AM - 6:00 PM</div>
                <div>📅 <strong>Saturday:</strong> 9:00 AM - 4:00 PM</div>
                <div>📞 <strong>Helpline:</strong> (+91) 98765-43210</div>
                <div>✉️ <strong>Email:</strong> hello@clearbin.org</div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} ClearBin — Boho Dark Green Circular Economy. All Rights Reserved.</p>
            <p>React + Vite + Firebase Firestore</p>
          </div>
        </div>
      </footer>
    </>
  );
}
