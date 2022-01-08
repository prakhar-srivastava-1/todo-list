// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>")
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
