const express = require('express');
const router = express.Router();
const portfolio = require('../../models/portfolio');

router
	.get('/', (req, res) => {
		res.render('portfolio', {
			title: 'Portfolio | Mikhail Goloto and web dev magic',
			portfolio: portfolio
		});
		console.log('Someone open portfolio page at: ', Date.now());
	});

module.exports = router;
