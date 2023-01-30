const ccController = require("../controllers/ccController");
const express = require('express')
const router = express.Router()
router.post("/insertCreditCard", ccController.insertCc);
module.exports = router

