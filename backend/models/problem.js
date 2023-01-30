const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['resolved', 'pending', 'unseen'],
      default: 'unseen'
    },
    traineeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainee",
    },
    instructorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
    },
    description: {
      type: String,
      required: false,
    },
    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    comments:
    {
      type: [String],
      required: false
    }
  },
  { timestamps: true }
);

const problem = mongoose.model("Problem", problemSchema);
module.exports = problem;