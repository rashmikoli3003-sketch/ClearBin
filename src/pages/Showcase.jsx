import React from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import { SHOWCASE_ITEMS } from '../data/mockData';

export default function Showcase() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div className="section-header">
        <span className="section-tag">Upcycling Stories</span>
        <h1 className="section-title">Before & After Showcase</h1>
        <p className="section-desc">
          Witness how everyday household waste gets transformed into valuable, handcrafted products by local artisans and eco-collectives.
        </p>
      </div>

      {/* Points & Impact Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))',
        border: '1px solid var(--border-glow)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem 2rem',
        marginBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            fontSize: '2.5rem',
            background: 'rgba(16, 185, 129, 0.2)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            🌟
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>Circular Reward Program</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Every completed handoff awards EcoPoints redeemable for green store discounts or artisan product drops.
            </p>
          </div>
        </div>

        <div style={{
          background: 'var(--bg-surface-elevated)',
          padding: '0.75rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          fontWeight: '700',
          color: 'var(--primary-light)',
          fontSize: '1rem'
        }}>
          Total Points Distributed: 45,200 pts
        </div>
      </div>

      {/* Showcase Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {SHOWCASE_ITEMS.map(item => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
