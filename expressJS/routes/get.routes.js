const express = require("express");
const getUsers = express.Router();
const fileVal = require("./getJsonVal.routes");

getUsers.get("/api/user", (req, res) => {
  fileVal.getAllElem().then((val) => res.send(val));
});
getUsers.get("/api/user/:id", (req, res) => {
  fileVal
    .getAllElem()
    .then((val) => val.find((x) => x.id == +req.params.id))
    .then((user) => {
      if (!user) return res.status(404).send("Something goes wrong");
      res.send(user);
    });
});
getUsers.get("/api/user/search/:val", (req, res) => {
  fileVal
    .getAllElem()
    .then((val) => val.filter((elem) => elem.name.includes(req.params.val)))
    .then((arr1) => res.send(arr1));
});

module.exports = getUsers;
