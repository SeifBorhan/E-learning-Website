const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  videoID: {
    type: String,
    required: false
  },
  done: {
    type: Boolean,
    required: false,
  },
});

const video = mongoose.model("Video", videoSchema);
module.exports = video;