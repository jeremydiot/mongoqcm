const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectsSchema = new Schema({
// schéma de la collection
});

// subjectsSchema.pre('updateOne', function(next){
//     this.lastupdate = Date.now;
//     next();
// });

module.exports = mongoose.model('Subject', subjectsSchema);