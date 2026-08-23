import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="project-image">{project.icon}</div>
          <h3>{project.title}</h3>
          <p>{project.shortDesc}</p>
        </div>
        <div className="flip-card-back">
          <h3>About {project.title}</h3>
          <p>{project.fullDesc}</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '10px', fontSize: '0.8rem' }}>
            {project.tech.map((t, i) => (
              <span key={i} style={{ color: '#64ffda' }}>#{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
