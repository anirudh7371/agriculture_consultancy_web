import React, { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import Toast from '../components/ui/Toast';
import '../components/ui/Toast.css';
import api from '../config/api';
import { useLanguage } from '../context/useLanguage';
import './Contact.css';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const { language, isHindi } = useLanguage();
  const formText = isHindi
    ? {
        infoHeading: 'संपर्क जानकारी',
        address: 'पता',
        email: 'ईमेल',
        workingHours: 'कार्य समय',
        mapLabel: 'RAJ Agro लोकेशन मैप',
        mapTitle: 'पटना में RAJ Agro लोकेशन',
        formHeading: 'हमें संदेश भेजें',
        fullName: 'पूरा नाम',
        emailAddress: 'ईमेल पता',
        phoneNumber: 'फोन नंबर',
        subject: 'विषय',
        message: 'संदेश',
        namePlaceholder: 'अपना पूरा नाम लिखें',
        emailPlaceholder: 'you@example.com',
        phonePlaceholder: '+91 XXXXX XXXXX',
        subjectPlaceholder: 'जैसे: ट्रेनिंग पूछताछ',
        messagePlaceholder: 'बताइए हम आपकी कैसे सहायता कर सकते हैं…',
        sending: 'भेजा जा रहा है…',
        send: 'संदेश भेजें →',
        submitError: 'संदेश भेजा नहीं जा सका। कृपया दोबारा प्रयास करें।',
      }
    : {
        infoHeading: 'Contact Information',
        address: 'Address',
        email: 'Email',
        workingHours: 'Working Hours',
        mapLabel: 'RAJ Agro location map',
        mapTitle: 'RAJ Agro location in Patna',
        formHeading: 'Send Us a Message',
        fullName: 'Full Name',
        emailAddress: 'Email Address',
        phoneNumber: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Your full name',
        emailPlaceholder: 'you@example.com',
        phonePlaceholder: '+91 XXXXX XXXXX',
        subjectPlaceholder: 'e.g., Training Enquiry',
        messagePlaceholder: 'Tell us how we can help you…',
        sending: 'Sending…',
        send: 'Send Message →',
        submitError: 'Failed to send message. Please try again.',
      };
  useScrollReveal();

  useEffect(() => {
    api.getContactInfo(language)
      .then(res => setContactInfo(res.data))
      .catch(console.error);
  }, [language]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const result = await api.submitContactForm(form, language);
      setToast({ message: result.message, type: 'success' });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setToast({ message: err.message || formText.submitError, type: 'error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-contact">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section className="page-hero section-dark">
        <div className="container page-hero-inner">
          <div className="section-label fade-in" style={{ color: 'var(--color-primary)' }}>{isHindi ? 'संपर्क करें' : 'Get In Touch'}</div>
          <h1 className="fade-up" style={{ color: 'var(--color-text)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
            {contactInfo?.heading || 'Contact Us'}
          </h1>
          <p className="fade-up" style={{ color: 'rgba(30,41,59,0.78)', maxWidth: '640px', fontSize: '1.05rem', marginTop: '14px', lineHeight: '1.7' }}>
            {contactInfo?.subheading || 'Reach out to us for consultancy, training enquiries, or product information.'}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info fade-up">
            <h2 className="ci-heading">{formText.infoHeading}</h2>

            {contactInfo?.details && (
              <div className="ci-details">
                <div className="ci-item">
                  <span className="ci-icon"><i className="fa-solid fa-location-dot" aria-hidden="true"></i></span>
                  <div>
                    <h4>{formText.address}</h4>
                    <p>{contactInfo.details.address}</p>
                  </div>
                </div>
                <div className="ci-item">
                  <span className="ci-icon"><i className="fa-solid fa-envelope" aria-hidden="true"></i></span>
                  <div>
                    <h4>{formText.email}</h4>
                    <a href={`mailto:${contactInfo.details.email}`}>{contactInfo.details.email}</a>
                  </div>
                </div>
                <div className="ci-item">
                  <span className="ci-icon"><i className="fa-solid fa-clock" aria-hidden="true"></i></span>
                  <div>
                    <h4>{formText.workingHours}</h4>
                    <p>{contactInfo.details.workingHours}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="ci-map-card" role="region" aria-label={formText.mapLabel}>
              <iframe
                title={formText.mapTitle}
                src="https://www.google.com/maps?q=25.5969451,85.0726433&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="ci-map-caption">
                <span><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Patna, Bihar, India</span>
                <p>RAJ Agro Farming Training &amp; Consultancy Services</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap scale-in">
            <h2 className="cf-heading">{formText.formHeading}</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{formText.fullName} <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={formText.namePlaceholder}
                    autoComplete="name"
                    maxLength={80}
                    required
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{formText.emailAddress} <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={formText.emailPlaceholder}
                    autoComplete="email"
                    maxLength={254}
                    required
                    disabled={sending}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{formText.phoneNumber}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={formText.phonePlaceholder}
                    autoComplete="tel"
                    maxLength={20}
                    disabled={sending}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{formText.subject}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={formText.subjectPlaceholder}
                    maxLength={120}
                    disabled={sending}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{formText.message} <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={formText.messagePlaceholder}
                  rows={5}
                  maxLength={2000}
                  required
                  disabled={sending}
                />
              </div>

              <button type="submit" className="btn-primary cf-submit" disabled={sending}>
                {sending ? (
                  <>
                    <span className="btn-spinner" />
                    {formText.sending}
                  </>
                ) : (
                  formText.send
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
