const express = require('express');
const router = express.Router();
const authorize = require('../../middleware/authorize');

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


// @route 	SHOW /tournaments/:id
// @descrip Display a single tournament
// @access 	Public
router.get('/:id', (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => res.json(tournament))
		.catch(err => res.status(404).json({ msg: "Tournament not found" }));
});


// @route 	POST /tournaments/new
// @descrip NEW/CREATE
// @access 	Private
router.post('/new', authorize, (req, res) => {
	const { title, hostedBy } = req.body

	const newTournament = new Tournament({
		title: title,
		hostedBy: hostedBy
	});

	newTournament.save()
		.then(tournament => res.json({
			tournament: {
				id: tournament.id,
				title: tournament.title,
				hostedBy: tournament.hostedBy,
				status: tournament.status,
				participants: tournament.participants
			}
		}))
		.catch(err => res.status(400).json({ msg: "Please choose a tournament type" }));
});


// @route		DELETE /tournaments/:id
// @descrip DELETE
// @access  Private
router.delete('/:id', authorize, (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => tournament.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json(err));
});

module.exports = router;


// @route		POST /tournaments/:id
// @descrip	Add User to Tournament.participants array / User sign up
// @access	Private(There must be a user to sign up)
router.post('/:id', authorize, (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => {
			tournament.participants.push(req.body);
			// save updated tournament in the DB, then promise-chain with another `then` before the Catch
			return tournament.save();
		})
		// send a response to the client
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(err));
});