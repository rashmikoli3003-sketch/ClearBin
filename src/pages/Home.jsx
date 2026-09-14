import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GOAL_STATS, 
  PERSONA_STORY
} from '../data/mockData';
import { TornEdgeMultiLayerTop, TornEdgeMultiLayerBottom } from '../components/TornEdge';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="home-page">
      {/* 1. Hero Section - Deep Bottle Green with Organic Boho Accents */}
      <section style={{
        padding: '5rem 0 4rem 0',
        background: 'radial-gradient(circle at 15% 20%, #234734 0%, #163023 70%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Botanical SVG Flourishes */}
        <div style={{ position: 'absolute', top: '30px', left: '40px', opacity: 0.15, fontSize: '4rem', pointerEvents: 'none' }}>
          🌿
        </div>
        <div style={{ position: 'absolute', bottom: '40px', right: '50px', opacity: 0.15, fontSize: '4.5rem', pointerEvents: 'none' }}>
          ☀️
        </div>

        <div className="container">
          <div className="reveal-on-scroll" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(200, 90, 50, 0.18)',
            border: '1px solid var(--accent-terracotta)',
            color: 'var(--accent-terracotta)',
            padding: '0.45rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: '700',
            marginBottom: '1.75rem'
          }}>
            🤝 Grassroots Waste-to-Artisan Platform • Circular Boho Economy
          </div>

          <h1 className="reveal-on-scroll" style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
            fontFamily: 'var(--font-heading)',
            maxWidth: '920px',
            margin: '0 auto 1.35rem auto',
            lineHeight: '1.15',
            color: 'var(--bg-parchment)'
          }}>
            Your household waste still has value — <br />
            <span style={{ color: 'var(--accent-amber)', fontStyle: 'italic' }}>
              let's find it a second life.
            </span>
          </h1>

          <p className="reveal-on-scroll" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            color: 'var(--text-muted-dark)',
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.65'
          }}>
            ClearBin connects households with reusable plastic, glass, fabric, e-waste, and batteries directly to nearby artisans, upcyclers, and green collectives who can reuse them.
          </p>

          <div className="reveal-on-scroll" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/post" className="btn btn-primary btn-lg">
              Post Your Waste ➔
            </Link>
            <Link to="/matches" className="btn btn-secondary btn-lg">
              Explore Local Upcyclers
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Target / Goal Stats Strip */}
      <section className="container reveal-on-scroll">
        <div style={{
          background: 'var(--bg-parchment)',
          color: 'var(--text-on-parchment)',
          border: '1.5px solid var(--border-parchment)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.25rem 1.75rem',
          margin: '-2.5rem auto 3.5rem auto',
          position: 'relative',
          zIndex: 10,
          boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
          clipPath: 'polygon(0% 1px, 100% 0px, 99% 100%, 1% 99%)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: '800',
              color: 'var(--accent-terracotta)',
              background: 'rgba(200, 90, 50, 0.12)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              🎯 Projected Impact Targets & Milestone Metrics
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            {GOAL_STATS.map((stat, idx) => (
              <div key={idx} style={{ padding: '0.75rem', borderRight: idx < GOAL_STATS.length - 1 ? '1px solid var(--border-parchment)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--bg-main)', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--bg-main)', marginBottom: '0.2rem' }}>
                  {stat.targetLabel}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary-parchment)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4-Step "How It Works" Section with Multi-Layered Green & Parchment Torn Paper Divider */}
      <TornEdgeMultiLayerTop fillBack="#8BB096" fillMid="#4D8B55" fillFront="#F4ECD8" height={60} />
      <section className="parchment-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-tag" style={{ color: 'var(--accent-terracotta)' }}>How It Works</span>
            <h2 className="section-title" style={{ color: 'var(--bg-main)' }}>
              A Simple Process For All Your Waste Management Needs
            </h2>
            <p className="section-desc" style={{ color: 'var(--text-secondary-parchment)' }}>
              Delivering smart waste solutions for homes, micro-artisans, and green collectives to keep communities clean.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            marginTop: '2.5rem'
          }}>
            <div className="card-parchment reveal-on-scroll" style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(77, 139, 85, 0.15)',
                border: '1px solid var(--primary-leaf)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                margin: '0 auto 1.25rem auto'
              }}>
                📞
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--bg-main)' }}>1. Request & Pickup</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary-parchment)', lineHeight: '1.5' }}>
                Waste pickups are scheduled and collected from homes, businesses, or neighborhood hubs.
              </p>
            </div>

            <div className="card-parchment reveal-on-scroll" style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(200, 90, 50, 0.15)',
                border: '1px solid var(--accent-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                margin: '0 auto 1.25rem auto'
              }}>
                🚚
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--bg-main)' }}>2. Transportation</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary-parchment)', lineHeight: '1.5' }}>
                Waste is safely transported to specialized treatment, upcycling, or artisan workshop studios.
              </p>
            </div>

            <div className="card-parchment reveal-on-scroll" style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(224, 159, 62, 0.15)',
                border: '1px solid var(--accent-amber)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                margin: '0 auto 1.25rem auto'
              }}>
                📦
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--bg-main)' }}>3. Sorting & Processing</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary-parchment)', lineHeight: '1.5' }}>
                Waste is sorted into clear types and prepped for upcycling, crafting, or green disposal.
              </p>
            </div>

            <div className="card-parchment reveal-on-scroll" style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(216, 131, 115, 0.15)',
                border: '1px solid var(--accent-dusty-rose)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                margin: '0 auto 1.25rem auto'
              }}>
                ♻️
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--bg-main)' }}>4. Upcycling & Second Life</h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary-parchment)', lineHeight: '1.5' }}>
                Reusable materials are turned into value-added products, and creators earn EcoPoints.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TornEdgeMultiLayerBottom fillBack="#8BB096" fillMid="#4D8B55" fillFront="#F4ECD8" height={60} />

      {/* 4. Dark Green Full-Width Impact Section Band */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-main)', textAlign: 'center' }}>
        <div className="container reveal-on-scroll">
          <span className="section-tag" style={{ color: 'var(--accent-amber)' }}>
            Grassroots Circular Movement
          </span>
          <h2 className="section-title" style={{ color: 'var(--bg-parchment)', maxWidth: '780px', margin: '0 auto 1.25rem auto' }}>
            Empowering 500+ Local Upcyclers & Community Collectives
          </h2>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            Connecting everyday citizens with informal waste workers, studio artisans, and NGOs to build a sustainable, zero-waste neighborhood economy.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="card-dark" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '400', color: 'var(--accent-amber)', fontFamily: 'var(--font-heading)' }}>12,400+</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted-dark)', marginTop: '0.35rem' }}>Kg Waste Diverted</div>
            </div>

            <div className="card-dark" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '400', color: 'var(--accent-amber)', fontFamily: 'var(--font-heading)' }}>3,850+</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted-dark)', marginTop: '0.35rem' }}>Completed Handoffs</div>
            </div>

            <div className="card-dark" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '400', color: 'var(--accent-amber)', fontFamily: 'var(--font-heading)' }}>+35%</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted-dark)', marginTop: '0.35rem' }}>Artisan Income Uplift</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Overlapping Photo Collage & Checklist "Our Mission" Block on Parchment */}
      <TornEdgeMultiLayerTop fillBack="#8BB096" fillMid="#4D8B55" fillFront="#F4ECD8" height={60} />
      <section className="parchment-section">
        <div className="container reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Overlapping Kraft & Parchment Photo Cards Visual */}
          <div style={{ position: 'relative', minHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="card-kraft" style={{
              width: '240px',
              height: '190px',
              position: 'absolute',
              top: '10px',
              left: '20px',
              transform: 'rotate(-4deg)',
              zIndex: 2,
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 12px 28px rgba(0,0,0,0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>♻️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#163023' }}>100% Circular</h3>
              <p style={{ fontSize: '0.85rem', color: '#2C4A38', fontWeight: '600' }}>Zero waste reaching municipal landfills</p>
            </div>

            <div style={{
              width: '250px',
              height: '200px',
              position: 'absolute',
              bottom: '10px',
              right: '20px',
              transform: 'rotate(3deg)',
              zIndex: 3,
              background: 'var(--bg-card-parchment)',
              border: '1px solid var(--border-parchment)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.25)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🧵</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--bg-main)' }}>Artisan Crafts</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary-parchment)' }}>Transformed into local handmade goods</p>
            </div>
          </div>

          {/* Checklist Mission Block */}
          <div>
            <span className="section-tag" style={{ color: 'var(--accent-terracotta)' }}>Our Mission</span>
            <h2 className="section-title" style={{ color: 'var(--bg-main)', marginBottom: '1.25rem' }}>
              Responsible Waste Disposal for a Healthier Tomorrow
            </h2>
            <p style={{ color: 'var(--text-secondary-parchment)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              We specialize in innovative circular waste management solutions for residential and artisan clients. From doorstep collection to creative upcycling, we ensure responsible reuse.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', fontSize: '1rem', color: 'var(--text-on-parchment)' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--accent-terracotta)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: '800', flexShrink: 0, marginTop: '0.15rem' }}>✓</span>
                <span>Deliver efficient, eco-friendly waste collection, sorting, and upcycling services.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', fontSize: '1rem', color: 'var(--text-on-parchment)' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--accent-terracotta)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: '800', flexShrink: 0, marginTop: '0.15rem' }}>✓</span>
                <span>Promote sustainability through household waste reduction and artisan initiatives.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', fontSize: '1rem', color: 'var(--text-on-parchment)' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--accent-terracotta)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: '800', flexShrink: 0, marginTop: '0.15rem' }}>✓</span>
                <span>Support informal waste worker livelihoods with dignified, pre-sorted materials.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <TornEdgeMultiLayerBottom fillBack="#8BB096" fillMid="#4D8B55" fillFront="#F4ECD8" height={60} />

      {/* 6. Grassroots Voices & Persona Section */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-main)' }}>
        <div className="container reveal-on-scroll">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Grassroots Voices</span>
            <h2 className="section-title">Meet the Person Behind the Waste</h2>
            <p className="section-desc">
              Real household choices create real livelihoods for local craftspeople.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-sage-light)',
            border: '1.5px dashed var(--border-dark)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: 'var(--bg-main)',
                border: '3px solid var(--accent-amber)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem auto'
              }}>
                <svg width="85" height="85" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="#163023" stroke="#E09F3E" strokeWidth="2"/>
                  <circle cx="50" cy="38" r="20" fill="#E09F3E"/>
                  <path d="M20 85C20 70 33 62 50 62C67 62 80 70 80 85" fill="#F4ECD8"/>
                </svg>
              </div>
              <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--bg-parchment)' }}>{PERSONA_STORY.name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', fontWeight: '700', textTransform: 'uppercase' }}>{PERSONA_STORY.role}</div>
            </div>

            <div>
              <blockquote className="font-handwritten" style={{ fontSize: '1.8rem', color: 'var(--bg-parchment)', lineHeight: '1.4', fontStyle: 'italic' }}>
                "{PERSONA_STORY.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Scrolling Marquee Strip */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="marquee-item">🌿 PET & HDPE PLASTICS</span>
          <span className="marquee-item">🍾 GLASS BOTTLES & JARS</span>
          <span className="marquee-item">🧵 TEXTILES & DENIM</span>
          <span className="marquee-item">💻 E-WASTE RESCUE</span>
          <span className="marquee-item">🌱 ORGANIC COMPOSTING</span>
          <span className="marquee-item">🌟 ECOPOINTS REWARDS</span>
          <span className="marquee-item">🌿 PET & HDPE PLASTICS</span>
          <span className="marquee-item">🍾 GLASS BOTTLES & JARS</span>
          <span className="marquee-item">🧵 TEXTILES & DENIM</span>
          <span className="marquee-item">💻 E-WASTE RESCUE</span>
        </div>
      </div>
    </div>
  );
}
