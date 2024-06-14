import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.APP_PORT; // En lien avec le fichier .env, c'est le port du back-end

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
