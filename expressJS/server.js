require("dotenv").config();

const express = require("express");
const app = express();

const getUsers = require("./routes/get.routes");
const postUsers = require("./routes/post.routes");
const putUsers = require("./routes/put.routes");
const deleteUsers = require("./routes/delete.routes");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(getUsers);
app.use(postUsers);
app.use(putUsers);
app.use(deleteUsers);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
