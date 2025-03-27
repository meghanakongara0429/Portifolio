import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TrashTracker',
      description: 'Join us in revolutionizing waste management with AI-powered sorting, data insights, and eco-friendly solutions. Features include Smart Sorting to automate waste sorting and improve efficiency, Data Insights to visualize and manage waste statistics, and Eco Solutions to foster sustainable waste practices.',
      image: '/project-images/trashtracker.png',
      technologies: ['Python', 'Django', 'CNN', 'Deep Learning', 'TrashNet', 'AI'],
      date: 'July 2024',
      links: [
        {
          text: 'Source Code',
          url: 'https://github.com/meghanakongara0429/Trash-Tracker-Project',
          icon: 'fab fa-github'
        }
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a responsive personal portfolio website using React.js and Bootstrap. Hosted using GitHub Pages.',
      image: '/project-images/Screenshot 2025-03-26 225547.png',
      technologies: ['React.js', 'Bootstrap', 'CSS3', 'JavaScript', 'GitHub Pages'],
      links: [
    
        {
          text: 'Source Code',
          url: '#',
          icon: 'fab fa-github'
        }
      ]
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <h1>My Projects</h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on. Each project represents my passion for technology and problem-solving.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                {project.date && <p className="project-date">{project.date}</p>}
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex}
                      href={link.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={link.icon}></i>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 