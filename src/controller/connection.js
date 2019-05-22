var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ft041104',
    database: 'devconnect'
})

connection.connect(err => {
    if(err) throw err;
    console.log("connected to database.");
})

module.exports = connection;
