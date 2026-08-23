import React from 'react';
import './index.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Contact from './components/Contact';

const projectsData = [
  {
    title: "E-Commerce Platform",
    shortDesc: "A modern shopping experience.",
    fullDesc: "A full-featured e-commerce app with cart management, stripe integration, and user authentication.",
    tech: ["React", "Node", "MongoDB"],
    icon: "🛒"
  },
  {
    title: "AI Chatbot",
    shortDesc: "Intelligent conversational AI.",
    fullDesc: "A real-time chatbot using OpenAI API to provide instant support and information to users.",
    tech: ["React", "OpenAI", "Tailwind"],
    icon: "🤖"
  },
  {
    title: "Portfolio Site",
    shortDesc: "My professional digital home.",
    fullDesc: "A responsive portfolio website showcasing my work with glassmorphism and smooth animations.",
    tech: ["React", "CSS3", "Vite"],
    icon: "💻"
  }
];

function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Background Blobs for Glassmorphism effect */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        left: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(100, 255, 218, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed',
        bottom: '10%',
        right: '-5%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed',
        top: '30%',
        right: '20%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <Navbar />

      <section id="home">
        <h1 style={{ fontSize: '4rem', color: '#64ffda' }}>Hi, I'm a Web Developer</h1>
        <p style={{ fontSize: '1.5rem', color: '#8892b0', maxWidth: '600px', marginTop: '1rem' }}>
          Building digital experiences that merge art with engineering.
        </p>
        <a href="#projects" style={{ marginTop: '2rem' }}>
          <button>View My Work</button>
        </a>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <About />
      <Contact />

      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
        <p>© {new Date().getFullYear()} DevPortfolio. Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;
