import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Vite.",
    link: "https://your-portfolio-link.com",
    image: "/assets/portfolio.png",
    category: "Frontend",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog app with MERN stack.",
    link: "https://your-blog-link.com",
    image: "/assets/blog.png",
    category: "Full Stack",
  },
  {
    title: "Library Management",
    description: "Backend dashboard for library using Node.js & MongoDB.",
    link: "https://your-library-link.com",
    image: "/assets/lib.png",
    category: "Backend",
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

function Projects() {
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`projects-container ${theme}`}>
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-name">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
