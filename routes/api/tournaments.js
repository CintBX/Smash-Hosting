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
	const { title, type, scheduledDay, scheduledTime, hostedBy } = req.body

	const newTournament = new Tournament({
		title: title,
		type: type,
		scheduledDay: scheduledDay,
		scheduledTime: scheduledTime,
		hostedBy: hostedBy
	});

	newTournament.save()
		.then(tournament => res.json({
			tournament: {
				id: tournament.id,
				title: tournament.title,
				type: tournament.type,
				scheduledDay: tournament.scheduledDay,
				scheduledTime: tournament.scheduledTime,
				hostedBy: tournament.hostedBy,
				status: tournament.status,
				participants: tournament.participants,
				rounds: tournament.rounds
			}
		}))
		.catch(err => res.status(400).json({ msg: `${err}` }));
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


// @route 	CLOSE TOURNAMENT /tournaments/:id/close
// @descrip	Start tournament by changing Status to Closed
// @access	Private
router.post('/:id/close', (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => {
			if(!tournament) res.status(404).json({ msg: "Cannot find this tournament" });
			else {
				tournament.status = req.body.status;
				return tournament.save()
			};
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(err));
});


// @route TOURNAMENT ROUNDS /tournaments/:id/rounds
// @descrip Push participants into rounds.roundThree
// @access Private
router.post('/:id/rounds', (req, res) => {
	const shuffleParticipants = array => {
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
			if(!tournament) res.status(404).json({ msg: "Cannot find this tournament" });
			else {
				tournament.rounds.push(shuffleParticipants(req.body.participants));
				return tournament.save();
			};
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