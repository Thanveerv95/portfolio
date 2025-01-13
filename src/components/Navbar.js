import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleNavbar}>
        ☰
      </div>
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
        <li><Link to="/about" onClick={toggleNavbar}>About</Link></li>
        <li><Link to="/projects" onClick={toggleNavbar}>Projects</Link></li>
        <li><Link to="/skills" onClick={toggleNavbar}>Skills</Link></li>
        <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
