const express = require('express');
const router = express.Router();
const portfolioRouter = require('./portfolio');
const timeline = require('../../models/timeline');
const meta = require('../../models/meta');

router
	.get('/', (req, res) => {
		res.render('index', {
			title: 'Mikhail Goloto and web dev magic',
			timeline: timeline,
			meta: meta
		});
		console.log('Someone open main page at: ', Date.now());
	})
	.use('/portfolio', portfolioRouter);

module.exports = router;


















