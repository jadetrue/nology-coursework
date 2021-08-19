"use strict";

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var removeFalseValues = challenge.removeFalseValues,
    createPercentageList = challenge.createPercentageList,
    createListOfPoessessions = challenge.createListOfPoessessions,
    convertStringToNumbersArray = challenge.convertStringToNumbersArray,
    createOddEvenArray = challenge.createOddEvenArray,
    filterBooksBySearch = challenge.filterBooksBySearch,
    formatStringArray = challenge.formatStringArray,
    formatString = challenge.formatString,
    fizzBuzz = challenge.fizzBuzz;
/**
 * REMOVE X FROM DESCRIBE FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

var mixedBooleanArr = [true, false, false, true, false, true, true];
var toBePercentages = [1, 0.5, 0.25, 0.4, 0.99, 0.1];
var percentages = ["100%", "50%", "25%", "40%", "99%", "10%"];
var possessions = ["Cabbage", "Turnip", "Radish", "Carrot"];
var mattsPosessions = ["Matt's Cabbage", "Matt's Turnip", "Matt's Radish", "Matt's Carrot"];
var numbersCSV = "5+2+55+1990+45+15+22";
var stringsToClean = ["  CaBBage  ", "TuRnIp", "  RADish", "CARroT  "];
var cleanedStrings = "cabbage+turnip+radish+carrot";
var formattedStringArr = ["T", "e", "S", "t", "S", "t", "R", "i", "N", "g"];
describe("Testing removeFalseValues()", function () {
  it("Should return an array", function () {
    expect(Array.isArray(removeFalseValues([true]))).toBe(true);
    expect(Array.isArray(removeFalseValues([false]))).toBe(true);
  });
  it("Should return an array of Booleans", function () {
    var testForBooleans = removeFalseValues(mixedBooleanArr).every(function (bool) {
      return typeof bool === "boolean";
    });
    expect(testForBooleans).toBe(true);
  });
  it("Should remove false values from an array", function () {
    expect(removeFalseValues(Array(5).fill(false)).length).toBe(0);
    expect(removeFalseValues(Array(20).fill(false)).length).toBe(0);
  });
  it("Should have the same amount of true values as the orginal array", function () {
    expect(removeFalseValues(mixedBooleanArr)).toEqual([true, true, true, true]);
    expect(removeFalseValues(Array(5).fill(true)).length).toBe(5);
    expect(removeFalseValues(Array(60).fill(true)).length).toBe(60);
  });
});
describe("Testing createPercentageList()", function () {
  it("Should return an array", function () {
    expect(Array.isArray(createPercentageList(toBePercentages))).toBe(true);
  });
  it("Should return an array of Strings", function () {
    var testForStrings = createPercentageList(toBePercentages).every(function (string) {
      return typeof string === "string";
    });
    expect(testForStrings).toBe(true);
  });
  it("Should convert numbers into percentages", function () {
    expect(createPercentageList(toBePercentages)).toEqual(percentages);
    expect(createPercentageList([0.25])).toEqual(["25%"]);
    expect(createPercentageList(Array(20).fill(1))).toEqual(Array(20).fill("100%"));
  });
  it("Should match given array's length", function () {
    expect(createPercentageList(Array(20).fill(1)).length).toBe(20);
  });
});
describe("Testing createListOfPoessessions()", function () {
  it("Should return an array", function () {
    expect(Array.isArray(createListOfPoessessions(possessions, "Matt's"))).toBe(true);
  });
  it("Should return an array of Strings", function () {
    var testForStrings = createListOfPoessessions(possessions, "Matt's").every(function (string) {
      return typeof string === "string";
    });
    expect(testForStrings).toBe(true);
  });
  it("Should prefix name as expected", function () {
    expect(createListOfPoessessions(possessions, "Matt's")).toEqual(mattsPosessions);
    expect(createListOfPoessessions(["shoes", "jacket", "belt"], "disco")).toEqual(["disco shoes", "disco jacket", "disco belt"]);
  });
  it("Should match given Array's length", function () {
    expect(createListOfPoessessions(possessions, "Matt's").length).toBe(4);
    expect(createListOfPoessessions(Array(20).fill("A"), "disco").length).toBe(20);
  });
});
describe("Testing convertStringToNumbersArray()", function () {
  it("Should return an array", function () {
    expect(Array.isArray(convertStringToNumbersArray(numbersCSV))).toBe(true);
  });
  it("Should return an array of Numbers", function () {
    var testForNumbers = convertStringToNumbersArray(numbersCSV).every(function (number) {
      return typeof number === "number";
    });
    expect(testForNumbers).toBe(true);
  });
  it("Should convert string as expected", function () {
    expect(convertStringToNumbersArray(numbersCSV)).toEqual([5, 2, 55, 1990, 45, 15, 22]);
    expect(convertStringToNumbersArray("1+2")).toEqual([1, 2]);
    expect(convertStringToNumbersArray(Array(10).fill("1").join("+"))).toEqual(Array(10).fill(1));
  });
  it("Should handle big inputs", function () {
    expect(convertStringToNumbersArray(Array(100).fill("1").join("+"))).toEqual(Array(100).fill(1));
    expect(convertStringToNumbersArray(Array(1000).fill("1").join("+")).length).toBe(1000);
  });
  it("Should handle single inputs", function () {
    expect(convertStringToNumbersArray("100")).toEqual([100]);
  });
});
describe("Testing createOddEvenArray()", function () {
  it("Should return an array", function () {
    expect(Array.isArray(createOddEvenArray(numbersCSV))).toBe(true);
  });
  it("Should return an array of Strings", function () {
    var testForStrings = createOddEvenArray(numbersCSV).every(function (string) {
      return typeof string === "string";
    });
    expect(testForStrings).toBe(true);
  });
  it("Should convert string as expected", function () {
    expect(createOddEvenArray(numbersCSV)).toEqual(["odd", "even", "odd", "even", "odd", "odd", "even"]);
    expect(createOddEvenArray("1+2")).toEqual(["odd", "even"]);
    expect(createOddEvenArray(Array(10).fill("1").join("+"))).toEqual(Array(10).fill("odd"));
  });
  it("Should handle big inputs", function () {
    expect(createOddEvenArray(Array(100).fill("1").join("+"))).toEqual(Array(100).fill("odd"));
    expect(createOddEvenArray(Array(1000).fill("1").join("+")).length).toBe(1000);
  });
  it("Should handle single inputs", function () {
    expect(createOddEvenArray("100")).toEqual(["even"]);
  });
});
describe("Testing filterBooksBySearch()", function () {
  it("Should return an array", function () {
    expect(Array.isArray(filterBooksBySearch(["one thing"], "one thing"))).toBe(true);
  });
  it("Should return an array of Strings", function () {
    var testForStrings = filterBooksBySearch(["disco", "disco", "shoes", "disco shoe"], "disco").every(function (string) {
      return typeof string === "string";
    });
    expect(testForStrings).toBe(true);
  });
  it("Should handle one match", function () {
    expect(filterBooksBySearch(["one thing"], "one thing")).toEqual(["one thing"]);
    expect(filterBooksBySearch(["a", "aa", "bb", "aaa", "b"], "bb").length).toBe(1);
  });
  it("Should handle multiple matches", function () {
    expect(filterBooksBySearch(["disco", "disco", "shoes", "disco shoe"], "disco").length).toBe(3);
    expect(filterBooksBySearch(["disco", "disco", "shoes", "disco shoe"], "oe").length).toBe(2);
  });
  it("Should handle large matches", function () {
    expect(filterBooksBySearch(Array(100).fill("disco"), "disco").length).toBe(100);
  });
  it("Should handle single character matches", function () {
    expect(filterBooksBySearch(["a", "aa", "bb", "aaa", "b"], "a").length).toBe(3);
    expect(filterBooksBySearch(["a", "aa", "bb", "aaa", "b"], "b").length).toBe(2);
  });
  it("Should handle no matches", function () {
    expect(filterBooksBySearch(Array(100).fill("disco"), "techno").length).toBe(0);
    expect(filterBooksBySearch(["one thing"], "nothing")).toEqual([]);
    expect(filterBooksBySearch([], "nothing")).toEqual([]);
    expect(filterBooksBySearch([])).toEqual([]);
  });
});
xdescribe("Testing formatStringArray()", function () {
  it("Should return a String", function () {
    expect(_typeof(formatStringArray(["  front"]))).toBe("string");
  });
  it("Should NOT return undefined", function () {
    expect(formatStringArray(["  front"])).toBeDefined();
  });
  it("Should remove whitespace", function () {
    expect(formatStringArray(["  front"])).toBe("front");
    expect(formatStringArray(["back "])).toBe("back");
    expect(formatStringArray(["  both "])).toBe("both");
  });
  it("Should be lowercase", function () {
    expect(formatStringArray(["UPPERCASE"])).toBe("uppercase");
    expect(formatStringArray(["mIxEd"])).toBe("mixed");
  });
  it("Should format a single string as expected", function () {
    expect(formatStringArray(["  DAVID "])).toBe("david");
  });
  it("Should format multiple strings as expected", function () {
    expect(formatStringArray(stringsToClean)).toBe(cleanedStrings);
    expect(formatStringArray(cleanedStrings.split("+"))).toBe(cleanedStrings);
  });
});
xdescribe("Testing formatString()", function () {
  it("Should NOT return undefined", function () {
    expect(formatString("  defined")).toBeDefined();
  });
  it("Should return an array", function () {
    expect(Array.isArray(formatString("white  space"))).toBe(true);
  });
  it("Should return an array of Strings", function () {
    var testForStrings = formatString("white  space").every(function (string) {
      return typeof string === "string";
    });
    expect(testForStrings).toBe(true);
  });
  it("Should remove numbers", function () {
    expect(formatString("nu55mber77s").length).toBe(7);
    expect(formatString("1234567").length).toBe(0);
  });
  it("Should remove punctuation", function () {
    expect(formatString("punctuation!\"£$%^&*()?[]{}|,./;'@~#+=").length).toBe(11);
    expect(formatString('!"£$%^&').length).toBe(0);
  });
  it("Should remove whitespace", function () {
    expect(formatString("  white  space  ").length).toBe(10);
    expect(formatString("white  space").length).toBe(10);
  });
  it("Should uppercase even index", function () {
    expect(formatString("he")[0]).toBe("H");
    expect(formatString("hello")[2]).toBe("L");
  });
  it("Should lowercase odd index", function () {
    expect(formatString("he")[1]).toBe("e");
    expect(formatString("hello")[3]).toBe("l");
  });
  it("Should format string as expected", function () {
    expect(formatString("test string")).toEqual(formattedStringArr);
    expect(formatString('898    te%^$£"&*()st str3552621ing')).toEqual(formattedStringArr);
  });
  it("Should handle empty input", function () {
    expect(formatString("")).toEqual([]);
  });
});
describe("Testing fizzBuzz()", function () {
  var cleanArray = Array(50).fill(0).map(function (_, index) {
    return index + 1;
  });
  var cleanStringArray = Array(15).fill(0).map(function (_, index) {
    return "".concat(index + 1);
  });
  var firstFifteenArray = "1-2-Fizz-4-Buzz-Fizz-7-8-Fizz-Buzz-11-Fizz-13-14-FizzBuzz".split("-");
  var mixedArray = [-1, 5, 6, "disco", 0, 0, 7, "5", 45];
  it("Should NOT return undefined", function () {
    expect(fizzBuzz(cleanArray)).toBeDefined();
  });
  it("Should return an array", function () {
    expect(Array.isArray(fizzBuzz(cleanArray))).toBe(true);
  });
  it("Should return an array of Strings", function () {
    var testForStrings = fizzBuzz(cleanArray).every(function (string) {
      return typeof string === "string";
    });
    expect(testForStrings).toBe(true);
  });
  it("Should have the correct amount of Fizz", function () {
    var fizzMatch = fizzBuzz(cleanArray).filter(function (el) {
      return el === "Fizz";
    });
    expect(fizzMatch.length).toBe(13);
  });
  it("Should have Fizz in the correct index", function () {
    var fizzMatch = fizzBuzz(cleanArray);
    expect(fizzMatch[2]).toBe("Fizz");
    expect(fizzMatch[47]).toBe("Fizz");
    expect(fizzMatch[35]).toBe("Fizz");
  });
  it("Should have the correct amount of Buzz", function () {
    var buzzMatch = fizzBuzz(cleanArray).filter(function (el) {
      return el === "Buzz";
    });
    expect(buzzMatch.length).toBe(7);
  });
  it("Should have Buzz in the correct index", function () {
    var BuzzMatch = fizzBuzz(cleanArray);
    expect(BuzzMatch[4]).toBe("Buzz");
    expect(BuzzMatch[19]).toBe("Buzz");
    expect(BuzzMatch[39]).toBe("Buzz");
  });
  it("Should have the correct amount of FizzBuzz", function () {
    var FizzBuzzMatch = fizzBuzz(cleanArray).filter(function (el) {
      return el === "FizzBuzz";
    });
    expect(FizzBuzzMatch.length).toBe(3);
  });
  it("Should have FizzBuzz in the correct index", function () {
    var FizzBuzzMatch = fizzBuzz(cleanArray);
    expect(FizzBuzzMatch[14]).toBe("FizzBuzz");
    expect(FizzBuzzMatch[29]).toBe("FizzBuzz");
    expect(FizzBuzzMatch[44]).toBe("FizzBuzz");
  });
  it("Should NOT alter the length of a clean input", function () {
    expect(fizzBuzz(cleanArray).length).toBe(50);
  });
  it("Should fizzBuzz a a clean array of numbers as strings as expected", function () {
    expect(fizzBuzz(cleanStringArray)).toEqual(firstFifteenArray);
  });
  it("Should  NOT alter the length of a clean array of numbers as strings", function () {
    expect(fizzBuzz(cleanStringArray).length).toEqual(15);
  });
  it("Should fizzBuzz a mixed input as expected", function () {
    expect(fizzBuzz(mixedArray)).toEqual(["Buzz", "Fizz", "7", "Buzz", "FizzBuzz"]);
  });
  it("Should alter the length of a mixed input", function () {
    expect(fizzBuzz(mixedArray).length).toBe(5);
  });
});