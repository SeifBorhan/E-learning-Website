const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ccSchema = new Schema({
  countryCode: { type: String },
  countryName: { type: String },
  currencyCode: { type: String },
  population: { type: String },
  capital: { type: String },
  continentName: { type: String }
});
const cc = mongoose.model("CC", ccSchema);
module.exports = cc;
