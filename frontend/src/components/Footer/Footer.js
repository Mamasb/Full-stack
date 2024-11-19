import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom'; // For internal navigation

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>School Management System</h3>
          <p>Your trusted partner in educational management</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact</h4>
          <p><i className="fas fa-phone-alt"></i> +123 456 7890</p>
          <p><i className="fas fa-envelope"></i> info@schoolmanagement.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, City</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} School Management System. All rights reserved.</p>
        <a href="#top" className="back-to-top">Back to Top</a>
      </div>
    </footer>
  );
}

export default Footer;

