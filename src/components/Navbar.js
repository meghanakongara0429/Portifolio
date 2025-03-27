import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
           Meghana Kongara
          </NavLink>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 