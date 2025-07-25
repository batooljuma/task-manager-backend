const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config(); 

const db = mysql.createConnection({
  host: process.env.DB_HOST, 
  
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('erroe in connect database', err);
    return;
  }
  console.log('done connecting in db ');
});

module.exports = db; 
