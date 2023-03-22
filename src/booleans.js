function negate(a) {
// NOTE GATE
  return (!a);
};

function both(a, b) {
// AND GATE
  return (a&&b);
};

function either(a, b) {
// OR GATE
  return (a||b);
};

function none(a, b) {
// NOR GATE
  return !(a||b);
};

function one(a, b) {
// XOR GATE
  return (a && !b) || (!a && b);
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return a===b;
};

function isGreaterThan(a, b) {
return a>b;
};

function isLessThanOrEqualTo(a, b) {
return a<=b;
};

function isOdd(a) {
  // NUMBERS NOT DIVISIBLE BY 2, REMAINDER CAN'T BE 0!
  return a%2 == !0;
};

function isEven(a) {
 // NUMBERS DIVISIBLE BY 2, REMAINDER MUST = 0!
 return a%2 == 0;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a))
};

function startsWith(char, string) {
  return string.startsWith(char);
};

function containsVowels(string) {
  return /[aeiou]/i.test(string);
};

function isLowerCase(string) {
return string === string.toLowerCase()};

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
