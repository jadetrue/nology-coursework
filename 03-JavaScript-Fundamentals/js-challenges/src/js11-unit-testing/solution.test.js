import * as challenge from "./js13";

test("Should return correct string", () => {
  expect(challenge.greet()).toBe("Hello, nice to meet you");
});

test("Should add two numbers together", () => {
  expect(challenge.sumTwoNumbers(1, 2)).toBe(3);
  expect(challenge.sumTwoNumbers(3, 7)).toBe(10);
  expect(challenge.sumTwoNumbers(4, 1)).toBe(5);
});

test("Should return string based on which number is larger", () => {
  expect(challenge.checkLarger(5, 5)).toBe("Both numbers are equal");
  expect(challenge.checkLarger(5, 1)).toBe("5 is bigger than 1");
  expect(challenge.checkLarger(1, 5)).toBe("5 is bigger than 1");
});

test("Should return new array of names based on length", () => {
  expect(challenge.filterByLength(["Paul", "Calum", "Rebecca"])).toMatchObject(["Paul", "Calum"]);
  expect(challenge.filterByLength(["Johnathan", "Sylvester", "Charlie"])).toBe("Sorry, no valid names supplied");
  expect(challenge.filterByLength(["Tom", "Dick", "Harry"])).toMatchObject(["Tom", "Dick", "Harry"]);
});

test("Should reduce all numbers correctly", () => {
  expect(challenge.reduceNumbers([255, 230, 30], 10)).toMatchObject([245, 220, 20]);
  expect(challenge.reduceNumbers([40, 30, 20], 50)).toMatchObject([0, 0, 0]);
  expect(challenge.reduceNumbers([300, 310, 320], 40)).toMatchObject([255, 255, 255]);
});
