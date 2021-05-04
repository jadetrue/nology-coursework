import * as challenge from "./challenge";

const {
  totalScoresArr,
  reverseString,
  sortCharactersAlphabetically,
  sortNumbersHighToLow,
  checkItemInstock,
  checkPrimaryColours,
  checkStringPalindrome,
  totalNestedScoresArr,
  encryptString,
} = challenge;

/**
 * REMOVE X FROM DESCRIBE FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

describe("Testing totalScoresArr()", () => {
  const scoresArr = Array(50).fill(20);

  it("Should return a Number", () => {
    expect(typeof totalScoresArr(scoresArr)).toBe("number");
    expect(typeof totalScoresArr([1])).toBe("number");
  });

  it("Should total numbers", () => {
    expect(totalScoresArr(scoresArr)).toBe(1000);
    expect(totalScoresArr([1, 2, 5, 10])).toBe(18);
  });
});

xdescribe("Testing reverseString()", () => {
  it("Should return a String", () => {
    expect(typeof reverseString("coconut")).toBe("string");
    expect(typeof reverseString("test")).toBe("string");
  });

  it("Should not alter a single letter", () => {
    expect(reverseString("c")).toBe("c");
    expect(reverseString("h")).toBe("h");
  });

  it("Should be the same size as input", () => {
    expect(reverseString("hhh").length).toBe(3);
    expect(reverseString("disco").length).toBe(5);
  });

  it("Should reverse a String", () => {
    expect(reverseString("coconut")).toBe("tunococ");
    expect(reverseString("test")).toBe("tset");
  });

});

xdescribe("Testing sortCharactersAlphabetically()", () => {
  const lowerCaseCharArr = "dloejmixwrsnfacqyukvhtgzpb".split("");
  const upperCaseCharArr = "DLOEJMIXWRSNFACQYUKVHTGZPB".split("");
  const sortedCharArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const mixedCaseArr = [...lowerCaseCharArr, ...upperCaseCharArr];
  const sortedMixedCaseArr = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz".split("");

  it("Should return an Array", () => {
    expect(Array.isArray(sortCharactersAlphabetically(lowerCaseCharArr))).toBeTruthy();
    expect(Array.isArray(sortCharactersAlphabetically(["Test"]))).toBeTruthy();
  });

  it("Should return an Array of Strings", () => {
    const stringTest = sortCharactersAlphabetically(lowerCaseCharArr).every((char) => typeof char === "string");
    expect(stringTest).toBeTruthy();
  });

  it("Should sort lowercase letters alphabetically", () => {
    expect(sortCharactersAlphabetically(lowerCaseCharArr)).toEqual(sortedCharArr);
    expect(sortCharactersAlphabetically(sortedCharArr)).toEqual(sortedCharArr);
    expect(sortCharactersAlphabetically(["c", "b", "a"])).toEqual(["a", "b", "c"]);
  });

  it("Should sort uppercase letters alphabetically", () => {
    expect(sortCharactersAlphabetically(upperCaseCharArr)).toEqual(sortedCharArr);
    expect(sortCharactersAlphabetically(["C", "B", "B"])).toEqual(["b", "b", "c"]);
  });

  it("Should sort Uppercase and lowercase characters", () => {
    expect(sortCharactersAlphabetically(mixedCaseArr)).toEqual(sortedMixedCaseArr);
    expect(sortCharactersAlphabetically(["A", "b", "C"])).toEqual(["a", "b", "c"]);
  });

  it("Should be the same length as the input", () => {
    expect(sortCharactersAlphabetically(lowerCaseCharArr).length).toBe(26);
    expect(sortCharactersAlphabetically(mixedCaseArr).length).toBe(52);
    expect(sortCharactersAlphabetically(["a", "a", "a"]).length).toBe(3);
  });

});

xdescribe("Testing sortNumbersHighToLow()", () => {
  const lowToHigh = Array(50)
    .fill(1)
    .map((number, index) => (number += index));

  const highToLow = [...lowToHigh].reverse();

  it("Should return an Array", () => {
    expect(Array.isArray(sortNumbersHighToLow(lowToHigh))).toBeTruthy();
    expect(Array.isArray(sortNumbersHighToLow([1]))).toBeTruthy();
  });

  it("Should return an Array of Numbers", () => {
    const numberTest = sortNumbersHighToLow(lowToHigh).every((number) => typeof number === "number");
    expect(numberTest).toBeTruthy();
  });

  it("Should not alter single numbers", () => {
    expect(sortNumbersHighToLow([1])).toEqual([1]);
    expect(sortNumbersHighToLow([40])).toEqual([40]);
  });

  it("Should sort multiple numbers high to low", () => {
    expect(sortNumbersHighToLow(lowToHigh)).toEqual(highToLow);
    expect(sortNumbersHighToLow([40, 7, 20, 53])).toEqual([53, 40, 20, 7]);
  });

  it("Should not alter already sorted array's", () => {
    expect(sortNumbersHighToLow(highToLow)).toEqual(highToLow);
    expect(sortNumbersHighToLow([53, 40, 20, 7])).toEqual([53, 40, 20, 7]);
  });

  it("Should have the same length as input", () => {
    expect(sortNumbersHighToLow(lowToHigh).length).toBe(50);
    expect(sortNumbersHighToLow([40, 7, 20, 53]).length).toBe(4);
  });

});

xdescribe("Testing checkItemInstock()", () => {
  const stockList = [
    "apple",
    "banana",
    "orange",
    "coconut",
    "strawberry",
    "lime",
    "grapefruit",
    "lemon",
    "kumquat",
    "blueberry",
    "melon",
  ];

  const expectedMatchMessage = (item, index) => `${item} is instock, it is on aisle ${index}.`;
  const expectedNoMatchMessage = (item) => `Sorry ${item} is not instock.`;

  it("Should return a String", () => {
    expect(typeof checkItemInstock("coconut")).toBe("string");
    expect(typeof checkItemInstock("test")).toBe("string");
  });

  it("Should handle single items from the stock list", () => {
    expect(checkItemInstock("apple")).toBe(expectedMatchMessage("apple", 0));
    expect(checkItemInstock("melon")).toBe(expectedMatchMessage("melon", 10));
  });

  it("Should handle single no match items", () => {
    expect(checkItemInstock("carrot")).toBe(expectedNoMatchMessage("carrot"));
    expect(checkItemInstock("kiwi")).toBe(expectedNoMatchMessage("kiwi"));
  });

  it("Should handle every item in the stock list", () => {
    const checkAllStock = stockList.every(
      (item, index) => checkItemInstock(item) === expectedMatchMessage(item, index)
    );
    expect(checkAllStock).toBe(true);
  });
});

xdescribe("Testing checkPrimaryColours()", () => {
  const rainbowColours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const primaryColours = ["red", "yellow", "blue"];

  it("Should return a Boolean", () => {
    expect(typeof checkPrimaryColours(["red"])).toBe("boolean");
    expect(typeof checkPrimaryColours(["green"])).toBe("boolean");
  });

  it("Should return true if all are primary", () => {
    expect(checkPrimaryColours(["red"])).toBe(true);
    expect(checkPrimaryColours(primaryColours)).toBe(true);
  });

  it("Should return false if all aren't primary", () => {
    expect(checkPrimaryColours(rainbowColours)).toBe(false);
    expect(checkPrimaryColours(["red", "crimson"])).toBe(false);
  });

  it("Should handle large inputs", () => {
    expect(checkPrimaryColours(Array(100).fill("red"))).toBe(true);
    expect(checkPrimaryColours(Array(5000).fill("brown"))).toBe(false);
  });

});

xdescribe("Testing checkStringPalindrome()", () => {
  it("Should return a Boolean", () => {
    expect(typeof checkStringPalindrome("red", "green")).toBe("boolean");
    expect(typeof checkStringPalindrome("green", "green")).toBe("boolean");
  });

  it("Should return true for a palindrome", () => {
    expect(checkStringPalindrome("madam")).toBe(true);
    expect(checkStringPalindrome("radar")).toBe(true);
    expect(checkStringPalindrome("racecar")).toBe(true);
    expect(checkStringPalindrome("abba")).toBe(true);
  });

  it("Should return false for a string", () => {
    expect(checkStringPalindrome("tom")).toBe(false);
    expect(checkStringPalindrome("dumoulin")).toBe(false);
    expect(checkStringPalindrome("greg")).toBe(false);
    expect(checkStringPalindrome("lemond")).toBe(false);
  });

  it("Should return true for a palindrome with spaces", () => {
    expect(checkStringPalindrome("step on no pets")).toBe(true);
    expect(checkStringPalindrome("racecar racecar")).toBe(true);
  });

  it("Should return false for a string with spaces", () => {
    expect(checkStringPalindrome("george bennett")).toBe(false);
    expect(checkStringPalindrome("greg lemond")).toBe(false);
  });
});

xdescribe("Testing totalNestedScoresArr()", () => {
  const nestedScoreArr = [
    [3, 2, 1],
    [45, 6, 2],
    [66, 88, 99, 100],
  ];

  const totalScoreArr = [6, 53, 353];

  it("Should return an Array", () => {
    expect(Array.isArray(totalNestedScoresArr(nestedScoreArr))).toBe(true);
    expect(Array.isArray(totalNestedScoresArr([[1]]))).toBe(true);
  });

  it("Should return array of numbers ", () => {
    const numberTest = totalNestedScoresArr(nestedScoreArr).every((number) => typeof number === "number");
    expect(numberTest).toBe(true);
  });

  it("Should total nested array of scores", () => {
    expect(totalNestedScoresArr([[1, 2, 3]])).toEqual([6]);
    expect(totalNestedScoresArr(nestedScoreArr)).toEqual(totalScoreArr);
  });

  it("Should not alter single scores", () => {
    expect(totalNestedScoresArr([[1], [2], [3]])).toEqual([1, 2, 3]);
    expect(totalNestedScoresArr([[45]])).toEqual([45]);
  });

  it("Should return a new array and not modify the old one", () => {
    expect(totalNestedScoresArr(nestedScoreArr)).not.toBe(nestedScoreArr);
  });
});

xdescribe("Testing encryptString()", () => {
  it("Should return a string", () => {
    expect(typeof encryptString("defined")).toBe("string");
    expect(typeof encryptString("disco flex")).toBe("string");
  });

  it("Should NOT encrypt three letters", () => {
    expect(encryptString("hey")).toBe("hey");
    expect(encryptString("ola")).toBe("ola");
  });

  it("Should encrypt after three plus letters", () => {
    expect(encryptString("heya")).toBe("haey");
    expect(encryptString("disco")).toBe("dcios");
    expect(encryptString("cellardoor")).toBe("cldreaolro");
  });

  it("Should encrypt large words", () => {
    expect(encryptString("antidisestablishmentarianism")).toBe("aistlhnrnmndeaimtiitisbseaas");
    expect(encryptString("hippopotomonstrosesquippedaliophobia")).toBe("hpomsosielpbiototsqpdihipponreupaooa");
  });

  it("Should keep spaces between words", () => {
    expect(encryptString("keep it secret")).toBe("kpteee  cteisr");
    expect(encryptString("keep it safe.")).toBe("kpta.e  feise");
  });

  it("Should handle empty input", () => {
    expect(encryptString("")).toBe("");
  });
});
