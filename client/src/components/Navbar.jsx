import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">MyPortfolio</div>

      {/* Hamburger for Mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar left ${menuOpen ? "open" : ""}`}>
        <nav className="sidebar-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
