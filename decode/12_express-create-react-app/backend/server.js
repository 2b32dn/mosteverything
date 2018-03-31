var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

var cookieMap = {}; // maps a session id to a username

app.post('/login', (req, res) => {
    var loginInformation = JSON.parse(req.body.toString());
    var usr = loginInformation.username;
    var pwd = loginInformation.password;
    var sessionId = "" + Math.floor(Math.random() * 1000000);
    
    if ((usr == "sue" && pwd == "romeo") ||
        (usr == "bob" && pwd == "juliet")) {
        res.set("Set-Cookie","sessionId=" + sessionId);   
        cookieMap[sessionId] = usr;
        res.send("success");
    } else {
        res.send("fail");
    }
})

var m = {}

app.post('/counter', (req, res) => {
    var cookieString = req.headers.cookie;
    var cookieArray = cookieString.split('=');
    var sessionId = cookieArray[1];
    var usr = cookieMap[sessionId];    
    console.log(cookieMap);
    if (m[usr] === undefined) {
        m[usr] = 0;
    }
    m[usr] = m[usr] + 1;
    res.send("" + m[usr]);
})

app.listen(4000);

/*

/login:

1. A random sessionId is created
2. An association is made between the sessionId and the username

/counter: 

1. the cookie is read from the headers of the HTTP request
2. A session ID is extracted from the cookie
3. The session ID is used to look up the username

*/