/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A Function that programmatically concatenates two strings together.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const firstName = "John";
const lastName = "Smith";

export const createFullName = () => {
  const returnString = firstName + " " + lastName;

  return returnString;
};

/**
 * A Function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const largeNumber1 = 100;
const largeNumber2 = 200;

export const findLargestNumber = () => {
  if (largeNumber1 > largeNumber2) {
    return largeNumber1;
  } else {
    return largeNumber2;
  }
};

/**
 * A Function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = () => {
  const sum = addNumber1 + addNumber2;

  return sum;
};

/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = () => {
  const lengthOfString = password.length;

  return lengthOfString;
};

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
const thing = "I am a thing";

export const findType = () => {
  const thingType = typeof thing;

  if (thingType === "string") {
    return "This is a string";
  } else if (thingType === "number") {
    return "This is a number";
  } else if (thingType === "boolean") {
    return "This is a boolean";
  } else {
    return "I don't know what this thing is";
  }
};

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
const nameTagOption = "Timothy";

export const getIsValidOnNameTag = () => {
  const firstLetterOfName = nameTagOption.substring(0, 1);
  const isValidName = nameTagOption.length <= 8 && firstLetterOfName === firstLetterOfName.toUpperCase();

  return isValidName;
};

/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
const stringToConvert = "14.45";

export const convertStringToNumber = () => {
  const convertedString = parseFloat(stringToConvert);

  return convertedString;
};

/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */
const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = () => {
  const regex = /([A-Z])/g;
  const hasUpperCaseLetters = regex.test(stringWithUppercaseLetters);

  return hasUpperCaseLetters;
};

/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = () => {
  const splitWords = pascalCaseVariableName.split(/(?=[A-Z])/);
  const joinedWordsWithUnderscores = splitWords.join("_");
  const snakeCase = joinedWordsWithUnderscores.toLowerCase();

  return snakeCase;
};
