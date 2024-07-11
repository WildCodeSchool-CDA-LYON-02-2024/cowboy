import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();  // Assurez-vous que cette ligne charge bien les variables d'environnement

const testDBConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('Connected to the database successfully');
    await connection.end();
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

testDBConnection();
