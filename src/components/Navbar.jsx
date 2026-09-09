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
          <div className="logo-icon">🗑️</div>
          <span>ClearBin</span>
          <span className="logo-badge" style={{ background: 'var(--primary-emerald)', color: '#fff' }}>
            Prototype
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
              Browse Matches
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/showcase" onClick={closeMenu}>
              Showcase
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/about" onClick={closeMenu}>
              About / Problem
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
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
                border: '1px solid rgba(168, 85, 247, 0.5)',
                color: '#e9d5ff',
                borderRadius: 'var(--radius-full)',
                padding: '0.4rem 0.85rem',
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
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2))',
                border: '1px solid var(--primary-emerald)',
                color: 'var(--primary-light)',
                borderRadius: 'var(--radius-full)',
                padding: '0.4rem 0.85rem',
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
