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

app.get('/signup/:email', (req, res) => {
    console.dir(req.params.email);
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening...");
});

/*

--- DEBUG CODE ---

*** Authenticate users ***

helper.authenticate('test@email.com', 'testpassword', success => {
    if(success) console.log('authentication is working.');
    else console.log('its not working.');
})

*** Select all accounts based on type ***

helper.selectAccountsByType('Developer', response => {
    response.forEach(value => {
        console.log(value);
    })
})

*** Grab an accounts type ***

helper.selectAccountType('test@email.com', response => {
    console.log(response);
})

*/
