const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subjectsSchema = new Schema({
	name: {type: String, required: true},
	questions: [{
		_id: {type: String,default:mongoose.Types.ObjectId},
		title: {type: String, required: true},
		answers: [{
			value: {type: String, required: true},
			correct: {type: Boolean, required: true},
		}]
	}]
});

module.exports = mongoose.model('Subject', subjectsSchema);
