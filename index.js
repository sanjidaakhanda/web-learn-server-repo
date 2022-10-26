const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const categories = require("./Data/categories.json");
const courses = require("./Data/courses.json");
app.get("/", (req, res) => {
  res.send("now web learn is running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((c) => c.id === id);
  res.send(singleCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const coursesCategory = courses.filter((p) => p.course_id === id);
  res.send(coursesCategory);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});
