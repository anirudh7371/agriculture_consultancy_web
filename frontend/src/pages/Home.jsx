import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { Banner } from '../Banner/Banner';
import useScrollReveal from '../hooks/useScrollReveal';
import api from '../config/api';
import { useLanguage } from '../context/useLanguage';
import '../App.css';
import './Home.css';

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const { language } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    api.getHomeData(language)
      .then(res => setHomeData(res.data))
      .catch(console.error);
  }, [language]);

  const partners = homeData?.partners || [];
  const carouselPartners = partners.length
    ? Array.from({ length: Math.max(8, partners.length * 4) }, (_, i) => partners[i % partners.length])
    : [];

  const labels = homeData?.labels || {};

  return (
    <div className="page-home">
      <Hero heroData={homeData?.hero} />
      <Banner />
      {homeData?.highlights && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <div className="section-label fade-in">{labels.whatWeDo || 'What We Do'}</div>
              <h2 className="section-title fade-up">{labels.coreStrengths || 'Our Core Strengths'}</h2>
              <p className="section-subtitle fade-up">{labels.coreStrengthsSub || 'Driving sustainable agriculture through science, training, and authentic organic products.'}</p>
            </div>
            <div className="grid-4">
              {homeData.highlights.map((h, i) => (
                <div key={i} className="highlight-box fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="hb-icon"><i className={h.icon} aria-hidden="true"></i></div>
                  <h3 className="hb-title">{h.title}</h3>
                  <p className="hb-desc">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {homeData?.history && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-label fade-in">{labels.ourJourney || 'Our Journey'}</div>
              <h2 className="section-title fade-up">{labels.ourHistory || 'Our History'}</h2>
              <p className="section-subtitle fade-up">
                {labels.historySub || "RAJ MUSHROOM is a consortium of RAJ AGRO FARMING TRAINING AND CONSULTANCY SERVICES PATNA — here's how it all began."}
              </p>
            </div>
            <div className="timeline">
              {homeData.history.map((item, i) => (
                <div key={i} className={`timeline-item fade-up${i % 2 === 0 ? ' timeline-left' : ' timeline-right'}`}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                  <div className="timeline-dot" />
                </div>
              ))}
            </div>

            {partners.length > 0 && (
              <div className="partners-showcase fade-up">
                <div className="partners-head">
                  <h3 className="partners-title">{labels.partnerNetwork || 'Our Partner Network'}</h3>
                  <p className="partners-subtitle">{labels.partnerSub || 'Trusted collaboration that drives sustainable agriculture forward.'}</p>
                </div>
                <div className="partners-carousel" aria-label="Our partner logos">
                  <div className="partners-track">
                    {[0, 1].map((groupIndex) => (
                      <div className="partners-group" key={`group-${groupIndex}`} aria-hidden={groupIndex === 1}>
                        {carouselPartners.map((partner, i) => (
                          <article key={`${partner.name}-${groupIndex}-${i}`} className="partner-card">
                            {partner.website ? (
                              <a href={partner.website} target="_blank" rel="noopener noreferrer" className="partner-card-link" aria-label={`Visit ${partner.name} website`}>
                                <div className="partner-logo-wrap">
                                  <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
                                </div>
                                <span className="partner-name">{partner.name}</span>
                              </a>
                            ) : (
                              <>
                                <div className="partner-logo-wrap">
                                  <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
                                </div>
                                <span className="partner-name">{partner.name}</span>
                              </>
                            )}
                          </article>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {homeData?.aboutPreview && (
        <section className="section section-dark">
          <div className="container about-preview">
            <div className="about-preview-img-wrap fade-in">
              <img src={homeData.aboutPreview.image} alt="RAJ Agro Logo" className="about-preview-img" />
            </div>
            <div className="about-preview-text fade-up">
              <div className="section-label" style={{ color: 'var(--color-primary)' }}>{labels.aboutUs || 'About Us'}</div>
              <h2 className="section-title" style={{ color: 'var(--color-text)', marginTop: '10px' }}>
                {homeData.aboutPreview.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(30,41,59,0.8)', lineHeight: '1.7', marginBottom: '28px' }}>
                {homeData.aboutPreview.description}
              </p>
              <Link to="/about" className="btn-accent">{labels.fullStory || 'Read Our Full Story →'}</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section home-cta-section">
        <div className="container home-cta">
          <div className="home-cta-text fade-up">
            <h2>{labels.readyTransform || 'Ready to Transform Your Farm?'}</h2>
            <p>{labels.readyTransformSub || 'Get expert guidance on organic farming, bio-inputs, and agri-entrepreneurship.'}</p>
          </div>
          <div className="home-cta-actions fade-up">
            <Link to="/services" className="btn-primary">{labels.viewAllServices || 'View All Services'}</Link>
            <Link to="/contact" className="btn-accent">{labels.contactToday || 'Contact Us Today'}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
