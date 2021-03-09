const express = require("express");

const Post = require("../model/Post");
const verifyToken = require("../tokensWork/verifyToken");

const router = express.Router();

// /api/posts/get/last
router.get("/last", verifyToken, async (req, res) => {
  res.send(await Post.find().sort({ createdAt: -1 }).limit(10))
});

module.exports = router;
