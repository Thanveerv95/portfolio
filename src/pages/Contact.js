import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me via email or through my social media profiles. I look forward to connecting with you!
      </p>
      <button>
        <a href="mailto:mohammedthanveerv@gmail.com?subject=Contact%20Request&body=Hi%20there,%20I'd%20like%20to%20connect%20with%20you.">
          Mail me
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/thanveerv/" target="_blank"  rel="noreferrer">Linkedin</a>
      </button>
      <button>
        <a href="tel:+919074075868">Call me</a>
      </button>
    </div>
  );
};

export default Contact;
