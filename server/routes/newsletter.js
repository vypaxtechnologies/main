import { Router } from 'express';
import NewsletterSubscription from '../models/NewsletterSubscription.js';
import { sendEmail } from '../lib/email.js';

const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER;
  const { email } = req.body ?? {};

  if (!email?.trim()) {
    return res.status(400).json({ message: 'Email address is required.' });
  }

  const cleanEmail = email.trim().toLowerCase();

  if (!emailPattern.test(cleanEmail)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  try {
    if (!req.app.locals.mongoConnected) {
      return res.status(503).json({ message: 'Database service is temporarily unavailable.' });
    }

    const existing = await NewsletterSubscription.findOne({ email: cleanEmail });
    if (existing) {
      if (existing.status !== 'subscribed') {
        existing.status = 'subscribed';
        await existing.save();
      }
      return res.status(200).json({ message: 'You are already subscribed to our newsletter!' });
    }

    const subscription = await NewsletterSubscription.create({ email: cleanEmail, status: 'subscribed' });

    // Send email notification to the business
    sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: 'New newsletter subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
      `,
      text: `New newsletter subscription\n\nEmail: ${cleanEmail}\nSubscribed at: ${new Date().toISOString()}`,
    }).catch(() => {});

    // Send auto-reply to the user
    sendEmail({
      to: cleanEmail,
      subject: 'Welcome to the Vypax Technologies newsletter!',
      html: `
        <p>Thank you for subscribing to the Vypax Technologies newsletter!</p>
        <p>You'll receive practical insights about technology, digital growth, and business solutions.</p>
        <p>Best regards,<br>Vypax Technologies Team</p>
      `,
      text: `Thank you for subscribing to the Vypax Technologies newsletter!\n\nYou'll receive practical insights about technology, digital growth, and business solutions.\n\nBest regards,\nVypax Technologies Team`,
    }).catch(() => {});

    return res.status(201).json({
      id: subscription.id,
      message: 'Thank you for subscribing to the Vypax Technologies newsletter!',
    });
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    return res.status(500).json({ message: 'Unable to process your newsletter subscription right now.' });
  }
});

export default router;