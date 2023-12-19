const express = require("express");
const app = express();
const port = 5000;

const type = "distributors";
// app.use(cors());

const test = ["objeto 1", "objeto 2", "objeto 3"];

app.get(`/`, (req, res) => {
  res.send("hello world");  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
