import React, { useState } from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import { useApp } from '../context/AppContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Showcase() {
  useScrollReveal();
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
    <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
      {/* 1. Scrapbook Corkboard Main Container */}
      <div className="scrapbook-board reveal-on-scroll">
        {/* Background Decorative Sticker SVGs */}
        <div style={{ position: 'absolute', top: '25px', left: '30px', fontSize: '2rem', opacity: 0.85, transform: 'rotate(-12deg)' }}>
          🌿
        </div>
        <div style={{ position: 'absolute', top: '120px', right: '40px', fontSize: '2.2rem', opacity: 0.85, transform: 'rotate(15deg)' }}>
          🌸
        </div>
        <div style={{ position: 'absolute', bottom: '80px', left: '45px', fontSize: '2.4rem', opacity: 0.8, transform: 'rotate(8deg)' }}>
          ☀️
        </div>
        <div style={{ position: 'absolute', bottom: '30px', right: '50px', fontSize: '2.5rem', opacity: 0.85, transform: 'rotate(-15deg)' }}>
          ⭐
        </div>

        {/* 2. Pinned Scrapbook Header Note */}
        <div style={{
          background: 'var(--bg-card-parchment)',
          border: '1px solid var(--border-parchment)',
          borderRadius: '4px',
          padding: '2.25rem 2rem',
          maxWidth: '780px',
          margin: '0 auto 3rem auto',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          position: 'relative',
          transform: 'rotate(-1deg)',
          textAlign: 'center'
        }}>
          {/* Top Washi Tape Clip */}
          <div className="washi-tape" style={{ width: '130px', background: 'rgba(200, 90, 50, 0.75)', border: '1.5px dashed rgba(176, 74, 37, 0.9)' }} />

          <span className="font-handwritten" style={{ fontSize: '1.75rem', color: 'var(--accent-terracotta)', display: 'block', marginBottom: '0.25rem' }}>
            📌 Community Vision-Board & Scrapbook
          </span>

          <h1 className="font-handwritten" style={{ fontSize: '3.2rem', color: 'var(--bg-main)', marginBottom: '0.5rem', lineHeight: '1.1' }}>
            Upcycling Transformation Gallery
          </h1>

          <p className="font-handwritten" style={{ fontSize: '1.5rem', color: 'var(--text-secondary-parchment)', maxWidth: '640px', margin: '0 auto 1.5rem auto', lineHeight: '1.3' }}>
            "Witness how everyday household waste gets transformed into handcrafted goods by local artisans!"
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{
              background: '#FFFFFF',
              padding: '0.5rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-parchment)',
              fontWeight: '700',
              color: 'var(--bg-main)',
              fontSize: '0.9rem'
            }}>
              🌟 Total EcoPoints Issued: <strong>{45200 + ecoPoints} pts</strong>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.95rem' }}
            >
              + Pin Upcycling Story
            </button>
          </div>
        </div>

        {/* 3. Collage / Masonry Polaroid Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Interleaved Sticky Note 1 */}
          <div className="sticky-note sticky-note-yellow reveal-on-scroll">
            <div className="paperclip">📎</div>
            <h4 className="font-handwritten" style={{ fontSize: '1.8rem', marginBottom: '0.35rem', color: '#37474F' }}>
              🌟 Nice Job Team!
            </h4>
            <p className="font-handwritten" style={{ fontSize: '1.4rem', lineHeight: '1.3' }}>
              Every completed handoff awards EcoPoints redeemable for green store discounts or artisan product drops!
            </p>
            <div style={{ marginTop: '0.75rem', fontWeight: '800', fontSize: '0.85rem', color: 'var(--accent-terracotta)', textAlign: 'right' }}>
              +150 EcoPoints Pinned
            </div>
          </div>

          {/* Render Firestore Polaroid Cards */}
          {showcaseList.map((item, idx) => (
            <React.Fragment key={item.id}>
              <div className="reveal-on-scroll">
                <ShowcaseCard item={item} index={idx} />
              </div>

              {/* Interleave a sticky note after every 2 cards */}
              {idx === 1 && (
                <div className="sticky-note sticky-note-pink reveal-on-scroll">
                  <div className="paperclip">📎</div>
                  <h4 className="font-handwritten" style={{ fontSize: '1.8rem', marginBottom: '0.35rem', color: '#4E342E' }}>
                    💚 Did You Know?
                  </h4>
                  <p className="font-handwritten" style={{ fontSize: '1.4rem', lineHeight: '1.3' }}>
                    Pre-sorting household PET bottles and glass cuts raw material costs for artisans by up to 35%!
                  </p>
                </div>
              )}

              {idx === 3 && (
                <div className="sticky-note sticky-note-mint reveal-on-scroll">
                  <div className="paperclip">📎</div>
                  <h4 className="font-handwritten" style={{ fontSize: '1.8rem', marginBottom: '0.35rem', color: '#004D40' }}>
                    ✨ AI Scanner Tip
                  </h4>
                  <p className="font-handwritten" style={{ fontSize: '1.4rem', lineHeight: '1.3' }}>
                    Upload an item photo in Post Waste to trigger Gemini AI automatic material & quantity tagging!
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Sticky Note 4 at the end */}
          <div className="sticky-note sticky-note-blue reveal-on-scroll">
            <div className="paperclip">📎</div>
            <h4 className="font-handwritten" style={{ fontSize: '1.8rem', marginBottom: '0.35rem', color: '#006064' }}>
              🌱 Zero Landfill Goal
            </h4>
            <p className="font-handwritten" style={{ fontSize: '1.4rem', lineHeight: '1.3' }}>
              Over 12,400 Kg of reusable household waste diverted directly to local studio craftspeople!
            </p>
          </div>
        </div>
      </div>

      {/* SUBMIT STORY MODAL */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="card-parchment" style={{ maxWidth: '540px', width: '100%', padding: '2.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 className="font-handwritten" style={{ fontSize: '2.2rem', color: 'var(--bg-main)' }}>
                📌 Pin New Upcycled Story
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--bg-main)', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitStory}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
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
                    padding: '0.8rem 1.1rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--bg-main)'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
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
                      padding: '0.8rem 1.1rem',
                      background: '#FFFFFF',
                      border: '1px solid var(--border-parchment)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--bg-main)'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
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
                      padding: '0.8rem 1.1rem',
                      background: '#FFFFFF',
                      border: '1px solid var(--border-parchment)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--bg-main)'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
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
                    padding: '0.8rem 1.1rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--bg-main)'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem', color: 'var(--bg-main)' }}>
                  Transformation Story / Caption
                </label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Describe how the item was cleaned, crafted, and upcycled..."
                  required
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1.1rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-parchment)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--bg-main)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="submit" className="btn btn-primary btn-full">
                  Pin to Board 📌
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
