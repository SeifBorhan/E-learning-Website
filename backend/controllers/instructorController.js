const instructor = require("../models/instructor");
const course = require("../models/course");
const rating = require("../models/rating");
const mongoose = require("mongoose");
const video = require("../models/video");
const subtitle = require("../models/subtitle");
const bcrypt = require("bcryptjs");
const trainee = require("../models/trainee");
const moment = require("moment");
const axios = require("axios");

// to get review and rate
exports.getReview = async (req, res) => {
  const id = req.query.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Instructor is found" });
  }

  const rev = await rating.find({ instructorID: id }).populate("traineeID");
  if (!rev) {
    return res.status(404).json({ error: "No Review is found" });
  }
  console.log(rev);
  res.send(rev);
};
// update password
exports.updatePassword = async (req, res) => {
  const id = req.query.id;
  const { pass, oldPass } = req.body;
  const inst = await instructor.findById(id);
  if (await bcrypt.compare(oldPass, inst.password)) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);

    const Changepassword = await instructor.findByIdAndUpdate(
      id,
      {
        password: hashedPassword,
      },
      {
        new: true,
      }
    );
    console.log(pass);
    res.send({ mess: "password changed successfully" });
  } else {
    res.send({ mess: "incorrect pass" });
  }
};
//View all instructors
exports.viewInstructors = async (req, res) => {
  const instructors = await instructor.find();
  res.render("instructors", { instructors });
};

//View an instructor
exports.viewInstructor = async (req, res) => {
  const inst = await instructor.findById(req.params.id);
  res.render("viewInstructor", { inst });
};

//Instructor views his courses
exports.instructorViewCourses = async (req, res) => {
  id = req.query.id;
  const courses = await course.find({ instructorID: id }).populate("rating");
  res.send(courses);
};
// instructor  view amount of money owed
exports.instructorViewMoney = async (req, res) => {
  id = req.query.id;
  const courses = await course.find({ instructorID: id });
  const inst = await instructor.findOne({ _id: id });
  var sum = inst.salary;
  for (let index = 0; index < courses.length; index++) {
    sum = sum + 0.9 * courses[index].price * courses[index].subscribers.length;
    console.log(sum);
  }
  inst.salary = sum / 12;
  res.send(inst);
};

exports.instructorViewCourse = async (req, res) => {
  const id = req.query.id;
  const courses = await course.find({ instructorID: id });
  console.log(courses);
  res.send(courses);
};

exports.instructorAddPromo = async (req, res) => {
  const id = req.query.id;
  const percentage = req.body.enteredPromotion;
  const duration = req.body.enteredDuration;

  await course.findByIdAndUpdate(id, {
    discount: percentage,
    discountDuration: duration,
  });
  console.log("done");
};

//View all instructors
exports.viewInstructors = async (req, res) => {
  const instructors = await instructor.find();
  res.render("instructors", { instructors });
};

//View an instructor as a user
exports.viewInstructor = async (req, res) => {
  const inst = await instructor.findById(req.params.id);
  res.render("viewInstructor", { inst });
};
exports.instructorSearchCourse = async (req, res) => {
  console.log(req.query.id);
  console.log(req.query.search);
  var result = await course
    .find({
      instructorID: req.query.id,
      courseName: req.query.search,
    })
    .populate({
      path: "rating",
      populate: {
        path: "traineeID",
      },
    });
  res.send(result);
};
//Instructor views his courses
exports.instructorView = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const courses = await course
    .find({
      instructorID: mongoose.Types.ObjectId(req.query.id),
    })
    .populate("instructorID")
    .populate({
      path: "rating",
      populate: {
        path: "traineeID",
      },
    });
  console.log(courses);
  res.send(courses);
};

//Filter courses given by him/her based on price or subject

exports.viewBio = async (req, res) => {
  const id = req.query.id;
  const inst = await instructor.findById(id);
  const bio = inst.bio;
  res.send(bio);
  console.log(bio);
};

exports.acceptContract = async (req, res) => {
  const id = req.query.id;
  const inst = await instructor.findByIdAndUpdate(id, { contract: true });
  console.log(id);
  console.log(inst);
  res.send(inst);
};

exports.editMail = async (req, res) => {
  const id = req.query.id;
  const i = await instructor.findByIdAndUpdate(id, { email: req.query.email });
};

exports.editBio = async (req, res) => {
  const id = req.query.id;
  // const biog = req.body
  console.log(req.body);
  const i = await instructor.findByIdAndUpdate(id, { bio: req.query.bio });
};

exports.editProfile = async (req, res) => {
  const { inst, firstName, lastName, email, bio, photo } = req.body;
  const i = await instructor.findByIdAndUpdate(
    inst,
    { firstName, lastName, email, bio, photo },
    { new: true }
  );
  console.log(i);
  res.send(i);
};

const apiKey = "AIzaSyCnPu3BZPnLqscTBHCAvN4yfWK4tjGtVsU";

exports.uploadVideo = async (req, res) => {
  const { vname, vid, descr, subID } = req.body;
  const { courseId } = req.query;
  const videoID = vid.substring(vid.length - 11, vid.length);
  console.log(videoID);
  var dur;
  const response = await axios
    .get(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoID}&key=${apiKey}`
    )
    .then((res) => {
      const duration1 = res.data.items[0].contentDetails.duration;
      dur = Math.round(moment.duration(duration1).asMinutes());
    });
  const v = await video.create({
    name: vname,
    link: vid,
    description: descr,
    duration: dur,
    videoID: videoID,
  });
  console.log(dur);
  const subt = await subtitle
    .findByIdAndUpdate(subID, {
      $push: { videos: mongoose.Types.ObjectId(v._id) },
    })
    .populate("videos");
  const newDur = subt.duration + dur;
  // console.log(subt.duration)
  await subtitle
    .findByIdAndUpdate(subID, { duration: newDur })
    .populate("videos");
  const coursee = await course.findById(courseId);
  const newTotalHours = coursee.totalHours + newDur;
  console.log(newTotalHours);

  await course.findByIdAndUpdate(courseId, { totalHours: newTotalHours });
  res.send(subt);
};

exports.uploadPrevVideo = async (req, res) => {
  const { link, cID } = req.body;
  const c = await course.findByIdAndUpdate(cID, { previewVideo: link });
};
exports.instructorFilter = async (req, res) => {
  const id = req.query.id;
  const { pricee, sub } = req.query;
  const courses = await course.find({ instructorID: id });
  var result = [];
  if (parseInt(pricee) == 0) {
    result = courses.filter(
      (course) => course.subject == sub && course.price.toLowerCase() == "free"
    );
  } else {
    result = courses.filter(
      (course) => course.subject == sub && course.price <= parseInt(pricee)
    );
  }
  console.log(result);
  res.send(result);
};
