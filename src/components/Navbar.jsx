import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { ecoPoints, setIsRewardsOpen, setIsAiModalOpen } = useApp();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header style={{ position: 'relative', zIndex: 100, padding: '1.25rem 2rem 0.5rem 2rem', background: 'transparent' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        {/* Pinned White Paper Logo Badge */}
        <NavLink
          to="/"
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            background: 'var(--paper-white, #fdfbf7)',
            padding: '0.5rem 1.25rem',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-paper, 3px 12px 25px rgba(45, 30, 15, 0.18))',
            border: '1.5px solid #e6dac8',
            transform: 'rotate(-1deg)'
          }}
        >
          <div style={{ width: '42px', height: '42px', background: 'var(--green-dark, #193f2d)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fdfbf7', fontSize: '1.4rem' }}>
            🌱
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.65rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', lineHeight: 1 }}>
              ClearBin
            </span>
            <span className="handwritten" style={{ fontSize: '0.9rem', color: 'var(--green-leaf, #2e7d32)', fontWeight: 'bold' }}>
              Sort Today. A Cleaner Tomorrow.
            </span>
          </div>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{ background: 'none', border: 'none', fontSize: '1.6rem', color: 'var(--green-dark, #193f2d)', cursor: 'pointer' }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Center Nav Links inside paper tabs */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            style={({ isActive }) => ({
              background: isActive ? '#f4ecdc' : 'transparent',
              color: 'var(--green-dark, #193f2d)',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              fontWeight: '800',
              fontSize: '0.9rem',
              textDecoration: 'none',
              border: isActive ? '1px solid #d8c7ad' : '1px solid transparent'
            })}
          >
            Home
          </NavLink>
          <a href="#how-it-works" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', padding: '0.4rem 0.85rem' }}>
            How It Works
          </a>
          <a href="#waste-guide" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', padding: '0.4rem 0.85rem' }}>
            Waste Guide
          </a>
          <a href="#community" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', padding: '0.4rem 0.85rem' }}>
            Community
          </a>
          <NavLink to="/about" onClick={closeMenu} style={({ isActive }) => ({ color: 'var(--green-dark, #193f2d)', fontWeight: isActive ? '800' : '700', fontSize: '0.9rem', textDecoration: 'none', padding: '0.4rem 0.85rem' })}>
            About
          </NavLink>
          <a href="#contact" onClick={closeMenu} style={{ color: 'var(--green-dark, #193f2d)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', padding: '0.4rem 0.85rem' }}>
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
              fontSize: '0.8rem',
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

          {/* EcoPoints Button */}
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
              fontSize: '0.8rem',
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

          {/* CTA: Dark Forest Green Pill Button */}
          <NavLink
            to="/post"
            onClick={closeMenu}
            style={{
              background: 'var(--green-dark, #193f2d)',
              color: 'var(--paper-white, #fdfbf7)',
              padding: '0.65rem 1.4rem',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(25, 63, 45, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              marginLeft: '0.5rem'
            }}
          >
            Schedule Pickup
          </NavLink>

          {/* Circular Profile Button */}
          <div
            title="User Profile"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--green-dark, #193f2d)',
              color: '#fdfbf7',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              fontWeight: '800',
              fontSize: '1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
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
