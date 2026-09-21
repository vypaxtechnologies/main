import { Router } from 'express';

import ContactSubmission from '../models/ContactSubmission.js';
import { sendEmail } from '../lib/email.js';

const router = Router();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const NOTIFICATION_EMAIL =
    process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER;

  const { name, email, phone, company, service, message } = req.body ?? {};

  // Validate required fields
  if (
    !name?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !message?.trim()
  ) {
    return res.status(400).json({
      message: 'Name, email, phone, and message are required.',
    });
  }

  // Validate email
  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      message: 'Please provide a valid email address.',
    });
  }

  try {
    // Check MongoDB
    if (!req.app.locals.mongoConnected) {
      return res.status(503).json({
        message: 'Contact service is not connected to the database yet.',
      });
    }

    // Save submission to MongoDB
    const submission = await ContactSubmission.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : '',
      service: service ? service.trim() : '',
      message: message.trim(),
    });

    console.log('Contact submission saved:', submission.id);

    // ==========================================
    // SEND EMAIL TO VYPAX TECHNOLOGIES
    // ==========================================

    console.log('Sending notification email to:', NOTIFICATION_EMAIL);

    const notificationEmailResult = await sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `New contact form message from ${name.trim()}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <p>
          <strong>Name:</strong>
          ${name.trim()}
        </p>

        <p>
          <strong>Email:</strong>
          ${email.trim()}
        </p>

        <p>
          <strong>Phone:</strong>
          ${phone ? phone.trim() : 'N/A'}
        </p>

        <p>
          <strong>Company:</strong>
          ${company ? company.trim() : 'N/A'}
        </p>

        <p>
          <strong>Service:</strong>
          ${service ? service.trim() : 'N/A'}
        </p>

        <p>
          <strong>Message:</strong>
          ${message.trim()}
        </p>
      `,

      text: `
New contact form submission

Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone ? phone.trim() : 'N/A'}
Company: ${company ? company.trim() : 'N/A'}
Service: ${service ? service.trim() : 'N/A'}
Message: ${message.trim()}
      `,
    });

    console.log(
      'NOTIFICATION EMAIL RESULT:',
      JSON.stringify(notificationEmailResult)
    );

    // ==========================================
    // SEND THANK YOU EMAIL TO CUSTOMER
    // ==========================================

    console.log('Sending customer email to:', email.trim());

    const customerEmailResult = await sendEmail({
      to: email.trim(),
      subject: 'Thank you for contacting Vypax Technologies',

      html: `
        <p>Hi ${name.trim()},</p>

        <p>
          Thank you for reaching out to Vypax Technologies.
          We have received your message and our team will get back
          to you shortly.
        </p>

        <p>
          Best regards,<br>
          Vypax Technologies Team
        </p>
      `,

      text: `
Hi ${name.trim()},

Thank you for reaching out to Vypax Technologies.
We have received your message and our team will get back to you shortly.

Best regards,
Vypax Technologies Team
      `,
    });

    console.log(
      'CUSTOMER EMAIL RESULT:',
      JSON.stringify(customerEmailResult)
    );

    // ==========================================
    // RESPONSE
    // ==========================================

    return res.status(201).json({
      id: submission.id,
      message:
        'Your enquiry has been received. Our team will get back to you shortly.',
      email: {
        notification: notificationEmailResult,
        customer: customerEmailResult,
      },
    });
  } catch (error) {
    console.error('Contact submission failed:', error);

    return res.status(500).json({
      message: 'Unable to submit your enquiry right now.',
      error:
        process.env.NODE_ENV === 'production'
          ? 'Server error'
          : error.message,
    });
  }
});

export default router;