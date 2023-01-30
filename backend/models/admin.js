const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: false,
    unique: true,
  },

  password: {
    type: String,
    required: false,
  },
});
const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;
