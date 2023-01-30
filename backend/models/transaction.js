const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee",
    required: false,
  },
  instructorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
    required: false,
  },
  Amount: {
    type: Number,
    required: false,
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: false,
  },
});

const transaction = mongoose.model("transaction", transSchema);
module.exports = transaction;
