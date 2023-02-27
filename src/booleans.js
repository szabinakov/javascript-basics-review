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
  if (!a) {
    return false;
  } else { return true;
  }
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
  return a % 2 !== 0;
};

function isEven(a) {
  return a % 2 === 0;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  return string.startsWith(char);
};

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  } else {return false;
  }
};

function isLowerCase(string) {
  return string === string.toLowerCase();
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
