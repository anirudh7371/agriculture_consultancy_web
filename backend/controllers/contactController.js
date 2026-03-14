import transporter, { isMailerConfigured } from '../config/mailer.js';

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 20;
const MAX_SUBJECT_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2000;
const PUBLIC_CONTACT_EMAIL = process.env.EMAIL_TO || 'agriconnects1729@gmail.com';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+()\-\s]{7,20}$/;

const normalizeText = (value, maxLength) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
};

const normalizeMessage = (value) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().replace(/\r\n/g, '\n').slice(0, MAX_MESSAGE_LENGTH);
};

const escapeHtml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const formatOptionalRow = (label, value) => {
  if (!value) {
    return '';
  }

  return `<tr><td style="padding: 8px 0; color: #555; font-weight: bold;">${label}:</td><td style="padding: 8px 0; color: #222;">${escapeHtml(value)}</td></tr>`;
};

export const getContactInfo = (req, res) => {
  const isHindi = req.query.lang === 'hi';

  const contactInfo = {
    status: 'success',
    data: {
      heading: isHindi ? 'संपर्क करें' : 'Contact Us',
      subheading: isHindi
        ? 'कंसल्टेंसी, ट्रेनिंग पूछताछ, उत्पाद ऑर्डर या सामान्य जानकारी के लिए हमसे संपर्क करें।'
        : 'Reach out to us for consultancy, training enquiries, product orders, or general information.',
      details: {
        address: 'RAJ Agro Farming Training & Consultancy Services, Patna, Bihar, India',
        email: 'agriconnects1729@gmail.com',
        workingHours: isHindi ? 'सोमवार - शनिवार, सुबह 9:00 बजे - शाम 6:00 बजे (IST)' : 'Monday - Saturday, 9:00 AM - 6:00 PM IST',
      },
      socials: [
        { platform: 'Facebook', url: '#', icon: 'facebook' },
        { platform: 'Instagram', url: '#', icon: 'instagram' },
        { platform: 'YouTube', url: '#', icon: 'youtube' },
      ]
    }
  };
  res.status(200).json(contactInfo);
};

export const submitContactForm = async (req, res) => {
  const name = normalizeText(req.body?.name, MAX_NAME_LENGTH);
  const email = normalizeText(req.body?.email, MAX_EMAIL_LENGTH).toLowerCase();
  const phone = normalizeText(req.body?.phone, MAX_PHONE_LENGTH);
  const subject = normalizeText(req.body?.subject, MAX_SUBJECT_LENGTH);
  const message = normalizeMessage(req.body?.message);

  if (!name || !email || !message) {
    return res.status(422).json({
      status: 'error',
      message: 'Name, email, and message are required fields.'
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(422).json({
      status: 'error',
      message: 'Please provide a valid email address.'
    });
  }

  if (phone && !phoneRegex.test(phone)) {
    return res.status(422).json({
      status: 'error',
      message: 'Please provide a valid phone number.'
    });
  }

  if (!isMailerConfigured || !transporter) {
    return res.status(503).json({
      status: 'error',
      message: `Email service is currently unavailable. Please contact us directly at ${PUBLIC_CONTACT_EMAIL}.`
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : '';
  const safeSubject = subject ? escapeHtml(subject) : '';
  const safeMessage = escapeHtml(message);
  const subjectLine = subject
    ? `[RAJ Agro Enquiry] ${subject}`
    : '[RAJ Agro Enquiry] New Contact Form Submission';

  const mailOptions = {
    from: `"RAJ Agro Contact Form" <${process.env.EMAIL_USER}>`,
    to: PUBLIC_CONTACT_EMAIL,
    replyTo: email,
    subject: subjectLine,
    text: [
      'New Contact Enquiry - RAJ Agro',
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      subject ? `Subject: ${subject}` : null,
      '',
      'Message:',
      message,
    ].filter(Boolean).join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background: #2d6a4f; padding: 20px; border-radius: 6px 6px 0 0;">
          <h2 style="color: #ffffff; margin: 0;">New Contact Enquiry - RAJ Agro</h2>
        </div>
        <div style="padding: 24px; background: #f8f9f5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #555; font-weight: bold; width: 120px;">Name:</td><td style="padding: 8px 0; color: #222;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #222;"><a href="mailto:${safeEmail}" style="color: #2d6a4f;">${safeEmail}</a></td></tr>
            ${formatOptionalRow('Phone', safePhone)}
            ${formatOptionalRow('Subject', safeSubject)}
          </table>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
          <h4 style="color: #2d6a4f; margin-bottom: 8px;">Message:</h4>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
        </div>
        <div style="padding: 12px 24px; background: #eee; border-radius: 0 0 6px 6px; font-size: 12px; color: #888;">
          This message was sent via the RAJ Agro website contact form.
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(201).json({
      status: 'success',
      message: 'Your message has been sent successfully! We will get back to you within 24-48 hours.'
    });
  } catch (error) {
    console.error('Email send error:', error.message);
    return res.status(500).json({
      status: 'error',
      message: `Unable to send your message right now. Please try emailing us directly at ${PUBLIC_CONTACT_EMAIL}.`
    });
  }
};
