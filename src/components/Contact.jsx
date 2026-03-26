import React from 'react';
import { Mail, UserCircle, Code, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-box glass-panel">
          <div className="contact-content">
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="contact-desc">
              Whether you want to discuss a fintech project, mobile security audit, or agentic AI implementation, I'm always open to new opportunities.
            </p>
            
            <div className="contact-links">
              <a href="mailto:narayana.tumu1995@gmail.com" className="contact-link glass-panel">
                <Mail className="contact-icon" />
                <span>Email Me</span>
              </a>
              <a href="https://wa.me/919182387725" target="_blank" rel="noreferrer" className="contact-link glass-panel">
                <MessageCircle className="contact-icon" />
                <span>WhatsApp</span>
              </a>
              <a href="https://linkedin.com/in/venkattumu" target="_blank" rel="noreferrer" className="contact-link glass-panel">
                <UserCircle className="contact-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/vnrtumu" target="_blank" rel="noreferrer" className="contact-link glass-panel">
                <Code className="contact-icon" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer center">
        <p>© {new Date().getFullYear()} Venkat RN. All Rights Reserved.</p>
      </footer>
      
      <style>{`
        .contact-box {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 4rem;
          background: linear-gradient(145deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05));
        }
        
        .contact-desc {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 1.5rem 0 3rem;
        }
        
        .contact-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .contact-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .contact-link:hover {
          transform: translateY(-5px);
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.3);
        }
        
        .contact-icon {
          color: var(--accent);
        }
        
        .footer {
          text-align: center;
          padding: 2rem 0;
          color: var(--text-muted);
          font-size: 0.875rem;
          border-top: 1px solid var(--glass-border);
        }
        
        @media (max-width: 768px) {
          .contact-box {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
