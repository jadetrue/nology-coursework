/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  const employeeQuotes = employeeArr.map((employee) => {
    return employee.quote;
  });

  return employeeQuotes;
};

/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  const managerArr = employeeArr.filter((employee) => {
    return employee.isManagement;
  });

  return managerArr;
};

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object) => {
  const keys = Object.keys(object);
  const numberOfKeys = keys.length;

  return numberOfKeys;
};

/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
export const findMostExpensiveItem = (shoppingBasketArr) => {
  const sortedArray = shoppingBasketArr.sort((a, b) => b.price - a.price);

  return sortedArray[0];
};

/**
 * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const settotalPrice = (shoppingBasketArr) => {
  const shoppingBasketWithTotals = shoppingBasketArr.map((item) => {
    const newItem = { ...item };
    const totalPrice = newItem.price * newItem.quantity;
    newItem.totalPrice = totalPrice;
    return newItem;
  });

  return shoppingBasketWithTotals;
};

/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr) => {
  const total = shoppingBasketArr.reduce((previous, current) => {
    return (previous += current.totalPrice);
  }, 0);

  return total;
};

/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr) => {
  const cleanedMealArr = mealsArr.map((meal) => {
    const newMeal = { id: meal.id, name: meal.name, ingredients: meal.ingredients, country: meal.country };
    return newMeal;
  });

  return cleanedMealArr;
};

/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr) => {
  const cleanedMealsArr = mealsArr.map((meal) => {
    const newMeal = { ...meal };
    if (!newMeal.hasOwnProperty("isVegetarian")) {
      newMeal.isVegetarian = false;
    }

    if (!newMeal.hasOwnProperty("timeToCook")) {
      newMeal.timeToCook = 15;
    }

    return newMeal;
  });

  return cleanedMealsArr;
};

/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData) => {
  const cleanCocktailData = cocktailData.map((cocktail) => {
    const cleanCocktail = {};
    cleanCocktail.id = cocktail.idDrink;
    cleanCocktail.drink = cocktail.strDrink;
    cleanCocktail.category = cocktail.strCategory;
    cleanCocktail.alcoholic = cocktail.strAlcoholic;
    cleanCocktail.instructions = cocktail.strInstructions;
    cleanCocktail.ingredients = [];

    for (const key in cocktail) {
      const element = cocktail[key];
      if (key.includes("strIngredient") && element) {
        cleanCocktail.ingredients.push(element);
      }
    }

    return cleanCocktail;
  });

  return cleanCocktailData;
};
