import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

//TODO: Amend this when set up on vercel
const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://your-domain.vercel.app'
      : process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/api/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
