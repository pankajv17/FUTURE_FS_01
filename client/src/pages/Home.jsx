import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">

        {/* ===== Text Section ===== */}
        <div className="text-section">
          <h1>
            Hi, I'm <span className="highlight">Pankaj Verma</span>
          </h1>
          <h2>A Passionate Full Stack Developer</h2>
          <p>
            I build scalable and high-performance web applications using the MERN stack.
            Let’s connect and build something amazing together!
          </p>

          {/* Buttons */}
          <div className="button-group">
            <Link to="/projects" className="primary-btn">View Projects</Link>
            <Link to="/contact" className="secondary-btn">Contact Me</Link>
          </div>

          {/* Social Icons */}
          <div className="social-icons" data-aos="fade-up">
            <a
              href="https://github.com/pankajv17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-verma-a73377253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ===== Image Section ===== */}
        <div className="image-section">
          <img
            src="/assets/main.png"
            alt="Profile"
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
            d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,197.3C672,203,768,213,864,213.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Home;

