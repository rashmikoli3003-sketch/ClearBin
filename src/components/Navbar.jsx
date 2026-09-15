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
        background: '#173F35', // Dark forest green background
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(35, 85, 72, 0.4) 0%, rgba(23, 63, 53, 0.95) 100%)`,
        padding: '0.85rem 1rem 1.1rem 1rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Scrapbook Elements (Corner leaves, tape, sticky note) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {/* Top-Left Leaf Line Doodle & Torn Green Paper Accent */}
        <div style={{ position: 'absolute', top: '-10px', left: '12px', opacity: 0.85 }}>
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
            <path d="M15 60 Q 25 30 45 10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M 22 45 Q 10 35 15 25 Q 30 30 22 45 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"/>
            <path d="M 32 30 Q 20 20 25 10 Q 40 15 32 30 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        {/* Top-Right Kraft Sticky Note ("Small Actions Big Change ♡") */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '25px',
            background: '#D8BD9D',
            padding: '0.4rem 0.65rem',
            borderRadius: '4px',
            transform: 'rotate(4deg)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
            fontFamily: "'Caveat', cursive, sans-serif",
            fontSize: '0.78rem',
            fontWeight: '700',
            color: '#3D2A18',
            textAlign: 'center',
            lineHeight: '1.1',
            display: 'none',
            '@media (minWidth: 1200px)': { display: 'block' }
          }}
        >
          <div>Small Actions</div>
          <div>Big Change ♡</div>
        </div>

        {/* Top-Right Realistic Green Leaves background peak */}
        <div style={{ position: 'absolute', top: '-15px', right: '160px', opacity: 0.85 }}>
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
            <path d="M 10 45 C 10 20 35 5 45 10 C 50 30 30 50 10 45 Z" fill="#2D5A47" stroke="#1D3E30" strokeWidth="1"/>
            <path d="M 10 45 L 38 18" stroke="#467B63" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Bottom-Right Line-Art Recycling Symbol */}
        <div style={{ position: 'absolute', bottom: '6px', right: '35px', opacity: 0.4 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round">
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
          justifyContent: 'space-between',
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
                {/* Tiny Leaf Doodle Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C352D" strokeWidth="2" strokeLinecap="round">
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
