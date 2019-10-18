var express = require('express');
var router = express.Router();
const User = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().exec((err, users)=> res.json(users));
});

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  User.findById(req.params.id).exec((err, user) => res.json(user));
});

router.post('/', function(req, res, next) {
  User.create(req.body,(err, users)=> res.json(users));
});

router.put('/:id', function(req, res, next) {
  const {id} = req.params;
  User.updateOne({_id:id},{ $set: req.body},(err, user)=>res.json(user));
});

router.delete('/:id', function(req, res, next) {
  const {id} = req.params;
  User.deleteOne({_id:id}).then((result)=>res.json(result));
});

module.exports = router;
