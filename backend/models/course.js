const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: false,
    },
    instructorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: false,
    },
    subtitles: {
      type: mongoose.Schema.Types.Array,
      ref: "Subtitle",
    },
    subscribers: {
      type: mongoose.Schema.Types.Array,
      ref: "Trainee",
    },
    price: {
      type: Number,
      required: false,
    },
    discount: {
      type: Number,
      default: 1,
      required: false,
    },
    discountDuration: {
      type: String,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
    yearOfUpload: {
      type: String,
      required: false,
    },
    rating: {
      type: mongoose.Schema.Types.Array,
      ref: "RatingCourse",
      required: false,
    },
    certificate: {
      type: String,
      required: false,
    },
    totalHours: {
      type: Number,
      default: 0,
      required: false,
    },
    summary: {
      type: String,
      required: false,
    },
    previewVideo: {
      type: String,
      required: false,
    },
    views: {
      type: Number,
      required: false,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    averageRating: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  { timestamps: true }
);

const course = mongoose.model("Course", courseSchema);
module.exports = course;
