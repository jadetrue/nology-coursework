"use strict";

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Coordinate = challenge.Coordinate,
    Alert = challenge.Alert,
    Loader = challenge.Loader,
    Counter = challenge.Counter,
    Engine = challenge.Engine,
    Modal = challenge.Modal,
    BookShelf = challenge.BookShelf,
    BankAccount = challenge.BankAccount;
/**
 * REMOVE X FROM xdescribe FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

describe("Testing Coordinate class", function () {
  var coordOne = new Coordinate(5, 10);
  var coordTwo = new Coordinate(45, 17);
  it("Should be an object", function () {
    expect(_typeof(coordOne)).toBe("object");
    expect(_typeof(coordTwo)).toBe("object");
  });
  it("Should have xCoord key", function () {
    expect(coordOne).toHaveProperty("xCoord");
    expect(coordTwo).toHaveProperty("xCoord");
  });
  it("Should have yCoord key", function () {
    expect(coordOne).toHaveProperty("yCoord");
    expect(coordTwo).toHaveProperty("yCoord");
  });
  it("Should have the correct value for xCoord key", function () {
    expect(coordOne.xCoord).toBe(5);
    expect(coordTwo.xCoord).toBe(45);
  });
  it("Should have the correct value for yCoord key", function () {
    expect(coordOne.yCoord).toBe(10);
    expect(coordTwo.yCoord).toBe(17);
  });
});
describe("Testing Alert class", function () {
  var logOutAlert = new Alert("Are you sure you want to log out?");
  var deleteAlert = new Alert("Are you sure you want to delete this content?");
  it("Should be an object", function () {
    expect(_typeof(logOutAlert)).toBe("object");
    expect(_typeof(deleteAlert)).toBe("object");
  });
  it("Should have a message key", function () {
    expect(logOutAlert).toHaveProperty("message");
    expect(deleteAlert).toHaveProperty("message");
  });
  it("Should have a printMessage function", function () {
    expect(_typeof(logOutAlert.printMessage)).toBe("function");
    expect(_typeof(deleteAlert.printMessage)).toBe("function");
  });
  it("Should return a string when the printMessage method is called", function () {
    expect(_typeof(logOutAlert.printMessage())).toBe("string");
    expect(_typeof(deleteAlert.printMessage())).toBe("string");
  });
  it("Should return a correctly formatted string when the printMessage method is called", function () {
    var logOutMessage = "!!!! Are you sure you want to log out? !!!!";
    var deleteMessage = "!!!! Are you sure you want to delete this content? !!!!";
    expect(logOutAlert.printMessage()).toBe(logOutMessage);
    expect(deleteAlert.printMessage()).toBe(deleteMessage);
  });
  it("Should not alter message key after method is called", function () {
    logOutAlert.printMessage();
    deleteAlert.printMessage();
    expect(logOutAlert.message).toBe("Are you sure you want to log out?");
    expect(deleteAlert.message).toBe("Are you sure you want to delete this content?");
  });
});
describe("Testing Loader class", function () {
  var htmlReference = {
    innerHTML: ""
  };
  var loader = new Loader(htmlReference);
  it("Should be an object", function () {
    expect(_typeof(loader)).toBe("object");
  });
  it("Should have a htmlRef key", function () {
    expect(loader).toHaveProperty("htmlRef");
  });
  it("Should have a displayLoader and removeLoader methods", function () {
    expect(_typeof(loader.displayLoader)).toBe("function");
    expect(_typeof(loader.removeLoader)).toBe("function");
  });
  it("Should add the correct html to the html reference when displayLoader() is called", function () {
    loader.displayLoader();
    expect(htmlReference.innerHTML).toBe('<div class="loader"></div>');
  });
  it("Should add the correct html to the html reference when displayLoader() is called multiple times", function () {
    loader.displayLoader();
    loader.displayLoader();
    loader.displayLoader();
    loader.displayLoader();
    expect(htmlReference.innerHTML).toBe('<div class="loader"></div>');
  });
  it("Should set innerHTML of html reference to an empty string removeLoader() is called", function () {
    loader.removeLoader();
    expect(htmlReference.innerHTML).toBe("");
  });
  it("Should remove html from the html reference when displayLoader() and then removeLoader() is called", function () {
    loader.displayLoader();
    loader.removeLoader();
    expect(htmlReference.innerHTML).toBe("");
  });
});
describe("Testing Counter class", function () {
  var lowCount, highCount, noCount;
  beforeEach(function () {
    lowCount = new Counter(5);
    highCount = new Counter(500);
    noCount = new Counter();
  });
  it("Should be an object", function () {
    expect(_typeof(lowCount)).toBe("object");
    expect(_typeof(highCount)).toBe("object");
    expect(_typeof(noCount)).toBe("object");
  });
  it("Should have a count key", function () {
    expect(lowCount).toHaveProperty("count");
    expect(highCount).toHaveProperty("count");
    expect(noCount).toHaveProperty("count");
  });
  it("Should have correct count when initialised", function () {
    expect(lowCount.count).toBe(5);
    expect(highCount.count).toBe(500);
    expect(noCount.count).toBe(0);
  });
  it("Should have a increment function", function () {
    expect(_typeof(lowCount.increment)).toBe("function");
    expect(_typeof(highCount.increment)).toBe("function");
    expect(_typeof(noCount.increment)).toBe("function");
  });
  it("Should return a number when the increment method is called", function () {
    expect(_typeof(lowCount.increment())).toBe("number");
    expect(_typeof(highCount.increment())).toBe("number");
    expect(_typeof(noCount.increment())).toBe("number");
  });
  it("Should increment count by 1", function () {
    lowCount.increment();
    highCount.increment();
    noCount.increment();
    expect(lowCount.count).toBe(6);
    expect(highCount.count).toBe(501);
    expect(noCount.count).toBe(1);
  });
  it("Should increment count by 1 100 times", function () {
    for (var index = 0; index < 100; index++) {
      lowCount.increment();
      highCount.increment();
      noCount.increment();
    }

    expect(lowCount.count).toBe(105);
    expect(highCount.count).toBe(600);
    expect(noCount.count).toBe(100);
  });
  it("Should have a decrement function", function () {
    expect(_typeof(lowCount.decrement)).toBe("function");
    expect(_typeof(highCount.decrement)).toBe("function");
    expect(_typeof(noCount.decrement)).toBe("function");
  });
  it("Should return a number when the decrement method is called", function () {
    expect(_typeof(lowCount.increment())).toBe("number");
    expect(_typeof(highCount.increment())).toBe("number");
    expect(_typeof(noCount.increment())).toBe("number");
  });
  it("Should decrement count by 1", function () {
    lowCount.decrement();
    highCount.decrement();
    expect(lowCount.count).toBe(4);
    expect(highCount.count).toBe(499);
  });
  it("Should decrement count by 1 100 times", function () {
    for (var index = 0; index < 100; index++) {
      highCount.decrement();
    }

    expect(highCount.count).toBe(400);
  });
  it("Should not decrement below 0", function () {
    for (var index = 0; index < 500; index++) {
      lowCount.decrement();
      highCount.decrement();
      noCount.decrement();
    }

    expect(lowCount.count).toBe(0);
    expect(highCount.count).toBe(0);
    expect(noCount.count).toBe(0);
  });
});
xdescribe("Testing Engine class", function () {
  var engine;
  beforeEach(function () {
    engine = new Engine();
  });
  it("Should be an object", function () {
    expect(_typeof(engine)).toBe("object");
  });
  it("Should have a engineIsRunning key", function () {
    expect(engine).toHaveProperty("engineIsRunning");
  });
  it("Should set engineIsRunning to false by default", function () {
    expect(engine.engineIsRunning).toBe(false);
  });
  it("Should have a startEngine function", function () {
    expect(_typeof(engine.startEngine)).toBe("function");
  });
  it("Should return a string when the startEngine method is called", function () {
    expect(_typeof(engine.startEngine())).toBe("string");
  });
  it("Should return the correct string when startEngine() is called and engineIsRunning is false", function () {
    expect(engine.startEngine()).toBe("Engine has started running");
  });
  it("Should set engineIsRunning to true after startEngine() has been called", function () {
    engine.startEngine();
    expect(engine.engineIsRunning).toBe(true);
  });
  it("Should return the correct string when startEngine() is called and engineIsRunning is true", function () {
    engine.startEngine();
    expect(engine.startEngine()).toBe("Engine is already running");
  });
  it("Should have a stopEngine function", function () {
    expect(_typeof(engine.stopEngine)).toBe("function");
  });
  it("Should return a string when the stopEngine method is called", function () {
    expect(_typeof(engine.stopEngine())).toBe("string");
  });
  it("Should return the correct string when stopEngine() is called and engineIsRunning is false", function () {
    expect(engine.stopEngine()).toBe("Engine has already stopped running");
  });
  it("Should return the correct string when stopEngine() is called and engineIsRunning is true", function () {
    engine.startEngine();
    expect(engine.stopEngine()).toBe("Engine has stopped running");
  });
  it("Should set engineIsRunning to false after startEngine() and stopEngine() have been called", function () {
    engine.startEngine();
    engine.stopEngine();
    expect(engine.engineIsRunning).toBe(false);
  });
});
xdescribe("Testing Modal class", function () {
  var modal;
  var htmlReference;
  beforeEach(function () {
    htmlReference = {
      innerHTML: "",
      classList: {
        list: ["hide"],
        toggle: function toggle(cssClass) {
          if (this.list.includes(cssClass)) {
            this.list = this.list.filter(function (listItem) {
              return listItem !== cssClass;
            });
          } else {
            this.list.push(cssClass);
          }
        }
      }
    };
    modal = new Modal(htmlReference, "Error", "Sorry there has been some sort of error");
  });
  it("Should be an object", function () {
    expect(_typeof(modal)).toBe("object");
  });
  it("Should have htmlRef, title and message keys", function () {
    expect(modal).toHaveProperty("htmlRef");
    expect(modal).toHaveProperty("title");
    expect(modal).toHaveProperty("message");
  });
  it("Should have correct values assigned to the keys", function () {
    expect(modal.htmlRef).toEqual(htmlReference);
    expect(modal.title).toBe("Error");
    expect(modal.message).toBe("Sorry there has been some sort of error");
  });
  it("Should have renderHtml and toggleModalfunctions", function () {
    expect(_typeof(modal.renderHtml)).toBe("function");
    expect(_typeof(modal.displayModal)).toBe("function");
  });
  it("Should update the innerHTML of the htmlRefernce after renderHtml() has been called", function () {
    var expectedHtml = "\n    <div class=\"modal\">\n      <h2 class=\"modal--title\">Error</h2>\n      <p class=\"modal--message\">Sorry there has been some sort of error</p>\n    </div>\n    ";
    modal.renderHtml();
    expect(htmlReference.innerHTML).toBe(expectedHtml);
  });
  it("Should update the innerHTML of the htmlRefernce dynamically after renderHtml() has been called", function () {
    modal = new Modal(htmlReference, "Good Morning", "Have a great day!");
    var expectedHtml = "\n    <div class=\"modal\">\n      <h2 class=\"modal--title\">Good Morning</h2>\n      <p class=\"modal--message\">Have a great day!</p>\n    </div>\n    ";
    modal.renderHtml();
    expect(htmlReference.innerHTML).toBe(expectedHtml);
  });
  it("Should update the classList of the htmlRefernce - remove hide", function () {
    modal.displayModal();
    expect(htmlReference.classList.list).toEqual([]);
  });
  it("Should update the classList of the htmlRefernce - add hide", function () {
    modal.displayModal();
    modal.displayModal();
    expect(htmlReference.classList.list).toEqual(["hide"]);
  });
  it("Should update the classList with the string of hide", function () {
    modal.displayModal();
    modal.displayModal();
    expect(htmlReference.classList.list[0]).toBe("hide");
  });
});
xdescribe("Testing BookShelf class", function () {
  var bookShelf;
  var bookArray = ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"];
  var newBookArray = bookArray.filter(function (book) {
    return book.includes("JavaScript");
  });
  beforeEach(function () {
    bookShelf = new BookShelf("aa0200a01", bookArray);
  });
  it("Should be an object", function () {
    expect(_typeof(bookShelf)).toBe("object");
  });
  it("Should have a _shelfId and a _booksOnShelf key", function () {
    expect(bookShelf).toHaveProperty("_shelfId");
    expect(bookShelf).toHaveProperty("_booksOnShelf");
  });
  it("Should set _booksOnShelf to [] by default", function () {
    bookShelf = new BookShelf();
    expect(bookShelf._booksOnShelf).toEqual([]);
  });
  it("Should have the getters and setters", function () {
    expect(bookShelf).toHaveProperty("booksOnShelf");
    expect(bookShelf).toHaveProperty("latestBook");
    expect(bookShelf).toHaveProperty("addBookToShelf");
  });
  it("Should return the _booksOnShelf written as a getter", function () {
    expect(bookShelf.booksOnShelf).toEqual(bookArray);
  });
  it("Should update the _booksOnShelf written as a setter", function () {
    bookShelf.booksOnShelf = newBookArray;
    expect(bookShelf.booksOnShelf).toEqual(newBookArray);
  });
  it("Should return the latestBook written as a getter", function () {
    var lastItem = bookArray[bookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });
  it("Should update using a setter and return the latestBook written as a getter", function () {
    bookShelf.booksOnShelf = newBookArray;
    var lastItem = newBookArray[newBookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });
  it("Should Error if latestBook is attempted to be assigned", function () {
    expect(function () {
      return bookShelf.latestBook = "book";
    }).toThrow();
  });
  it("Should add a new book to the bookshelf written as a setter", function () {
    bookArray.push("Added");
    bookShelf.addBookToShelf = "Added";
    expect(bookShelf.booksOnShelf).toEqual(bookArray);
  });
  it("Should handle multiple books being added to the shelf", function () {
    bookShelf = new BookShelf();
    var largeBookArray = [].concat(bookArray, bookArray, bookArray);
    largeBookArray.forEach(function (book) {
      return bookShelf.addBookToShelf = book;
    });
    expect(bookShelf.booksOnShelf.length).toEqual(largeBookArray.length);
  });
  it("Should match last item when multiple books have been added", function () {
    bookShelf = new BookShelf();
    var largeBookArray = [].concat(bookArray, bookArray, bookArray);
    largeBookArray.forEach(function (book) {
      return bookShelf.addBookToShelf = book;
    });
    var lastItem = largeBookArray[largeBookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });
  it("Should add a new book to the END of bookshelf written as a setter", function () {
    bookShelf.addBookToShelf = "Added";
    expect(bookShelf.latestBook).toBe("Added");
  });
});
xdescribe("Testing BankAccount class", function () {
  var bankAccount;
  beforeEach(function () {
    bankAccount = new BankAccount("matthew bickel", "spellcaster2003@gmail.com", 500);
  });
  it("Should be an object", function () {
    expect(_typeof(bankAccount)).toBe("object");
  });
  it("Should have a name and email key", function () {
    expect(bankAccount).toHaveProperty("name");
    expect(bankAccount).toHaveProperty("email");
  });
  it("Should have the correct name and email value", function () {
    expect(bankAccount.name).toBe("matthew bickel");
    expect(bankAccount.email).toBe("spellcaster2003@gmail.com");
  });
  it("Should have a private _balance key", function () {
    expect(bankAccount).toHaveProperty("_balance");
  });
  it("Should have the correct value on the _balance key", function () {
    expect(bankAccount._balance).toBe(500);
  });
  it("Should set _balance key to 0 by default", function () {
    bankAccount = new BankAccount("matthew bickel", "spellcaster2003@gmail.com");
    expect(bankAccount._balance).toEqual(0);
  });
  it("Should have the balance getter", function () {
    expect(bankAccount).toHaveProperty("balance");
  });
  it("Should return the _balance written as a getter", function () {
    expect(bankAccount.balance).toBe(500);
  });
  it("Should return a new _balance written as a getter", function () {
    bankAccount = new BankAccount("matthew bickel", "spellcaster2003@gmail.com", 52344);
    expect(bankAccount.balance).toBe(52344);
  });
  it("Should Error if balance is attempted to be assigned", function () {
    expect(function () {
      return bankAccount.balance = 200;
    }).toThrow();
  });
  it("Should have a deposit method", function () {
    expect(_typeof(bankAccount.deposit)).toBe("function");
  });
  it("Should be able to make a valid deposit (number) should recieve the updated balance when deposit() is called", function () {
    expect(bankAccount.deposit(10)).toBe(510);
  });
  it("Should be able to make a valid deposit ('number') should recieve the updated balance when deposit() is called", function () {
    expect(bankAccount.deposit("500")).toBe(1000);
  });
  it("Should NOT be able to make a INVALID deposit should recieve formatted string when deposit() is called", function () {
    expect(bankAccount.deposit("pony")).toBe("Invalid input, unable to deposit");
    expect(bankAccount.deposit(-100)).toBe("Invalid input, unable to deposit");
    expect(bankAccount.deposit("-100")).toBe("Invalid input, unable to deposit");
  });
  it("Should be able to make a valid deposit (number) and check the balance afterwards", function () {
    bankAccount.deposit(47);
    expect(bankAccount.balance).toBe(547);
  });
  it("Should be able to make multiple deposits and check the balance afterwards", function () {
    var toDeposit = [20, "50", "-2", 2, "0.5", 0.5, [], 15, 4, -50, "disco", 2, "1", "0.5", 0.25, 0.25, 3, 1];
    toDeposit.forEach(function (number) {
      bankAccount.deposit(number);
    });
    expect(bankAccount.balance).toBe(600);
  });
  it("Should have a withdraw method", function () {
    expect(_typeof(bankAccount.withdraw)).toBe("function");
  });
  it("Should be able to make a valid withdrawal (number) should recieve the updated balance when withdraw() is called", function () {
    expect(bankAccount.withdraw(50)).toBe(450);
  });
  it("Should be able to make a valid withdrawal ('number') should recieve the updated balance when withdraw() is called", function () {
    expect(bankAccount.withdraw("500")).toBe(0);
  });
  it("Should be able to make a valid withdraw (number) and check the balance afterwards", function () {
    bankAccount.withdraw(25);
    expect(bankAccount.balance).toBe(475);
  });
  it("Should NOT be able to make a INVALID withdrawal should recieve formatted string", function () {
    expect(bankAccount.withdraw("gardener")).toBe("Invalid input, unable to withdraw");
    expect(bankAccount.withdraw("-40")).toBe("Invalid input, unable to withdraw");
    expect(bankAccount.withdraw(-890)).toBe("Invalid input, unable to withdraw");
  });
  it("Should NOT be able to make withdraw more then the current balance", function () {
    expect(bankAccount.withdraw(1000)).toBe("Insufficient funds, unable to withdraw");
  });
  it("Should NOT change the balance after INVALID withdrawals", function () {
    bankAccount.withdraw(1000);
    bankAccount.withdraw("disco");
    expect(bankAccount.balance).toBe(500);
  });
  it("Should NOT go below zero", function () {
    bankAccount.withdraw(500);
    bankAccount.withdraw(500);
    bankAccount.withdraw(500);
    expect(bankAccount.balance).toBe(0);
  });
  it("Should be able to make multiple withdrawals and check the balance afterwards", function () {
    var toWithdraw = [20, "50", 2, "0.5", -22, 0.5, 15, 500, 4, "disco", 2, "1", "0.5", 0.25, 0.25, 3, 1, 1000];
    toWithdraw.forEach(function (number) {
      bankAccount.withdraw(number);
    });
    expect(bankAccount.balance).toBe(400);
  });
});