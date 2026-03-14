import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import api from '../config/api';
import { useLanguage } from '../context/useLanguage';
import './Services.css';

const Services = () => {
  const [data, setData] = useState(null);
  const { language, isHindi } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    api.getServicesData(language)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [language]);

  if (!data) return (
    <div className="page-loader"><div className="spinner" /><p>Loading…</p></div>
  );

  return (
    <div className="page-services">
      <section className="page-hero section-dark">
        <div className="container page-hero-inner">
          <div className="section-label fade-in" style={{ color: 'var(--color-primary)' }}>{isHindi ? 'विशेषज्ञ मार्गदर्शन' : 'Expert Guidance'}</div>
          <h1 className="fade-up" style={{ color: 'var(--color-text)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
            {data.heading}
          </h1>
          <p className="fade-up" style={{ color: 'rgba(30,41,59,0.78)', maxWidth: '680px', fontSize: '1.05rem', marginTop: '14px', lineHeight: '1.7' }}>
            {data.subheading}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {data.services.map((svc, i) => (
              <div key={svc.id} className="service-card fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="card-mail-action">
                  <a
                    href={`mailto:agriconnects1729@gmail.com?subject=${encodeURIComponent(`Service:- ${svc.title}`)}`}
                    className="card-mail-btn"
                    aria-label={isHindi ? `${svc.title} के लिए ईमेल करें` : `Email for ${svc.title}`}
                    title={isHindi ? 'ईमेल करें' : 'Email'}
                  >
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
                {svc.image && (
                  <div className="svc-image-wrap">
                    <img src={svc.image} alt={svc.title} className="svc-image" />
                  </div>
                )}
                <div className="svc-icon"><i className={svc.icon} aria-hidden="true"></i></div>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.description}</p>

                <ul className="svc-features">
                  {svc.features.map((f, j) => (
                    <li key={j}><i className="fa-solid fa-check check" aria-hidden="true"></i>{f}</li>
                  ))}
                </ul>

                <div className="svc-meta">
                  <span className="svc-meta-chip"><i className="fa-solid fa-stopwatch" aria-hidden="true"></i> {svc.duration}</span>
                  <span className="svc-meta-chip"><i className="fa-solid fa-location-dot" aria-hidden="true"></i> {svc.mode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container service-cta fade-up">
          <h2>{data.cta.title}</h2>
          <p>{data.cta.description}</p>
          <Link to={data.cta.link} className="btn-primary" style={{ marginTop: '20px' }}>{data.cta.buttonText}</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
