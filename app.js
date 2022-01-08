// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  // capture the day and send it to home page
  var today = new Date();
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = today.getDay();
  console.log(weekdays[day]);
  res.send("<h1>" + weekdays[day] + "</h1>")
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
