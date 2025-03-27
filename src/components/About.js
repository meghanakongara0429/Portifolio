import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About Me</h1>
        
        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Technology and Engineering</h3>
            <p className="institution">Sri Vasavi Engineering College</p>
            <p className="year">2020 - 2024</p>
            <p className="description">
              Currently pursuing my degree in [CSE] with a focus on [Artificial Intelligence].
              Maintaining a strong academic record and actively participating in technical events.
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <ul>
                <li>Programming Languages (e.g., Python, Java, C++)</li>
                <li>Web Development (HTML, CSS, JavaScript)</li>
                <li>Database Management</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Team Leadership</li>
                <li>Communication</li>
                <li>Time Management</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Development Tools (VS Code, IntelliJ)</li>
                <li>Design Tools (Figma, Adobe XD)</li>
                <li>Project Management Tools</li>
                <li>Operating Systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="achievements">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <h3>Academic Excellence</h3>
              <p>Maintained CGPA of 9.34</p>
            </div>
            <div className="achievement-item">
              <h3>Technical Competitions</h3>
              <p>Participated in various hackathons and coding competitions</p>
            </div>
            <div className="achievement-item">
              <h3>Leadership</h3>
              <p>Sub ordinate to the microsoft learn student club</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 