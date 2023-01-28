const mongoose = require("mongoose");

const quizs = new mongoose.Schema({
  category: {type:String},
  type: {type:String},
  difficulty:{type:String},
  question:{type:String},
  coreect_answer:{type:String},
  incorrect_answers:[String]
});

const Quiz = mongoose.model("quiz", quizs);

module.exports = Quiz;