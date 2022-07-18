const ftoc = function(temp) {
  return roundTo10th((temp-32)*(5/9))
};

const ctof = function(temp) {
  return roundTo10th((temp*(9/5))+32)
};

const roundTo10th = function(num) {
  return Math.round(num *10)/10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
