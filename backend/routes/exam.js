const express = require('express')
const exam = require('../models/exam')
//const course = require('../models/course')
const inst = require('../models/instructor')
const examcont = require('../controllers/examController')

const examRouter = express.Router();

examRouter.post('/new-exam',examcont.createExam );


module.exports =  examRouter