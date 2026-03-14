import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ heroData }) => {
  const fullText = heroData?.quote || 'Transforming Agriculture into Opportunity through Scientific Training and Sustainable Farming Solutions.';
  const [displayed, setDisplayed] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setIsTypingDone(false);

    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 26);

    return () => clearInterval(interval);
  }, [fullText]);

  const stats = heroData?.stats || [
    { value: '14+', label: 'Years of Experience' },
    { value: '500+', label: 'Farmers Trained' },
    { value: '4+', label: 'Organic Products' },
  ];

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-kicker fade-in visible">
            <span className="kicker-dot" />
            {heroData?.kicker || 'RAJ Agro Farming Training & Consultancy Services'}
          </div>

          <h1 className="hero-title">
            {displayed}
            <span className={`cursor${isTypingDone ? ' done' : ''}`}>|</span>
          </h1>

          <p className={`hero-subtitle${isTypingDone ? ' show' : ''}`}>
            {heroData?.subtitle || 'Based in Patna, Bihar — empowering farmers with organic inputs, hands-on training, and expert agri-consultancy since 2010.'}
          </p>

          <div className={`hero-actions${isTypingDone ? ' show' : ''}`}>
            <Link to={heroData?.cta?.primaryLink || '/services'} className="btn-primary hero-btn-primary">
              {heroData?.cta?.primary || 'Explore Services'}
            </Link>
            <Link to={heroData?.cta?.secondaryLink || '/about'} className="btn-primary hero-btn-primary">
              {heroData?.cta?.secondary || 'Learn About Us'}
            </Link>
          </div>

          <div className={`hero-stats${isTypingDone ? ' show' : ''}`}>
            {stats.map((stat, idx) => (
              <React.Fragment key={`${stat.value}-${idx}`}>
                <div className="hero-stat">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                {idx < stats.length - 1 && <div className="hero-stat-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default Hero;
