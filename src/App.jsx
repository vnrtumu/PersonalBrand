import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <nav className="glass-panel main-nav">
        <div className="container nav-content">
          <div className="logo">&lt;Venkat /&gt;</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      <style>{`
        .main-nav {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 800px;
          z-index: 1000;
          padding: 1rem 2rem;
          border-radius: 100px;
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0;
        }
        
        .logo {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--accent);
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        
        .nav-links a:hover {
          color: var(--text-main);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .main-nav {
            top: 0;
            width: 100%;
            border-radius: 0;
            border-top: none;
            border-left: none;
            border-right: none;
            left: 0;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
