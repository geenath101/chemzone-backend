const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name:{
    type:String
  },
  Address:{
    type:String
  },
  AdvanceLevelYear:{
    type:String
  },
  registeredDate:{
    type:Date,
    default:Date.now
  }
});

var studentModel = mongoose.model('studentModel',studentSchema);
module.exports= studentModel;