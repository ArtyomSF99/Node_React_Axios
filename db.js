const mysql = require("mysql2");
  
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "node_lesson",  // Ваш ДБ
  password: "root"
});

module.exports = pool