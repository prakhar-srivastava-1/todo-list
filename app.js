// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// start using ejs for templating
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  // capture the day and date and send it to home page
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
