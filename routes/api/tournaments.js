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
		.sort({ createdAt: -1 })															// -1 is descending order; 1 is ascending order
		.then(tournaments => res.json(tournaments))
		.catch(err => console.log(`Tournaments Index error: ${err}`));
});


// @route 	SHOW /tournaments/:id
// @descrip Display a single tournament
// @access 	Public
router.get('/:id', (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => res.json(tournament))
		.catch(err => console.log(`Show Tournament error: ${err}`));
});


// @route 	POST /tournaments/new
// @descrip NEW/CREATE
// @access 	Private
router.post('/new', authorize, (req, res) => {
	const { title, description, type, schedule, hostedBy } = req.body

	const newTournament = new Tournament({
		title: title,
		description: description,
		type: type,
		schedule: schedule,
		hostedBy: hostedBy
	});

	newTournament.save()
		.then(tournament => res.json({
			tournament: {
				id: tournament.id,
				title: tournament.title,
				description: tournament.description,
				type: tournament.type,
				schedule: tournament.schedule,
				hostedBy: tournament.hostedBy,
				status: tournament.status,
				participants: tournament.participants,
				bracket: tournament.bracket
			}
		}))
		.catch(err => res.status(400).json({ msg: `${err}` }));
});


// @route 	POST /tournaments/edit/:id
// @descrip	EDIT/UPDATE
// @access Private
router.post('/edit/:id', (req, res) => {
	const { title, description, type, schedule } = req.body;

	Tournament.findById(req.params.id)
		.then(tournament => {
			if(!tournament) {
				return res.status(404).json({ msg: "This tournament cannot be found, or you have selected the wrong one" })
			} else {
				if(title) tournament.title = title;
				if(description) tournament.description = description;
				if(type) tournament.type = type;
				if(schedule) tournament.schedule = schedule;
			}
			return tournament.save();
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(err));
});


// @route		USER SIGN UP /tournaments/:id
// @descrip	Add User to Tournament.participants array
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
		.catch(err => res.json(`User Sign Up error: ${err}`));
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
		.catch(err => res.json(`Close Tournament error: ${err}`));
});


// @route SHUFFLE PARTICIPANTS INTO  BRACKET /tournaments/:id/bracket-players
// @descrip Push randomized participants into bracket.players
// @access Private
router.post('/:id/shuffle-players', (req, res) => {
	Tournament.findByIdAndUpdate(req.params.id)
		.then(tournament => {
			if(!tournament) res.status(404).json({ msg: "Cannot find this tournament" });
			else {
				const { participants } = req.body;
				const { players } = tournament.bracket;

				if(players.length !== participants.length) {
					participants.forEach(p => players.push(p));
				};
				return tournament.save();
			};
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(`Shuffle Players error: ${err}`));
});


// @route  	CREATE TOURNAMENT ROUND /tournaments/:id/first-round
// @descrip	POST and organize bracket.players to bracket.matches
// @access	Private
router.post('/:id/add-round', (req, res) => {
	Tournament.findByIdAndUpdate(req.params.id)
		.then(tournament => {
			if(!tournament) res.status(404).json({ msg: "Cannot find this tournament" });
			else {
				let { rounds } = tournament.bracket;
				rounds.push(req.body.round);
				return tournament.save();
			}
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(`First Round error: ${err}`));
});


// @route	SET CHAMPION /tournaments/:id/set-champ
// @descrip	POST finals winner to tournament.bracket.champion
// @access 	Private
router.post('/:id/set-champ', (req, res) => {
	Tournament.findByIdAndUpdate(req.params.id)
		.then(tournament => {
			if(!tournament) res.status(404).json({ msg: "Cannot find this tournament" });
			else {
				let { champion } = tournament.bracket;
				if(champion.length === 0) champion.push(req.body.user);
				return tournament.save();
			};
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(`Set Champion error: ${err}`));
});


// @route 	COMPLETE TOURNAMENT /tournaments/:id/complete
// @descrip	End tournament by changing Status to Complete
// @access	Private
router.post('/:id/complete', (req, res) => {
	Tournament.findById(req.params.id)
		.then(tournament => {
			if(!tournament) res.status(404).json({ msg: "Cannot find this tournament" });
			else {
				tournament.status = req.body.status;
				return tournament.save()
			};
		})
		.then(savedTournament => res.json(savedTournament))
		.catch(err => res.json(`Complete Tournament error: ${err}`));
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