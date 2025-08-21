// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close mobile sidebar when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <nav className="custom-navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/assets/portfolio.jpg" alt="Logo" className="logo-img" />
            <span>MyPortfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-only">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              About
            </Link>
            <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
              Projects
            </Link>
            <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
              Resume
            </Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </div>

{/* <div
  className={`menu-icon mobile-only ${menuOpen ? "open" : ""}`}
  onClick={toggleMenu}
>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div> */}


          {/* Hamburger Menu for Mobile */}
          <div className="menu-icon mobile-only" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "rotate1" : ""}`}></div>
            <div className={`bar ${menuOpen ? "hide" : ""}`}></div>
            <div className={`bar ${menuOpen ? "rotate2" : ""}`}></div>
          </div>
        </div>
      </nav>

      {/* Left Sidebar for Mobile */}
      <div className={`sidebar left ${menuOpen ? "open" : ""}`}>
        <nav className="sidebar-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
            Projects
          </Link>
          <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
            Resume
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
