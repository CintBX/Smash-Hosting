const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Schema
const TournamentSchema = new Schema({
	title: {
		type: String,
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
	date: {
		type: Date,
		default: Date.now
	},
	participants: {
		type: Array,
		required: false
	},
	game: {
		currentRound: { type: Array },
		winners: { type: Array },
		losers: { type: Array },
		nextRound: null
	}
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);