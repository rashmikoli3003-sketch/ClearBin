import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/mockData';

export default function PostWaste() {
  const navigate = useNavigate();

  const [category, setCategory] = useState('plastic');
  const [location, setLocation] = useState('Central District, Block 4');
  const [quantity, setQuantity] = useState('12 clean bottles (~500g)');
  const [notes, setNotes] = useState('Rinsed and sorted. Ready for pickup or dropoff.');
  const [photoUploaded, setPhotoUploaded] = useState(true); // default preview for demo speed

  // Form submission state: 'idle' | 'matching' | 'success'
  const [status, setStatus] = useState('idle');
  const [matchingProgress, setMatchingProgress] = useState(0);

  const handleDetectLocation = () => {
    setLocation('GPS Detected: 2.3km from EcoHub Hubspot');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('matching');

    // Simulate animated matching algorithm steps
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      setMatchingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setStatus('success');
      }
    }, 400);
  };

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="section-tag">Circular Listing</span>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Post Your Reusable Waste</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Share what you have so nearby artisans, upcyclers, and NGOs can claim it.
        </p>
      </div>

      {status === 'idle' && (
        <form onSubmit={handleSubmit} className="card" style={{ padding: '2.25rem' }}>
          {/* Photo Upload Zone Placeholder */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              1. Item Photo (Placeholder Upload)
            </label>

            <div 
              style={{
                border: '2px dashed var(--border-glow)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                background: photoUploaded ? 'rgba(16, 185, 129, 0.04)' : 'rgba(255,255,255,0.02)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onClick={() => setPhotoUploaded(!photoUploaded)}
            >
              {photoUploaded ? (
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📸</div>
                  <div style={{ color: 'var(--primary-light)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    Mock Photo Selected: plastic_bottles_batch_01.jpg
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    (Click to toggle image placeholder state)
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📤</div>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    Drag & Drop or Click to Select Mock Photo
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Supports JPG, PNG, WEBP (Hackathon front-end dummy state)
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Waste Category Selection */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label htmlFor="category-select" style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              2. Waste Category
            </label>
            <select
              id="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none'
              }}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location Field */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label htmlFor="location-input" style={{ fontWeight: '700', fontSize: '0.95rem' }}>
                3. Pickup Location / Neighborhood
              </label>
              <button
                type="button"
                onClick={handleDetectLocation}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-light)',
                  cursor: 'pointer',
                  fontSize: '0.825rem',
                  fontWeight: '600'
                }}
              >
                📍 Use Current GPS
              </button>
            </div>
            <input
              id="location-input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter neighborhood or postal code..."
              required
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Quantity & Notes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <label htmlFor="quantity-input" style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                Estimated Quantity
              </label>
              <input
                id="quantity-input"
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 5 jars, 2kg fabric"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label htmlFor="notes-input" style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                Item Condition / Notes
              </label>
              <input
                id="notes-input"
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Clean, sorted, dry"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-full">
            Post Waste & Find Matches ➔
          </button>
        </form>
      )}

      {/* Mock Matching Animated State */}
      {status === 'matching' && (
        <div className="card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
          <div style={{
            width: '72px',
            height: '72px',
            margin: '0 auto 1.5rem auto',
            border: '4px solid rgba(16, 185, 129, 0.2)',
            borderTopColor: 'var(--primary-light)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Matching with Nearby Artisans...
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
            Analyzing material type ({category.toUpperCase()}) within 5km radius of {location}...
          </p>

          <div style={{
            width: '100%',
            maxWidth: '400px',
            height: '10px',
            background: 'var(--bg-surface-elevated)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
            margin: '0 auto 1.5rem auto'
          }}>
            <div style={{
              width: `${matchingProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--primary-emerald), var(--accent-lime))',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: '700' }}>
            {matchingProgress}% Complete
          </span>
        </div>
      )}

      {/* Mock Matching Success Confirmation */}
      {status === 'success' && (
        <div className="card" style={{ padding: '3.5rem 2rem', textAlign: 'center', borderColor: 'var(--border-glow)' }}>
          <div style={{
            fontSize: '3.5rem',
            marginBottom: '1rem',
            animation: 'bounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            🎉
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
            Matches Found!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 2rem auto' }}>
            Great news! We found <strong>3 verified upcyclers and 1 NGO</strong> looking for your {category.toUpperCase()} listing in your area.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/matches')} className="btn btn-primary btn-lg">
              View Your Matches ➔
            </button>
            <button onClick={() => setStatus('idle')} className="btn btn-secondary btn-lg">
              Post Another Item
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
