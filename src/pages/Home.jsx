import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div
      className="home-page"
      style={{
        background: 'transparent',
        color: 'var(--text-dark, #1C352D)',
        overflowX: 'hidden',
        position: 'relative'
      }}
    >
      {/* =========================================================================
         01. HERO SECTION (MINIMAL PASTEL GREEN & OFF-WHITE)
         ========================================================================= */}
      <section
        style={{
          padding: '4.5rem 1.5rem 5.5rem 1.5rem',
          position: 'relative',
          background: 'transparent'
        }}
      >
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Headline & Action Controls */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.82)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '2.25rem',
                borderRadius: '24px',
                border: '1px solid rgba(226, 234, 228, 0.8)',
                boxShadow: '0 8px 32px rgba(28, 53, 45, 0.05)'
              }}
            >
              <div
                className="badge badge-pastel"
                style={{
                  marginBottom: '1.25rem',
                  padding: '0.4rem 1rem',
                  fontSize: '0.85rem'
                }}
              >
                <span>🌱 Grassroots Waste-to-Artisan Platform</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: '800',
                  color: 'var(--primary-green, #1C352D)',
                  lineHeight: '1.15',
                  letterSpacing: '-0.025em',
                  marginBottom: '1.25rem'
                }}
              >
                What If Household Waste Wasn't The End?
              </h1>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-muted, #5B7B6D)',
                  lineHeight: '1.65',
                  marginBottom: '2.25rem',
                  maxWidth: '540px'
                }}
              >
                A smarter way to manage waste. Connecting households with reusable waste to nearby artisans, upcyclers, and recyclers for cleaner communities.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <Link
                  to="/post"
                  className="btn btn-primary"
                  style={{
                    padding: '0.95rem 2.2rem',
                    fontSize: '1rem'
                  }}
                >
                  Schedule Pickup →
                </Link>

                <Link
                  to="/matches"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.95rem 2rem',
                    fontSize: '1rem'
                  }}
                >
                  Explore Upcyclers
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Rounded Hero Photo Card */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  background: 'var(--bg-pastel, #E8F0EA)',
                  borderRadius: '28px',
                  zIndex: 1
                }}
              />

              <div
                className="minimal-card"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '1.25rem',
                  borderRadius: '24px',
                  background: '#FFFFFF'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '340px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '1.25rem'
                  }}
                >
                  <img
                    src="/assets/hero_recycling.jpg"
                    alt="A cleaner tomorrow is in your hands"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    padding: '0.25rem 0.5rem'
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: '700',
                        color: 'var(--primary-green, #1C352D)'
                      }}
                    >
                      A Cleaner Tomorrow
                    </h3>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-muted, #5B7B6D)'
                      }}
                    >
                      Small daily sorting habits lead to lasting impact.
                    </p>
                  </div>

                  <span
                    style={{
                      background: 'var(--bg-pastel, #E8F0EA)',
                      color: 'var(--primary-green, #1C352D)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}
                  >
                    Recycle 🌱
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         02. HOW IT WORKS (MINIMAL PASTEL GREEN CONTAINER)
         ========================================================================= */}
      <section
        id="how-it-works"
        style={{
          background: 'rgba(232, 240, 234, 0.65)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          padding: '6rem 1.5rem',
          position: 'relative'
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto 3.5rem auto'
            }}
          >
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">A Simple Process For A Cleaner Tomorrow</h2>
            <p className="section-desc">
              Four easy steps to turn household waste into valuable resources for local artisans and recyclers.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Step 1 */}
            <div className="minimal-card" style={{ textAlign: 'center', padding: '2.25rem 1.5rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'var(--bg-pastel, #E8F0EA)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  margin: '0 auto 1.25rem auto',
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  color: 'var(--primary-green, #1C352D)'
                }}
              >
                01
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>SORT</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted, #5B7B6D)' }}>
                Separate your paper, plastic, metal, and organic waste at source.
              </p>
            </div>

            {/* Step 2 */}
            <div className="minimal-card" style={{ textAlign: 'center', padding: '2.25rem 1.5rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'var(--bg-pastel, #E8F0EA)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  margin: '0 auto 1.25rem auto',
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  color: 'var(--primary-green, #1C352D)'
                }}
              >
                02
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>COLLECT</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted, #5B7B6D)' }}>
                Schedule a convenient pickup directly from your doorstep.
              </p>
            </div>

            {/* Step 3 */}
            <div className="minimal-card" style={{ textAlign: 'center', padding: '2.25rem 1.5rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'var(--bg-pastel, #E8F0EA)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  margin: '0 auto 1.25rem auto',
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  color: 'var(--primary-green, #1C352D)'
                }}
              >
                03
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>PROCESS</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted, #5B7B6D)' }}>
                Items are safely sorted and transferred to verified upcyclers.
              </p>
            </div>

            {/* Step 4 */}
            <div className="minimal-card" style={{ textAlign: 'center', padding: '2.25rem 1.5rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'var(--bg-pastel, #E8F0EA)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  margin: '0 auto 1.25rem auto',
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  color: 'var(--primary-green, #1C352D)'
                }}
              >
                04
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>REUSE</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted, #5B7B6D)' }}>
                Discarded materials get transformed into handcrafted goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         03. ABOUT CLEARBIN (MINIMAL 2-COLUMN WITH METRICS)
         ========================================================================= */}
      <section style={{ padding: '6.5rem 1.5rem', background: 'transparent' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left: Clean Photo Container */}
            <div className="minimal-card" style={{ padding: '1rem', borderRadius: '24px' }}>
              <div
                style={{
                  width: '100%',
                  height: '360px',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/assets/volunteer_cleanup.jpg"
                  alt="Cleaner communities"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right: Content & Statistics */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '2.25rem',
                borderRadius: '24px',
                border: '1px solid rgba(226, 234, 228, 0.8)',
                boxShadow: '0 8px 32px rgba(28, 53, 45, 0.05)'
              }}
            >
              <span className="section-tag">About ClearBin</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                Waste Solutions For A Brighter Tomorrow
              </h2>
              <p
                style={{
                  color: 'var(--text-muted, #5B7B6D)',
                  fontSize: '1.08rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}
              >
                We connect individuals, communities, and organizations with responsible waste collection and recycling options. Our mission is to empower sustainable circular living.
              </p>

              {/* 3 Metrics Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}
              >
                <div
                  style={{
                    background: 'var(--bg-pastel, #E8F0EA)',
                    padding: '1.25rem 1rem',
                    borderRadius: '16px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
                    1,200+
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>
                    Pickups
                  </div>
                </div>

                <div
                  style={{
                    background: 'var(--bg-pastel, #E8F0EA)',
                    padding: '1.25rem 1rem',
                    borderRadius: '16px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
                    15+
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>
                    Communities
                  </div>
                </div>

                <div
                  style={{
                    background: 'var(--bg-pastel, #E8F0EA)',
                    padding: '1.25rem 1rem',
                    borderRadius: '16px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
                    3,500kg
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>
                    Recycled
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary">
                Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         04. WASTE CATEGORIES (MINIMAL PASTEL GRID)
         ========================================================================= */}
      <section
        id="waste-guide"
        style={{
          background: 'rgba(232, 240, 234, 0.65)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          padding: '6rem 1.5rem'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            <div>
              <span className="section-tag">Waste Categories</span>
              <h2 className="section-title">Know Your Waste</h2>
              <p className="section-desc" style={{ maxWidth: '560px' }}>
                Learn how to properly separate different waste streams for optimal recycling and artisan upcycling.
              </p>
            </div>

            <Link to="/matches" className="btn btn-primary">
              Explore Waste Guide →
            </Link>
          </div>

          {/* 6 Minimal Category Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {/* Paper */}
            <div className="minimal-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                <img src="/assets/waste_paper.jpg" alt="Paper waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-green, #1C352D)' }}>Paper</h4>
            </div>

            {/* Plastic */}
            <div className="minimal-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                <img src="/assets/waste_plastic.jpg" alt="Plastic waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-green, #1C352D)' }}>Plastic</h4>
            </div>

            {/* Glass */}
            <div className="minimal-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                <img src="/assets/waste_glass.jpg" alt="Glass waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-green, #1C352D)' }}>Glass</h4>
            </div>

            {/* Metal */}
            <div className="minimal-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                <img src="/assets/waste_metal.jpg" alt="Metal waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-green, #1C352D)' }}>Metal</h4>
            </div>

            {/* Organic */}
            <div className="minimal-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                <img src="/assets/waste_organic.jpg" alt="Organic waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-green, #1C352D)' }}>Organic</h4>
            </div>

            {/* E-waste */}
            <div className="minimal-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ width: '100%', height: '120px', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                <img src="/assets/waste_ewaste.jpg" alt="E-waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-green, #1C352D)' }}>E-waste</h4>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         05. COMMUNITY IMPACT
         ========================================================================= */}
      <section id="community" style={{ padding: '6.5rem 1.5rem', background: 'transparent' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left: Photos Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}
            >
              <div className="minimal-card" style={{ padding: '0.75rem', borderRadius: '18px' }}>
                <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src="/assets/seedling_hands.jpg" alt="Plant seedling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              <div className="minimal-card" style={{ padding: '0.75rem', borderRadius: '18px' }}>
                <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src="/assets/nature_mountains.jpg" alt="Nature mountains" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* Right: Story & Checklist */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '2.25rem',
                borderRadius: '24px',
                border: '1px solid rgba(226, 234, 228, 0.8)',
                boxShadow: '0 8px 32px rgba(28, 53, 45, 0.05)'
              }}
            >
              <span className="section-tag">Community Impact</span>
              <h2 className="section-title">Real People. Real Change.</h2>
              <p
                style={{
                  color: 'var(--text-muted, #5B7B6D)',
                  fontSize: '1.08rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}
              >
                From cleaner streets to greener neighbourhoods, ClearBin is building an active community that cares for our environment.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)' }}>
                  <span style={{ color: 'var(--accent-sage, #81A693)' }}>✓</span> Cleaner cities
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)' }}>
                  <span style={{ color: 'var(--accent-sage, #81A693)' }}>✓</span> Healthier lives
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)' }}>
                  <span style={{ color: 'var(--accent-sage, #81A693)' }}>✓</span> Greener future
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)' }}>
                  <span style={{ color: 'var(--accent-sage, #81A693)' }}>✓</span> Empowered artisans
                </div>
              </div>

              <Link to="/showcase" className="btn btn-primary">
                Join the Movement →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         06. CTA BANNER & FOOTER
         ========================================================================= */}
      <section
        id="contact"
        style={{
          padding: '4rem 1.5rem 2.5rem 1.5rem',
          background: 'transparent'
        }}
      >
        <div className="container">
          {/* CTA Banner Container */}
          <div
            style={{
              background: 'var(--primary-green, #1C352D)',
              color: '#FFFFFF',
              borderRadius: '24px',
              padding: '4rem 3rem',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2.5rem',
              marginBottom: '4rem',
              boxShadow: '0 12px 36px rgba(28, 53, 45, 0.18)'
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                  lineHeight: '1.2'
                }}
              >
                Ready To Make A Difference?
              </h2>
              <p
                style={{
                  color: 'var(--bg-pastel, #E8F0EA)',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}
              >
                Schedule a pickup today and be a vital part of the local circular economy.
              </p>
            </div>

            <Link
              to="/post"
              className="btn"
              style={{
                background: '#FFFFFF',
                color: 'var(--primary-green, #1C352D)',
                padding: '1rem 2.4rem',
                fontSize: '1rem',
                fontWeight: '800'
              }}
            >
              Schedule Pickup →
            </Link>
          </div>

          {/* Minimal Footer */}
          <div
            style={{
              borderTop: '1px solid var(--border-light, #E2EAE4)',
              paddingTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              color: 'var(--text-muted, #5B7B6D)',
              fontSize: '0.9rem'
            }}
          >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'var(--primary-green, #1C352D)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#FFFFFF',
                  fontSize: '1.1rem'
                }}
              >
                🌱
              </div>
              <span style={{ fontWeight: '800', color: 'var(--primary-green, #1C352D)', fontSize: '1.2rem' }}>
                ClearBin
              </span>
            </div>

            {/* Quick Links */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>Home</Link>
              <Link to="/about" style={{ color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>About</Link>
              <a href="#waste-guide" style={{ color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>Waste Guide</a>
              <a href="#community" style={{ color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>Community</a>
              <a href="#contact" style={{ color: 'var(--text-muted, #5B7B6D)', fontWeight: '600' }}>Contact</a>
            </div>

            {/* Copyright */}
            <div>
              <span>Made for a Cleaner Tomorrow. 🌱</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}