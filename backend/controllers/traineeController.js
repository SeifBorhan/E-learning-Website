const Trainees = require("../models/trainee");
const Question = require("../models/questions");
const Exam = require("../models/exam");
const Grade = require("../models/grade");
const Notes = require("../models/notes");
const { default: mongoose } = require("mongoose");
const courseCompletion = require("../models/courseCompletion");
const jwt = require("jsonwebtoken");
const courses = require("../models/course");
const refundReq = require("../models/refundReq");
const request = require("../models/courseReq");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const YtDuration = require("youtube-duration");
// get all Trainee
exports.getTraineess = async (req, res) => {
  const traineess = await Trainees.find({});

  res.status(200).json(traineess);
};
// get  Grade
exports.getGrade = async (req, res) => {
  const id = req.query.id;
  const examID = req.query.exam;
  console.log(examID);
  //console.log(Exam.find())

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Trainee is found" });
  }

  const exam = await Grade.findOne({
    userId: id,
    examId: mongoose.Types.ObjectId(examID),
  });
  //.populate({path:'examId', select:['grade']})
  console.log(exam);
  if (!exam) {
    return res.status(404).json({ error: "No Grade is found" });
  }

  // res.status(200).json(exam.grade)
  console.log(exam.grade);
  res.send(exam.grade);
};
// update password
exports.updatePassword = async (req, res) => {
  const id = req.query.id;
  const { pass, oldPass } = req.body;
  const inst = await trainee.findById(id);
  if (await bcrypt.compare(oldPass, inst.password)) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);

    const Changepassword = await trainee.findByIdAndUpdate(
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

exports.getExamAnswer = async (req, res) => {
  const CourseId = req.query.course;
  const Examid = req.query.exam;
  const answer = await Exam.findOne({
    _id: Examid,
    courseID: mongoose.Types.ObjectId(CourseId),
  }).populate("questions");
  console.log(answer);
  if (!answer) {
    return res.status(400).json({ error: "Exam is not found" });
  }

  res.send(answer.questions);
};
// to write notes
exports.postNotes = async (req, res) => {
  const videoID = req.query.video;
  const id = req.params.id;
  const note = await Notes.create({ content });
  if (!note) {
    return res.status(400).json({ error: "Video is not found" });
  }
  //get exam answers
  // const getAnswers = async (req, res) => {
  //     const CourseId = req.query.course
  //     console.log(CourseId)
  //     //const Examid = req.query.exam
  //     const answer = await Question.find({courseID:mongoose.Types.ObjectId(CourseId)}).populate('questions')
  //     console.log(answer)
  //     if (!answer) {
  //       return res.status(400).json({error: 'Exam is not found'})
  //     }
  //     // for (let index = 0; index < answer.length; index++){
  //     //   const element = answer[index];

  //     // }

  //     res.send(answer.questions)
  //}
  exports.getExamAnswer = async (req, res) => {
    const CourseId = req.query.course;
    const Examid = req.query.exam;
    const answer = await Exam.findOne({
      _id: Examid,
      courseID: mongoose.Types.ObjectId(CourseId),
    }).populate("questions");
    console.log(answer);
    if (!answer) {
      return res.status(400).json({ error: "Exam is not found" });
    }
    // for (let index = 0; index < answer.length; index++){
    //   const element = answer[index];

    // }

    res.send(answer.questions);
  };

  res.send(note);
};
// to update notes
exports.updateNotes = async (req, res) => {
  const id = req.query.id;
  const videoID = req.query.video;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Video is not found" });
  }

  const changeNotes = await Notes.findOneAndUpdate(
    { _id: id, videoID: mongoose.Types.ObjectId(videoID) },
    {
      content: req.body.content,
    },
    {
      new: true,
    }
  );

  if (!changeNotes) {
    return res.status(400).json({ error: "Video is not found" });
  }

  res.status(200).json(changeNotes);
};
// to get notes
exports.getNotes = async (req, res) => {
  const id = req.query.id;
  const videoID = req.query.video;
  const notes = await Notes.findOne({
    _id: id,
    videoID: mongoose.Types.ObjectId(videoID),
  });
  if (!notes) {
    return res.status(400).json({ error: "Notes is not found" });
  }

  res.send(notes.content);
};
// to send request
exports.sendCourseRequest = async (req, res) => {
  const id = req.query.id;
  const courseID = req.query.course;
  const send = await Trainees.findById(id);
  if (send.courses.length != 0) {
    for (let j = 0; j < send.courses.length; j++) {
      if (send.courses[j] == courseID) {
        res.send("You Already Have this Course");
        break;
      } else if (send.courses[j] != courseID && j == send.courses.length - 1) {
        const r = await request.create({
          user: id,
          course: courseID,
          status: "pending",
        });
        console.log(r);
        res.send(r);
      }
    }
  } else {
    const r = await request.create({
      user: id,
      course: courseID,
      status: "pending",
    });
    console.log(r);
    res.send(r);
  }
};

const courseModel = require("../models/course");
const ratingModel = require("../models/ratingCourse");
const ratingModel2 = require("../models/rating");
const inst = require("../models/instructor");

