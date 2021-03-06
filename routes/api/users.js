const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authorize = require('../../middleware/authorize');
const dotenv = require('dotenv');
dotenv.config();


// User Model
const User = require('../../models/User');


// ~~~~~~~~~~ REGISTER ~~~~~~~~~~ ~~~~~~~~~~ REGISTER ~~~~~~~~~~ ~~~~~~~~~~ REGISTER ~~~~~~~~~~

// @route   POST /users/register
// @descrip Register New User
// @access  Public
router.post('/register', (req, res) => {
	const { username, password, passwordConfirmation, friendCode, main, secondary } = req.body;

	// Validation
	if (!username || !password) {
		return res.status(400).json({ msg: "Username and Password are required" });
	};

	if (password != passwordConfirmation) {
		return res.status(400).json({ msg: "Passwords must match" })
	};

	// Check for existing Username
	User.findOne({ username }).then(userFound => {
		if(userFound) return res.status(400).json({ msg: "This username has already been taken" });

		const newUser = new User({ username, password, friendCode, main, secondary });

		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if(err) throw err;
				newUser.password = hash;
				newUser.save()
					.then(user => {
						jwt.sign(
							{ id: user.id },
							process.env.JWT_SECRET,
							{ expiresIn: 3600 },
							(err, token) => {
								if(err) throw err;
								res.json({
									token,
									user: {
										_id: user.id,
										username: user.username,
										role: user.role,
										friendCode: user.friendCode,
										main: user.main,
										secondary: user.secondary,
										tournamentsPlayed: user.tournamentsPlayed,
										tournamentWins: user.tournamentWins,
										matchWins: user.matchWins,
										date: user.date
									}
								})
							}
						)
					});
			});
		});
	});
});


// ~~~~~~~~~~ LOG IN ~~~~~~~~~~ ~~~~~~~~~~ LOG IN ~~~~~~~~~~ ~~~~~~~~~~ LOG IN ~~~~~~~~~~

// @route   POST /users/login
// @descrip Login Existing User
// @access  Public
router.post('/login', (req, res) => {
	const { username, password } = req.body;

	// Validation
	if(!username || !password) {
		return res.status(400).json({ msg: "Username and Password are required" })
	};

	// Check for existing user
	User.findOne({ username }).then(user => {
		if(!user) return res.status(400).json({ msg: "User does not exist" });

		// Validate password, comparing the input password to the hashed password inside the DB
		bcrypt.compare(password, user.password)
			.then(isMatch => {
				if(!isMatch) return res.status(400).json({ msg: "Incorrect password" });

				jwt.sign(
					{ id: user.id },
					process.env.JWT_SECRET,
					{ expiresIn: 3600 },
					(err, token) => {
						if(err) throw err;
						res.json({
							token,
							user: {
								_id: user.id,
								username: user.username,
								role: user.role,
								friendCode: user.friendCode,
								main: user.main,
								secondary: user.secondary,
								tournamentsPlayed: user.tournamentsPlayed,
								tournamentWins: user.tournamentWins,
								matchWins: user.matchWins,
								date: user.date
							}
						})
					}
				)
			});
	});
});


// ~~~~~~~~~~ CRUD ~~~~~~~~~~ ~~~~~~~~~~ CRUD ~~~~~~~~~~ ~~~~~~~~~~ CRUD ~~~~~~~~~~

// @route   GET /users
// @descrip INDEX all users (Player Directory)
// @access Public
router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => console.log(err));
});

// @route   GET /users/user/:id
// @descrip SHOW a user
// @access  Public
router.get('/user/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => res.json(err));
});


// @route   POST /users/user/:id
// @descrip EDIT/UPDATE a user's details, including matchWins
// @access  Private
router.post('/user/:id', (req, res) => {
	User.findById(req.params.id, (err, user) => {
		// Check if User exists
		if(!user) {
			res.status(404).json("User not found")
		} else {
			if(req.body.main) user.main = req.body.main;
			if(req.body.secondary) user.secondary = req.body.secondary;
			if(req.body.friendCode) user.friendCode = req.body.friendCode;
			if(req.body.tournamentsPlayed) user.tournamentsPlayed = user.tournamentsPlayed + 1;
			if(req.body.matchWins) user.matchWins = user.matchWins + 1;
			if(req.body.tournamentWins) user.tournamentWins = user.tournamentWins + 1;
		}
		user.save()
			.then(() => res.json(user))
			.catch(() => res.json(err));
	});
});


// @route 	/users/user/:id
// @descrip User DELETES his own account || Admin deletes a player's account
// @access 	Private
router.delete(`/user/:id`, (req, res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => res.json({ msg: `User ID ${req.params.id} has been deleted successfully` }))
		.catch(err => res.json({ msg: `User not deleted. Error: ${err}` }));
});


// @route   /users/user
// @descrip GET user data && VALIDATE user using Tokens
// @access  Private
router.get('/user', authorize, (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => res.json(user));
});


module.exports = router;