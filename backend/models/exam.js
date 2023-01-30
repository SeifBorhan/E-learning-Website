const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const examSchema = new Schema(
  {
    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    subtitle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtitle",
    },
    done: {
      type: Boolean,
      required: false,
    },
    questions: {
      type: mongoose.Schema.Types.Array,
      ref: "Questions",
    },
  },
  { timestamps: true }
);

const exam = mongoose.model("Exam", examSchema);
module.exports =  exam;
