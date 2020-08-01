const express = require("express");
const router = express.Router();
const pages = require("./pages");

router.get("/", (req, res) => {
	res.render("apps/index", {
		title: "Apps | Mikhail Goloto and web-dev magic",
		h1: "Apps",
	});
	console.log("Someone open apps at: ", Date.now());
});

pages.forEach(function (entry) {
	route = require("./" + entry.code);
	router.use("/" + entry.code, route);
});

module.exports = router;
