const connection = require('./connection');

var helper = {
    authenticate: (email, password, cb) => {
        connection.query("SELECT `password` FROM `accounts` WHERE `email` = ?", [email], (err, res) => {
            if(err) throw err;

            if(md5(password) === res) cb(true);
            else cb(false);
        })
    }
}

module.exports = helper;