import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/mockData';
import { TornEdgeMultiLayerTop, TornEdgeMultiLayerBottom } from '../components/TornEdge';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PaperSheet } from '../components/Scrapbook/PaperSheet';
import { StickyNote } from '../components/Scrapbook/StickyNote';
import { PaperClip, PushPin, MaskingTape, WashiTape } from '../components/Scrapbook/Fasteners';
import { RecyclingDoodle, LeafDoodle, ArrowDoodle, SparkleDoodle, UnderlineDoodle } from '../components/Scrapbook/Doodle';
import { GlassBottleWaste, PlasticBottleWaste, CardboardWaste, CanWaste, BananaWaste } from '../components/Scrapbook/WasteIllustrations';

export default function Home() {
  useScrollReveal();

  return (
    <div className="home-page" style={{ background: '#173F35', color: '#F5F0E6', overflowX: 'hidden' }}>
      
      {/* =========================================================================
         01. HERO SPREAD — THE PHYSICAL SCRAPBOOK MEMO BOARD
         ========================================================================= */}
      <section style={{
        padding: '3.5rem 1rem 4.5rem 1rem',
        background: 'radial-gradient(circle at 50% 30%, #245C48 0%, #173F35 80%)',
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justify: 'center'
      }}>
        {/* Ambient Doodles & Waste Elements Floating on Desktop Surface */}
        <RecyclingDoodle size={90} color="#789B62" style={{ position: 'absolute', top: '35px', left: '3%', opacity: 0.3 }} />
        <LeafDoodle size={70} color="#B5C985" rotate="25deg" style={{ position: 'absolute', bottom: '80px', left: '5%', opacity: 0.35 }} />
        <SparkleDoodle size={50} color="#D9A036" style={{ position: 'absolute', top: '45px', right: '6%', opacity: 0.45 }} />

        {/* Physical Waste Objects Straying Outside the Main Sheet */}
        <GlassBottleWaste size={85} rotate="-15deg" style={{ position: 'absolute', top: '140px', left: '2%', zIndex: 12, filter: 'drop-shadow(2px 6px 8px rgba(0,0,0,0.3))' }} />
        <PlasticBottleWaste size={80} rotate="18deg" style={{ position: 'absolute', bottom: '110px', right: '3%', zIndex: 12, filter: 'drop-shadow(3px 8px 10px rgba(0,0,0,0.3))' }} />
        <BananaWaste size={65} rotate="-22deg" style={{ position: 'absolute', top: '220px', right: '5%', zIndex: 12, filter: 'drop-shadow(2px 5px 6px rgba(0,0,0,0.25))' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1050px' }}>
          
          {/* SCRAPBOOK SPREAD COMPOSITION (3-5 Layers Deep) */}
          <div style={{ position: 'relative', margin: '0 auto', padding: '1rem 0' }}>
            
            {/* LAYER 1: Deep Green Handmade Paper Backing Sheet */}
            <PaperSheet variant="green" rotate="-2.4deg" shadow="flat" style={{ position: 'absolute', top: '-20px', left: '-20px', right: '-20px', bottom: '-20px', zIndex: 1, border: '1px dashed #4F7F4A' }}>
              <div />
            </PaperSheet>

            {/* LAYER 2: Torn Kraft Paper Fragment (Top Right Overlap) */}
            <PaperSheet variant="kraft" rotate="3.6deg" shadow="medium" style={{ position: 'absolute', top: '-10px', right: '-30px', width: '250px', padding: '1.25rem', zIndex: 3 }}>
              <WashiTape width="90px" height="26px" rotate="-4deg" style={{ position: 'absolute', top: '-14px', right: '30px' }} />
              <div className="font-handwritten" style={{ fontSize: '1.25rem', color: '#173F35', lineHeight: 1.25 }}>
                📌 <strong>ClearBin Memo</strong><br />
                Connecting Households to Micro-Artisans since 2026!
              </div>
            </PaperSheet>

            {/* LAYER 3: Main Off-White Parchment Paper Sheet */}
            <PaperSheet variant="parchment" rotate="-0.6deg" shadow="deep" style={{ padding: '3.5rem 3rem', zIndex: 5, border: '2px solid #E7D8BE', position: 'relative' }}>
              <PaperClip color="#717D8A" size={46} style={{ position: 'absolute', top: '-26px', left: '45px' }} />
              <MaskingTape width="140px" height="34px" rotate="-1.5deg" style={{ position: 'absolute', top: '-18px', right: '110px' }} />

              <div style={{ textAlign: 'center' }}>
                <span className="badge badge-terracotta" style={{ marginBottom: '1.25rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  🤝 Grassroots Waste-to-Artisan Platform • Circular Economy
                </span>

                <h1 style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                  fontFamily: 'var(--font-heading)',
                  color: '#173F35',
                  lineHeight: '1.1',
                  marginBottom: '1rem'
                }}>
                  WHAT IF HOUSEHOLD WASTE <br />
                  <span style={{ color: '#C85A32', fontStyle: 'italic' }}>WASN'T THE END?</span>
                </h1>
                <UnderlineDoodle color="#C85A32" width={280} style={{ margin: '-8px auto 1.5rem auto' }} />

                <p style={{
                  fontSize: 'clamp(1.05rem, 1.7vw, 1.25rem)',
                  color: '#245C48',
                  maxWidth: '720px',
                  margin: '0 auto 2.25rem auto',
                  lineHeight: '1.65',
                  fontWeight: '500'
                }}>
                  ClearBin connects households directly with nearby micro-artisans, studio craftspeople, and green recovery collectives who give reusable plastic, glass, fabric, and e-waste a creative second life.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', position: 'relative' }}>
                  <Link to="/post" className="btn btn-primary btn-lg" style={{ boxShadow: '0 8px 24px rgba(200,90,50,0.35)' }}>
                    Start Sorting Waste ➔
                  </Link>

                  <Link to="/matches" className="btn btn-secondary btn-lg">
                    Explore Upcyclers Directory
                  </Link>

                  {/* Handwritten Annotation Callout */}
                  <div style={{ position: 'absolute', right: '-15px', bottom: '-45px', display: 'flex', alignItems: 'center', gap: '0.35rem' }} className="font-handwritten">
                    <ArrowDoodle color="#C85A32" size={50} rotate="-155deg" />
                    <span style={{ fontSize: '1.45rem', color: '#C85A32', fontWeight: 'bold' }}>start sorting here!</span>
                  </div>
                </div>
              </div>
            </PaperSheet>

            {/* LAYER 4: Yellow Sticky Note Badge (Bottom-Left Overlap) */}
            <StickyNote color="yellow" rotate="-4.5deg" fastener="pin" style={{ position: 'absolute', bottom: '-35px', left: '-25px', zIndex: 15, maxWidth: '250px' }}>
              <div className="font-handwritten" style={{ fontSize: '1.35rem', color: '#173F35', lineHeight: 1.25 }}>
                💡 Over <strong>12,400 Kg</strong> diverted directly to studio artisans!
              </div>
            </StickyNote>

            {/* LAYER 5: Polaroid Photo (Top Right Overlapping Main Sheet) */}
            <PaperSheet variant="parchment" rotate="5.2deg" shadow="deep" style={{
              position: 'absolute',
              bottom: '-40px',
              right: '-25px',
              width: '210px',
              padding: '0.75rem 0.75rem 1.25rem 0.75rem',
              zIndex: 14,
              background: '#FFFDF7',
              border: '1px solid #E7D8BE',
              textAlign: 'center'
            }}>
              <WashiTape width="80px" height="24px" rotate="-3deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <div style={{ background: '#E7D8BE', height: '120px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', overflow: 'hidden' }}>
                <span style={{ fontSize: '2.5rem' }}>🛍️</span>
              </div>
              <div className="font-handwritten" style={{ fontSize: '1.15rem', color: '#173F35', fontWeight: 'bold' }}>
                6 PET Bottles → 1 Tote Bag!
              </div>
            </PaperSheet>

          </div>
        </div>
      </section>

      {/* =========================================================================
         02. WHY DOES SMART SORTING MATTER? (ASYMMETRICAL NOTEBOOK SPREAD)
         ========================================================================= */}
      <section className="reveal-on-scroll" style={{ margin: '3rem auto 4.5rem auto', padding: '0 1rem', maxWidth: '1080px' }}>
        {/* Background Paper Sheet (Lined Notebook) */}
        <PaperSheet variant="notebook" rotate="-0.5deg" shadow="medium" style={{ padding: '3.5rem 2.5rem', position: 'relative' }}>
          <PushPin color="#C85A32" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />
          <RecyclingDoodle size={70} color="#789B62" style={{ position: 'absolute', top: '25px', right: '35px', opacity: 0.3 }} />

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ color: '#C85A32' }}>Grassroots Impact</span>
            <h2 className="section-title" style={{ color: '#173F35', fontSize: '2.5rem' }}>
              WHY DOES SMART SORTING MATTER?
            </h2>
            <p style={{ color: '#245C48', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
              Every item pre-sorted at home saves raw materials for studio artisans and keeps clean waste out of landfills.
            </p>
          </div>

          {/* ASYMMETRICAL SCRAPBOOK SPREAD (Non-Uniform, Overlapping Items) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start', position: 'relative' }}>
            
            {/* Note 01: Pale Green Paper Scrap (Tilted Left) */}
            <PaperSheet variant="green" rotate="-3.5deg" shadow="medium" style={{ flex: '1 1 240px', maxWidth: '280px', padding: '1.75rem 1.5rem', position: 'relative' }}>
              <MaskingTape width="80px" height="24px" rotate="1deg" style={{ position: 'absolute', top: '-12px', left: '20px' }} />
              <span className="badge badge-leaf" style={{ marginBottom: '0.6rem' }}>01. ZERO LANDFILL</span>
              <h4 style={{ color: '#FFFDF7', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Clean Recovery</h4>
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#F5F0E6', lineHeight: 1.3 }}>
                Keeps clean plastic bottles & glass jars from rotting in municipal dumps.
              </p>
            </PaperSheet>

            {/* Hand-Drawn Arrow Connecting Note 1 to Note 2 */}
            <ArrowDoodle color="#789B62" size={42} rotate="15deg" style={{ alignSelf: 'center', margin: '-10px' }} />

            {/* Note 02: Kraft Paper Scrap (Tilted Right with Clip) */}
            <PaperSheet variant="kraft" rotate="2.8deg" shadow="medium" style={{ flex: '1 1 240px', maxWidth: '270px', padding: '1.75rem 1.5rem', position: 'relative' }}>
              <PaperClip color="#717D8A" size={36} style={{ position: 'absolute', top: '-16px', right: '25px' }} />
              <span className="badge badge-amber" style={{ marginBottom: '0.6rem' }}>02. WORKER LIVELIHOODS</span>
              <h4 style={{ color: '#173F35', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Dignified Supply</h4>
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#173F35', lineHeight: 1.3 }}>
                Empowers informal waste collectors with clean, pre-sorted raw materials.
              </p>
            </PaperSheet>

            {/* Cardboard Waste Illustration Overlapping Between Notes */}
            <CardboardWaste size={75} rotate="-10deg" style={{ position: 'absolute', bottom: '-25px', left: '42%', zIndex: 12 }} />

            {/* Note 03: Dusty Rose Paper Scrap (Tilted Left with Washi Tape) */}
            <PaperSheet variant="parchment" rotate="-1.8deg" shadow="medium" style={{ flex: '1 1 240px', maxWidth: '270px', padding: '1.75rem 1.5rem', background: '#F7E8E8', border: '1px solid #E2C2C2' }}>
              <WashiTape width="85px" height="24px" rotate="-2deg" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="badge badge-rose" style={{ marginBottom: '0.6rem' }}>03. ARTISAN EARNINGS</span>
              <h4 style={{ color: '#5A2D2D', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>+35% Studio Income</h4>
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#5A2D2D', lineHeight: 1.3 }}>
                Boosts studio craft income by lowering material sourcing costs!
              </p>
            </PaperSheet>

            {/* Note 04: Yellow Sticky Note (Tilted Right with Pushpin) */}
            <StickyNote color="yellow" rotate="4.2deg" fastener="pin" title="04. ECOPOINTS REWARDS" style={{ flex: '1 1 230px', maxWidth: '260px' }}>
              <p className="font-handwritten" style={{ fontSize: '1.3rem', color: '#173F35', lineHeight: 1.3 }}>
                Earn eco-points for every handoff, redeemable for green store drops! 🎁
              </p>
            </StickyNote>

          </div>
        </PaperSheet>
      </section>

      {/* =========================================================================
         03. HOW CLEARBIN CLOSES THE LOOP (PHYSICAL PROCESS BOARD ON DESK)
         ========================================================================= */}
      <TornEdgeMultiLayerTop fillBack="#789B62" fillMid="#245C48" fillFront="#E7D8BE" height={60} />
      <section style={{ background: '#E7D8BE', color: '#173F35', padding: '4.5rem 1rem', position: 'relative' }}>
        <div className="container">
          <div className="section-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ color: '#173F35', background: '#FFFDF7' }}>The Studio Desk Process</span>
            <h2 className="section-title" style={{ color: '#173F35', fontSize: '2.6rem' }}>
              HOW CLEARBIN CLOSES THE LOOP
            </h2>
            <p style={{ color: '#245C48', fontSize: '1.1rem', maxWidth: '660px', margin: '0 auto', fontWeight: '500' }}>
              Four physical desk steps transforming household waste into local handcrafted value.
            </p>
          </div>

          {/* PHYSICAL PROCESS DESK BOARD (Zigzag / Diagonal Organic Flow) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
            
            {/* Step 1: SORT (Notebook Scrap - Top Left) */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative' }} className="reveal-on-scroll">
              <PaperSheet variant="notebook" rotate="-3deg" shadow="deep" style={{ width: '100%', maxWidth: '420px', padding: '2rem' }}>
                <MaskingTape width="90px" height="26px" rotate="1deg" style={{ position: 'absolute', top: '-13px', left: '30px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>📸</span>
                  <div>
                    <span className="badge badge-terracotta">STEP 01</span>
                    <h3 style={{ fontSize: '1.4rem', color: '#173F35', fontFamily: 'var(--font-heading)' }}>Sort & Upload</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.975rem', color: '#245C48', lineHeight: 1.5 }}>
                  Snap a photo of your sorted clean waste — Gemini AI automatically identifies material type, volume, and condition.
                </p>
                <div className="font-handwritten" style={{ fontSize: '1.25rem', color: '#C85A32', marginTop: '0.75rem', fontWeight: 'bold' }}>
                  "takes only 20 seconds! ⚡"
                </div>
              </PaperSheet>
              <ArrowDoodle color="#173F35" size={60} rotate="40deg" style={{ position: 'absolute', right: '35%', bottom: '-35px', zIndex: 10 }} />
            </div>

            {/* Step 2: COLLECT (Small Receipt Paper - Top Right) */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }} className="reveal-on-scroll">
              <PaperSheet variant="parchment" rotate="2.4deg" shadow="deep" style={{ width: '100%', maxWidth: '420px', padding: '2rem' }}>
                <PaperClip color="#717D8A" size={38} style={{ position: 'absolute', top: '-20px', right: '30px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🚚</span>
                  <div>
                    <span className="badge badge-amber">STEP 02</span>
                    <h3 style={{ fontSize: '1.4rem', color: '#173F35', fontFamily: 'var(--font-heading)' }}>Doorstep Pickup</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.975rem', color: '#245C48', lineHeight: 1.5 }}>
                  A matched local upcycler or neighborhood green hub collects your waste batch directly from your doorstep.
                </p>
                <div className="font-handwritten" style={{ fontSize: '1.25rem', color: '#D9A036', marginTop: '0.75rem', fontWeight: 'bold' }}>
                  "scheduled at your convenience 📅"
                </div>
              </PaperSheet>
              <ArrowDoodle color="#173F35" size={60} rotate="140deg" style={{ position: 'absolute', left: '35%', bottom: '-35px', zIndex: 10 }} />
            </div>

            {/* Step 3: PROCESS (Kraft Paper - Left) */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative' }} className="reveal-on-scroll">
              <PaperSheet variant="kraft" rotate="-2.2deg" shadow="deep" style={{ width: '100%', maxWidth: '420px', padding: '2rem' }}>
                <PushPin color="#C85A32" style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>📦</span>
                  <div>
                    <span className="badge badge-leaf">STEP 03</span>
                    <h3 style={{ fontSize: '1.4rem', color: '#173F35', fontFamily: 'var(--font-heading)' }}>Studio Supply Prep</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.975rem', color: '#173F35', lineHeight: 1.5, fontWeight: '500' }}>
                  Materials are washed, sorted, and cataloged as high-value raw supply batches for local artisan workshops.
                </p>
                <div className="font-handwritten" style={{ fontSize: '1.25rem', color: '#173F35', marginTop: '0.75rem', fontWeight: 'bold' }}>
                  "dignified supply chain 🤝"
                </div>
              </PaperSheet>
              <ArrowDoodle color="#173F35" size={60} rotate="35deg" style={{ position: 'absolute', right: '35%', bottom: '-35px', zIndex: 10 }} />
            </div>

            {/* Step 4: REUSE (Green Handmade Note - Right) */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }} className="reveal-on-scroll">
              <PaperSheet variant="green" rotate="3.5deg" shadow="deep" style={{ width: '100%', maxWidth: '420px', padding: '2rem' }}>
                <WashiTape width="100px" height="28px" rotate="-2deg" style={{ position: 'absolute', top: '-14px', left: '40px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🧵</span>
                  <div>
                    <span className="badge badge-rose">STEP 04</span>
                    <h3 style={{ fontSize: '1.4rem', color: '#FFFDF7', fontFamily: 'var(--font-heading)' }}>Artisan Creation</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.975rem', color: '#F5F0E6', lineHeight: 1.5 }}>
                  Artisans craft tote bags, flower vases, and soy candles, while you earn EcoPoints rewards!
                </p>
                <div className="font-handwritten" style={{ fontSize: '1.25rem', color: '#B5C985', marginTop: '0.75rem', fontWeight: 'bold' }}>
                  "second life created! 🌟"
                </div>
              </PaperSheet>
            </div>

          </div>
        </div>
      </section>
      <TornEdgeMultiLayerBottom fillBack="#789B62" fillMid="#245C48" fillFront="#E7D8BE" height={60} />

      {/* =========================================================================
         04. WASTE HAS A STORY (EDITORIAL PHOTO & STORY COLLAGE)
         ========================================================================= */}
      <section className="container reveal-on-scroll" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left: Asymmetrical Physical Photo & Paper Collage */}
          <div style={{ position: 'relative', minHeight: '390px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Kraft Scrap 1 */}
            <PaperSheet variant="kraft" rotate="-5.5deg" shadow="deep" style={{ width: '270px', position: 'absolute', top: '0', left: '10px', zIndex: 3, padding: '1.5rem' }}>
              <PaperClip color="#A0AAB2" size={36} style={{ position: 'absolute', top: '-16px', left: '20px' }} />
              <GlassBottleWaste size={65} rotate="-12deg" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#173F35', fontFamily: 'var(--font-heading)' }}>1 Glass Bottle</h4>
              <p className="font-handwritten" style={{ fontSize: '1.25rem', color: '#245C48', lineHeight: 1.25 }}>
                Takes 4,000 years to decompose in a dump... or 2 days to become a flower vase!
              </p>
            </PaperSheet>

            {/* Polaroid Photo 2 (Overlapping) */}
            <PaperSheet variant="parchment" rotate="4.5deg" shadow="deep" style={{ width: '280px', position: 'absolute', bottom: '0', right: '10px', zIndex: 6, padding: '1.5rem', border: '2px solid #E7D8BE' }}>
              <WashiTape width="110px" height="28px" rotate="1.5deg" style={{ position: 'absolute', top: '-15px', right: '30px' }} />
              <PlasticBottleWaste size={60} rotate="14deg" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', color: '#173F35', fontFamily: 'var(--font-heading)' }}>6 PET Bottles</h4>
              <p className="font-handwritten" style={{ fontSize: '1.25rem', color: '#C85A32', lineHeight: 1.25 }}>
                Spun into durable textile fibers for 1 handmade artisan tote bag!
              </p>
            </PaperSheet>

          </div>

          {/* Right: Editorial Copy Spread */}
          <div>
            <span className="section-tag" style={{ color: '#D9A036', background: '#245C48' }}>Editorial Storytelling</span>
            <h2 className="section-title" style={{ fontSize: '2.7rem', color: '#F5F0E6', marginBottom: '1.25rem' }}>
              EVERY PIECE OF WASTE HAS A STORY.
            </h2>
            <p style={{ color: '#B5C985', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              We don't view household items as trash to be discarded. When clean PET, glass jars, denim scrap, and e-waste reach local creators, they become raw material capital for vibrant community studios.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '1.05rem', color: '#F5F0E6' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#C85A32', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>✓</span>
                <span>Pre-sorted household waste bypasses municipal dump sites entirely.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '1.05rem', color: '#F5F0E6' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#4F7F4A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>✓</span>
                <span>Local craftspeople turn scrap into high-value upcycled home decor.</span>
              </li>
            </ul>

            <div className="font-handwritten" style={{ fontSize: '1.4rem', color: '#D9A036', marginTop: '1.5rem' }}>
              "Where does yours go? ♻️"
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         05. WASTE CATEGORIES GUIDE (SCRAPBOOK LABELS)
         ========================================================================= */}
      <section className="container reveal-on-scroll" style={{ margin: '2rem auto 5rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag" style={{ color: '#B5C985', background: '#245C48' }}>Interactive Material Guide</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', color: '#F5F0E6' }}>
            WHAT MATERIALS CAN YOU POST?
          </h2>
          <p style={{ color: '#B5C985', fontSize: '1.05rem' }}>
            Select a material category below to post item batches or explore active upcycler requests.
          </p>
        </div>

        {/* ASYMMETRICAL PAPER SCRAP LABELS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.75rem' }}>
          {CATEGORIES.map((cat, idx) => (
            <Link to="/post" key={cat.id} style={{ textDecoration: 'none' }}>
              <PaperSheet
                variant={idx % 3 === 0 ? 'parchment' : idx % 3 === 1 ? 'kraft' : 'green'}
                rotate={`${(idx % 4 - 1.5) * 2.2}deg`}
                shadow="medium"
                style={{ padding: '1.75rem 1.25rem', textAlign: 'center', height: '100%', position: 'relative' }}
              >
                {idx % 2 === 0 ? (
                  <PushPin color="#C85A32" style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />
                ) : (
                  <WashiTape width="70px" height="22px" rotate="-2deg" style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)' }} />
                )}
                
                <div style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                <h4 style={{ fontSize: '1.25rem', color: idx % 3 === 2 ? '#FFFDF7' : '#173F35', fontFamily: 'var(--font-heading)', marginBottom: '0.35rem' }}>
                  {cat.label}
                </h4>
                <p style={{ fontSize: '0.875rem', color: idx % 3 === 2 ? '#F5F0E6' : '#245C48', lineHeight: 1.4 }}>
                  {cat.desc}
                </p>
                <div className="font-handwritten" style={{ fontSize: '1.2rem', color: idx % 3 === 2 ? '#B5C985' : '#C85A32', marginTop: '0.75rem', fontWeight: 'bold' }}>
                  post {cat.id} →
                </div>
              </PaperSheet>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
         06. MISSION MANIFESTO (CAMPAIGN POSTER SHEET PINNED TO WALL)
         ========================================================================= */}
      <section className="container reveal-on-scroll" style={{ marginBottom: '5rem' }}>
        <PaperSheet variant="green" rotate="-0.8deg" shadow="deep" style={{ padding: '4rem 3rem', border: '3px solid #789B62', textAlign: 'center', position: 'relative' }}>
          <PushPin color="#D9A036" style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }} />
          <RecyclingDoodle size={85} color="#B5C985" style={{ position: 'absolute', top: '30px', left: '40px', opacity: 0.2 }} />
          <CanWaste size={70} rotate="15deg" style={{ position: 'absolute', bottom: '25px', right: '35px', opacity: 0.8 }} />

          <span className="section-tag" style={{ color: '#D9A036', background: '#173F35' }}>ClearBin Campaign Manifesto</span>
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
         07. FINAL CTA (LAST PAGE OF SCRAPBOOK)
         ========================================================================= */}
      <TornEdgeMultiLayerTop fillBack="#789B62" fillMid="#245C48" fillFront="#F5F0E6" height={60} />
      <section style={{ background: '#F5F0E6', color: '#173F35', padding: '5rem 1rem 6rem 1rem', textAlign: 'center', position: 'relative' }}>
        <div className="container reveal-on-scroll">
          <PaperSheet variant="kraft" rotate="1.2deg" shadow="deep" style={{ maxWidth: '740px', margin: '0 auto', padding: '3.5rem 2.5rem', position: 'relative' }}>
            <WashiTape width="140px" height="34px" rotate="-2deg" style={{ position: 'absolute', top: '-17px', left: '50%', transform: 'translateX(-50%)' }} />

            <span className="section-tag" style={{ color: '#173F35', background: '#FFFDF7' }}>Ready to Take Action?</span>
            <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: '#173F35', marginBottom: '1rem' }}>
              READY TO SORT BETTER?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#245C48', maxWidth: '540px', margin: '0 auto 2rem auto', fontWeight: '500' }}>
              Join over 500+ households and local artisans building a zero-waste neighborhood economy today.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
              <Link to="/post" className="btn btn-primary btn-lg">
                Start with ClearBin ➔
              </Link>
              
              <div className="font-handwritten" style={{ position: 'absolute', right: '40px', bottom: '-40px', fontSize: '1.5rem', color: '#C85A32', fontWeight: 'bold' }}>
                "your turn ♻️"
              </div>
            </div>
          </PaperSheet>
        </div>
      </section>
    </div>
  );
}

