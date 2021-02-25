const fs = require("fs");
const express = require("express");
const putUsers = express.Router();
const fileVal = require("./getJsonVal.routes");
putUsers.put("/api/user/:id", (req, res) => {
  let arr;
  fileVal
    .getAllElem()
    .then((val) => {
      arr = val;
      return val.find((x) => x.id == +req.params.id);
    })
    .then((user) => {
      if (!user) return res.status(404).send("Something goes wrong");
      user.name = req.body.name;
      return arr;
    })
    .then((x) => {
      fs.readFile("./db.json", "utf8", (err, data) => {
        if (err) return console.log(err);
        let obj = JSON.parse(data);
        obj["Users"] = x;
        fs.writeFileSync("./db.json", JSON.stringify(obj));
        res.end();
      });
    });
});

module.exports = putUsers;
