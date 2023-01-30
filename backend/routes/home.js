const express = require("express");
const coursesController = require("../controllers/coursesController");

const router = express.Router();

router.get("/Home", coursesController.displayAllCourses);
router.get("/searchresults", coursesController.searchingForCourse);
router.get("/courses", coursesController.displayAllCourses);
router.post("/courses", coursesController.displayAllCourses);
router.get("/course", coursesController.searchingForCourseById);
router.get("/courseEdit", coursesController.searchingForCourseById);
router.get("/coursesprices", (req, res) => {
  res.render("viewprices");
});
router.post("/coursesprices", coursesController.getAllPrices);
router.post("/Courses/c1", coursesController.filterCoursesSubject);
router.post("/Courses/c2", coursesController.filterPriceAndRating);
// router.post("/Courses/cur",coursesController.setCurrency);
// homeRouter.post("/Courses/cur",coursesController.setCurrency);

module.exports = router;
