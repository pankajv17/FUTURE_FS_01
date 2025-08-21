import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Pankaj Verma</h2>
        <p className="footer-tagline">
          Crafting elegant solutions with full-stack development skills 🚀
        </p>
        <div className="footer-socials">
          <a href="https://github.com/pankajv17" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pankaj-verma-a73377253/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/PankajV33466242" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Pankaj Verma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
