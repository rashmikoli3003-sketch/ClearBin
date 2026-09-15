import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function PartnerDashboard() {
  const { currentUser, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div
      style={{
        minHeight: '85vh',
        padding: '4rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent'
      }}
    >
      <div
        style={{
          maxWidth: '540px',
          width: '100%',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 16px 40px rgba(28, 53, 45, 0.08)',
          border: '1px solid #E2EAE4',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            background: 'var(--bg-pastel, #E8F0EA)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            fontSize: '1.8rem'
          }}
        >
          ⏳
        </div>

        <span
          className="badge badge-pastel"
          style={{ marginBottom: '1rem', padding: '0.4rem 1rem', fontSize: '0.85rem' }}
        >
          Artisan / NGO Partner Dashboard
        </span>

        <h1
          style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            color: 'var(--primary-green, #1C352D)',
            marginBottom: '0.75rem'
          }}
        >
          Welcome, verification pending
        </h1>

        <p
          style={{
            color: 'var(--text-muted, #5B7B6D)',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}
        >
          Thank you for signing up as an artisan / NGO partner, <strong>{currentUser?.name || 'Partner'}</strong>! Our team is currently reviewing your organization details. Verification is typically completed within 24 hours.
        </p>

        <div
          style={{
            background: 'var(--bg-pastel, #E8F0EA)',
            borderRadius: '16px',
            padding: '1.25rem',
            textAlign: 'left',
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: 'var(--primary-green, #1C352D)'
          }}
        >
          <div style={{ fontWeight: '700', marginBottom: '0.4rem' }}>📋 Account Summary</div>
          <div>• <strong>Email:</strong> {currentUser?.email || 'N/A'}</div>
          <div>• <strong>Role:</strong> Partner / Upcycler</div>
          <div>• <strong>Status:</strong> Under Review (Pending)</div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/matches" className="btn btn-primary">
            Browse Upcycler Directory →
          </Link>
          <button onClick={handleLogout} className="btn btn-secondary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
