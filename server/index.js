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


// ==========================================
// LOAD ENVIRONMENT VARIABLES
// ==========================================

if (process.env.NODE_ENV !== 'production') {
  const dotenv = await import('dotenv');

  dotenv.config({
    path: fileURLToPath(new URL('../.env', import.meta.url)),
  });
}


// ==========================================
// APP CONFIG
// ==========================================

const app = express();

const port = Number(process.env.PORT || 5000);

const mongoUri = process.env.MONGODB_URI;


// ==========================================
// CORS
// ==========================================

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000',
  'https://vypaxtechnologies1.vercel.app',
];

console.log('Allowed CORS origins:', allowedOrigins);


app.use(
  cors({
    origin: (origin, callback) => {

      // Allow requests without Origin header
      // (health checks, server-to-server requests, etc.)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        console.log('CORS allowed:', origin);
        return callback(null, true);
      }

      console.log('CORS BLOCKED:', origin);

      return callback(
        new Error(`CORS blocked for origin: ${origin}`)
      );
    },

    credentials: true,

    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'OPTIONS',
    ],

    allowedHeaders: [
      'Content-Type',
      'Authorization',
    ],
  })
);


// ==========================================
// BODY PARSER
// ==========================================

app.use(
  express.json({
    limit: '64kb',
  })
);


// ==========================================
// API ROUTES
// ==========================================

app.use('/api/contact', contactRouter);

app.use('/api/careers', careersRouter);

app.use('/api/jobs', jobsRouter);

app.use('/api/training', trainingRouter);

app.use('/api/newsletter', newsletterRouter);


// ==========================================
// HEALTH CHECK
// ==========================================

app.get('/api/health', (_req, res) => {

  return res.json({
    ok: true,

    database: app.locals.mongoConnected
      ? 'connected'
      : 'disconnected',

    time: new Date().toISOString(),
  });
});


// ==========================================
// STATS
// ==========================================

app.get('/api/stats', async (_req, res) => {

  if (!app.locals.mongoConnected) {

    return res.status(503).json({
      error: 'Database not connected',
    });
  }

  try {

    const [
      contacts,
      careers,
      training,
      newsletter,
    ] = await Promise.all([
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

    console.error(
      'Stats error:',
      error
    );

    return res.status(500).json({
      error: error.message,
    });
  }
});


// ==========================================
// DATABASE
// ==========================================

app.locals.mongoConnected = false;


if (mongoUri) {

  mongoose
    .connect(mongoUri)

    .then(() => {

      app.locals.mongoConnected = true;

      console.log(
        'MongoDB connected successfully'
      );

    })

    .catch((error) => {

      console.error(
        'MongoDB connection failed:',
        error.message
      );

    });

} else {

  console.warn(
    'MONGODB_URI is not configured; submissions will return a service-unavailable response.'
  );
}


// ==========================================
// GLOBAL ERROR HANDLER
// ==========================================

app.use((error, req, res, next) => {

  console.error(
    'SERVER ERROR:',
    error.message
  );

  if (error.message?.startsWith('CORS blocked')) {

    return res.status(403).json({
      message: 'CORS blocked',
      error: error.message,
    });
  }

  return res.status(500).json({
    message: 'Internal server error',
  });
});


// ==========================================
// START SERVER
// ==========================================

app.listen(port, () => {

  console.log(
    `API listening on http://localhost:${port}`
  );

});