exports.traineeViewCourse = async (req, res) => {
  const id = req.query.id;
  const trainee = await Trainees.findById(id);
  const coursecodes = trainee.courses;
  var i = 0;
  var arrCourses = [];
  var courseInfo = null;

  while (i < coursecodes.length) {
    console.log("loop entered");
    courseInfo = await courseModel.findById(coursecodes[i]);
    arrCourses.push(courseInfo);
    i++;
  }

  console.log(arrCourses);
  res.send(arrCourses);
};

exports.rateCourse = async (req, res) => {
  const rating = req.body.rating;
  const traineeid = req.query.id;
  const courseid = req.body.course;
  var review = req.body.enteredReview;

  if (req.body.enteredReview == "") {
    review = "empty";
  }

  const rate = await ratingModel.create({
    traineeID: traineeid,
    courseID: mongoose.Types.ObjectId(courseid),
    rate: rating,
    review: review,
    averageRating: 0,
  });

  await courseModel.findByIdAndUpdate(courseid, {
    $push: { rating: rate._id },
  });
  var sum = 0;
  var av = 0;
  const avg = await ratingModel.find({
    courseID: mongoose.Types.ObjectId(courseid),
  });
  console.log(avg);
  for (let i = 0; i < avg.length; i++) {
    sum += avg[i].rate;
  }
  console.log(sum);
  av = sum / avg.length;
  console.log(av);
  const co = await courseModel.findByIdAndUpdate(
    { _id: mongoose.Types.ObjectId(courseid) },
    { averageRating: av },
    { new: true }
  );
  res.send(co);
};

exports.rateInstructor = async (req, res) => {
  const rating = req.body.rating;
  const traineeid = req.query.id;
  var review = req.body.enteredReview;
  console.log(rating);
  console.log(traineeid);
  console.log(review);

  if (req.body.enteredReview == "") {
    review = "empty";
  }

  console.log(rating);
  const instructorID = req.body.instructor;

  const rate = await ratingModel2.create({
    traineeID: traineeid,
    instructorID: instructorID,
    rate: rating,
    review: review,
  });

  console.log(rate);

  //await courseModel.findByIdAndUpdate(courseid,{$push: {rating: rate._id}})
  var sum = 0;
  var av = 0;
  const avg = await ratingModel2.find({
    instructorID: mongoose.Types.ObjectId(instructorID),
  });
  console.log(avg);
  for (let i = 0; i < avg.length; i++) {
    sum += avg[i].rate;
  }
  console.log(sum);
  av = sum / avg.length;
  console.log(av);
  const co = await inst.findByIdAndUpdate(
    { _id: mongoose.Types.ObjectId(instructorID) },
    { averageRating: av },
    { new: true }
  );
  res.send(co);
};

const trainee = require("../models/trainee");
const subtitle = require("../models/subtitle");
const video = require("../models/video");
const exam = require("../models/exam");
const question = require("../models/questions");
const grade = require("../models/grade");
const moongose = require("mongoose");
const course = require("../models/course");
const transaction = require("../models/transaction");
const instructor = require("../models/instructor");

exports.getTraineeCourses = async (req, res) => {
  const trainees = await trainee
    .findById(req.query.id)
    .populate({ path: "courses", populate: { path: "instructorID" } });
  res.send(trainees);
};

exports.getSubtitleVideos = async (req, res) => {
  const vid = await subtitle
    .findById(req.query.id)
    .populate("videos")
    .populate("exam");
  //console.log(vid);

  res.send({ vids: vid.videos, exs: vid.exam });
};

exports.getSubtitleExam = async (req, res) => {
  const quest = await exam.findById(req.query.id).populate("questions");
  res.send(quest.questions);
};

// get subtitle video and update the course completion for the course of that video
exports.getSubtitleVideo = async (req, res) => {
  const token = req.cookies.jwt;
  console.log(req.cookies);
  var t;
  // check json web token exists & is verified
  var user;
  if (token) {
    jwt.verify(token, "supersecret", async (err, decodedToken) => {
      if (err) {
        // console.log('You are not logged in.');
        // res send status 401 you are not logged in
        res.status(401).json({ message: "You are not logged in." });
        // res.redirect('/login');
      } else {
        t = decodedToken;
        user =
          (await trainee.findById(t.name)) ||
          (await instructor.findById(t.name));
        console.log(user);
      }
    });
  } else {
    res.status(401).json({ message: "You are not logged in." });
  }
  // console.log(trainee)
  const vid = await video.findById(req.query.id);
  const sub = await subtitle
    .findOne({ videos: vid._id })
    .populate("videos")
    .populate("exam");
  const c = await course.findOne({ subtitles: sub._id }).populate("subtitles");
  const index = await getVideoIndex(c, vid._id);
  // const t = await getToken(req, res);
  const coursecomp = await courseCompletion.findOne({
    userId: user._id,
    courseId: c._id,
  });
  var arr = [];
  if (!coursecomp.completion) arr[index] = 1;
  else {
    arr = coursecomp.completion;
    arr[index] = 1;
  }

  console.log(sub.exam);
  await courseCompletion.findByIdAndUpdate(coursecomp._id, { completion: arr });
  res.send({ arr });
};

