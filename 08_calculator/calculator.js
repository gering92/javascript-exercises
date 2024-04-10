const add = function(a, b) {
  return a + b;
  
  /*
  args.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0)
  */
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	const result = numbers.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0)
  return result;
};

const multiply = function(numbers) {
  const product = numbers.reduce((total, currentNum) => {
    return total * currentNum;
  })
  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
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
