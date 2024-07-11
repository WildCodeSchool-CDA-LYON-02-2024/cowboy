import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.route.js';

const app = express();
const port = 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Remplacez par l'origine de votre frontend
  credentials: true
}));
app.use(express.json());
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
