const express = require('express');
const router = express.Router();
const appsRouter = require('./apps/index');
const timeline = require('../../models/timeline');

router
	.get('/', (req, res) => {
		res.render('index', {
			title: 'Mikhail Goloto and web-dev magic',
			timeline: timeline
		});
		console.log('Someone open main page at: ', Date.now());
	})
	.use('/apps', appsRouter);

module.exports = router;


















