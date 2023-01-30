const exam = require("../models/exam");
const questions = require("../models/questions");
const subtitles = require("../models/subtitle");
const mongoose = require("mongoose");

const createExam = async (req, res) => {
  var i = 0;
  var questionsResult = [];
  var qholder = null;
  const questionsArr = req.body.questionsArray;

  while (i < questionsArr.length) {
    qholder = await questions.create({
      question: questionsArr[i][0],
      choice1: questionsArr[i][1],
      choice2: questionsArr[i][2],
      choice3: questionsArr[i][3],
      choice4: questionsArr[i][4],
      correctanswer: questionsArr[i][5],
      courseID: mongoose.Types.ObjectId(req.query.courseid),
    });

    questionsResult.push(qholder._id);
    //console.log(i)
    i++;
  }

  const examEntry = await exam.create({
    courseID: mongoose.Types.ObjectId(req.query.courseid),
    questions: mongoose.Types.Array(questionsResult),
  });

  console.log(examEntry);

  console.log(examEntry._id);

  await subtitles.findByIdAndUpdate(req.query.subid, { exam: examEntry._id });
};

module.exports = { createExam };
