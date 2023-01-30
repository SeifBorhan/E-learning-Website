const course = require("../models/course");
const express = require("express");
const instructor = require("../models/instructor");
const currency = require("../models/cc");
const subtitle = require("../models/subtitle");
const ratingCourse = require("../models/ratingCourse");
const Traniee = require("../models/trainee");
const { populate } = require("../models/instructor");
const mongoose = require("mongoose");
const { search } = require("../routes/course");

//Loading the homepage
exports.loadHome = (req, res) => {
  res.render("viewallcourseshome");
};

//Displaying all courses
exports.displayAllCourses = async (req, res) => {
  const courses = await course.find().populate("instructorID");
  // console.log(courses);
  res.send(courses);
};

// instructor searches in his own courses
exports.instructorSearchForCourse = async (req, res) => {
  const { search, instID } = req.query;
  let courses = await course
    .find({ instructorID: instID })
    .populate("instructorID")
    .populate({ path: "rating", populate: { path: "traineeID" } });

  console.log(courses);
  res.send(
    courses.filter(function (course) {
      return (
        course.courseName.toLowerCase().includes(search.toLowerCase()) ||
        course.subject.toLowerCase().includes(search.toLowerCase())
      );
    })
  );
};

//Searching for a specific Course
exports.searchingForCourse = async (req, res) => {
  let courses = await course
    .find({})
    .populate("instructorID")
    .populate({
      path: "rating",
      populate: {
        path: "traineeID",
      },
    });
  const search = req.query.search.toLowerCase();
  res.send(
    courses.filter(function (course) {
      return (
        course.courseName.toLowerCase().includes(search) ||
        course.instructorID.userName.toLowerCase().includes(search) ||
        course.subject.toLowerCase().includes(search)
      );
    })
  );
};

exports.searchingForCourseById = async (req, res) => {
  const id = req.query.courseId;

  const courses = await course
    .findById(id)
    .populate({
      path: "subtitles",
      populate: {
        path: "videos",
      },
    })
    .populate("instructorID")
    .populate({
      path: "rating",
      populate: {
        path: "traineeID",
      },
    });
  const ratings = courses.rating ? courses.rating : "";
  res.send({
    courses: courses,
    ratings: ratings,
    subtitles: courses.subtitles,
  });
};

