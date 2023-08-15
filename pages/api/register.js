import { hashSync } from 'bcrypt';
import con from '../../db'

import db from '/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { firstName, lastName, email, password } = req.body;

  console.log({firstName, lastName, email});

  const hashedPassword = hashSync(password, 10);

  console.log({hashedPassword})

  try {
    // const connection = await con();

    // if (!connection) {
    //   console.log("here")
    //   return res.status(500).json({ message: 'Database connection error' });
    // }

    const result = await db.promise().execute(
      'INSERT INTO user (firstName, lastName, email, passwordHash) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword]
    );

    // connection.end();

    console.log({result})

    if (result.affectedRows > 0) {
      return res.status(201).json({ message: 'User registered successfully' });
    } else {
      return res.status(500).json({ message: 'User registration failed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
}