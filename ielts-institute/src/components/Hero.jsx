import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">Crack IELTS with Confidence</h1>
          <p className="hero-subtitle">
            Join our expert-led IELTS training and achieve your dream band score.
          </p>

          {/* Get Started Button */}
          <button className="hero-cta">Get Started</button>

          {/* Cards Side by Side */}
          <div className="hero-cards">
            <div className="hero-card">
              <span className="hero-card-icon">⭐</span>
              <div className="hero-card-title">4.9/5 Rating</div>
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">🎓</span>
              <div className="hero-card-title">500+ Students</div>
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">🌍</span>
              <div className="hero-card-title">Global Access</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Students studying for IELTS" 
            className="hero-banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
