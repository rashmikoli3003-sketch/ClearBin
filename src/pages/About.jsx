import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TornEdgeTop, TornEdgeBottom } from '../components/TornEdge';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();
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
    <div className="about-page">
      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1080px' }}>
        {/* Page Header */}
        <div className="section-header reveal-on-scroll" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Vision & Contact</span>
          <h1 className="section-title">Rethinking Waste as Resource Capital</h1>
          <p className="section-desc">
            How ClearBin solves household waste misallocation while supporting informal waste worker livelihoods and local creative upcyclers.
          </p>
        </div>

        {/* 1. Clean 3-Card Contact-Info Row */}
        <div className="reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          <div className="card-parchment" style={{ textAlign: 'center' }}>
            <div style={{ width: '58px', height: '58px', borderRadius: '50%', background: 'var(--accent-terracotta)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.25rem auto' }}>
              📞
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--bg-main)' }}>(+91) 98765-43210</h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary-parchment)' }}>
              Direct helpline for household waste batch scheduling & artisan support.
            </p>
          </div>

          <div className="card-parchment" style={{ textAlign: 'center' }}>
            <div style={{ width: '58px', height: '58px', borderRadius: '50%', background: 'var(--primary-leaf)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.25rem auto' }}>
              ✉️
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--bg-main)' }}>hello@clearbin.org</h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary-parchment)' }}>
              Inquiries for artisan partnerships, NGO registration & corporate CSR.
            </p>
          </div>

          <div className="card-parchment" style={{ textAlign: 'center' }}>
            <div style={{ width: '58px', height: '58px', borderRadius: '50%', background: 'var(--accent-amber)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.25rem auto' }}>
              📍
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--bg-main)' }}>Pune Ward 4, India</h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary-parchment)' }}>
              Grassroots sorting hub & Upcycling Community Studio.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Problem Statement & Mission Cards on Torn Parchment */}
      <TornEdgeTop fill="#F4ECD8" height={40} />
      <section className="parchment-section">
        <div className="container reveal-on-scroll">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '1rem' }}>
            {/* Problem Card */}
            <div className="card-parchment" style={{ padding: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🚨</span>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--bg-main)' }}>The Waste Misallocation Problem</h2>
              </div>
              <p style={{ color: 'var(--text-secondary-parchment)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Millions of tons of clean PET bottles, glass jars, denim, and e-waste are dumped into municipal landfills every day simply because households lack a direct connection to local upcyclers.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-terracotta)', fontWeight: '800' }}>✓</span>
                  <span><strong>Friction:</strong> No simple way to match small waste batches with nearby artisans.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-terracotta)', fontWeight: '800' }}>✓</span>
                  <span><strong>No Feedback Loop:</strong> Household waste sorting feels invisible and unrewarding.</span>
                </li>
              </ul>
            </div>

            {/* Livelihoods Card */}
            <div className="card-parchment" style={{ padding: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🤝</span>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--bg-main)' }}>Livelihood & Worker Empowerment</h2>
              </div>
              <p style={{ color: 'var(--text-secondary-parchment)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Informal waste pickers perform essential recovery work under tough conditions. ClearBin provides pre-sorted, clean household supply directly to artisan collectives.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--primary-leaf)', fontWeight: '800' }}>✓</span>
                  <span><strong>Dignified Supply:</strong> Clean household materials without landfill digging.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--primary-leaf)', fontWeight: '800' }}>✓</span>
                  <span><strong>Income Boost:</strong> Artisans cut raw material costs, boosting earnings by 35%.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <TornEdgeBottom fill="#F4ECD8" height={40} />

      {/* 3. Two-Column "Get In Touch" Contact Form Section */}
      <div className="container reveal-on-scroll" style={{ padding: '3.5rem 1.5rem' }}>
        <div style={{
          background: 'var(--bg-card-parchment)',
          color: 'var(--text-on-parchment)',
          border: '1.5px solid var(--border-parchment)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '3rem',
          boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
          clipPath: 'polygon(0% 2px, 100% 0px, 99% 100%, 1% 99%)'
        }}>
          {/* Left Column: Hours & Info */}
          <div>
            <span className="section-tag" style={{ color: 'var(--accent-terracotta)', textAlign: 'left' }}>Reach Our Team</span>
            <h2 className="section-title" style={{ color: 'var(--bg-main)', textAlign: 'left', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Our Working Hours & Hubs
            </h2>
            <p style={{ color: 'var(--text-secondary-parchment)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Our neighborhood pickup team and artisan workshop coordinators operate Monday through Saturday.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'var(--bg-main)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span>🕒</span>
                <div><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span>📅</span>
                <div><strong>Saturday:</strong> 9:00 AM - 4:00 PM</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span>🚫</span>
                <div><strong>Sunday:</strong> Closed (Automated pickups active)</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-parchment)' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--bg-main)', marginBottom: '0.5rem' }}>
                📍 Sorting Hub Location:
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-parchment)' }}>
                ClearBin Upcycling Hub, Plot 14, Block 4, Kothrud Ward, Pune, MH 411038
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--bg-main)', fontFamily: 'var(--font-heading)' }}>
              Get In Touch !
            </h3>
            
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
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
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-full)',
                    outline: 'none',
                    color: 'var(--bg-main)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
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
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-full)',
                    outline: 'none',
                    color: 'var(--bg-main)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
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
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-md)',
                    outline: 'none',
                    color: 'var(--bg-main)',
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
        <div className="reveal-on-scroll" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--bg-parchment)', fontFamily: 'var(--font-heading)' }}>
            Ready to post your reusable waste?
          </h3>
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
    </div>
  );
}
