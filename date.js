// jshint esversion:6

exports.getDate = function() {
  // capture the day and date and send it to home page
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  const today = new Date();
  const day = today.toLocaleDateString("en-US", options);
  return day;
};

exports.getDay = function() {
  // capture the day and date and send it to home page
  const options = {
    weekday: "long",
  };

  const today = new Date();
  const day = today.toLocaleDateString("en-US", options);
  return day;
};

exports.getYear = function() {
  // capture the day and date and send it to home page
  const options = {
    year: "numeric",
  };

  const today = new Date();
  const year = today.toLocaleDateString("en-US", options);
  return year;
};
