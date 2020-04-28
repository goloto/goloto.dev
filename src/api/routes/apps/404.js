const express = require("express");
const router = express.Router();
const notFoundRouter = express.Router();
const supermanNums = require('../../../services/superman');

notFoundRouter
    .get("/why", function (req, res) {
        res.send("It's 100% serious randomly research");
    })
    .use((req, res) => {
        res
            .status(404)
            .render("404", {
                h1: "Page not found",
                title: "Page not found",
                nums: supermanNums,
            });
    });

router.use(notFoundRouter);

module.exports = router;
