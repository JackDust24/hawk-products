import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production'
      ? process.env.CORS_ORIGIN
      : process.env.DEV_ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get(['/api', '/api/'], (req, res) => {
  console.log('API route hit:', req.path);

  res.json({ message: 'Welcome to the API' });
});

app.get('/', (req, res) => {
  console.log('Root route hit:', req.path);

  res.json({ message: 'Server is running' });
});

export default app;
