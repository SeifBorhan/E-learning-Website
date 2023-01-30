const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: false,
      unique: true,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    rating: {
      type: [Number],
      required: false,
    },
    type: {
      type: String,
      default: "T",
    },
    courses: {
      type: mongoose.Schema.Types.Array,
      ref: "Course",
    },
    photo: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    contract: {
      type: Boolean,
      required: false,
    },
    salary: {
      type: Number,
      required: false,
      default: 0,
    },
    averageRating: {
      type: Number,
      required: false,
    },
    contract: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);

const instructor = mongoose.model("Instructor", instructorSchema);
module.exports = instructor;
