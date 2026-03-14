import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import api from '../config/api';
import { useLanguage } from '../context/useLanguage';
import './Team.css';

const Team = () => {
  const [data, setData] = useState(null);
  const { language, isHindi } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    api.getTeamData(language)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [language]);

  if (!data) return (
    <div className="page-loader"><div className="spinner" /><p>Loading…</p></div>
  );

  return (
    <div className="page-team">
      <section className="page-hero section-dark">
        <div className="container page-hero-inner">
          <div className="section-label fade-in" style={{ color: 'var(--color-primary)' }}>{isHindi ? 'विशेषज्ञों से मिलें' : 'Meet The Experts'}</div>
          <h1 className="fade-up" style={{ color: 'var(--color-text)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
            {data.heading}
          </h1>
          <p className="fade-up" style={{ color: 'rgba(30,41,59,0.78)', maxWidth: '600px', fontSize: '1.05rem', marginTop: '14px', lineHeight: '1.7' }}>
            {data.subheading}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {data.members.map((member, i) => (
              <div key={member.id} className="team-card fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} className="team-img" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                  {member.expertise && (
                    <div className="team-expertise">
                      {member.expertise.map((skill, j) => (
                        <span key={j} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container join-cta fade-up">
          <h2>{data.joinCta.title}</h2>
          <p>{data.joinCta.description}</p>
          <Link to={data.joinCta.link} className="btn-primary" style={{ marginTop: '20px' }}>
            {data.joinCta.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
