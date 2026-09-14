import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { ecoPoints, setIsRewardsOpen, setIsAiModalOpen } = useApp();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo-icon">🌿</div>
          <span>ClearBin</span>
          <span className="logo-badge">
            Boho Eco
          </span>
        </NavLink>

        <button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <div className="nav-item">
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/post" onClick={closeMenu}>
              Post Waste
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/matches" onClick={closeMenu}>
              Browse Upcyclers
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/showcase" onClick={closeMenu}>
              Showcase
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/about" onClick={closeMenu}>
              About / Vision
            </NavLink>
          </div>

          {/* EcoCraft AI Button */}
          <div className="nav-item">
            <button
              onClick={() => {
                closeMenu();
                setIsAiModalOpen(true);
              }}
              style={{
                background: 'rgba(224, 159, 62, 0.15)',
                border: '1px solid var(--accent-amber)',
                color: 'var(--accent-amber)',
                borderRadius: 'var(--radius-full)',
                padding: '0.45rem 0.95rem',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'var(--transition-fast)'
              }}
              title="Open Gemini AI DIY Upcycling Assistant"
            >
              <span>✨</span>
              <span>EcoCraft AI</span>
            </button>
          </div>

          {/* EcoPoints Balance Button */}
          <div className="nav-item">
            <button
              onClick={() => {
                closeMenu();
                setIsRewardsOpen(true);
              }}
              style={{
                background: 'rgba(216, 131, 115, 0.15)',
                border: '1px solid var(--accent-dusty-rose)',
                color: 'var(--accent-dusty-rose)',
                borderRadius: 'var(--radius-full)',
                padding: '0.45rem 0.95rem',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'var(--transition-fast)'
              }}
              title="Click to view EcoPoints Rewards Store"
            >
              <span>🌟</span>
              <span>{ecoPoints} pts</span>
            </button>
          </div>

          <div className="nav-item" style={{ marginLeft: '0.25rem' }}>
            <NavLink to="/post" className="btn nav-cta" onClick={closeMenu}>
              + Post Waste
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
