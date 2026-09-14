import React, { useState } from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import { useApp } from '../context/AppContext';

export default function Showcase() {
  const { showcaseList, ecoPoints, addShowcaseStory } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [beforeText, setBeforeText] = useState('');
  const [afterText, setAfterText] = useState('');
  const [artisan, setArtisan] = useState('Local Eco-Artisan');
  const [caption, setCaption] = useState('');

  const handleSubmitStory = async (e) => {
    e.preventDefault();

    await addShowcaseStory({
      title,
      beforeText,
      afterText,
      artisan,
      caption,
      category: 'plastic',
      points: 150
    });

    setIsModalOpen(false);
    setTitle('');
    setBeforeText('');
    setAfterText('');
    setCaption('');
  };

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
        marginBottom: '2.5rem',
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
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>Circular Community Impact</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Every completed handoff awards EcoPoints redeemable for green store discounts or artisan product drops.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            background: 'var(--bg-surface-elevated)',
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            fontWeight: '700',
            color: 'var(--primary-light)',
            fontSize: '0.95rem'
          }}>
            Total EcoPoints Issued: <strong>{45200 + ecoPoints} pts</strong>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
          >
            + Submit Upcycling Story
          </button>
        </div>
      </div>

      {/* Showcase Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {showcaseList.map(item => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>

      {/* SUBMIT STORY MODAL */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="card" style={{ maxWidth: '540px', width: '100%', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.4rem' }}>Submit Upcycled Transformation</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitStory}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                  Transformation Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Broken Glass Bottles to Etched Flower Vases"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    Before Item (Waste Input)
                  </label>
                  <input
                    type="text"
                    value={beforeText}
                    onChange={(e) => setBeforeText(e.target.value)}
                    placeholder="e.g. 5 Pickle Glass Jars"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    After Item (End Product)
                  </label>
                  <input
                    type="text"
                    value={afterText}
                    onChange={(e) => setAfterText(e.target.value)}
                    placeholder="e.g. Set of 3 Soy Candles"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                  Artisan / Studio Name
                </label>
                <input
                  type="text"
                  value={artisan}
                  onChange={(e) => setArtisan(e.target.value)}
                  placeholder="e.g. ReGlass NGO Collective"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                  Transformation Process / Story
                </label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Describe how the item was cleaned, crafted, and upcycled..."
                  required
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="submit" className="btn btn-primary btn-full">
                  Add to Showcase 🎨
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary btn-full">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
