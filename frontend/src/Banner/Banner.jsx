import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { api } from '../config/api';
import { useLanguage } from '../context/useLanguage';

export const Banner = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sliderImages, setSliderImages] = useState([]);
  const [events, setEvents] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [labels, setLabels] = useState({});
  const { language } = useLanguage();

  useEffect(() => {
    const loadBannerData = async () => {
      try {
        const response = await api.getHomeBannerData(language);
        const data = response?.data || {};
        const nextSliderImages = Array.isArray(data.sliderImages) ? data.sliderImages : [];

        setSliderImages(nextSliderImages);
        setEvents(Array.isArray(data.events) ? data.events : []);
        setHighlights(Array.isArray(data.highlights) ? data.highlights : []);
        setLabels(data.labels || {});
        setCurrentIdx((prev) => (nextSliderImages.length ? prev % nextSliderImages.length : 0));
      } catch (error) {
        console.error('Failed to load banner data:', error);
      }
    };

    loadBannerData();
  }, [language]);

  useEffect(() => {
    if (!sliderImages.length) return undefined;

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages]);

  const safeCurrentIdx = sliderImages.length ? currentIdx % sliderImages.length : 0;

  const goPrev = () => {
    if (!sliderImages.length) {
      return;
    }

    setCurrentIdx((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goNext = () => {
    if (!sliderImages.length) {
      return;
    }

    setCurrentIdx((prev) => (prev + 1) % sliderImages.length);
  };

  const currentSlide = sliderImages[safeCurrentIdx];

  return (
    <div className="banner-section">
      <div className="banner-wrapper">
        <aside className="banner-card events-card">
          <div className="card-tag-label">
            <span className="tag-dot" />
            {labels.latestEvents || 'Latest Events'}
          </div>
          <div className="events-scroll-container">
            <div className="events-track">
              {[...events, ...events].map((event, i) => (
                <div key={i} className="event-item">
                  <span className="event-bullet">›</span>
                  <p>{event}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="slider-container">
          {sliderImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.caption}
              className={`slider-img${idx === safeCurrentIdx ? ' active' : ''}`}
              style={{ objectPosition: img.position || 'center center' }}
            />
          ))}

          <div className="slider-overlay" aria-hidden="true" />

          {currentSlide && (
            <div className="slider-caption">
              <h3>{currentSlide.caption}</h3>
              <p>{currentSlide.sub}</p>
            </div>
          )}

          <div className="slider-controls">
            <button type="button" className="slider-nav prev" onClick={goPrev} aria-label={labels.prevSlide || 'Previous slide'}>
              <i className="fa-solid fa-chevron-left" aria-hidden="true" />
            </button>
            <button type="button" className="slider-nav next" onClick={goNext} aria-label={labels.nextSlide || 'Next slide'}>
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            </button>
          </div>

          <div className="slider-dots">
            {sliderImages.map((_, idx) => (
              <button
                type="button"
                key={idx}
                className={`dot${idx === safeCurrentIdx ? ' active' : ''}`}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`${labels.goToSlide || 'Go to slide'} ${idx + 1}`}
              />
            ))}
          </div>

          <div className="slider-progress" role="presentation">
            <span key={safeCurrentIdx} className="slider-progress-bar" />
          </div>
        </main>

        <aside className="banner-card highlights-card">
          <div className="card-tag-label">
            <span className="tag-dot" />
            {labels.highlights || 'Highlights'}
          </div>
          <div className="highlights-list">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-item">
                <span className="highlight-icon"><i className={h.icon} aria-hidden="true"></i></span>
                <div>
                  <div className="highlight-value">{h.value}</div>
                  <div className="highlight-label">{h.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="highlights-cta">
            <Link to="/about" className="highlight-link">{labels.ourHistory || 'Our History →'}</Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
