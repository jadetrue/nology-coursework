"use strict";

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var createFullName = challenge.createFullName,
    findSmallestNumber = challenge.findSmallestNumber,
    multiplyNumbers = challenge.multiplyNumbers,
    checkIfNewHighScore = challenge.checkIfNewHighScore,
    celsiusToFahrenheit = challenge.celsiusToFahrenheit,
    calculateLifetimeSupply = challenge.calculateLifetimeSupply,
    getGrade = challenge.getGrade,
    calculateAreaOfCirlce = challenge.calculateAreaOfCirlce,
    getStudentSummary = challenge.getStudentSummary;
describe("createFullName() tests", function () {
  it("Should have a return", function () {
    expect(createFullName("John", "Smith")).toBeDefined();
  });
  it("Should work with basic inputs", function () {
    expect(createFullName("John", "Smith")).toBe("John Smith");
  });
  it("Should work with arbritrary inputs", function () {
    expect(createFullName("abc", "def")).toBe("abc def");
  });
});
describe("findSmallestNumber() tests", function () {
  it("Should have a return", function () {
    expect(findSmallestNumber(100, 200)).toBeDefined();
  });
  it("Should return the smallest of two numbers", function () {
    expect(findSmallestNumber(100, 200)).toBe(100);
  });
  it("Should work regardless of order", function () {
    expect(findSmallestNumber(100, 200)).toBe(100);
    expect(findSmallestNumber(200, 100)).toBe(100);
  });
});
describe("multiplyNumbers() tests", function () {
  it("Should have a return", function () {
    expect(multiplyNumbers(2, 6)).toBeDefined();
  });
  it("Should multiply 3 and 6 to make 18", function () {
    expect(multiplyNumbers(3, 6)).toBe(18);
  });
  it("Should multiply 12 and 6 to make 72", function () {
    expect(multiplyNumbers(12, 6)).toBe(72);
  });
});
describe("checkIfNewHighScore() tests", function () {
  it("Should have a return", function () {
    expect(checkIfNewHighScore(300, 325)).toBeDefined();
  });
  it("Should tell me if I beat the high score", function () {
    expect(checkIfNewHighScore(350, 325)).toBe("You got a new high score!");
  });
  it("Should tell me if the scores are the same", function () {
    expect(checkIfNewHighScore(325, 325)).toBe("So close!");
  });
  it("Should tell me if I don't beat the high score", function () {
    expect(checkIfNewHighScore(300, 325)).toBe("Better luck next time!");
  });
});
describe("celsiusToFahrenheit() tests", function () {
  it("Should have a return", function () {
    expect(celsiusToFahrenheit(15)).toBeDefined();
  });
  it("Should return a string", function () {
    expect(_typeof(celsiusToFahrenheit(15))).toBe("string");
  });
  it("Should convert 15 C to 59 F", function () {
    expect(celsiusToFahrenheit(15)).toBe("15 degrees celsius is 59 degrees fahrenheit");
  });
});
describe("calculateLifeTimeSupply() tests", function () {
  it("Should have a return", function () {
    expect(calculateLifetimeSupply(2, 25, 90)).toBeDefined();
  });
  it("Should calculate the correct number if given 2 snickers, 25 years old and 90 years lifeExpectancy", function () {
    expect(calculateLifetimeSupply(2, 25, 90)).toBe(47450);
  });
  it("Should calculate the correct number if given 1 snickers, 20 years old and 70 years lifeExpectancy", function () {
    expect(calculateLifetimeSupply(1.5, 22, 77)).toBe(30112.5);
  });
});
describe("getGrade() tests", function () {
  it("Should have a return", function () {
    expect(getGrade(70)).toBeDefined();
  });
  it("Should return 'Score Unavailable' if given an incorrect score", function () {
    expect(getGrade(-20)).toBe("Score unavailable");
    expect(getGrade(120)).toBe("Score unavailable");
    expect(getGrade("90")).toBe("Score unavailable");
    expect(getGrade(true)).toBe("Score unavailable");
  });
  it("Should return 'A' for a score over 79", function () {
    expect(getGrade(100)).toBe("A");
    expect(getGrade(80)).toBe("A");
  });
  it("Should return 'B' for a score between 79 - 70", function () {
    expect(getGrade(79)).toBe("B");
    expect(getGrade(70)).toBe("B");
  });
  it("Should return 'C' for a score between 69 - 60", function () {
    expect(getGrade(69)).toBe("C");
    expect(getGrade(60)).toBe("C");
  });
  it("Should return 'D' for a score between 59 - 50", function () {
    expect(getGrade(59)).toBe("D");
    expect(getGrade(50)).toBe("D");
  });
  it("Should return 'E' for a score between 49 - 40", function () {
    expect(getGrade(49)).toBe("E");
    expect(getGrade(40)).toBe("E");
  });
  it("Should return 'F' for a score between 39 - 0", function () {
    expect(getGrade(39)).toBe("F");
    expect(getGrade(0)).toBe("F");
  });
});
describe("calculateAreaOfCircle() tests", function () {
  it("Should have a return", function () {
    expect(calculateAreaOfCirlce(3)).toBeDefined();
  });
  it("Should return a number", function () {
    expect(_typeof(calculateAreaOfCirlce(3))).toBe("number");
  });
  it("Should have the answer to two decimal places", function () {
    expect(calculateAreaOfCirlce(3)).toBeCloseTo(28.27, 2);
  });
  it("Should return the correct number for a range of radii", function () {
    expect(calculateAreaOfCirlce(3)).toBe(28.27);
    expect(calculateAreaOfCirlce(5)).toBe(78.54);
    expect(calculateAreaOfCirlce(1)).toBe(3.14);
  });
});
xdescribe("getStudentSummary() tests", function () {
  it("Should have a return", function () {
    expect(getStudentSummary(70, "John")).toBeDefined();
  });
  it("Should return a string", function () {
    expect(_typeof(getStudentSummary(70, "John"))).toBe("string");
  });
  it("Should return 'My apologies NAME, there's been an error in processing your grade.' if a grade cannot be found", function () {
    expect(getStudentSummary(120, "John")).toBe("My apologies John, there's been an error in processing your grade.");
    expect(getStudentSummary(-20, "John")).toBe("My apologies John, there's been an error in processing your grade.");
    expect(getStudentSummary("70", "John")).toBe("My apologies John, there's been an error in processing your grade.");
  });
  it("Should return the correct summary for a score of over 79", function () {
    expect(getStudentSummary(100, "John")).toBe("Congratulations John! You achieved a grade of A.");
    expect(getStudentSummary(80, "Jane")).toBe("Congratulations Jane! You achieved a grade of A.");
  });
  it("Should return the correct summary for a score betweem 79 - 70", function () {
    expect(getStudentSummary(79, "John")).toBe("Well done John! You achieved a grade of B.");
    expect(getStudentSummary(70, "Jane")).toBe("Well done Jane! You achieved a grade of B.");
  });
  it("Should return the correct summary for a score betweem 69 - 60", function () {
    expect(getStudentSummary(69, "John")).toBe("Nicely done John! You achieved a grade of C.");
    expect(getStudentSummary(60, "Jane")).toBe("Nicely done Jane! You achieved a grade of C.");
  });
  it("Should return the correct summary for a score betweem 59 - 50", function () {
    expect(getStudentSummary(59, "John")).toBe("That's okay John. You achieved a grade of D.");
    expect(getStudentSummary(50, "Jane")).toBe("That's okay Jane. You achieved a grade of D.");
  });
  it("Should return the correct summary for a score betweem 49 - 40", function () {
    expect(getStudentSummary(49, "John")).toBe("Too bad John. You achieved a grade of E.");
    expect(getStudentSummary(40, "Jane")).toBe("Too bad Jane. You achieved a grade of E.");
  });
  it("Should return the correct summary for a score betweem 39 - 0", function () {
    expect(getStudentSummary(39, "John")).toBe("Sorry John. You achieved a grade of F. There's always next year.");
    expect(getStudentSummary(0, "Jane")).toBe("Sorry Jane. You achieved a grade of F. There's always next year.");
  });
});