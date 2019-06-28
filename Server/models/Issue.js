const mongoose = require('mongoose');  

const IssueSchema = mongoose.Schema( {
	title: {
		type: String,
		required: true
	},
	creator: {
		type: String,
		required: true
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
	daysOpen: {
		type: Number
	},
	deadline: {
		type: Date
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: String
	},
	priority: {
		type: Number,
		default: 0
	},
	assignee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	taggees: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	votesUp: {
		type: Number,
		default: 0
	},
	votesDown: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('Issues', IssueSchema);
