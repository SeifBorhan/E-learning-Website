const Admin = require("../models/admin");
const Instructor = require("../models/instructor");
const Trainee = require("../models/trainee");
const mongoose = require("mongoose");
const problems = require("../models/problem");
const courses = require("../models/course");
const { Duration } = require("duration-converter");
const { findByIdAndUpdate } = require("../models/admin");
const courseReq = require("../models/courseReq");
const course = require("../models/course");
const { request } = require("express");
const refundReq = require("../models/refundReq");
const admin = require("../models/admin");
const instructor = require("../models/instructor");
const trainee = require("../models/trainee");
const bcrypt = require("bcryptjs");
const transaction = require("../models/transaction");
const courseCompletion = require("../models/courseCompletion");

// get all Admins
const getAdmins = async (req, res) => {
  const admins = await Admin.find({});

  res.send(admins);
};

// create a new Admin
const createAdmin = async (req, res) => {
  const { email, password } = req.body;

  // add to the database
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await admin.create({
      email: email,
      password: hashedPassword,
    });
    res.send(user);
  } catch (error) {
    res.status(400).json("email already used");
  }
};

// get all Instructors
const getInstructors = async (req, res) => {
  const instructors = await Instructor.find({});

  res.send(instructors);
};

// create a new Instructor
const createInstructor = async (req, res) => {
  const { userName, password } = req.body;

  // add to the database

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await instructor.create({
      userName: userName,
      password: hashedPassword,
      // firstName: fName,
      // lastName: lName,
      // country: country,
      // gender: gender,
    });
    res.send(user);
  } catch (error) {
    res.send.json(error.message);
  }
};

// display all courses
const displayAllCourses = async (req, res) => {
  const courses = await course.find().populate("instructorID");
  console.log(courses);
  res.send(courses);
};

// get all Trainees
const getTrainees = async (req, res) => {
  const trainees = await Trainee.find({});

  res.send(trainees);
};

// create a new Trainee
const createTrainee = async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName, password);
  // add to the database

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await trainee.create({
      userName: userName,
      password: hashedPassword,
      type: "C",
      email: "",
    });

    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

//view problems
const viewProblemsAdmin = async (req, res) => {
  const unseenProblems = await problems
    .find({ $or: [{ status: "unseen" }, { status: "pending" }] })
    .populate("traineeID")
    .populate("instructorID");
  console.log(unseenProblems);
  res.send(unseenProblems);
};

// mark problem as resolved or pending
const markProblem = async (req, res) => {
  const { mark, problemID } = req.body;
  if (mark === "pending") {
    res.send(await problems.findByIdAndUpdate(problemID, { status: mark }));
  } else {
    await problems.findByIdAndDelete(problemID);
  }
};

// set discount for a certain duration
const setDiscount = async (req, res) => {
  const { courseID, months, weeks, days, discount } = req.body;

  const disc = discount / 100;
  const date = new Date();
  const totalDays =
    Duration.fromMonths(months).MilliSeconds +
    Duration.fromWeeks(weeks).MilliSeconds +
    Duration.fromDays(days).MilliSeconds;
  date.setMilliseconds(date.getMilliseconds() + totalDays);

  const course = await courses.findByIdAndUpdate(courseID, {
    discount: disc,
    discountDuration: date,
  });

  res.send(course);
};

const setDiscounts = async (req, res) => {
  const { courseNames, months, weeks, days, discount, dis } = req.body;
  const disc = 1 - discount / 100;
  // const { courseIDs, months, weeks, days, discount } = req.body;
  // const disc = 1 - discount / 100;
  const date = new Date();
  const totalDays =
    Duration.fromMonths(months).MilliSeconds +
    Duration.fromWeeks(weeks).MilliSeconds +
    Duration.fromDays(days).MilliSeconds;
  date.setMilliseconds(date.getMilliseconds() + totalDays);

  if (dis) {
    for (let i = 0; i < courseNames.length; i++) {
      const course = await courses.findOneAndUpdate(courseNames[i], {
        discount: disc,
        discountDuration: date,
      });
    }
  } else {
    await courses.updateMany(
      {},
      {
        discount: disc,
        discountDuration: date,
      }
    );
  }
  res.send(await courses.find({}));
};
const viewRequests = async (req, res) => {
  const reqs = await courseReq
    .find({ status: "pending" })
    .populate({ path: "course" })
    .populate("user");
  res.send(reqs);
};
const viewRefundRequests = async (req, res) => {
  const reqs = await refundReq
    .find({ status: "pending" })
    .populate({ path: "course" })
    .populate("user");
  console.log(reqs);
  res.send(reqs);
};

const handleRefundRequest = async (req, res) => {
  const { handle, reqID } = req.body;
  const request = await refundReq.findByIdAndDelete(reqID).populate("course");
  const course1 = request.course;
  const trans = await transaction.findOneAndDelete({
    courseID: course1._id,
    userID: request.user._id,
  });
  if (handle == "accept") {
    const trainee = await Trainee.findById(request.user);
    let newCourses = trainee.courses.filter((c) => course1._id != c);
    console.log(newCourses);
    await Trainee.findByIdAndUpdate(request.user, {
      $pull: { courses: course1._id },
    });
    const c = await course.findByIdAndUpdate(request.course._id, {
      $pull: { subscribers: request.user._id },
    });
    await Trainee.findByIdAndUpdate(request.user, {
      $inc: { wallet: trans.Amount },
    });
    await instructor.findByIdAndUpdate(c.instructorID._id, {
      $inc: { salary: -trans.Amount },
    });

    res.send("request accepted");
  } else {
    res.send("request declined");
  }
};
const handleRequest = async (req, res) => {
  const { handle, reqID } = req.body;
  const request = await courseReq.findByIdAndDelete(reqID);
  const course = request.course;
  if (handle == "accept") {
    const trainee = await Trainee.findByIdAndUpdate(request.user, {
      $push: { courses: course._id },
    });
    const courseComp = await courseCompletion.create({
      courseId: course._id,
      userId: request.user._id,
    });
    res.send(trainee);
  } else {
    res.send("request declined");
  }
};

const getAdminDetails = async (req, res) => {
  const adm = await admin.findOne({ _id: req.query.id });
  res.send(adm);
};

console.log("everything is now connected!");
module.exports = {
  getAdmins,
  getAdminDetails,
  createAdmin,
  viewProblemsAdmin,
  displayAllCourses,
  markProblem,
  getInstructors,
  createInstructor,
  getTrainees,
  createTrainee,
  setDiscount,
  viewRequests,
  handleRequest,
  viewRefundRequests,
  handleRefundRequest,
  setDiscounts,
};
