import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function About() {
  const { showToast } = useApp();
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    showToast(`✉️ Thank you ${contactName}! Your message has been sent to ClearBin team.`);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1080px' }}>
      {/* Page Header */}
      <div className="section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="section-tag">Vision & Contact</span>
        <h1 className="section-title">Rethinking Waste as Resource Capital</h1>
        <p className="section-desc">
          How ClearBin solves household waste misallocation while supporting informal waste worker livelihoods and local creative upcyclers.
        </p>
      </div>

      {/* 1. Clean 3-Card Contact-Info Row (From Image 3 - Lawncare) */}
      <div className="contact-cards-grid">
        <div className="contact-card-item">
          <div className="contact-icon-circle">📞</div>
          <h3 className="contact-card-title">(+91) 98765-43210</h3>
          <p className="contact-card-detail">
            Direct helpline for household waste batch scheduling & artisan support.
          </p>
        </div>

        <div className="contact-card-item">
          <div className="contact-icon-circle" style={{ background: 'var(--primary-leaf)' }}>✉️</div>
          <h3 className="contact-card-title">hello@clearbin.org</h3>
          <p className="contact-card-detail">
            Inquiries for artisan partnerships, NGO registration & corporate CSR.
          </p>
        </div>

        <div className="contact-card-item">
          <div className="contact-icon-circle" style={{ background: 'var(--accent-terracotta)' }}>📍</div>
          <h3 className="contact-card-title">Pune Ward 4, India</h3>
          <p className="contact-card-detail">
            Grassroots sorting hub & Upcycling Community Studio.
          </p>
        </div>
      </div>

      {/* 2. Problem Statement & Mission Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
        {/* Problem Card */}
        <div className="card" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🚨</span>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-forest)' }}>The Waste Misallocation Problem</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
            Millions of tons of clean PET bottles, glass jars, denim, and e-waste are dumped into municipal landfills every day simply because households lack a direct connection to local upcyclers.
          </p>
          <ul className="mission-checklist">
            <li>
              <span className="mission-check-icon">✓</span>
              <span><strong>Friction:</strong> No simple way to match small waste batches with nearby artisans.</span>
            </li>
            <li>
              <span className="mission-check-icon">✓</span>
              <span><strong>No Feedback Loop:</strong> Household waste sorting feels invisible and unrewarding.</span>
            </li>
          </ul>
        </div>

        {/* Livelihoods Card */}
        <div className="card" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.75rem' }}>🤝</span>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-forest)' }}>Livelihood & Worker Empowerment</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
            Informal waste pickers perform essential recovery work under tough conditions. ClearBin provides pre-sorted, clean household supply directly to artisan collectives.
          </p>
          <ul className="mission-checklist">
            <li>
              <span className="mission-check-icon">✓</span>
              <span><strong>Dignified Supply:</strong> Clean household materials without landfill digging.</span>
            </li>
            <li>
              <span className="mission-check-icon">✓</span>
              <span><strong>Income Boost:</strong> Artisans cut raw material costs, boosting earnings by 35%.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Two-Column "Get In Touch" Section (From Image 3 - Lawncare) */}
      <div className="contact-form-layout" style={{ marginBottom: '4rem' }}>
        {/* Left Column: Hours & Info */}
        <div>
          <span className="section-tag" style={{ textAlign: 'left' }}>Reach Our Team</span>
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.8rem', marginBottom: '1rem' }}>
            Our Working Hours & Hubs
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Our neighborhood pickup team and artisan workshop coordinators operate Monday through Saturday.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>🕒</span>
              <div>
                <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>📅</span>
              <div>
                <strong>Saturday:</strong> 9:00 AM - 4:00 PM
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>🚫</span>
              <div>
                <strong>Sunday:</strong> Closed (Scheduled automated pickups active)
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-forest)', marginBottom: '0.5rem' }}>
              📍 Sorting Hub Location:
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              ClearBin Upcycling Hub, Plot 14, Block 4, Kothrud Ward, Pune, MH 411038
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--primary-forest)' }}>
            Get In Touch !
          </h3>
          
          <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--primary-forest)' }}>
                Your Name
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Enter your name..."
                required
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  outline: 'none',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--primary-forest)' }}>
                Email Address
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  outline: 'none',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--primary-forest)' }}>
                Message
              </label>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Write your message or inquiry here..."
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  resize: 'vertical'
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Submit Message ➔
            </button>
          </form>
        </div>
      </div>

      {/* CTA Box */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-forest)' }}>Ready to post your reusable waste?</h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/post" className="btn btn-primary btn-lg">
            Post Waste Item ➔
          </Link>
          <Link to="/matches" className="btn btn-secondary btn-lg">
            View Local Matches
          </Link>
        </div>
      </div>
    </div>
  );
}
