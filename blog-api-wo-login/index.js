const mysql = require("mysql")

let connection = mysql.createConnection({
    host: "10.254.10.50",
    user: "db_user",
    password: "db_user_pass",
    // user: "root",
    // password: "strong_password",
    database: 'app_db' ,
    port:6035
})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });