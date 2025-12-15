const mongoose = require("mongoose");

const CensusSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  censusTaker: { type: String, required: true },
  numPeople: { type: Number, required: true },

  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true }
});

module.exports = mongoose.model("Census", CensusSchema);

