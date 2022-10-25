const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const categories = require("./Data/categories.json");

app.get("/", (req, res) => {
  res.send("now web learn is running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});
