const express = require("express");
const bcript = require("bcryptjs");

const verifyToken = require("../tokensWork/verifyToken");
const User = require("../model/User");

const router = express.Router();

//     /api/users/update/password - password update
router.post("/password", verifyToken, async (req, res) => {
  await updateUser(req.user._id, req.body.password);
  res.send(req.user);
});

async function updateUser(id, changePassword) {
  const hashedPassword = await bcript.hash(
    changePassword,
    process.env.SALT * 1
  );
  const result = await User.updateOne(
    { _id: id },
    {
      $set: {
        password: hashedPassword,
      },
    }
  );
  return result;
}

module.exports = router;
