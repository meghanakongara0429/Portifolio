import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profilePic from '../assets/profile.jpeg';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image">
              <img src={profilePic} alt="Meghana Kongara" />
            </div>
            <h1>Hi, I'm <span className="highlight">Meghana Kongara</span></h1>
            <h2>Computer Science Engineering Student</h2>
            <p>
              Passionate about technology and innovation. Currently pursuing B.Tech in Computer Science 
              at Sri Vasavi Engineering College with a focus on Artificial Intelligence.
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="cta-button primary">View My Work</Link>
              <Link to="/contact" className="cta-button secondary">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-intro">
        <div className="container">
          <h2>About Me</h2>
          <div className="intro-content">
            <div className="intro-text">
              <p>
                I am a dedicated Computer Science student with a strong academic record, maintaining a CGPA of 9.34. 
                My focus areas include Artificial Intelligence, Machine Learning, and Web Development.
              </p>
              <p>
                Currently seeking opportunities for a Summer Analyst position at Citi, where I can apply my 
                technical skills and contribute to innovative financial technology solutions.
              </p>
            </div>
            <div className="skills-preview">
              <h3>Key Skills</h3>
              <ul>
                <li>Python Programming</li>
                <li>Machine Learning</li>
                <li>Web Development</li>
                <li>Data Structures</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 