const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({

    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trainee",
        required: false,
    },
    videoID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Video",
        required: false,
    },
    courseID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: false,
    },
    content:{
        type: String,
        required: false

    }
})

const notes = mongoose.model('notes', notesSchema)
module.exports = notes;