const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingCourseSchema = new Schema({
  traineeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee",
    required: false,
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: false,
  },
  review: {
    type: String,
    required: false,
  },
  rate: {
    type: Number,
    required: false,
  },
});

const ratingCourse = mongoose.model("RatingCourse", ratingCourseSchema);
module.exports = ratingCourse;
