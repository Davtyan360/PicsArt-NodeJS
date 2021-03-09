const express = require("express");

const verifyToken = require("../tokensWork/verifyToken");
const User = require("../model/User");

const router = express.Router();

//api/users/search/:mail - User search by mail
router.get("/:mail", verifyToken, async (req, res) => {
  let { mail } = req.params;
  
  const result = await User.findOne({ email: mail });
  if (!result) return res.status(400).send("No user with such mail");
 
  res.send({ name: result.name, email: result.email, postsID: result.postsID });
});

module.exports = router;
