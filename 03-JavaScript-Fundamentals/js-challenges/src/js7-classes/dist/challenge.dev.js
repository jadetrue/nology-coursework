"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankAccount = exports.BookShelf = exports.Modal = exports.Engine = exports.Counter = exports.Loader = exports.Alert = exports.Coordinate = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* JS7 builds on the previous challenges and adds the use of Classes, methods and inheritance.
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
 * Complete the Skeleton of a Coordinate Class below.
 *
 * You will need to complete the constructor.
 * It needs to accept these two parameters xCoord and yCoord.
 * The keys will NEED to be named xCoord and yCoord.
 */

/** Class representing a coordinate. */
var Coordinate =
/*#__PURE__*/
function () {
  /**
   * Create a coordinate.
   * @param {number} xCoord - 22.
   * @param {number} yCoord - 20.
   */
  function Coordinate(xCoord, yCoord) {
    _classCallCheck(this, Coordinate);

    this.xCoord = xCoord, this.yCoord = yCoord;
  }

  _createClass(Coordinate, [{
    key: "getCoordinates",
    value: function getCoordinates() {
      var coordinates = "".concat(this.xCoord, ", ").concat(this.yCoord);
      return coordinates;
    }
  }]);

  return Coordinate;
}();
/**
 * Complete the Skeleton of a Alert Class below.
 *
 * You will need to complete the constructor.
 * It needs to accept a parameter called message.
 * The key will need to be called message.
 *
 * You will need to complete the printMessage() method.
 * This method when called returns a string matching the following format.
 * "!!!! " + message + " !!!!"
 */

/** Class representing an alert. */


exports.Coordinate = Coordinate;

var Alert =
/*#__PURE__*/
function () {
  /**
   * Create an alert.
   * @param {string} message - "Are sure you want to proceed?"
   */
  function Alert(message) {
    _classCallCheck(this, Alert);

    this.message = message;
  }
  /**
   * Returns a string with "!!!! " + " !!!!" added to the start and end of the message key.
   * @return {string} "!!!! Are sure you want to proceed? !!!!"
   */


  _createClass(Alert, [{
    key: "printMessage",
    value: function printMessage() {
      var message = "!!!! ".concat(this.message, " !!!!");
      return message;
    }
  }]);

  return Alert;
}();
/**
 * Complete the Skeleton of a Loader Class below.
 *
 * You will need to complete the constructor.
 * It needs to accept a parameter called htmlRef.
 * htmlRef will be a mock html element and will have an innerHTML key.
 *
 * The key on the class will need to be called htmlRef.
 *
 * You will need to complete the two methods.
 *
 * The first is called displayLoader().
 * This will set the innerHTML of the htmlRef to "<div class="loader"></div>".
 *
 * The second is called removeLoader().
 * This will set the innerHTML of the htmlRef to an empty string.
 */

/** Class representing a loader. */


exports.Alert = Alert;

var Loader =
/*#__PURE__*/
function () {
  /**
   * Create a loader.
   * @param {{innerHTML:string}} htmlRef - {innerHTML:""}
   */
  function Loader(htmlRef) {
    _classCallCheck(this, Loader);

    this.htmlRef = htmlRef;
  }
  /**
   * Updates the htmlRef.innerHTML to display the loader's html.
   */


  _createClass(Loader, [{
    key: "displayLoader",
    value: function displayLoader() {
      this.htmlRef.innerHTML = '<div class="loader"></div>';
    }
    /**
     * Updates the htmlRef.innerHTML to remove the loader's html.
     */

  }, {
    key: "removeLoader",
    value: function removeLoader() {
      this.htmlRef.innerHTML = "";
    }
  }]);

  return Loader;
}();
/**
 * Intemediate Challenges
 */

/**
 * Complete the Skeleton of a Counter Class below.
 *
 * You will need to write the constructor.
 * It needs to accept a parameter called count.
 * If count is not given it will need a default value of 0.
 * The key will need to be called count.
 *
 * You will need to write two methods on the instance of the Counter class.
 *
 * The first will need to be called increment.
 * This function will increase the count by 1 and return the updated count.
 *
 * The second will need to be called decrement.
 * This function will decrease the count by 1 and return the updated count.
 * You should not be able to decrease the count below 0.
 *
 */

/** Class representing a Counter. */


exports.Loader = Loader;

