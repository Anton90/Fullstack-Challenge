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
		type: String
	},
	taggees: {
		type: String
	},
	votesUp: {
		type: Number
	},
	votesDown: {
		type: Number
	}
});

module.exports = mongoose.model('Issues', IssueSchema); 