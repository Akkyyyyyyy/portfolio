import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    { title: "Project 1", description: "A brief description of your project." },
    { title: "Project 2", description: "A brief description of your project." },
    { title: "Project 3", description: "A brief description of your project." },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
