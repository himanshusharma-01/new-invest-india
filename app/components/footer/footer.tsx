import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-icon">💰</span>
              <span className="logo-text">Invest India</span>
            </div>
            <p className="footer-description">
              Expert guidance for first-time and long-term investors. 
              Build your financial future with confidence through personalized 
              stock and mutual fund investment strategies.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            {/* <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Advisor</a></li>
              <li><a href="#services" className="footer-link">Our Services</a></li>
              <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul> */}
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Stock Advisory</a></li>
              <li><a href="#" className="footer-link">Mutual Fund Planning</a></li>
              <li><a href="#" className="footer-link">Budget-Based Investing</a></li>
              <li><a href="#" className="footer-link">Portfolio Review</a></li>
              <li><a href="#" className="footer-link">Financial Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>support@investindia.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Mumbai, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <button className="whatsapp-button">
              <span className="whatsapp-icon">💬</span>
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <div className="copyright">
              © {currentYear} Invest India. All rights reserved.
            </div>
            <div className="legal-links">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms of Service</a>
              <a href="/disclaimer" className="legal-link">Disclaimer</a>
            </div>
          </div>
          
          {/* Important Legal Disclaimer */}
          <div className="legal-disclaimer">
            <p>
              <strong>Important Disclaimer:</strong> Invest India provides educational investment guidance. 
              All investments are subject to market risk. Please read all scheme related documents carefully 
              before investing. Past performance is not indicative of future returns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;