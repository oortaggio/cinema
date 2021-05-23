const mongoose = require("mongoose");
const Schema = mongoose.Schema
const postisSchema = new Schema({
  codice: String,
  nominativo: String,
  occupato: Boolean
})

const Postis = mongoose.model("Postis", postisSchema);
module.exports = Postis;
