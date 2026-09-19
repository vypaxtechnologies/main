import { Router } from 'express';
import TrainingEnquiry from '../models/TrainingEnquiry.js';
import { sendEmail } from '../lib/email.js';

const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER;
  const { fullName, email, phone, background, course, message } = req.body ?? {};

  if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !course?.trim() || !message?.trim()) {
    return res.status(400).json({ message: 'Full name, email, phone, course, and learning goals are required.' });
  }

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  try {
    if (!req.app.locals.mongoConnected) {
      return res.status(503).json({ message: 'Database service is temporarily unavailable. Please try again later.' });
    }

    const enquiry = await TrainingEnquiry.create({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      background: background ? background.trim() : '',
      course: course.trim(),
      message: message.trim(),
    });

    // Send email notification to the business
    sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `New training enquiry from ${enquiry.fullName} — ${enquiry.course}`,
      html: `
        <h2>New Training & Development Enquiry</h2>
        <p><strong>Full Name:</strong> ${enquiry.fullName}</p>
        <p><strong>Email:</strong> ${enquiry.email}</p>
        <p><strong>Phone:</strong> ${enquiry.phone}</p>
        <p><strong>Background:</strong> ${enquiry.background || 'N/A'}</p>
        <p><strong>Course:</strong> ${enquiry.course}</p>
        <p><strong>Learning Goals:</strong> ${enquiry.message}</p>
      `,
      text: `New training enquiry\n\nFull Name: ${enquiry.fullName}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone}\nBackground: ${enquiry.background || 'N/A'}\nCourse: ${enquiry.course}\nLearning Goals: ${enquiry.message}`,
    }).catch(() => {});

    // Send auto-reply to the user
    sendEmail({
      to: enquiry.email,
      subject: 'Thank you for your training enquiry — Vypax Technologies',
      html: `
        <p>Hi ${enquiry.fullName},</p>
        <p>Thank you for your interest in our ${enquiry.course} training program. We have received your enquiry and our team will contact you shortly.</p>
        <p>Best regards,<br>Vypax Technologies Team</p>
      `,
      text: `Hi ${enquiry.fullName},\n\nThank you for your interest in our ${enquiry.course} training program. We have received your enquiry and our team will contact you shortly.\n\nBest regards,\nVypax Technologies Team`,
    }).catch(() => {});

    return res.status(201).json({
      id: enquiry.id,
      message: 'Your training enquiry has been received. Our team will contact you shortly.',
    });
  } catch (error) {
    console.error('Training enquiry failed:', error);
    return res.status(500).json({ message: 'Unable to submit your training enquiry right now.' });
  }
});

export default router;