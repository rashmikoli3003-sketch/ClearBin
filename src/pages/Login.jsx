import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp, DEMO_USERS } from '../context/AppContext';

export default function Login() {
  const navigate = useNavigate();
  const { login, signup, currentUser } = useApp();

  const [isSignup, setIsSignup] = useState(false);
  const [selectedRole, setSelectedRole] = useState('customer'); // 'customer' | 'artisan' | 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    if (isSignup) {
      signup(email, selectedRole, name, organization);
    } else {
      login(email, selectedRole, name);
    }

    if (selectedRole === 'admin') {
      navigate('/admin');
    } else if (selectedRole === 'artisan') {
      navigate('/matches');
    } else {
      navigate('/post');
    }
  };

  const handleQuickDemoLogin = (roleKey) => {
    const demo = DEMO_USERS[roleKey];
    login(demo.email, demo.role, demo.name);

    if (demo.role === 'admin') {
      navigate('/admin');
    } else if (demo.role === 'artisan') {
      navigate('/matches');
    } else {
      navigate('/post');
    }
  };

  return (
    <div
      style={{
        background: 'transparent',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3.5rem 1.5rem'
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '560px'
        }}
      >
        <div
          className="minimal-card"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: '#FFFFFF',
            boxShadow: '0 8px 30px rgba(28, 53, 45, 0.06)'
          }}
        >
          {/* Top Logo & Title */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                background: 'var(--primary-green, #1C352D)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                color: '#FFFFFF',
                fontSize: '1.5rem',
                margin: '0 auto 0.85rem auto'
              }}
            >
              🌱
            </div>
            <h1
              style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                color: 'var(--primary-green, #1C352D)',
                marginBottom: '0.35rem'
              }}
            >
              {isSignup ? 'Create ClearBin Account' : 'Welcome to ClearBin'}
            </h1>
            <p style={{ color: 'var(--text-muted, #5B7B6D)', fontSize: '0.95rem' }}>
              Select your role to access customized features.
            </p>
          </div>

          {/* Role Selection Cards */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--primary-green, #1C352D)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Choose User Account Type:
            </label>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem'
              }}
            >
              {/* Customer */}
              <button
                type="button"
                onClick={() => setSelectedRole('customer')}
                style={{
                  background: selectedRole === 'customer' ? 'var(--bg-pastel, #E8F0EA)' : '#FAF8F5',
                  border: selectedRole === 'customer' ? '2px solid var(--primary-green, #1C352D)' : '1px solid var(--border-light, #E2EAE4)',
                  borderRadius: '14px',
                  padding: '0.9rem 0.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>🏠</div>
                <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
                  Customer
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #5B7B6D)' }}>Household</div>
              </button>

              {/* Artisan/NGO */}
              <button
                type="button"
                onClick={() => setSelectedRole('artisan')}
                style={{
                  background: selectedRole === 'artisan' ? 'var(--bg-pastel, #E8F0EA)' : '#FAF8F5',
                  border: selectedRole === 'artisan' ? '2px solid var(--primary-green, #1C352D)' : '1px solid var(--border-light, #E2EAE4)',
                  borderRadius: '14px',
                  padding: '0.9rem 0.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>🎨</div>
                <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
                  NGO / Artisan
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #5B7B6D)' }}>Upcycler</div>
              </button>

              {/* Admin */}
              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                style={{
                  background: selectedRole === 'admin' ? 'var(--bg-pastel, #E8F0EA)' : '#FAF8F5',
                  border: selectedRole === 'admin' ? '2px solid var(--primary-green, #1C352D)' : '1px solid var(--border-light, #E2EAE4)',
                  borderRadius: '14px',
                  padding: '0.9rem 0.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>🛡️</div>
                <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
                  Admin
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #5B7B6D)' }}>Operations</div>
              </button>
            </div>
          </div>

          {/* 1-Click Quick Demo Login Section */}
          <div
            style={{
              background: 'var(--bg-pastel, #E8F0EA)',
              padding: '1rem',
              borderRadius: '14px',
              marginBottom: '1.75rem',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)', marginBottom: '0.65rem' }}>
              ⚡ 1-Click Quick Demo Access:
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('customer')}
                className="btn btn-secondary"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
              >
                🌱 Demo Customer
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('artisan')}
                className="btn btn-secondary"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
              >
                🎨 Demo NGO/Artisan
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('admin')}
                className="btn btn-secondary"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
              >
                🛡️ Demo Admin
              </button>
            </div>
          </div>

          {/* Standard Form */}
          <form onSubmit={handleAuthSubmit}>
            {isSignup && (
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)', marginBottom: '0.4rem' }}>
                  Full Name / Entity Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rashmi Koli or GreenHand NGO"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light, #E2EAE4)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            )}

            {isSignup && selectedRole === 'artisan' && (
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)', marginBottom: '0.4rem' }}>
                  Organization / NGO Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. GreenHand Craft Collective"
                  value={organization}
                  onChange={e => setOrganization(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light, #E2EAE4)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            )}

            <div style={{ marginBottom: '1.1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)', marginBottom: '0.4rem' }}>
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-light, #E2EAE4)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)', marginBottom: '0.4rem' }}>
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-light, #E2EAE4)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.95rem',
                fontSize: '1rem'
              }}
            >
              {isSignup ? `Register as ${selectedRole.toUpperCase()}` : `Log In as ${selectedRole.toUpperCase()}`}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted, #5B7B6D)' }}>
            {isSignup ? 'Already have an account?' : "Don't have an account yet?"}{' '}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary-green, #1C352D)',
                fontWeight: '800',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              {isSignup ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
