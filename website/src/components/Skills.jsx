import React from 'react';
import { Smartphone, Shield, Box, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile App Eng.',
    icon: <Smartphone className="text-accent" />,
    skills: ['React Native', 'Redux / Redux Toolkit', 'TypeScript', 'EAS Builds', 'OTA Updates']
  },
  {
    title: 'Mobile Security',
    icon: <Shield className="text-accent" />,
    skills: ['SSL Pinning', 'RSA-OAEP/GCM Encryption', 'Root/Emulator Detection', 'Device Integrity', 'Keychain Automation']
  },
  {
    title: 'Next-Gen applied',
    icon: <Cpu className="text-accent" />,
    skills: ['Agentic AI workflows', 'LLM Integration', 'Fintech Trends', 'System Optimization']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Arsenal</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-header">
                <div className="icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .skill-card {
          padding: 2rem;
          transition: transform 0.3s ease;
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
        }
        
        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }
        
        .skill-header h3 {
          font-size: 1.25rem;
          margin: 0;
        }
        
        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          font-size: 1rem;
        }
        
        .skill-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-secondary);
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default Skills;
