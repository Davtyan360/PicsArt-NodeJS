const mongoose = require("mongoose");

let postSchema = mongoose.Schema({
  userMail: {
    type: String,
    required: true,
  },
  text: {
    type: String,

  },
  images: {
    type:Object
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
