"use strict";

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getFurniturePrice = challenge.getFurniturePrice,
    setFurnitureStoreLocation = challenge.setFurnitureStoreLocation,
    makeSpaceship = challenge.makeSpaceship,
    setUserName = challenge.setUserName,
    splitFullNameToFirstAndLast = challenge.splitFullNameToFirstAndLast,
    accessGivenKey = challenge.accessGivenKey,
    getUserAddress = challenge.getUserAddress,
    setSafeAllergens = challenge.setSafeAllergens,
    mergeFurniture = challenge.mergeFurniture;
describe("getFurniturePrice() tests", function () {
  var table = {
    name: "lack",
    price: 6
  };
  var cabinet = {
    name: "brimnes",
    price: 55
  };
  it("Should return the correct price", function () {
    expect(getFurniturePrice(table)).toBe(6);
    expect(getFurniturePrice(cabinet)).toBe(55);
  });
});
describe("addFurnitureStorLocation() tests", function () {
  var table = {
    name: "lack",
    price: 6
  };
  var cabinet = {
    name: "brimnes",
    price: 55
  };
  it("Should return an object", function () {
    expect(_typeof(setFurnitureStoreLocation(table, "Bristol"))).toBe("object");
  });
  var tableWithLocation = setFurnitureStoreLocation(table, "Bristol");
  var cabinetWithLocation = setFurnitureStoreLocation(cabinet, "Cardiff");
  it("Should add a property of location", function () {
    expect(tableWithLocation).toHaveProperty("location");
    expect(cabinetWithLocation).toHaveProperty("location");
  });
  it("Should still have all of the old properties", function () {
    expect(tableWithLocation).toHaveProperty("name");
    expect(tableWithLocation).toHaveProperty("price");
    expect(cabinetWithLocation).toHaveProperty("name");
    expect(cabinetWithLocation).toHaveProperty("price");
  });
  it("Should exactly match given object", function () {
    expect(tableWithLocation).toStrictEqual({
      name: "lack",
      price: 6,
      location: "Bristol"
    });
    expect(cabinetWithLocation).toStrictEqual({
      name: "brimnes",
      price: 55,
      location: "Cardiff"
    });
  });
});
describe("makeSpaceship() tests", function () {
  it("Should return an object", function () {
    expect(_typeof(makeSpaceship("rocinante", 8, "epstein drive", true))).toBe("object");
  });
  var rocinante = {
    name: "rocinante",
    noOfSeats: 8,
    engineType: "epstein drive",
    canTravelSolarSystems: true
  };
  var enterprise = {
    name: "uss enterprise (ncc-1701-d)",
    noOfSeats: 5,
    engineType: "impulse drive",
    canTravelSolarSystems: true
  };
  it("Should create an object with the provided arguments as values", function () {
    expect(makeSpaceship("rocinante", 8, "epstein drive", true)).toStrictEqual(rocinante);
    expect(makeSpaceship("uss enterprise (ncc-1701-d)", 5, "impulse drive", true)).toStrictEqual(enterprise);
  });
});
describe("setUserName() tests", function () {
  var user1 = {
    name: "john smith",
    username: "johnnyboiii"
  };
  var user2 = {
    name: "jane doe",
    username: "killerZ"
  };
  it("Should return and object", function () {
    expect(_typeof(setUserName(user1, "XXjohnyboiXX"))).toBe("object");
  });
  it("Shouldn't change the username if one already exists", function () {
    expect(setUserName(user1, "XXjohnyboiXX").username).toBe("johnnyboiii");
    expect(setUserName(user1, "XXjohnyboiXX")).toStrictEqual(user1);
    expect(setUserName(user2, "butterflyflowerqueen").username).toBe("killerZ");
    expect(setUserName(user2, "butterflyflowerqueen")).toStrictEqual(user2);
  });
  var user3 = {
    name: "paul blart"
  };
  var user4 = {
    name: "gimli son of gloin"
  };
  it("Should change the username if none exists", function () {
    expect(setUserName(user3, "mallcop12").username).toBe("mallcop12");
    expect(setUserName(user3, "mallcop12")).toStrictEqual({
      name: "paul blart",
      username: "mallcop12"
    });
    expect(setUserName(user4, "ih8elves").username).toBe("ih8elves");
    expect(setUserName(user4, "ih8elves")).toStrictEqual({
      name: "gimli son of gloin",
      username: "ih8elves"
    });
  });
});
describe("splitFullNameToFirstAndLast() tests", function () {
  var customer1 = {
    fullName: "Barry Chuckle"
  };
  var customer2 = {
    fullName: "Paul Chuckle"
  };
  it("Should split up basic names", function () {
    expect(splitFullNameToFirstAndLast(customer1)).toStrictEqual({
      fullName: "Barry Chuckle",
      firstName: "Barry",
      lastName: "Chuckle"
    });
    expect(splitFullNameToFirstAndLast(customer2)).toStrictEqual({
      fullName: "Paul Chuckle",
      firstName: "Paul",
      lastName: "Chuckle"
    });
  });
});
xdescribe("accessGivenKey() tests", function () {
  var person = {
    name: "Joe Bloggs",
    height: 170,
    eyeColour: "blue",
    likesIceCream: false
  };
  it("Should access the eyeColour property", function () {
    expect(accessGivenKey(person, "eyeColour")).toBe("blue");
  });
  it("Should access the height property", function () {
    expect(accessGivenKey(person, "height")).toBe(170);
  });
  it("Should access the name property", function () {
    expect(accessGivenKey(person, "name")).toBe("Joe Bloggs");
  });
  it("Should access the likesIceCream property", function () {
    expect(accessGivenKey(person, "likesIceCream")).toBe(false);
  });
});
xdescribe("getUserAddress() tests", function () {
  var user1 = {
    id: 101,
    name: "Harry Potter",
    address: {
      line1: "4 Privet Drive",
      line2: "Little Whinging",
      city: "Surrey",
      postcode: "CR3 0AA"
    }
  };
  var user2 = {
    id: 102,
    name: "Paddington Bear",
    address: {
      line1: "32",
      line2: "Windsor Gardens",
      city: "London",
      postcode: "W9 3RG"
    }
  };
  it("Should be able to get the address from the user object", function () {
    expect(getUserAddress(user1)).toBe("4 Privet Drive Little Whinging Surrey CR3 0AA");
    expect(getUserAddress(user2)).toBe("32 Windsor Gardens London W9 3RG");
  });
});
xdescribe("setSafeAllergens() tests", function () {
  var allergenList = ["celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "molluscs", "mustard", "peanuts", "sesame", "soybeans", "sulphites", "tree nuts"];
  var customer1 = {
    id: 103,
    name: "Jordan Jordanson",
    allergies: []
  };
  it("Should include all allergens as safe if none present on the object allergies array", function () {
    expect(setSafeAllergens(customer1, allergenList).safeAllergens).toStrictEqual(["celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "molluscs", "mustard", "peanuts", "sesame", "soybeans", "sulphites", "tree nuts"]);
  });
  var customer2 = {
    id: 104,
    name: "Peter Peterson",
    allergies: ["celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "molluscs", "mustard", "peanuts", "sesame", "soybeans", "sulphites", "tree nuts"]
  };
  it("Should include no allergens if all are found on the customer object", function () {
    expect(setSafeAllergens(customer2, allergenList).safeAllergens).toStrictEqual([]);
  });
  var customer3 = {
    id: 105,
    name: "Mandy Manderson",
    allergies: ["eggs", "fish", "lupin", "molluscs", "mustard", "sesame", "soybeans", "sulphites"]
  };
  it("Should include some allergens if some are present on customer allergen list", function () {
    expect(setSafeAllergens(customer3, allergenList).safeAllergens).toStrictEqual(["celery", "gluten", "crustaceans", "milk", "peanuts", "tree nuts"]);
  });
});
xdescribe("mergeFurniture() tests", function () {
  var tableLocationInfo = {
    id: 101,
    location: "Bristol",
    sku: "bXpGsZC2j4"
  };
  var tableProductInfo = {
    id: 101,
    name: "lack",
    price: 6,
    isAvailable: true
  };
  var cabinetLocationInfo = {
    id: 202,
    location: "Cardiff",
    sku: "6kX83aRVdn"
  };
  var cabinetProductInfo = {
    id: 202,
    name: "bimnes",
    price: 55,
    isAvailable: false
  };
  it("Should return an object which has a combination of both keys", function () {
    var testFurniture = mergeFurniture(tableLocationInfo, tableProductInfo);
    expect(testFurniture).toHaveProperty("id");
    expect(testFurniture).toHaveProperty("location");
    expect(testFurniture).toHaveProperty("sku");
    expect(testFurniture).toHaveProperty("name");
    expect(testFurniture).toHaveProperty("price");
    expect(testFurniture).toHaveProperty("isAvailable");
  });
  it("Should not modify the original object", function () {
    var testTable = mergeFurniture(tableLocationInfo, tableProductInfo);
    expect(testTable).toBeDefined();
    expect(testTable).not.toStrictEqual(tableLocationInfo);
    expect(testTable).not.toStrictEqual(tableProductInfo);
  });
  it("Should return an object which has the exact key value pairs of both objects", function () {
    var testTable = mergeFurniture(tableLocationInfo, tableProductInfo);
    expect(testTable).toStrictEqual({
      id: 101,
      location: "Bristol",
      sku: "bXpGsZC2j4",
      name: "lack",
      price: 6,
      isAvailable: true
    });
    var testCabinet = mergeFurniture(cabinetLocationInfo, cabinetProductInfo);
    expect(testCabinet).toStrictEqual({
      id: 202,
      location: "Cardiff",
      sku: "6kX83aRVdn",
      name: "bimnes",
      price: 55,
      isAvailable: false
    });
  });
});