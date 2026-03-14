import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

import homeRoutes from './routes/homeRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import careersRoutes from './routes/careersRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Origin not allowed by CORS'));
  },
};

// Middleware
app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(cors(corsOptions));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Serve built frontend in production
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.use('/api/home', homeRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'RAJ Agro API is running' });
});

// Fallback: serve frontend for all non-API routes (SPA support)
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ status: 'error', message: 'Route not found' });
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(404).json({ status: 'error', message: 'Frontend build not found. Build the frontend for static serving.' });
    }
  });
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  if (err?.type === 'entity.too.large') {
    res.status(413).json({ status: 'error', message: 'Request payload is too large.' });
    return;
  }

  if (err?.message === 'Origin not allowed by CORS') {
    res.status(403).json({ status: 'error', message: 'Request origin is not allowed.' });
    return;
  }

  console.error('Unhandled server error:', err);
  res.status(500).json({ status: 'error', message: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`RAJ Agro backend running on http://localhost:${PORT}`);
  console.log(`API health check: http://localhost:${PORT}/api/health`);
});
