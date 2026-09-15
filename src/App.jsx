import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Login from './pages/Login';
import Admin from './pages/Admin';

function AnimatedRoutes() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition-container">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostWaste />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

function AppContent() {
  const { isAiModalOpen, setIsAiModalOpen } = useApp();

  return (
    <Router>
      <Navbar />
      <main>
        <AnimatedRoutes />
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