var Counter =
/*#__PURE__*/
function () {
  /**
   * Create an counter.
   * @param {number} count - 50
   */
  function Counter() {
    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, Counter);

    this.count = count;
  }
  /**
   * A method that increments count by 1.
   * @return {number} 51
   */


  _createClass(Counter, [{
    key: "increment",
    value: function increment() {
      this.count++;
      return this.count;
    }
    /**
     * A method that decrements count by 1 but will not go below 0.
     * @return {number} 49
     */

  }, {
    key: "decrement",
    value: function decrement() {
      if (this.count > 0) this.count--;
      return this.count;
    }
  }]);

  return Counter;
}();
/**
 * Complete the Skeleton of a Engine Class below.
 *
 * You will need to complete the constructor.
 *
 * You DO NOT always need parameters for a constructor.
 * When the Engine class is created engineIsRunning will always be set to false.
 * The key needs to be named engineIsRunning.
 *
 * You will need to complete the two methods.
 *
 * The first is called startEngine().
 * If engineIsRunning is true it will return "Engine is already running".
 * If engineIsRunning is false it will set engineIsRunning to true and return "Engine has started running".
 *
 * The second is called stopEngine().
 * If engineIsRunning is true it will set engineIsRunning to false and return "Engine has stopped running".
 * If engineIsRunning is false it will return "Engine has already stopped running".
 */

/** Class representing an engine. */


exports.Counter = Counter;

var Engine =
/*#__PURE__*/
function () {
  /**
   * Create an engine.
   */
  function Engine() {
    _classCallCheck(this, Engine);
  }
  /**
   * Updates engineIsRunning to true and returns a conditonal string based if the engine is already running.
   * @return {string} "Engine has started running" or "Engine is already running"
   */


  _createClass(Engine, [{
    key: "startEngine",
    value: function startEngine() {
      return;
    }
    /**
     * Updates engineIsRunning to false and returns a conditonal string based if the engine has already stopped.
     * @return {string} "Engine has stopped running" or "Engine has already stopped running"
     */

  }, {
    key: "stopEngine",
    value: function stopEngine() {
      return;
    }
  }]);

  return Engine;
}();
/**
 * Complete the Skeleton of the Modal Class below.
 *
 * You will need to complete the constructor.
 * It needs to accept three parameters called htmlRef, title and message.
 * The keys will need to be called htmlRef, title and message.
 *
 * htmlRef will be a mock html element.
 * It will have an innerHTML and classList key.
 * Inside classList it will have the list key and the toggle() method.
 *
 * You will need to write two methods on the instance of the Modal class.
 *
 * The first will need to be called renderHtml().
 * This method will set the htmlRef's innerHTML property to match the format below.
 *
 * <div class="modal">
 *    <h2 class="modal--title">MODAL-TITLE</h2>
 *    <p class="modal--message">MODAL-MESSAGE</p>
 * </div>
 *
 * MODAL-TITLE will be the title key from the class.
 * MODAL-MESSAGE will be the mesage key from the class.
 *
 * The second will need to be called displayModal().
 * This method when called will go into the htmlRef, then into the classList and use the toggle method.
 * The toggle method will need to be passed a string of "hide" to correctly toggle the class.
 * This is mocking the adding and removing of a CSS class to a HTML element.
 */

/** Class representing a modal. */


exports.Engine = Engine;

var Modal =
/**
 * Create a modal.
 * @param {HTMLElement} htmlRef - { innerHTML:"", classList:{ list: [], toggle()}}
 * @param {string} title - "Error"
 * @param {string} message - "We are currently unable to provide this service"
 */
function Modal() {
  _classCallCheck(this, Modal);
}
/**
 * A method that renders the html for a modal.
 */
// WRITE RENDER HTML METHOD HERE

/**
 * A method that toggles a CSS class to either show or hide the modal.
 */
// WRITE DISPLAY MODAL METHOD HERE
;
/**
 * Advanced Challenges
 */

/**
 * Complete the Skeleton of a BookShelf Class below.
 *
 * You will be implementing getters and setters on the class below.
 *
 * Have a watch -> https://www.youtube.com/watch?v=bl98dm7vJt0
 *
 * The constructor is completed.
 * It accepts two a parameters called shelfId and booksOnShelf.
 * The keys on the class are prefixed with a "_" indicating that a given property is private and shouldn’t be accessed from outside of the class.
 * The keys need to remain with the names _shelfId and _booksOnShelf
 *
 * A getter and a setter have been added to the class.
 * The getter is called booksOnShelf and returns the private property _booksOnShelf
 * The setter is called booksOnShelf and allows you to replace the private property _booksOnShelf
 *
 * You will need to create a getter and a setter on the instance of the BookShelf class.
 *
 * The getter will need to be called latestBook.
 * This will return the last item of the private property _booksOnShelf.
 *
 * The setter will need to be called addBookToShelf.
 * This will need to take a book as a parameter and add it to end of the of the private property _booksOnShelf.
 *
 */

