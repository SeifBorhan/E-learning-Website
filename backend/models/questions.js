const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionsSchema = new Schema(
  {
  question: String,
  choice1: String,
  choice2: String,
  choice3: String,
  choice4: String,
  correctanswer: String,
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
},
  { timestamps: true }
);
  
  const questions = mongoose.model("Questions", questionsSchema);
  module.exports =  questions;
   