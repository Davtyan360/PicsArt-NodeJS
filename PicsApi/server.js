require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const auth = require("./userRout/auth");
const updateUser = require("./userRout/updateUser");
const searchUser = require("./userRout/searchUser");
const getUserPosts = require("./userRout/getUserPosts");

const uploadImage = require("./uploadImage/upload");

const createPost = require("./postRout/creaetPost");
const postWork = require("./postRout/postWork");
const lastePosts = require("./postRout/lastPosts");
const searchByDesc = require("./postRout/searchByDesc");
const postsPhotos = require("./postRout/postsPhotos");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", auth);
app.use("/api/users/update", updateUser);
app.use("/api/users/search", searchUser);
app.use("/api/users/posts", getUserPosts);
app.use("/api/posts/work", postWork);
app.use("/api/posts/get", lastePosts);
app.use("/api/posts/desc", searchByDesc);
app.use("/api/post/photos", postsPhotos);
app.use(
  "/api/posts",
  uploadImage.fields([
    { name: "image", maxCount: 5 },
    { name: "text", maxCount: 1 },
  ]),
  createPost
);
//connecting to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Datebase was connected succesful")
);
//Starting server
app.listen(port, () =>
  console.log(`Server started on http//:localhost:${port}`)
);
