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
        background: 'rgba(250, 248, 245, 0.75)',
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
                fontSize: '0.72rem',
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
              padding: '0.45rem 0.85rem',
              borderRadius: '20px',
              fontWeight: isActive ? '700' : '600',
              fontSize: '0.9rem',
              textDecoration: 'none'
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
              padding: '0.45rem 0.75rem'
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
              padding: '0.45rem 0.75rem'
            }}
          >
            Waste Guide
          </a>

          <NavLink
            to="/showcase"
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: isActive ? 'var(--primary-green, #1C352D)' : 'var(--text-muted, #5B7B6D)',
              background: isActive ? 'var(--bg-pastel, #E8F0EA)' : 'transparent',
              fontWeight: isActive ? '700' : '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '0.45rem 0.75rem',
              borderRadius: '20px'
            })}
          >
            Community
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: isActive ? 'var(--primary-green, #1C352D)' : 'var(--text-muted, #5B7B6D)',
              background: isActive ? 'var(--bg-pastel, #E8F0EA)' : 'transparent',
              fontWeight: isActive ? '700' : '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              padding: '0.45rem 0.75rem',
              borderRadius: '20px'
            })}
          >
            About
          </NavLink>

          {/* Admin Dashboard Shortcut */}
          <NavLink
            to="/admin"
            onClick={closeMenu}
            style={({ isActive }) => ({
              background: isActive ? 'var(--primary-green, #1C352D)' : 'var(--bg-pastel, #E8F0EA)',
              color: isActive ? '#FFFFFF' : 'var(--primary-green, #1C352D)',
              padding: '0.45rem 0.85rem',
              borderRadius: '20px',
              fontWeight: '700',
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            })}
          >
            <span>🛡️ Admin</span>
          </NavLink>

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
              padding: '0.45rem 0.85rem',
              fontSize: '0.82rem',
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
              padding: '0.45rem 0.85rem',
              fontSize: '0.82rem',
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

          {/* Schedule Pickup Primary CTA */}
          <NavLink
            to="/post"
            onClick={closeMenu}
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.88rem'
            }}
          >
            Post Waste
          </NavLink>

          {/* User Profile / Auth Control */}
          {currentUser ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                style={{
                  background: 'var(--bg-pastel, #E8F0EA)',
                  border: '1px solid var(--border-light, #E2EAE4)',
                  borderRadius: '20px',
                  padding: '0.4rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  color: 'var(--primary-green, #1C352D)'
                }}
              >
                <span>{currentUser.avatar || '👤'}</span>
                <span>{currentUser.name.split(' ')[0]}</span>
                <span
                  style={{
                    background: 'var(--primary-green, #1C352D)',
                    color: '#FFFFFF',
                    fontSize: '0.68rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '10px',
                    textTransform: 'uppercase'
                  }}
                >
                  {currentUser.role}
                </span>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '110%',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-light, #E2EAE4)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(28, 53, 45, 0.1)',
                    width: '210px',
                    padding: '0.75rem',
                    zIndex: 150
                  }}
                >
                  <div style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid var(--border-light, #E2EAE4)', marginBottom: '0.5rem' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--primary-green, #1C352D)' }}>
                      {currentUser.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted, #5B7B6D)' }}>
                      {currentUser.email}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary-green, #1C352D)', fontWeight: '700', marginTop: '0.2rem' }}>
                      Role: {currentUser.role.toUpperCase()}
                    </div>
                  </div>

                  <NavLink
                    to="/admin"
                    onClick={closeMenu}
                    style={{
                      display: 'block',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      color: 'var(--primary-green, #1C352D)',
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
                      borderRadius: '8px',
                      color: 'var(--primary-green, #1C352D)',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      textDecoration: 'none'
                    }}
                  >
                    🌱 Post Waste Items
                  </NavLink>

                  <NavLink
                    to="/matches"
                    onClick={closeMenu}
                    style={{
                      display: 'block',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      color: 'var(--primary-green, #1C352D)',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      textDecoration: 'none'
                    }}
                  >
                    🎨 Browse Artisan Directory
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem',
                      marginTop: '0.35rem',
                      borderTop: '1px solid var(--border-light, #E2EAE4)',
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
              className="btn btn-secondary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.85rem'
              }}
            >
              Log In
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
