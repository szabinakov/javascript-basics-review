function negate(a) {
  return a === false;
};

function both(a, b) {
  return a === true && b === true;
};

function either(a, b) {
  return a === true || b === true;
};

function none(a, b) {
  return a === false && b === false; 
}

function one(a, b) {
  return (a === true && b === false) || (a === false && b === true);
};

function truthiness(a) {
  //Your code here
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  //Your code here
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
