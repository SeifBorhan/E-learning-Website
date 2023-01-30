const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refundReqSchema = new Schema({
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
const refundReq = mongoose.model("refundReq", refundReqSchema);
module.exports = refundReq;