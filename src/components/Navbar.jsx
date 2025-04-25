import React, { useEffect, useState } from 'react';
import './Navbar.css';
import download from '../images/download.png';
import { FaFacebook, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import resumePDF from '../images/Ravi_Ashray_s.pdf';


function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const resumeButton = document.querySelector('.resume-button');
      const resumeButtonTop = resumeButton ? resumeButton.getBoundingClientRect().top : 0;
      setIsShrunk(resumeButtonTop <= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar ${isShrunk ? 'navbar-shrink' : ''}`} id="navbar">
        <div className="navbar-a">
          <a className='logo' href='#' onClick={() => window.scrollTo(0, 0)}>Ravi Ashray.</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <section className="home" id="home">
        <h1>Transforming Ideas into <br /><span id="reality">Reality.</span></h1>
        <a href={resumePDF} className="resume-button" target="_blank" rel="noreferrer" >
          My Resume
        </a>

      </section>

      <section className="about" id="about">
        <h2 className="section-heading">About Me</h2>
        <div className="p-card">
          <div className="card-text">
            <p>Hey, there! I am <span>Ravi Ashray</span>...</p>
            <p>An undergraduate student from <span>VIT AP University</span>.</p>
            <p>Tech enthusiast with a passion for development.</p>
            <p>I'm very flexible with time zone communications.</p>
          </div>
          <img src={download} alt="Ravi Ashray" />
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-heading">Skills</h2>

        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul className="center-list">
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Python</li>
            <li>Java</li>
            <li>Git & GitHub</li>
            <li>MySQL</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Non-Technical Skills</h3>
          <ul className="center-list">
            <li>Communication</li>
            <li>Handling Stress</li>
            <li>Problem Solving</li>
            <li>Leadership</li>
            <li>Creativity</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Hobbies</h3>
          <ul className="center-list">
            <li>Music</li>
            <li>Photography</li>
            <li>Gaming</li>
            <li>Sketching</li>
            <li>Movies</li>
          </ul>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-heading">Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Sentiment Analysis</h3>
            <p>Built a real-time sentiment analysis app using <span>Streamlit</span>  and <span>Python</span> for text-based emotion detection..</p>
            <div className="project-links">
              <a href="https://sentiment-analysis123.streamlit.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
              <a href="https://github.com/RaviAshray15/sentiment-analysis" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Portfolio website built with <span>React</span>, featuring smooth animations and a sleek design.</p>
            <div className="project-links">
              <a href='#' onClick={() => window.scrollTo(0, 0)}>Live Link</a>
              <a href="https://github.com/yourusername/livekit-ai-integration" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h3>To Do List</h3>
            <p> A To-Do Application — Built with <span>React + Vite</span> for quick and simple task tracking.</p>
            <div className="project-links">
              <a href="https://ravis-to-do-list.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
              <a href="https://github.com/RaviAshray15/to-do-list" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="section-heading">Contact Me</h2>
        <p>Let's build something awesome together.</p>
        <div className="icons">
          <a href="https://github.com/RaviAshray15" target='_blank' rel="noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/Raviashray" target='_blank' rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.facebook.com/ashray.namuduru" target='_blank' rel="noreferrer"><FaFacebook /></a>
          <a href="mailto:raviashray15@gmail.com" target='_blank' ><FaEnvelope /></a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 <span>Ravi Ashray</span>. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Navbar;
