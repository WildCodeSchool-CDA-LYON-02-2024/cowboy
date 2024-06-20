import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

class Database {
  connection = null;
  constructor() {
    console.log(
      {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      },
      'CONFIG DATABASE'
    );
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

  stop() {
    this.connection.end();
  }
}

const db = new Database();
console.log(db.connection === null ? 'IS NULL' : 'NOT NUL', 'DATABASE');
export { db };
