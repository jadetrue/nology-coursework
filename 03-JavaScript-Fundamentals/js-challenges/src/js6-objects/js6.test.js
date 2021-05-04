import * as challenge from "./challenge";

const {
  getFurniturePrice,
  setFurnitureStoreLocation,
  makeSpaceship,
  setUserName,
  splitFullNameToFirstAndLast,
  accessGivenKey,
  getUserAddress,
  setSafeAllergens,
  mergeFurniture
} = challenge;

describe("getFurniturePrice() tests", () => {
  const table = { name: "lack", price: 6 };
  const cabinet = { name: "brimnes", price: 55 };

  it("Should return the correct price", () => {
    expect(getFurniturePrice(table)).toBe(6);
    expect(getFurniturePrice(cabinet)).toBe(55);
  });
});

xdescribe("addFurnitureStorLocation() tests", () => {
  const table = { name: "lack", price: 6 };
  const cabinet = { name: "brimnes", price: 55 };

  it("Should return an object", () => {
    expect(typeof setFurnitureStoreLocation(table, "Bristol")).toBe("object");
  });

  const tableWithLocation = setFurnitureStoreLocation(table, "Bristol");
  const cabinetWithLocation = setFurnitureStoreLocation(cabinet, "Cardiff");

  it("Should add a property of location", () => {
    expect(tableWithLocation).toHaveProperty("location");
    expect(cabinetWithLocation).toHaveProperty("location");
  });

  it("Should still have all of the old properties", () => {
    expect(tableWithLocation).toHaveProperty("name");
    expect(tableWithLocation).toHaveProperty("price");
    expect(cabinetWithLocation).toHaveProperty("name");
    expect(cabinetWithLocation).toHaveProperty("price");
  });

  it("Should exactly match given object", () => {
    expect(tableWithLocation).toStrictEqual({ name: "lack", price: 6, location: "Bristol" });
    expect(cabinetWithLocation).toStrictEqual({ name: "brimnes", price: 55, location: "Cardiff" });
  });
});

xdescribe("makeSpaceship() tests", () => {
  it("Should return an object", () => {
    expect(typeof makeSpaceship("rocinante", 8, "epstein drive", true)).toBe("object");
  });

  const rocinante = { name: "rocinante", noOfSeats: 8, engineType: "epstein drive", canTravelSolarSystems: true };
  const enterprise = {
    name: "uss enterprise (ncc-1701-d)",
    noOfSeats: 5,
    engineType: "impulse drive",
    canTravelSolarSystems: true
  };
  it("Should create an object with the provided arguments as values", () => {
    expect(makeSpaceship("rocinante", 8, "epstein drive", true)).toStrictEqual(rocinante);
    expect(makeSpaceship("uss enterprise (ncc-1701-d)", 5, "impulse drive", true)).toStrictEqual(enterprise);
  });
});

xdescribe("setUserName() tests", () => {
  const user1 = { name: "john smith", username: "johnnyboiii" };
  const user2 = { name: "jane doe", username: "killerZ" };
  it("Should return and object", () => {
    expect(typeof setUserName(user1, "XXjohnyboiXX")).toBe("object");
  });

  it("Shouldn't change the username if one already exists", () => {
    expect(setUserName(user1, "XXjohnyboiXX").username).toBe("johnnyboiii");
    expect(setUserName(user1, "XXjohnyboiXX")).toStrictEqual(user1);
    expect(setUserName(user2, "butterflyflowerqueen").username).toBe("killerZ");
    expect(setUserName(user2, "butterflyflowerqueen")).toStrictEqual(user2);
  });

  const user3 = { name: "paul blart" };
  const user4 = { name: "gimli son of gloin" };
  it("Should change the username if none exists", () => {
    expect(setUserName(user3, "mallcop12").username).toBe("mallcop12");
    expect(setUserName(user3, "mallcop12")).toStrictEqual({ name: "paul blart", username: "mallcop12" });
    expect(setUserName(user4, "ih8elves").username).toBe("ih8elves");
    expect(setUserName(user4, "ih8elves")).toStrictEqual({ name: "gimli son of gloin", username: "ih8elves" });
  });
});