//Getting all courses prices
exports.getAllPrices = async (req, res) => {
  const courses = await course.find();
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/43b6a15bca2f1a3c5e37e43d/pair/USD/${req.session.code}`
  );

  const ratio = await response.json();
  console.log(ratio.conversion_rate);
  const code = req.session.code;

  res.render("viewprices2", { courses, ratio, code });
};

//filtering courses according to country

exports.filterCoursesSubject = async (req, res) => {
  const subj = req.body.subject;
  const courses = await course.find({ subject: subj });
  console.log(courses, subj);
  res.send({ courses });
};

const getAvgRating = async (courseID) => {
  var sum = 0;
  var av = 0;
  const avg = await rating.find({ courseID: courseID });
  for (let i = 0; i < avg.length; i++) {
    sum += avg[i].rate;
  }
  console.log(sum);
  av = sum / avg.length;
  console.log(av);
  res.status().send(av);
};

exports.fil = async (req, res) => {
  var { pricee, sub, ratingg, courses } = req.body;
  console.log(pricee, sub, ratingg);
  var ids = [];
  if (courses) {
    for (let c of courses) {
      ids.push(c._id);
    }
  }
  const r = parseInt(ratingg);
  var result = [];
  var c = await course.find({});

  var subs = [];
  for (let s of c) {
    subs.push(s.subject);
  }
  console.log(courses);
  if (
    courses.length > 0 &&
    (pricee.join() != [0, 0].join() || sub.join() != [].join() || ratingg != -1)
  ) {
    // res.send(courses.filter((c) => {
    //   pricee.join() != [0, 0].join() ? c.price <= pricee[1] && c.price > pricee[0] : c.price < 500000 &&
    //     sub.join() != [].join() ? sub.includes(c.subject) : subs.includes(c.subject) &&
    //       ratingg != -1 ? c.averageRating >= ratingg && c.averageRating < ratingg + 1 : c.averageRating <= 5
    // }))

    res.send(
      await course
        .find({
          _id: { $in: ids },
          price:
            pricee.join() != [0, 0].join()
              ? { $lte: pricee[1], $gt: pricee[0] }
              : { $lte: 500000 },
          subject: sub.join() != [].join() ? { $in: sub } : { $in: subs },
          averageRating:
            ratingg != -1 ? { $gte: ratingg, $lt: ratingg + 1 } : { $lte: 5 },
        })
        .populate("instructorID")
        .populate("rating")
    );
    console.log(
      await course.find({
        _id: { $in: ids },
        price:
          pricee.join() != [0, 0].join()
            ? { $lte: pricee[1], $gt: pricee[0] }
            : { $lte: 500000 },
        subject: sub.join() != [].join() ? { $in: sub } : { $in: subs },
        averageRating:
          ratingg != -1 ? { $gte: ratingg, $lt: ratingg + 1 } : { $lte: 5 },
      })
    );

    // console.log(courses.filter((c) => {
    //   pricee.join() != [0, 0].join() ? c.price <= pricee[1] && c.price > pricee[0] : c.price < 500000 &&
    //     sub.join() != [].join() ? sub.includes(c.subject) : subs.includes(c.subject) &&
    //       ratingg != -1 ? c.averageRating >= ratingg && c.averageRating < ratingg + 1 : c.averageRating <= 5
    // }), 'first')
  } else if (
    pricee.join() != [0, 0].join() ||
    sub.join() != [].join() ||
    ratingg != -1
  ) {
    res.send(
      await course.find({
        price:
          pricee.join() != [0, 0].join()
            ? { $lte: pricee[1], $gt: pricee[0] }
            : { $lte: 500000 },
        subject: sub.join() != [].join() ? { $in: sub } : { $in: subs },
        averageRating:
          ratingg != -1 ? { $gte: ratingg, $lt: ratingg + 1 } : { $lte: 5 },
      })
    );
    console.log(
      await course.find({
        price:
          pricee.join() != [0, 0].join()
            ? { $lte: pricee[1], $gt: pricee[0] }
            : { $lte: 500000 },
        subject: sub.join() != [].join() ? { $in: sub } : { $in: subs },
        averageRating:
          ratingg != -1 ? { $gte: ratingg, $lt: ratingg + 1 } : { $lte: 5 },
      })
    );
  }
  // else {
  //   res.send(await course.find({

  //     //subject: sub.join() != [].join() ? { $in: sub } : { $in: subs },
  //     // price: pricee.join() != [0, 0].join() ? { $lte: pricee[1], $gt: pricee[0] } : { $lte: 500000 },
  //     averageRating: ratingg != -1 ? { $gte: ratingg, $lt: ratingg + 1 } : { $lte: 5 }
  //   }))
  // }
};

exports.filter = async (req, res) => {
  var { pricee, sub, ratingg, courses } = req.body;
  console.log(pricee, sub, ratingg);

  const r = parseInt(ratingg);
  var result = [];
  if (pricee == [0, 0] && sub == undefined && r != -1) {
    if (courses) {
      result = courses.filter(
        (c) => c.averageRating > ratingg && c.averageRating <= ratingg
      );
    } else {
      var result = await course.find({
        averageRating: { $gte: ratingg, $lt: r + 1 },
      });
    }
    console.log("entered first if");
  } else if (sub.length == 0 && r == -1 && pricee != [0, 0]) {
    if (courses) {
      result = courses.filter(
        (c) => c.price <= pricee[1] && c.price > pricee[0]
      );
    } else {
      var result = await course.find({
        price: { $lte: pricee[1], $gt: pricee[0] },
      });
    }

    console.log("entered second if ");
  } else if (pricee == [0, 0] && r == -1 && sub != undefined) {
    if (courses) {
      result = courses.filter((c) => sub.includes(c.subject));
    } else {
      var result = await course.find({ subject: { $in: sub } });
    }
    console.log("entered third if");
  } else if (pricee != [0, 0] && r != -1 && sub != undefined) {
    if (courses) {
      result = courses.filter(
        (c) =>
          sub.includes(c.subject) &&
          c.price <= pricee[1] &&
          c.price > pricee[0] &&
          c.averageRating > ratingg &&
          c.averageRating <= ratingg
      );
    } else {
      var result = await course.find({
        averageRating: { $gte: r, $lt: r + 1 },
        price: { $lte: pricee[1], $gt: pricee[0] },
        subject: { $in: sub },
      });
    }
    console.log("entered else", result);
  } else {
    var result = await course.find({});
  }
  // const result= Array.from(new Set(r))
  // const filteredArray= r1.filter(value => r2.includes(value) && r3.includes(value));
  res.send(result);
};

exports.filterPriceAndRating = async (req, res) => {
  let checkp = "x";
  let checkr = "y";
  const lr = parseInt(req.body.lr);
  const ur = parseInt(req.body.ur);
  const lv = parseInt(req.body.lv);
  const uv = parseInt(req.body.uv);
  checkp = req.body.checkp;
  checkr = req.body.checkr;
  console.log(req.body);
  console.log(checkr);
  if (checkr === "true" && checkp === "true") {
    const courses = await course.find({
      rating: { $gt: lr, $lt: ur },
      price: { $gt: lv, $lt: uv },
    });
    res.render("viewCoursesinSubject", { courses });
  } else if (checkr === "true") {
    const courses = await course.find({ rating: { $gt: lr, $lt: ur } });
    res.render("viewCoursesinSubject", { courses });
  } else if (checkp === "true") {
    const courses = await course.find({ price: { $gt: lv, $lt: uv } });
    res.render("viewCoursesinSubject", { courses });
  }
};

// exports.setCurrency = async () => {
//   const response = await fetch(
//     `https://v6.exchangerate-api.com/v6/43b6a15bca2f1a3c5e37e43d/pair/USD/${}`
//   );
//   var data = await response.json();

//   console.log(data.conversion_rate);
// };

exports.viewRatings = async (req, res) => {
  const cid = req.query.id;
  // const biog = req.body
  const cour = await ratingCourse.find({ courseID: cid }).populate("rate");

  res.send(cour);

  console.log(cour);
};

exports.viewPreview = async (req, res) => {
  const cid = req.query.id;
  const c = course.findById(cid);
  const pv = c.previewVideo;
  res.send(pv);
};

exports.createSubtitle = async (req, res) => {
  const sname = req.body.subtitleName;
  const courId = req.query.id;
  const newSubtitle = await subtitle.create({ name: sname });
  const cour = await course.updateOne(
    { _id: courId },
    { $push: { subtitles: mongoose.Types.ObjectId(newSubtitle._id) } }
  );

  const cours = await course.findOne({ _id: courId });

  res.send(cours);
};
