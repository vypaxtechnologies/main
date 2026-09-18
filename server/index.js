import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'node:url';
import contactRouter from './routes/contact.js';
import careersRouter from './routes/careers.js';

dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) });

const app = express();
const port = Number(process.env.PORT || 5000);
const mongoUri = process.env.MONGODB_URI;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '32kb' }));
app.use('/api/contact', contactRouter);
app.use('/api/careers', careersRouter);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, database: app.locals.mongoConnected ? 'connected' : 'disconnected' });
});

app.locals.mongoConnected = false;

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      app.locals.mongoConnected = true;
      console.log('MongoDB connected');
    })
    .catch((error) => console.error('MongoDB connection failed:', error.message));
} else {
  console.warn('MONGODB_URI is not configured; contact submissions will return a service-unavailable response.');
}

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
