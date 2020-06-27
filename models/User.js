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
	role: {
		type: String,
		required: true,
		default: 'user'
	},
	friendCode: {
		type: String,
		required: false,
	},
	main: {
		type: String,
		required: false,
	},
	secondary: {
		type: String,
		required: false,
	},
	tournamentsPlayed: {
		type: Number,
		required: false,
		default: 0
	},
	tournamentWins: {
		type: Number,
		required: false,
		default: 0
	},
	matchWins: {
		type: Number,
		required: false,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model('user', UserSchema);