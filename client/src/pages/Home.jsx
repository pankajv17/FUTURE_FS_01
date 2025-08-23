import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        
        {/* ===== Left Text Section ===== */}
        <div className="text-section" data-aos="fade-right">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Pankaj Verma</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build scalable and high-performance web applications using the
            <span className="stack"> MERN stack</span>.  
            Let’s connect and create something amazing together!
          </p>

          {/* Buttons */}
          <div className="button-group">
            <Link to="/projects" className="primary-btn">
              🚀 View Projects
            </Link>
            <Link to="/contact" className="secondary-btn">
              📩 Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="social-icons" data-aos="fade-up">
            <a
              href="https://github.com/pankajv17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-verma-a73377253/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ===== Right Image Section ===== */}
        <div className="image-section" data-aos="fade-left">
          <img
            src="/assets/main.png"
            alt="Pankaj Verma"
            className="profile-image"
          />
        </div>
      </div>

      {/* ===== SVG Wave Divider ===== */}
      <div className="svg-wave">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1a73e8"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,197.3C672,203,768,213,864,213.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Home;

