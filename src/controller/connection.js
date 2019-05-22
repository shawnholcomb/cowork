var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "dnpx038dvx1tyhfx	",
    password: "ako42k94r9vuq2o7",
    database: "kr1rj7xj7dki7t9a	"
})

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database.");
})

module.exports = connection;
