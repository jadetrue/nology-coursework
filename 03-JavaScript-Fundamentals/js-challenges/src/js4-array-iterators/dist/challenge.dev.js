"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fizzBuzz = exports.formatString = exports.formatStringArray = exports.filterBooksBySearch = exports.createOddEvenArray = exports.convertStringToNumbersArray = exports.createListOfPoessessions = exports.createPercentageList = exports.removeFalseValues = void 0;

/* JS4 builds on the previous challenges and adds the use of Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consiting of the true values.
 *
 * @param {boolean[]} booleanArr [true, true, false, false, true]
 * @return {boolean[]} [true, true, true]
 */
var removeFalseValues = function removeFalseValues(booleanArr) {
  var booleanArrTrue = booleanArr.filter(function (_boolean) {
    return _boolean;
  });
  return booleanArrTrue;
};
/**
 * A function that takes an array of numbers that are between 0 - 1.
 * The function needs to create a new array with the numbers converted into a percentage
 *
 * @param {number[]} numbersArr [1, .5, .7, .25]
 * @return {string[]} ["100%", "50%", "70%", "25%"]
 */


exports.removeFalseValues = removeFalseValues;

var createPercentageList = function createPercentageList(numbersArr) {
  var percentageList = numbersArr.map(function (number) {
    return "".concat(number * 100, "%");
  });
  return percentageList;
};
/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */


exports.createPercentageList = createPercentageList;

var createListOfPoessessions = function createListOfPoessessions(possessionsArr, name) {
  var listOfPoessessions = possessionsArr.map(function (possession) {
    return name + " " + possession;
  });
  return listOfPoessessions;
};
/**
 * Intemediate Challenges
 */

/**
 * Have a look at the String method split()
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * You may need to use it below.
 */

/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */


exports.createListOfPoessessions = createListOfPoessessions;

var convertStringToNumbersArray = function convertStringToNumbersArray(numberString) {
  var arrOfNumbers = numberString.split("+").map(function (number) {
    return Number(number);
  });
  return arrOfNumbers;
};
/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 */


exports.convertStringToNumbersArray = convertStringToNumbersArray;

var createOddEvenArray = function createOddEvenArray(numberString) {
  var numberArray = convertStringToNumbersArray(numberString);
  var oddEven = numberArray.map(function (number) {
    return number % 2 === 0 ? "even" : "odd";
  });
  return oddEven;
};
/**
 * A function that takes an array of book titles and a search term.
 * The function needs fo remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 */


exports.createOddEvenArray = createOddEvenArray;

var filterBooksBySearch = function filterBooksBySearch(booksArr, searchTerm) {
  var result = booksArr.filter(function (book) {
    return book.includes(searchTerm);
  });
  return result;
};
/**
 * Advanced Challenges
 */

/**
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
 *
 * This function is failing the test's can you figure out why?
 * The bug is within the function, the test's are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} stringArr ["  dIsco", " ShOes "]
 * @return {string} "disco+shoes"
 */


exports.filterBooksBySearch = filterBooksBySearch;

var formatStringArray = function formatStringArray(stringArr) {
  var cleanedArr = stringArr.forEach(function (string) {
    var cleanStr = string.trim().toLowerCase();
    return cleanStr;
  }); // console.log(???)

  var joinedString = cleanedArr.join("+");
  return joinedString;
};
/**
 * A function that takes a string, cleans it and formats it based on a condition.
 *
 * It will need to remove anything that is NOT a letter from the string.
 * - e.g numbers, punctuation, whitespace.
 *
 * If the index of the letter is even the letter needs to be Uppercase.
 * If the index of the letter is odd the letter needs to be Lowercase.
 *
 * @param {string} string " 22 $$He LL--O!%^& "
 * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
 */


exports.formatStringArray = formatStringArray;

var formatString = function formatString(string) {
  return;
};
/**
 * Expert Challenge
 */

/**
 * A function that takes an array and FizzBuzzes it.
 *
 * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
 *
 * If we were given [-1, "disco", "3", 5, "15", 2, 0]
 * We would be left with this ["3", 5, "15", 2]
 *
 * It then needs to create a NEW array from this clean array based on the conditons below:
 *
 * For multiples of three replace the number with "Fizz".
 * For multiples of five replace the number with "Buzz".
 * For numbers which are multiples of both three and five replace the number with "FizzBuzz".
 * All the other numbers need to be strings.
 *
 * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
 * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
 */


exports.formatString = formatString;

var fizzBuzz = function fizzBuzz() {
  var mixedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var positives = mixedArray.filter(function (item) {
    return item > 0 && Number(item);
  });
  var myFizzBuzz = positives.map(function (number) {
    var string = "";
    if (!(number % 3)) string += "Fizz";
    if (!(number % 5)) string += "Buzz";
    return string || number.toString();
  });
  return myFizzBuzz;
};

exports.fizzBuzz = fizzBuzz;