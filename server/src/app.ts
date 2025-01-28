import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production'
      ? process.env.VERCEL_URL
      : process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

export default app;
