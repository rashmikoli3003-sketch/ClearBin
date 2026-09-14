import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GOAL_STATS, 
  PERSONA_STORY, 
  TESTIMONIAL_QUOTE
} from '../data/mockData';

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Hero Section - Warm, Grassroots Tone */}
      <section style={{
        padding: '5rem 0 4rem 0',
        background: 'linear-gradient(180deg, #F2ECE1 0%, var(--bg-main) 100%)',
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
            padding: '0.45rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: '700',
            marginBottom: '1.75rem'
          }}>
            🤝 Grassroots Waste-to-Artisan Platform • Circular Community Loop
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
            fontWeight: '800',
            letterSpacing: '-0.025em',
            maxWidth: '900px',
            margin: '0 auto 1.35rem auto',
            lineHeight: '1.15',
            color: 'var(--primary-forest)'
          }}>
            Your household waste still has value — <br />
            <span style={{ color: 'var(--accent-terracotta)' }}>
              let's find it a second life.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.65'
          }}>
            ClearBin connects households with reusable plastic, glass, fabric, e-waste, and batteries directly to nearby artisans, upcyclers, and green collectives who can reuse them.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/post" className="btn btn-primary btn-lg">
              Post Your Waste ➔
            </Link>
            <Link to="/matches" className="btn btn-secondary btn-lg">
              Explore Local Upcyclers
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Target / Goal Stats Strip (From Reference Design) */}
      <section className="container">
        <div className="goal-stats-strip">
          <div style={{ textAlign: 'center' }}>
            <span className="goal-stats-badge">
              🎯 Projected Impact Targets & Milestone Metrics
            </span>
          </div>

          <div className="goal-stats-grid">
            {GOAL_STATS.map((stat, idx) => (
              <div key={idx} className="goal-stat-item">
                <div className="goal-stat-number">{stat.number}</div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--primary-forest)', marginBottom: '0.2rem' }}>
                  {stat.targetLabel}
                </div>
                <div className="goal-stat-label">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4-Step "How It Works" Section (From Image 1 - Wastewise) */}
      <section style={{ padding: '3.5rem 0 4.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">A Simple Process For All Your Waste Management Needs</h2>
            <p className="section-desc">
              Delivering smart waste solutions for homes, micro-artisans, and green collectives to keep communities clean.
            </p>
          </div>

          <div className="how-it-works-grid">
            <div className="step-card-clean">
              <div className="step-icon-circle">📞</div>
              <h4>1. Request & Pickup</h4>
              <p>Waste pickups are scheduled and collected from homes, businesses, or neighborhood hubs.</p>
            </div>

            <div className="step-card-clean">
              <div className="step-icon-circle">🚚</div>
              <h4>2. Transportation</h4>
              <p>Waste is safely transported to specialized treatment, upcycling, or artisan workshop studios.</p>
            </div>

            <div className="step-card-clean">
              <div className="step-icon-circle">📦</div>
              <h4>3. Sorting & Processing</h4>
              <p>Waste is sorted into clear types and prepped for upcycling, crafting, or green disposal.</p>
            </div>

            <div className="step-card-clean">
              <div className="step-icon-circle">♻️</div>
              <h4>4. Upcycling & Second Life</h4>
              <p>Reusable materials are turned into value-added products, and creators earn EcoPoints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Overlapping Photo Collage & Checklist "Our Mission" Block (From Image 1 - Wastewise) */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container photo-collage-wrapper">
          {/* Overlapping Photo Cards Visual */}
          <div className="collage-photos-container">
            <div className="collage-card collage-card-1">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>♻️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>100% Circular</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Zero waste reaching municipal landfills</p>
            </div>

            <div className="collage-card collage-card-2">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🧵</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-forest)' }}>Artisan Crafts</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Transformed into local handmade goods</p>
            </div>

            <div className="collage-card collage-card-3">
              <div style={{ fontSize: '2.25rem', marginBottom: '0.25rem' }}>🌟</div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-forest)' }}>EcoPoints</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Rewarded on handoffs</p>
            </div>
          </div>

          {/* Checklist Mission Block */}
          <div>
            <span className="section-tag" style={{ textAlign: 'left' }}>Our Mission</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Responsible Waste Disposal for a Healthier Tomorrow
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              We specialize in innovative circular waste management solutions for residential and artisan clients. From doorstep collection to creative upcycling, we ensure responsible reuse that protects the environment.
            </p>

            <ul className="mission-checklist">
              <li>
                <span className="mission-check-icon">✓</span>
                <span>Deliver efficient, eco-friendly waste collection, sorting, and upcycling services.</span>
              </li>
              <li>
                <span className="mission-check-icon">✓</span>
                <span>Promote sustainability through household waste reduction and artisan initiatives.</span>
              </li>
              <li>
                <span className="mission-check-icon">✓</span>
                <span>Support informal waste worker livelihoods with dignified, pre-sorted materials.</span>
              </li>
              <li>
                <span className="mission-check-icon">✓</span>
                <span>Educate communities on responsible waste management and environmental stewardship.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Dark Forest-Green Full-Width Section Band (From Image 1 - Wastewise) */}
      <section className="dark-band-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ color: 'var(--primary-accent-lime)' }}>
            Grassroots Circular Movement
          </span>
          <h2 className="section-title" style={{ color: '#FFFFFF', maxWidth: '780px', margin: '0 auto 1.25rem auto' }}>
            Empowering 500+ Local Upcyclers & Community Collectives
          </h2>
          <p style={{ color: '#D1E0D7', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            Connecting everyday citizens with informal waste workers, studio artisans, and NGOs to build a sustainable, zero-waste neighborhood economy.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-accent-lime)', fontFamily: 'var(--font-heading)' }}>12,400+</div>
              <div style={{ fontSize: '0.95rem', color: '#EAF4ED', marginTop: '0.35rem' }}>Kg Waste Diverted</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-accent-lime)', fontFamily: 'var(--font-heading)' }}>3,850+</div>
              <div style={{ fontSize: '0.95rem', color: '#EAF4ED', marginTop: '0.35rem' }}>Completed Handoffs</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-accent-lime)', fontFamily: 'var(--font-heading)' }}>+35%</div>
              <div style={{ fontSize: '0.95rem', color: '#EAF4ED', marginTop: '0.35rem' }}>Artisan Income Uplift</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Grassroots Voices & Persona Section */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-main)' }}>
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
                <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="#EAF4ED" stroke="#2E7D32" strokeWidth="2"/>
                  <circle cx="50" cy="38" r="20" fill="#2E7D32"/>
                  <path d="M20 85C20 70 33 62 50 62C67 62 80 70 80 85" fill="#1C3829"/>
                  <path d="M42 35C42 35 46 39 50 39C54 39 58 35 58 35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="43" cy="32" r="2.5" fill="#FFFFFF"/>
                  <circle cx="57" cy="32" r="2.5" fill="#FFFFFF"/>
                  <circle cx="50" cy="25" r="2" fill="#C2410C"/>
                </svg>
              </div>
              <div className="persona-name">{PERSONA_STORY.name}</div>
              <div className="persona-role">{PERSONA_STORY.role}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
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

      {/* 7. Bordered Testimonial Quote Box ("What Da' People Sayin'?") (From Image 2 - Soul & Soil) */}
      <section style={{ padding: '3rem 0 4.5rem 0' }}>
        <div className="container">
          <div className="quote-box-bordered">
            <div className="quote-box-title">
              💬 WHAT DA' PEOPLE SAYIN'?
            </div>
            <p className="quote-box-text">
              "{TESTIMONIAL_QUOTE.quote}"
            </p>
            <div className="quote-box-author">
              — {TESTIMONIAL_QUOTE.author}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              ({TESTIMONIAL_QUOTE.tag} — Inspired by grassroots cooperatives like SwaCH)
            </div>
          </div>
        </div>
      </section>

      {/* 8. Scrolling Marquee Strip (From Image 1 - Wastewise) */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="marquee-item">♻️ PET & HDPE PLASTICS</span>
          <span className="marquee-item">🍾 GLASS BOTTLES & JARS</span>
          <span className="marquee-item">🧵 TEXTILES & DENIM</span>
          <span className="marquee-item">💻 E-WASTE RESCUE</span>
          <span className="marquee-item">🌱 ORGANIC COMPOSTING</span>
          <span className="marquee-item">🌟 ECOPOINTS REWARDS</span>
          <span className="marquee-item">♻️ PET & HDPE PLASTICS</span>
          <span className="marquee-item">🍾 GLASS BOTTLES & JARS</span>
          <span className="marquee-item">🧵 TEXTILES & DENIM</span>
          <span className="marquee-item">💻 E-WASTE RESCUE</span>
          <span className="marquee-item">🌱 ORGANIC COMPOSTING</span>
          <span className="marquee-item">🌟 ECOPOINTS REWARDS</span>
        </div>
      </div>
    </div>
  );
}
