const express = require("express");
const fs = require("fs");
const mime = require("mime-types");
const app = express();

function staticFu(rd) {
  return async (req, res, next) => {
    await fs.readdir(rd, async (err, data) => {
      for (let elem in data) {
        rd1(rd, "/" + rd + "/" + data[elem]);
      }
    });
    next();
  };
}
function rd1(rd, path) {
  app.get(path, async (req, res) => {
    let urlarr = req.originalUrl.split("/");

    let ind = urlarr.findIndex((elem) => elem == rd);

    if (ind != -1) {
      let path = "." + urlarr.join("/");

      await fs.lstat(path, (err, data) => {
        if (err) res.status(400).send({ text: "err1" });
      });

      let ex = urlarr[urlarr.length - 1].split(".")[1];

      res.setHeader("content-type", mime.lookup(ex));

      await fs.readFile(path, async (err, data) => {
        if (err) res.status(400).send({ text: "err2" });
        res.send(await data);
      });
    }
  });
}
