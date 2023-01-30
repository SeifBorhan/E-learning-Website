const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseCompletionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee",
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  completion: {
    type: [Number],
    default: [],
    required: false,
  },
  certificate: {
    type: Boolean,
    required: false,
    default: false
  }
});

const courseCompletion = mongoose.model(
  "CourseCompletion",
  courseCompletionSchema
);
module.exports = courseCompletion;
