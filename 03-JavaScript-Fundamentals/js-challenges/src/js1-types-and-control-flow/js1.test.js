import * as challenge from "./challenge";

const {
  createFullName,
  findLargestNumber,
  addNumbers,
  findLengthOfPassword,
  findType,
  getIsValidOnNameTag,
  convertStringToNumber,
  getHasUppercaseLetters,
  convertPascalCaseToSnakeCase
} = challenge;

test("createFullName() tests", () => {
  expect(createFullName()).toBeDefined();
  expect(createFullName()).toBe("John Smith");
});

test("findLargestNumber() tests", () => {
  expect(findLargestNumber()).toBeDefined();
  expect(findLargestNumber()).toBe(200);
});

test("addNumbers() tests", () => {
  expect(addNumbers()).toBeDefined();
  expect(addNumbers()).toBe(36);
});

test("findLengthOfPassword() tests", () => {
  expect(findLengthOfPassword()).toBeDefined();
  expect(findLengthOfPassword()).toBe(33);
});

test("findType() tests", () => {
  expect(findType()).toBeDefined();
  expect(findType()).toBe("This is a string");
});

test("getIsValidOnNameTag() tests", () => {
  expect(getIsValidOnNameTag()).toBeDefined();
  expect(getIsValidOnNameTag()).toBe(true);
});

test("convertStringToNumber() tests", () => {
  expect(convertStringToNumber()).toBeDefined();
  expect(convertStringToNumber()).toBe(14.45);
});

test("getHasUppercaseLetters() tests", () => {
  expect(getHasUppercaseLetters()).toBeDefined();
  expect(getHasUppercaseLetters()).toBe(true);
});

test("convertPascalCaseToSnakeCase() tests", () => {
  expect(convertPascalCaseToSnakeCase()).toBeDefined();
  expect(convertPascalCaseToSnakeCase()).toBe("i_want_to_be_snake_case");
});
