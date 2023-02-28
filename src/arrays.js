const getNthElement = (index, array) => {
  const wrappedIndex = index % array.length; 
  return array[wrappedIndex]
};

const arrayToCSVString = array => {
  return array.toString()
};

const csvStringToArray = string => {
  const csvArray = string.split(",")
  return csvArray;
};

const addToArray = (element, array) => {
 array.push(element)
};

let addToArray2 = (element, array) => {
  return addToArray2 = [...array, element]
};

const removeNthElement = (index, array) => {
  // your code here 
};

const numbersToStrings = numbers => {
  // your code here
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
