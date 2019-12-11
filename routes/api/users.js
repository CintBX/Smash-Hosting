const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');


// @route   POST /users
// @descrip Register New User
// @access  Public
router.post('/new', (req, res) => {
	res.send('register');
});


module.exports = router;