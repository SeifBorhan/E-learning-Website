const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee",
  },
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
  },
  grade: {
    type: String,
    required: false,
  },
});

const grade = mongoose.model("Grade", gradeSchema);
module.exports = grade;