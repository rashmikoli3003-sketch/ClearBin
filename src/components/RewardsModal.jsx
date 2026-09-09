import React from 'react';
import { useApp } from '../context/AppContext';

const REWARDS_CATALOG = [
  {
    id: 'rew-1',
    title: '20% Off at EcoBazaar Store',
    description: 'Valid on handcrafted upcycled decor, planters, and organic lifestyle goods.',
    cost: 150,
    icon: '🪴',
    voucherCode: 'ECO-BIO-20'
  },
  {
    id: 'rew-2',
    title: 'Free DIY Upcycling Workshop Pass',
    description: 'Access to weekend artisan workshops on denim weaving & glass bottle etching.',
    cost: 250,
    icon: '🎨',
    voucherCode: 'WORKSHOP-PASS-2026'
  },
  {
    id: 'rew-3',
    title: 'Organic Heirloom Seed Kit',
    description: 'Pack of 5 organic vegetable & herb seed packets delivered to your doorstep.',
    cost: 180,
    icon: '🌱',
    voucherCode: 'GREEN-THUMB-SEEDS'
  },
  {
    id: 'rew-4',
    title: '₹150 Handloom Bag Voucher',
    description: 'Redeemable directly with local women’s weaver co-operatives.',
    cost: 300,
    icon: '👜',
    voucherCode: 'WEAVER-COOP-150'
  }
];

export default function RewardsModal() {
  const { ecoPoints, isRewardsOpen, setIsRewardsOpen, redeemReward } = useApp();

  if (!isRewardsOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="card" style={{
        maxWidth: '650px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem',
        border: '1px solid var(--border-glow)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', pb: '1rem' }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '0.2rem' }}>Circular Store</span>
            <h2 style={{ fontSize: '1.6rem', margin: 0 }}>Redeem EcoPoints</h2>
          </div>

          <button
            onClick={() => setIsRewardsOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '1.75rem',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        {/* User Current Balance Pill */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15))',
          border: '1px solid var(--primary-emerald)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.75rem'
        }}>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Your Available Balance</span>
            <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary-light)' }}>
              🌟 {ecoPoints} <span style={{ fontSize: '1rem', fontWeight: '600' }}>EcoPoints</span>
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'right', maxWidth: '180px' }}>
            Earn +100 to +250 points for every completed waste handoff!
          </div>
        </div>

        {/* Catalog */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {REWARDS_CATALOG.map(reward => {
            const canAfford = ecoPoints >= reward.cost;

            return (
              <div
                key={reward.id}
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '240px' }}>
                  <div style={{
                    fontSize: '2rem',
                    background: 'rgba(255,255,255,0.05)',
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {reward.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.2rem' }}>
                      {reward.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {reward.description}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--primary-light)', fontSize: '0.95rem' }}>
                    {reward.cost} pts
                  </span>
                  <button
                    onClick={() => redeemReward(reward)}
                    disabled={!canAfford}
                    className={`btn ${canAfford ? 'btn-primary' : 'btn-secondary'}`}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.85rem',
                      opacity: canAfford ? 1 : 0.5,
                      cursor: canAfford ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {canAfford ? 'Redeem Voucher' : 'Need More Pts'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <button onClick={() => setIsRewardsOpen(false)} className="btn btn-secondary btn-full">
            Close Store
          </button>
        </div>
      </div>
    </div>
  );
}
