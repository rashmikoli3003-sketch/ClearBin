import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const navigate = useNavigate();
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
        background: '#14382E', // Deep Forest Green Background matching Image 2
        backgroundImage: `radial-gradient(circle at 50% 40%, #1A463A 0%, #103027 100%)`,
        padding: '2.2rem 1.5rem 2.8rem 1.5rem', // Generous padding to display all scrapbook elements
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
        overflow: 'visible'
      }}
    >
      {/* SCRAPBOOK DECORATIONS (Leaves, Kraft Sticky Note, Tape, Doodles) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        {/* Top-Left Line-Art 3-Leaf Stem Doodle */}
        <div style={{ position: 'absolute', top: '14px', left: '18px', opacity: 0.85 }}>
          <svg width="70" height="80" viewBox="0 0 60 70" fill="none">
            <path d="M15 60 Q 25 30 45 10" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 22 45 Q 10 35 15 25 Q 30 30 22 45 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" fill="none"/>
            <path d="M 32 30 Q 20 20 25 10 Q 40 15 32 30 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" fill="none"/>
          </svg>
        </div>

        {/* Bottom-Left Ripped Kraft Paper Flap */}
        <div style={{ position: 'absolute', bottom: '-4px', left: '-10px', zIndex: 2 }}>
          <svg width="220" height="55" viewBox="0 0 220 55" fill="none">
            <path d="M0,55 L0,15 Q30,35 60,10 Q90,40 130,20 Q170,45 220,5 L220,55 Z" fill="#C4A37A" opacity="0.9" />
          </svg>
        </div>

        {/* Bottom-Left Realistic Green Leaves Cluster */}
        <div style={{ position: 'absolute', bottom: '10px', left: '30px', zIndex: 3 }}>
          <svg width="110" height="85" viewBox="0 0 110 85" fill="none">
            <path d="M 15 75 Q 45 35 95 25 C 75 58 45 80 15 75 Z" fill="#2E6B50" stroke="#1D4A36" strokeWidth="1.5" />
            <path d="M 15 75 L 75 35" stroke="#549E7B" strokeWidth="2.2" />
            <path d="M 8 65 Q 35 25 70 12 C 50 45 35 70 8 65 Z" fill="#3D8263" opacity="0.9" />
          </svg>
        </div>

        {/* Top-Right Realistic Green Leaves peaking over navbar */}
        <div style={{ position: 'absolute', top: '2px', right: '190px', zIndex: 2 }}>
          <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
            <path d="M 15 65 C 15 25 55 5 72 12 C 78 38 50 68 15 65 Z" fill="#2E6B50" stroke="#1D4A36" strokeWidth="1.5" />
            <path d="M 15 65 L 58 22" stroke="#549E7B" strokeWidth="2.2" />
          </svg>
        </div>

        {/* Top-Right Kraft Paper Sticky Note ("Small Actions Big Change ♡") */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '25px',
            background: '#D1AF84',
            padding: '0.6rem 0.95rem',
            borderRadius: '3px',
            transform: 'rotate(6.5deg)',
            boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
            fontFamily: "'Caveat', cursive, sans-serif",
            fontSize: '0.98rem',
            fontWeight: '700',
            color: '#362312',
            textAlign: 'center',
            lineHeight: '1.15',
            zIndex: 30,
            border: '1px solid #B8966C'
          }}
        >
          <div>Small</div>
          <div>Actions</div>
          <div>Big Change</div>
          <div style={{ fontSize: '0.9rem', marginTop: '2px' }}>♡</div>
        </div>

        {/* Bottom-Right White Line-Art Recycling Symbol Doodle */}
        <div style={{ position: 'absolute', bottom: '12px', right: '40px', opacity: 0.6, zIndex: 2 }}>
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          maxWidth: '1280px',
          margin: '0 auto',
          background: '#F5F0E6', // Warm recycled-paper cream
          transform: 'rotate(-0.3deg)',
          /* Hand-torn deckled edges top and bottom */
          clipPath:
            'polygon(0% 4px, 1.5% 0px, 3.5% 5px, 6% 1px, 9% 4px, 12% 0px, 15% 4px, 19% 1px, 23% 5px, 27% 1px, 31% 4px, 35% 0px, 40% 4px, 45% 1px, 50% 4px, 55% 0px, 60% 5px, 65% 1px, 70% 4px, 75% 0px, 80% 4px, 85% 1px, 90% 5px, 95% 1px, 98% 4px, 100% 0px, 100% calc(100% - 4px), 98.5% 100%, 96% calc(100% - 5px), 93% 100%, 89% calc(100% - 4px), 85% 100%, 81% calc(100% - 5px), 77% 100%, 72% calc(100% - 4px), 67% 100%, 62% calc(100% - 5px), 57% 100%, 52% calc(100% - 4px), 47% 100%, 42% calc(100% - 5px), 37% 100%, 32% calc(100% - 4px), 27% 100%, 22% calc(100% - 5px), 17% 100%, 12% calc(100% - 4px), 7% 100%, 3% calc(100% - 5px), 0% 100%)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.25)',
          padding: '0.75rem 1.35rem',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          minHeight: '76px'
        }}
      >
        {/* Semi-transparent Washi Tape Strip at top-left corner */}
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '40px',
            width: '72px',
            height: '24px',
            background: 'rgba(238, 224, 204, 0.88)',
            transform: 'rotate(-7deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
            zIndex: 25,
            borderLeft: '1.5px dashed rgba(175,155,125,0.6)',
            borderRight: '1.5px dashed rgba(175,155,125,0.6)'
          }}
        />

        {/* LOGO (Far Left) */}
        <NavLink
          to="/"
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
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
              fontSize: '1.35rem',
              boxShadow: '0 3px 8px rgba(28, 53, 45, 0.3)'
            }}
          >
            🌱
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                fontSize: '1.55rem',
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
                fontSize: '0.72rem',
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
            gap: '1.35rem'
          }}
        >
          {/* NAVIGATION LINKS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
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
                padding: '0.35rem 0.8rem',
                borderRadius: '6px',
                background: isActive ? '#D8E5DB' : 'transparent',
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
                        left: '12%',
                        right: '12%',
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
                padding: '0.35rem 0.65rem'
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
                padding: '0.35rem 0.65rem'
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
                padding: '0.35rem 0.8rem',
                borderRadius: '6px',
                background: isActive ? '#D8E5DB' : 'transparent'
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
                padding: '0.35rem 0.8rem',
                borderRadius: '6px',
                background: isActive ? '#D8E5DB' : 'transparent'
              })}
            >
              About
            </NavLink>
          </div>

          {/* DIVIDER ACCENT */}
          <div style={{ width: '1px', height: '26px', background: '#D8CEBE', margin: '0 0.25rem' }} />

          {/* ACTION LABELS & BUTTONS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {/* AI ASSIST (Pale Sage Paper Tag) */}
            <button
              onClick={() => {
                closeMenu();
                setIsAiModalOpen(true);
              }}
              style={{
                background: '#E3ECE5',
                border: '1px solid #CBDCD0',
                color: '#1C352D',
                borderRadius: '8px',
                padding: '0.45rem 0.9rem',
                fontSize: '0.85rem',
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
                background: '#EFE2CA',
                border: '1px solid #E1D1AF',
                color: '#755420',
                borderRadius: '8px',
                padding: '0.45rem 0.9rem',
                fontSize: '0.85rem',
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

            {/* POST WASTE (Terracotta 3D Button / Paper Label) */}
            <NavLink
              to="/post"
              onClick={closeMenu}
              style={{
                background: '#D05E35',
                color: '#FFFFFF',
                padding: '0.6rem 1.45rem',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '0.92rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 4px 12px rgba(208, 94, 53, 0.4), 0 2px 4px rgba(0,0,0,0.12)',
                border: '1px solid #B84F28',
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C352D" strokeWidth="1.8" strokeLinecap="round">
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
