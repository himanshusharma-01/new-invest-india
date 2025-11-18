'use client';

import React, { useState } from 'react';
import './login.css';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      {/* Left Section - Visual */}
      <div className="login-visual">
        <div className="visual-overlay">
          <div className="visual-content">
            <div className="visual-logo">
              <span className="logo-icon">💰</span>
              <span className="logo-text">Invest India</span>
            </div>
            <h1 className="visual-title">
              Smart Investing Made Simple
            </h1>
            <p className="visual-subtitle">
              Join thousands of investors building wealth with personalized stock 
              and mutual fund guidance tailored to your financial goals.
            </p>
            <div className="visual-features">
              <div className="feature-item">
                <span className="feature-icon">📈</span>
                <span>Expert Stock Recommendations</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💼</span>
                <span>Personalized Portfolio</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <span>Secure & Protected</span>
              </div>
            </div>
          </div>
        </div>
        <div className="visual-charts">
          <div className="chart-line chart-1"></div>
          <div className="chart-line chart-2"></div>
          <div className="chart-line chart-3"></div>
          <div className="chart-dot dot-1"></div>
          <div className="chart-dot dot-2"></div>
          <div className="chart-dot dot-3"></div>
          <div className="chart-dot dot-4"></div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="login-form-section">
        <div className="login-form-container">
          {/* Header */}
          <div className="form-header">
            <h1 className="form-title">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="form-subtitle">
              {isLogin 
                ? 'Sign in to your investment dashboard' 
                : 'Start your investment journey today'
              }
            </p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Confirm your password"
                  required={!isLogin}
                />
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkbox-text">Remember me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="submit-button">
              {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span className="divider-text">Or continue with</span>
          </div>

          {/* Social Login */}
          <div className="social-login">
            <button type="button" className="social-button">
              <span className="social-icon">🔍</span>
              Google
            </button>
            <button type="button" className="social-button">
              <span className="social-icon">💼</span>
              LinkedIn
            </button>
          </div>

          {/* Switch Auth Mode */}
          <div className="auth-switch">
            <p className="switch-text">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                className="switch-button"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Legal Notice */}
          <div className="legal-notice">
            <p>
              By continuing, you agree to Invest India&rsquo;s 
              <a href="/terms" className="legal-link"> Terms of Service</a> and 
              <a href="/privacy" className="legal-link"> Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;