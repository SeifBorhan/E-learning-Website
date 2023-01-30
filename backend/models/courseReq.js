const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseReqSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trainee",
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
});
const courseReq = mongoose.model("courseReq", courseReqSchema);
module.exports = courseReq;