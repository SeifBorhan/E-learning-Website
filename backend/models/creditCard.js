const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creditCardSchema = new Schema({
    number: {
      type: Number,
      required: false,
    },
    ccv: {
      type: Number,
      required: true,
    },
    exp: {
      type: Number,
      required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trainee",
      },
  });


const creditCard = mongoose.model("creditCard", creditCardSchema);
module.exports = creditCard;