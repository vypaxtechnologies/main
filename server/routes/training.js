import { Router } from 'express';
import TrainingEnquiry from '../models/TrainingEnquiry.js';


const router = Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
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

