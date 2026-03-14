import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import api from '../config/api';
import { useLanguage } from '../context/useLanguage';
import './About.css';

const About = () => {
  const [data, setData] = useState(null);
  const { language, isHindi } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    api.getAboutData(language)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [language]);

  if (!data) return (
    <div className="page-loader">
      <div className="spinner" />
      <p>Loading…</p>
    </div>
  );

  return (
    <div className="page-about">
      <section className="page-hero section-dark">
        <div className="container page-hero-inner">
          <div className="section-label fade-in" style={{ color: 'var(--color-primary)' }}>{isHindi ? 'हमारी कहानी' : 'Our Story'}</div>
          <h1 className="fade-up" style={{ color: 'var(--color-text)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
            {data.intro.headline}
          </h1>
          <p className="fade-up" style={{ color: 'rgba(30,41,59,0.78)', maxWidth: '680px', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '14px' }}>
            {data.intro.description}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label fade-in">{data.labels.foundedLabel}</div>
            <h2 className="section-title fade-up">{data.labels.journeyTitle}</h2>
          </div>
          <div className="about-timeline">
            {data.timeline.map((item, i) => (
              <div key={i} className={`atl-item fade-up${i % 2 === 0 ? ' atl-left' : ' atl-right'}`}>
                <div className="atl-year">{item.year}</div>
                <div className="atl-connector">
                  <div className="atl-dot" />
                </div>
                <div className="atl-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label fade-in">{data.labels.philosophyLabel}</div>
            <h2 className="section-title fade-up">{data.organic.title}</h2>
            <p className="section-subtitle fade-up">{data.organic.description}</p>
          </div>
          <div className="grid-3">
            {data.organic.pillars.map((p, i) => (
              <div key={i} className="organic-pillar fade-up" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="pillar-bar" />
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container company-basics">
          <div className="cb-text fade-up">
            <div className="section-label">{data.labels.companyBasicsLabel}</div>
            <h2 className="section-title" style={{ marginTop: '10px' }}>{data.companyBasics.title}</h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginTop: '14px' }}>
              {data.companyBasics.body}
            </p>
            <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn-primary">{data.labels.exploreProducts}</Link>
              <Link to="/services" className="btn-secondary">{data.labels.ourServices}</Link>
            </div>
          </div>
          <div className="cb-img fade-in">
            <img src="/logo.jpeg" alt="RAJ Agro" />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="testimonial-block fade-up">
            <div className="testimonial-quote">"</div>
            <blockquote>
              <p className="testimonial-main">{data.testimonial.quote}</p>
              <p className="testimonial-extended">{data.testimonial.extended}</p>
              <footer className="testimonial-footer">
                <strong>{data.testimonial.name}</strong>
                <span>{data.testimonial.location}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
