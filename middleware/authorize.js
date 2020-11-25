// Use this middleware when you need a private route

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function authorize(req, res, next) {
	const token = req.header('x-auth-token');

	// Check for token
	if(!token) return res.status(401).json({ msg: "Access denied: No Token" });

	try {
		// Verify Token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Add user from payload
		req.user = decoded;
		next();
	} catch(e) {
		res.status(400).json({ msg: "Invalid Token" })
	};
};

module.exports = authorize;