const express = require("express");
const fs = require("fs");
const deleteUsers = express.Router();
const fileVal = require("./getJsonVal.routes");

deleteUsers.delete("/api/user/:id", (req, res) => {
  let arr;
  fileVal
    .getAllElem()
    .then((users) => {
      arr = users;
      return users.find((x) => x.id == +req.params.id);
    })
    .then((user) => {
      arr.splice(arr.indexOf(user), 1);
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

module.exports = deleteUsers;
