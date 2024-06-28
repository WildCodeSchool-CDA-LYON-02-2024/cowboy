import app from './app.js';
import dotenv from 'dotenv';
import { startScheduledTasks } from './services/ressources/getRessourcesHourly.js';
dotenv.config();

const port = process.env.APP_PORT; 

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on port ${port}`);
  }
 
});

startScheduledTasks()