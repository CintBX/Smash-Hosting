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
	friendCode: {
		type: String,
		required: true,
	},
	main: {
		type: String,
		required: false,
	},
	secondary: {
		type: String,
		required: false,
	},
	// FOR LATER: Make your form automatically format friendcodes so all of them adhere to a standard (ie: 1234-4321-1234)
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model('user', UserSchema);