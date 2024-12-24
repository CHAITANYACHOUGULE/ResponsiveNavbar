// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
