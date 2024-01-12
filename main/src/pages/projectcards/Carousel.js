import React from 'react';
import Card from './Card';
import './Carousel.css'; // Make sure to create a corresponding CSS file

const Carousel = ({ projects }) => {
  return (
      <div className="cards-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
  );
};

export default Carousel;
