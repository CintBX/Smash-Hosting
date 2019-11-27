const express = require('express');
const router = express.Router();

// Tournament model
const Tournament = require('../../models/Tournament');


// @route		GET api/tournaments
// @descrip	Get All, INDEX
// @access	Public
router.get('/', (req, res) => {
	Tournament.find()
		.sort({ date: -1 })															// -1 is descending order; 1 is ascending order
		.then(tournaments => res.json(tournaments))
		.catch(err => console.log(err));
});


// @route 	POST api/tournaments
// @descrip NEW/CREATE
// @access 	Public (for now.  Authentication later)
router.post('/new', (req, res) => {
	// const { title, description } = req.body
	const newTournament = new Tournament({
		title: req.body.title,
		description: req.body.description
	});

	newTournament.save()
		.then(tournament => res.json(tournament))
});

module.exports = router;