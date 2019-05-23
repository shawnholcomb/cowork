var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "wxd8rismec7gsung",
    password: "renhysmqcak1mpon",
    database: "lk38ljtm49ipaho9"
});

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'devconnect'
// })

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database.");
});

module.exports = connection;
