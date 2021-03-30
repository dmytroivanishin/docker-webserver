const mongoose = require("mongoose");

const postScheme = new mongoose.Schema({
  title: String,
  body: String
});

const Post = mongoose.model("Post", postScheme);

module.exports = Post;