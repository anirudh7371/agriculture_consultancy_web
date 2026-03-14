import React, { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import api from '../config/api';
import { useLanguage } from '../context/useLanguage';
import './Careers.css';

const Careers = () => {
  const [data, setData] = useState(null);
  const { language, isHindi } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    api.getCareersData(language)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [language]);

  if (!data) return (
    <div className="page-loader"><div className="spinner" /><p>Loading…</p></div>
  );

  return (
    <div className="page-careers">
      <section className="page-hero section-dark">
        <div className="container page-hero-inner">
          <div className="section-label fade-in" style={{ color: 'var(--color-primary)' }}>{isHindi ? 'हमारे मिशन से जुड़ें' : 'Join Our Mission'}</div>
          <h1 className="fade-up" style={{ color: 'var(--color-text)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
            {data.heading}
          </h1>
          <p className="fade-up" style={{ color: 'rgba(30,41,59,0.78)', maxWidth: '680px', fontSize: '1.05rem', marginTop: '14px', lineHeight: '1.7' }}>
            {data.subheading}
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label fade-in">{data.culture.cultureLabel}</div>
            <h2 className="section-title fade-up">{data.culture.title}</h2>
          </div>
          <div className="grid-4">
            {data.culture.points.map((p, i) => (
              <div key={i} className="culture-card fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="culture-icon"><i className={p.icon} aria-hidden="true"></i></div>
                <h3 className="culture-title">{p.title}</h3>
                <p className="culture-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container careers-cta fade-up">
          <h2>{data.applicationCta.title}</h2>
          <p>{data.applicationCta.description}</p>
          <a href={`mailto:${data.applicationCta.email}?subject=Career Enquiry`} className="btn-accent" style={{ marginTop: '24px' }}>
            {data.applicationCta.buttonText}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
