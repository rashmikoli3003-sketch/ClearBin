import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-disclaimer">
          <span style={{ fontSize: '1.25rem' }}>💡</span>
          <div>
            <strong>Hackathon Submission Reference Build:</strong> ClearBin is a conceptual frontend prototype demonstrating the circular waste-to-artisan loop using mock state and static data. No backend connection is required.
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-link" style={{ marginBottom: '0.5rem' }}>
              <div className="logo-icon">🗑️</div>
              <span>ClearBin</span>
            </div>
            <p>
              Transforming household waste into creative capital. Connecting households with local artisans, upcyclers, and NGOs.
            </p>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/post">Post Reusable Waste</Link></li>
              <li><Link to="/matches">Browse Local Matches</Link></li>
              <li><Link to="/showcase">Before & After Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Waste Streams</h4>
            <ul className="footer-links">
              <li><Link to="/post">PET & HDPE Plastics</Link></li>
              <li><Link to="/post">Glass Bottles & Jars</Link></li>
              <li><Link to="/post">Textiles & Fabrics</Link></li>
              <li><Link to="/post">E-Waste & Batteries</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Impact & Vision</h4>
            <ul className="footer-links">
              <li><Link to="/about">Problem Statement</Link></li>
              <li><Link to="/about">Informal Waste Workers</Link></li>
              <li><Link to="/about">Artisan Empowerment</Link></li>
              <li><Link to="/about">Circular Model</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ClearBin — Hackathon Demo Build. Built for circular economy innovation.</p>
          <p>React + Vite + Plain CSS</p>
        </div>
      </div>
    </footer>
  );
}
