import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostWaste from './pages/PostWaste';
import Matches from './pages/Matches';
import Showcase from './pages/Showcase';
import About from './pages/About';

export default function App() {
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
    </Router>
  );
}
