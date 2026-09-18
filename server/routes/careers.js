import { Router } from 'express';
import multer from 'multer';
import CareerApplication from '../models/CareerApplication.js';

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    callback(null, allowedTypes.includes(file.mimetype));
  },
});
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', upload.single('_attachment'), async (req, res) => {
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
      return res.status(503).json({ message: 'Career application service is not connected to the database yet.' });
    }

    const savedApplication = await CareerApplication.create({
      ...application,
      resumeData: req.file.buffer,
      resumeMimeType: req.file.mimetype,
    });
    return res.status(201).json({ id: savedApplication.id, message: 'Your application has been received.' });
  } catch (error) {
    console.error('Career application failed:', error);
    return res.status(500).json({ message: 'Unable to save your application right now.' });
  }
});

export default router;
