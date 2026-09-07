import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo-icon">🗑️</div>
          <span>ClearBin</span>
          <span className="logo-badge">Demo</span>
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
              Browse Matches
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/showcase" onClick={closeMenu}>
              Showcase
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/about" onClick={closeMenu}>
              About / Problem
            </NavLink>
          </div>
          <div className="nav-item" style={{ marginLeft: '0.5rem' }}>
            <NavLink to="/post" className="btn nav-cta" onClick={closeMenu}>
              + Post Waste
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
