import nodemailer from 'nodemailer';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn(
      'Email service not configured: missing EMAIL_USER or EMAIL_PASS'
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },

    // Important for Render
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,

    logger: true,
    debug: true,
  });

  console.log('Gmail SMTP transporter created');

  return transporter;
}

export async function sendEmail({ to, subject, html, text }) {
  const transport = getTransporter();

  if (!transport) {
    return {
      ok: false,
      skipped: true,
      reason: 'Email service not configured',
    };
  }

  try {
    console.log('Attempting to send email to:', to);

    const info = await transport.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      text,
    });

    console.log('Email sent successfully:', info.messageId);

    return {
      ok: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Email send failed:', error);

    transporter = null;

    return {
      ok: false,
      error: error.message,
      code: error.code || null,
      command: error.command || null,
    };
  }
}

export default { sendEmail };