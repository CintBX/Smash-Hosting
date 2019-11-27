const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Schema
const TournamentSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	entrants: {
		type: Array,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	},
	// entranceFee: { tthis may be added later.  But start it off where this isn't a thing, just free tourneys for now }
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);