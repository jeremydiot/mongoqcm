const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectsSchema = new Schema({
	name: {type: String, required: true},
	questions: [{
		id: {type: String, required: true},
		title: {type: String, required: true},
		answers: [{
			value: {type: String, required: true},
			correct: {type: Boolean, required: true},
		}]
	}]
});

module.exports = mongoose.model('Subject', subjectsSchema);