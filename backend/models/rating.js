const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  traineeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee",
    required: false,
  },
  instructorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
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

const rating = mongoose.model("Rating", ratingSchema);
module.exports = rating;