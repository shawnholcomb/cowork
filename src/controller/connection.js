var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "kk7jasrlcwssbgbq",
    password: "grpvy003ph2rb3f8",
    database: "sia529qga46r9sld"
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
