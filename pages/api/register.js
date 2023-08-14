import { hashSync } from 'bcrypt';
import { connect } from '/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = hashSync(password, 10);

  try {
    const connection = await connect();

    await connection.execute(
      'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword]
    );

    connection.end();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
}
