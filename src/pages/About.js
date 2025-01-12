import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';

const About = () => {
  return (
    <div className="page-container">
      <h1>About Me</h1>
      <p>
        I am a passionate developer who loves building web applications. 
        I specialize in HTML, CSS, and have strong knowledge in JavaScript, React, and Python.
        I am constantly learning new technologies to improve my skill set.
      </p>
      <p>
        Apart from front-end development, I also have expertise in AWS (Amazon Web Services), Linux and a growing understanding of DevOps practices.
        I am interested in creating scalable, reliable applications and automating processes through modern DevOps tools and cloud technologies.
      </p>
      <Link to="/contact">
        <button>Contact Me</button>
      </Link>
      <Link to="/qualifications">
        <button>Education & Certifications</button>
      </Link>
    </div>
  );
};

export default About;
