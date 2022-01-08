// jshint esversion:6

exports.getDate = function() {
  // capture the day and date and send it to home page
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);
  return day;
};


exports.getDay = function() {
  // capture the day and date and send it to home page
  var options = {
    weekday: "long",
  };

  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);
  return day;
};
