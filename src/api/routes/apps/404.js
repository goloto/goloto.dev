const express = require("express");
const router = express.Router();
const notFoundRouter = express.Router();

notFoundRouter
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
