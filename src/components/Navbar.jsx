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
          background: 'rgba(253, 251, 247, 0.96)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid var(--border-parchment, #e6dac8)',
          borderRadius: '50px',
          padding: '0.65rem 1.4rem',
          boxShadow: 'var(--shadow-paper, 3px 12px 25px rgba(45, 30, 15, 0.18))',
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
          <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>🌱</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.55rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', letterSpacing: '-0.02em' }}>
            ClearBin
          </span>
          <span className="handwritten" style={{ fontSize: '1.15rem', color: 'var(--green-leaf, #2e7d32)', fontWeight: 'bold', marginLeft: '0.15rem' }}>
            v2.0
          </span>
        </NavLink>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: 'var(--green-dark, #193f2d)', cursor: 'pointer' }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links & Action Controls */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <NavLink to="/" end onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--green-leaf, #2e7d32)' : 'var(--green-dark, #193f2d)', fontWeight: isActive ? '800' : '700', fontSize: '0.925rem', textDecoration: 'none' })}>
            Home
          </NavLink>
          <a href="#how-it-works" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.925rem', textDecoration: 'none' }}>
            How It Works
          </a>
          <a href="#waste-guide" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.925rem', textDecoration: 'none' }}>
            Waste Guide
          </a>
          <a href="#community" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.925rem', textDecoration: 'none' }}>
            Community
          </a>
          <NavLink to="/about" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--green-leaf, #2e7d32)' : 'var(--green-dark, #193f2d)', fontWeight: isActive ? '800' : '700', fontSize: '0.925rem', textDecoration: 'none' })}>
            About
          </NavLink>
          <a href="#contact" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.925rem', textDecoration: 'none' }}>
            Contact
          </a>

          {/* EcoCraft AI Button */}
          <button
            onClick={() => {
              closeMenu();
              setIsAiModalOpen(true);
            }}
            style={{
              background: '#9DBE9B',
              border: 'none',
              color: 'var(--green-dark, #193f2d)',
              borderRadius: '20px',
              padding: '0.4rem 0.85rem',
              fontSize: '0.825rem',
              fontWeight: '800',
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
              background: 'var(--sticky-yellow, #f8ebb2)',
              border: 'none',
              color: 'var(--green-dark, #193f2d)',
              borderRadius: '20px',
              padding: '0.4rem 0.85rem',
              fontSize: '0.825rem',
              fontWeight: '800',
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
              background: 'var(--green-dark, #193f2d)',
              color: 'var(--paper-white, #fdfbf7)',
              padding: '0.65rem 1.35rem',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(25, 63, 45, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'transform 0.2s ease, background 0.2s ease'
            }}
          >
            <span>Schedule Pickup</span>
          </NavLink>

          {/* Profile Icon */}
          <div
            title="User Profile"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--green-leaf, #2e7d32)',
              color: '#fdfbf7',
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
