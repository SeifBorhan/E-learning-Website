const instructor = require("../models/instructor");
const course = require("../models/course");
const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController");

router.get("/instructors", instructorController.viewInstructors);
router.get("/instructors/:id", instructorController.viewInstructor);
router.get(
  "/instructorViewCourses",
  instructorController.instructorViewCourses
);
router.post("/instructorChangePassword", instructorController.updatePassword);
router.get("/instructorViewRate", instructorController.getReview);
router.get("/viewSalary", instructorController.instructorViewMoney);
router.get("/new-exam", instructorController.instructorViewCourse);
router.post("/new-promotion", instructorController.instructorAddPromo);

router.get("/instructorView", instructorController.instructorView); //instructor views his profile
router.get("/instructorSearch", instructorController.instructorSearchCourse);
router.get("/instructorFilter", instructorController.instructorFilter);

router.get("/instructorEditBio", instructorController.editBio);
router.get("/instructorEditMail", instructorController.editMail);

router.post("/instructorEditProfile", instructorController.editProfile);

router.post("/uploadVideo", instructorController.uploadVideo);
router.post("/uploadPreview", instructorController.uploadPrevVideo);
router.post("/acceptContract", instructorController.acceptContract);

module.exports = router;
