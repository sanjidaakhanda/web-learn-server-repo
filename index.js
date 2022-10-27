const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const categories = require("./Data/categories.json");
const courses = require("./Data/courses.json");
const checkOut = require("./Data/checkOut.json");

app.get("/", (req, res) => {
  res.send("now web learn is running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/checkOut", (req, res) => {
  res.send(checkOut);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((c) => c.id === id);
  res.send(singleCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "g") {
    res.send(courses);
  } else {
    const coursesCategory = courses.filter((p) => p.course_id === id);
    res.send(coursesCategory);
  }
});

app.get("/checkOut/:id", (req, res) => {
  const id = req.params.id;
  const checkOutCategory = checkOut.find((p) => p.id === id);
  res.send(checkOutCategory);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});
