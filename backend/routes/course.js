const express = require("express");
const course = require("../models/course");
const inst = require("../models/instructor");
const rat = require("../models/ratingCourse");
const coursecont = require("../controllers/courseController");
const courseController = require("../controllers/coursesController");
const traineeCont = require("../controllers/traineeController");

const router = express.Router();

//router.get('/viewCoursesbyPrice', filterCourseSub)
//router.get('/', filterCoursePriceDesc)
//router.get('/', filterCoursePriceAsc)
//router.get('/', findCourseByName)
//router.post('/', coursecont.findC)
//router.get('/')

router.get("/trainee-view", traineeCont.traineeViewCourse);
router.post("/rateCourse", traineeCont.rateCourse);
router.get("/karim-trainee-view", traineeCont.traineeViewCourse);
router.patch("/karim-trainee-view", traineeCont.rateInstructor);
router.post("/filter", courseController.fil);
router.post("/rateInstructor", traineeCont.rateInstructor);
router.get("/filter", courseController.filter);
router.post("/searchCoursesByInstructor", coursecont.findCourseByInstructor);
router.post("/searchCoursesBySubject", coursecont.findCourseBySubject);
router.post("/searchCoursesByPrice", coursecont.findCourseByPrice);
router.post("/searchCoursesByName", coursecont.findCourseByName);
router.post("/createCourse", coursecont.postCourse);
router.get(
  "/instructorSearchCourse",
  courseController.instructorSearchForCourse
);

router.get("/courseRatings", courseController.viewRatings);
// to get most views
router.get("/mostViews", coursecont.getMostViews);
router.get("/coursePreviewVideo", courseController.viewPreview);

// to get average rating of course
router.get("/avgRating", coursecont.getAvgRating);

// router.delete('/:id', (req, res) => {
//     res.json({ mssg: ' delete a course' })
// })
router.post("/createSubtitle", courseController.createSubtitle);

module.exports = router;
