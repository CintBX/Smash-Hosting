const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	main: {
		type: String,
		required: false,
		default: ''
	},
	secondary: {
		type: String,
		required: false,
		default: ''
	},
	friendCode: {
		type: String,
		required: false,
		default: ''
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model('user', UserSchema);