const fs = require("fs");

function postElem(valObj) {
  return new Promise((res, rej) => {
    fs.readFile("./db.json", "utf8", (err, data) => {
      if (err) return console.log(err);
      let obj = JSON.parse(data);
      valObj.id = obj["Users"].length + 1;
      obj["Users"].push(valObj);
      data = JSON.stringify(obj);
      res(data);
    });
  });
}

function getAllElem() {
  return new Promise((res, rej) => {
    fs.readFile("./db.json", "utf8", (err, data) => {
      if (err) return console.log(err);
      let obj = JSON.parse(data);
      res(obj["Users"]);
    });
  });
}

module.exports.postElem = postElem;
module.exports.getAllElem = getAllElem;
