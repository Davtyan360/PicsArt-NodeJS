const express = require("express");
const querystring = require("querystring");

const Post = require("../model/Post");

const router = express.Router();

//  /api/posts/desc/:desc
router.get("/:desc",  async (req, res) => {
  let q = querystring.parse(req.params.desc);
  let post = await Post.find();
  if (q.userMail) post = post.filter((val) => val.userMail == q.userMail);
  if (q.text) post = post.filter((val) => val.text.includes(q.text));
  if (q.images) post = post.filter((val) => val.images.length == q.images);
  res.send(post);
});

module.exports = router;
