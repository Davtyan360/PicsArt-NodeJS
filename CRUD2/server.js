const express = require("express");

const app = express();

const routing = require("./routing");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use("/",routing);

app.listen(3000,()=>{
    console.log("http://localhost:3000/");
})