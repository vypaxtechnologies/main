import { Router } from 'express';
import ContactSubmission from '../models/ContactSubmission.js';
import { sendEmail } from '../lib/email.js';

const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER;
  const { name, email, phone, company, service, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return res.status(400).json({ message: 'Name, email, phone, and message are required.' });
  }

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  try {
    if (!req.app.locals.mongoConnected) {
      return res.status(503).json({ message: 'Contact service is not connected to the database yet.' });
    }

    const submission = await ContactSubmission.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : '',
      service: service ? service.trim() : '',
      message: message.trim(),
    });

    sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `New contact form message from ${name.trim()}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone ? phone.trim() : 'N/A'}</p>
        <p><strong>Company:</strong> ${company ? company.trim() : 'N/A'}</p>
        <p><strong>Service:</strong> ${service ? service.trim() : 'N/A'}</p>
        <p><strong>Message:</strong> ${message.trim()}</p>
      `,
      text: `New contact form submission\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone ? phone.trim() : 'N/A'}\nCompany: ${company ? company.trim() : 'N/A'}\nService: ${service ? service.trim() : 'N/A'}\nMessage: ${message.trim()}`,
    }).then(result => {
  console.log('Notification email result:', result);
}).catch(error => {
  console.error('Notification email error:', error);
});

    sendEmail({
      to: email.trim(),
      subject: 'Thank you for contacting Vypax Technologies',
      html: `
        <p>Hi ${name.trim()},</p>
        <p>Thank you for reaching out to Vypax Technologies. We have received your message and our team will get back to you shortly.</p>
        <p>Best regards,<br>Vypax Technologies Team</p>
      `,
      text: `Hi ${name.trim()},\n\nThank you for reaching out to Vypax Technologies. We have received your message and our team will get back to you shortly.\n\nBest regards,\nVypax Technologies Team`,
    }).then(result => {
  console.log('Customer email result:', result);
}).catch(error => {
  console.error('Customer email error:', error);
});

    return res.status(201).json({
      id: submission.id,
      message: 'Your enquiry has been received. Our team will get back to you shortly.',
    });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return res.status(500).json({ message: 'Unable to submit your enquiry right now.' });
  }
});

export default router;