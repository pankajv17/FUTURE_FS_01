// src/pages/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h1 className="resume-title">My Resume</h1>

        {/* Summary */}
        <article className="resume-block" data-aos="fade-up">
          <h2>Summary</h2>
          <p>
            Full Stack Web Developer with experience in building responsive MERN stack applications.
            Strong problem-solving skills and a passion for clean code and intuitive UI/UX.
          </p>
        </article>

        {/* Education */}
        <article className="resume-block" data-aos="fade-up" data-aos-delay="100">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="item-meta">BBD University, Lucknow | 2022 - 2026</p>
            <p>CGPA: 8.3/10</p>
          </div>
        </article>

        {/* Skills */}
        <article className="resume-block" data-aos="fade-up" data-aos-delay="200">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Node.js, Express.js</li>
            <li>MongoDB, MySQL</li>
            <li>Git, GitHub, REST API</li>
          </ul>
        </article>

        {/* Experience */}
        <article className="resume-block" data-aos="fade-up" data-aos-delay="300">
          <h2>Experience</h2>
          <div className="resume-item">
            <h3>Full Stack Intern</h3>
            <p className="item-meta">
              Winter Industrial Training – Hindtech IT Solution Pvt. Ltd | Feb 2025 – Apr 2025
            </p>
            <ul>
              <li>Developed scalable web apps using MERN stack</li>
              <li>Improved page load speed by 30%</li>
              <li>Collaborated with team using Git & Agile methodology</li>
            </ul>
          </div>
        </article>

        {/* Projects */}
        <article className="resume-block" data-aos="fade-up" data-aos-delay="400">
          <h2>Projects</h2>
          <div className="resume-item">
            <h3>Library Management System</h3>
            <p>MERN stack project with login/auth, CRUD operations, and admin dashboard.</p>
          </div>
          <div className="resume-item">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React, responsive design, and SEO optimization.</p>
          </div>
        </article>

        {/* Download Button */}
        <div className="resume-download" data-aos="zoom-in">
          <a href="/resume1.pdf" download className="download-btn">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
