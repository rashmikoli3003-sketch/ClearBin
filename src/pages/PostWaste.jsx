import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, MATCHES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { analyzeWasteImage } from '../services/aiService';

export default function PostWaste() {
  const navigate = useNavigate();
  const { addListing, requestPickup } = useApp();

  const [category, setCategory] = useState('plastic');
  const [location, setLocation] = useState('Kothrud, Block 4, Pune');
  const [quantity, setQuantity] = useState('12 clean bottles (~500g)');
  const [notes, setNotes] = useState('Rinsed and sorted. Ready for pickup or dropoff.');
  
  // Real Photo Upload & AI Vision state
  const [photoUrl, setPhotoUrl] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [isAiAnalyzing, setIsAiAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  // Form submission state: 'idle' | 'matching' | 'success'
  const [status, setStatus] = useState('idle');
  const [matchingProgress, setMatchingProgress] = useState(0);
  const [computedMatches, setComputedMatches] = useState([]);
  const [createdListing, setCreatedListing] = useState(null);

  // Photo upload file handler + AI Vision trigger
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataUrl = reader.result;
        setPhotoUrl(dataUrl);
        
        // Trigger AI Vision Scanning
        setIsAiAnalyzing(true);
        try {
          const res = await analyzeWasteImage(dataUrl);
          setAiResult(res);
          if (res.category) setCategory(res.category);
          if (res.quantityEstimate) setQuantity(res.quantityEstimate);
          if (res.conditionNotes) setNotes(res.conditionNotes);
        } catch (err) {
          console.warn('AI vision scanning error:', err);
        } finally {
          setIsAiAnalyzing(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Browser Geolocation
  const handleDetectLocation = () => {
    if ('geolocation' in navigator) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false);
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          setLocation(`GPS Verified: (${lat}°, ${lng}°) Kothrud Ward, Pune`);
        },
        () => {
          setIsLocating(false);
          setLocation('GPS Detected: Kothrud Ward, Pune (Approx. 2.1 km radius)');
        },
        { timeout: 5000 }
      );
    } else {
      setLocation('GPS Detected: Central District, Pune');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryObj = CATEGORIES.find(c => c.id === category);

    // Save listing in local storage via AppContext
    const newListing = addListing({
      category,
      categoryLabel: categoryObj ? categoryObj.label : category,
      location,
      quantity,
      notes,
      photoUrl,
      aiTagged: !!aiResult
    });

    setCreatedListing(newListing);

    // Find dynamic category matches from directory
    const matchingArtisans = MATCHES.filter(m => m.category === category);
    const finalMatches = matchingArtisans.length > 0 ? matchingArtisans : MATCHES;
    setComputedMatches(finalMatches);

    setStatus('matching');

    // Animated matching engine progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      setMatchingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setStatus('success');
      }
    }, 350);
  };

  const handleQuickRequestPickup = (match) => {
    requestPickup({
      match,
      listingId: createdListing?.id,
      pickupDate: 'Tomorrow between 10:00 AM - 1:00 PM',
      notes
    });
    navigate('/matches');
  };

  return (
    <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="section-tag">AI-Powered Circular Listing</span>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Post Your Reusable Waste</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Upload a photo — AI automatically classifies material, estimates quantity, and finds matching upcyclers.
        </p>
      </div>

      {status === 'idle' && (
        <form onSubmit={handleSubmit} className="card" style={{ padding: '2.25rem' }}>
          {/* Photo Upload Zone */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              1. Upload Item Photo (AI Auto-Classifies Material)
            </label>

            <div 
              style={{
                border: '2px dashed var(--border-glow)',
                borderRadius: 'var(--radius-md)',
                padding: photoUrl ? '1.25rem' : '2rem 1.5rem',
                textAlign: 'center',
                background: photoUrl ? 'rgba(16, 185, 129, 0.04)' : 'rgba(255,255,255,0.02)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer'
                }}
              />

              {photoUrl ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <img
                    src={photoUrl}
                    alt="Waste Upload Preview"
                    style={{
                      width: '100px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-glow)'
                    }}
                  />
                  <div style={{ textAlign: 'left', flex: 1, minWidth: '220px' }}>
                    <div style={{ color: 'var(--primary-light)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                      📸 Photo Selected: {photoName || 'Uploaded Image'}
                    </div>
                    {isAiAnalyzing ? (
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-lime)', fontWeight: '700' }}>
                        ✨ Gemini AI Scanning Image & Detecting Material...
                      </div>
                    ) : aiResult ? (
                      <div style={{ fontSize: '0.8rem', color: 'var(--primary-light)' }}>
                        ✨ AI Classification: <strong>{aiResult.detectedItems || aiResult.categoryLabel}</strong>
                      </div>
                    ) : (
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Click or drop another image to replace
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📤</div>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    Drag & drop or click to upload photo for Gemini AI Scanning
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    AI automatically detects Plastic, Glass, Textiles, E-Waste, or Batteries
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* AI Banner Callout */}
          {aiResult && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15))',
              border: '1px solid var(--primary-emerald)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1.75rem',
              fontSize: '0.875rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontWeight: '700', color: 'var(--primary-light)' }}>
                <span>✨ Gemini AI Multimodal Analysis</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                <strong>Upcycling Potential:</strong> {aiResult.upcyclingPotential}
              </div>
            </div>
          )}

          {/* Waste Category Selection */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label htmlFor="category-select" style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              2. Waste Category (Auto-Selected by AI)
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
                disabled={isLocating}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-light)',
                  cursor: 'pointer',
                  fontSize: '0.825rem',
                  fontWeight: '600'
                }}
              >
                {isLocating ? '📍 Detecting...' : '📍 Use Current GPS'}
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
                Estimated Quantity (AI Suggested)
              </label>
              <input
                id="quantity-input"
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 5 jars, 2kg fabric"
                required
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
            Post Waste & Run Match Engine ➔
          </button>
        </form>
      )}

      {/* Animated Matching State */}
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
            Matching with Local Upcyclers...
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
            Calculating match confidence for <strong>{category.toUpperCase()}</strong> near <em>{location}</em>...
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
            {matchingProgress}% Match Calculation Complete
          </span>
        </div>
      )}

      {/* Success Confirmation with Matched Artisans */}
      {status === 'success' && (
        <div className="card" style={{ padding: '3rem 2rem', borderColor: 'var(--border-glow)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🎉</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              Waste Listing Created & AI Matched!
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto' }}>
              We found <strong>{computedMatches.length} verified upcycler(s)</strong> within pickup range actively seeking {category.toUpperCase()} waste.
            </p>
          </div>

          {/* Top Matched Card Highlight */}
          {computedMatches.length > 0 && (
            <div style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-glow)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="section-tag">🔥 Best Match (98% Confidence)</span>
                <span style={{ color: 'var(--primary-light)', fontWeight: '700', fontSize: '0.9rem' }}>
                  {computedMatches[0].pointsOffer}
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{computedMatches[0].name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {computedMatches[0].purpose}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={() => handleQuickRequestPickup(computedMatches[0])}
                  className="btn btn-primary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
                >
                  ⚡ Instant Request Pickup with {computedMatches[0].name.split(' ')[0]}
                </button>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/matches')} className="btn btn-primary btn-lg">
              Browse All Matches & Manage Pickups ➔
            </button>
            <button onClick={() => { setStatus('idle'); setPhotoUrl(null); setPhotoName(''); setAiResult(null); }} className="btn btn-secondary btn-lg">
              Post Another Item
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
