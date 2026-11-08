const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num2, num1) {
	return num2 - num1;
};

const sum = function(arr) {
	const sumAll = arr.reduce((total, next) => {
    return total + next;
  }, 0);

  return sumAll;
};

const multiply = function(arr) {
	const multiplyAll = arr.reduce((total, next) => {
    return total * next;
  }, 1);

  return multiplyAll;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};  

const factorial = function(num) {
  let sum = 1;

	for (let i = num; i > 0; i--) {
    sum *= i;
  }

  return sum;
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
