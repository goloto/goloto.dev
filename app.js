const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.send('hello world');
    console.log('somebody send GET to 5000 port')
});

app.listen(port);