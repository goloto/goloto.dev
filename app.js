const http = require("http");
const header = require("./templates/header")

http.createServer(function (request, response) {

    response.end("Hello NodeJS!");

}).listen(3000, "127.0.0.1", function () {

    console.log("Start listening request on port 3000")
});
