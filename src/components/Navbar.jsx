import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { WashiTape } from './Scrapbook/Fasteners';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { ecoPoints, setIsRewardsOpen, setIsAiModalOpen } = useApp();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(23, 63, 53, 0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(245, 240, 230, 0.15)', padding: '0.85rem 0' }}>
      <div className="container nav-container" style={{ position: 'relative' }}>
        <WashiTape style={{ position: 'absolute', top: '-18px', left: '10px', width: '80px', height: '20px' }} />
        
        <NavLink to="/" className="logo-link" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div className="logo-icon" style={{ width: '40px', height: '40px', background: '#C85A32', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFDF7', fontSize: '1.25rem', fontWeight: '800', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            🌿
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#F5F0E6', letterSpacing: '0.01em' }}>ClearBin</span>
          <span className="font-handwritten" style={{ fontSize: '1.15rem', color: '#D9A036', marginLeft: '0.2rem' }}>
            scrapbook v2.0
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
