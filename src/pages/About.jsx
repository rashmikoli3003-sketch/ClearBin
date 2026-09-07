import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '960px' }}>
      {/* Page Header */}
      <div className="section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="section-tag">Vision & Purpose</span>
        <h1 className="section-title">Rethinking Waste as Resource Capital</h1>
        <p className="section-desc">
          How ClearBin solves household waste misallocation while supporting informal waste worker livelihoods and local creative upcyclers.
        </p>
      </div>

      {/* Problem Statement Card */}
      <div className="card" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.75rem' }}>🚨</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>The Problem Statement</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
          Millions of tons of potentially reusable household materials — clean PET bottles, glass jars, denim fabric, and working e-waste — are sent to municipal landfills every day.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
          <strong>Why do households discard valuable waste?</strong>
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginTop: '0.75rem', lineHeight: '1.8' }}>
          <li><strong>Inconvenience & Friction:</strong> No simple way to find who needs small quantities of specific waste.</li>
          <li><strong>Lack of Trust & Transparency:</strong> Households rarely know if segregated waste actually gets recycled or just dumped.</li>
          <li><strong>Zero Feedback Loop:</strong> Discarding feels unrewarding and invisible.</li>
        </ul>
      </div>

      {/* The ClearBin Loop Solution */}
      <div className="card" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.75rem' }}>🔄</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>The ClearBin Circular Loop</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          ClearBin creates a decentralized peer-to-artisan waste exchange that turns discarded items into raw materials for local creators:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>1. Hyperlocal Match</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Connects sellers with nearby upcyclers based on material demand and geographic distance.</p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>2. Verified Proof</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Track handoffs and see the transformed end-product in our public showcase.</p>
          </div>

          <div style={{ background: 'var(--bg-surface-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>3. Incentive Points</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Earn EcoPoints per handoff to redeem for eco-friendly goods or discount perks.</p>
          </div>
        </div>
      </div>

      {/* Empowering Informal Waste Pickers & Artisans */}
      <div className="card" style={{ padding: '2.5rem', marginBottom: '2.5rem', borderLeft: '4px solid var(--primary-emerald)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.75rem' }}>🤝</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>Livelihood & Informal Worker Empowerment</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
          In developing urban economies, informal waste pickers and micro-artisans perform the heavy lifting of waste recovery under dangerous conditions with poor compensation.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
          <strong>ClearBin provides:</strong>
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.8' }}>
          <li><strong>Dignified Pre-Sorted Supply:</strong> Direct access to clean, segregated household materials without digging through mixed landfills.</li>
          <li><strong>Direct Economic Uplift:</strong> Artisans reduce raw material purchasing costs, boosting earnings by up to 35%.</li>
          <li><strong>Formal Recognition:</strong> Connecting informal collectives with eco-conscious consumers and corporate sustainability programs.</li>
        </ul>
      </div>

      {/* CTA Box */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to test the prototype?</h3>
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
