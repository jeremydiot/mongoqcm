var express = require('express');
var router = express.Router();
const Subjects = require('../models/Subjects');
const User = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Subjects.find().exec((err, subjects)=> {
      res.json(subjects);
    
    });
});

router.get('/:id', function(req, res, next) {
    const {id} = req.params;
    let result={}
    Subjects.findOne({"questions._id":id}).exec((err, subject) => {
        subject.questions.forEach((elem)=>{
            if(elem._id == id){
                result.name = subject.name;
                result.question = elem;
            }
        });
        res.json(result)
    });
});

router.post('/', function(req, res, next) {
    let body = req.body;
    Subjects.count({_id:body.subjectId},(err, count)=>{ // verify subject id
        if(count>0){
            User.count({_id:body.userId},(err, count)=>{ // verify user id
                if(count>0){
                    Subjects.update({_id:body.subjectId},{$push:{questions:body.question}},(err, subject)=>{ // add question
                        Subjects.find({_id:body.subjectId},"questions",(err, subject)=>{
                            let id = (subject[0].questions.length)-1;
                            let newQuestionId = subject[0].questions[id]._id; // get question id
                            User.update({_id:body.userId},{$push:{questions:newQuestionId}},(err,user)=>res.json(user)) // add question id in user
                        });
                    });
                }else{
                    res.json({wrongUserId:body.userId});
                }
            });
        }else{
            res.json({wrongSubjectId:body.subjectId});
        }
    });
});

router.put('/:id', function(req, res, next) {
    const {id} = req.params;
    let body = req.body;
    Subjects.update({"questions._id":id},{$set:{
        "questions.$.title":body.title,
        "questions.$.answers":body.answers
    }},(err,subject)=>{
        res.json(subject)
    })
});

router.delete('/:id', function(req, res, next) {
    const {id} = req.params;
    Subjects.update({"questions._id":id},{ $pull:{questions:{_id:id}}},{ multi: true },(err, subject)=>{
        User.update({questions:id},{$pull:{questions:id}},(err, user)=>{
            res.json(user);
        })
    });
});
module.exports = router;