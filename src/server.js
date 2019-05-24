const express = require('express');
const path = require('path');
const app = express();
const md5 = require('md5');
const helper = require('./controller/orm')

app.use(express.static(path.join(__dirname, '../build')));

require('./controller/connection');

app.get('/ping', (req, res) => {
    return res.send('pong');

})

app.get('/signup/:firstName/:lastName/:email/:password/:type', (req, res) => {
    helper.createAccount(req.params.firstName, req.params.lastName, req.params.email, req.params.password, req.params.type, response => {
        if(response) res.send(true);
        else res.send(false);
    });
})

app.get('/signin/:email/:password', (req, res) => {
    helper.authenticate(req.params.email, req.params.password, success => {
        res.send(success);
    })
})

app.get('/createjob/:title/:description/:compensation', (req, res) => {
    helper.createJob(req.params.title, req.params.description, req.params.compensation, result => {
        res.send(result);
    })
})

app.get('/getjobs', (req, res) => {
    helper.populateJobs(result => {
        res.send(result);
    })
})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });
  

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