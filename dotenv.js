let fs = require("fs").promises;
module.exports.config = () => {
  fs.readFile(".env")
    .then((data) => {
      data
        .toString()
        .split("\r\n")
        .forEach((element) => {
          if (element.split("")[0] == "#") return;
          let elArr = element.split("=");
          if (elArr.length > 2) process.env[elArr.shift()] = elArr.join("=");
          else process.env[elArr[0]] = elArr[1];
        });
    })
    .catch((err) => console.error(err));
};
