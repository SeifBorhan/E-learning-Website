const express = require("express");
const router = express.Router();
const problemsController = require("../controllers/problemsController");

router.post("/reportProblem", problemsController.reportProblem);
router.get("/viewProblems", problemsController.viewProblems);
router.post("/addComment", problemsController.addComment);

module.exports = router;
