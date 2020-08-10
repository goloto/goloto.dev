const express = require("express");
const router = express.Router();
const notFoundRouter = express.Router();

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
			});
	});

router.use(notFoundRouter);

module.exports = router;
