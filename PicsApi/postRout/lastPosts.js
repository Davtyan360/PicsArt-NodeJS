const express = require("express");

const Post = require("../model/Post");

const router = express.Router();

// /api/posts/get/last
router.get("/last",  async (req, res) => {
  res.send(await Post.find().sort({ createdAt: -1 }).limit(10))
});

module.exports = router;
