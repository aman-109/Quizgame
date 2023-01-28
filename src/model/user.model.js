const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: {type:String},
  difficulty:{type:String},
  category:{type:String},
  questions:{type:Number},
  score:[
    { score_id: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" } },
  ]
});

const User = mongoose.model("user", users);

module.exports = User;