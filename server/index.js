const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Post = require("./model");

const app = express();

app.use(cors());

app.get("/", async (_, res) => res.status(200).send({}));

app.get("/api/posts", async (_, res) => {
  const posts = await Post.find({});

  res.status(200).send(posts);
});

mongoose.connect(
  "mongodb://mongodb:27017/data",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => {
    console.log("MongoDB was connected");
    app.listen(5000, () => console.log("Server is listning"));
  }
);

