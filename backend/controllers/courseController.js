const course = require("../models/course");
const subtitle = require("../models/subtitle");
const instructor = require("../models/instructor");
const mongoose = require("mongoose");

const rating = require("../models/ratingCourse");
//filter course by subject
const filterGeneral = async (req, res, key) => {
  const instructors = {};
  const courses1 = {};
  const courses2 = {};
  prifilt = req.body.price;
  subfilt = req.body.subject;

  if (prifilt == "yesprice" && subfilt == "yessubject") {
    var result = await course.find().sort({ price: -1, subject: 1 });

    res.render("searchResults", { result, instructors, courses2, courses1 });
  } else if (prifilt == "yesprice") {
    var result = await course.find().sort({ price: -1 });
    res.render("searchResults", { result, instructors, courses2, courses1 });
  } else if (subfilt == "yessubject") {
    var result = await course.find().sort({ subject: 1 });
    res.render("searchResults", { result, instructors, courses2, courses1 });
  } else {
    res.render("filters");
  }
};
// to get views
const getMostViews = async (req, res) => {
  var max = 0;
  var element = [];
  const most = await course.find({});
  for (let index = 0; index < most.length; index++) {
    var v = most[index].views;
    if (max < v) {
      max = v;
      element = most[index];
    } else if (max == v) {
      max = v;
      element += most[index];
    }
    console.log(max);
    console.log(element);
  }
  res.send(element);
};
// to get Average Rating Of Course
const getAvgRating = async (req, res) => {
  const id = req.query.id;
  var sum = 0;
  var av = 0;
  const avg = await rating.find({ courseID: id });
  for (let i = 0; i < avg.length; i++) {
    sum += avg[i].rate;
  }
  console.log(sum);
  av = sum / avg.length;
  console.log(av);
  res.status().send(av);
};

const findCourseBySubject = async (req, res) => {
  const instructors = {};
  const courses1 = {};
  const courses2 = {};
  const subfilt = await course.findOne({ subject: req.body.Search });
  if (subfilt) {
    console.log("checkIF");
    var result = await course.find({ subject: req.body.Search });
    res.render("searchResults", { result, instructors, courses2, courses1 });
  } else {
    console.log("checkElse");
    var result = "no courses match your search criteria";
    res.render("searchResults", { result, instructors, courses2, courses1 });
  }
};
//price: {$lte: parseInt(req.body.Search)
const findCourseByPrice = async (req, res) => {
  const instructors = {};
  const courses1 = {};
  const courses2 = {};
  try {
    const pricefilt = await course.find({
      price: { $lte: parseInt(req.body.Search) },
    });
    if (pricefilt) {
      var result = pricefilt;
      res.render("searchResults", { result, instructors, courses2, courses1 });
    } else {
      var result = "no courses match your search criteria";
      res.render("searchResults", { result, instructors, courses2, courses1 });
    }
  } catch (error) {
    var result = "please enter a number";
    res.render("searchResults", { result, instructors, courses2, courses1 });
  }
};

const findCourseByName = async (req, res) => {
  const namefilt = await course.findOne({ courseName: req.body.Search });
  const instructors = {};
  const courses1 = {};
  const courses2 = {};
  if (namefilt) {
    var namefilt2 = await course.find({ courseName: req.body.Search });
    var result = namefilt2;
    res.render("searchResults", { result, instructors, courses2, courses1 });
  } else {
    var result = "no courses match your search criteria";
    res.render("searchResults", { result, instructors, courses2, courses1 });
  }
};

//find course by instructor//if(namefilt!=null)
const findCourseByInstructor = async (req, res) => {
  // var x = false
  const namefilt = await instructor.findOne({ userName: req.body.Search });
  const instructors = {};
  const courses1 = {};
  const courses2 = {};
  if (namefilt) {
    const key = namefilt._id;
    var result = await course.find({ instructorID: key });
    res.render("searchResults", { result, instructors, courses2, courses1 });
  } else {
    var result = "no courses match your search criteria";
    res.render("searchResults", { result, instructors, courses1, courses2 });
  }
};

const instructorSearchCourse = async (req, res) => {
  var result = await course.find({ instructorID: req.query.id });
  res.send(result);
};

const postCourse = async (req, res) => {
  const { courseName, price, photo, year, subject, summary, instructor, pv } =
    req.body;

  const cou = await course.create({
    courseName,
    price,
    thumbnail: photo,
    yearOfUpload: year,
    previewVideo: pv,
    subject,
    summary,
    instructorID: instructor,
  });
  console.log(cou._id);

  res.send("Course Added");

  // let message = "";
  // const check = course.find({ courseName: req.body.coursename });

  // if (!check) {
  //   message = "course add failed";
  // } else {
  //   message = "course added successfully";
  // }
  // res.send(cou);
};
const searchCourseByInstructor = (req, res) => {
  res.render("searchCoursesByInstructor");
};

module.exports = {
  filterGeneral,

  findCourseByPrice,
  findCourseByName,
  findCourseBySubject,
  findCourseByInstructor,
  postCourse,
  instructorSearchCourse,
  getMostViews,
  instructorSearchCourse,
  getAvgRating,
};
