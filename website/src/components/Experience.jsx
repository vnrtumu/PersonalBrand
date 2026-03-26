import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Datamatics Global Services Limited',
    role: 'Lead React Native Developer',
    period: 'Feb 2023 - Present',
    description: 'Leading end-to-end feature development for IDFC Smart Collect App (Fintech | 55,000+ Users). Upgraded React Native to latest versions improving maintainability. Implemented Mobile App Security (Jailbreak detection, SSL Pinning, RSA-OAEP Encryption) and CI/CD pipelines.'
  },
  {
    company: 'Aroha Technology',
    role: 'React Native Developer',
    period: 'Sep 2019 - Feb 2023',
    description: 'Built multiple high-impact projects: Alberta (Retail POS), Board Pointers (Medical CMS), and Loan Darbar (Productivity tool). Handled responsive UI and complex Laravel API integrations.'
  },
  {
    company: 'Verbinden Communication',
    role: 'Full Stack Developer',
    period: 'Mar 2019 - Aug 2019',
    description: 'Contributed to full-stack capabilities including backend modules for BIOCON and MOSIP digital identity platform.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Experience</span> Roadmap
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3 className="role">{exp.role}</h3>
                  <div className="period">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                <div className="company">
                  <Briefcase size={16} /> {exp.company}
                </div>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 20px;
          height: 100%;
          width: 2px;
          background: var(--glass-border);
        }
        
        .timeline-item {
          position: relative;
          padding-left: 60px;
          margin-bottom: 3rem;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-dot {
          position: absolute;
          left: 14px;
          top: 24px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent-glow);
          z-index: 1;
        }
        
        .timeline-content {
          padding: 2rem;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        
        .role {
          font-size: 1.5rem;
          color: var(--text-main);
        }
        
        .period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--accent-secondary);
          background: rgba(14, 165, 233, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
        }
        
        .company {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .description {
          color: #a1a1aa;
          line-height: 1.7;
        }
        
        @media (max-width: 768px) {
          .timeline-header {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .timeline-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
