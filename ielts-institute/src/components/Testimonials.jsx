import React from 'react';
import './Testimonials.css';

const fallbackAvatar = 'https://ui-avatars.com/api/?name=IELTS+Student&background=6A11CB&color=fff&bold=true&size=128';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The speaking practice sessions were incredibly helpful. I improved from Band 6 to Band 8 in just 3 months!',
      image: 'https://images.unsplash.com/photo-1494790108377-1e161b8d1a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=400&q=80&auto=format&fit=crop'
    },
    {
      name: 'Ahmed Hassan',
      text: 'The mock tests and AI feedback helped me identify my weak areas. I achieved my target score of 7.5!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
      name: 'Maria Rodriguez',
      text: 'The expert mentors provided personalized guidance that made all the difference. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Students Say</h2>
          <p className="testimonials-subtitle">
            Success stories from students who achieved their IELTS goals
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="stars" aria-label="5 out of 5 stars" title="Rated 5/5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackAvatar; }} 
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
