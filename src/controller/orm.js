const connection = require('./connection');
const md5 = require('md5');

var helper = {
    authenticate: (email, password, success) => {
        connection.query("SELECT `password` FROM `accounts` WHERE `email` = ?", [email], (err, res) => {
            if(err) throw err;

            if(md5(password) === res[0].password) success(true);
            else success(false);
        })
    },
    selectAccountType: (email, cb) => {
        connection.query("SELECT `type` FROM `accounts` WHERE `email` = ?", [email], (err, res) => {
            if(err) throw err;

            cb(res[0].type);
        })
    },
    selectAccountsByType: (type, cb) => {
        connection.query("SELECT `email` FROM `accounts` WHERE `type` = ?", [type], (err, res) => {
            if(err) throw err;

            let arr = [];
            res.forEach(value => {
                arr.push(value.email);
            })

            if(arr.length != 0) cb(arr);
            else cb(null);
        })
    }
}

module.exports = helper;