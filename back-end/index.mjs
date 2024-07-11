import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.route.js';

const app = express();
const port = process.env.PORT || 3001;

// Configuration du middleware CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Votre front-end URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/cowboy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database: cowboy');
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });

app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
