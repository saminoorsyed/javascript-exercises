const add = function(number1, number2) {
	return number1+number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array1) {
  let final = 0;
	for (let i = 0; i<array1.length; i++){
    final += array1[i];
  };
  return final;
};

const multiply = function(listNums) {
  let result = 1;
  for (let i = 0; i< listNums.length; i++){
    result *= listNums[i];
  };
  return result;
};

const power = function(base, pow) {
	let result = 1;
  for (let i = 0; i<pow; i++){
    result *= base
  }
  return result
};

const factorial = function(num) {
	if (num == 0){
    return 1
  }
  let result = 1
  for ( i = num; i>0; i--){
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
