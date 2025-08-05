import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ColonHydrotherapy from './pages/ColonHydrotherapy';
import AsyraFeedback from './pages/AsyraFeedback';
import IonicFootBath from './pages/IonicFootBath';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/colon-hydrotherapy" element={<ColonHydrotherapy />} />
          <Route path="/services/asyra-feedback" element={<AsyraFeedback />} />
          <Route path="/services/ionic-foot-bath" element={<IonicFootBath />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;