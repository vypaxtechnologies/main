import { Router } from 'express';
import NewsletterSubscription from '../models/NewsletterSubscription.js';


const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
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

