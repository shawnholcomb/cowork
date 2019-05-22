const connection = require('./connection');
const md5 = require('md5');

var helper = {
    createAccount: (firstName, lastName, email, password, type, cb) => {
        password = md5(password);
        connection.query("INSERT INTO `accounts` (`firstName`, `lastName`, `email`, `password`, `type`) VALUES (?, ?, ?, ?, ?)", [firstName, lastName, email, password, type], (err, res) => {
            if(err) throw err;
            else cb(res[0]);
        })
    },
    authenticate: (email, password, success) => {
        connection.query("SELECT `password` FROM `accounts` WHERE `email` = ?", [email], (err, res) => {
            if(err) throw err;

            if(md5(password) === res[0].password) success(true);
            else success(false);
        })
    },
    createJob: (title, body, compensation, cb) => {
        connection.query("INSERT INTO `jobs` (`title`, `body`, `compensation`) VALUES (?, ?, ?)", [title, body, compensation], (err, res) => {
            if(err) throw err;
            cb(res);
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
    },
    populateJobs: (cb) => {
        connection.query("SELECT * FROM `jobs`", (err, res) => {
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = helper;