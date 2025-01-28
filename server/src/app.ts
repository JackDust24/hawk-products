import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import path from 'path';

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

app.use('/api', routes);

app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.get('/', (req, res) => {
  console.log('Root route hit:', req.path);

  res.json({ message: 'Server is running' });
});

export default app;
