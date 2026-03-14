import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import api from '../config/api';
import { useLanguage } from '../context/useLanguage';
import './Products.css';

const Products = () => {
  const [data, setData] = useState(null);
  const { language, isHindi } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    api.getProductsData(language)
      .then(res => setData(res.data))
      .catch(console.error);
  }, [language]);

  if (!data) return (
    <div className="page-loader"><div className="spinner" /><p>Loading…</p></div>
  );

  return (
    <div className="page-products">
      <section className="page-hero section-dark">
        <div className="container page-hero-inner">
          <div className="section-label fade-in" style={{ color: 'var(--color-primary)' }}>{isHindi ? 'हमारे उत्पाद' : 'Our Products'}</div>
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
          <div className="products-grid">
            {data.categories.map((cat, i) => (
              <div key={cat.id} className="product-card fade-up" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="card-mail-action">
                  <a
                    href={`mailto:agriconnects1729@gmail.com?subject=${encodeURIComponent(`Product:- ${cat.title}`)}`}
                    className="card-mail-btn"
                    aria-label={isHindi ? `${cat.title} के लिए ईमेल करें` : `Email for ${cat.title}`}
                    title={isHindi ? 'ईमेल करें' : 'Email'}
                  >
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
                {cat.image && (
                  <div className="product-image-wrap">
                    <img src={cat.image} alt={cat.title} className="product-image" />
                  </div>
                )}
                <div className="product-card-top">
                  <div className="product-icon-wrap">
                    <span className="product-icon"><i className={cat.icon} aria-hidden="true"></i></span>
                  </div>
                  <div className="product-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h2 className="product-title">{cat.title}</h2>
                      {cat.tag && <span className="tag">{cat.tag}</span>}
                    </div>
                    <p className="product-desc">{cat.description}</p>
                  </div>
                </div>

                <div className="product-items">
                  <h4>{isHindi ? 'मुख्य उत्पाद' : 'Key Products'}</h4>
                  <ul>
                    {cat.products.map((p, j) => (
                      <li key={j}>
                        <span className="product-name">{p.name}</span>
                        <span className="product-use">{p.use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {cat.highlights?.length > 0 && (
                  <div className="product-highlights">
                    {cat.highlights.map((h, j) => (
                      <span key={j} className="ph-badge"><i className="fa-solid fa-check" aria-hidden="true"></i> {h}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container product-cta fade-up">
          <h2>{data.cta.title}</h2>
          <p>{data.cta.description}</p>
          <Link to={data.cta.link} className="btn-primary" style={{ marginTop: '20px' }}>{data.cta.buttonText}</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
