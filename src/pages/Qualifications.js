import React from 'react';
import '../App.css';

const Qualifications = () => {
  return (
    <div className="qualifications-container">
      <section className="education-section">
        <h2>Education</h2>
        <div className="qualification">
          <h3>MEA Engineering College</h3>
          <p><strong>B.Tech. in Computer Science and Engineering</strong> - Kerala, India (2020-2024)</p>
        </div>
        <div className="qualification">
          <h3>GVHSS Makkaraparamba</h3>
          <p><strong>Higher Secondary</strong> - Kerala, India</p>
        </div>
        <div className="qualification">
          <h3>TSS Vadakkangara</h3>
          <p><strong>High School</strong> - Kerala, India</p>
        </div>
      </section>
      
      <section className="training-section">
        <h2>Training & Certifications</h2>
        <div className="qualification">
          <h3>Legacy Python Programming | Free Code Camp</h3>
          <p>I successfully completed the "Python for Everybody" course by Dr. Charles Severance, covering essential Python concepts like variables, loops, data structures, OOP, and data visualization.</p>
        </div>
        <div className="qualification">
          <h3>Web Development | Free Code Camp</h3>
          <p>Developed proficiency in HTML, CSS, and web development concepts, gaining hands-on experience in front-end development.</p>
        </div>
        <div className="qualification">
          <h3>AWS re/Start | Amazon Web Services</h3>
          <p>Focused on cloud computing fundamentals and AWS services, gaining practical experience with EC2, S3, and RDS while learning cloud infrastructure setup, automation, and best practices.</p>
        </div>
      </section>
    </div>
  );
};

export default Qualifications;