exports.setExamGrade = async (req, res) => {
  console.log(req.query.exam);
  console.log(req.query.id);
  console.log(req.body.grade);

  const g = await grade.create(
    { examId: moongose.Types.ObjectId(req.query.exam) },
    { userID: moongose.Types.ObjectId(req.query.id) },
    { grade: req.body.grade }
  );

  res.send(g);
};

exports.getWallet = async (req, res) => {
  const t = trainee.findById(req.query.id);
  const w = t.wallet;
  res.send(w);
};
exports.viewProgress = async (req, res) => {
  const courseID = req.query.id;
  const id = req.query.traineeId;
  const t = await trainee.findById(req.query.traineeId);

  console.log(courseID);
  console.log(id);

  const courseComp = await courseCompletion
    .findOne({ userId: id, courseId: mongoose.Types.ObjectId(courseID) })
    .populate("courseId");
  const vidCount = await getVideoCount(courseID);
  const watchedVidCount = await getWacthedVideoCount(courseComp);
  const progress = (watchedVidCount / vidCount) * 100;
  if (progress == 100 && courseComp.certificate == false) {
    {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "akarara2001@gmail.com",
          pass: "epaixfrltkfakrvl",
        },
      });

      const mailOptions = {
        from: "akarara2001@gmail.com",
        to: t.email,
        subject:
          "Congratulations" +
          " " +
          t.userName +
          " " +
          "Receive Certificate for" +
          " " +
          courseComp.courseId.courseName,
        html:
          `<p>Click <a href=http://localhost:3000/certificate?cid=${courseComp.courseId._id}&tid=${courseComp.userId}` +
          ">here</a>to receive your Certificate</p>",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.send("Email sent: " + info.response);
          // do something useful
        }
      });
    }
    courseComp.certificate = true;
  }
  res.send("" + progress);
};

exports.requestRefund = async (req, res) => {
  const { courseID } = req.query;
  const courseComp = await courseCompletion.findOne({
    courseId: courseID,
    userId: req.query.id,
  });
  const vidCount = await getVideoCount(courseID);
  const watchedVidCount = await getWacthedVideoCount(courseComp);
  const progress = (watchedVidCount / vidCount) * 100;
  if (progress >= 50)
    res.send(
      "refund could not be made, you have watched/viewed more than 50% of the course"
    );
  else {
    if (
      await refundReq.findOne({
        user: mongoose.Types.ObjectId(req.query.id),
        course: moongose.Types.ObjectId(courseID),
      })
    )
      res.send("this request has already been made");
    else {
      const refund = await refundReq.insertMany({
        user: mongoose.Types.ObjectId(req.query.id),
        course: moongose.Types.ObjectId(courseID),
      });
      res.send("request for a refund has been made!" + " " + refund._id);
    }
  }
};

const getVideoCount = async (course) => {
  const c = await courses.findById(course).populate("subtitles");
  var count = 0;
  for (let i = 0; i < c.subtitles.length; i++) {
    for (let j = 0; j < c.subtitles[i].videos.length; j++) {
      count++;
    }
  }
  return count;
};
const getWacthedVideoCount = async (courseComp) => {
  var count = 0;
  if (courseComp)
    for (let j = 0; j < courseComp.completion.length; j++) {
      if (courseComp.completion[j] == 1) count++;
    }

  return count;
};
const getVideoIndex = async (course, vid) => {
  var index = 0;
  for (let j = 0; j < course.subtitles.length; j++) {
    for (let i = 0; i < course.subtitles[j].videos.length; i++) {
      if (course.subtitles[j].videos[i].equals(vid)) return index;
      else index++;
    }
  }
  return -1;
};

const getToken = async (req, res) => {
  const token = req.cookies.jwt;
  console.log(req.cookies);
  var t;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
        // console.log('You are not logged in.');
        // res send status 401 you are not logged in
        res.status(401).json({ message: "You are not logged in." });
        // res.redirect('/login');
      } else {
        t = decodedToken;
      }
    });
  } else {
    res.status(401).json({ message: "You are not logged in." });
  }
  return t;
};

exports.getTraineeDetails = async (req, res) => {
  const t = await trainee.findOne({ _id: req.query.id });
  console.log(t);
  res.send(t);
};

exports.payForACourse = async (req, res) => {
  const course1 = await course
    .findOne({ _id: req.body.courseID })
    .populate("instructorID");
  const t = await trainee.findOneAndUpdate(
    { _id: req.query.id },
    { $push: { courses: course1._id } }
  );
  const course2 = await course.findOneAndUpdate(
    { _id: req.body.courseID },
    { $push: { subscribers: t._id } }
  );
  const trans = await transaction.create({
    userID: req.query.id,
    instructorID: course1.instructorID._id,
    Amount: req.body.price,
    courseID: course1._id,
  });
  const i = await instructor.findByIdAndUpdate(course2.instructorID, {
    $inc: { salary: req.body.price },
  });

  const courseComp = await courseCompletion.create({
    courseId: req.body.courseID,
    userId: req.query.id,
  });

  res.send(trans);
};
