const express = require("express");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

const router = express.Router();

const path = "./DB.json";


let getData = ()=>{
    let data = fs.readFileSync(path);
    return JSON.parse(data);
}

let saveData = (data)=>{
    let ans = JSON.stringify(data);
    fs.writeFileSync(path,ans);
}

router.post('/',(req,res)=>{
    let DB = getData();
    DB[uuidv4()] = req.body;
    saveData(DB);
    res.status(201)
    res.send("Done")
});

router.get('/:id',(req,res)=>{
    let DB = getData();
    res.send(DB[req.params.id]);
})

router.delete('/:id',(req,res)=>{
    let DB = getData();
    delete DB[req.params.id];
    saveData(DB);
    res.send(DB);
})

router.put('/:id',(req,res)=>{
    let DB = getData();
    DB[req.params.id] = {
        ...DB[req.params.id],
        ...req.body
    };
    saveData(DB);
    res.status(201)
    res.send("Done")
});

module.exports = router;