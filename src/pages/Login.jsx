import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore';

export default function Login() {
  const navigate = useNavigate();
  const { setCurrentUser, showToast, DEMO_USERS } = useApp();

  // Mode: 'login' | 'signup'
  const [mode, setMode] = useState('login');

  // Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState(null); // 'household' | 'partner'
  const [orgName, setOrgName] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Errors & Loading
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MATERIAL_OPTIONS = ['Plastic', 'Glass', 'Fabric', 'E-waste', 'Batteries', 'Paper', 'Metal'];

  const toggleMaterial = (mat) => {
    if (selectedMaterials.includes(mat)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== mat));
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setErrors({});
    setGeneralError('');
  };

  // Login Submit Handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError('');

    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const cleanEmail = email.trim().toLowerCase();

    try {
      // Query Firestore 'users' collection by email
      const q = query(collection(db, 'users'), where('email', '==', cleanEmail));
      const snapshot = await getDocs(q);

      let matchedUser = null;

      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data();
        matchedUser = {
          id: snapshot.docs[0].id,
          name: docData.name || cleanEmail.split('@')[0],
          email: docData.email,
          role: docData.role === 'partner' ? 'artisan' : (docData.role === 'household' ? 'customer' : docData.role || 'customer'),
          rawRole: docData.role || 'household',
          organization: docData.orgName || (docData.role === 'partner' ? 'NGO Upcycler' : 'Household Resident'),
          avatar: docData.role === 'partner' ? '🎨' : '🌱'
        };
      } else {
        // Fallback check against preset demo users
        const demoMatch = Object.values(DEMO_USERS).find(u => u.email.toLowerCase() === cleanEmail);
        if (demoMatch) {
          matchedUser = { ...demoMatch, rawRole: demoMatch.role === 'artisan' ? 'partner' : 'household' };
        }
      }

      if (matchedUser) {
        setCurrentUser(matchedUser);
        showToast(`Welcome back, ${matchedUser.name}!`);

        if (matchedUser.rawRole === 'partner' || matchedUser.role === 'artisan') {
          navigate('/partner-dashboard');
        } else {
          navigate('/post-waste');
        }
      } else {
        setGeneralError('No account found with that email — try signing up instead');
      }
    } catch (err) {
      console.warn('Firestore user lookup fallback:', err);
      // Fallback local check
      const demoMatch = Object.values(DEMO_USERS).find(u => u.email.toLowerCase() === cleanEmail);
      if (demoMatch) {
        setCurrentUser(demoMatch);
        showToast(`Welcome back, ${demoMatch.name}!`);
        navigate(demoMatch.role === 'artisan' ? '/partner-dashboard' : '/post-waste');
      } else {
        setGeneralError('No account found with that email — try signing up instead');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Signup Submit Handler
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError('');

    const newErrors = {};
    if (!role) newErrors.role = 'Please select your role first';
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!location.trim()) newErrors.location = 'Location is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const cleanEmail = email.trim().toLowerCase();

    const userData = {
      name: fullName.trim(),
      email: cleanEmail,
      location: location.trim(),
      role: role, // 'household' or 'partner'
      orgName: role === 'partner' ? orgName.trim() : '',
      materialsNeeded: role === 'partner' ? selectedMaterials : [],
      verified: false,
      createdAt: serverTimestamp()
    };

    try {
      // Save user to Firestore 'users' collection
      const docRef = await addDoc(collection(db, 'users'), userData);

      const appUserObj = {
        id: docRef.id,
        name: fullName.trim(),
        email: cleanEmail,
        location: location.trim(),
        role: role === 'partner' ? 'artisan' : 'customer',
        rawRole: role,
        organization: orgName.trim() || (role === 'partner' ? 'NGO Artisan Collective' : 'Household Resident'),
        avatar: role === 'partner' ? '🎨' : '🌱'
      };

      setCurrentUser(appUserObj);
      showToast(`Account created successfully! Welcome, ${fullName.trim()}.`);

      if (role === 'partner') {
        navigate('/partner-dashboard');
      } else {
        navigate('/post-waste');
      }
    } catch (err) {
      console.error('Error saving user to Firestore:', err);
      // Local fallback in case offline
      const fallbackObj = {
        id: `user_${Date.now()}`,
        name: fullName.trim(),
        email: cleanEmail,
        location: location.trim(),
        role: role === 'partner' ? 'artisan' : 'customer',
        rawRole: role,
        organization: orgName.trim() || 'Eco Member',
        avatar: role === 'partner' ? '🎨' : '🌱'
      };
      setCurrentUser(fallbackObj);
      showToast(`Account created! Welcome, ${fullName.trim()}.`);

      if (role === 'partner') {
        navigate('/partner-dashboard');
      } else {
        navigate('/post-waste');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        backgroundImage: "url('/assets/login-scrapbook-bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3.5rem 1.5rem',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
    >
      {/* Inject Google Fonts */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');`}
      </style>

      {/* Dark Green Semi-Transparent Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(31, 58, 40, 0.35)',
          zIndex: 1
        }}
      />

      {/* Floating ← Back to Home Pill Button */}
      <Link
        to="/"
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
          zIndex: 100,
          background: '#fdfbf7',
          color: '#1b3f2e',
          padding: '0.55rem 1.35rem',
          borderRadius: '9999px',
          fontWeight: '700',
          fontSize: '0.9rem',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(27, 63, 46, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          transition: 'transform 0.2s ease, boxShadow 0.2s ease'
        }}
      >
        <span>← Back to Home</span>
      </Link>

      {/* CENTER SCRAPBOOK CARD */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '460px',
          width: '100%',
          background: '#fdfbf7',
          borderRadius: '16px 16px 0 0',
          padding: '2.5rem 2.25rem 3rem 2.25rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.15)',
          /* Torn-paper bottom edge clip path */
          clipPath:
            'polygon(0% 0%, 100% 0%, 100% calc(100% - 16px), 95% 100%, 90% calc(100% - 10px), 85% 100%, 80% calc(100% - 14px), 75% 100%, 70% calc(100% - 8px), 65% 100%, 60% calc(100% - 16px), 55% 100%, 50% calc(100% - 10px), 45% 100%, 40% calc(100% - 15px), 35% 100%, 30% calc(100% - 8px), 25% 100%, 20% calc(100% - 14px), 15% 100%, 10% calc(100% - 10px), 5% 100%, 0% calc(100% - 16px))',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Red Wire Paperclip Graphic overlapping top edge */}
        <div
          style={{
            position: 'absolute',
            top: '-26px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 25,
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.25))'
          }}
        >
          <svg width="36" height="58" viewBox="0 0 36 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 44V14C12 10.6863 14.6863 8 18 8C21.3137 8 24 10.6863 24 14V42C24 47.5228 19.5228 52 14 52C8.47715 52 4 47.5228 4 42V16C4 8.26801 10.268 2 18 2C25.732 2 32 8.26801 32 16V40"
              stroke="#d93838"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Caveat Hand-Drawn Heading */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem', marginTop: '0.5rem' }}>
          <h1
            style={{
              fontFamily: "'Caveat', cursive, sans-serif",
              fontSize: '2.3rem',
              fontWeight: '700',
              color: '#1b3f2e',
              lineHeight: 1.15,
              margin: 0
            }}
          >
            {mode === 'login' ? 'Welcome Back, Changemaker ♡' : 'Start Your Eco Journey ☺'}
          </h1>
          <p
            style={{
              fontSize: '0.88rem',
              color: '#5B7B6D',
              marginTop: '0.35rem',
              fontWeight: '600'
            }}
          >
            {mode === 'login'
              ? 'Sign in to access your upcycling matches & pickups'
              : 'Join the grassroots circular economy network'}
          </p>
        </div>

        {/* Global Error Banner */}
        {generalError && (
          <div
            style={{
              background: '#FCE8E8',
              border: '1px solid #F7C6C6',
              color: '#B83232',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '1.25rem',
              textAlign: 'center'
            }}
          >
            {generalError}
          </div>
        )}

        {/* =========================================================================
           LOGIN MODE FORM
           ========================================================================= */}
        {mode === 'login' && (
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {/* Email Field */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#1b3f2e',
                  marginBottom: '0.35rem'
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: errors.email ? '1.5px solid #d93838' : '1px solid #D6D0C4',
                  background: '#FFFFFF',
                  outline: 'none',
                  fontSize: '0.92rem',
                  color: '#1C352D'
                }}
              />
              {errors.email && (
                <span style={{ fontSize: '0.78rem', color: '#d93838', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#1b3f2e',
                  marginBottom: '0.35rem'
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: errors.password ? '1.5px solid #d93838' : '1px solid #D6D0C4',
                  background: '#FFFFFF',
                  outline: 'none',
                  fontSize: '0.92rem',
                  color: '#1C352D'
                }}
              />
              {errors.password && (
                <span style={{ fontSize: '0.78rem', color: '#d93838', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                  {errors.password}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: '0.75rem',
                width: '100%',
                padding: '0.9rem',
                borderRadius: '8px',
                border: 'none',
                background: '#1b3f2e',
                color: '#fdfbf7',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(27, 63, 46, 0.25)',
                transition: 'all 0.2s ease',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In →'}
            </button>
          </form>
        )}

        {/* =========================================================================
           SIGNUP MODE FORM
           ========================================================================= */}
        {mode === 'signup' && (
          <form onSubmit={handleSignupSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {/* STEP 1: ROLE SELECTION CARDS FIRST */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#1b3f2e',
                  marginBottom: '0.65rem'
                }}
              >
                I am signing up as:
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  marginBottom: '0.35rem'
                }}
              >
                {/* Role 1: Household */}
                <div
                  onClick={() => setRole('household')}
                  style={{
                    background: role === 'household' ? '#E8F0EA' : '#FFFFFF',
                    border: role === 'household' ? '2px solid #1b3f2e' : '1px solid #D6D0C4',
                    borderRadius: '12px',
                    padding: '0.85rem 0.65rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transform: 'rotate(-1.5deg)',
                    boxShadow: role === 'household' ? '0 6px 16px rgba(27, 63, 46, 0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>🏡</div>
                  <div style={{ fontWeight: '800', fontSize: '0.82rem', color: '#1b3f2e' }}>
                    Household
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#5B7B6D', marginTop: '0.1rem' }}>
                    I have waste to give
                  </div>
                </div>

                {/* Role 2: Partner / Artisan */}
                <div
                  onClick={() => setRole('partner')}
                  style={{
                    background: role === 'partner' ? '#E8F0EA' : '#FFFFFF',
                    border: role === 'partner' ? '2px solid #1b3f2e' : '1px solid #D6D0C4',
                    borderRadius: '12px',
                    padding: '0.85rem 0.65rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transform: 'rotate(1.5deg)',
                    boxShadow: role === 'partner' ? '0 6px 16px rgba(27, 63, 46, 0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>🎨</div>
                  <div style={{ fontWeight: '800', fontSize: '0.82rem', color: '#1b3f2e' }}>
                    Artisan / NGO
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#5B7B6D', marginTop: '0.1rem' }}>
                    I collect or upcycle
                  </div>
                </div>
              </div>

              {errors.role && (
                <span style={{ fontSize: '0.78rem', color: '#d93838', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                  {errors.role}
                </span>
              )}
            </div>

            {/* STEP 2: FORM FIELDS (Revealed after Role Selection) */}
            {role && (
              <>
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1b3f2e', marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rashmi Koli"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: errors.fullName ? '1.5px solid #d93838' : '1px solid #D6D0C4',
                      background: '#FFFFFF',
                      outline: 'none',
                      fontSize: '0.92rem',
                      color: '#1C352D'
                    }}
                  />
                  {errors.fullName && (
                    <span style={{ fontSize: '0.78rem', color: '#d93838', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1b3f2e', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: errors.email ? '1.5px solid #d93838' : '1px solid #D6D0C4',
                      background: '#FFFFFF',
                      outline: 'none',
                      fontSize: '0.92rem',
                      color: '#1C352D'
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.78rem', color: '#d93838', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1b3f2e', marginBottom: '0.35rem' }}>
                    Password *
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: errors.password ? '1.5px solid #d93838' : '1px solid #D6D0C4',
                      background: '#FFFFFF',
                      outline: 'none',
                      fontSize: '0.92rem',
                      color: '#1C352D'
                    }}
                  />
                  {errors.password && (
                    <span style={{ fontSize: '0.78rem', color: '#d93838', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                      {errors.password}
                    </span>
                  )}
                </div>

                {/* Location / Neighborhood */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1b3f2e', marginBottom: '0.35rem' }}>
                    Location / Neighborhood *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Greenwood Colony, Sector 4"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: errors.location ? '1.5px solid #d93838' : '1px solid #D6D0C4',
                      background: '#FFFFFF',
                      outline: 'none',
                      fontSize: '0.92rem',
                      color: '#1C352D'
                    }}
                  />
                  {errors.location && (
                    <span style={{ fontSize: '0.78rem', color: '#d93838', fontWeight: '600', marginTop: '0.2rem', display: 'block' }}>
                      {errors.location}
                    </span>
                  )}
                </div>

                {/* ADDITIONAL FIELDS FOR PARTNER / UP-CYCLER */}
                {role === 'partner' && (
                  <>
                    {/* Organization / Business Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1b3f2e', marginBottom: '0.35rem' }}>
                        Organization / Business Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. GreenHand Upcycling NGO"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid #D6D0C4',
                          background: '#FFFFFF',
                          outline: 'none',
                          fontSize: '0.92rem',
                          color: '#1C352D'
                        }}
                      />
                    </div>

                    {/* Materials Needed Multi-select Tags */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#1b3f2e', marginBottom: '0.45rem' }}>
                        What materials are you looking for?
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {MATERIAL_OPTIONS.map((mat) => {
                          const isSelected = selectedMaterials.includes(mat);
                          return (
                            <button
                              key={mat}
                              type="button"
                              onClick={() => toggleMaterial(mat)}
                              style={{
                                padding: '0.35rem 0.8rem',
                                borderRadius: '20px',
                                border: isSelected ? '1.5px solid #1b3f2e' : '1px solid #D6D0C4',
                                background: isSelected ? '#1b3f2e' : '#FFFFFF',
                                color: isSelected ? '#fdfbf7' : '#1C352D',
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                              }}
                            >
                              {mat} {isSelected ? '✓' : '+'}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Yellow Sticky-Note Note */}
                    <div
                      style={{
                        background: '#FFF9C4',
                        border: '1px solid #FBC02D',
                        borderRadius: '8px',
                        padding: '0.85rem',
                        fontSize: '0.78rem',
                        color: '#795548',
                        fontWeight: '600',
                        lineHeight: '1.45',
                        transform: 'rotate(-0.8deg)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                      }}
                    >
                      📌 New partners are reviewed before being listed — we'll verify your details within 24 hours.
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '0.75rem',
                    width: '100%',
                    padding: '0.9rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#1b3f2e',
                    color: '#fdfbf7',
                    fontWeight: '700',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(27, 63, 46, 0.25)',
                    transition: 'all 0.2s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account →'}
                </button>
              </>
            )}
          </form>
        )}

        {/* MODE TOGGLE TEXT LINK */}
        <div style={{ textAlign: 'center', marginTop: '1.75rem', borderTop: '1px dashed #E2DACD', paddingTop: '1.25rem' }}>
          {mode === 'login' ? (
            <button
              type="button"
              onClick={() => handleModeSwitch('signup')}
              style={{
                background: 'none',
                border: 'none',
                color: '#1b3f2e',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              New here? Create an account
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleModeSwitch('login')}
              style={{
                background: 'none',
                border: 'none',
                color: '#1b3f2e',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Already have an account? Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
