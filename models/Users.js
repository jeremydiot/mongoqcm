const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
// schéma de la collection
});

// usersSchema.pre('updateOne', function(next){
//     this.lastupdate = Date.now;
//     next();
// });

module.exports = mongoose.model('User', usersSchema);