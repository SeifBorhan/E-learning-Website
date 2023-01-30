const problem = require("../models/problem");

const instructor = require("../models/instructor");
const trainee = require("../models/trainee");
const { default: mongoose } = require("mongoose");

// report problem

exports.reportProblem = async (req, res) => {
  const { type, description, id, courseID } = req.body;
  var p;
  if (await instructor.findById(id)) {
    p = await problem.create({
      instructorID: mongoose.Types.ObjectId(id),
      description,
      courseID: mongoose.Types.ObjectId(courseID),
      type,
    });
  } else if (await trainee.findById(id)) {
    p = await problem.create({
      traineeID: mongoose.Types.ObjectId(id),
      description,
      courseID,
      type,
    });
  }
  res.send(p);
};

exports.viewProblems = async (req, res) => {
  var userID = req.query.id;
  var tProblems = await problem.find({ traineeID: userID });
  var iProblems = await problem.find({ instructorID: userID });
  console.log(tProblems, iProblems);

  if (tProblems.length == 0) {
    res.send(iProblems);
    console.log("ana hena1");
  } else if (iProblems.length == 0) {
    res.send(tProblems);
    console.log("ana hena 2");
  }
};
exports.addComment = async (req, res) => {
  const { comment, problemID } = req.body;
  const p = await problem.findByIdAndUpdate(
    { _id: problemID },
    { $push: { comments: comment } },
    { new: true }
  );
  res.send(p);
};
