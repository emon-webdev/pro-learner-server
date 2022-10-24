const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

//data get
app.get("/", (req, res, next) => {
  res.send("Assignment 10 Server is Running");
});








app.listen(Port, () => {
  console.log("Assignment 10 Server is Running", Port);
});
