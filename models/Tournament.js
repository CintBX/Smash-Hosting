const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	scheduledDay: {
		type: Date,
		required: true
	},
	scheduledTime: {
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
	createdAt: {
		type: Date,
		default: Date.now
	},
	participants: {
		type: Array,
		required: false
	},
	rounds: {
		type: Array,
		required: false
	}
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);