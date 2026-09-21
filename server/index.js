import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'node:url';
import contactRouter from './routes/contact.js';
import careersRouter from './routes/careers.js';
import jobsRouter from './routes/jobs.js';
import trainingRouter from './routes/training.js';
import newsletterRouter from './routes/newsletter.js';
import ContactSubmission from './models/ContactSubmission.js';
import CareerApplication from './models/CareerApplication.js';
import TrainingEnquiry from './models/TrainingEnquiry.js';
import NewsletterSubscription from './models/NewsletterSubscription.js';

if (process.env.NODE_ENV !== 'production') {
  const dotenv = await import('dotenv');
  dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) });
}

const app = express();
const port = Number(process.env.PORT || 5000);
const mongoUri = process.env.MONGODB_URI;

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000',
  'https://vypaxtechnologies1.vercel.app',
  process.env.CLIENT_ORIGIN,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('Blocked CORS origin:', origin);
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '64kb' }));

app.use('/api/contact', contactRouter);
app.use('/api/careers', careersRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/training', trainingRouter);
app.use('/api/newsletter', newsletterRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    database: app.locals.mongoConnected ? 'connected' : 'disconnected',
    time: new Date().toISOString(),
  });
});

app.get('/api/stats', async (_req, res) => {
  if (!app.locals.mongoConnected) {
    return res.status(503).json({ error: 'Database not connected' });
  }

  try {
    const [contacts, careers, training, newsletter] = await Promise.all([
      ContactSubmission.countDocuments(),
      CareerApplication.countDocuments(),
      TrainingEnquiry.countDocuments(),
      NewsletterSubscription.countDocuments(),
    ]);

    return res.json({
      contacts,
      careers,
      training,
      newsletter,
      database: 'connected',
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.locals.mongoConnected = false;

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      app.locals.mongoConnected = true;
      console.log('MongoDB connected successfully');
    })
    .catch((error) => console.error('MongoDB connection failed:', error.message));
} else {
  console.warn('MONGODB_URI is not configured; submissions will return a service-unavailable response.');
}

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});