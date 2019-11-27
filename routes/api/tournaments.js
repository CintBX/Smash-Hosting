const express = require('express');
const router = express.Router();

// Tournament model
const Tournament = require('../../models/Tournament');


// @route		GET /tournaments
// @descrip	Get All, INDEX
// @access	Public
router.get('/', (req, res) => {
	Tournament.find()
		.sort({ date: -1 })															// -1 is descending order; 1 is ascending order
		.then(tournaments => res.json(tournaments))
		.catch(err => console.log(err));
});


// @route 	POST /tournaments/new
// @descrip NEW/CREATE
// @access 	Public (for now.  Authentication later)
router.post('/new', (req, res) => {
	const { title, description } = req.body

	const newTournament = new Tournament({
		title: title,
		description: description
	});

	newTournament.save()
		.then(tournament => res.json(tournament))
		.catch(err => console.log(err));
});


// @route		DELETE /tournaments/:id
// @descrip DELETE
// @access Public (for now.  Authentication later)
router.delete('/:id', (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => tournament.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;