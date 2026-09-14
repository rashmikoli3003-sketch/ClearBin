import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PaperSheet } from '../components/Scrapbook/PaperSheet';
import { StickyNote } from '../components/Scrapbook/StickyNote';
import { RedPaperClip, GreenPushPin, MaskingTape, WashiTape } from '../components/Scrapbook/Fasteners';
import { ArrowDoodle, ScribbleArrow } from '../components/Scrapbook/Doodle';
import { BotanicalFoliage } from '../components/Scrapbook/Foliage';

export default function Home() {
  useScrollReveal();

  return (
    <div className="home-page" style={{ background: 'var(--bg-kraft, #d8c7ad)', color: 'var(--green-dark, #193f2d)', overflowX: 'hidden', position: 'relative' }}>
      
      {/* BACKGROUND FLOATING GREEN SCRIBBLE ARROWS SCATTERED ON THE KRAFT CANVAS */}
      <ScribbleArrow size={140} rotate="-25deg" style={{ position: 'absolute', top: '120px', left: '3%', opacity: 0.85, zIndex: 2, pointerEvents: 'none' }} />
      <ScribbleArrow size={160} rotate="110deg" style={{ position: 'absolute', top: '480px', right: '4%', opacity: 0.85, zIndex: 2, pointerEvents: 'none' }} />
      <ScribbleArrow size={150} rotate="45deg" style={{ position: 'absolute', top: '1250px', left: '2%', opacity: 0.85, zIndex: 2, pointerEvents: 'none' }} />
      <ScribbleArrow size={170} rotate="-80deg" style={{ position: 'absolute', top: '2100px', right: '3%', opacity: 0.85, zIndex: 2, pointerEvents: 'none' }} />

      {/* =========================================================================
         01. HERO SECTION (KRAFT BACKGROUND + CENTERED NOTEBOOK PAGE + FLANKING COLLAGE)
         ========================================================================= */}
      <section style={{
        padding: '3rem 1rem 5rem 1rem',
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justify: 'center'
      }}>
        {/* Botanical Foliage Stems Behind Hero */}
        <BotanicalFoliage type="olive" size={130} rotate="-20deg" color="var(--green-leaf, #2e7d32)" style={{ position: 'absolute', top: '15px', left: '1%', opacity: 0.85 }} />
        <BotanicalFoliage type="tropical" size={145} rotate="35deg" color="var(--green-dark, #193f2d)" style={{ position: 'absolute', bottom: '25px', right: '1%', opacity: 0.85 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1160px' }}>
          <div style={{ position: 'relative', margin: '0 auto' }}>
            
            {/* FLANKING TOP-LEFT: Pink Clip Heart Notepad Card (Uploaded by user) */}
            <div style={{
              position: 'absolute',
              top: '5px',
              left: '-40px',
              zIndex: 15,
              width: '190px',
              transform: 'rotate(-7deg)',
              filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.15))'
            }}>
              <img src="/assets/pink_clip_notepad.png" alt="Pink Clip Notepad Card" style={{ width: '100%' }} />
              <div className="handwritten" style={{
                position: 'absolute',
                top: '55px',
                left: '25px',
                right: '15px',
                fontSize: '1.25rem',
                color: '#193f2d',
                lineHeight: 1.2,
                fontWeight: 'bold'
              }}>
                Good Waste <br />
                Brighter Future <br />
                <span style={{ fontSize: '1.4rem' }}>♡</span>
              </div>
            </div>

            {/* FLANKING MIDDLE-LEFT: Circular Earth Seal Stamp + Green Scribble Arrow */}
            <div style={{ position: 'absolute', top: '240px', left: '-35px', zIndex: 14, textAlign: 'center' }}>
              <div style={{
                width: '135px',
                height: '135px',
                borderRadius: '50%',
                border: '2px dashed #193f2d',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justify: 'center',
                background: 'rgba(244, 236, 220, 0.65)',
                transform: 'rotate(-12deg)',
                padding: '0.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <span style={{ fontSize: '1.9rem' }}>🌎</span>
                <span className="handwritten" style={{ fontSize: '0.92rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.1 }}>
                  There is no planet B #SortRight
                </span>
              </div>
              <ScribbleArrow size={110} rotate="-40deg" style={{ marginTop: '0.2rem' }} />
            </div>

            {/* FLANKING TOP-RIGHT: Polaroid Photo Pinned with Red Clip */}
            <PaperSheet variant="parchment" rotate="5.5deg" shadow="deep" style={{
              position: 'absolute',
              top: '15px',
              right: '-35px',
              width: '240px',
              padding: '0.85rem 0.85rem 1.25rem 0.85rem',
              zIndex: 14,
              background: '#FDFBF7',
              border: '2px solid #E6DAC8',
              textAlign: 'center'
            }}>
              <RedPaperClip size={44} style={{ position: 'absolute', top: '-24px', left: '22px' }} />
              <div style={{ width: '100%', height: '155px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                <img src="/assets/hero_recycling.jpg" alt="A cleaner tomorrow is in your hands" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="handwritten" style={{ fontSize: '1.25rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.2 }}>
                A cleaner tomorrow is in your hands ♡
              </div>
            </PaperSheet>

            {/* FLANKING TOP FAR-RIGHT: Ripped Ruled Paper Scrap (Uploaded by user) */}
            <div style={{
              position: 'absolute',
              top: '-35px',
              right: '95px',
              width: '190px',
              zIndex: 12,
              transform: 'rotate(-4deg)',
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))'
            }}>
              <img src="/assets/ripped_ruled_paper.png" alt="Ripped Ruled Paper Scrap" style={{ width: '100%' }} />
              <div className="handwritten" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '1.15rem',
                color: '#193f2d',
                fontWeight: 'bold',
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
                textAlign: 'center'
              }}>
                Reduce • Reuse • Recycle
              </div>
            </div>

            {/* FLANKING MIDDLE-RIGHT: Sage Green Sticky Note */}
            <StickyNote color="mint" rotate="3.5deg" fastener="pin" style={{ position: 'absolute', top: '245px', right: '-30px', zIndex: 15, maxWidth: '200px', background: '#9DBE9B' }}>
              <div className="handwritten" style={{ fontSize: '1.25rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.25 }}>
                Same Planet <br />
                Different Choices ♡
              </div>
            </StickyNote>

            {/* MAIN HERO CARD: Large Off-White Notebook Sheet with Metal Spiral Rings on Left */}
            <PaperSheet variant="parchment" rotate="-0.5deg" shadow="deep" style={{
              padding: '4rem 3.5rem 3.5rem 5rem',
              zIndex: 5,
              border: '2px solid #E6DAC8',
              background: '#FDFBF7',
              position: 'relative',
              boxShadow: 'var(--shadow-paper, 3px 12px 25px rgba(45, 30, 15, 0.18))'
            }}>
              {/* Metal Spiral Hole Ring Strip Left Margin */}
              <div style={{
                position: 'absolute',
                top: '30px',
                bottom: '30px',
                left: '18px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                pointerEvents: 'none'
              }}>
                {[...Array(11)].map((_, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#d8c7ad', border: '1.5px solid #a8947a' }} />
                    <div style={{ width: '12px', height: '4px', background: '#8c7860', borderRadius: '2px' }} />
                  </div>
                ))}
              </div>

              <MaskingTape width="150px" height="34px" rotate="-1deg" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />

              <div style={{ textAlign: 'center', marginLeft: '1.5rem' }}>
                {/* Title Logo: Handwritten ClearBin */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem' }}>
                  <span className="handwritten" style={{ fontSize: '5rem', fontWeight: 'bold', color: '#193f2d', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    ClearBin
                  </span>
                  <span style={{ fontSize: '2.5rem' }}>🌱</span>
                </div>
                
                {/* Subtitle with Smiley Face Doodle */}
                <div className="handwritten" style={{ fontSize: '1.8rem', color: '#2e7d32', fontWeight: 'bold', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <span>Small Actions Big Change</span>
                  <span style={{ fontSize: '1.9rem' }}>😊</span>
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
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '3.5rem', position: 'relative', maxWidth: '780px' }}>
            <span className="badge" style={{ background: '#d8c7ad', color: '#193f2d', padding: '0.4rem 1.1rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              How It Works
            </span>
            <h2 className="section-title" style={{ color: '#193f2d', fontSize: '2.8rem', fontWeight: '800', marginTop: '0.75rem', marginBottom: '0.35rem' }}>
              A Simple Process For A Cleaner Tomorrow.
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="handwritten" style={{ fontSize: '1.65rem', color: '#2e7d32', fontWeight: 'bold' }}>
                It's easier than you think!
              </span>
              <ScribbleArrow size={90} rotate="-20deg" />
            </div>
          </div>

          {/* 4-Step Process Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem', position: 'relative', alignItems: 'stretch' }}>
            
            {/* Step 1: Cream Paper Swatch featuring Colored Crayon Bin Illustration */}
            <PaperSheet variant="notebook" rotate="-2.5deg" shadow="medium" style={{ padding: '1.75rem 1.35rem', textAlign: 'center', background: '#fdfbf7', border: '1.5px solid #e6dac8' }}>
              <MaskingTape width="85px" height="24px" rotate="1deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.2rem' }}>01</span>
              <div style={{ width: '90px', height: '90px', margin: '0 auto 0.5rem auto' }}>
                <img src="/assets/colored_bin_illustration.png" alt="Crayon Waste Bin Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>SORT</h3>
              <p style={{ fontSize: '0.9rem', color: '#2e7d32', lineHeight: '1.45', fontWeight: '600' }}>
                Separate waste at source.
              </p>
            </PaperSheet>

            {/* Step 2: Lined Notebook Paper Swatch */}
            <PaperSheet variant="parchment" rotate="1.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: '#fdfbf7', border: '1.5px solid #e6dac8' }}>
              <RedPaperClip size={34} style={{ position: 'absolute', top: '-16px', right: '20px' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.35rem' }}>02</span>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.5rem' }}>🚛</div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>COLLECT</h3>
              <p style={{ fontSize: '0.9rem', color: '#193f2d', lineHeight: '1.45', fontWeight: '600' }}>
                We pick it up from your location.
              </p>
            </PaperSheet>

            {/* Step 3: Kraft Card Swatch with Green Pushpin */}
            <PaperSheet variant="kraft" rotate="-1.5deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', border: '1.5px solid #d4c3aa' }}>
              <GreenPushPin style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.35rem' }}>03</span>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.5rem' }}>♻️</div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>PROCESS</h3>
              <p style={{ fontSize: '0.9rem', color: '#193f2d', lineHeight: '1.45', fontWeight: '600' }}>
                Waste is sorted and processed responsibly.
              </p>
            </PaperSheet>

            {/* Step 4: Soft Green Paper Swatch */}
            <PaperSheet variant="green" rotate="2.8deg" shadow="medium" style={{ padding: '2rem 1.35rem', textAlign: 'center', background: '#9DBE9B' }}>
              <WashiTape width="85px" height="24px" rotate="-2deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#193f2d', display: 'block', marginBottom: '0.35rem' }}>04</span>
              <div style={{ fontSize: '3.2rem', marginBottom: '0.5rem' }}>🍃</div>
              <h3 style={{ fontSize: '1.35rem', color: '#193f2d', fontWeight: '800', marginBottom: '0.35rem' }}>REUSE</h3>
              <p style={{ fontSize: '0.9rem', color: '#193f2d', lineHeight: '1.45', fontWeight: '600' }}>
                Materials get a second life.
              </p>
            </PaperSheet>

          </div>

          {/* Floating Callout on Right: Oval Bubble + Foliage Branch */}
          <div style={{ position: 'absolute', right: '3%', bottom: '25px', textAlign: 'center' }}>
            <div style={{
              background: '#fdfbf7',
              border: '1.5px solid #193f2d',
              borderRadius: '50%',
              padding: '1.25rem 1rem',
              width: '155px',
              height: '145px',
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
            <BotanicalFoliage type="olive" size={85} rotate="40deg" color="#2e7d32" style={{ marginTop: '-10px' }} />
          </div>

        </div>
      </section>

      {/* =========================================================================
         03. "ABOUT CLEARBIN" (DARK FOREST GREEN FULL-WIDTH TORN BAND #193f2d WITH GREEN BAG QUOTE)
         ========================================================================= */}
      <section className="torn-top torn-bottom" style={{ background: '#193f2d', color: '#FDFBF7', padding: '6.5rem 1rem 7rem 1rem', position: 'relative' }}>
        <div className="container">
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
                <div style={{ width: '100%', height: '210px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.85rem' }}>
                  <img src="/assets/volunteer_cleanup.jpg" alt="Cleaner communities Happier tomorrows" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="handwritten" style={{ fontSize: '1.4rem', color: '#193f2d', fontWeight: 'bold' }}>
                  Cleaner communities <br />
                  Happier tomorrows ♡
                </div>
              </PaperSheet>
            </div>

            {/* Center: Translucent Green Plastic Bag Eco Quote (Uploaded by user) */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '240px',
                marginBottom: '1.25rem',
                transform: 'rotate(2deg)',
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))'
              }}>
                <img src="/assets/green_bag_quote.png" alt="Nothing we use for a few minutes should pollute our planet for centuries" style={{ width: '100%' }} />
              </div>

              <span className="badge" style={{ background: '#2e7d32', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                About ClearBin
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FDFBF7', marginTop: '0.75rem', marginBottom: '0.85rem', lineHeight: '1.2' }}>
                Waste Solutions For A Brighter Tomorrow.
              </h2>
              <p style={{ color: '#9DBE9B', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem', maxWidth: '440px' }}>
                We connect individuals, communities and organizations with responsible waste collection, recycling and disposal solutions.
              </p>

              <Link
                to="/about"
                className="btn"
                style={{
                  background: '#FDFBF7',
                  color: '#193f2d',
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

            {/* Right: Metrics Torn Paper Card attached with Red Clip */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <PaperSheet variant="notebook" rotate="3deg" shadow="deep" style={{
                width: '320px',
                padding: '2rem 1.5rem',
                background: '#FDFBF7',
                border: '2px solid #E6DAC8',
                position: 'relative'
              }}>
                <RedPaperClip size={40} style={{ position: 'absolute', top: '-22px', right: '30px' }} />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>🚚</span>
                    <div>
                      <div style={{ fontSize: '1.65rem', fontWeight: '900', color: '#193f2d', lineHeight: 1 }}>1,200+</div>
                      <div style={{ fontSize: '0.82rem', color: '#2e7d32', fontWeight: '700' }}>Pickups Completed</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>🏢</span>
                    <div>
                      <div style={{ fontSize: '1.65rem', fontWeight: '900', color: '#193f2d', lineHeight: 1 }}>15+</div>
                      <div style={{ fontSize: '0.82rem', color: '#2e7d32', fontWeight: '700' }}>Communities</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>♻️</span>
                    <div>
                      <div style={{ fontSize: '1.65rem', fontWeight: '900', color: '#193f2d', lineHeight: 1 }}>3,500+ kg</div>
                      <div style={{ fontSize: '0.82rem', color: '#2e7d32', fontWeight: '700' }}>Waste Recycled</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px dashed #d8c7ad', textAlign: 'center' }}>
                  <span className="handwritten" style={{ fontSize: '1.25rem', color: '#193f2d', fontWeight: 'bold' }}>
                    Cleaner • Greener • Happier
                  </span>
                </div>
              </PaperSheet>

              {/* Vertical Margin Annotation */}
              <div style={{
                position: 'absolute',
                right: '-45px',
                top: '50%',
                transform: 'translateY(-50%) rotate(90deg)',
                whiteSpace: 'nowrap'
              }}>
                <span className="handwritten" style={{ fontSize: '1.3rem', color: '#9DBE9B', fontWeight: 'bold' }}>
                  People + Progress + A Cleaner Planet
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         04. "KNOW YOUR WASTE" (WASTE CATEGORIES SCRAP PAPER TAGS ON KRAFT)
         ========================================================================= */}
      <section id="waste-guide" style={{ padding: '6rem 1rem 6.5rem 1rem', background: '#d8c7ad', position: 'relative' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <span className="badge" style={{ background: '#f4ecdc', color: '#193f2d', padding: '0.4rem 1.1rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                Waste Categories
              </span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#193f2d', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                Know Your Waste.
              </h2>
              <p style={{ color: '#193f2d', fontSize: '1.1rem', fontWeight: '600' }}>
                Learn how to sort different types of waste and help them find a better tomorrow.
              </p>
            </div>

            <Link
              to="/matches"
              className="btn"
              style={{
                background: '#193f2d',
                color: '#FDFBF7',
                padding: '0.95rem 2rem',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(25,63,45,0.3)'
              }}
            >
              Explore Waste Guide →
            </Link>
          </div>

          {/* 6 Scrap Paper Item Tags with Real Photos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            
            {/* Tag 1: Paper */}
            <PaperSheet variant="parchment" rotate="-3deg" shadow="medium" style={{ padding: '1rem', textAlign: 'center', background: '#FDFBF7', border: '1.5px solid #e6dac8' }}>
              <MaskingTape width="65px" height="20px" rotate="2deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ width: '100%', height: '110px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                <img src="/assets/waste_paper.jpg" alt="Paper waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: '800' }}>Paper</h4>
            </PaperSheet>

            {/* Tag 2: Plastic */}
            <PaperSheet variant="notebook" rotate="4deg" shadow="medium" style={{ padding: '1rem', textAlign: 'center', background: '#FDFBF7', border: '1.5px solid #e6dac8' }}>
              <RedPaperClip size={30} style={{ position: 'absolute', top: '-14px', right: '15px' }} />
              <div style={{ width: '100%', height: '110px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                <img src="/assets/waste_plastic.jpg" alt="Plastic waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: '800' }}>Plastic</h4>
            </PaperSheet>

            {/* Tag 3: Glass */}
            <PaperSheet variant="kraft" rotate="-2deg" shadow="medium" style={{ padding: '1rem', textAlign: 'center', border: '1.5px solid #d4c3aa' }}>
              <GreenPushPin style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ width: '100%', height: '110px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                <img src="/assets/waste_glass.jpg" alt="Glass waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: '800' }}>Glass</h4>
            </PaperSheet>

            {/* Tag 4: Metal */}
            <PaperSheet variant="parchment" rotate="3deg" shadow="medium" style={{ padding: '1rem', textAlign: 'center', background: '#FDFBF7', border: '1.5px solid #e6dac8' }}>
              <WashiTape width="65px" height="20px" rotate="-3deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ width: '100%', height: '110px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                <img src="/assets/waste_metal.jpg" alt="Metal waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: '800' }}>Metal</h4>
            </PaperSheet>

            {/* Tag 5: Organic */}
            <PaperSheet variant="green" rotate="-4deg" shadow="medium" style={{ padding: '1rem', textAlign: 'center', background: '#9DBE9B' }}>
              <MaskingTape width="65px" height="20px" rotate="1deg" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ width: '100%', height: '110px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                <img src="/assets/waste_organic.jpg" alt="Organic waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: '800' }}>Organic</h4>
            </PaperSheet>

            {/* Tag 6: E-waste */}
            <PaperSheet variant="kraft" rotate="2deg" shadow="medium" style={{ padding: '1rem', textAlign: 'center', border: '1.5px solid #d4c3aa' }}>
              <RedPaperClip size={30} style={{ position: 'absolute', top: '-14px', left: '15px' }} />
              <div style={{ width: '100%', height: '110px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                <img src="/assets/waste_ewaste.jpg" alt="E-waste" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: '800' }}>E-waste</h4>
            </PaperSheet>

          </div>

          {/* Right Annotation: Sort it Right! Doodle + Green Scribble Arrow */}
          <div style={{ position: 'absolute', right: '2%', top: '35%', textAlign: 'center' }}>
            <span className="handwritten" style={{ fontSize: '1.8rem', color: '#193f2d', fontWeight: 'bold', display: 'block' }}>
              Sort it <br /> Right!
            </span>
            <ScribbleArrow size={100} rotate="85deg" style={{ marginTop: '0.2rem' }} />
          </div>

        </div>
      </section>

      {/* =========================================================================
         05. "COMMUNITY IMPACT" (DARK FOREST GREEN SECTION #193f2d)
         ========================================================================= */}
      <section id="community" className="torn-top torn-bottom" style={{ background: '#193f2d', color: '#FDFBF7', padding: '6.5rem 1rem 7rem 1rem', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left: Overlapping Photo & Note Collage */}
            <div style={{ position: 'relative', minHeight: '340px' }}>
              
              {/* Sticky Note Top-Left */}
              <StickyNote color="pink" rotate="-6deg" fastener="tape" style={{ position: 'absolute', top: '0', left: '0', zIndex: 15, maxWidth: '170px' }}>
                <div className="handwritten" style={{ fontSize: '1.15rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.2 }}>
                  Not just waste — <br />
                  we see potential. ♡
                </div>
              </StickyNote>

              {/* Photo 1: Seedling Hands */}
              <PaperSheet variant="parchment" rotate="4deg" shadow="medium" style={{
                position: 'absolute',
                top: '40px',
                left: '120px',
                width: '160px',
                padding: '0.65rem',
                background: '#FDFBF7',
                zIndex: 12
              }}>
                <div style={{ width: '100%', height: '120px', borderRadius: '4px', overflow: 'hidden' }}>
                  <img src="/assets/seedling_hands.jpg" alt="Plant seedling in hands" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </PaperSheet>

              {/* Photo 2: Chalkboard Earth */}
              <PaperSheet variant="parchment" rotate="-3deg" shadow="medium" style={{
                position: 'absolute',
                top: '140px',
                left: '20px',
                width: '170px',
                padding: '0.65rem',
                background: '#FDFBF7',
                zIndex: 14
              }}>
                <div style={{ width: '100%', height: '130px', borderRadius: '4px', overflow: 'hidden' }}>
                  <img src="/assets/chalkboard_earth.jpg" alt="There is no away chalkboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </PaperSheet>

              {/* Photo 3: Mountain Nature Hiker */}
              <PaperSheet variant="parchment" rotate="5deg" shadow="medium" style={{
                position: 'absolute',
                top: '160px',
                left: '170px',
                width: '160px',
                padding: '0.65rem',
                background: '#FDFBF7',
                zIndex: 13
              }}>
                <div style={{ width: '100%', height: '120px', borderRadius: '4px', overflow: 'hidden' }}>
                  <img src="/assets/nature_mountains.jpg" alt="Hiker in green mountains" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </PaperSheet>

            </div>

            {/* Center: Community Story Text */}
            <div>
              <span className="badge" style={{ background: '#2e7d32', color: '#FDFBF7', padding: '0.35rem 0.95rem', borderRadius: '4px', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Community Impact
              </span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#FDFBF7', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                Real People. <br />
                Real Change.
              </h2>
              <p style={{ color: '#9DBE9B', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                From cleaner streets to greener neighbourhoods, ClearBin is building a community that cares.
              </p>

              <Link
                to="/showcase"
                className="btn"
                style={{
                  background: '#FDFBF7',
                  color: '#193f2d',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                }}
              >
                Join the Movement →
              </Link>
            </div>

            {/* Right: Checklist Notebook Sheet taped at top */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PaperSheet variant="notebook" rotate="-2.5deg" shadow="deep" style={{
                width: '280px',
                padding: '2rem 1.5rem',
                background: '#FDFBF7',
                border: '2px solid #E6DAC8',
                position: 'relative'
              }}>
                <MaskingTape width="110px" height="28px" rotate="1deg" style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#193f2d', fontWeight: '700' }}>
                    <span style={{ color: '#2e7d32', fontWeight: '900' }}>☑</span>
                    <span>Cleaner cities</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#193f2d', fontWeight: '700' }}>
                    <span style={{ color: '#2e7d32', fontWeight: '900' }}>☑</span>
                    <span>Healthier lives</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#193f2d', fontWeight: '700' }}>
                    <span style={{ color: '#2e7d32', fontWeight: '900' }}>☑</span>
                    <span>Greener future</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#193f2d', fontWeight: '700' }}>
                    <span style={{ color: '#2e7d32', fontWeight: '900' }}>☑</span>
                    <span>You in? 😊</span>
                  </div>
                </div>
              </PaperSheet>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         06. CTA BANNER & 07. FOOTER SECTION
         ========================================================================= */}
      <section id="contact" style={{ background: '#193f2d', color: '#FDFBF7', padding: '4rem 1rem 2rem 1rem', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          
          {/* CTA Banner Card */}
          <div style={{
            background: 'rgba(25, 63, 45, 0.85)',
            border: '2px solid rgba(253, 251, 247, 0.15)',
            borderRadius: '20px',
            padding: '3.5rem 2.5rem',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '4rem',
            boxShadow: '0 12px 30px rgba(0,0,0,0.25)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2.5rem' }}>
              
              {/* Left Text */}
              <div style={{ maxWidth: '620px' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '900', color: '#FDFBF7', lineHeight: '1.15', marginBottom: '0.85rem' }}>
                  READY TO MAKE <br />
                  A DIFFERENCE?
                </h2>
                <p style={{ color: '#9DBE9B', fontSize: '1.15rem', marginBottom: '2rem', fontWeight: '600' }}>
                  Schedule a pickup today and be a part of the change.
                </p>

                <Link
                  to="/post"
                  className="btn"
                  style={{
                    background: '#FDFBF7',
                    color: '#193f2d',
                    padding: '1rem 2.4rem',
                    borderRadius: '50px',
                    fontWeight: '800',
                    fontSize: '1.05rem',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
                  }}
                >
                  Schedule Pickup →
                </Link>
              </div>

              {/* Right Side: Yellow Sticky Note + 3D Moss Recycling Symbol Photo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative' }}>
                
                {/* Yellow Sticky Note */}
                <StickyNote color="yellow" rotate="-6deg" fastener="tape" style={{ maxWidth: '180px' }}>
                  <div className="handwritten" style={{ fontSize: '1.25rem', color: '#193f2d', fontWeight: 'bold', lineHeight: 1.2 }}>
                    Same Waste <br />
                    New Possibilities ♡
                  </div>
                </StickyNote>

                {/* 3D Recycling Symbol Cutout Photo */}
                <div style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                  border: '3px solid #9DBE9B'
                }}>
                  <img src="/assets/recycling_3d.jpg" alt="3D Moss Recycling Symbol" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

              </div>

            </div>
          </div>

          {/* Minimal Clean Footer Bar */}
          <div style={{
            borderTop: '1px solid rgba(253, 251, 247, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span style={{ fontSize: '1.8rem' }}>🌱</span>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FDFBF7', lineHeight: 1 }}>ClearBin</div>
                <div className="handwritten" style={{ fontSize: '0.85rem', color: '#9DBE9B' }}>Sort Today. A Cleaner Tomorrow.</div>
              </div>
            </div>

            {/* Nav links */}
            <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: '#9DBE9B', fontWeight: '700', fontSize: '0.9rem' }}>Home</Link>
              <Link to="/about" style={{ color: '#9DBE9B', fontWeight: '700', fontSize: '0.9rem' }}>About</Link>
              <a href="#waste-guide" style={{ color: '#9DBE9B', fontWeight: '700', fontSize: '0.9rem' }}>Waste Guide</a>
              <a href="#community" style={{ color: '#9DBE9B', fontWeight: '700', fontSize: '0.9rem' }}>Community</a>
              <a href="#contact" style={{ color: '#9DBE9B', fontWeight: '700', fontSize: '0.9rem' }}>Contact</a>
            </div>

            {/* Social Icons & Copyright */}
            <div style={{ color: '#9DBE9B', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>📷 💼 ▶️</span>
              <span>Made for a Cleaner Tomorrow. ♡</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}