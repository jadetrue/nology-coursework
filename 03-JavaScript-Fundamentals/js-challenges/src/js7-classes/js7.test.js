import * as challenge from "./challenge";

const { Coordinate, Alert, Loader, Counter, Engine, Modal, BookShelf, BankAccount } = challenge;

/**
 * REMOVE X FROM xdescribe FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

describe("Testing Coordinate class", () => {
  const coordOne = new Coordinate(5, 10);
  const coordTwo = new Coordinate(45, 17);

  it("Should be an object", () => {
    expect(typeof coordOne).toBe("object");
    expect(typeof coordTwo).toBe("object");
  });

  it("Should have xCoord key", () => {
    expect(coordOne).toHaveProperty("xCoord");
    expect(coordTwo).toHaveProperty("xCoord");
  });

  it("Should have yCoord key", () => {
    expect(coordOne).toHaveProperty("yCoord");
    expect(coordTwo).toHaveProperty("yCoord");
  });

  it("Should have the correct value for xCoord key", () => {
    expect(coordOne.xCoord).toBe(5);
    expect(coordTwo.xCoord).toBe(45);
  });

  it("Should have the correct value for yCoord key", () => {
    expect(coordOne.yCoord).toBe(10);
    expect(coordTwo.yCoord).toBe(17);
  });
});

xdescribe("Testing Alert class", () => {
  const logOutAlert = new Alert("Are you sure you want to log out?");
  const deleteAlert = new Alert("Are you sure you want to delete this content?");

  it("Should be an object", () => {
    expect(typeof logOutAlert).toBe("object");
    expect(typeof deleteAlert).toBe("object");
  });

  it("Should have a message key", () => {
    expect(logOutAlert).toHaveProperty("message");
    expect(deleteAlert).toHaveProperty("message");
  });

  it("Should have a printMessage function", () => {
    expect(typeof logOutAlert.printMessage).toBe("function");
    expect(typeof deleteAlert.printMessage).toBe("function");
  });

  it("Should return a string when the printMessage method is called", () => {
    expect(typeof logOutAlert.printMessage()).toBe("string");
    expect(typeof deleteAlert.printMessage()).toBe("string");
  });

  it("Should return a correctly formatted string when the printMessage method is called", () => {
    const logOutMessage = "!!!! Are you sure you want to log out? !!!!";
    const deleteMessage = "!!!! Are you sure you want to delete this content? !!!!";

    expect(logOutAlert.printMessage()).toBe(logOutMessage);
    expect(deleteAlert.printMessage()).toBe(deleteMessage);
  });

  it("Should not alter message key after method is called", () => {
    logOutAlert.printMessage();
    deleteAlert.printMessage();
    expect(logOutAlert.message).toBe("Are you sure you want to log out?");
    expect(deleteAlert.message).toBe("Are you sure you want to delete this content?");
  });
});

xdescribe("Testing Loader class", () => {
  const htmlReference = { innerHTML: "" };
  const loader = new Loader(htmlReference);

  it("Should be an object", () => {
    expect(typeof loader).toBe("object");
  });

  it("Should have a htmlRef key", () => {
    expect(loader).toHaveProperty("htmlRef");
  });

  it("Should have a displayLoader and removeLoader methods", () => {
    expect(typeof loader.displayLoader).toBe("function");
    expect(typeof loader.removeLoader).toBe("function");
  });

  it("Should add the correct html to the html reference when displayLoader() is called", () => {
    loader.displayLoader();
    expect(htmlReference.innerHTML).toBe('<div class="loader"></div>');
  });

  it("Should add the correct html to the html reference when displayLoader() is called multiple times", () => {
    loader.displayLoader();
    loader.displayLoader();
    loader.displayLoader();
    loader.displayLoader();
    expect(htmlReference.innerHTML).toBe('<div class="loader"></div>');
  });

  it("Should set innerHTML of html reference to an empty string removeLoader() is called", () => {
    loader.removeLoader();
    expect(htmlReference.innerHTML).toBe("");
  });

  it("Should remove html from the html reference when displayLoader() and then removeLoader() is called", () => {
    loader.displayLoader();
    loader.removeLoader();
    expect(htmlReference.innerHTML).toBe("");
  });
});

xdescribe("Testing Counter class", () => {
  let lowCount, highCount, noCount;

  beforeEach(() => {
    lowCount = new Counter(5);
    highCount = new Counter(500);
    noCount = new Counter();
  });

  it("Should be an object", () => {
    expect(typeof lowCount).toBe("object");
    expect(typeof highCount).toBe("object");
    expect(typeof noCount).toBe("object");
  });

  it("Should have a count key", () => {
    expect(lowCount).toHaveProperty("count");
    expect(highCount).toHaveProperty("count");
    expect(noCount).toHaveProperty("count");
  });

  it("Should have correct count when initialised", () => {
    expect(lowCount.count).toBe(5);
    expect(highCount.count).toBe(500);
    expect(noCount.count).toBe(0);
  });

  it("Should have a increment function", () => {
    expect(typeof lowCount.increment).toBe("function");
    expect(typeof highCount.increment).toBe("function");
    expect(typeof noCount.increment).toBe("function");
  });

  it("Should return a number when the increment method is called", () => {
    expect(typeof lowCount.increment()).toBe("number");
    expect(typeof highCount.increment()).toBe("number");
    expect(typeof noCount.increment()).toBe("number");
  });

  it("Should increment count by 1", () => {
    lowCount.increment();
    highCount.increment();
    noCount.increment();

    expect(lowCount.count).toBe(6);
    expect(highCount.count).toBe(501);
    expect(noCount.count).toBe(1);
  });

  it("Should increment count by 1 100 times", () => {
    for (let index = 0; index < 100; index++) {
      lowCount.increment();
      highCount.increment();
      noCount.increment();
    }

    expect(lowCount.count).toBe(105);
    expect(highCount.count).toBe(600);
    expect(noCount.count).toBe(100);
  });

  it("Should have a decrement function", () => {
    expect(typeof lowCount.decrement).toBe("function");
    expect(typeof highCount.decrement).toBe("function");
    expect(typeof noCount.decrement).toBe("function");
  });

  it("Should return a number when the decrement method is called", () => {
    expect(typeof lowCount.increment()).toBe("number");
    expect(typeof highCount.increment()).toBe("number");
    expect(typeof noCount.increment()).toBe("number");
  });

  it("Should decrement count by 1", () => {
    lowCount.decrement();
    highCount.decrement();

    expect(lowCount.count).toBe(4);
    expect(highCount.count).toBe(499);
  });

  it("Should decrement count by 1 100 times", () => {
    for (let index = 0; index < 100; index++) {
      highCount.decrement();
    }

    expect(highCount.count).toBe(400);
  });

  it("Should not decrement below 0", () => {
    for (let index = 0; index < 500; index++) {
      lowCount.decrement();
      highCount.decrement();
      noCount.decrement();
    }

    expect(lowCount.count).toBe(0);
    expect(highCount.count).toBe(0);
    expect(noCount.count).toBe(0);
  });
});

xdescribe("Testing Engine class", () => {
  let engine;

  beforeEach(() => {
    engine = new Engine();
  });

  it("Should be an object", () => {
    expect(typeof engine).toBe("object");
  });

  it("Should have a engineIsRunning key", () => {
    expect(engine).toHaveProperty("engineIsRunning");
  });

  it("Should set engineIsRunning to false by default", () => {
    expect(engine.engineIsRunning).toBe(false);
  });

  it("Should have a startEngine function", () => {
    expect(typeof engine.startEngine).toBe("function");
  });

  it("Should return a string when the startEngine method is called", () => {
    expect(typeof engine.startEngine()).toBe("string");
  });

  it("Should return the correct string when startEngine() is called and engineIsRunning is false", () => {
    expect(engine.startEngine()).toBe("Engine has started running");
  });

  it("Should set engineIsRunning to true after startEngine() has been called", () => {
    engine.startEngine();
    expect(engine.engineIsRunning).toBe(true);
  });

  it("Should return the correct string when startEngine() is called and engineIsRunning is true", () => {
    engine.startEngine();
    expect(engine.startEngine()).toBe("Engine is already running");
  });

  it("Should have a stopEngine function", () => {
    expect(typeof engine.stopEngine).toBe("function");
  });

  it("Should return a string when the stopEngine method is called", () => {
    expect(typeof engine.stopEngine()).toBe("string");
  });

  it("Should return the correct string when stopEngine() is called and engineIsRunning is false", () => {
    expect(engine.stopEngine()).toBe("Engine has already stopped running");
  });

  it("Should return the correct string when stopEngine() is called and engineIsRunning is true", () => {
    engine.startEngine();
    expect(engine.stopEngine()).toBe("Engine has stopped running");
  });

  it("Should set engineIsRunning to false after startEngine() and stopEngine() have been called", () => {
    engine.startEngine();
    engine.stopEngine();
    expect(engine.engineIsRunning).toBe(false);
  });
});

xdescribe("Testing Modal class", () => {
  let modal;

  let htmlReference;

  beforeEach(() => {
    htmlReference = {
      innerHTML: "",
      classList: {
        list: ["hide"],
        toggle(cssClass) {
          if (this.list.includes(cssClass)) {
            this.list = this.list.filter((listItem) => listItem !== cssClass);
          } else {
            this.list.push(cssClass);
          }
        }
      }
    };
    modal = new Modal(htmlReference, "Error", "Sorry there has been some sort of error");
  });

  it("Should be an object", () => {
    expect(typeof modal).toBe("object");
  });

  it("Should have htmlRef, title and message keys", () => {
    expect(modal).toHaveProperty("htmlRef");
    expect(modal).toHaveProperty("title");
    expect(modal).toHaveProperty("message");
  });

  it("Should have correct values assigned to the keys", () => {
    expect(modal.htmlRef).toEqual(htmlReference);
    expect(modal.title).toBe("Error");
    expect(modal.message).toBe("Sorry there has been some sort of error");
  });

  it("Should have renderHtml and toggleModalfunctions", () => {
    expect(typeof modal.renderHtml).toBe("function");
    expect(typeof modal.displayModal).toBe("function");
  });

  it("Should update the innerHTML of the htmlRefernce after renderHtml() has been called", () => {
    const expectedHtml = `
    <div class="modal">
      <h2 class="modal--title">Error</h2>
      <p class="modal--message">Sorry there has been some sort of error</p>
    </div>
    `;

    modal.renderHtml();
    expect(htmlReference.innerHTML).toBe(expectedHtml);
  });

  it("Should update the innerHTML of the htmlRefernce dynamically after renderHtml() has been called", () => {
    modal = new Modal(htmlReference, "Good Morning", "Have a great day!");

    const expectedHtml = `
    <div class="modal">
      <h2 class="modal--title">Good Morning</h2>
      <p class="modal--message">Have a great day!</p>
    </div>
    `;

    modal.renderHtml();
    expect(htmlReference.innerHTML).toBe(expectedHtml);
  });

  it("Should update the classList of the htmlRefernce - remove hide", () => {
    modal.displayModal();

    expect(htmlReference.classList.list).toEqual([]);
  });

  it("Should update the classList of the htmlRefernce - add hide", () => {
    modal.displayModal();
    modal.displayModal();

    expect(htmlReference.classList.list).toEqual(["hide"]);
  });

  it("Should update the classList with the string of hide", () => {
    modal.displayModal();
    modal.displayModal();
    expect(htmlReference.classList.list[0]).toBe("hide");
  });
});

xdescribe("Testing BookShelf class", () => {
  let bookShelf;
  const bookArray = [
    "JavaScript: The Definitive Guide",
    "JavaScript: The Good Parts",
    "The Google story",
    "React for Dummies"
  ];

  const newBookArray = bookArray.filter((book) => book.includes("JavaScript"));

  beforeEach(() => {
    bookShelf = new BookShelf("aa0200a01", bookArray);
  });

  it("Should be an object", () => {
    expect(typeof bookShelf).toBe("object");
  });

  it("Should have a _shelfId and a _booksOnShelf key", () => {
    expect(bookShelf).toHaveProperty("_shelfId");
    expect(bookShelf).toHaveProperty("_booksOnShelf");
  });

  it("Should set _booksOnShelf to [] by default", () => {
    bookShelf = new BookShelf();
    expect(bookShelf._booksOnShelf).toEqual([]);
  });

  it("Should have the getters and setters", () => {
    expect(bookShelf).toHaveProperty("booksOnShelf");
    expect(bookShelf).toHaveProperty("latestBook");
    expect(bookShelf).toHaveProperty("addBookToShelf");
  });

  it("Should return the _booksOnShelf written as a getter", () => {
    expect(bookShelf.booksOnShelf).toEqual(bookArray);
  });

  it("Should update the _booksOnShelf written as a setter", () => {
    bookShelf.booksOnShelf = newBookArray;
    expect(bookShelf.booksOnShelf).toEqual(newBookArray);
  });

  it("Should return the latestBook written as a getter", () => {
    const lastItem = bookArray[bookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });

  it("Should update using a setter and return the latestBook written as a getter", () => {
    bookShelf.booksOnShelf = newBookArray;
    const lastItem = newBookArray[newBookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });

  it("Should Error if latestBook is attempted to be assigned", () => {
    expect(() => (bookShelf.latestBook = "book")).toThrow();
  });

  it("Should add a new book to the bookshelf written as a setter", () => {
    bookArray.push("Added");
    bookShelf.addBookToShelf = "Added";
    expect(bookShelf.booksOnShelf).toEqual(bookArray);
  });

  it("Should handle multiple books being added to the shelf", () => {
    bookShelf = new BookShelf();
    const largeBookArray = [...bookArray, ...bookArray, ...bookArray];
    largeBookArray.forEach((book) => (bookShelf.addBookToShelf = book));
    expect(bookShelf.booksOnShelf.length).toEqual(largeBookArray.length);
  });

  it("Should match last item when multiple books have been added", () => {
    bookShelf = new BookShelf();
    const largeBookArray = [...bookArray, ...bookArray, ...bookArray];
    largeBookArray.forEach((book) => (bookShelf.addBookToShelf = book));
    const lastItem = largeBookArray[largeBookArray.length - 1];
    expect(bookShelf.latestBook).toBe(lastItem);
  });

  it("Should add a new book to the END of bookshelf written as a setter", () => {
    bookShelf.addBookToShelf = "Added";
    expect(bookShelf.latestBook).toBe("Added");
  });
});

xdescribe("Testing BankAccount class", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount("matthew bickel", "spellcaster2003@gmail.com", 500);
  });

  it("Should be an object", () => {
    expect(typeof bankAccount).toBe("object");
  });

  it("Should have a name and email key", () => {
    expect(bankAccount).toHaveProperty("name");
    expect(bankAccount).toHaveProperty("email");
  });

  it("Should have the correct name and email value", () => {
    expect(bankAccount.name).toBe("matthew bickel");
    expect(bankAccount.email).toBe("spellcaster2003@gmail.com");
  });

  it("Should have a private _balance key", () => {
    expect(bankAccount).toHaveProperty("_balance");
  });

  it("Should have the correct value on the _balance key", () => {
    expect(bankAccount._balance).toBe(500);
  });

  it("Should set _balance key to 0 by default", () => {
    bankAccount = new BankAccount("matthew bickel", "spellcaster2003@gmail.com");
    expect(bankAccount._balance).toEqual(0);
  });

  it("Should have the balance getter", () => {
    expect(bankAccount).toHaveProperty("balance");
  });

  it("Should return the _balance written as a getter", () => {
    expect(bankAccount.balance).toBe(500);
  });

  it("Should return a new _balance written as a getter", () => {
    bankAccount = new BankAccount("matthew bickel", "spellcaster2003@gmail.com", 52344);
    expect(bankAccount.balance).toBe(52344);
  });

  it("Should Error if balance is attempted to be assigned", () => {
    expect(() => (bankAccount.balance = 200)).toThrow();
  });

  it("Should have a deposit method", () => {
    expect(typeof bankAccount.deposit).toBe("function");
  });

  it("Should be able to make a valid deposit (number) should recieve the updated balance when deposit() is called", () => {
    expect(bankAccount.deposit(10)).toBe(510);
  });

  it("Should be able to make a valid deposit ('number') should recieve the updated balance when deposit() is called", () => {
    expect(bankAccount.deposit("500")).toBe(1000);
  });

  it("Should NOT be able to make a INVALID deposit should recieve formatted string when deposit() is called", () => {
    expect(bankAccount.deposit("pony")).toBe("Invalid input, unable to deposit");
    expect(bankAccount.deposit(-100)).toBe("Invalid input, unable to deposit");
    expect(bankAccount.deposit("-100")).toBe("Invalid input, unable to deposit");
  });

  it("Should be able to make a valid deposit (number) and check the balance afterwards", () => {
    bankAccount.deposit(47);
    expect(bankAccount.balance).toBe(547);
  });

  it("Should be able to make multiple deposits and check the balance afterwards", () => {
    const toDeposit = [20, "50", "-2", 2, "0.5", 0.5, [], 15, 4, -50, "disco", 2, "1", "0.5", 0.25, 0.25, 3, 1];
    toDeposit.forEach((number) => {
      bankAccount.deposit(number);
    });
    expect(bankAccount.balance).toBe(600);
  });

  it("Should have a withdraw method", () => {
    expect(typeof bankAccount.withdraw).toBe("function");
  });

  it("Should be able to make a valid withdrawal (number) should recieve the updated balance when withdraw() is called", () => {
    expect(bankAccount.withdraw(50)).toBe(450);
  });

  it("Should be able to make a valid withdrawal ('number') should recieve the updated balance when withdraw() is called", () => {
    expect(bankAccount.withdraw("500")).toBe(0);
  });

  it("Should be able to make a valid withdraw (number) and check the balance afterwards", () => {
    bankAccount.withdraw(25);
    expect(bankAccount.balance).toBe(475);
  });

  it("Should NOT be able to make a INVALID withdrawal should recieve formatted string", () => {
    expect(bankAccount.withdraw("gardener")).toBe("Invalid input, unable to withdraw");
    expect(bankAccount.withdraw("-40")).toBe("Invalid input, unable to withdraw");
    expect(bankAccount.withdraw(-890)).toBe("Invalid input, unable to withdraw");
  });

  it("Should NOT be able to make withdraw more then the current balance", () => {
    expect(bankAccount.withdraw(1000)).toBe("Insufficient funds, unable to withdraw");
  });

  it("Should NOT change the balance after INVALID withdrawals", () => {
    bankAccount.withdraw(1000);
    bankAccount.withdraw("disco");
    expect(bankAccount.balance).toBe(500);
  });

  it("Should NOT go below zero", () => {
    bankAccount.withdraw(500);
    bankAccount.withdraw(500);
    bankAccount.withdraw(500);
    expect(bankAccount.balance).toBe(0);
  });

  it("Should be able to make multiple withdrawals and check the balance afterwards", () => {
    const toWithdraw = [20, "50", 2, "0.5", -22, 0.5, 15, 500, 4, "disco", 2, "1", "0.5", 0.25, 0.25, 3, 1, 1000];
    toWithdraw.forEach((number) => {
      bankAccount.withdraw(number);
    });
    expect(bankAccount.balance).toBe(400);
  });
});
