import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="project">
        <h2>FitCraft - Redefining Tailoring Precision</h2>
        <p>
          Utilized cutting-edge computer vision and machine learning methodologies to create a dependable approach for accurately measuring human body dimensions.
        </p>
        <p><strong>Technologies Used:</strong> Computer Vision, Machine Learning, Python, OpenCV</p>
      </div>
      
      <div className="project">
        <h2>Static Website Hosting with Amazon S3</h2>
        <p>
          Deployed a static website using Amazon S3 with custom domain configuration. Optimized performance using AWS CloudFront and implemented secure bucket policies.
        </p>
        <p><strong>Technologies Used:</strong> Amazon S3, CloudFront, AWS, HTML, CSS</p>
      </div>
      
      <div className="project">
        <h2>Personal Portfolio</h2>
        <p>
          This portfolio showcases my skills, projects, and contact details. It was built with a focus on responsive design, modern web technologies, and best practices.
        </p>
        <p><strong>Technologies Used:</strong> React, JavaScript, HTML, CSS, GitHub</p>
      </div>
    </div>
  );
};

export default Projects;
