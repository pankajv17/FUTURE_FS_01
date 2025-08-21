// src/pages/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h1 className="resume-title">My Resume</h1>

        {/* Summary */}
        <section className="resume-block">
          <h2>Summary</h2>
          <p>
            Full Stack Web Developer with experience in building responsive MERN stack applications.
            Strong problem-solving skills and a passion for clean code and intuitive UI/UX.
          </p>
        </section>

        {/* Education */}
        <section className="resume-block">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="item-meta">BBD University,Lucknow | 2022 - 2026</p>
            <p>CGPA: 8.3/10</p>
          </div>
          
        </section>

        {/* Skills */}
        <section className="resume-block">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js, Express.js</li>
            <li>MongoDB, MySQL</li>
            <li>Git, GitHub, REST API</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="resume-block">
          <h2>Experience</h2>
          <div className="resume-item">
            <h3>Full Stack Intern</h3>
            <p className="item-meta">Winter Industrial Training – Hindtech IT Solution Pvt. Ltd |  Intern  |  Feb2025 –April 2025  </p>
            <ul>
              <li>Technologies: MERN Stack (MongoDB, Express.js, React.js, Node.js) </li>
              <li>JavaScript, Git, REST API, AI tools</li>
              <li>Improved page load speed by 30%</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-block">
          <h2>Projects</h2>
          <div className="resume-item">
            <h3>Library Management System</h3>
            <p>MERN stack project with login/auth, CRUD operations, and admin dashboard.</p>
          </div>
          <div className="resume-item">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React, responsive design, and SEO optimization.</p>
          </div>
        </section>

        {/* Download Button */}
        <div className="resume-download">
          <a href="/resume1.pdf" download>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
