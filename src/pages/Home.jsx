import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/mockData';
import { TornEdgeMultiLayerTop, TornEdgeMultiLayerBottom } from '../components/TornEdge';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PaperSheet } from '../components/Scrapbook/PaperSheet';
import { StickyNote } from '../components/Scrapbook/StickyNote';
import { PaperClip, PushPin, MaskingTape, WashiTape } from '../components/Scrapbook/Fasteners';
import { RecyclingDoodle, LeafDoodle, ArrowDoodle, SparkleDoodle, UnderlineDoodle } from '../components/Scrapbook/Doodle';
import { GlassBottleWaste, PlasticBottleWaste, CardboardWaste } from '../components/Scrapbook/WasteIllustrations';

export default function Home() {
  useScrollReveal();

  return (
    <div className="home-page" style={{ background: '#173F35', color: '#F5F0E6', overflowX: 'hidden' }}>
      
      {/* =========================================================================
         01. MEMO BOARD HERO (Scrapbook Assembly Sequence)
         ========================================================================= */}
      <section style={{
        padding: '4.5rem 0 5rem 0',
        background: 'radial-gradient(circle at 20% 30%, #245C48 0%, #173F35 75%)',
        position: 'relative',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Floating Background Doodles */}
        <RecyclingDoodle size={75} color="#789B62" style={{ position: 'absolute', top: '40px', left: '4%', opacity: 0.25 }} />
        <LeafDoodle size={65} color="#B5C985" rotate="20deg" style={{ position: 'absolute', bottom: '60px', left: '6%', opacity: 0.3 }} />
        <SparkleDoodle size={45} color="#D9A036" style={{ position: 'absolute', top: '50px', right: '8%', opacity: 0.4 }} />

        {/* Floating Physical Waste Illustrations */}
        <GlassBottleWaste size={75} rotate="-14deg" style={{ position: 'absolute', top: '150px', left: '3%', zIndex: 12 }} />
        <PlasticBottleWaste size={70} rotate="16deg" style={{ position: 'absolute', bottom: '100px', right: '4%', zIndex: 12 }} />
        <CardboardWaste size={85} rotate="-8deg" style={{ position: 'absolute', top: '180px', right: '5%', zIndex: 12 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Main Scrapbook Layer Assembly */}
          <div style={{ position: 'relative', maxWidth: '960px', margin: '0 auto' }}>
            
            {/* Background Sheet Layer 1 (Green Accent Paper) */}
            <PaperSheet variant="green" rotate="-2.5deg" shadow="flat" style={{ position: 'absolute', top: '-15px', left: '-15px', right: '-15px', bottom: '-15px', zIndex: 1 }}>
              <div />
            </PaperSheet>

            {/* Background Sheet Layer 2 (Torn Kraft Fragment) */}
            <PaperSheet variant="kraft" rotate="1.8deg" shadow="flat" style={{ position: 'absolute', top: '20px', right: '-25px', width: '220px', height: '180px', zIndex: 2 }}>
              <div className="font-handwritten" style={{ fontSize: '1.2rem', color: '#173F35' }}>
                📌 Memo #2026<br />Zero Landfill Goal!
              </div>
            </PaperSheet>

            {/* Main Foreground Paper Sheet */}
            <PaperSheet variant="parchment" rotate="-0.5deg" shadow="deep" style={{ padding: '3.5rem 3rem', zIndex: 5, border: '2px solid #E7D8BE' }}>
              <PaperClip color="#717D8A" size={42} style={{ position: 'absolute', top: '-24px', left: '40px' }} />
              <WashiTape width="130px" height="32px" rotate="-1deg" style={{ position: 'absolute', top: '-16px', right: '80px' }} />

              <div style={{ textAlign: 'center' }}>
                <span className="badge badge-terracotta" style={{ marginBottom: '1.25rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  🤝 Grassroots Waste-to-Artisan Platform • Circular Economy
                </span>

                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                  fontFamily: 'var(--font-heading)',
                  color: '#173F35',
                  lineHeight: '1.12',
                  marginBottom: '1.25rem'
                }}>
                  WHAT IF HOUSEHOLD WASTE <br />
                  <span style={{ color: '#C85A32', fontStyle: 'italic' }}>WAS N'T THE END?</span>
                </h1>
                <UnderlineDoodle color="#C85A32" width={260} style={{ margin: '-10px auto 1.5rem auto' }} />

                <p style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                  color: '#245C48',
                  maxWidth: '720px',
                  margin: '0 auto 2.25rem auto',
                  lineHeight: '1.65',
                  fontWeight: '500'
                }}>
                  ClearBin connects households directly with nearby micro-artisans, studio craftspeople, and green recovery collectives who give reusable plastic, glass, fabric, and e-waste a creative second life.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative' }}>
                  <Link to="/post" className="btn btn-primary btn-lg" style={{ boxShadow: '0 8px 24px rgba(200,90,50,0.35)' }}>
                    Start Sorting Waste ➔
                  </Link>

                  <Link to="/matches" className="btn btn-secondary btn-lg">
                    Explore Upcyclers Directory
                  </Link>

                  {/* Handwritten Annotation Callout */}
                  <div style={{ position: 'absolute', right: '-20px', bottom: '-45px', display: 'flex', alignItems: 'center', gap: '0.35rem' }} className="font-handwritten">
                    <ArrowDoodle color="#C85A32" size={48} rotate="-160deg" />
                    <span style={{ fontSize: '1.4rem', color: '#C85A32', fontWeight: 'bold' }}>start sorting here!</span>
                  </div>
                </div>
              </div>
            </PaperSheet>

            {/* Corner Sticky Note Badge */}
            <StickyNote color="yellow" rotate="4deg" fastener="pin" style={{ position: 'absolute', bottom: '-35px', left: '-20px', zIndex: 15, maxWidth: '240px' }}>
              <div className="font-handwritten" style={{ fontSize: '1.35rem', color: '#173F35', lineHeight: 1.2 }}>
                💡 Over <strong>12,400 Kg</strong> diverted directly to studio artisans!
              </div>
            </StickyNote>

          </div>
        </div>
      </section>

      {/* =========================================================================
         02. WHY DOES IT MATTER? (Pinned Scrapbook Sheet with Notes & Doodles)
         ========================================================================= */}
      <section className="container reveal-on-scroll" style={{ margin: '4rem auto 4.5rem auto' }}>
        <PaperSheet variant="notebook" rotate="-0.8deg" shadow="medium" style={{ padding: '3rem 2.5rem' }}>
          <PushPin color="#C85A32" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag" style={{ color: '#C85A32' }}>Grassroots Impact</span>
            <h2 className="section-title" style={{ color: '#173F35', fontSize: '2.4rem' }}>
              WHY DOES SMART SORTING MATTER?
            </h2>
            <p style={{ color: '#245C48', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto' }}>
              Every item pre-sorted at home saves raw materials for studio artisans and keeps clean waste out of landfills.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem', position: 'relative' }}>
            <StickyNote color="mint" rotate="-2deg" fastener="tape" title="01. Zero Landfill">
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#173F35' }}>
                Keeps clean plastic bottles & glass jars from rotting in public dumps.
              </p>
            </StickyNote>

            <StickyNote color="kraft" rotate="2deg" fastener="clip" title="02. Worker Livelihoods">
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#173F35' }}>
                Empowers informal waste workers with clean, pre-sorted raw material.
              </p>
            </StickyNote>

            <StickyNote color="rose" rotate="-1.5deg" fastener="tape" title="03. Artisan Earnings">
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#5A2D2D' }}>
                Boosts studio craft income by up to +35% through lower material costs.
              </p>
            </StickyNote>

            <StickyNote color="yellow" rotate="3deg" fastener="pin" title="04. EcoPoints Rewards">
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#173F35' }}>
                Earn points for every completed handoff, redeemable for green store drops!
              </p>
            </StickyNote>
          </div>
        </PaperSheet>
      </section>

      {/* =========================================================================
         03. HOW IT WORKS (Physical Process Board with Connected Line)
         ========================================================================= */}
      <TornEdgeMultiLayerTop fillBack="#789B62" fillMid="#245C48" fillFront="#F5F0E6" height={60} />
      <section style={{ background: '#F5F0E6', color: '#173F35', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ color: '#C85A32' }}>The Physical Process Board</span>
            <h2 className="section-title" style={{ color: '#173F35', fontSize: '2.5rem' }}>
              HOW CLEARBIN CLOSES THE LOOP
            </h2>
            <p style={{ color: '#245C48', fontSize: '1.1rem', maxWidth: '660px', margin: '0 auto' }}>
              Four simple physical steps transforming household waste into local handcrafted value.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', position: 'relative' }}>
            {/* Step 1 - Notebook Paper */}
            <PaperSheet variant="notebook" rotate="-2deg" shadow="medium" style={{ padding: '2rem 1.5rem', textAlign: 'center' }} className="reveal-on-scroll">
              <MaskingTape width="80px" height="24px" rotate="1deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>📸</div>
              <span className="badge badge-terracotta" style={{ marginBottom: '0.5rem' }}>STEP 01</span>
              <h3 style={{ fontSize: '1.35rem', color: '#173F35', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Sort & Post</h3>
              <p style={{ fontSize: '0.925rem', color: '#245C48', lineHeight: '1.5' }}>
                Upload a photo — Gemini AI automatically classifies material, volume, and condition.
              </p>
              <div className="font-handwritten" style={{ fontSize: '1.2rem', color: '#C85A32', marginTop: '0.75rem' }}>
                "takes only 20 seconds! ⚡"
              </div>
            </PaperSheet>

            {/* Step 2 - Photo Card */}
            <PaperSheet variant="parchment" rotate="2.5deg" shadow="medium" style={{ padding: '2rem 1.5rem', textAlign: 'center' }} className="reveal-on-scroll">
              <PaperClip color="#A0AAB2" size={32} style={{ position: 'absolute', top: '-14px', right: '15px' }} />
              <div style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>🚚</div>
              <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>STEP 02</span>
              <h3 style={{ fontSize: '1.35rem', color: '#173F35', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Doorstep Pickup</h3>
              <p style={{ fontSize: '0.925rem', color: '#245C48', lineHeight: '1.5' }}>
                Matched local upcycler or neighborhood hub collects your waste directly from your home.
              </p>
              <div className="font-handwritten" style={{ fontSize: '1.2rem', color: '#D9A036', marginTop: '0.75rem' }}>
                "scheduled at your convenience 📅"
              </div>
            </PaperSheet>

            {/* Step 3 - Kraft Paper */}
            <PaperSheet variant="kraft" rotate="-1.8deg" shadow="medium" style={{ padding: '2rem 1.5rem', textAlign: 'center' }} className="reveal-on-scroll">
              <PushPin color="#C85A32" style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>📦</div>
              <span className="badge badge-leaf" style={{ marginBottom: '0.5rem' }}>STEP 03</span>
              <h3 style={{ fontSize: '1.35rem', color: '#173F35', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Studio Sorting</h3>
              <p style={{ fontSize: '0.925rem', color: '#173F35', lineHeight: '1.5', fontWeight: '500' }}>
                Materials are cleaned, prepped, and sorted into studio raw supply batches.
              </p>
              <div className="font-handwritten" style={{ fontSize: '1.2rem', color: '#173F35', marginTop: '0.75rem', fontWeight: 'bold' }}>
                "dignified supply chain 🤝"
              </div>
            </PaperSheet>

            {/* Step 4 - Green Paper Note */}
            <PaperSheet variant="green" rotate="3deg" shadow="medium" style={{ padding: '2rem 1.5rem', textAlign: 'center' }} className="reveal-on-scroll">
              <WashiTape width="90px" height="24px" rotate="-2deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>🧵</div>
              <span className="badge badge-rose" style={{ marginBottom: '0.5rem' }}>STEP 04</span>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFDF7', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Artisan Upcycle</h3>
              <p style={{ fontSize: '0.925rem', color: '#F5F0E6', lineHeight: '1.5' }}>
                Artisans craft tote bags, flower vases, and soy candles, while you earn EcoPoints!
              </p>
              <div className="font-handwritten" style={{ fontSize: '1.2rem', color: '#B5C985', marginTop: '0.75rem' }}>
                "second life created! 🌟"
              </div>
            </PaperSheet>
          </div>
        </div>
      </section>
      <TornEdgeMultiLayerBottom fillBack="#789B62" fillMid="#245C48" fillFront="#F5F0E6" height={60} />

      {/* =========================================================================
         04. WASTE HAS A STORY (Editorial Collage Section)
         ========================================================================= */}
      <section className="container reveal-on-scroll" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left: Physical Collage Composition */}
          <div style={{ position: 'relative', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PaperSheet variant="kraft" rotate="-5deg" shadow="deep" style={{ width: '260px', height: '220px', position: 'absolute', top: '10px', left: '10px', zIndex: 3, padding: '1.75rem' }}>
              <PaperClip color="#A0AAB2" size={34} style={{ position: 'absolute', top: '-15px', left: '20px' }} />
              <GlassBottleWaste size={60} rotate="-10deg" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.2rem', color: '#173F35', fontFamily: 'var(--font-heading)' }}>1 Glass Bottle</h4>
              <p className="font-handwritten" style={{ fontSize: '1.25rem', color: '#245C48' }}>
                Takes 4,000 years to decompose in a dump... or 2 days to become a flower vase!
              </p>
            </PaperSheet>

            <PaperSheet variant="parchment" rotate="4deg" shadow="deep" style={{ width: '270px', height: '230px', position: 'absolute', bottom: '10px', right: '10px', zIndex: 4, padding: '1.75rem' }}>
              <WashiTape width="100px" height="26px" rotate="1deg" style={{ position: 'absolute', top: '-14px', right: '30px' }} />
              <PlasticBottleWaste size={55} rotate="15deg" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.2rem', color: '#173F35', fontFamily: 'var(--font-heading)' }}>6 PET Bottles</h4>
              <p className="font-handwritten" style={{ fontSize: '1.25rem', color: '#C85A32' }}>
                Spun into durable textile fibers for 1 handmade artisan tote bag!
              </p>
            </PaperSheet>
          </div>

          {/* Right: Story Copy & Manifesto */}
          <div>
            <span className="section-tag" style={{ color: '#D9A036' }}>Editorial Storytelling</span>
            <h2 className="section-title" style={{ fontSize: '2.6rem', color: '#F5F0E6', marginBottom: '1.25rem' }}>
              EVERY PIECE OF WASTE HAS A STORY.
            </h2>
            <p style={{ color: '#B5C985', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              We don't view household items as trash to be discarded. When clean PET, glass jars, denim scrap, and e-waste reach local creators, they become raw material capital for vibrant community studios.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '1.05rem' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#C85A32', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>✓</span>
                <span>Pre-sorted household waste bypasses municipal dump sites entirely.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '1.05rem' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#4F7F4A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>✓</span>
                <span>Local craftspeople turn scrap into high-value upcycled home decor.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
         05. WASTE CATEGORIES GUIDE (Physical Scrapbook Objects)
         ========================================================================= */}
      <section className="container reveal-on-scroll" style={{ margin: '2rem auto 5rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag" style={{ color: '#789B62' }}>Interactive Guide</span>
          <h2 className="section-title" style={{ fontSize: '2.4rem', color: '#F5F0E6' }}>
            WHAT MATERIALS CAN YOU POST?
          </h2>
          <p style={{ color: '#B5C985', fontSize: '1.05rem' }}>
            Select a material category below to post item batches or explore active upcycler requests.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.75rem' }}>
          {CATEGORIES.map((cat, idx) => (
            <Link to="/post" key={cat.id} style={{ textDecoration: 'none' }}>
              <PaperSheet
                variant={idx % 2 === 0 ? 'parchment' : 'kraft'}
                rotate={`${(idx % 3 - 1) * 2.5}deg`}
                shadow="medium"
                style={{ padding: '1.75rem 1.25rem', textAlign: 'center', height: '100%' }}
              >
                <div style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                <h4 style={{ fontSize: '1.25rem', color: '#173F35', fontFamily: 'var(--font-heading)', marginBottom: '0.35rem' }}>{cat.label}</h4>
                <p style={{ fontSize: '0.875rem', color: '#245C48', lineHeight: '1.4' }}>{cat.desc}</p>
                <div className="font-handwritten" style={{ fontSize: '1.15rem', color: '#C85A32', marginTop: '0.75rem', fontWeight: 'bold' }}>
                  post {cat.id} →
                </div>
              </PaperSheet>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
         06. MISSION MANIFESTO (Campaign Poster Sheet Pinned To Wall)
         ========================================================================= */}
      <section className="container reveal-on-scroll" style={{ marginBottom: '5rem' }}>
        <PaperSheet variant="green" rotate="-0.5deg" shadow="deep" style={{ padding: '4rem 3rem', border: '3px solid #789B62', textAlign: 'center', position: 'relative' }}>
          <PushPin color="#D9A036" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />
          <RecyclingDoodle size={80} color="#B5C985" style={{ position: 'absolute', top: '30px', left: '40px', opacity: 0.2 }} />

          <span className="section-tag" style={{ color: '#D9A036' }}>ClearBin Campaign Manifesto</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontFamily: 'var(--font-heading)', color: '#FFFDF7', lineHeight: '1.15', marginBottom: '1.25rem' }}>
            "WE DON'T JUST THROW THINGS AWAY. <br />
            <span style={{ color: '#B5C985', fontStyle: 'italic' }}>WE DECIDE WHAT HAPPENS NEXT."</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#F5F0E6', maxWidth: '720px', margin: '0 auto 2.5rem auto', lineHeight: '1.65' }}>
            ClearBin is built on the belief that everyday citizens, when given the right connections, are the strongest force for neighborhood circularity.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/post" className="btn btn-primary btn-lg">
              Post Your Reusable Waste ➔
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Read Our Full Vision
            </Link>
          </div>
        </PaperSheet>
      </section>

      {/* =========================================================================
         07. FINAL CTA (Last Page of Scrapbook)
         ========================================================================= */}
      <TornEdgeMultiLayerTop fillBack="#789B62" fillMid="#245C48" fillFront="#F5F0E6" height={60} />
      <section style={{ background: '#F5F0E6', color: '#173F35', padding: '5rem 0 6rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          <PaperSheet variant="kraft" rotate="1deg" shadow="deep" style={{ maxWidth: '740px', margin: '0 auto', padding: '3.5rem 2.5rem' }}>
            <WashiTape width="140px" height="34px" rotate="-2deg" style={{ position: 'absolute', top: '-17px', left: '50%', transform: 'translateX(-50%)' }} />

            <span className="section-tag" style={{ color: '#173F35' }}>Ready to Take Action?</span>
            <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: '#173F35', marginBottom: '1rem' }}>
              READY TO SORT BETTER?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#245C48', maxWidth: '540px', margin: '0 auto 2rem auto' }}>
              Join over 500+ households and local artisans building a zero-waste neighborhood economy today.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <Link to="/post" className="btn btn-primary btn-lg">
                Start with ClearBin ➔
              </Link>
              
              <div className="font-handwritten" style={{ position: 'absolute', right: '40px', bottom: '-40px', fontSize: '1.5rem', color: '#C85A32' }}>
                "your turn ♻️"
              </div>
            </div>
          </PaperSheet>
        </div>
      </section>
    </div>
  );
}

