import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { currentUser, logout, ecoPoints, setIsRewardsOpen, setIsAiModalOpen } = useApp();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    closeMenu();
    logout();
    navigate('/');
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#173F35', // Deep Forest Green Background
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(35, 85, 72, 0.4) 0%, rgba(23, 63, 53, 0.98) 100%)`,
        padding: '0.9rem 1rem 1.1rem 1rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
        overflow: 'hidden'
      }}
    >
      {/* BACKGROUND SCRAPBOOK DECORATIONS (Leaves, Kraft Note, Doodles, Recycling Symbol) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        {/* Top-Left Line-Art Leaf Stem Doodle */}
        <div style={{ position: 'absolute', top: '2px', left: '10px', opacity: 0.85 }}>
          <svg width="65" height="75" viewBox="0 0 60 70" fill="none">
            <path d="M15 60 Q 25 30 45 10" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M 22 45 Q 10 35 15 25 Q 30 30 22 45 Z" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none"/>
            <path d="M 32 30 Q 20 20 25 10 Q 40 15 32 30 Z" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        {/* Bottom-Left Realistic Green Leaves Cluster */}
        <div style={{ position: 'absolute', bottom: '-8px', left: '20px', zIndex: 2 }}>
          <svg width="85" height="65" viewBox="0 0 100 80" fill="none">
            <path d="M 10 70 Q 40 30 80 20 C 60 50 40 75 10 70 Z" fill="#2A5C47" stroke="#1D4233" strokeWidth="1.5" />
            <path d="M 10 70 L 65 30" stroke="#4B886B" strokeWidth="2" />
            <path d="M 5 60 Q 30 20 60 10 C 45 40 30 65 5 60 Z" fill="#366E56" opacity="0.9" />
          </svg>
        </div>

        {/* Top-Right Realistic Green Leaves peaking over navbar */}
        <div style={{ position: 'absolute', top: '-18px', right: '170px', zIndex: 2 }}>
          <svg width="70" height="60" viewBox="0 0 80 70" fill="none">
            <path d="M 15 60 C 15 25 50 5 65 10 C 70 35 45 65 15 60 Z" fill="#2E5F4A" stroke="#1C4031" strokeWidth="1" />
            <path d="M 15 60 L 52 20" stroke="#508F71" strokeWidth="2" />
          </svg>
        </div>

        {/* Top-Right Kraft Paper Sticky Note ("Small Actions Big Change ♡") */}
        <div
          style={{
            position: 'absolute',
            top: '6px',
            right: '20px',
            background: '#D4B896',
            padding: '0.45rem 0.75rem',
            borderRadius: '3px',
            transform: 'rotate(5deg)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            fontFamily: "'Caveat', cursive, sans-serif",
            fontSize: '0.88rem',
            fontWeight: '700',
            color: '#382513',
            textAlign: 'center',
            lineHeight: '1.15',
            zIndex: 12
          }}
        >
          <div>Small</div>
          <div>Actions</div>
          <div>Big Change</div>
          <div style={{ fontSize: '0.8rem', marginTop: '2px' }}>♡</div>
        </div>

        {/* Bottom-Right Line-Art Recycling Symbol Doodle */}
        <div style={{ position: 'absolute', bottom: '6px', right: '35px', opacity: 0.5 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round">
            <path d="M7 19l-4-4 4-4" />
            <path d="M3 15h11a4 4 0 0 0 4-4V9" />
            <path d="M17 5l4 4-4 4" />
            <path d="M21 9H10a4 4 0 0 0-4 4v2" />
          </svg>
        </div>
      </div>

      {/* CONTINUOUS CREAM RECYCLED PAPER STRIP */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1260px',
          margin: '0 auto',
          background: '#F5F0E6', // Warm recycled-paper cream
          transform: 'rotate(-0.25deg)',
          /* Hand-torn irregular top and bottom edges */
          clipPath:
            'polygon(0% 3px, 1.5% 0px, 3.5% 4px, 6% 1px, 9% 4px, 12% 0px, 15% 3px, 19% 1px, 23% 4px, 27% 1px, 31% 3px, 35% 0px, 40% 4px, 45% 1px, 50% 3px, 55% 0px, 60% 4px, 65% 1px, 70% 3px, 75% 0px, 80% 4px, 85% 1px, 90% 4px, 95% 1px, 98% 3px, 100% 0px, 100% calc(100% - 3px), 98.5% 100%, 96% calc(100% - 4px), 93% 100%, 89% calc(100% - 3px), 85% 100%, 81% calc(100% - 4px), 77% 100%, 72% calc(100% - 3px), 67% 100%, 62% calc(100% - 4px), 57% 100%, 52% calc(100% - 3px), 47% 100%, 42% calc(100% - 4px), 37% 100%, 32% calc(100% - 3px), 27% 100%, 22% calc(100% - 4px), 17% 100%, 12% calc(100% - 3px), 7% 100%, 3% calc(100% - 4px), 0% 100%)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 3px 10px rgba(0, 0, 0, 0.25)',
          padding: '0.65rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          minHeight: '82px'
        }}
      >
        {/* Washi Tape Strip at top-left corner */}
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            left: '35px',
            width: '65px',
            height: '22px',
            background: 'rgba(235, 222, 202, 0.85)',
            transform: 'rotate(-8deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            zIndex: 15,
            borderLeft: '1px dashed rgba(180,160,130,0.5)',
            borderRight: '1px dashed rgba(180,160,130,0.5)'
          }}
        />

        {/* LOGO (Far Left) */}
        <NavLink
          to="/"
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            zIndex: 20
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              background: '#1C352D',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              color: '#FFFFFF',
              fontSize: '1.3rem',
              boxShadow: '0 3px 8px rgba(28, 53, 45, 0.25)'
            }}
          >
            🌱
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#1C352D',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}
            >
              ClearBin
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                color: '#5B7B6D',
                fontWeight: '600',
                letterSpacing: '0.01em',
                marginTop: '3px'
              }}
            >
              Sort Today. A Cleaner Tomorrow.
            </span>
          </div>
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.6rem',
            color: '#1C352D',
            cursor: 'pointer',
            padding: '0.25rem 0.5rem'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* MAIN NAVIGATION & ACTION ITEMS */}
        <nav
          className={`nav-links ${isOpen ? 'open' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          {/* NAVIGATION LINKS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Home */}
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              style={({ isActive }) => ({
                color: '#1C352D',
                fontWeight: isActive ? '700' : '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                position: 'relative',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                background: isActive ? '#D9E6DC' : 'transparent',
                boxShadow: isActive ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease'
              })}
            >
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '15%',
                        right: '15%',
                        height: '2.5px',
                        background: '#1C352D',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* How It Works */}
            <a
              href="#how-it-works"
              onClick={closeMenu}
              style={{
                color: '#1C352D',
                fontWeight: '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '0.35rem 0.6rem'
              }}
            >
              How It Works
            </a>

            {/* Waste Guide */}
            <a
              href="#waste-guide"
              onClick={closeMenu}
              style={{
                color: '#1C352D',
                fontWeight: '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '0.35rem 0.6rem'
              }}
            >
              Waste Guide
            </a>

            {/* Community */}
            <NavLink
              to="/showcase"
              onClick={closeMenu}
              style={({ isActive }) => ({
                color: '#1C352D',
                fontWeight: isActive ? '700' : '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                background: isActive ? '#D9E6DC' : 'transparent'
              })}
            >
              Community
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              onClick={closeMenu}
              style={({ isActive }) => ({
                color: '#1C352D',
                fontWeight: isActive ? '700' : '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                background: isActive ? '#D9E6DC' : 'transparent'
              })}
            >
              About
            </NavLink>
          </div>

          {/* DIVIDER ACCENT */}
          <div style={{ width: '1px', height: '26px', background: '#D8CEBE', margin: '0 0.25rem' }} />

          {/* ACTION LABELS & BUTTONS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* AI ASSIST (Pale Sage Paper Tag) */}
            <button
              onClick={() => {
                closeMenu();
                setIsAiModalOpen(true);
              }}
              style={{
                background: '#E4EFE7',
                border: '1px solid #CBDCD0',
                color: '#1C352D',
                borderRadius: '8px',
                padding: '0.4rem 0.85rem',
                fontSize: '0.84rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                transition: 'transform 0.15s ease'
              }}
              title="Open AI Waste Assistant"
            >
              <span style={{ color: '#5B7B6D' }}>✨</span>
              <span>AI Assist</span>
            </button>

            {/* ECOPOINTS (Mustard / Kraft Paper Tag) */}
            <button
              onClick={() => {
                closeMenu();
                setIsRewardsOpen(true);
              }}
              style={{
                background: '#EFE3CA',
                border: '1px solid #E2D2B0',
                color: '#72521F',
                borderRadius: '8px',
                padding: '0.4rem 0.85rem',
                fontSize: '0.84rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                transition: 'transform 0.15s ease'
              }}
              title="View EcoPoints Rewards"
            >
              <span>⭐</span>
              <span>{ecoPoints} pts</span>
            </button>

            {/* POST WASTE (Terracotta Physical Button / Paper Label) */}
            <NavLink
              to="/post"
              onClick={closeMenu}
              style={{
                background: '#C95C35',
                color: '#FFFFFF',
                padding: '0.55rem 1.35rem',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '0.9rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 4px 12px rgba(201, 92, 53, 0.35), 0 2px 4px rgba(0,0,0,0.1)',
                border: '1px solid #B44F2A',
                transition: 'transform 0.15s ease, boxShadow 0.15s ease'
              }}
            >
              <span>+</span>
              <span>Post Waste</span>
            </NavLink>

            {/* LOGIN / PROFILE */}
            {currentUser ? (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0.4rem 0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    color: '#1C352D'
                  }}
                >
                  <span>{currentUser.avatar || '👤'}</span>
                  <span>{currentUser.name.split(' ')[0]}</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '110%',
                      background: '#F5F0E6',
                      border: '1px solid #D8CEBE',
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      width: '210px',
                      padding: '0.75rem',
                      zIndex: 150
                    }}
                  >
                    <div style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #D8CEBE', marginBottom: '0.5rem' }}>
                      <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#1C352D' }}>
                        {currentUser.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#5B7B6D' }}>
                        {currentUser.email}
                      </div>
                    </div>

                    <NavLink
                      to="/admin"
                      onClick={closeMenu}
                      style={{
                        display: 'block',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        color: '#1C352D',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        textDecoration: 'none'
                      }}
                    >
                      🛡️ Admin Dashboard
                    </NavLink>

                    <NavLink
                      to="/post"
                      onClick={closeMenu}
                      style={{
                        display: 'block',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        color: '#1C352D',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        textDecoration: 'none'
                      }}
                    >
                      🌱 Post Waste Items
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.5rem',
                        marginTop: '0.35rem',
                        borderTop: '1px solid #D8CEBE',
                        background: 'none',
                        border: 'none',
                        color: '#B83232',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      🚪 Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={closeMenu}
                style={{
                  color: '#1C352D',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  padding: '0.4rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>Log In</span>
                {/* Line-Art Leaf Doodle Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C352D" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12 C22 6.5 17.5 2 12 2Z" fill="none" opacity="0.15"/>
                  <path d="M11 17 C 8 13 8 8 15 5 C 16 11 14 15 11 17 Z"/>
                </svg>
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
