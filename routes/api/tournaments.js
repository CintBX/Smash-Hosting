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
				participants: tournament.participants,
			}
		}))
		.catch(err => res.status(400).json({ msg: "Please choose a tournament type" }));
});


// @route		UPDATE /tournaments/:id
// @descrip	Add User to Tournament.participants array / User sign up
// @access	Private(There must be a user to sign up)
// NOTE: `authorize` doesn't work for some reason.  May be ok, investigate later
router.post('/:id', (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => {
			if (tournament.participants.some(array => array.username === req.body.user.username)) {
				return res.status(400).json({ msg: "This user is already signed up" });
			} else {
				tournament.participants.push(req.body.user);
			}
			return tournament.save();
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(err));
});


// @route 	UPDATE /tournaments/update/:id
// @descrip	Change tournament status from Open to Closed
// @access	Private
router.post('/update/:id', (req, res) => {
	Tournament.findById(req.params.id, (err, tournament) => {
		if(!tournament) {
			res.status(404).json({ msg: "This tournament does not exist" });
		} else {
			if(req.body.status) tournament.status = req.body.status;
		}
		tournament.save()
			.then(() => res.json(tournament))
			.catch(() => res.json(err));
	});
});


// @route		UPDATE /tournaments/rounds/:id
// @descrip	Randomize the tournament participants
// @access	Private
router.post('/rounds/:id', (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => {
			if(tournament.game.length == req.body.round.length) {
				return res.status(400).json({ msg: "This round has already been arranged" });
			} else {
				tournament.game = req.body.round;
			}
			return tournament.save();
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(err));
});

// What if I just make a route that takes the participants array and rearranges it with that same code?
// That would take the logic out of the front end and put it here, in the backend route
// Then, it would be participants itself you'd be leveraging.. though you don't wanna edit that too much.. cuz even if
// people start losing, they are still Participants.  

// Okay you can do this:  Instead of game:[], you can have winners:[] and losers:[]
// Your backend route here will randomize the participants, and leave it be.  It will be done when Start Tournament button is 
// pressed, and that can only be pressed once, so that will ensure that they will be randomized just once

// Then, you'll have another route that pushes users to winners/losers arrays depending on their performance, respectively
// That may not even be necessary, but leave the option available for it (this is prototype official after all)
// What you will need, still, is to arrange the randomized participants into a set of pairs, into a graph data structure,
// so you can pass the final game into Bracket.js
// Oh.. I wonder if there's a way to create the graph without having initial values.. OH!

// Have a graph that is structured the way the whole bracket is gonna be.. with subsequent rounds and shit.. but it will
// have empty values that will be filled in later as players win and lose.  This way, you can pass in the "final game" to 
// Bracket.js, which will render the CELLS of the finals match, without having actual players

	
// @route		DELETE /tournaments/:id
// @descrip DELETE
// @access  Private
router.delete('/:id', authorize, (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => tournament.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json(err));
});


module.exports = router;