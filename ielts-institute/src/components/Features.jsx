import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎤',
      title: 'Speaking Practice',
      description: 'Interactive speaking sessions with native speakers and AI-powered feedback to improve your pronunciation and fluency.'
    },
    {
      icon: '📝',
      title: 'Mock Tests',
      description: 'Comprehensive practice tests that simulate real IELTS conditions to help you build confidence and timing.'
    },
    {
      icon: '🤖',
      title: 'AI Band Score',
      description: 'Advanced AI technology provides instant scoring and detailed feedback on all four IELTS test components.'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Mentors',
      description: 'Learn from certified IELTS trainers with years of experience and proven track records of student success.'
    }
  ];

  return (
    <section id="courses" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Our IELTS Training?</h2>
          <p className="features-subtitle">
            We provide comprehensive training with cutting-edge tools and expert guidance
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
