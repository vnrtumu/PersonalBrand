import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import profileImg from '../assets/1718229819958.jpeg';
import resumeFile from '../assets/VenkatRN_Resumedocx.pdf';

const Hero = () => {
  return (
    <section id="about" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass-panel">
            <span className="dot"></span> Available for Web3 & FinTech
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Venkat RN</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Lead React Native Developer &<br />
            Mobile App Security Specialist
          </h2>
          
          <p className="hero-description">
            7+ years of experience building secure, scalable, and high-performance mobile applications across fintech, fitness, retail, and enterprise domains. Currently exploring applied AI and agentic systems.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Let's Talk <ChevronRight size={18} />
            </a>
            <a href={resumeFile} download="VenkatRN_Resume.pdf" className="btn btn-outline glass-panel">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="image-wrapper glass-panel">
            <img src={profileImg} alt="Venkat RN" className="profile-img" />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
        }
        
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }
        
        .hero-title {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-size: 2rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        
        .hero-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 500px;
          margin-bottom: 2.5rem;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        
        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          margin: 0 auto;
          border-radius: 30px;
          padding: 1rem;
          overflow: hidden;
        }
        
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          position: relative;
          z-index: 2;
          filter: grayscale(20%) contrast(110%);
          transition: filter 0.5s ease;
        }
        
        .image-wrapper:hover .profile-img {
          filter: grayscale(0%) contrast(100%);
        }
        
        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
          z-index: 1;
          opacity: 0.5;
          filter: blur(40px);
        }
        
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
          }
          
          .hero-description {
            margin: 0 auto 2rem;
          }
          
          .hero-actions {
            justify-content: center;
            flex-direction: column;
          }
          
          .hero-visual {
            grid-row: 1;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
