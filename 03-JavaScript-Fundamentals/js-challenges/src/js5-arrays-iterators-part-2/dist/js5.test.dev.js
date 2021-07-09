"use strict";

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var totalScoresArr = challenge.totalScoresArr,
    reverseString = challenge.reverseString,
    sortCharactersAlphabetically = challenge.sortCharactersAlphabetically,
    sortNumbersHighToLow = challenge.sortNumbersHighToLow,
    checkItemInstock = challenge.checkItemInstock,
    checkPrimaryColours = challenge.checkPrimaryColours,
    checkStringPalindrome = challenge.checkStringPalindrome,
    totalNestedScoresArr = challenge.totalNestedScoresArr,
    encryptString = challenge.encryptString;
/**
 * REMOVE X FROM DESCRIBE FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

describe("Testing totalScoresArr()", function () {
  var scoresArr = Array(50).fill(20);
  it("Should return a Number", function () {
    expect(_typeof(totalScoresArr(scoresArr))).toBe("number");
    expect(_typeof(totalScoresArr([1]))).toBe("number");
  });
  it("Should total numbers", function () {
    expect(totalScoresArr(scoresArr)).toBe(1000);
    expect(totalScoresArr([1, 2, 5, 10])).toBe(18);
  });
});
describe("Testing reverseString()", function () {
  it("Should return a String", function () {
    expect(_typeof(reverseString("coconut"))).toBe("string");
    expect(_typeof(reverseString("test"))).toBe("string");
  });
  it("Should not alter a single letter", function () {
    expect(reverseString("c")).toBe("c");
    expect(reverseString("h")).toBe("h");
  });
  it("Should be the same size as input", function () {
    expect(reverseString("hhh").length).toBe(3);
    expect(reverseString("disco").length).toBe(5);
  });
  it("Should reverse a String", function () {
    expect(reverseString("coconut")).toBe("tunococ");
    expect(reverseString("test")).toBe("tset");
  });
});
describe("Testing sortCharactersAlphabetically()", function () {
  var lowerCaseCharArr = "dloejmixwrsnfacqyukvhtgzpb".split("");
  var upperCaseCharArr = "DLOEJMIXWRSNFACQYUKVHTGZPB".split("");
  var sortedCharArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var mixedCaseArr = [].concat(_toConsumableArray(lowerCaseCharArr), _toConsumableArray(upperCaseCharArr));
  var sortedMixedCaseArr = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz".split("");
  it("Should return an Array", function () {
    expect(Array.isArray(sortCharactersAlphabetically(lowerCaseCharArr))).toBeTruthy();
    expect(Array.isArray(sortCharactersAlphabetically(["Test"]))).toBeTruthy();
  });
  it("Should return an Array of Strings", function () {
    var stringTest = sortCharactersAlphabetically(lowerCaseCharArr).every(function (_char) {
      return typeof _char === "string";
    });
    expect(stringTest).toBeTruthy();
  });
  it("Should sort lowercase letters alphabetically", function () {
    expect(sortCharactersAlphabetically(lowerCaseCharArr)).toEqual(sortedCharArr);
    expect(sortCharactersAlphabetically(sortedCharArr)).toEqual(sortedCharArr);
    expect(sortCharactersAlphabetically(["c", "b", "a"])).toEqual(["a", "b", "c"]);
  });
  it("Should sort uppercase letters alphabetically", function () {
    expect(sortCharactersAlphabetically(upperCaseCharArr)).toEqual(sortedCharArr);
    expect(sortCharactersAlphabetically(["C", "B", "B"])).toEqual(["b", "b", "c"]);
  });
  it("Should sort Uppercase and lowercase characters", function () {
    expect(sortCharactersAlphabetically(mixedCaseArr)).toEqual(sortedMixedCaseArr);
    expect(sortCharactersAlphabetically(["A", "b", "C"])).toEqual(["a", "b", "c"]);
  });
  it("Should be the same length as the input", function () {
    expect(sortCharactersAlphabetically(lowerCaseCharArr).length).toBe(26);
    expect(sortCharactersAlphabetically(mixedCaseArr).length).toBe(52);
    expect(sortCharactersAlphabetically(["a", "a", "a"]).length).toBe(3);
  });
});
describe("Testing sortNumbersHighToLow()", function () {
  var lowToHigh = Array(50).fill(1).map(function (number, index) {
    return number += index;
  });

  var highToLow = _toConsumableArray(lowToHigh).reverse();

  it("Should return an Array", function () {
    expect(Array.isArray(sortNumbersHighToLow(lowToHigh))).toBeTruthy();
    expect(Array.isArray(sortNumbersHighToLow([1]))).toBeTruthy();
  });
  it("Should return an Array of Numbers", function () {
    var numberTest = sortNumbersHighToLow(lowToHigh).every(function (number) {
      return typeof number === "number";
    });
    expect(numberTest).toBeTruthy();
  });
  it("Should not alter single numbers", function () {
    expect(sortNumbersHighToLow([1])).toEqual([1]);
    expect(sortNumbersHighToLow([40])).toEqual([40]);
  });
  it("Should sort multiple numbers high to low", function () {
    expect(sortNumbersHighToLow(lowToHigh)).toEqual(highToLow);
    expect(sortNumbersHighToLow([40, 7, 20, 53])).toEqual([53, 40, 20, 7]);
  });
  it("Should not alter already sorted array's", function () {
    expect(sortNumbersHighToLow(highToLow)).toEqual(highToLow);
    expect(sortNumbersHighToLow([53, 40, 20, 7])).toEqual([53, 40, 20, 7]);
  });
  it("Should have the same length as input", function () {
    expect(sortNumbersHighToLow(lowToHigh).length).toBe(50);
    expect(sortNumbersHighToLow([40, 7, 20, 53]).length).toBe(4);
  });
});
describe("Testing checkItemInstock()", function () {
  var stockList = ["apple", "banana", "orange", "coconut", "strawberry", "lime", "grapefruit", "lemon", "kumquat", "blueberry", "melon"];

  var expectedMatchMessage = function expectedMatchMessage(item, index) {
    return "".concat(item, " is instock, it is on aisle ").concat(index, ".");
  };

  var expectedNoMatchMessage = function expectedNoMatchMessage(item) {
    return "Sorry ".concat(item, " is not instock.");
  };

  it("Should return a String", function () {
    expect(_typeof(checkItemInstock("coconut"))).toBe("string");
    expect(_typeof(checkItemInstock("test"))).toBe("string");
  });
  it("Should handle single items from the stock list", function () {
    expect(checkItemInstock("apple")).toBe(expectedMatchMessage("apple", 0));
    expect(checkItemInstock("melon")).toBe(expectedMatchMessage("melon", 10));
  });
  it("Should handle single no match items", function () {
    expect(checkItemInstock("carrot")).toBe(expectedNoMatchMessage("carrot"));
    expect(checkItemInstock("kiwi")).toBe(expectedNoMatchMessage("kiwi"));
  });
  it("Should handle every item in the stock list", function () {
    var checkAllStock = stockList.every(function (item, index) {
      return checkItemInstock(item) === expectedMatchMessage(item, index);
    });
    expect(checkAllStock).toBe(true);
  });
});
xdescribe("Testing checkPrimaryColours()", function () {
  var rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  var primaryColours = ["red", "yellow", "blue"];
  it("Should return a Boolean", function () {
    expect(_typeof(checkPrimaryColours(["red"]))).toBe("boolean");
    expect(_typeof(checkPrimaryColours(["green"]))).toBe("boolean");
  });
  it("Should return true if all are primary", function () {
    expect(checkPrimaryColours(["red"])).toBe(true);
    expect(checkPrimaryColours(primaryColours)).toBe(true);
  });
  it("Should return false if all aren't primary", function () {
    expect(checkPrimaryColours(rainbowColours)).toBe(false);
    expect(checkPrimaryColours(["red", "crimson"])).toBe(false);
  });
  it("Should handle large inputs", function () {
    expect(checkPrimaryColours(Array(100).fill("red"))).toBe(true);
    expect(checkPrimaryColours(Array(5000).fill("brown"))).toBe(false);
  });
});
describe("Testing checkStringPalindrome()", function () {
  it("Should return a Boolean", function () {
    expect(_typeof(checkStringPalindrome("red", "green"))).toBe("boolean");
    expect(_typeof(checkStringPalindrome("green", "green"))).toBe("boolean");
  });
  it("Should return true for a palindrome", function () {
    expect(checkStringPalindrome("madam")).toBe(true);
    expect(checkStringPalindrome("radar")).toBe(true);
    expect(checkStringPalindrome("racecar")).toBe(true);
    expect(checkStringPalindrome("abba")).toBe(true);
  });
  it("Should return false for a string", function () {
    expect(checkStringPalindrome("tom")).toBe(false);
    expect(checkStringPalindrome("dumoulin")).toBe(false);
    expect(checkStringPalindrome("greg")).toBe(false);
    expect(checkStringPalindrome("lemond")).toBe(false);
  });
  it("Should return true for a palindrome with spaces", function () {
    expect(checkStringPalindrome("step on no pets")).toBe(true);
    expect(checkStringPalindrome("racecar racecar")).toBe(true);
  });
  it("Should return false for a string with spaces", function () {
    expect(checkStringPalindrome("george bennett")).toBe(false);
    expect(checkStringPalindrome("greg lemond")).toBe(false);
  });
});
xdescribe("Testing totalNestedScoresArr()", function () {
  var nestedScoreArr = [[3, 2, 1], [45, 6, 2], [66, 88, 99, 100]];
  var totalScoreArr = [6, 53, 353];
  it("Should return an Array", function () {
    expect(Array.isArray(totalNestedScoresArr(nestedScoreArr))).toBe(true);
    expect(Array.isArray(totalNestedScoresArr([[1]]))).toBe(true);
  });
  it("Should return array of numbers ", function () {
    var numberTest = totalNestedScoresArr(nestedScoreArr).every(function (number) {
      return typeof number === "number";
    });
    expect(numberTest).toBe(true);
  });
  it("Should total nested array of scores", function () {
    expect(totalNestedScoresArr([[1, 2, 3]])).toEqual([6]);
    expect(totalNestedScoresArr(nestedScoreArr)).toEqual(totalScoreArr);
  });
  it("Should not alter single scores", function () {
    expect(totalNestedScoresArr([[1], [2], [3]])).toEqual([1, 2, 3]);
    expect(totalNestedScoresArr([[45]])).toEqual([45]);
  });
  it("Should return a new array and not modify the old one", function () {
    expect(totalNestedScoresArr(nestedScoreArr)).not.toBe(nestedScoreArr);
  });
});
xdescribe("Testing encryptString()", function () {
  it("Should return a string", function () {
    expect(_typeof(encryptString("defined"))).toBe("string");
    expect(_typeof(encryptString("disco flex"))).toBe("string");
  });
  it("Should NOT encrypt three letters", function () {
    expect(encryptString("hey")).toBe("hey");
    expect(encryptString("ola")).toBe("ola");
  });
  it("Should encrypt after three plus letters", function () {
    expect(encryptString("heya")).toBe("haey");
    expect(encryptString("disco")).toBe("dcios");
    expect(encryptString("cellardoor")).toBe("cldreaolro");
  });
  it("Should encrypt large words", function () {
    expect(encryptString("antidisestablishmentarianism")).toBe("aistlhnrnmndeaimtiitisbseaas");
    expect(encryptString("hippopotomonstrosesquippedaliophobia")).toBe("hpomsosielpbiototsqpdihipponreupaooa");
  });
  it("Should keep spaces between words", function () {
    expect(encryptString("keep it secret")).toBe("kpteee  cteisr");
    expect(encryptString("keep it safe.")).toBe("kpta.e  feise");
  });
  it("Should handle empty input", function () {
    expect(encryptString("")).toBe("");
  });
});