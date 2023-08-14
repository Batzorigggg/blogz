import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { connect } from '/db'; 

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  try {
    const connection = await connect();

    const [rows] = await connection.execute(
      'SELECT id, password FROM users WHERE email = ?',
      [email]
    );

    connection.end();

    if (rows.length === 0 || !compareSync(password, rows[0].password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = sign({ userId: rows[0].id }, 'your-secret-key', { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
}
