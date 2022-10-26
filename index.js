const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const allCourse = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Show Pro Learner in UI....");
});
//all data send ui
app.get("/courses", (req, res) => {
  res.send(allCourse);
});

//single courses
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = allCourse.find((course) => course.id == id);
  res.send(selectedCourse);
});

app.listen(Port, () => {
  console.log("Pro Learner Server is Running....");
});
