import React from 'react';
import { Link } from 'react-router-dom';
import { TornEdgeMultiLayerTop, TornEdgeMultiLayerBottom } from '../components/TornEdge';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PaperSheet } from '../components/Scrapbook/PaperSheet';
import { StickyNote } from '../components/Scrapbook/StickyNote';
import { RedPaperClip, GreenPushPin, MaskingTape, WashiTape } from '../components/Scrapbook/Fasteners';
import { RecyclingDoodle, ArrowDoodle, SparkleDoodle, UnderlineDoodle } from '../components/Scrapbook/Doodle';
import { BotanicalFoliage } from '../components/Scrapbook/Foliage';

export default function Home() {
  useScrollReveal();

  return (
    <div className="home-page" style={{ background: '#D4C3AA', color: '#1B3F2E', overflowX: 'hidden' }}>
      
      {/* =========================================================================
         01. HERO SECTION (Torn Spiral Notebook Sheet + Digital Scrapbook Collage)
         ========================================================================= */}
      <section style={{
        padding: '3rem 1rem 4.5rem 1rem',
        background: 'radial-gradient(circle at 50% 30%, #E6DAC8 0%, #D4C3AA 85%)',
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justify: 'center'
      }}>
        {/* Loose Tropical / Olive Leaf Stems Tucked Behind Main Collage */}
        <BotanicalFoliage type="olive" size={110} rotate="-20deg" color="#2E7D32" style={{ position: 'absolute', top: '20px', left: '2%', opacity: 0.8 }} />
        <BotanicalFoliage type="tropical" size={130} rotate="35deg" color="#1B3F2E" style={{ position: 'absolute', bottom: '40px', right: '2%', opacity: 0.85 }} />

        {/* Ambient Hand-drawn Doodles */}
        <RecyclingDoodle size={80} color="#2E7D32" style={{ position: 'absolute', top: '60px', right: '12%', opacity: 0.3 }} />
        <SparkleDoodle size={45} color="#D9A036" style={{ position: 'absolute', bottom: '90px', left: '10%', opacity: 0.45 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1100px' }}>
          <div style={{ position: 'relative', margin: '0 auto' }}>
            
            {/* SURROUNDING COLLAGE ELEMENT (Left): Pink Sticky Note + Globe Doodle */}
            <StickyNote color="pink" rotate="-6.5deg" fastener="tape" style={{ position: 'absolute', top: '-15px', left: '-35px', zIndex: 15, maxWidth: '240px' }}>
              <div className="font-handwritten" style={{ fontSize: '1.35rem', color: '#1B3F2E', lineHeight: 1.25 }}>
                Good Waste, Brighter Future ♡
              </div>
              <div className="font-handwritten" style={{ fontSize: '1.1rem', color: '#2E7D32', marginTop: '0.5rem', fontWeight: 'bold' }}>
                🌎 There is no planet B <br />
                <span style={{ color: '#C85A32' }}>#SortRight</span>
              </div>
            </StickyNote>

            {/* SURROUNDING COLLAGE ELEMENT (Right): Pinned Polaroid Photo with Red Paperclip */}
            <PaperSheet variant="parchment" rotate="5.8deg" shadow="deep" style={{
              position: 'absolute',
              top: '20px',
              right: '-35px',
              width: '230px',
              padding: '0.85rem 0.85rem 1.35rem 0.85rem',
              zIndex: 14,
              background: '#FDFBF7',
              border: '2px solid #E6DAC8',
              textAlign: 'center'
            }}>
              <RedPaperClip size={40} style={{ position: 'absolute', top: '-22px', left: '25px' }} />
              <div style={{ background: '#E6DAC8', height: '135px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.65rem', overflow: 'hidden' }}>
                <span style={{ fontSize: '3rem' }}>♻️</span>
              </div>
              <div className="font-handwritten" style={{ fontSize: '1.2rem', color: '#1B3F2E', fontWeight: 'bold', lineHeight: 1.2 }}>
                A cleaner tomorrow is in your hands ♡
              </div>
            </PaperSheet>

            {/* SURROUNDING COLLAGE ELEMENT (Bottom Right Sticky Note) */}
            <StickyNote color="yellow" rotate="-3.8deg" fastener="pin" style={{ position: 'absolute', bottom: '-40px', right: '40px', zIndex: 15, maxWidth: '220px' }}>
              <div className="font-handwritten" style={{ fontSize: '1.25rem', color: '#1B3F2E', fontWeight: 'bold' }}>
                Reduce, Reuse, Recycle, Repeat 🔄
              </div>
            </StickyNote>

            {/* MAIN HERO CARD: Large Torn-Edge Spiral Notebook Sheet in Warm Off-White */}
            <PaperSheet variant="parchment" rotate="-0.4deg" shadow="deep" style={{
              padding: '4rem 3rem 3.5rem 3rem',
              zIndex: 5,
              border: '2px solid #E6DAC8',
              background: '#FDFBF7',
              position: 'relative',
              boxShadow: '2px 8px 20px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)'
            }}>
              {/* Spiral Hole Punch Details on Top Margin */}
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
                  <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#D4C3AA', border: '1px solid #BCA88E' }} />
                ))}
              </div>

              <MaskingTape width="150px" height="34px" rotate="-1deg" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />

              <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                {/* Bold Handwritten Logo "ClearBin" with Sprout Details */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🌱</span>
                  <span className="font-handwritten" style={{ fontSize: '3.2rem', fontWeight: 'bold', color: '#1B3F2E', lineHeight: 1 }}>
                    ClearBin
                  </span>
                </div>
                <div className="font-handwritten" style={{ fontSize: '1.4rem', color: '#2E7D32', fontWeight: 'bold', marginBottom: '1.25rem' }}>
                  "Small Actions, Big Change"
                </div>

                <h1 style={{
                  fontSize: 'clamp(2.3rem, 4.8vw, 3.8rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '800',
                  color: '#1B3F2E',
                  lineHeight: '1.15',
                  marginBottom: '1rem'
                }}>
                  A smarter way to manage waste. <br />
                  <span style={{ color: '#2E7D32' }}>For cleaner communities and a greener tomorrow.</span>
                </h1>
                <UnderlineDoodle color="#2E7D32" width={320} style={{ margin: '-6px auto 1.75rem auto' }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', position: 'relative', marginTop: '2rem' }}>
                  {/* Dark Green Button "Schedule Pickup →" */}
                  <Link
                    to="/post"
                    className="btn"
                    style={{
                      background: '#1B3F2E',
                      color: '#FDFBF7',
                      padding: '1rem 2.25rem',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      boxShadow: '2px 8px 20px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)'
                    }}
                  >
                    Schedule Pickup →
                  </Link>

                  {/* Soft Kraft Button "Learn More" */}
                  <a
                    href="#how-it-works"
                    className="btn"
                    style={{
                      background: '#E6DAC8',
                      color: '#1B3F2E',
                      border: '1.5px solid #D4C3AA',
                      padding: '1rem 2.25rem',
                      borderRadius: '50px',
                      fontWeight: '700',
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
         02. "HOW IT WORKS" SECTION (Pinned Cardboard Swatches + Dashed Arrows)
         ========================================================================= */}
      <TornEdgeMultiLayerTop fillBack="#9DBE9B" fillMid="#2E7D32" fillFront="#FDFBF7" height={55} />
      <section id="how-it-works" style={{ background: '#FDFBF7', color: '#1B3F2E', padding: '4.5rem 1rem 5.5rem 1rem', position: 'relative' }}>
        <div className="container">
          
          {/* Header */}
          <div className="section-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3.5rem', position: 'relative' }}>
            <span className="badge" style={{ background: '#9DBE9B', color: '#1B3F2E', padding: '0.4rem 1.1rem', borderRadius: '50px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              How It Works
            </span>
            <h2 className="section-title" style={{ color: '#1B3F2E', fontSize: '2.6rem', fontWeight: '800', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              A Simple Process For A Cleaner Tomorrow.
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="font-handwritten" style={{ fontSize: '1.5rem', color: '#2E7D32', fontWeight: 'bold' }}>
                It's easier than you think!
              </span>
              <ArrowDoodle color="#2E7D32" size={45} rotate="-30deg" />
            </div>
          </div>

          {/* 4-Step Horizontal Process Cards (Pinned Cardboard Swatches) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem', position: 'relative' }}>
            
            {/* Step 1: 01 SORT */}
            <PaperSheet variant="notebook" rotate="-2.2deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', border: '1.5px solid #E6DAC8' }} className="reveal-on-scroll">
              <MaskingTape width="85px" height="24px" rotate="1deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗑️</div>
              <span className="badge" style={{ background: '#1B3F2E', color: '#FDFBF7', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                01 SORT
              </span>
              <h3 style={{ fontSize: '1.35rem', color: '#1B3F2E', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Separate Waste</h3>
              <p style={{ fontSize: '0.9rem', color: '#2E7D32', lineHeight: '1.45' }}>
                Illustrated green bin sorting for paper, plastic, glass, and compostable organic waste.
              </p>
            </PaperSheet>

            {/* Step 2: 02 COLLECT */}
            <PaperSheet variant="kraft" rotate="1.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', border: '1.5px solid #D4C3AA' }} className="reveal-on-scroll">
              <RedPaperClip size={34} style={{ position: 'absolute', top: '-16px', right: '20px' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚛</div>
              <span className="badge" style={{ background: '#2E7D32', color: '#FDFBF7', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                02 COLLECT
              </span>
              <h3 style={{ fontSize: '1.35rem', color: '#1B3F2E', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Garbage Truck</h3>
              <p style={{ fontSize: '0.9rem', color: '#1B3F2E', lineHeight: '1.45', fontWeight: '500' }}>
                Green collection vehicles pick up your pre-sorted batch right at your doorstep.
              </p>
            </PaperSheet>

            {/* Step 3: 03 PROCESS */}
            <PaperSheet variant="parchment" rotate="-1.5deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', border: '1.5px solid #E6DAC8' }} className="reveal-on-scroll">
              <GreenPushPin style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>♻️</div>
              <span className="badge" style={{ background: '#D9A036', color: '#1B3F2E', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                03 PROCESS
              </span>
              <h3 style={{ fontSize: '1.35rem', color: '#1B3F2E', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Clean Recovery</h3>
              <p style={{ fontSize: '0.9rem', color: '#2E7D32', lineHeight: '1.45' }}>
                Materials are cleaned, prepped, and cataloged for local recycling & craft studios.
              </p>
            </PaperSheet>

            {/* Step 4: 04 REUSE */}
            <PaperSheet variant="green" rotate="2.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: '#1B3F2E' }} className="reveal-on-scroll">
              <WashiTape width="85px" height="24px" rotate="-2deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🌱</div>
              <span className="badge" style={{ background: '#9DBE9B', color: '#1B3F2E', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem' }}>
                04 REUSE
              </span>
              <h3 style={{ fontSize: '1.35rem', color: '#FDFBF7', fontWeight: '800', margin: '0.65rem 0 0.35rem 0' }}>Second Life</h3>
              <p style={{ fontSize: '0.9rem', color: '#FDFBF7', lineHeight: '1.45' }}>
                Materials get a second life as upcycled goods, totes, and eco-friendly products!
              </p>
            </PaperSheet>

          </div>

          {/* Floating Doodle on the Right */}
          <div className="font-handwritten reveal-on-scroll" style={{ textAlign: 'right', marginTop: '2rem', fontSize: '1.4rem', color: '#2E7D32', fontWeight: 'bold' }}>
            Small steps lead to big impact ♡
          </div>

        </div>
      </section>
      <TornEdgeMultiLayerBottom fillBack="#9DBE9B" fillMid="#2E7D32" fillFront="#FDFBF7" height={55} />

      {/* =========================================================================
         03. "ABOUT CLEARBIN" (Dark Green Full-Width Torn Band)
         ========================================================================= */}
      <section style={{ background: '#1B3F2E', color: '#FDFBF7', padding: '5rem 1rem 5.5rem 1rem', position: 'relative' }}>
        <BotanicalFoliage type="olive" size={120} rotate="45deg" color="#9DBE9B" style={{ position: 'absolute', top: '15px', right: '3%', opacity: 0.6 }} />

        <div className="container reveal-on-scroll">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left: Tilted Polaroid Photo of Volunteers Cleaning Up */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PaperSheet variant="parchment" rotate="-4.2deg" shadow="deep" style={{
                width: '300px',
                padding: '1rem 1rem 1.5rem 1rem',
                background: '#FDFBF7',
                border: '2px solid #E6DAC8',
                textAlign: 'center',
                position: 'relative'
              }}>
                <GreenPushPin style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: '#2E7D32', height: '190px', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FDFBF7', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '3.5rem' }}>🧹🌿</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Volunteer Drive</span>
                </div>
                <div className="font-handwritten" style={{ fontSize: '1.3rem', color: '#1B3F2E', fontWeight: 'bold' }}>
                  Cleaner communities, Happier tomorrows ♡
                </div>
              </PaperSheet>
            </div>

            {/* Center: Story Text */}
            <div>
              <span className="badge" style={{ background: '#2E7D32', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                About ClearBin
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FDFBF7', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Waste Solutions For A Brighter Tomorrow.
              </h2>
              <p style={{ color: '#9DBE9B', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                ClearBin was founded with a simple mission: transform household waste management from a routine chore into a rewarding community effort. We connect pre-sorted recyclables directly with sustainable recovery hubs and micro-artisans.
              </p>

              <Link
                to="/about"
                className="btn"
                style={{
                  background: '#FDFBF7',
                  color: '#1B3F2E',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: '700',
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
                background: '#FDFBF7',
                border: '2px solid #E6DAC8',
                textAlign: 'center',
                position: 'relative'
              }}>
                <MaskingTape width="100px" height="28px" rotate="-2deg" style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
                
                <h3 className="font-handwritten" style={{ fontSize: '1.5rem', color: '#1B3F2E', fontWeight: 'bold', marginBottom: '1.25rem' }}>
                  Our Impact So Far 📊
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ borderBottom: '1.5px dashed #E6DAC8', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2.1rem', fontWeight: '800', color: '#1B3F2E', lineHeight: 1 }}>1,200+</div>
                    <div style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: '700', textTransform: 'uppercase' }}>Pickups Completed</div>
                  </div>

                  <div style={{ borderBottom: '1.5px dashed #E6DAC8', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2.1rem', fontWeight: '800', color: '#1B3F2E', lineHeight: 1 }}>15+</div>
                    <div style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: '700', textTransform: 'uppercase' }}>Communities Served</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '2.1rem', fontWeight: '800', color: '#2E7D32', lineHeight: 1 }}>3,500+ kg</div>
                    <div style={{ fontSize: '0.85rem', color: '#1B3F2E', fontWeight: '700', textTransform: 'uppercase' }}>Waste Recycled</div>
                  </div>
                </div>
              </PaperSheet>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         04. "KNOW YOUR WASTE" (Interactive Category Strip)
         ========================================================================= */}
      <section id="waste-guide" style={{ padding: '5rem 1rem', background: '#E6DAC8', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge" style={{ background: '#1B3F2E', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Sorting Guide
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1B3F2E', marginTop: '0.5rem', margin: 0 }}>
                Know Your Waste.
              </h2>
            </div>

            <Link
              to="/post"
              className="btn"
              style={{
                background: '#1B3F2E',
                color: '#FDFBF7',
                padding: '0.75rem 1.65rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '0.9rem'
              }}
            >
              Explore Waste Guide →
            </Link>
          </div>

          {/* 6 Realistic Waste Cards Placed on a Torn Paper Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
            
            {/* 1. Paper */}
            <PaperSheet variant="parchment" rotate="-2deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <RedPaperClip size={32} style={{ position: 'absolute', top: '-14px', left: '15px' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📄</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1B3F2E', marginBottom: '0.25rem' }}>Paper</h4>
              <p style={{ fontSize: '0.8rem', color: '#2E7D32' }}>Crumpled paper ball & magazines</p>
            </PaperSheet>

            {/* 2. Plastic */}
            <PaperSheet variant="kraft" rotate="2.5deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <MaskingTape width="65px" height="20px" rotate="-1deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🧴</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1B3F2E', marginBottom: '0.25rem' }}>Plastic</h4>
              <p style={{ fontSize: '0.8rem', color: '#2E7D32' }}>PET plastic water bottles & jugs</p>
            </PaperSheet>

            {/* 3. Glass */}
            <PaperSheet variant="green" rotate="-1.8deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: '#1B3F2E' }}>
              <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🍾</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#FDFBF7', marginBottom: '0.25rem' }}>Glass</h4>
              <p style={{ fontSize: '0.8rem', color: '#9DBE9B' }}>Green glass bottles & jars</p>
            </PaperSheet>

            {/* 4. Metal */}
            <PaperSheet variant="parchment" rotate="3deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <WashiTape width="70px" height="20px" rotate="2deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🥫</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1B3F2E', marginBottom: '0.25rem' }}>Metal</h4>
              <p style={{ fontSize: '0.8rem', color: '#2E7D32' }}>Crushed soda cans & tin food tins</p>
            </PaperSheet>

            {/* 5. Organic */}
            <PaperSheet variant="kraft" rotate="-2.5deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <RedPaperClip size={32} style={{ position: 'absolute', top: '-14px', right: '15px' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🍌</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1B3F2E', marginBottom: '0.25rem' }}>Organic</h4>
              <p style={{ fontSize: '0.8rem', color: '#2E7D32' }}>Banana peels & compost scraps</p>
            </PaperSheet>

            {/* 6. E-waste */}
            <PaperSheet variant="parchment" rotate="1.5deg" shadow="medium" style={{ padding: '1.5rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📦</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1B3F2E', marginBottom: '0.25rem' }}>E-Waste</h4>
              <p style={{ fontSize: '0.8rem', color: '#2E7D32' }}>Cardboard box with cables & tech</p>
            </PaperSheet>

          </div>

        </div>
      </section>

      {/* =========================================================================
         05. "COMMUNITY IMPACT" SECTION
         ========================================================================= */}
      <section id="community" style={{ padding: '5rem 1rem 6rem 1rem', background: '#FDFBF7', color: '#1B3F2E', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left: Three Vertical Mini-Polaroid Snapshots Pinned Side by Side */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              
              {/* Photo 1: Sapling Planting */}
              <PaperSheet variant="parchment" rotate="-5deg" shadow="deep" style={{ width: '150px', padding: '0.65rem 0.65rem 1rem 0.65rem', background: '#FFFDF7', border: '1.5px solid #E6DAC8', textAlign: 'center' }}>
                <RedPaperClip size={32} style={{ position: 'absolute', top: '-16px', left: '15px' }} />
                <div style={{ background: '#2E7D32', height: '110px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🌱</span>
                </div>
                <div className="font-handwritten" style={{ fontSize: '1.05rem', color: '#1B3F2E', fontWeight: 'bold' }}>
                  Planting hope 🌿
                </div>
              </PaperSheet>

              {/* Photo 2: Earth Poster */}
              <PaperSheet variant="parchment" rotate="3deg" shadow="deep" style={{ width: '150px', padding: '0.65rem 0.65rem 1rem 0.65rem', background: '#FFFDF7', border: '1.5px solid #E6DAC8', textAlign: 'center' }}>
                <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: '#1B3F2E', height: '110px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🌎</span>
                </div>
                <div className="font-handwritten" style={{ fontSize: '1rem', color: '#1B3F2E', fontWeight: 'bold' }}>
                  No planet B 🌎
                </div>
              </PaperSheet>

              {/* Photo 3: Mountain Clean-up */}
              <PaperSheet variant="parchment" rotate="-2.5deg" shadow="deep" style={{ width: '150px', padding: '0.65rem 0.65rem 1rem 0.65rem', background: '#FFFDF7', border: '1.5px solid #E6DAC8', textAlign: 'center' }}>
                <MaskingTape width="65px" height="20px" rotate="2deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: '#9DBE9B', height: '110px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🏔️</span>
                </div>
                <div className="font-handwritten" style={{ fontSize: '1.05rem', color: '#1B3F2E', fontWeight: 'bold' }}>
                  Clean trails ⛰️
                </div>
              </PaperSheet>

            </div>

            {/* Right Side: Headline + Handwritten Checklist */}
            <div>
              <span className="badge" style={{ background: '#2E7D32', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '20px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Community Impact
              </span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: '800', color: '#1B3F2E', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Real People. Real Change.
              </h2>
              <p style={{ color: '#2E7D32', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.75rem', fontWeight: '500' }}>
                When neighbors collaborate to sort and hand off recyclable materials, entire towns become cleaner, healthier, and more resilient.
              </p>

              {/* Handwritten Checklist with Checkmark Boxes */}
              <div className="font-handwritten" style={{ fontSize: '1.4rem', color: '#1B3F2E', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '26px', height: '26px', border: '2px solid #2E7D32', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E7D32', fontWeight: '900', fontSize: '1.1rem' }}>✓</span>
                  <span>Cleaner cities</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '26px', height: '26px', border: '2px solid #2E7D32', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E7D32', fontWeight: '900', fontSize: '1.1rem' }}>✓</span>
                  <span>Healthier lives</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '26px', height: '26px', border: '2px solid #2E7D32', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2E7D32', fontWeight: '900', fontSize: '1.1rem' }}>✓</span>
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
                  background: '#1B3F2E',
                  color: '#FDFBF7',
                  padding: '0.9rem 2.2rem',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(27, 63, 46, 0.3)'
                }}
              >
                Join the Movement →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
         06. CALL-TO-ACTION (CTA) BANNER & FOOTER
         ========================================================================= */}
      <TornEdgeMultiLayerTop fillBack="#9DBE9B" fillMid="#2E7D32" fillFront="#1B3F2E" height={60} />
      <footer id="contact" style={{ background: '#1B3F2E', color: '#FDFBF7', padding: '5rem 1rem 3rem 1rem', position: 'relative' }}>
        
        {/* Foliage Overlays */}
        <BotanicalFoliage type="tropical" size={130} rotate="-15deg" color="#9DBE9B" style={{ position: 'absolute', top: '20px', left: '3%', opacity: 0.5 }} />
        <BotanicalFoliage type="olive" size={110} rotate="25deg" color="#2E7D32" style={{ position: 'absolute', top: '30px', right: '4%', opacity: 0.6 }} />

        <div className="container reveal-on-scroll" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          
          <span className="badge" style={{ background: '#9DBE9B', color: '#1B3F2E', padding: '0.4rem 1.1rem', borderRadius: '50px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase' }}>
            Get Started Today
          </span>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: '800', color: '#FDFBF7', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.15 }}>
            READY TO MAKE A DIFFERENCE?
          </h2>

          <div style={{ marginBottom: '2.5rem' }}>
            <Link
              to="/post"
              className="btn"
              style={{
                background: '#FDFBF7',
                color: '#1B3F2E',
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

          {/* Scattered Paper Notes Around CTA Banner */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }} className="font-handwritten">
            <span style={{ background: '#F4E8B2', color: '#1B3F2E', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(-3deg)', fontSize: '1.25rem', fontWeight: 'bold' }}>
              Reduce 🌿
            </span>
            <span style={{ background: '#F2D4D7', color: '#1B3F2E', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(2deg)', fontSize: '1.25rem', fontWeight: 'bold' }}>
              Reuse 🔄
            </span>
            <span style={{ background: '#9DBE9B', color: '#1B3F2E', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(-2.5deg)', fontSize: '1.25rem', fontWeight: 'bold' }}>
              Recycle ♻️
            </span>
            <span style={{ background: '#E6DAC8', color: '#1B3F2E', padding: '0.4rem 1rem', borderRadius: '4px', transform: 'rotate(3.5deg)', fontSize: '1.25rem', fontWeight: 'bold' }}>
              Repeat ♡
            </span>
          </div>

          {/* Minimal Clean Footer Links & Socials */}
          <div style={{ borderTop: '1px dashed rgba(253, 251, 247, 0.2)', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🌱</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: '800', color: '#FDFBF7' }}>
                ClearBin
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.9rem', color: '#9DBE9B', fontWeight: '600' }}>
              <Link to="/" style={{ color: 'inherit' }}>Home</Link>
              <Link to="/about" style={{ color: 'inherit' }}>About</Link>
              <a href="#waste-guide" style={{ color: 'inherit' }}>Waste Guide</a>
              <a href="#community" style={{ color: 'inherit' }}>Community</a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '1.3rem', color: '#FDFBF7' }}>
              <span title="Instagram" style={{ cursor: 'pointer' }}>📸</span>
              <span title="LinkedIn" style={{ cursor: 'pointer' }}>💼</span>
              <span title="YouTube" style={{ cursor: 'pointer' }}>▶️</span>
            </div>

            <div className="font-handwritten" style={{ fontSize: '1.25rem', color: '#9DBE9B', marginTop: '0.5rem' }}>
              Made for a Cleaner Tomorrow. ♡
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
