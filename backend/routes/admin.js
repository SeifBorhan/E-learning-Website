const express = require("express");
const router = express.Router();
const {
  getAdmins,
  //getAdmin,
  createAdmin,
  // updateAdmin,
  getInstructors,
  getAdminDetails,
  createInstructor,
  getTrainees,
  createTrainee,
  viewProblemsAdmin,
  markProblem,
  setDiscount,
  viewRequests,
  handleRequest,
  viewRefundRequests,
  handleRefundRequest,
  setDiscounts,
  displayAllCourses,
} = require("../controllers/adminController");
// GET all admins
router.get("/", getAdmins);

// GET a single admin
router.get("/adminDetails", getAdminDetails);

// POST a new admin
router.post("/", createAdmin);

// GET all problems
router.get("/viewProblemsAdmin", viewProblemsAdmin);

// GET all problems
router.get("/getCourses", displayAllCourses);

// POST mark problem as resolved or pending
router.post("/markProblem", markProblem);

// GET all Instructors
router.get("/n", getInstructors);

// POST a new discount
router.post("/setDiscount", setDiscount);

// POST a new discount for multiple courses
router.post("/setDiscounts", setDiscounts);

// GET all trainees
router.get("/t", getTrainees);

// GET view refund requests
router.get("/refundReqs", viewRefundRequests);

// POST handle refund request
router.post("/handleRefundReq", handleRefundRequest);

// GET all course requests
router.get("/courseReqs", viewRequests);

// POST handle course request
router.post("/handleReq", handleRequest);
// POST a new trainee
//router.post('/t',createTrainee)
// frontend for create admin

// frontend for create instructor

//frontend for  create trainee

router.post("/admin", createAdmin);
router.post("/instructor", createInstructor);
router.post("/trainee", createTrainee);
module.exports = router;
