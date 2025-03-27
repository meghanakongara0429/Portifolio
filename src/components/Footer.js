import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Meghana</h3>
            <p>B.Tech in Computer Science and Engineering (AI)</p>
            <p>Passionate about technology and innovation</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://www.geeksforgeeks.org/user/meghanakongara0429/?ref=header_profile" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code"></i>
              </a>
              <a href="https://www.linkedin.com/in/meghana-kongara-55b96b290" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.hackerrank.com/profile/meghanakongara01" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-hackerrank"></i>
              </a>
              <a href="https://leetcode.com/u/Meghana_Kongara/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Meghana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 