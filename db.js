const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'Zo',
  password: 'zhHB@v?jyq6ggKT',
  database: 'blog',
});

module.exports = con;