const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
	username: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true },
	questions: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', usersSchema);