const express = require('express');
const path = require('path');
const app = express();
const md5 = require('md5');
const helper = require('./controller/orm')
app.use(express.static(path.join(__dirname, 'build')));

require('./controller/connection');

app.get('/ping', (req, res) => {
    return res.send('pong');
})

app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = md5(req.body.password);

    helper.authenticate(email, password, result => {
        if(result) console.log('authenticated!');
        else console.log('auth failed.');
    })
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening...");
});