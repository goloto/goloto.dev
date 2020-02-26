const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

app.get('/', function(req, res) {
    res.send('hello world');
    console.log('somebody send GET to 3000 port')
});

app.listen(port);