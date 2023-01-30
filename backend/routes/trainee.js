const express = require("express");
const router = express.Router();
const {
  getGrade,
  getTraineess,
  updatePassword,
  getExamAnswer,
  postNotes,
  updateNotes,
  getNotes,
  sendCourseRequest,
} = require("../controllers/traineeController");
const traineeController = require("../controllers/traineeController");
// GET all Trainees
router.get("/trainees", getTraineess);
// GET a grade
router.get("/viewGradetrainee", getGrade);
// update password
router.patch("/viewTraineePassword", updatePassword);
// view exam answer
router.get("/viewAnswerstrainee", getExamAnswer);
// to write notes
router.post("/traineeWriteNotes", postNotes);
// to update notes
router.patch("/traineeUpdateNotes", updateNotes);
// to get notes
router.get("/traineeGetNotes", getNotes);
// to send course request
router.post("/traineeSendRequest", sendCourseRequest);

// GET view his/her progress in certain course
router.get("/viewProgress", traineeController.viewProgress);

// GET request a refund
router.get("/refundReq", traineeController.requestRefund);

router.get("/traineeView", traineeController.getTraineeCourses);
router.get("/subtitles", traineeController.getSubtitleVideos);

router.get("/exam", traineeController.getSubtitleExam);
router.get("/video", traineeController.getSubtitleVideo);
router.post("/grade", traineeController.setExamGrade);
router.get("/getTraineeDetails", traineeController.getTraineeDetails);
router.post("/payForACourse", traineeController.payForACourse);
module.exports = router;
