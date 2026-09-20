import { Router } from 'express';
import multer from 'multer';
import CareerApplication from '../models/CareerApplication.js';
import { sendEmail } from '../lib/email.js';

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/octet-stream',
    ];
    callback(null, allowedTypes.includes(file.mimetype) || /\.(pdf|doc|docx)$/i.test(file.originalname));
  },
});
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', upload.single('_attachment'), async (req, res) => {
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER;
  const application = req.body ?? {};
  const requiredFields = ['role', 'fullName', 'email', 'phone', 'location', 'linkedin', 'portfolio', 'experience', 'resumeName'];
  const missingField = requiredFields.find((field) => !String(application[field] ?? '').trim());

  if (missingField) {
    return res.status(400).json({ message: `${missingField} is required.` });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'A PDF, DOC, or DOCX resume is required.' });
  }

  if (!emailPattern.test(String(application.email).trim())) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  try {
    if (!req.app.locals.mongoConnected) {
      return res.status(503).json({ message: 'Job application service is not connected to the database yet.' });
    }

    const savedApplication = await CareerApplication.create({
      ...application,
      fullName: String(application.fullName).trim(),
      email: String(application.email).trim().toLowerCase(),
      phone: String(application.phone).trim(),
      location: String(application.location).trim(),
      linkedin: String(application.linkedin).trim(),
      portfolio: String(application.portfolio).trim(),
      resumeData: req.file.buffer,
      resumeMimeType: req.file.mimetype,
    });

    // Send email notification to the business
    sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `New job application from ${savedApplication.fullName} — ${savedApplication.role}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Role:</strong> ${savedApplication.role}</p>
        <p><strong>Full Name:</strong> ${savedApplication.fullName}</p>
        <p><strong>Email:</strong> ${savedApplication.email}</p>
        <p><strong>Phone:</strong> ${savedApplication.phone}</p>
        <p><strong>Location:</strong> ${savedApplication.location}</p>
        <p><strong>LinkedIn:</strong> ${savedApplication.linkedin}</p>
        <p><strong>Portfolio:</strong> ${savedApplication.portfolio}</p>
        <p><strong>Experience:</strong> ${savedApplication.experience}</p>
        ${savedApplication.experienceYears ? `<p><strong>Experience (years):</strong> ${savedApplication.experienceYears}</p>` : ''}
        ${savedApplication.companyName ? `<p><strong>Company:</strong> ${savedApplication.companyName}</p>` : ''}
        ${savedApplication.companyRole ? `<p><strong>Role at Company:</strong> ${savedApplication.companyRole}</p>` : ''}
        <p><strong>Resume:</strong> ${savedApplication.resumeName}</p>
      `,
      text: `New job application\n\nRole: ${savedApplication.role}\nFull Name: ${savedApplication.fullName}\nEmail: ${savedApplication.email}\nPhone: ${savedApplication.phone}\nLocation: ${savedApplication.location}\nLinkedIn: ${savedApplication.linkedin}\nPortfolio: ${savedApplication.portfolio}\nExperience: ${savedApplication.experience}\nResume: ${savedApplication.resumeName}`,
    }).catch(() => {});

    // Send auto-reply to the applicant
    sendEmail({
      to: savedApplication.email,
      subject: 'Thank you for your application — Vypax Technologies',
      html: `
        <p>Hi ${savedApplication.fullName},</p>
        <p>Thank you for applying to the ${savedApplication.role} position at Vypax Technologies. We have received your application and our recruitment team will review it shortly.</p>
        <p>Best regards,<br>Vypax Technologies Team</p>
      `,
      text: `Hi ${savedApplication.fullName},\n\nThank you for applying to the ${savedApplication.role} position at Vypax Technologies. We have received your application and our recruitment team will review it shortly.\n\nBest regards,\nVypax Technologies Team`,
    }).catch(() => {});

    return res.status(201).json({
      id: savedApplication.id,
      message: 'Your application has been received. Our recruitment team will review it shortly.',
    });
  } catch (error) {
    console.error('Job application failed:', error);
    return res.status(500).json({ message: 'Unable to save your application right now.' });
  }
});

export default router;