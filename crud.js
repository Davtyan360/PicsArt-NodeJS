const http = require("http");

let arr = [];
let port = 8080;

http
  .createServer((req, res) => {
    console.log(req.method);

    if (req.method === "POST") {
      req.on("data", (chunk) => {
        let data = chunk.toString();
        if (!data.includes('"name"')) {
          res.write("something goes wrong");
          res.statusCode = 400;
          return;
        }
        arr.push(data);
      });
      req.on("end", () => {
        res.end("user added");
      });
    } else if (req.method === "GET") {
      if (!req.url.startsWith("/Users")) {
        res.statusCode = 400;
      }
      if (req.url == "/Users") res.write(arr.join("\r\n"));
      else if (req.url.match("/Users/search/?(.*)", "i")) {
       
        arr.forEach((item) => {
          if (JSON.parse(item).name.includes(req.url.split("/")[3])) {
            res.write(item);
          }
        });
      } else if (req.url.match("/Users/?(.*)", "i")) {
        arr.forEach((item) => {
          if (JSON.parse(item).name == req.url.split("/")[2]) {
            res.write(item);
            return;
          }
        });
      } else {
        res.write("Something goes wrong");
        res.statusCode = 400;
      }

      res.end("I Get Data");
    } else if (req.method === "DELETE") {
      arr.forEach((item, ind) => {
        if (JSON.parse(item).name == req.url.split("/")[2]) {
          arr.splice(ind, 1);
          return;
        }
      });
      res.end("Item Deleted");
    } else if (req.method === "PUT") {
      req.on("data", (chunk) => {
        if (req.url.match("/Users/?(.*)", "i")) {
          arr.forEach((item, ind) => {
            if (JSON.parse(item).name == req.url.split("/")[2]) {
              arr[ind] = chunk.toString();
              return;
            }
          });
        }
      });
      req.on("end", () => {
        res.end("Item putted");
      });
    }
  })
  .listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
  });
