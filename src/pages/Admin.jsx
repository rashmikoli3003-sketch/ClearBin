import React from 'react';
import { useApp } from '../context/AppContext';

export default function Admin() {
  const {
    currentUser, switchUserRole, userListings, deleteListing,
    pickupRequests, completePickup, ecoPoints, seedDemoData
  } = useApp();

  const activeCount = userListings.filter(l => l.status === 'active').length;
  const matchedCount = userListings.filter(l => l.status === 'matched').length;
  const completedCount = userListings.filter(l => l.status === 'completed').length;
  const totalPickups = pickupRequests.length;

  return (
    <div
      style={{
        background: 'transparent',
        color: 'var(--text-dark, #1C352D)',
        minHeight: '100vh',
        padding: '2.5rem 1.5rem 4rem 1.5rem'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Admin Header */}
        <div
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <div
              className="badge badge-pastel"
              style={{ marginBottom: '0.5rem', background: '#DCE9DF' }}
            >
              <span>🛡️ Platform Administration & Operations</span>
            </div>
            <h1
              style={{
                fontSize: '2.4rem',
                fontWeight: '800',
                color: 'var(--primary-green, #1C352D)'
              }}
            >
              Admin Operations Control Center
            </h1>
            <p style={{ color: 'var(--text-muted, #5B7B6D)', fontSize: '1rem' }}>
              Real-time platform metrics, waste post moderation, pickup management, and user role overrides.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={seedDemoData}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.2rem', fontSize: '0.88rem' }}
            >
              🌱 Seed Demo Data
            </button>

            {currentUser && currentUser.role !== 'admin' && (
              <button
                onClick={() => switchUserRole('admin')}
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.88rem' }}
              >
                🛡️ Switch to Admin Role
              </button>
            )}
          </div>
        </div>

        {/* System Analytics Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          <div className="minimal-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #5B7B6D)', fontWeight: '700' }}>
              Total Waste Postings
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)', marginTop: '0.2rem' }}>
              {userListings.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#5B7B6D', marginTop: '0.3rem' }}>
              {activeCount} Active • {matchedCount} Matched • {completedCount} Completed
            </div>
          </div>

          <div className="minimal-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #5B7B6D)', fontWeight: '700' }}>
              Total Pickup Requests
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)', marginTop: '0.2rem' }}>
              {totalPickups}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#5B7B6D', marginTop: '0.3rem' }}>
              Scheduled & Completed Pickups
            </div>
          </div>

          <div className="minimal-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #5B7B6D)', fontWeight: '700' }}>
              System EcoPoints Balance
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)', marginTop: '0.2rem' }}>
              {ecoPoints} pts
            </div>
            <div style={{ fontSize: '0.8rem', color: '#5B7B6D', marginTop: '0.3rem' }}>
              Distributed Rewards Balance
            </div>
          </div>

          <div className="minimal-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #5B7B6D)', fontWeight: '700' }}>
              Active User Role
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)', marginTop: '0.4rem' }}>
              {currentUser ? currentUser.role.toUpperCase() : 'GUEST'}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#5B7B6D', marginTop: '0.3rem' }}>
              {currentUser ? currentUser.email : 'Not Logged In'}
            </div>
          </div>
        </div>

        {/* Waste Listings Moderation Table */}
        <div
          className="minimal-card"
          style={{
            padding: '2rem',
            marginBottom: '3rem',
            background: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
              📦 Waste Postings Management ({userListings.length})
            </h2>
          </div>

          {userListings.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted, #5B7B6D)' }}>
              No waste postings found in database. Click <strong>"Seed Demo Data"</strong> above to populate sample postings.
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-light, #E2EAE4)', color: 'var(--text-muted, #5B7B6D)' }}>
                    <th style={{ padding: '0.85rem' }}>Item / Title</th>
                    <th style={{ padding: '0.85rem' }}>Category</th>
                    <th style={{ padding: '0.85rem' }}>Location</th>
                    <th style={{ padding: '0.85rem' }}>Posted By</th>
                    <th style={{ padding: '0.85rem' }}>Status</th>
                    <th style={{ padding: '0.85rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userListings.map(item => (
                    <tr key={item.id} style={{ borderBottom: '1px solid var(--border-light, #E2EAE4)' }}>
                      <td style={{ padding: '0.85rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)' }}>
                        {item.title || item.item || 'Waste Item'}
                      </td>
                      <td style={{ padding: '0.85rem' }}>
                        <span className="badge badge-pastel">{item.category || 'General'}</span>
                      </td>
                      <td style={{ padding: '0.85rem', color: 'var(--text-muted, #5B7B6D)' }}>
                        {item.location || 'Local'}
                      </td>
                      <td style={{ padding: '0.85rem', color: 'var(--text-muted, #5B7B6D)' }}>
                        {item.postedBy || 'Resident'}
                      </td>
                      <td style={{ padding: '0.85rem' }}>
                        <span
                          style={{
                            background: item.status === 'completed' ? '#DCE9DF' : item.status === 'matched' ? '#F5ECE0' : '#E8F0EA',
                            color: 'var(--primary-green, #1C352D)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '0.78rem'
                          }}
                        >
                          {item.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem', textAlign: 'right' }}>
                        <button
                          onClick={() => deleteListing(item.id)}
                          style={{
                            background: '#FCE8E8',
                            border: 'none',
                            color: '#B83232',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '8px',
                            fontWeight: '700',
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pickup Requests Table */}
        <div
          className="minimal-card"
          style={{
            padding: '2rem',
            background: '#FFFFFF',
            marginBottom: '3rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)' }}>
              🚚 Scheduled Pickup Claims ({pickupRequests.length})
            </h2>
          </div>

          {pickupRequests.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted, #5B7B6D)' }}>
              No active pickup requests recorded yet.
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-light, #E2EAE4)', color: 'var(--text-muted, #5B7B6D)' }}>
                    <th style={{ padding: '0.85rem' }}>Artisan / Partner</th>
                    <th style={{ padding: '0.85rem' }}>Material Stream</th>
                    <th style={{ padding: '0.85rem' }}>Date & Time</th>
                    <th style={{ padding: '0.85rem' }}>EcoPoints Offer</th>
                    <th style={{ padding: '0.85rem' }}>Status</th>
                    <th style={{ padding: '0.85rem', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pickupRequests.map(req => (
                    <tr key={req.id} style={{ borderBottom: '1px solid var(--border-light, #E2EAE4)' }}>
                      <td style={{ padding: '0.85rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)' }}>
                        {req.artisanName || 'NGO Partner'}
                      </td>
                      <td style={{ padding: '0.85rem' }}>{req.material || 'Recyclables'}</td>
                      <td style={{ padding: '0.85rem', color: 'var(--text-muted, #5B7B6D)' }}>
                        {req.pickupDate || 'Scheduled'}
                      </td>
                      <td style={{ padding: '0.85rem', fontWeight: '700', color: 'var(--primary-green, #1C352D)' }}>
                        +{req.pointsOffer || 150} pts
                      </td>
                      <td style={{ padding: '0.85rem' }}>
                        <span
                          style={{
                            background: req.status === 'completed' ? '#DCE9DF' : '#F5ECE0',
                            color: 'var(--primary-green, #1C352D)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '0.78rem'
                          }}
                        >
                          {req.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem', textAlign: 'right' }}>
                        {req.status !== 'completed' && (
                          <button
                            onClick={() => completePickup(req.id)}
                            className="btn btn-primary"
                            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                          >
                            Mark Complete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* User Role Switcher Section */}
        <div
          className="minimal-card"
          style={{
            padding: '2rem',
            background: 'var(--bg-pastel, #E8F0EA)'
          }}
        >
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-green, #1C352D)', marginBottom: '0.75rem' }}>
            👤 Role Override Switcher (Demo Testing Tool)
          </h2>
          <p style={{ color: 'var(--text-muted, #5B7B6D)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
            Instantly switch the current active session role to test Customer, Artisan/NGO, or Admin privileges across the site.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => switchUserRole('customer')}
              className="btn btn-secondary"
              style={{
                background: currentUser?.role === 'customer' ? 'var(--primary-green, #1C352D)' : '#FFFFFF',
                color: currentUser?.role === 'customer' ? '#FFFFFF' : 'var(--primary-green, #1C352D)'
              }}
            >
              🌱 Switch to Customer Role
            </button>

            <button
              onClick={() => switchUserRole('artisan')}
              className="btn btn-secondary"
              style={{
                background: currentUser?.role === 'artisan' ? 'var(--primary-green, #1C352D)' : '#FFFFFF',
                color: currentUser?.role === 'artisan' ? '#FFFFFF' : 'var(--primary-green, #1C352D)'
              }}
            >
              🎨 Switch to Artisan/NGO Role
            </button>

            <button
              onClick={() => switchUserRole('admin')}
              className="btn btn-secondary"
              style={{
                background: currentUser?.role === 'admin' ? 'var(--primary-green, #1C352D)' : '#FFFFFF',
                color: currentUser?.role === 'admin' ? '#FFFFFF' : 'var(--primary-green, #1C352D)'
              }}
            >
              🛡️ Switch to Admin Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
