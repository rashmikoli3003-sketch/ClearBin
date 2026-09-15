import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { ecoPoints, setIsRewardsOpen, setIsAiModalOpen } = useApp();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(250, 248, 245, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-light, #E2EAE4)',
        padding: '0.85rem 1.5rem'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        {/* Minimal Clean Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              background: 'var(--primary-green, #1C352D)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              color: '#FFFFFF',
              fontSize: '1.25rem'
            }}
          >
            🌱
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: '800',
                color: 'var(--primary-green, #1C352D)',
                lineHeight: 1
              }}
            >
              ClearBin
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted, #5B7B6D)',
                fontWeight: '600',
                letterSpacing: '0.02em',
                marginTop: '2px'
              }}
            >
              Sort Today. A Cleaner Tomorrow.
            </span>
          </div>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: 'var(--primary-green, #1C352D)',
            cursor: 'pointer'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Items */}
        <nav
          className={`nav-links ${isOpen ? 'open' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            style={({ isActive }) => ({
              background: isActive ? 'var(--bg-pastel, #E8F0EA)' : 'transparent',
              color: 'var(--primary-green, #1C352D)',
              padding: '0.45rem 0.9rem',
              borderRadius: '20px',
              fontWeight: isActive ? '700' : '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'background 0.2s ease'
            })}
          >
            Home
          </NavLink>

          <a
            href="#how-it-works"
            onClick={closeMenu}
            style={{
              color: 'var(--text-muted, #5B7B6D)',
              fontWeight: '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '0.45rem 0.85rem'
            }}
          >
            How It Works
          </a>

          <a
            href="#waste-guide"
            onClick={closeMenu}
            style={{
              color: 'var(--text-muted, #5B7B6D)',
              fontWeight: '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '0.45rem 0.85rem'
            }}
          >
            Waste Guide
          </a>

          <a
            href="#community"
            onClick={closeMenu}
            style={{
              color: 'var(--text-muted, #5B7B6D)',
              fontWeight: '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '0.45rem 0.85rem'
            }}
          >
            Community
          </a>

          <NavLink
            to="/about"
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: isActive ? 'var(--primary-green, #1C352D)' : 'var(--text-muted, #5B7B6D)',
              background: isActive ? 'var(--bg-pastel, #E8F0EA)' : 'transparent',
              fontWeight: isActive ? '700' : '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '0.45rem 0.85rem',
              borderRadius: '20px'
            })}
          >
            About
          </NavLink>

          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              color: 'var(--text-muted, #5B7B6D)',
              fontWeight: '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '0.45rem 0.85rem'
            }}
          >
            Contact
          </a>

          {/* AI Assist Pill */}
          <button
            onClick={() => {
              closeMenu();
              setIsAiModalOpen(true);
            }}
            style={{
              background: 'var(--bg-pastel, #E8F0EA)',
              border: '1px solid var(--border-light, #E2EAE4)',
              color: 'var(--primary-green, #1C352D)',
              borderRadius: '20px',
              padding: '0.45rem 0.95rem',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease',
              marginLeft: '0.25rem'
            }}
            title="Open AI Waste Assistant"
          >
            <span>✨ AI Assist</span>
          </button>

          {/* EcoPoints Rewards Pill */}
          <button
            onClick={() => {
              closeMenu();
              setIsRewardsOpen(true);
            }}
            style={{
              background: '#F5ECE0',
              border: '1px solid #EFE4D4',
              color: '#8A5D28',
              borderRadius: '20px',
              padding: '0.45rem 0.95rem',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease'
            }}
            title="View EcoPoints Rewards"
          >
            <span>🌟 {ecoPoints} pts</span>
          </button>

          {/* Schedule Pickup Primary CTA */}
          <NavLink
            to="/post"
            onClick={closeMenu}
            className="btn btn-primary"
            style={{
              padding: '0.55rem 1.35rem',
              fontSize: '0.88rem',
              marginLeft: '0.35rem'
            }}
          >
            Schedule Pickup
          </NavLink>

          {/* User Profile Avatar */}
          <div
            title="User Profile"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--bg-pastel, #E8F0EA)',
              border: '1px solid var(--border-light, #E2EAE4)',
              color: 'var(--primary-green, #1C352D)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: 'pointer',
              marginLeft: '0.25rem'
            }}
          >
            👤
          </div>
        </nav>
      </div>
    </header>
  );
}
