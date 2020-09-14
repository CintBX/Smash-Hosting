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
		winners: {
			type: Array
		},
		losers: {
			type: Array
		}
	}
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);