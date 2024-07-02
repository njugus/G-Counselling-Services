
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Kelvin Njuguna. All Rights Reserved.</p>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-contact">
          <p><FaEnvelope /> email@example.com</p>
          <p><FaPhone /> +123 456 7890</p>
          <p><FaMapMarkerAlt /> 123 Counselling St, Wellness City</p>
        </div>
        
      </div>
      <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#book">Book A Session</a></li>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;

