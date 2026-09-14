import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PaperSheet } from '../components/Scrapbook/PaperSheet';
import { StickyNote } from '../components/Scrapbook/StickyNote';
import { RedPaperClip, GreenPushPin, MaskingTape, WashiTape } from '../components/Scrapbook/Fasteners';
import { ArrowDoodle } from '../components/Scrapbook/Doodle';
import { BotanicalFoliage } from '../components/Scrapbook/Foliage';

export default function Home() {
  useScrollReveal();

  return (
    <div className="home-page" style={{ background: 'var(--bg-kraft, #d8c7ad)', color: 'var(--green-dark, #193f2d)', overflowX: 'hidden' }}>
      
      {/* =========================================================================
         01. HERO SECTION (Kraft Background + Centered Notebook Page + Flanking Collage)
         ========================================================================= */}
      <section style={{
        padding: '2.5rem 1rem 4.5rem 1rem',
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justify: 'center'
      }}>
        {/* Botanical Leaves Tucked Behind Main Hero Collage */}
        <BotanicalFoliage type="olive" size={120} rotate="-20deg" color="var(--green-leaf, #2e7d32)" style={{ position: 'absolute', top: '15px', left: '1%', opacity: 0.8 }} />
        <BotanicalFoliage type="tropical" size={135} rotate="35deg" color="var(--green-dark, #193f2d)" style={{ position: 'absolute', bottom: '30px', right: '1.5%', opacity: 0.85 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1120px' }}>
          <div style={{ position: 'relative', margin: '0 auto' }}>
            
            {/* FLANKING TOP-LEFT: Pink Sticky Note ("Good Waste Brighter Future ♡") */}
            <StickyNote color="pink" rotate="-7deg" fastener="tape" style={{ position: 'absolute', top: '10px', left: '-40px', zIndex: 15, maxWidth: '210px' }}>
              <div className="handwritten" style={{ fontSize: '1.4rem', color: '#193f2d', lineHeight: 1.2, fontWeight: 'bold' }}>
                Good Waste <br />
                Brighter Future <br />
                <span style={{ fontSize: '1.6rem' }}>♡</span>
              </div>
            </StickyNote>

            {/* FLANKING MIDDLE-LEFT: Circular Earth Seal Stamp ("There is no planet B #SortRight") */}
            <div style={{ position: 'absolute', top: '210px', left: '-30px', zIndex: 14, textAlign: 'center' }}>
              <div style={{
                width: '125px',
                height: '125px',
                borderRadius: '50%',
                border: '2px dashed #193f2d',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justify: 'center',
                background: 'rgba(244, 236, 220, 0.4)',
                transform: 'rotate(-12deg)',
                padding: '0.5rem'
              }}>
                <span style={{ fontSize: '1.8rem' }}>🌎</span>
                <span className="handwritten" style={{ fontSize: '0.9rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.1 }}>
                  There is no planet B #SortRight
                </span>
              </div>
              <ArrowDoodle color="#193f2d" size={40} rotate="-60deg" style={{ marginTop: '0.25rem' }} />
            </div>

            {/* FLANKING TOP-RIGHT: Polaroid Photo Pinned with Red Clip */}
            <PaperSheet variant="parchment" rotate="5.5deg" shadow="deep" style={{
              position: 'absolute',
              top: '15px',
              right: '-40px',
              width: '235px',
              padding: '0.85rem 0.85rem 1.35rem 0.85rem',
              zIndex: 14,
              background: '#FDFBF7',
              border: '2px solid #E6DAC8',
              textAlign: 'center'
            }}>
              <RedPaperClip size={42} style={{ position: 'absolute', top: '-24px', left: '25px' }} />
              <div style={{ background: '#2e7d32', height: '145px', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FDFBF7', marginBottom: '0.65rem', overflow: 'hidden' }}>
                <span style={{ fontSize: '3.2rem' }}>♻️🗑️</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase' }}>Sorting Action</span>
              </div>
              <div className="handwritten" style={{ fontSize: '1.2rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.2 }}>
                A cleaner tomorrow is in your hands ♡
              </div>
            </PaperSheet>

            {/* FLANKING TOP FAR-RIGHT: Torn Kraft Paper Note */}
            <PaperSheet variant="kraft" rotate="-4deg" shadow="medium" style={{
              position: 'absolute',
              top: '-35px',
              right: '90px',
              width: '180px',
              padding: '0.75rem 1rem',
              zIndex: 12,
              border: '1.5px solid #d4c3aa'
            }}>
              <div className="handwritten" style={{ fontSize: '1.25rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.25 }}>
                Reduce <br />
                Reuse <br />
                Recycle <br />
                Repeat 🔄
              </div>
            </PaperSheet>

            {/* FLANKING MIDDLE-RIGHT: Sage Green Sticky Note */}
            <StickyNote color="mint" rotate="3.5deg" fastener="pin" style={{ position: 'absolute', top: '230px', right: '-35px', zIndex: 15, maxWidth: '200px', background: '#9DBE9B' }}>
              <div className="handwritten" style={{ fontSize: '1.2rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.25 }}>
                Same Planet <br />
                Different Choices ♡
              </div>
            </StickyNote>

            {/* MAIN HERO CARD: Large Off-White Torn Notebook Page with Spiral Holes on Left */}
            <PaperSheet variant="parchment" rotate="-0.5deg" shadow="deep" style={{
              padding: '4rem 3.5rem 3.5rem 4.5rem',
              zIndex: 5,
              border: '2px solid #E6DAC8',
              background: '#FDFBF7',
              position: 'relative',
              boxShadow: 'var(--shadow-paper, 3px 12px 25px rgba(45, 30, 15, 0.18))'
            }}>
              {/* Spiral Hole Punch Left Margin */}
              <div style={{
                position: 'absolute',
                top: '40px',
                bottom: '40px',
                left: '16px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                pointerEvents: 'none'
              }}>
                {[...Array(10)].map((_, i) => (
                  <div key={i} style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#d8c7ad', border: '1.5px solid #bca88e' }} />
                ))}
              </div>

              <MaskingTape width="150px" height="34px" rotate="-1deg" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />

              <div style={{ textAlign: 'center', marginLeft: '1rem' }}>
                {/* Title Logo: Handwritten ClearBin */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem' }}>
                  <span className="handwritten" style={{ fontSize: '4.8rem', fontWeight: 'bold', color: '#193f2d', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    ClearBin
                  </span>
                  <span style={{ fontSize: '2.5rem' }}>🌱</span>
                </div>
                
                {/* Subtitle with Smiley Face Doodle */}
                <div className="handwritten" style={{ fontSize: '1.7rem', color: '#2e7d32', fontWeight: 'bold', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <span>Small Actions Big Change</span>
                  <span style={{ fontSize: '1.8rem' }}>😊</span>
                </div>

                <p style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '600',
                  color: '#193f2d',
                  maxWidth: '680px',
                  margin: '0 auto 2.25rem auto',
                  lineHeight: '1.5'
                }}>
                  A smarter way to manage waste. <br />
                  For cleaner communities and a greener tomorrow.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                  <Link
                    to="/post"
                    className="btn"
                    style={{
                      background: '#193f2d',
                      color: '#FDFBF7',
                      padding: '1.05rem 2.4rem',
                      borderRadius: '50px',
                      fontWeight: '800',
                      fontSize: '1.05rem',
                      boxShadow: '0 6px 18px rgba(25, 63, 45, 0.35)'
                    }}
                  >
                    Schedule Pickup →
                  </Link>

                  <a
                    href="#how-it-works"
                    className="btn"
                    style={{
                      background: '#f4ecdc',
                      color: '#193f2d',
                      border: '1.5px solid #d8c7ad',
                      padding: '1.05rem 2.4rem',
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
         02. "HOW IT WORKS" (LIGHT CREAM TORN BANNER ON KRAFT)
         ========================================================================= */}
      <section id="how-it-works" className="torn-top torn-bottom" style={{ background: '#f4ecdc', color: '#193f2d', padding: '5.5rem 1rem 6rem 1rem', position: 'relative' }}>
        <div className="container">
          
          {/* Section Header */}
          <div className="section-header reveal-on-scroll" style={{ textAlign: 'left', marginBottom: '3.5rem', position: 'relative', maxWidth: '780px' }}>
            <span className="badge" style={{ background: '#d8c7ad', color: '#193f2d', padding: '0.4rem 1.1rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              How It Works
            </span>
            <h2 className="section-title" style={{ color: '#193f2d', fontSize: '2.8rem', fontWeight: '800', marginTop: '0.75rem', marginBottom: '0.35rem' }}>
              A Simple Process For A Cleaner Tomorrow.
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="handwritten" style={{ fontSize: '1.6rem', color: '#2e7d32', fontWeight: 'bold' }}>
                It's easier than you think!
              </span>
              <ArrowDoodle color="#2e7d32" size={45} rotate="-30deg" />
            </div>
          </div>

          {/* 4-Step Process Cards Linked with Curved Arrows */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem', position: 'relative', alignItems: 'stretch' }}>
            
            {/* Step 1: Cream Paper Swatch */}
            <PaperSheet variant="notebook" rotate="-2.5deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: '#fdfbf7', border: '1.5px solid #e6dac8' }} className="reveal-on-scroll">
              <MaskingTape width="85px" height="24px" rotate="1deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.35rem' }}>01</span>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗑️</div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>SORT</h3>
              <p style={{ fontSize: '0.9rem', color: '#2e7d32', lineHeight: '1.45' }}>
                Separate waste at source.
              </p>
            </PaperSheet>

            {/* Step 2: Lined Notebook Paper Swatch */}
            <PaperSheet variant="parchment" rotate="1.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: '#fdfbf7', border: '1.5px solid #e6dac8' }} className="reveal-on-scroll">
              <RedPaperClip size={34} style={{ position: 'absolute', top: '-16px', right: '20px' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.35rem' }}>02</span>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚛</div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>COLLECT</h3>
              <p style={{ fontSize: '0.9rem', color: '#193f2d', lineHeight: '1.45', fontWeight: '500' }}>
                We pick it up from your location.
              </p>
            </PaperSheet>

            {/* Step 3: Kraft Card Swatch with Green Pushpin */}
            <PaperSheet variant="kraft" rotate="-1.5deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', border: '1.5px solid #d4c3aa' }} className="reveal-on-scroll">
              <GreenPushPin style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.35rem' }}>03</span>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>♻️</div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>PROCESS</h3>
              <p style={{ fontSize: '0.9rem', color: '#193f2d', lineHeight: '1.45', fontWeight: '500' }}>
                Waste is sorted and processed responsibly.
              </p>
            </PaperSheet>

            {/* Step 4: Soft Green Paper Swatch */}
            <PaperSheet variant="green" rotate="2.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: '#9DBE9B' }} className="reveal-on-scroll">
              <WashiTape width="85px" height="24px" rotate="-2deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.35rem' }}>04</span>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🍃</div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>REUSE</h3>
              <p style={{ fontSize: '0.9rem', color: '#193f2d', lineHeight: '1.45', fontWeight: '600' }}>
                Materials get a second life.
              </p>
            </PaperSheet>

          </div>

          {/* Floating Callout on Right: Oval Bubble + Foliage Branch */}
          <div className="reveal-on-scroll" style={{ position: 'absolute', right: '3%', bottom: '25px', textAlign: 'center' }}>
            <div style={{
              background: '#fdfbf7',
              border: '1.5px solid #193f2d',
              borderRadius: '50%',
              padding: '1.25rem 1rem',
              width: '150px',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              transform: 'rotate(8deg)',
              boxShadow: 'var(--shadow-paper, 3px 8px 18px rgba(45,30,15,0.12))'
            }}>
              <span className="handwritten" style={{ fontSize: '1.2rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.2 }}>
                Small steps lead to big impact ♡
              </span>
            </div>
            <BotanicalFoliage type="olive" size={80} rotate="40deg" color="#2e7d32" style={{ marginTop: '-10px' }} />
          </div>

        </div>
      </section>

      {/* =========================================================================
         03. "ABOUT CLEARBIN" (DARK FOREST GREEN FULL-WIDTH TORN BAND #193f2d)
         ========================================================================= */}
      <section className="torn-top torn-bottom" style={{ background: '#193f2d', color: '#FDFBF7', padding: '6.5rem 1rem 7rem 1rem', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left: Tilted Polaroid Photo of Volunteers Cleaning Up */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PaperSheet variant="parchment" rotate="-4.5deg" shadow="deep" style={{
                width: '320px',
                padding: '1rem 1rem 1.5rem 1rem',
                background: '#FDFBF7',
                border: '2px solid #E6DAC8',
                textAlign: 'center',
                position: 'relative'
              }}>
                <GreenPushPin style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: '#2e7d32', height: '200px', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FDFBF7', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '4rem' }}>🧹🌿</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Volunteer Drive</span>
                </div>
                <div className="handwritten" style={{ fontSize: '1.4rem', color: '#193f2d', fontWeight: 'bold' }}>
                  Cleaner communities <br />
                  Happier tomorrows ♡
                </div>
              </PaperSheet>
            </div>

            {/* Center: Story Text */}
            <div>
              <span className="badge" style={{ background: '#2e7d32', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                About ClearBin
              </span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#FDFBF7', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Waste Solutions <br />
                For A Brighter Tomorrow.
              </h2>
              <p style={{ color: '#9DBE9B', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                We connect individuals, communities and organizations with responsible waste collection, recycling and disposal solutions. Our goal is to make sustainable living simple, accessible and impactful.
              </p>

              <Link
                to="/about"
                className="btn"
                style={{
                  background: '#f4ecdc',
                  color: '#193f2d',
                  padding: '0.85rem 2rem',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
                }}
              >
                Our Story →
              </Link>
            </div>

            {/* Right: Pinned White Torn Paper Sheet with Red Clip + Impact Metrics */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <PaperSheet variant="parchment" rotate="3.5deg" shadow="deep" style={{
                width: '100%',
                maxWidth: '310px',
                padding: '2.25rem 1.65rem',
                background: '#FDFBF7',
                border: '2px solid #E6DAC8',
                position: 'relative'
              }}>
                <RedPaperClip size={40} style={{ position: 'absolute', top: '-22px', right: '25px' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1.5px dashed #E6DAC8', paddingBottom: '0.85rem' }}>
                    <span style={{ fontSize: '2.2rem' }}>🚚</span>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#193f2d', lineHeight: 1 }}>1,200+</div>
                      <div style={{ fontSize: '0.8rem', color: '#2e7d32', fontWeight: '800', textTransform: 'uppercase' }}>Pickups Completed</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1.5px dashed #E6DAC8', paddingBottom: '0.85rem' }}>
                    <span style={{ fontSize: '2.2rem' }}>🏢</span>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#193f2d', lineHeight: 1 }}>15+</div>
                      <div style={{ fontSize: '0.8rem', color: '#2e7d32', fontWeight: '800', textTransform: 'uppercase' }}>Communities</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2.2rem' }}>♻️</span>
                    <div>
                      <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#2e7d32', lineHeight: 1 }}>3,500+ kg</div>
                      <div style={{ fontSize: '0.8rem', color: '#193f2d', fontWeight: '800', textTransform: 'uppercase' }}>Waste Recycled</div>
                    </div>
                  </div>
                </div>

                <div className="handwritten" style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '1.3rem', color: '#2e7d32', fontWeight: 'bold' }}>
                  Cleaner Greener Happier
                </div>
              </PaperSheet>

              {/* Far Right Vertical Handwritten Annotation */}
              <div className="handwritten" style={{ position: 'absolute', right: '-55px', top: '20px', fontSize: '1.2rem', color: '#9DBE9B', fontWeight: 'bold', lineHeight: 1.3, width: '90px' }}>
                People <br />
                + <br />
                Progress <br />
                + <br />
                A Cleaner <br />
                Planet
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         04. "WASTE CATEGORIES / KNOW YOUR WASTE" (KRAFT BACKGROUND)
         ========================================================================= */}
      <section id="waste-guide" style={{ padding: '5.5rem 1rem', background: 'var(--bg-kraft, #d8c7ad)', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="badge" style={{ background: '#193f2d', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Waste Categories
              </span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#193f2d', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Know Your Waste.
              </h2>
              <p style={{ color: '#193f2d', fontSize: '1.05rem', fontWeight: '600' }}>
                Learn how to sort different types of waste and help them find a better tomorrow.
              </p>
            </div>

            <Link
              to="/post"
              className="btn"
              style={{
                background: '#193f2d',
                color: '#FDFBF7',
                padding: '0.85rem 1.85rem',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '0.95rem'
              }}
            >
              Explore Waste Guide →
            </Link>
          </div>

          {/* 6 Realistic Waste Cards Placed on Tilted Scrap Tags */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', position: 'relative' }}>
            
            {/* 1. Paper */}
            <PaperSheet variant="parchment" rotate="-2.5deg" shadow="medium" style={{ padding: '1.75rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.65rem' }}>📄</div>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#193f2d', background: '#f4ecdc', padding: '0.2rem 0.75rem', borderRadius: '4px' }}>
                Paper
              </span>
            </PaperSheet>

            {/* 2. Plastic */}
            <PaperSheet variant="kraft" rotate="2.2deg" shadow="medium" style={{ padding: '1.75rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.65rem' }}>🧴</div>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#193f2d', background: '#e6dac8', padding: '0.2rem 0.75rem', borderRadius: '4px' }}>
                Plastic
              </span>
            </PaperSheet>

            {/* 3. Glass */}
            <PaperSheet variant="green" rotate="-1.8deg" shadow="medium" style={{ padding: '1.75rem 1rem', textAlign: 'center', background: '#9DBE9B' }}>
              <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '3.2rem', marginBottom: '0.65rem' }}>🍾</div>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#193f2d', background: '#FDFBF7', padding: '0.2rem 0.75rem', borderRadius: '4px' }}>
                Glass
              </span>
            </PaperSheet>

            {/* 4. Metal */}
            <PaperSheet variant="parchment" rotate="3deg" shadow="medium" style={{ padding: '1.75rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.65rem' }}>🥫</div>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#193f2d', background: '#f4ecdc', padding: '0.2rem 0.75rem', borderRadius: '4px' }}>
                Metal
              </span>
            </PaperSheet>

            {/* 5. Organic */}
            <PaperSheet variant="kraft" rotate="-2.8deg" shadow="medium" style={{ padding: '1.75rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.65rem' }}>🍌</div>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#193f2d', background: '#e6dac8', padding: '0.2rem 0.75rem', borderRadius: '4px' }}>
                Organic
              </span>
            </PaperSheet>

            {/* 6. E-Waste */}
            <PaperSheet variant="parchment" rotate="2deg" shadow="medium" style={{ padding: '1.75rem 1rem', textAlign: 'center', background: '#FDFBF7' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.65rem' }}>📦</div>
              <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#193f2d', background: '#f4ecdc', padding: '0.2rem 0.75rem', borderRadius: '4px' }}>
                E-waste
              </span>
            </PaperSheet>

          </div>

          {/* Far Right Annotation */}
          <div className="handwritten" style={{ position: 'absolute', right: '2%', top: '40%', fontSize: '1.5rem', color: '#193f2d', fontWeight: 'bold', textAlign: 'center' }}>
            Sort it <br /> Right!
            <ArrowDoodle color="#193f2d" size={40} rotate="70deg" style={{ display: 'block', margin: '0 auto' }} />
          </div>

        </div>
      </section>

      {/* =========================================================================
         05. "COMMUNITY IMPACT" (DARK GREEN BAND WITH 4 PINNED PHOTOS & CHECKLIST)
         ========================================================================= */}
      <section id="community" className="torn-top torn-bottom" style={{ background: '#193f2d', color: '#FDFBF7', padding: '6rem 1rem 6.5rem 1rem', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left: 4 Pinned Photos & Notes */}
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              
              {/* Note 1: Torn Kraft Scrap */}
              <PaperSheet variant="kraft" rotate="-6deg" shadow="deep" style={{ width: '135px', padding: '0.85rem', background: '#e6dac8', border: '1px solid #d4c3aa' }}>
                <div className="handwritten" style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.2 }}>
                  Not just waste — we see potential. ♡
                </div>
              </PaperSheet>

              {/* Photo 2: Hands Planting */}
              <PaperSheet variant="parchment" rotate="3deg" shadow="deep" style={{ width: '135px', padding: '0.65rem 0.65rem 0.85rem 0.65rem', background: '#FDFBF7', border: '1.5px solid #E6DAC8', textAlign: 'center' }}>
                <RedPaperClip size={32} style={{ position: 'absolute', top: '-16px', left: '15px' }} />
                <div style={{ background: '#2e7d32', height: '100px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🌱</span>
                </div>
              </PaperSheet>

              {/* Photo 3: Chalkboard Sign */}
              <PaperSheet variant="parchment" rotate="-3deg" shadow="deep" style={{ width: '135px', padding: '0.65rem 0.65rem 0.85rem 0.65rem', background: '#FDFBF7', border: '1.5px solid #E6DAC8', textAlign: 'center' }}>
                <GreenPushPin style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: '#193f2d', height: '100px', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FDFBF7', padding: '0.35rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.05em' }}>THERE IS NO AWAY</span>
                  <span style={{ fontSize: '1.5rem' }}>🌎</span>
                </div>
              </PaperSheet>

              {/* Photo 4: Nature Hiker */}
              <PaperSheet variant="parchment" rotate="4.5deg" shadow="deep" style={{ width: '135px', padding: '0.65rem 0.65rem 0.85rem 0.65rem', background: '#FDFBF7', border: '1.5px solid #E6DAC8', textAlign: 'center' }}>
                <MaskingTape width="65px" height="20px" rotate="2deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ background: '#9DBE9B', height: '100px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <span style={{ fontSize: '2.5rem' }}>🏔️</span>
                </div>
              </PaperSheet>

            </div>

            {/* Right: Headline + Checklist */}
            <div>
              <span className="badge" style={{ background: '#2e7d32', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Community Impact
              </span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#FDFBF7', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Real People. <br />
                Real Change.
              </h2>
              <p style={{ color: '#9DBE9B', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                From cleaner streets to greener neighbourhoods, ClearBin is building a community that cares.
              </p>

              <Link
                to="/post"
                className="btn"
                style={{
                  background: '#f4ecdc',
                  color: '#193f2d',
                  padding: '0.9rem 2.2rem',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  marginBottom: '2rem'
                }}
              >
                Join the Movement →
              </Link>
            </div>

            {/* Far Right: Pinned Checklist Card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PaperSheet variant="kraft" rotate="-2deg" shadow="deep" style={{ width: '220px', padding: '1.5rem', background: '#fdfbf7', border: '1.5px solid #e6dac8' }}>
                <MaskingTape width="80px" height="22px" rotate="1deg" style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)' }} />
                <div className="handwritten" style={{ fontSize: '1.4rem', color: '#193f2d', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ border: '2px solid #193f2d', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>✓</span>
                    <span>Cleaner cities</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ border: '2px solid #193f2d', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>✓</span>
                    <span>Healthier lives</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ border: '2px solid #193f2d', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>✓</span>
                    <span>Greener future</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C85A32', fontWeight: 'bold' }}>
                    <span style={{ border: '2px solid #C85A32', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>✓</span>
                    <span>You in? 😊</span>
                  </div>
                </div>
              </PaperSheet>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         06. CALL-TO-ACTION BANNER & FOOTER (DARK GREEN TORN FOOTER)
         ========================================================================= */}
      <footer id="contact" className="torn-top" style={{ background: '#193f2d', color: '#FDFBF7', padding: '6.5rem 1rem 3rem 1rem', position: 'relative' }}>
        
        {/* Left Leaf SVG Outline Motif */}
        <div style={{ position: 'absolute', top: '30px', left: '4%', opacity: 0.25, pointerEvents: 'none' }}>
          <svg width="180" height="220" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 120 C50 120, 48 70, 20 40 C10 25, 25 5, 50 20 C75 5, 90 25, 80 40 C52 70, 50 120, 50 120 Z" stroke="#9DBE9B" strokeWidth="3" />
            <path d="M50 120 L50 20" stroke="#9DBE9B" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="container reveal-on-scroll" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          
          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', color: '#FDFBF7', marginBottom: '0.75rem', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            READY TO MAKE <br />
            A DIFFERENCE?
          </h2>

          <p style={{ color: '#9DBE9B', fontSize: '1.1rem', fontWeight: '600', marginBottom: '2rem' }}>
            Schedule a pickup today and be a part of the change.
          </p>

          <div style={{ marginBottom: '3.5rem' }}>
            <Link
              to="/post"
              className="btn"
              style={{
                background: '#f4ecdc',
                color: '#193f2d',
                padding: '1.15rem 2.85rem',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '1.1rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.35)'
              }}
            >
              Schedule Pickup →
            </Link>
          </div>

          {/* Right Tilted Kraft Note & 3D Recycling Symbol */}
          <div style={{ position: 'absolute', top: '10px', right: '5%', textAlign: 'center' }}>
            <PaperSheet variant="kraft" rotate="4.5deg" shadow="medium" style={{ width: '170px', padding: '0.85rem', background: '#e6dac8' }}>
              <div className="handwritten" style={{ fontSize: '1.25rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.25 }}>
                Same Waste <br />
                New Possibilities ♡
              </div>
            </PaperSheet>
            <div style={{ fontSize: '3.5rem', marginTop: '0.5rem', opacity: 0.8 }}>
              ♻️
            </div>
          </div>

          {/* Footer Bar */}
          <div style={{ borderTop: '1px dashed rgba(253, 251, 247, 0.2)', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.6rem' }}>🌱</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.7rem', fontWeight: '800', color: '#FDFBF7' }}>
                ClearBin
              </span>
            </div>
            <div className="handwritten" style={{ fontSize: '1rem', color: '#9DBE9B', marginTop: '-0.5rem' }}>
              Sort Today. A Cleaner Tomorrow.
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.9rem', color: '#9DBE9B', fontWeight: '700', marginTop: '0.5rem' }}>
              <Link to="/" style={{ color: 'inherit' }}>Home</Link>
              <Link to="/about" style={{ color: 'inherit' }}>About</Link>
              <a href="#waste-guide" style={{ color: 'inherit' }}>Waste Guide</a>
              <a href="#community" style={{ color: 'inherit' }}>Community</a>
              <a href="#contact" style={{ color: 'inherit' }}>Contact</a>
            </div>

            <div style={{ display: 'flex', gap: '1.35rem', fontSize: '1.35rem', color: '#FDFBF7', marginTop: '0.5rem' }}>
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
