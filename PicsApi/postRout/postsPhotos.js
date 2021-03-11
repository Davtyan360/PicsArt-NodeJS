const express = require("express");

const Post = require("../model/Post");

const router = express.Router();

// /api/post/photos/:id
router.get("/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) return res.status(400).send("Cant finde post with such id");
  const { images } = post;
  res.send(images);
});

module.exports = router;
