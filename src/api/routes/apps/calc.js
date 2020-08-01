const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("calc page!");
});

module.exports = router;
