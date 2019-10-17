var express = require('express');
var router = express.Router();
const Subjects = require('../models/Subjects');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
    const {id} = req.params;

    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.put('/:id', function(req, res, next) {
    const {id} = req.params;

    res.send('respond with a resource');
});

router.delete('/:id', function(req, res, next) {
    const {id} = req.params;

    res.send('respond with a resource');
});
module.exports = router;
