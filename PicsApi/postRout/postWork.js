const express = require("express");

const Post = require("../model/Post");

const router = express.Router();

//   /api/posts/work/delete/:id - deleting post by id
router.delete("/delete/:id",async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) return res.status(400).send("Cant find post with such id");
  if(post.userMail!=req.user.email)
  return res.status(400).send("Its not your post");
  Post.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err);
    res.send("Successful deletion");
  });
});
//   /api/posts/work/:id - getting post by id
router.get("/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) return res.status(400).send("Cant find post with such id");
  res.send(post);
});

module.exports = router;
