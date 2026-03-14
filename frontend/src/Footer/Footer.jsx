import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/useLanguage';
import './Footer.css';

export const Footer = () => {
  const year = new Date().getFullYear();
  const { isHindi } = useLanguage();

  const t = {
    brandTagline: isHindi ? 'फार्मिंग और कंसल्टेंसी' : 'Farming & Consultancy',
    about: isHindi
      ? 'वैज्ञानिक प्रशिक्षण और टिकाऊ खेती समाधानों के माध्यम से कृषि को अवसर में बदलना। 2010 से पटना, बिहार में आधारित।'
      : 'Transforming Agriculture into Opportunity through Scientific Training and Sustainable Farming Solutions. Based in Patna, Bihar since 2010.',
    companyTitle: isHindi ? 'कंपनी' : 'Company',
    offeringsTitle: isHindi ? 'हमारी सेवाएं और उत्पाद' : 'Our Offerings',
    stayConnected: isHindi ? 'जुड़े रहें' : 'Stay Connected',
    updatesText: isHindi
      ? 'प्रशिक्षण कार्यक्रमों, नए उत्पादों और कृषि समाचारों की जानकारी प्राप्त करें।'
      : 'Get updates on training programs, new products, and agri news.',
    getInTouch: isHindi ? 'संपर्क करें →' : 'Get in Touch →',
    organic: isHindi ? 'जैविक' : 'Organic',
    certified: isHindi ? 'प्रमाणित' : 'Certified',
    sustainable: isHindi ? 'टिकाऊ' : 'Sustainable',
    rightsReserved: isHindi ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.',
    madeForFarmers: isHindi ? 'भारत के किसानों के लिए समर्पित' : "Made with for India's farmers",
  };

  const links = {
    company: [
      { name: isHindi ? 'होम' : 'Home', path: '/' },
      { name: isHindi ? 'हमारे बारे में' : 'About Us', path: '/about' },
      { name: isHindi ? 'हमारी टीम' : 'Our Team', path: '/team' },
      { name: isHindi ? 'करियर' : 'Careers', path: '/careers' },
    ],
    offerings: [
      { name: isHindi ? 'उत्पाद' : 'Products', path: '/products' },
      { name: isHindi ? 'कंसल्टेंसी सेवाएं' : 'Consulting Services', path: '/services' },
      { name: isHindi ? 'संपर्क करें' : 'Contact Us', path: '/contact' },
    ]
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src="/logo.jpeg" alt="RAJ Agro Logo" className="footer-logo" />
              <div className="footer-brand-text">
                <span className="footer-brand-name">RAJ Agro</span>
                <span className="footer-brand-tagline">{t.brandTagline}</span>
              </div>
            </Link>
            <p className="footer-about">
              {t.about}
            </p>
            <div className="footer-contact-quick">
              <a href="mailto:agriconnects1729@gmail.com" className="footer-email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>agriconnects1729@gmail.com
              </a>
              <span className="footer-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>Patna, Bihar, India
              </span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>{t.companyTitle}</h4>
            <ul>
              {links.company.map(link => (
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t.offeringsTitle}</h4>
            <ul>
              {links.offerings.map(link => (
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-cta-col">
            <h4>{t.stayConnected}</h4>
            <p>{t.updatesText}</p>
            <Link to="/contact" className="footer-cta-btn">
              {t.getInTouch}
            </Link>
            <div className="footer-badges">
              <span className="footer-badge"><i className="fa-solid fa-leaf" aria-hidden="true"></i> {t.organic}</span>
              <span className="footer-badge"><i className="fa-solid fa-circle-check" aria-hidden="true"></i> {t.certified}</span>
              <span className="footer-badge"><i className="fa-solid fa-seedling" aria-hidden="true"></i> {t.sustainable}</span>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} RAJ Agro Farming Training &amp; Consultancy Services, Patna. {t.rightsReserved}</p>
          <p className="footer-bottom-right">{isHindi ? 'समर्पण के साथ' : 'Made with'} <i className="fa-solid fa-leaf" aria-hidden="true"></i> {isHindi ? 'भारत के किसानों के लिए' : "for India's farmers"}</p>
        </div>
      </div>
    </footer>
  );
};
