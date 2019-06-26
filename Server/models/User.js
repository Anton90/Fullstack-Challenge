const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	userID: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	notifications: {
		type: Boolean
	}
});

module.exports = mongoose.model('Users', UserSchema);