/** Class representing a book shelf. */


exports.Modal = Modal;

var BookShelf =
/*#__PURE__*/
function () {
  /**
   * Create a book shelf.
   * @param {string} shelfId - "aa0050a01"
   * @param {string[]} booksOnShelf - ["JavaScript for Kids", "Learning JavaScript Design Patterns"]
   *
   */
  function BookShelf(shelfId) {
    var booksOnShelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, BookShelf);

    this._shelfId = shelfId;
    this._booksOnShelf = booksOnShelf;
  }
  /**
   * A getter that returns the current books on the shelf.
   * @return {string[]} ["JavaScript for Kids", "Learning JavaScript Design Patterns"]
   */


  _createClass(BookShelf, [{
    key: "booksOnShelf",
    get: function get() {
      return this._booksOnShelf;
    }
    /**
     * A setter that replaces the current books on the shelf with a new list of books.
     * @param {string[]} bookArray ["Learn JavaScript Visually"]
     */
    ,
    set: function set() {
      var bookArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this._booksOnShelf = bookArray;
    }
    /**
     * A getter that returns the latest book to be added to the book shelf.
     * @return {string} "Learning JavaScript Design Patterns"
     */
    // WRITE LATEST BOOK GETTER HERE

    /**
     * A setter that adds a new book to the list of books.
     * @param {string} "Eloquent JavaScript"
     */
    // WRITE ADD BOOK TO SHELF SETTER HERE

  }]);

  return BookShelf;
}();
/**
 * Expert Challenge
 */

/**
 * Complete the Skeleton of a BankAccount Class below.
 *
 * You will need to write the constructor.
 * It needs to accept three parameters called name, email and balance.
 * By defualt the balance will be set to 0 unless a balance is given.
 * The balance key is private so will need to be prefixed with a "_"
 * The keys will need to be called name, email and _balance.
 *
 * You will need to write a getter.
 *
 * The getter will need to be called balance.
 * It will return the current _balance of the BankAccount
 *
 * You will need to write two methods.
 *
 * The first needs to be called deposit().
 * It will need to accempt a parameter which is the amount to deposit.
 * This parameter can either be a number (2), a number as a string ("2"), or something else ("cheese")
 * You will have to handle this in the function.
 * You will need to handle negative numbers.
 *
 * If it is a positive number it needs to be added to the balance. The updated balance is then returned.
 * If it is a positive number as a string it needs to be turned into a number and added to the balance. The updated balance is then returned.
 * If it is a negative number or something else the function need to return this "Invalid input, unable to deposit".
 *
 * The second needs to be called withdraw().
 * It will need to accempt a parameter which is the amount to withdraw.
 * This parameter can either be a number (2), a number as a string ("2"), or something else ("cheese")
 * You will have to handle this in the function.
 * You will need to handle negative numbers.
 *
 * If the amount to withdraw is greater then the balance it needs to return "Insufficient funds, unable to withdraw"
 * If it is a positive number it needs to be removed from the balance. The updated balance is then returned.
 * If it is a positive number as a string it needs to be turned into a number and removed from the balance. The updated balance is then returned.
 * If it is a negative number or something else the function need to return this "Invalid input, unable to withdraw".
 */

/** Class representing a bank account. */


exports.BookShelf = BookShelf;

var BankAccount =
/**
 * Create a bank account.
 * @param {string} name
 * @param {string} email
 * @param {number} balance
 */
function BankAccount() {
  _classCallCheck(this, BankAccount);
}
/**
 * A getter that returns the current balance.
 * @return {number} 20
 */
// WRITE BALANCE GETTER HERE

/**
 * A method that deposits to the balance.
 * It checks if the input is correct.
 * If if it is incorrect it returns "Invalid input, unable to deposit".
 * If it is correct it adds the input to the balance and returns the updated balance.
 * @param {(number|string)} toDeposit 20 or "Bad Input"
 * @return {(number|string)} 40 or "Invalid input, unable to deposit"
 */
// WRITE DEPOSIT METHOD HERE

/**
 * A method that withdraws from the balance.
 * It checks if the input is correct.
 * If if it is incorrect it returns "Invalid input, unable to deposit".
 * If if it is correct but more then the balance it returns "Insufficient funds, unable to withdraw".
 * If it is correct it subtracts the input to the balance and returns the updated balance.
 * @param {(number|string)} toWithdraw 20 or "Bad Input" or 1000
 * @return {(number|string)} 40 or "Invalid input, unable to deposit" or "Insufficient funds, unable to withdraw"
 */
// WRITE WITH DRAW METHOD HERE
;

exports.BankAccount = BankAccount;