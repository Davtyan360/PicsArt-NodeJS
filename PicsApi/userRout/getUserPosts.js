const express = require("express");

const verifyToken = require("../tokensWork/verifyToken");
const User = require("../model/User");
const Post = require("../model/Post");

const router = express.Router();

//    /api/users/posts/:mail/all - get users all posts
router.get("/:mail/all", verifyToken, async (req, res) => {
  let { mail } = req.params;
  const user = await User.findOne({ email: mail });
  if (!user) return res.status(400).send("No user with such mail");
  let arr = [];
  user.postsID.map(async (val, ind) => {
    const post = await Post.findOne({ _id: val });
    await arr.push({ text: post.text, images: post.images });
    if (ind == user.postsID.length - 1) res.send(arr);
  });
});

//    /api/users/posts/all - user gets his all posts
router.get("/all", verifyToken, (req, res) => {
  let arr = [];
  req.user.postsID.map(async (val, ind) => {
    const post = await Post.findOne({ _id: val });
    arr.push({ text: post.text, images: post.images });
    if (ind == req.user.postsID.length - 1) res.send(arr);
  });
});

module.exports = router;
