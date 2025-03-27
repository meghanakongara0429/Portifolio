import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Me</h1>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>meghanakongara0429@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 9381687830</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Kakumanu, Guntur, Andhra Pradesh</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/meghana-kongara-269004250/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://auth.geeksforgeeks.org/user/kongarameghana2004" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-geeksforgeeks"></i>
            </a>
            <a href="https://www.hackerrank.com/profile/kongarameghana21" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-hackerrank"></i>
            </a>
            <a href="https://leetcode.com/meghana_kongara/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-leetcode"></i>
            </a>
          </div>
          <a href="/resume.pdf" className="download-cv" download>
            Download CV
          </a>
        </div>
        <div className="contact-right">
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30608.017537063655!2d80.27718475!3d16.50615465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a5c1c0c0c0c1%3A0x0!2sKakumanu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1647856789012!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact; 