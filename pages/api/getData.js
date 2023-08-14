import db from '/db';

export default async function handler(req, res) {
  try {
    const [rows, fields] = await db.promise().query('SELECT title FROM category');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
