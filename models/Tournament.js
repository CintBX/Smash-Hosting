const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false,
	},
	type: {
		type: String,
		required: true
	},
	schedule: {
		type: Date,
		required: true
	},
	hostedBy: {
		type: String,
		required: false
	},
	status: {
		type: String,
		required: false,
		default: 'Open'
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	participants: {
		type: Array,
		required: false
	},
	bracket: {
		players: {type: Array},
		rounds: {type: Array},
		champion: {type: Array},
		scores: {type: Array}
	}
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);