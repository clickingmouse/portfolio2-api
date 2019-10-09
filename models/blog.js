const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Scehma
const BlogSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  rant: {
    type: String
  },
  author: {
    type: String,
    required: true
  }
});

module.exports = Blog = mongoose.model("blog", BlogSchema);
