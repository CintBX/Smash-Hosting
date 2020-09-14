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
				game: tournament.game
			}
		}))
		.catch(err => res.status(400).json({ msg: "Please choose a tournament type" }));
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


// @route		UPDATE /tournaments/rounds/:id
// @descrip	Start Tournament: Randomize the participants and place them in game.current
// @access	Private
router.post('/rounds/:id', (req, res) => {
	// Function that shuffles players
	function shuffleParticipants(array) {
		let currentIndex = array.length, temporaryValue, randomIndex;	
		while(0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;	
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}	
		return array;
	};

	Tournament.findById(req.params.id)
		.then(tournament => {
			// bind call for shuffle function, and put participants as argument
			const players = shuffleParticipants(tournament.participants);
			// bind for game.current
			const currentRound = tournament.game.current;

			// Iterate through `players` and push each one into `currentRound`
			players.forEach(player => currentRound.push(player))

			// code here to break up game.current[] entries into pairs, array of arrays
			// ...

			// save result
			return tournament.save();
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(err));
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