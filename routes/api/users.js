const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const authorize = require('../../middleware/authorize');


// User Model
const User = require('../../models/User');


// ~~~~~~~~~~ REGISTER ~~~~~~~~~~ ~~~~~~~~~~ REGISTER ~~~~~~~~~~ ~~~~~~~~~~ REGISTER ~~~~~~~~~~

// @route   POST /users
// @descrip Register New User
// @access  Public
router.post('/register', (req, res) => {
	const { username, password } = req.body;

	// Validation (DO THIS FOR TOURNAMENTS LATER)
	if (!username || !password) {
		return res.status(400).json({ msg: "Username and Password are required" });
	};

	// Check for existing Username
	User.findOne({ username }).then(userFound => {
		if(userFound) return res.status(400).json({ msg: "User already exists" });

		const newUser = new User({ username, password });

		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if(err) throw err;
				newUser.password = hash;
				newUser.save()
					.then(user => {
						jwt.sign(
							{ id: user.id },
							config.get('jwtSecret'),
							{ expiresIn: 3600 },
							(err, token) => {
								if(err) throw err;
								res.json({
									token,
									user: {
										id: user.id,
										username: user.username
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

// @route   POST /users
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
					config.get('jwtSecret'),
					{ expiresIn: 3600 },
					(err, token) => {
						if(err) throw err;
						res.json({
							token,
							user: {
								id: user.id,
								username: user.username
							}
						})
					}
				)
			});
	});
});


// ~~~~~~~~~~ CRUD ~~~~~~~~~~ ~~~~~~~~~~ CRUD ~~~~~~~~~~ ~~~~~~~~~~ CRUD ~~~~~~~~~~

// @route   GET /users
// @descrip INDEX all users
// @access Public
router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => console.log(err));
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