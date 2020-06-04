const express = require('express');
const router = express.Router();
var studentModel = require('../model/Student');



router.post('/register',(req,res)=>{
  console.log("registering new student");
  var sampleStudent = new studentModel({
    name : "Geenath",
    Address :"Colombo",
    AdvanceLevelYear:"2017",
    registeredDate : null
  });
  sampleStudent.save(sampleStudent)
  .then((obj)=>{
    console.log(obj);
  });
  res.send("registered!").status(200);

});

router.get('/showById',(req,res)=>{
  console.log("viewing new student")
  res.send("student 1")
});


module.exports = router;
