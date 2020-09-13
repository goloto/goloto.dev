const express = require('express');
const router = express.Router();
const projects = require('../../models/projects');

router
	.get('/', (req, res) => {
		res.render('projects', {
			title: 'Projects | Mikhail Goloto and web dev magic',
			projects: projects
		});
		console.log('Someone open projects page at: ', Date.now());
	});

module.exports = router;
