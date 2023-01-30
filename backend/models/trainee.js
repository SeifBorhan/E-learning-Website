const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const traineeSchema = new Schema(
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
      unique: false,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: false,
    },
    password: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      enum: ["I", "C"],
      required: false,
      default: "I",
    },
    company: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    wallet: {
      type: Number,
      required: false,
      default: 0,
    },
    courses: {
      type: mongoose.Schema.Types.Array,
      ref: "Course",
      required: false,
    },
    country: {
      type: String,
      required: false,
    },

    wallet: {
      type: Number,
      required: false,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: false,
    },
  },
  { timestamps: true }
);

const trainee = mongoose.model("Trainee", traineeSchema);
module.exports = trainee;
