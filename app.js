// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// start using ejs for templating
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  // capture the day and send it to home page
  var today = new Date();
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = today.getDay();
  console.log(weekdays[day]);
  res.render("list", {kindOfDay: weekdays[day]});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
