import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Hi, I'm Mohammed Thanveer</h1>
      <p>Welcome to My Personal Portfolio</p>
        <Link to="/about">
        <button>About Me</button
        ></Link>
    </div>
  );
};

export default Home;