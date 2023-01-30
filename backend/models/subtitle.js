const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subtitleSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  duration: {
    type: Number,
    required: false,
    default: 0,
  },
  videos: {
    type: mongoose.Schema.Types.Array,
    ref: "Video",
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
  },
});

const subtitle = mongoose.model("Subtitle", subtitleSchema);
module.exports = subtitle;
