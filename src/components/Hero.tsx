import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Scran Away Cafe</h1>
        <p className="hero-subtitle">Chorley's little secret for good scran</p>
        <p className="hero-tagline">Delicious scran to eat in or grab 'n' dash</p>
        <p className="hero-love">All cooked with love</p>

        <div className="hero-buttons">
          <button className="cta-button primary" onClick={() => window.scrollTo({top: document.querySelector('.menu')?.offsetTop, behavior: 'smooth'})}>
            View Menu
          </button>
          <button className="cta-button secondary" onClick={() => window.open('tel:+441257824763', '_self')}>
            Call Now
          </button>
        </div>

        <div className="hero-info">
          <div className="info-item">
            <span className="info-icon">📍</span>
            <span>73 Bolton Street, PR7 3AG</span>
          </div>
          <div className="info-item">
            <span className="info-icon">🕒</span>
            <span>Mon-Sat: 7am-3pm, Sun: 8am-2pm</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <span>01257 824763</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;