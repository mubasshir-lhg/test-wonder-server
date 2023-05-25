const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imgUrl: String,
  title: String,
  type: String
});

module.exports = mongoose.model("Image", imageSchema);