'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import './landingpage.css';
import { useRouter } from 'next/navigation';

const CreativeHomepage: React.FC = () => {
  const router = useRouter();
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
              Trusted by 100+ Investors
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
              <button className="btn-primary" onClick={() => router.push('/login')}>
                <span className="btn-text">Get Started</span>
                <span className="btn-arrow">→</span>
              </button>
             
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">₹20 Lakh+</div>
                <div className="stat-label">Assets Managed</div>
              </div>
              <div className="stat">
                <div className="stat-number">28%</div>
                <div className="stat-label">Return Rate</div>
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
             
              {/* <div className="floating-card card-2">
                <div className="card-icon">💼</div>
                <div className="card-text">SEBI Certified</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">⭐</div>
                <div className="card-text">4.9/5 Rating</div>
              </div> <div className="floating-card card-1">
                <div className="card-icon">📈</div>
                <div className="card-text">10+ Years Experience</div>
              </div> */}
              <div className="main-image">
                <div className="image-placeholder">
                  <Image 
                    src="/FounderImage.png" 
                    alt="Mr. Satish Kumar Sharma - Founder & Chief Investment Advisor" 
                    width={300} 
                    height={300}
                    className="founder-image"
                  />
                  <div className="advisor-glow"></div>
                </div>
              </div>
            </div>
            
            <div className="about-text">
              <h2 className="section-heading">
                Meet Your <span className="gradient-text">Financial Guide</span>
              </h2>
              <div className="advisor-info">
                <h3 className="advisor-name">Mr. Satish Kumar Sharma</h3>
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
            <div className="service-card premium-card">
              <div className="plan-badge premium-badge">Premium</div>
              <div className="service-icon-wrapper">
                <Image 
                  src="/STOCK ADV.png" 
                  alt="Stock Advisory" 
                  width={120} 
                  height={120}
                  className="service-image"
                />
              </div>
              <h3>Premium Plan</h3>
              <p className="plan-subtitle">Long Term • High Growth</p>
              <div className="pricing-section">
                <div className="price-main">
                  <span className="currency">₹</span>
                  <span className="price-amount">1,999</span>
                  <span className="price-period">/month</span>
                </div>
                <div className="investment-amount">
                  Total Investment: <span className="investment-value">₹1,50,000</span>
                </div>
              </div>
              <div className="service-features">
                <span>Premium Advisory</span>
                <span>High Growth</span>
                <span>Long Term</span>
              </div>
              <a 
                href="https://wa.me/919888673282?text=Hi!%20I%20am%20interested%20in%20the%20Premium%20Plan%20subscription.%20Please%20guide%20me%20further." 
                target="_blank" 
                rel="noopener noreferrer"
                className="service-cta premium-cta"
              >
                Choose Premium →
              </a>
            </div>

            <div className="service-card featured gold-card">
              <div className="featured-badge">Most Subscribed</div>
              <div className="plan-badge gold-badge">Gold</div>
              <div className="service-icon-wrapper">
                <Image 
                  src="/budgetINVEST.png" 
                  alt="Budget Investment" 
                  width={120} 
                  height={120}
                  className="service-image"
                />
              </div>
              <h3>Gold Plan</h3>
              <p className="plan-subtitle">Moderate Growth</p>
              <div className="pricing-section">
                <div className="price-main">
                  <span className="currency">₹</span>
                  <span className="price-amount">999</span>
                  <span className="price-period">/month</span>
                </div>
                <div className="investment-amount">
                  Total Investment: <span className="investment-value">₹1,00,000</span>
                </div>
              </div>
              <div className="service-features">
                <span>Balanced Portfolio</span>
                <span>Moderate Growth</span>
                <span>Expert Guidance</span>
              </div>
              <a 
                href="https://wa.me/919888673282?text=Hi!%20I%20am%20interested%20in%20the%20Gold%20Plan%20subscription.%20Please%20guide%20me%20further." 
                target="_blank" 
                rel="noopener noreferrer"
                className="service-cta gold-cta"
              >
                Choose Gold →
              </a>
            </div>

            <div className="service-card silver-card">
              <div className="plan-badge silver-badge">Silver</div>
              <div className="service-icon-wrapper">
                <Image 
                  src="/MFP.png" 
                  alt="Mutual Fund Planning" 
                  width={120} 
                  height={120}
                  className="service-image"
                />
              </div>
              <h3>Silver Plan</h3>
              <p className="plan-subtitle">Starter Plan</p>
              <div className="pricing-section">
                <div className="price-main">
                  <span className="currency">₹</span>
                  <span className="price-amount">500</span>
                  <span className="price-period">/month</span>
                </div>
                <div className="investment-amount">
                  Total Investment: <span className="investment-value">₹50,000</span>
                </div>
              </div>
              <div className="service-features">
                <span>Basic Advisory</span>
                <span>Starter Friendly</span>
                <span>Affordable</span>
              </div>
              <a 
                href="https://wa.me/919888673282?text=Hi!%20I%20am%20interested%20in%20the%20Silver%20Plan%20subscription.%20Please%20guide%20me%20further." 
                target="_blank" 
                rel="noopener noreferrer"
                className="service-cta silver-cta"
              >
                Choose Silver →
              </a>
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
            <a 
              href="https://wa.me/919888673282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-cta"
            >
              <span className="whatsapp-icon">💬</span>
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CreativeHomepage;