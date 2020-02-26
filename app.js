const express = require('express');
const app = express();

const port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);

app.get('/', function(req, res) {
    res.send('hello world');
    console.log('somebody send GET to 3000 port')
});

app.listen(process.env.PORT);
