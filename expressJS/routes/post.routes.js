const express = require("express");
const postUsers = express.Router();
const fs = require("fs");
const fileVal = require("./getJsonVal.routes");

postUsers.post("/api/user", (req, res) => {
  if (!req.body.name) return res.status(404).send("Something goes wrong");
  fileVal
    .postElem({
      name: req.body.name,
    })
    .then((x) => fs.writeFileSync("./db.json", x));
  res.end();
});

module.exports = postUsers;