xdescribe("splitFullNameToFirstAndLast() tests", () => {
  const customer1 = { fullName: "Barry Chuckle" };
  const customer2 = { fullName: "Paul Chuckle" };

  it("Should split up basic names", () => {
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

xdescribe("accessGivenKey() tests", () => {
  const person = { name: "Joe Bloggs", height: 170, eyeColour: "blue", likesIceCream: false };

  it("Should access the eyeColour property", () => {
    expect(accessGivenKey(person, "eyeColour")).toBe("blue");
  });

  it("Should access the height property", () => {
    expect(accessGivenKey(person, "height")).toBe(170);
  });

  it("Should access the name property", () => {
    expect(accessGivenKey(person, "name")).toBe("Joe Bloggs");
  });

  it("Should access the likesIceCream property", () => {
    expect(accessGivenKey(person, "likesIceCream")).toBe(false);
  });
});

xdescribe("getUserAddress() tests", () => {
  const user1 = {
    id: 101,
    name: "Harry Potter",
    address: {
      line1: "4 Privet Drive",
      line2: "Little Whinging",
      city: "Surrey",
      postcode: "CR3 0AA"
    }
  };

  const user2 = {
    id: 102,
    name: "Paddington Bear",
    address: {
      line1: "32",
      line2: "Windsor Gardens",
      city: "London",
      postcode: "W9 3RG"
    }
  };

  it("Should be able to get the address from the user object", () => {
    expect(getUserAddress(user1)).toBe("4 Privet Drive Little Whinging Surrey CR3 0AA");
    expect(getUserAddress(user2)).toBe("32 Windsor Gardens London W9 3RG");
  });
});

xdescribe("setSafeAllergens() tests", () => {
  const allergenList = [
    "celery",
    "gluten",
    "crustaceans",
    "eggs",
    "fish",
    "lupin",
    "milk",
    "molluscs",
    "mustard",
    "peanuts",
    "sesame",
    "soybeans",
    "sulphites",
    "tree nuts"
  ];

  const customer1 = {
    id: 103,
    name: "Jordan Jordanson",
    allergies: []
  };

  it("Should include all allergens as safe if none present on the object allergies array", () => {
    expect(setSafeAllergens(customer1, allergenList).safeAllergens).toStrictEqual([
      "celery",
      "gluten",
      "crustaceans",
      "eggs",
      "fish",
      "lupin",
      "milk",
      "molluscs",
      "mustard",
      "peanuts",
      "sesame",
      "soybeans",
      "sulphites",
      "tree nuts"
    ]);
  });

  const customer2 = {
    id: 104,
    name: "Peter Peterson",
    allergies: [
      "celery",
      "gluten",
      "crustaceans",
      "eggs",
      "fish",
      "lupin",
      "milk",
      "molluscs",
      "mustard",
      "peanuts",
      "sesame",
      "soybeans",
      "sulphites",
      "tree nuts"
    ]
  };

  it("Should include no allergens if all are found on the customer object", () => {
    expect(setSafeAllergens(customer2, allergenList).safeAllergens).toStrictEqual([]);
  });

  const customer3 = {
    id: 105,
    name: "Mandy Manderson",
    allergies: ["eggs", "fish", "lupin", "molluscs", "mustard", "sesame", "soybeans", "sulphites"]
  };

  it("Should include some allergens if some are present on customer allergen list", () => {
    expect(setSafeAllergens(customer3, allergenList).safeAllergens).toStrictEqual([
      "celery",
      "gluten",
      "crustaceans",
      "milk",
      "peanuts",
      "tree nuts"
    ]);
  });
});

xdescribe("mergeFurniture() tests", () => {
  const tableLocationInfo = { id: 101, location: "Bristol", sku: "bXpGsZC2j4" };
  const tableProductInfo = { id: 101, name: "lack", price: 6, isAvailable: true };

  const cabinetLocationInfo = { id: 202, location: "Cardiff", sku: "6kX83aRVdn" };
  const cabinetProductInfo = { id: 202, name: "bimnes", price: 55, isAvailable: false };

  it("Should return an object which has a combination of both keys", () => {
    const testFurniture = mergeFurniture(tableLocationInfo, tableProductInfo);

    expect(testFurniture).toHaveProperty("id");
    expect(testFurniture).toHaveProperty("location");
    expect(testFurniture).toHaveProperty("sku");
    expect(testFurniture).toHaveProperty("name");
    expect(testFurniture).toHaveProperty("price");
    expect(testFurniture).toHaveProperty("isAvailable");
  });

  it("Should not modify the original object", () => {
    const testTable = mergeFurniture(tableLocationInfo, tableProductInfo);
    expect(testTable).toBeDefined();
    expect(testTable).not.toStrictEqual(tableLocationInfo);
    expect(testTable).not.toStrictEqual(tableProductInfo);
  });

  it("Should return an object which has the exact key value pairs of both objects", () => {
    const testTable = mergeFurniture(tableLocationInfo, tableProductInfo);
    expect(testTable).toStrictEqual({
      id: 101,
      location: "Bristol",
      sku: "bXpGsZC2j4",
      name: "lack",
      price: 6,
      isAvailable: true
    });

    const testCabinet = mergeFurniture(cabinetLocationInfo, cabinetProductInfo);
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
