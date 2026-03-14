import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import './Navbar.css';

const navLabels = {
  en: {
    home: 'Home',
    about: 'About',
    team: 'Our Team',
    products: 'Products',
    services: 'Consulting Services',
    careers: 'Careers',
    contact: 'Contact Us',
    subtitle: 'Farming & Consultancy',
    toggle: 'Toggle navigation menu',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    team: 'हमारी टीम',
    products: 'उत्पाद',
    services: 'कंसल्टेंसी सेवाएं',
    careers: 'करियर',
    contact: 'संपर्क करें',
    subtitle: 'फार्मिंग और कंसल्टेंसी',
    toggle: 'नेविगेशन मेनू खोलें/बंद करें',
  },
};

export function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPathname, setMenuPathname] = useState(null);
  const location = useLocation();
  const { language, setLanguage, isHindi } = useLanguage();
  const isMenuOpen = isOpen && menuPathname === location.pathname;

  const t = navLabels[language];

  const navLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'team', path: '/team' },
    { key: 'products', path: '/products' },
    { key: 'services', path: '/services' },
    { key: 'careers', path: '/careers' },
    { key: 'contact', path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 960) {
        setIsOpen(false);
        setMenuPathname(null);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const nextOpen = !prev || menuPathname !== location.pathname;

      if (nextOpen) {
        setMenuPathname(location.pathname);
        return true;
      }

      setMenuPathname(null);
      return false;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMenuPathname(null);
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="site-nav">
          <Link className="brand" to="/">
            <img src="/logo.jpeg" alt="RAJ Agro Logo" className="brand-logo" />
            <div className="brand-text">
              RAJ Agro
              <span className="brand-subtitle">{t.subtitle}</span>
            </div>
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
              >
                {t[link.key]}
              </Link>
            ))}
          </div>

          <div className="lang-switch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-btn${!isHindi ? ' active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn${isHindi ? ' active' : ''}`}
              onClick={() => setLanguage('hi')}
            >
              हिन्दी
            </button>
          </div>

          <button
            type="button"
            className={`mobile-toggle${isMenuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={t.toggle}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-inner">
          <div className="mobile-brand">
            <img src="/logo.jpeg" alt="RAJ Agro Logo" />
            <span>RAJ Agro</span>
          </div>

          <div className="lang-switch mobile-lang-switch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-btn${!isHindi ? ' active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn${isHindi ? ' active' : ''}`}
              onClick={() => setLanguage('hi')}
            >
              हिन्दी
            </button>
          </div>

          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                onClick={closeMenu}
                className={`mobile-nav-link${location.pathname === link.path ? ' active' : ''}`}
              >
                {t[link.key]}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu} />
      )}
    </>
  );
}
