import app from "./app.js";
import http2 from "http2";
import dotenv from "dotenv";
// import { startScheduledTasks } from "./services/ressources/getRessourcesHourly.js";
dotenv.config();

const port = process.env.APP_PORT;
const server = http2.createServer(app);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});

// startScheduledTasks();
