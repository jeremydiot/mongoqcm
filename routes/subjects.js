var express = require('express');
var router = express.Router();
const Subjects = require('../models/Subjects');

/* GET users listing. */
router.get('/', function(req, res, next) {

    Subjects.find().exec((err, subjects)=>{
        let result = [];
        subjects.forEach((elem,id)=>{
            let count = elem.questions.length;
            elem = JSON.parse(JSON.stringify(elem))
            elem.questions = count;
            result.push(elem);
        });
        res.json(result);
    });
});

router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    Subjects.findById(req.params.id).exec((err, subject) => res.json(subject));
});

router.post('/', function(req, res, next) {
    // console.log(req.body);
    Subjects.create(req.body,(err, subjects)=> res.json(subjects));
});

router.put('/:id', function(req, res, next) {
    const {id} = req.params;
    Subjects.updateOne({_id:id},{ $set: req.body },(err, subject)=>res.json(subject));
});

router.delete('/:id', function(req, res, next) {
    const {id} = req.params;
    Subjects.deleteOne({_id:id}).then((result)=>{
        res.json(result)
    });
});
module.exports = router;
