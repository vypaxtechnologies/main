import { Router } from 'express';
import ContactSubmission from '../models/ContactSubmission.js';


const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const { name, email, phone, company, service, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
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
