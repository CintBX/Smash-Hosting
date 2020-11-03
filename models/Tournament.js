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
		players: {type: Array}, // Array of randomized players to create rounds objects
		rounds: {type: Array}, // [{ round:1, matches:[[],[],[],[]] }]
		champion: {type: String, default: "pending"}, // set champ at end
		roundCounter: {type: Number, default: 1} // used for rounds[] objects (in FrontEnd)
	}
});

module.exports = Tournament = mongoose.model('tournament', TournamentSchema);