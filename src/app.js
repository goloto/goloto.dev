const express = require("express");
const app = express();
const path = require("path");
const route = require("./api/routes/index");
const notFoundRoute = require("./api/routes/apps/404");

app
    .set("views", path.join(__dirname, "./views"))
    .set("view engine", "pug")
    .use(express.static(path.join(__dirname, "./public")))
    .use(route)
    .use(notFoundRoute);

module.exports = app;
