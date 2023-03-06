function sayHello (string) {
  // TEMPLATE LITERAL
  return `Hello, ${string}!`;
};

function uppercase (string) {
  return string.toUpperCase();
};

function lowercase (string) {
  return string.toLowerCase();
};

function countCharacters (string) {
  return string.length;
};

function firstCharacter (string) {
  // NOTE: first character begins at 0 not 1!
return string.charAt()
};

function firstCharacters (string, n) {
  return string.substring(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
