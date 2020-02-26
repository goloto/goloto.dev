const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('hello world');
    console.log('somebody send GET to 3000 port')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});