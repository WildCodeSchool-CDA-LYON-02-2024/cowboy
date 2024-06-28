import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

class Database {
  connection = null;
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    this.connection.connect((error) => {
      if (error) {
        console.error('Error connecting to the database:', error);
      } else {
        console.info('Connected to the database:', process.env.DB_NAME);
      }
    });
  }

  stop() {
    this.connection.end();
  }
}
const db = new Database();
export { db };
