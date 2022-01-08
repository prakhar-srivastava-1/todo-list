// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

// manually created modules
const date = require(__dirname + "/date.js");

const app = express();

// items in the list - GLOBAL scope
// Items can be pushed into constant arrays
const items = ["Buy food", "Cook food", "Eat food"];

// declare static folder "public" address
app.use(express.static("public"))

// bodyParser to capture form data
app.use(bodyParser.urlencoded({extended:true}));

// start using ejs for templating
app.set("view engine", "ejs");

// GET root "/"
app.get("/", function(req, res) {
  // call date.getDate()
  const day = date.getDate();
  res.render("list", {kindOfDay: day, items: items});
});

// POST to root "/"
app.post("/", function(req, res) {
  const formData = req.body;
  const newTask = formData.newTask;
  items.push(newTask);
  // console.log(items);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
