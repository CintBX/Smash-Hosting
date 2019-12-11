const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');


// @route   POST /users
// @descrip Register New User
// @access  Public
router.post('/new', (req, res) => {
	const { username, password } = req.body;

	// Validation (DO THIS FOR TOURNAMENTS LATER)
	if (!username || !password) {
		return res.status(400).json({ msg: "Username and Email are required" });
	};

	// Check for existing Username
	User.findOne({ username }).then(userFound => {
		if(userFound) return res.status(400).json({ msg: "User already exists" });

		const newUser = new User({ username, password });
	});
});


module.exports = router;