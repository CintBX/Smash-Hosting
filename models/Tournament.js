const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
		nextRound: { 
			type: Map,
			of: String
		}
	}
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);