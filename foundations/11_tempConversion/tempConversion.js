const convertToCelsius = function(fahrenHeit) {
  return Math.round(((fahrenHeit-32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round((celsius*1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
