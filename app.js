const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes')

//Modileware
app.use(bodyParser.json());
app.use('/student', studentRoutes);
//add authentication
//cookie management




mongoose.connect('mongodb://localhost:27017/chemzone',
  {useNewUrlParser:true},(err)=>{
  console.log("Hiii");
  console.log(err);
  }
);



app.listen(3000);
