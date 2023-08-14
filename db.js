const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Zo',
  password: 'zhHB@v?jyq6ggKT',
  database: 'blog',
});

module.exports = connection;
