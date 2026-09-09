import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GOAL_STATS, 
  INITIATIVE_CARDS, 
  PERSONA_STORY, 
  TESTIMONIAL_QUOTE
} from '../data/mockData';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section - Warm, Mission-Driven Tone */}
      <section style={{
        padding: '4.5rem 0 3.5rem 0',
        background: 'linear-gradient(180deg, #f4eee5 0%, var(--bg-main) 100%)',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--bg-sage-light)',
            border: '1px solid var(--border-green)',
            color: 'var(--primary-forest)',
            padding: '0.4rem 1.1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            🤝 Grassroots Waste-to-Artisan Platform • Hackathon Prototype
          </div>

          <h1 style={{
            fontSize: 'clamp(2.3rem, 4.5vw, 3.75rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            maxWidth: '860px',
            margin: '0 auto 1.25rem auto',
            lineHeight: '1.18',
            color: 'var(--primary-forest)'
          }}>
            Your waste still has value — <br />
            <span style={{ color: 'var(--accent-terracotta)' }}>
              let's find it a second life.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            margin: '0 auto 2.25rem auto',
            lineHeight: '1.65'
          }}>
            ClearBin connects households with reusable plastic, glass, fabric, e-waste, and batteries directly to nearby artisans, upcyclers, and green collectives who can reuse them.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/post" className="btn btn-primary btn-lg">
              Post Your Waste ➔
            </Link>
            <Link to="/matches" className="btn btn-secondary btn-lg">
              Explore Local Upcyclers
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Target / Goal Stats Strip (Top of Landing Page) */}
      <section className="container">
        <div className="goal-stats-strip">
          <div style={{ textAlign: 'center' }}>
            <span className="goal-stats-badge">
              🎯 Projected Impact Targets (Hackathon Model)
            </span>
          </div>

          <div className="goal-stats-grid">
            {GOAL_STATS.map((stat, idx) => (
              <div key={idx} className="goal-stat-item">
                <div className="goal-stat-number">{stat.number}</div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary-forest)', marginBottom: '0.2rem' }}>
                  {stat.targetLabel}
                </div>
                <div className="goal-stat-label">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Clean Initiative Grid */}
      <section style={{ padding: '2rem 0 4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Community Programs</span>
            <h2 className="section-title">Our Circular Initiatives</h2>
            <p className="section-desc">
              Simple, transparent channels for every waste stream in your household.
            </p>
          </div>

          <div className="initiative-grid">
            {INITIATIVE_CARDS.map(item => (
              <div key={item.id} className="initiative-card">
                <div className="initiative-icon">{item.icon}</div>
                <h3 className="initiative-title">{item.title}</h3>
                <p className="initiative-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Meet the Person Behind the Waste (Persona Section) */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-surface-elevated)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Grassroots Voices</span>
            <h2 className="section-title">Meet the Person Behind the Waste</h2>
            <p className="section-desc">
              Real household choices create real livelihoods for local craftspeople.
            </p>
          </div>

          <div className="persona-card">
            <div className="persona-avatar-wrapper">
              <div className="persona-avatar-svg">
                {/* SVG Illustration Avatar - Warm & Human */}
                <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="#eaf4ed" stroke="#2d6a4f" strokeWidth="2"/>
                  <circle cx="50" cy="38" r="20" fill="#2d6a4f"/>
                  <path d="M20 85C20 70 33 62 50 62C67 62 80 70 80 85" fill="#1b4332"/>
                  <path d="M42 35C42 35 46 39 50 39C54 39 58 35 58 35" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="43" cy="32" r="2.5" fill="#ffffff"/>
                  <circle cx="57" cy="32" r="2.5" fill="#ffffff"/>
                  {/* Bindi / Accent dot */}
                  <circle cx="50" cy="25" r="2" fill="#c2410c"/>
                </svg>
              </div>
              <div className="persona-name">{PERSONA_STORY.name}</div>
              <div className="persona-role">{PERSONA_STORY.role}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                📍 {PERSONA_STORY.location}
              </div>
            </div>

            <div>
              <blockquote className="persona-quote">
                "{PERSONA_STORY.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonial / Vision Quote Block */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="testimonial-block">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-light)' }}>
              “
            </div>
            <p className="testimonial-quote">
              "{TESTIMONIAL_QUOTE.quote}"
            </p>
            <div className="testimonial-author">
              — {TESTIMONIAL_QUOTE.author}
            </div>
            <div className="testimonial-disclaimer">
              ({TESTIMONIAL_QUOTE.tag} — Inspired by grassroots cooperatives like SwaCH)
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Visual Summary */}
      <section style={{ padding: '3rem 0 5rem 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Simple Circular Loop</span>
            <h2 className="section-title">How Your Item Finds a Second Life</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}>
            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>1️⃣</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-forest)' }}>Post & Categorize</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Upload photos of your plastic, glass, fabric, or e-waste items and add your general area.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>2️⃣</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-forest)' }}>Connect & Hand Off</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Matched local artisans or NGOs claim the materials and coordinate doorstep or hub pickup.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>3️⃣</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-forest)' }}>See Impact & Earn</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Watch your item get transformed in the showcase gallery and collect EcoPoints.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/post" className="btn btn-primary btn-lg">
              Get Started — Post Your Waste
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
