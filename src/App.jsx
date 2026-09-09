import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import RewardsModal from './components/RewardsModal';
import EcoCraftAiModal from './components/EcoCraftAiModal';
import Home from './pages/Home';
import PostWaste from './pages/PostWaste';
import Matches from './pages/Matches';
import Showcase from './pages/Showcase';
import About from './pages/About';

function AppContent() {
  const { isAiModalOpen, setIsAiModalOpen } = useApp();

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostWaste />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <RewardsModal />
      <EcoCraftAiModal isOpen={isAiModalOpen} onClose={() => setIsAiModalOpen(false)} />
      <Toast />
    </Router>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
