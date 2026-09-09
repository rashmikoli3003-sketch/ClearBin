import React, { useState } from 'react';
import { getUpcyclingIdeas } from '../services/aiService';

export default function EcoCraftAiModal({ isOpen, onClose }) {
  const [prompt, setPrompt] = useState('3 pickle glass jars and denim jean scraps');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState(null);

  if (!isOpen) return null;

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const result = await getUpcyclingIdeas(prompt);
      setIdeas(result);
    } catch (err) {
      console.warn('EcoCraft AI error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 2500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="card" style={{
        maxWidth: '640px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem',
        border: '1px solid var(--border-glow)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <span className="section-tag">✨ Gemini 2.5 AI Powered</span>
            <h2 style={{ fontSize: '1.6rem', margin: 0 }}>EcoCraft DIY Upcycling Assistant</h2>
          </div>

          <button
            onClick={onClose}
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

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Enter any household waste items you have, and Gemini AI will generate step-by-step upcycling recipes!
        </p>

        {/* Input Form */}
        <form onSubmit={handleGenerate} style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. 5 wine bottles, plastic caps, torn denim..."
              required
              style={{
                flex: 1,
                minWidth: '240px',
                padding: '0.85rem 1rem',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.5rem', whiteSpace: 'nowrap' }}
            >
              {loading ? '✨ AI Thinking...' : '✨ Generate Recipes'}
            </button>
          </div>
        </form>

        {/* Loading Spinner */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 1rem auto',
              border: '3px solid rgba(16, 185, 129, 0.2)',
              borderTopColor: 'var(--primary-light)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <p style={{ color: 'var(--primary-light)', fontWeight: '700' }}>
              Gemini AI is crafting custom upcycling instructions...
            </p>
          </div>
        )}

        {/* Generated Recipes List */}
        {ideas && !loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-light)' }}>
              💡 AI-Generated Upcycling Recipes ({ideas.length})
            </h3>

            {ideas.map((idea, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-glow)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{idea.title}</h4>
                  <span style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--primary-light)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: '700'
                  }}>
                    ⏱️ {idea.timeNeeded} • {idea.difficulty}
                  </span>
                </div>

                {idea.toolsNeeded && (
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    <strong>Tools:</strong> {idea.toolsNeeded.join(', ')}
                  </div>
                )}

                <ol style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {idea.steps.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
