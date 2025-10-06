import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">IELTS Institute</h3>
            <p className="footer-description">
              Your trusted partner in achieving IELTS success. We provide comprehensive 
              training with expert guidance and cutting-edge technology.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>📧 info@ieltsinstitute.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Education Street, Learning City, LC 12345</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 IELTS Institute. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right social-links">
            <a href="#" aria-label="Facebook" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter" title="Twitter"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
