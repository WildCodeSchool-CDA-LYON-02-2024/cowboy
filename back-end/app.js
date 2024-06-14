import express from 'express';
import cors from 'cors';
import router from './routes/index.route.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL, // Variable a changer, en lien avec le fichier .env
    optionsSuccessStatus: 200,
  })
);

app.use('/api', router);

export default app;
