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
        width: '100%',
        /* Use the reference image itself as the full visual background & layout */
        backgroundImage: "url('/assets/header_scrapbook_reference.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '190px',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
        position: 'relative'
      }}
    >
      {/* Interactive HTML Hotspot Container aligned over the cream paper strip in the background image */}
      <div
        style={{
          maxWidth: '1240px',
          width: '94%',
          height: '74px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          position: 'relative',
          transform: 'translateY(-10px)'
        }}
      >
        {/* LOGO HOTSPOT (Far Left) */}
        <NavLink
          to="/"
          onClick={closeMenu}
          title="ClearBin Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '210px',
            height: '60px',
            textDecoration: 'none',
            opacity: 0, // Visual comes from background image; hotspot handles hover & clicks
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '0.1px' }}>ClearBin - Sort Today. A Cleaner Tomorrow.</span>
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{
            background: '#F5F0E6',
            border: '1px solid #D8CEBE',
            borderRadius: '8px',
            fontSize: '1.4rem',
            color: '#1C352D',
            cursor: 'pointer',
            padding: '0.25rem 0.6rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 30
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* MAIN NAVIGATION & ACTION HOTSPOTS */}
        <nav
          className={`nav-links ${isOpen ? 'open' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            height: '100%'
          }}
        >
          {/* NAVIGATION LINKS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Home */}
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              style={({ isActive }) => ({
                color: '#1C352D',
                fontWeight: '700',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.85,
                transition: 'all 0.15s ease'
              })}
            >
              <span style={{ opacity: 0 }}>Home</span>
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
                padding: '0.4rem 0.75rem',
                opacity: 0,
                cursor: 'pointer'
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
                padding: '0.4rem 0.75rem',
                opacity: 0,
                cursor: 'pointer'
              }}
            >
              Waste Guide
            </a>

            {/* Community */}
            <NavLink
              to="/showcase"
              onClick={closeMenu}
              style={{
                color: '#1C352D',
                fontWeight: '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '0.4rem 0.75rem',
                opacity: 0,
                cursor: 'pointer'
              }}
            >
              Community
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              onClick={closeMenu}
              style={{
                color: '#1C352D',
                fontWeight: '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '0.4rem 0.75rem',
                opacity: 0,
                cursor: 'pointer'
              }}
            >
              About
            </NavLink>
          </div>

          {/* ACTION BUTTON HOTSPOTS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* AI ASSIST HOTSPOT */}
            <button
              onClick={() => {
                closeMenu();
                setIsAiModalOpen(true);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                width: '100px',
                height: '40px',
                cursor: 'pointer',
                opacity: 0
              }}
              title="Open AI Waste Assistant"
            >
              ✨ AI Assist
            </button>

            {/* ECOPOINTS HOTSPOT */}
            <button
              onClick={() => {
                closeMenu();
                setIsRewardsOpen(true);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                width: '90px',
                height: '40px',
                cursor: 'pointer',
                opacity: 0
              }}
              title={`View Rewards (${ecoPoints} pts)`}
            >
              ⭐ {ecoPoints} pts
            </button>

            {/* POST WASTE HOTSPOT */}
            <NavLink
              to="/post"
              onClick={closeMenu}
              title="Post Waste Item"
              style={{
                background: 'transparent',
                width: '125px',
                height: '45px',
                display: 'inline-block',
                cursor: 'pointer',
                opacity: 0
              }}
            >
              + Post Waste
            </NavLink>

            {/* LOGIN / PROFILE CONTROL */}
            {currentUser ? (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  style={{
                    background: '#F5F0E6',
                    border: '1px solid #D8CEBE',
                    borderRadius: '20px',
                    padding: '0.35rem 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer',
                    fontWeight: '700',
                    fontSize: '0.84rem',
                    color: '#1C352D',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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
                      top: '115%',
                      background: '#F5F0E6',
                      border: '1px solid #D8CEBE',
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
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
                title="Log In"
                style={{
                  width: '80px',
                  height: '40px',
                  display: 'inline-block',
                  cursor: 'pointer',
                  opacity: 0
                }}
              >
                Log In
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
