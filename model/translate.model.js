const mongoose = require('mongoose');

// creating monggose schema object for database.

const wordSchema =new mongoose.Schema (
  {
    word: {type: String, required: true},
  },
  {
    versionKeys: false,
    timestamps: true,
  }
);

module.exports = mongoose.model ('word', wordSchema);