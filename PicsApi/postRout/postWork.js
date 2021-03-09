const express = require("express");

const Post = require("../model/Post");
const verifyToken = require("../tokensWork/verifyToken");

const router = express.Router();

//   /api/posts/work/delete/:id - deleting post by id
router.delete("/delete/:id", verifyToken, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) return res.status(400).send("Cant find post with such id");
console.log(post.userMail+" ")
  if(post.userMail!=req.user.email)
  return res.status(400).send("Its not your post");
  Post.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err);
    res.send("Successful deletion");
  });
});
//   /api/posts/work/:id - getting post by id
router.get("/:id", verifyToken, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) return res.status(400).send("Cant find post with such id");
  res.send(post);
});

module.exports = router;
