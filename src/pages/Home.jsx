import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PaperSheet } from '../components/Scrapbook/PaperSheet';
import { StickyNote } from '../components/Scrapbook/StickyNote';
import { RedPaperClip, GreenPushPin, MaskingTape, WashiTape } from '../components/Scrapbook/Fasteners';
import { RecyclingDoodle, ArrowDoodle, SparkleDoodle, UnderlineDoodle } from '../components/Scrapbook/Doodle';
import { BotanicalFoliage } from '../components/Scrapbook/Foliage';

export default function Home() {
  useScrollReveal();

  return (
    <div className="home-page" style={{ background: 'var(--bg-kraft, #d8c7ad)', color: 'var(--green-dark, #193f2d)', overflowX: 'hidden' }}>
      
      {/* =========================================================================
         01. HERO SECTION (Centered Torn Notebook Sheet -0.5deg + Flanking Collage)
         ========================================================================= */}
      <section style={{
        padding: '3.5rem 1rem 4.5rem 1rem',
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justify: 'center'
      }}>
        {/* Botanical Foliage & Doodles */}
        <BotanicalFoliage type="olive" size={110} rotate="-20deg" color="var(--green-leaf, #2e7d32)" style={{ position: 'absolute', top: '20px', left: '2%', opacity: 0.8 }} />
        <BotanicalFoliage type="tropical" size={130} rotate="35deg" color="var(--green-dark, #193f2d)" style={{ position: 'absolute', bottom: '40px', right: '2%', opacity: 0.85 }} />

        <RecyclingDoodle size={80} color="var(--green-leaf, #2e7d32)" style={{ position: 'absolute', top: '60px', right: '12%', opacity: 0.3 }} />
        <SparkleDoodle size={45} color="#D9A036" style={{ position: 'absolute', bottom: '90px', left: '10%', opacity: 0.45 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1100px' }}>
          <div style={{ position: 'relative', margin: '0 auto' }}>
            
            {/* FLANKING LEFT: Pink Sticky Note ("Good Waste, Brighter Future ♡") */}
            <StickyNote color="pink" rotate="-6.5deg" fastener="tape" style={{ position: 'absolute', top: '-15px', left: '-35px', zIndex: 15, maxWidth: '240px' }}>
              <div className="handwritten" style={{ fontSize: '1.35rem', color: 'var(--green-dark, #193f2d)', lineHeight: 1.25 }}>
                Good Waste, Brighter Future ♡
              </div>
              <div className="handwritten" style={{ fontSize: '1.1rem', color: 'var(--green-leaf, #2e7d32)', marginTop: '0.5rem', fontWeight: 'bold' }}>
                🌎 There is no planet B <br />
                <span style={{ color: '#C85A32' }}>#SortRight</span>
              </div>
            </StickyNote>

            {/* FLANKING RIGHT: Tilted Polaroid Photo with Red Paperclip */}
            <PaperSheet variant="parchment" rotate="5.8deg" shadow="deep" style={{
              position: 'absolute',
              top: '20px',
              right: '-35px',
              width: '230px',
              padding: '0.85rem 0.85rem 1.35rem 0.85rem',
              zIndex: 14,
              background: 'var(--paper-white, #fdfbf7)',
              border: '2px solid var(--border-parchment, #e6dac8)',
              textAlign: 'center'
            }}>
              <RedPaperClip size={40} style={{ position: 'absolute', top: '-22px', left: '25px' }} />
              <div style={{ background: 'var(--paper-cream, #f4ecdc)', height: '135px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.65rem', overflow: 'hidden' }}>
                <span style={{ fontSize: '3rem' }}>♻️</span>
              </div>
              <div className="handwritten" style={{ fontSize: '1.2rem', color: 'var(--green-dark, #193f2d)', fontWeight: 'bold', lineHeight: 1.2 }}>
                A cleaner tomorrow is in your hands ♡
              </div>
            </PaperSheet>

            {/* FLANKING BOTTOM RIGHT: Sticky Note */}
            <StickyNote color="yellow" rotate="-3.8deg" fastener="pin" style={{ position: 'absolute', bottom: '-40px', right: '40px', zIndex: 15, maxWidth: '220px' }}>
              <div className="handwritten" style={{ fontSize: '1.25rem', color: 'var(--green-dark, #193f2d)', fontWeight: 'bold' }}>
                Reduce, Reuse, Recycle, Repeat 🔄
              </div>
            </StickyNote>

            {/* CENTERED MAIN HERO CARD: Torn Notebook Card with Rotation (-0.5deg) */}
            <PaperSheet variant="parchment" rotate="-0.5deg" shadow="deep" style={{
              padding: '4rem 3rem 3.5rem 3rem',
              zIndex: 5,
              border: '2px solid var(--border-parchment, #e6dac8)',
              background: 'var(--paper-white, #fdfbf7)',
              position: 'relative',
              boxShadow: 'var(--shadow-paper, 3px 12px 25px rgba(45, 30, 15, 0.18))'
            }}>
              {/* Spiral Hole Punch Top Margin */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '40px',
                right: '40px',
                display: 'flex',
                justify: 'space-between',
                pointerEvents: 'none'
              }}>
                {[...Array(12)].map((_, i) => (
                  <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-kraft, #d8c7ad)', border: '1px solid #bca88e' }} />
                ))}
              </div>

              <MaskingTape width="150px" height="34px" rotate="-1deg" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />

              <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                {/* Bold Handwritten Logo "ClearBin" */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🌱</span>
                  <span className="handwritten" style={{ fontSize: '3.4rem', fontWeight: 'bold', color: 'var(--green-dark, #193f2d)', lineHeight: 1 }}>
                    ClearBin
                  </span>
                </div>
                <div className="handwritten" style={{ fontSize: '1.45rem', color: 'var(--green-leaf, #2e7d32)', fontWeight: 'bold', marginBottom: '1.25rem' }}>
                  "Small Actions, Big Change"
                </div>

                <h1 style={{
                  fontSize: 'clamp(2.3rem, 4.8vw, 3.8rem)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '800',
                  color: 'var(--green-dark, #193f2d)',
                  lineHeight: '1.15',
                  marginBottom: '1rem'
                }}>
                  A smarter way to manage waste. <br />
                  <span style={{ color: 'var(--green-leaf, #2e7d32)' }}>For cleaner communities and a greener tomorrow.</span>
                </h1>
                <UnderlineDoodle color="var(--green-leaf, #2e7d32)" width={320} style={{ margin: '-6px auto 1.75rem auto' }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', position: 'relative', marginTop: '2rem' }}>
                  <Link
                    to="/post"
                    className="btn"
                    style={{
                      background: 'var(--green-dark, #193f2d)',
                      color: 'var(--paper-white, #fdfbf7)',
                      padding: '1rem 2.25rem',
                      borderRadius: '50px',
                      fontWeight: '800',
                      fontSize: '1.05rem',
                      boxShadow: 'var(--shadow-paper, 3px 12px 25px rgba(45, 30, 15, 0.18))'
                    }}
                  >
                    Schedule Pickup →
                  </Link>

                  <a
                    href="#how-it-works"
                    className="btn"
                    style={{
                      background: 'var(--paper-cream, #f4ecdc)',
                      color: 'var(--green-dark, #193f2d)',
                      border: '1.5px solid var(--bg-kraft, #d8c7ad)',
                      padding: '1rem 2.25rem',
                      borderRadius: '50px',
                      fontWeight: '800',
                      fontSize: '1.05rem'
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </PaperSheet>

          </div>
        </div>
      </section>

      {/* =========================================================================
         02. "HOW IT WORKS" SECTION (4 Pinned Cardboard Swatches)
         ========================================================================= */}
      <section id="how-it-works" style={{ background: 'var(--paper-white, #fdfbf7)', color: 'var(--green-dark, #193f2d)', padding: '4.5rem 1rem 5.5rem 1rem', position: 'relative' }}>
        <div className="container">
          
          {/* Header */}
          <div className="section-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3.5rem', position: 'relative' }}>
            <span className="badge" style={{ background: '#9DBE9B', color: 'var(--green-dark, #193f2d)', padding: '0.4rem 1.1rem', borderRadius: '50px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              How It Works
            </span>
            <h2 className="section-title" style={{ color: 'var(--green-dark, #193f2d)', fontSize: '2.6rem', fontWeight: '800', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              A Simple Process For A Cleaner Tomorrow.
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="handwritten" style={{ fontSize: '1.55rem', color: 'var(--green-leaf, #2e7d32)', fontWeight: 'bold' }}>
                It's easier than you think!
              </span>
              <ArrowDoodle color="var(--green-leaf, #2e7d32)" size={45} rotate="-30deg" />
            </div>
          </div>

          {/* 4 Pinned Cardboard Swatches */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem', position: 'relative' }}>
            
            {/* Step 1: Cream Paper Swatch */}
            <PaperSheet variant="notebook" rotate="-2.2deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: 'var(--paper-cream, #f4ecdc)', border: '1.5px solid var(--border-parchment, #e6dac8)' }} className="reveal-on-scroll">
              <MaskingTape width="85px" height="24px" rotate="1deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗑️</div>
              <span className="badge" style={{ background: 'var(--green-dark, #193f2d)', color: 'var(--paper-white, #fdfbf7)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                01 SORT
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--green-dark, #193f2d)', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Separate Waste</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--green-leaf, #2e7d32)', lineHeight: '1.45' }}>
                Illustrated green bin sorting for paper, plastic, glass, and compostable organic waste.
              </p>
            </PaperSheet>

            {/* Step 2: Light Green Paper Swatch */}
            <PaperSheet variant="parchment" rotate="1.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: '#e2f0d9', border: '1.5px solid #b5d9a7' }} className="reveal-on-scroll">
              <RedPaperClip size={34} style={{ position: 'absolute', top: '-16px', right: '20px' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚛</div>
              <span className="badge" style={{ background: 'var(--green-leaf, #2e7d32)', color: 'var(--paper-white, #fdfbf7)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                02 COLLECT
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--green-dark, #193f2d)', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Garbage Truck</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--green-dark, #193f2d)', lineHeight: '1.45', fontWeight: '500' }}>
                Green collection vehicles pick up your pre-sorted batch right at your doorstep.
              </p>
            </PaperSheet>

            {/* Step 3: Kraft Card Swatch with Green Pushpin */}
            <PaperSheet variant="kraft" rotate="-1.5deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', border: '1.5px solid #d4c3aa' }} className="reveal-on-scroll">
              <GreenPushPin style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>♻️</div>
              <span className="badge" style={{ background: '#D9A036', color: 'var(--green-dark, #193f2d)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                03 PROCESS
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--green-dark, #193f2d)', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Clean Recovery</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--green-dark, #193f2d)', lineHeight: '1.45', fontWeight: '500' }}>
                Materials are cleaned, prepped, and cataloged for local recycling & craft studios.
              </p>
            </PaperSheet>

            {/* Step 4: Green Paper Swatch */}
            <PaperSheet variant="green" rotate="2.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: 'var(--green-dark, #193f2d)' }} className="reveal-on-scroll">
              <WashiTape width="85px" height="24px" rotate="-2deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🌱</div>
              <span className="badge" style={{ background: '#9DBE9B', color: 'var(--green-dark, #193f2d)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                04 REUSE
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--paper-white, #fdfbf7)', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Second Life</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--paper-white, #fdfbf7)', lineHeight: '1.45' }}>
                Materials get a second life as upcycled goods, totes, and eco-friendly products!
              </p>
            </PaperSheet>

          </div>

          {/* Floating Doodle on Right */}
          <div className="handwritten reveal-on-scroll" style={{ textAlign: 'right', marginTop: '2rem', fontSize: '1.5rem', color: 'var(--green-leaf, #2e7d32)', fontWeight: 'bold' }}>
            Small steps lead to big impact ♡
          </div>

        </div>
      </section>

      {/* =========================================================================
         03. "ABOUT CLEARBIN" (Full-Width Dark Green #193f2d with .torn-top & .torn-bottom)
         ========================================================================= */}
      <section className="torn-top torn-bottom" style={{ background: 'var(--green-dark, #193f2d)', color: 'var(--paper-white, #fdfbf7)', padding: '6rem 1rem 6.5rem 1rem', position: 'relative' }}>
        <BotanicalFoliage type="olive" size={120} rotate="45deg" color="#9DBE9B" style={{ position: 'absolute', top: '25px', right: '3%', opacity: 0.6 }} />

        <div className="container reveal-on-scroll">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left: Tilted Polaroid Photo of Volunteers Cleaning Up */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PaperSheet variant="parchment" rotate="-4.2deg" shadow="deep" style={{
                width: '300px',
                padding: '1rem 1rem 1.5rem 1rem',
                background: 'var(--paper-white, #fdfbf7)',
                border: '2px solid var(--border-parchment, #e6dac8)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <GreenPushPin style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: 'var(--green-leaf, #2e7d32)', height: '190px', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fdfbf7', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '3.5rem' }}>🧹🌿</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Volunteer Drive</span>
                </div>
                <div className="handwritten" style={{ fontSize: '1.35rem', color: 'var(--green-dark, #193f2d)', fontWeight: 'bold' }}>
                  Cleaner communities, Happier tomorrows ♡
                </div>
              </PaperSheet>
            </div>

            {/* Center: Story Copy */}
            <div>
              <span className="badge" style={{ background: 'var(--green-leaf, #2e7d32)', color: 'var(--paper-white, #fdfbf7)', padding: '0.35rem 0.95rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                About ClearBin
              </span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: '800', color: 'var(--paper-white, #fdfbf7)', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Waste Solutions For A Brighter Tomorrow.
              </h2>
              <p style={{ color: '#9DBE9B', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                ClearBin was founded with a simple mission: transform household waste management from a routine chore into a rewarding community effort. We connect pre-sorted recyclables directly with sustainable recovery hubs and micro-artisans.
              </p>

              <Link
                to="/about"
                className="btn"
                style={{
                  background: 'var(--paper-white, #fdfbf7)',
                  color: 'var(--green-dark, #193f2d)',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                }}
              >
                Our Story →
              </Link>
            </div>

            {/* Right: White Torn-Edge Paper Sheet with 3 Impact Metrics */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PaperSheet variant="parchment" rotate="3.5deg" shadow="deep" style={{
                width: '100%',
                maxWidth: '300px',
                padding: '2rem 1.5rem',
                background: 'var(--paper-white, #fdfbf7)',
                border: '2px solid var(--border-parchment, #e6dac8)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <MaskingTape width="100px" height="28px" rotate="-2deg" style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
                
                <h3 className="handwritten" style={{ fontSize: '1.6rem', color: 'var(--green-dark, #193f2d)', fontWeight: 'bold', marginBottom: '1.25rem' }}>
                  Our Impact So Far 📊
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ borderBottom: '1.5px dashed var(--border-parchment, #e6dac8)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', lineHeight: 1 }}>1,200+</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--green-leaf, #2e7d32)', fontWeight: '800', textTransform: 'uppercase' }}>Pickups Completed</div>
                  </div>

                  <div style={{ borderBottom: '1.5px dashed var(--border-parchment, #e6dac8)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', lineHeight: 1 }}>15+</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--green-leaf, #2e7d32)', fontWeight: '800', textTransform: 'uppercase' }}>Communities Served</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--green-leaf, #2e7d32)', lineHeight: 1 }}>3,500+ kg</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--green-dark, #193f2d)', fontWeight: '800', textTransform: 'uppercase' }}>Waste Recycled</div>
                  </div>
                </div>
              </PaperSheet>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         04. "KNOW YOUR WASTE" (Tilted Scrap Paper Tags)
         ========================================================================= */}
      <section id="waste-guide" style={{ padding: '5rem 1rem', background: 'var(--paper-cream, #f4ecdc)', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge" style={{ background: 'var(--green-dark, #193f2d)', color: 'var(--paper-white, #fdfbf7)', padding: '0.35rem 0.95rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Sorting Guide
              </span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', marginTop: '0.5rem', margin: 0 }}>
                Know Your Waste.
              </h2>
            </div>

            <Link
              to="/post"
              className="btn"
              style={{
                background: 'var(--green-dark, #193f2d)',
                color: 'var(--paper-white, #fdfbf7)',
                padding: '0.75rem 1.65rem',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '0.9rem'
              }}
            >
              Explore Waste Guide →
            </Link>
          </div>

          {/* 6 Realistic Tilted Scrap Paper Tags */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
            
            {/* Paper */}
            <PaperSheet variant="parchment" rotate="-2.2deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: 'var(--paper-white, #fdfbf7)' }}>
              <RedPaperClip size={32} style={{ position: 'absolute', top: '-14px', left: '15px' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📄</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', marginBottom: '0.25rem' }}>Paper</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--green-leaf, #2e7d32)' }}>Crumpled paper ball & magazines</p>
            </PaperSheet>

            {/* Plastic */}
            <PaperSheet variant="kraft" rotate="2.5deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: 'var(--paper-white, #fdfbf7)' }}>
              <MaskingTape width="65px" height="20px" rotate="-1deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🧴</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', marginBottom: '0.25rem' }}>Plastic</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--green-leaf, #2e7d32)' }}>PET plastic water bottles & jugs</p>
            </PaperSheet>

            {/* Glass */}
            <PaperSheet variant="green" rotate="-1.8deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: 'var(--green-dark, #193f2d)' }}>
              <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🍾</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--paper-white, #fdfbf7)', marginBottom: '0.25rem' }}>Glass</h4>
              <p style={{ fontSize: '0.825rem', color: '#9DBE9B' }}>Green glass bottles & jars</p>
            </PaperSheet>

            {/* Metal */}
            <PaperSheet variant="parchment" rotate="3deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: 'var(--paper-white, #fdfbf7)' }}>
              <WashiTape width="70px" height="20px" rotate="2deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🥫</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', marginBottom: '0.25rem' }}>Metal</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--green-leaf, #2e7d32)' }}>Crushed soda cans & tin food tins</p>
            </PaperSheet>

            {/* Organic */}
            <PaperSheet variant="kraft" rotate="-2.8deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: 'var(--paper-white, #fdfbf7)' }}>
              <RedPaperClip size={32} style={{ position: 'absolute', top: '-14px', right: '15px' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🍌</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', marginBottom: '0.25rem' }}>Organic</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--green-leaf, #2e7d32)' }}>Banana peels & compost scraps</p>
            </PaperSheet>

            {/* E-Waste */}
            <PaperSheet variant="parchment" rotate="1.8deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: 'var(--paper-white, #fdfbf7)' }}>
              <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📦</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', marginBottom: '0.25rem' }}>E-Waste</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--green-leaf, #2e7d32)' }}>Cardboard box with cables & tech</p>
            </PaperSheet>

          </div>

        </div>
      </section>

      {/* =========================================================================
         05. "COMMUNITY IMPACT" SECTION
         ========================================================================= */}
      <section id="community" style={{ padding: '5rem 1rem 6rem 1rem', background: 'var(--paper-white, #fdfbf7)', color: 'var(--green-dark, #193f2d)', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left: 3 Mini-Polaroid Snapshots */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              
              <PaperSheet variant="parchment" rotate="-5deg" shadow="deep" style={{ width: '150px', padding: '0.65rem 0.65rem 1rem 0.65rem', background: '#FFFDF7', border: '1.5px solid var(--border-parchment, #e6dac8)', textAlign: 'center' }}>
                <RedPaperClip size={32} style={{ position: 'absolute', top: '-16px', left: '15px' }} />
                <div style={{ background: 'var(--green-leaf, #2e7d32)', height: '110px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🌱</span>
                </div>
                <div className="handwritten" style={{ fontSize: '1.1rem', color: 'var(--green-dark, #193f2d)', fontWeight: 'bold' }}>
                  Planting hope 🌿
                </div>
              </PaperSheet>

              <PaperSheet variant="parchment" rotate="3deg" shadow="deep" style={{ width: '150px', padding: '0.65rem 0.65rem 1rem 0.65rem', background: '#FFFDF7', border: '1.5px solid var(--border-parchment, #e6dac8)', textAlign: 'center' }}>
                <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: 'var(--green-dark, #193f2d)', height: '110px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🌎</span>
                </div>
                <div className="handwritten" style={{ fontSize: '1.05rem', color: 'var(--green-dark, #193f2d)', fontWeight: 'bold' }}>
                  No planet B 🌎
                </div>
              </PaperSheet>

              <PaperSheet variant="parchment" rotate="-2.5deg" shadow="deep" style={{ width: '150px', padding: '0.65rem 0.65rem 1rem 0.65rem', background: '#FFFDF7', border: '1.5px solid var(--border-parchment, #e6dac8)', textAlign: 'center' }}>
                <MaskingTape width="65px" height="20px" rotate="2deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: '#9DBE9B', height: '110px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🏔️</span>
                </div>
                <div className="handwritten" style={{ fontSize: '1.1rem', color: 'var(--green-dark, #193f2d)', fontWeight: 'bold' }}>
                  Clean trails ⛰️
                </div>
              </PaperSheet>

            </div>

            {/* Right: Headline + Handwritten Checklist */}
            <div>
              <span className="badge" style={{ background: 'var(--green-leaf, #2e7d32)', color: 'var(--paper-white, #fdfbf7)', padding: '0.35rem 0.95rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Community Impact
              </span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: '800', color: 'var(--green-dark, #193f2d)', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Real People. Real Change.
              </h2>
              <p style={{ color: 'var(--green-leaf, #2e7d32)', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.75rem', fontWeight: '500' }}>
                When neighbors collaborate to sort and hand off recyclable materials, entire towns become cleaner, healthier, and more resilient.
              </p>

              {/* Handwritten Checklist */}
              <div className="handwritten" style={{ fontSize: '1.45rem', color: 'var(--green-dark, #193f2d)', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '26px', height: '26px', border: '2px solid var(--green-leaf, #2e7d32)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-leaf, #2e7d32)', fontWeight: '900', fontSize: '1.1rem' }}>✓</span>
                  <span>Cleaner cities</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '26px', height: '26px', border: '2px solid var(--green-leaf, #2e7d32)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-leaf, #2e7d32)', fontWeight: '900', fontSize: '1.1rem' }}>✓</span>
                  <span>Healthier lives</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '26px', height: '26px', border: '2px solid var(--green-leaf, #2e7d32)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-leaf, #2e7d32)', fontWeight: '900', fontSize: '1.1rem' }}>✓</span>
                  <span>Greener future</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#C85A32', fontWeight: 'bold' }}>
                  <span style={{ width: '26px', height: '26px', border: '2px solid #C85A32', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C85A32', fontWeight: '900', fontSize: '1.1rem' }}>✓</span>
                  <span>You in? 😊</span>
                </div>
              </div>

              <Link
                to="/post"
                className="btn"
                style={{
                  background: 'var(--green-dark, #193f2d)',
                  color: 'var(--paper-white, #fdfbf7)',
                  padding: '0.9rem 2.2rem',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(25, 63, 45, 0.3)'
                }}
              >
                Join the Movement →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
         06. CALL-TO-ACTION (CTA) BANNER & FOOTER (Dark Green #193f2d with .torn-top)
         ========================================================================= */}
      <footer id="contact" className="torn-top" style={{ background: 'var(--green-dark, #193f2d)', color: 'var(--paper-white, #fdfbf7)', padding: '6rem 1rem 3rem 1rem', position: 'relative' }}>
        
        <BotanicalFoliage type="tropical" size={130} rotate="-15deg" color="#9DBE9B" style={{ position: 'absolute', top: '20px', left: '3%', opacity: 0.5 }} />
        <BotanicalFoliage type="olive" size={110} rotate="25deg" color="var(--green-leaf, #2e7d32)" style={{ position: 'absolute', top: '30px', right: '4%', opacity: 0.6 }} />

        <div className="container reveal-on-scroll" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          
          <span className="badge" style={{ background: '#9DBE9B', color: 'var(--green-dark, #193f2d)', padding: '0.4rem 1.1rem', borderRadius: '50px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Get Started Today
          </span>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '800', color: 'var(--paper-white, #fdfbf7)', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.15 }}>
            READY TO MAKE A DIFFERENCE?
          </h2>

          <div style={{ marginBottom: '2.5rem' }}>
            <Link
              to="/post"
              className="btn"
              style={{
                background: 'var(--paper-white, #fdfbf7)',
                color: 'var(--green-dark, #193f2d)',
                padding: '1.1rem 2.75rem',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '1.1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
              }}
            >
              Schedule Pickup →
            </Link>
          </div>

          {/* Scattered Paper Notes */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }} className="handwritten">
            <span style={{ background: 'var(--sticky-yellow, #f8ebb2)', color: 'var(--green-dark, #193f2d)', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(-3deg)', fontSize: '1.3rem', fontWeight: 'bold' }}>
              Reduce 🌿
            </span>
            <span style={{ background: 'var(--sticky-pink, #f7d2d7)', color: 'var(--green-dark, #193f2d)', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(2deg)', fontSize: '1.3rem', fontWeight: 'bold' }}>
              Reuse 🔄
            </span>
            <span style={{ background: '#9DBE9B', color: 'var(--green-dark, #193f2d)', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(-2.5deg)', fontSize: '1.3rem', fontWeight: 'bold' }}>
              Recycle ♻️
            </span>
            <span style={{ background: 'var(--paper-cream, #f4ecdc)', color: 'var(--green-dark, #193f2d)', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(3.5deg)', fontSize: '1.3rem', fontWeight: 'bold' }}>
              Repeat ♡
            </span>
          </div>

          {/* Footer Navigation & Social Icons */}
          <div style={{ borderTop: '1px dashed rgba(253, 251, 247, 0.2)', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🌱</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.6rem', fontWeight: '800', color: 'var(--paper-white, #fdfbf7)' }}>
                ClearBin
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.9rem', color: '#9DBE9B', fontWeight: '700' }}>
              <Link to="/" style={{ color: 'inherit' }}>Home</Link>
              <Link to="/about" style={{ color: 'inherit' }}>About</Link>
              <a href="#waste-guide" style={{ color: 'inherit' }}>Waste Guide</a>
              <a href="#community" style={{ color: 'inherit' }}>Community</a>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '1.3rem', color: 'var(--paper-white, #fdfbf7)' }}>
              <span title="Instagram" style={{ cursor: 'pointer' }}>📸</span>
              <span title="LinkedIn" style={{ cursor: 'pointer' }}>💼</span>
              <span title="YouTube" style={{ cursor: 'pointer' }}>▶️</span>
            </div>

            <div className="handwritten" style={{ fontSize: '1.3rem', color: '#9DBE9B', marginTop: '0.5rem' }}>
              Made for a Cleaner Tomorrow. ♡
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
