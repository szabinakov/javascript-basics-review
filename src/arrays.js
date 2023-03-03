const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.join().split(",");
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""));  
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const firstHalf = array.slice(0, index);
  const secondHalf = array.slice(index + 1);
  const newArray = firstHalf.concat(secondHalf);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => string.match(/^[aeiou]/gi));
};

const removeSpaces = string => {
  return string.replace(/ /g,"");
};

//const sumNumbers = numbers => {
  //let sum = 0
  //numbers.forEach(number => sum += number);
  //return sum;
//};

//const sumNumbers = numbers.reduce((acc, number) => {
  //return acc + number;
//});

//const sumNumbers = numbers.reduce((acc, num) => {
  //return acc + num;
//});

const sumNumbers = numbers => {
  const totalValue = numbers.reduce((acc, num) => {
    return acc + num;
  });
  return totalValue;
};

const sortByLastLetter = strings => {
  //return strings.sort();
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
