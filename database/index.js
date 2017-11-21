const mysql = require('mysql');


// Create a db connection & export it from this file

// need to connect to user 'root', no password, and to db 'choreApp'


const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'choreApp'
});

dbConnection.connect();

module.exports = dbConnection;
