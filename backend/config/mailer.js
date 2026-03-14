import nodemailer from 'nodemailer';

const { EMAIL_USER, EMAIL_PASS } = process.env;

const isMailerConfigured = Boolean(EMAIL_USER && EMAIL_PASS);

const transporter = isMailerConfigured
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })
  : null;

if (transporter) {
  transporter.verify((error) => {
    if (error) {
      console.warn('Email transporter verification failed:', error.message);
      return;
    }

    console.log('Email transporter ready');
  });
} else {
  console.warn('Email transporter disabled: missing EMAIL_USER or EMAIL_PASS');
}

export { isMailerConfigured };
export default transporter;
