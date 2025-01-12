import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Qualifications from './pages/Qualifications';  // import the new page
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Navbar />
      <div data-aos="fade-up" className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qualifications" element={<Qualifications/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
