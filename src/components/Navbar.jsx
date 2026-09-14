import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MaskingTape } from './Scrapbook/Fasteners';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { ecoPoints, setIsRewardsOpen, setIsAiModalOpen } = useApp();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header style={{ position: 'sticky', top: '15px', zIndex: 100, padding: '0 1rem' }}>
      <div
        className="container"
        style={{
          background: 'rgba(253, 251, 247, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid #E6DAC8',
          borderRadius: '50px',
          padding: '0.6rem 1.4rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          position: 'relative'
        }}
      >
        {/* Subtle Masking Tape */}
        <MaskingTape style={{ position: 'absolute', top: '-14px', left: '40px', width: '70px', height: '18px' }} />

        {/* Brand Logo */}
        <NavLink to="/" className="logo-link" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🌱</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '800', color: '#1B3F2E', letterSpacing: '-0.02em' }}>
            ClearBin
          </span>
        </NavLink>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: '#1B3F2E', cursor: 'pointer' }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links & Action Controls */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <NavLink to="/" end onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? '#2E7D32' : '#1B3F2E', fontWeight: isActive ? '700' : '600', fontSize: '0.925rem', textDecoration: 'none' })}>
            Home
          </NavLink>
          <a href="#how-it-works" onClick={closeMenu} style={{ color: '#1B3F2E', fontWeight: '600', fontSize: '0.925rem', textDecoration: 'none' }}>
            How It Works
          </a>
          <a href="#waste-guide" onClick={closeMenu} style={{ color: '#1B3F2E', fontWeight: '600', fontSize: '0.925rem', textDecoration: 'none' }}>
            Waste Guide
          </a>
          <a href="#community" onClick={closeMenu} style={{ color: '#1B3F2E', fontWeight: '600', fontSize: '0.925rem', textDecoration: 'none' }}>
            Community
          </a>
          <NavLink to="/about" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? '#2E7D32' : '#1B3F2E', fontWeight: isActive ? '700' : '600', fontSize: '0.925rem', textDecoration: 'none' })}>
            About
          </NavLink>
          <a href="#contact" onClick={closeMenu} style={{ color: '#1B3F2E', fontWeight: '600', fontSize: '0.925rem', textDecoration: 'none' }}>
            Contact
          </a>

          {/* EcoCraft AI Quick Button */}
          <button
            onClick={() => {
              closeMenu();
              setIsAiModalOpen(true);
            }}
            style={{
              background: '#9DBE9B',
              border: 'none',
              color: '#1B3F2E',
              borderRadius: '20px',
              padding: '0.4rem 0.85rem',
              fontSize: '0.8rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
            title="Open AI Waste Assistant"
          >
            <span>✨ AI Assist</span>
          </button>

          {/* EcoPoints Rewards Button */}
          <button
            onClick={() => {
              closeMenu();
              setIsRewardsOpen(true);
            }}
            style={{
              background: '#F4E8B2',
              border: 'none',
              color: '#1B3F2E',
              borderRadius: '20px',
              padding: '0.4rem 0.85rem',
              fontSize: '0.8rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
            title="View EcoPoints Rewards"
          >
            <span>🌟 {ecoPoints} pts</span>
          </button>

          {/* CTA: Dark Forest Green Pill Button "Schedule Pickup" */}
          <NavLink
            to="/post"
            onClick={closeMenu}
            style={{
              background: '#1B3F2E',
              color: '#FDFBF7',
              padding: '0.65rem 1.35rem',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(27, 63, 46, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'transform 0.2s ease, background 0.2s ease'
            }}
          >
            <span>Schedule Pickup</span>
          </NavLink>

          {/* Circular Profile Icon */}
          <div
            title="User Profile"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#2E7D32',
              color: '#FDFBF7',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              fontWeight: '800',
              fontSize: '0.95rem',
              boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
              cursor: 'pointer'
            }}
          >
            👤
          </div>
        </nav>
      </div>
    </header>
  );
}
