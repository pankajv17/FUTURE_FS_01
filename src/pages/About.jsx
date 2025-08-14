import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h2>About Me</h2>
        <p>Get to know who I am</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="/assets/about.png" alt="About" />
        </div>

        <div className="about-text">
          <h3>Hi, I'm Pankaj Verma 👋</h3>
          <p>
            I'm a passionate <strong>Full Stack Web Developer</strong> specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).
            With a deep love for coding, I enjoy building performant, scalable web applications that provide real-world solutions.
          </p>
          <p>
            Whether it's crafting a responsive front-end interface or designing robust back-end architecture, I take pride in delivering clean, efficient, and impactful code.
          </p>

          <ul className="about-highlights">
            <li>✔️ Clean & Scalable Code</li>
            <li>✔️ Responsive Web Design</li>
            <li>✔️ RESTful API Integration</li>
            <li>✔️ MongoDB & Express.js Backend</li>
            <li>✔️ React Frontend with State Management</li>
          </ul>

          <a href="/resume1.pdf" className="about-btn">View Resume</a>
        </div>
      </div>
    </div>
  );
}

export default About;
