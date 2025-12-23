'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Centered Logo */}
        <div className="nav-logo">
          <Link href="/" className="logo-container">
            <Image 
              src="/LOGO.png" 
              alt="Invest India" 
              width={150}
              height={50}
              className="logo-image"
              onError={(e) => {
                // Fallback if logo doesn't load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="logo-fallback">
              <span className="fallback-icon">💰</span>
              <span className="fallback-text">Invest India</span>
            </div>
          </Link>
        </div>

        {/* Desktop Login Button */}
        <div className="nav-actions">
          <Link href="/login" className="login-button">
            <span className="login-icon">🔐</span>
            <span className="login-text">Login</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-logo">
              <Image 
                src="/LOGO.png" 
                alt="Invest India" 
                width={150}
                height={50}
                className="mobile-logo-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="mobile-logo-fallback">
                <span className="fallback-icon">💰</span>
                <span className="fallback-text">Invest India</span>
              </div>
            </div>
            
            <div className="mobile-auth">
              <Link href="/login" className="mobile-login-button" onClick={toggleMobileMenu}>
                <span className="login-icon">🔐</span>
                Login to Dashboard
              </Link>
            </div>
            
            <div className="mobile-links">
              <a href="#home" className="mobile-link" onClick={toggleMobileMenu}>
                Home
              </a>
              <a href="#about" className="mobile-link" onClick={toggleMobileMenu}>
                About
              </a>
              <a href="#services" className="mobile-link" onClick={toggleMobileMenu}>
                Services
              </a>
              <a href="#process" className="mobile-link" onClick={toggleMobileMenu}>
                Process
              </a>
              <a href="#contact" className="mobile-link" onClick={toggleMobileMenu}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;