'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import './landingpage.css';

const CreativeHomepage: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate graph when it comes into view
          let value = 0;
          const interval = setInterval(() => {
            value += 2;
            if (value >= 100) {
              clearInterval(interval);
            }
            setAnimatedValue(value);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="creative-container">
      <Navbar />
      {/* Animated Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">
              <span className="badge-dot"></span>
              Trusted by 10,000+ Investors
            </div>
            <h1 className="hero-heading">
              <span className="gradient-text">Invest Smart.</span>
              <br />
              <span className="stroke-text">Grow Secure.</span>
            </h1>
            <p className="hero-subtext">
              Get <span className="highlight">personalized stock & mutual fund</span> investment 
              guidance tailored to your budget and goals. Start your wealth creation journey today.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                <span className="btn-text">Get Started</span>
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-secondary">
                <span className="play-icon">▶</span>
                Watch Demo
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">₹50Cr+</div>
                <div className="stat-label">Assets Managed</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>

          <div className="hero-visual" ref={graphRef}>
            <div className="graph-container">
              <div className="graph">
                <div 
                  className="graph-fill" 
                  style={{ height: `${animatedValue}%` }}
                ></div>
                <div className="graph-line graph-line-1"></div>
                <div className="graph-line graph-line-2"></div>
                <div className="graph-line graph-line-3"></div>
                <div className="graph-dot graph-dot-1"></div>
                <div className="graph-dot graph-dot-2"></div>
                <div className="graph-dot graph-dot-3"></div>
              </div>
              <div className="graph-labels">
                <span>Start</span>
                <span>6M</span>
                <span>1Y</span>
                <span>Now</span>
              </div>
            </div>
            <div className="profit-badge">
              <div className="profit-arrow">↗</div>
              <div className="profit-text">
                <div className="profit-percent">+28%</div>
                <div className="profit-label">Average Returns</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Animated About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-visual">
              <div className="floating-card card-1">
                <div className="card-icon">📈</div>
                <div className="card-text">10+ Years Experience</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">💼</div>
                <div className="card-text">SEBI Certified</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">⭐</div>
                <div className="card-text">4.9/5 Rating</div>
              </div>
              <div className="main-image">
                <div className="image-placeholder">
                  <div className="advisor-glow"></div>
                </div>
              </div>
            </div>
            
            <div className="about-text">
              <h2 className="section-heading">
                Meet Your <span className="gradient-text">Financial Guide</span>
              </h2>
              <div className="advisor-info">
                <h3 className="advisor-name">Mr. [Fathers Full Name]</h3>
                <p className="advisor-title">Founder & Chief Investment Advisor</p>
              </div>
              <p className="about-description">
                With <span className="highlight">deep expertise</span> in Indian stock markets 
                and mutual funds, I guide investors toward <span className="highlight">smart, 
                risk-aware decisions</span>. My mission is to make professional investment 
                guidance accessible to everyone, regardless of their starting capital.
              </p>
              
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '92%'}}></div>
                    </div>
                    <span className="progress-text">92%</span>
                  </div>
                  <span className="expertise-label">Stock Analysis</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '88%'}}></div>
                    </div>
                    <span className="progress-text">88%</span>
                  </div>
                  <span className="expertise-label">Portfolio Management</span>
                </div>
                <div className="expertise-item">
                  <div className="expertise-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '95%'}}></div>
                    </div>
                    <span className="progress-text">95%</span>
                  </div>
                  <span className="expertise-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="services-section">
        <div className="section-container">
          <h2 className="section-heading">
            Our <span className="gradient-text">Investment Solutions</span>
          </h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">📊</div>
                <div className="icon-glow"></div>
              </div>
              <h3>Smart Stock Advisory</h3>
              <p>AI-powered stock recommendations with real-time market analysis and risk assessment.</p>
              <div className="service-features">
                <span>Daily Updates</span>
                <span>Risk Analysis</span>
                <span>Portfolio Tracking</span>
              </div>
              <button className="service-cta">
                Explore Stocks →
              </button>
            </div>

            <div className="service-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="service-icon-wrapper">
                <div className="service-icon">💰</div>
                <div className="icon-glow"></div>
              </div>
              <h3>Mutual Fund Master</h3>
              <p>Curated SIP plans with top-performing funds and automated portfolio rebalancing.</p>
              <div className="service-features">
                <span>SIP Planning</span>
                <span>Fund Selection</span>
                <span>Auto Rebalance</span>
              </div>
              <button className="service-cta">
                Start SIP →
              </button>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">🎯</div>
                <div className="icon-glow"></div>
              </div>
              <h3>Budget Builder</h3>
              <p>Start with any amount. Get personalized plans that grow with your investment capacity.</p>
              <div className="service-features">
                <span>Flexible Amounts</span>
                <span>Growth Tracking</span>
                <span>Goal Planning</span>
              </div>
              <button className="service-cta">
                Build Portfolio →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Process Section */}
      <section className="process-section">
        <div className="section-container">
          <h2 className="section-heading light-heading">
            Your <span className="gradient-text">Wealth Journey</span> Starts Here
          </h2>
          
          <div className="process-timeline">
            <div className="timeline-line"></div>
            
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Share Your Vision</h3>
                <p>Tell us your financial goals, risk appetite, and investment capacity</p>
              </div>
              <div className="step-visual">
                <div className="step-icon">🎯</div>
                <div className="step-orb"></div>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Get Custom Portfolio</h3>
                <p>Receive a tailored investment plan with stocks and mutual funds</p>
              </div>
              <div className="step-visual">
                <div className="step-icon">📋</div>
                <div className="step-orb"></div>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Grow & Monitor</h3>
                <p>Track performance and get regular updates with expert guidance</p>
              </div>
              <div className="step-visual">
                <div className="step-icon">📈</div>
                <div className="step-orb"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive WhatsApp Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Start Your Investment Journey?</h2>
              <p>Join thousands of successful investors today. Get personalized guidance via WhatsApp.</p>
            </div>
            <div className="cta-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="chat-bubble chat-1">
                    Hi! I need investment help
                  </div>
                  <div className="chat-bubble chat-2">
                    Welcome! Let me guide you...
                  </div>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <button className="whatsapp-cta">
              <span className="whatsapp-icon">💬</span>
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CreativeHomepage;