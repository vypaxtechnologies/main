import nodemailer from 'nodemailer';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn('Email service not configured: missing EMAIL_USER or EMAIL_PASS');
    return null;
  }

  // Try multiple SMTP configurations for reliability
  const configs = [
    // Option 1: Explicit SMTP with TLS (port 587)
    {
      host: EMAIL_HOST || 'smtp.gmail.com',
      port: Number(EMAIL_PORT) || 587,
      secure: false,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    },
    // Option 2: Implicit TLS (port 465)
    {
      host: EMAIL_HOST || 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    },
    // Option 3: Service shortcut
    {
      service: EMAIL_SERVICE || 'gmail',
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    },
  ];

  for (const cfg of configs) {
    try {
      const t = nodemailer.createTransport(cfg);
      transporter = t;
      console.log(`Email transporter created with config: ${cfg.service || `${cfg.host}:${cfg.port}`}`);
      return transporter;
    } catch (e) {
      console.warn(`Email config failed: ${cfg.service || `${cfg.host}:${cfg.port}`}`, e.message);
    }
  }
  return null;
}

export async function sendEmail({ to, subject, html, text }) {
  const transport = getTransporter();
  if (!transport) {
    return { ok: false, skipped: true, reason: 'Email service not configured' };
  }
  try {
    const info = await transport.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      text,
    });
    return { ok: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email send failed:', error.message);
    // Reset transporter on auth failure so next call can retry with a different config
    if (error.message.includes('Invalid login') || error.message.includes('Authentication')) {
      transporter = null;
    }
    return { ok: false, error: error.message };
  }
}

export default { sendEmail };