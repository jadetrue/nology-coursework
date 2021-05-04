/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* To see the structure of the "api's" please have a look in mockPeopleApi.json and mockInterestApi.json */

/* Foundation Challenges */

/**
 * A function which takes a url and returns the JSONified response
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[]} The data from the API
 */
export const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

/**
 * A function which calls the API from the provided URL and returns just the list of names from each object.
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {string[]} The list of names from the API
 */
export const getNames = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((item) => item.name));
};

/**
 * A function which calls the API from the provided URL but only returns the employed people from the API.
 *
 * @param {string} url - The url of the API to fetch from
 * @return {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[]} The employed people from the API
 */
export const getEmployedPeople = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((people) => people.filter((person) => person.isEmployed));
};

/* Intermediate Challenges */

/**
 * A function which takes a url and an ID. It will fetch from an API at the url and return a single person object with
 * a matching ID. If no person with that ID exists, instead return a string saying "Person not found".
 *
 * @param {string} url - The url of the API to fetch from
 * @param {string} id - The ID of the person object to return
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean} | string} A person object OR A string saying "Person not found"
 */
export const findPersonWithId = (url, id) => {
  return fetch(url)
    .then((response) => response.json())
    .then((people) => {
      const foundPerson = people.find((person) => person.id === id);
      return foundPerson ? foundPerson : "Person not found";
    });
};

/**
 * A function which takes a url and an interest. It will fetch from an API at the url and return people who have a
 * matching interest.
 *
 * @param {string} url - The url of the API to fetch from
 * @param {string} interest - The interest to match
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[] | string} A group of person objects OR A string saying "No people with interest found"
 */
export const getPeopleWithMatchingInterests = (url, interest) => {
  return fetch(url)
    .then((response) => response.json())
    .then((people) => {
      const peopleWithMatchingInterests = people.filter((person) => {
        return person.interests.includes(interest);
      });

      return peopleWithMatchingInterests.length ? peopleWithMatchingInterests : "No people with interest found";
    });
};

/* Advanced Challenges */

/**
 * A function which calls an API from the provided url and adds a description key to each person object.
 * The description should have the following format:
 * "My name is Joanna, I am 78 years old and 140cm tall. I enjoy knitting, baking and MMA. I am not currently employed"
 * So the full object would look like:
 * {
 *   id: "003",
 *   name: "Joanna",
 *   age: 78,
 *   height: 140,
 *   interests: ["knitting", "baking", "MMA"],
 *   isEmployed: false,
 *   description: "My name is Joanna, I am 78 years old and 140cm tall. I enjoy knitting, baking, and MMA. I am not currently employed"
 * }
 *
 * OR
 *
 * {
 *   id: "005",
 *   name: "Travis"
 *   age: 22,
 *   height: 160,
 *   interests: ["swimming", "watching TV", "knitting"],
 *   isEmployed: true,
 *   description: "My name is Travis, I am 22 years old and 160cm tall. I enjoy swimming, watching TV and knitting. I am currently employed",
 * }
 *
 * This should NOT modify the original data
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean, decscription: string}[]} A group of person objects with added description key
 */
export const setDescriptions = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((people) => {
      const peopleWithDescriptions = people.map((person) => {
        const newPerson = { ...person };
        const interests = newPerson.interests.reduce((previous, current, index, arr) => {
          if (index === arr.length - 1) {
            return previous + ` and ${current}`;
          }

          if (index === 0) {
            return previous + current;
          }

          return previous + `, ${current}`;
        }, "");

        const description = `My name is ${newPerson.name}, I am ${newPerson.age} years old and ${
          newPerson.height
        }cm tall. I enjoy ${interests}. ${
          newPerson.isEmployed ? "I am currently employed" : "I am not currently employed"
        }`;

        newPerson.description = description;
        return newPerson;
      });

      return peopleWithDescriptions;
    });
};

/* Expert Challenges */

/**
 * A function that uses 2 API's to fill information about the interests of each person.
 * Each person object that's returned should have this structure:
 * {
 *   id: "003",
 *   name: "Joanna",
 *   age: 78,
 *   height: 140,
 *   interests: [
 *     {
 *       interest: "knitting",
 *       costPerAnnum: 400,
 *       sizeOfCommunity: 10000000,
 *       isDoneInGroups: false
 *     },
 *     {
 *       interest: "baking",
 *       costPerAnnum: 400,
 *       sizeOfCommunity: 20000000,
 *       isDoneInGroups: false
 *     },
 *     {
 *       interest: "MMA",
 *       costPerAnnum: 1000,
 *       sizeOfCommunity: 20000000,
 *       isDoneInGroups: true
 *     }
 *   ],
 *   isEmployed: false
 * };
 *
 * This should NOT modify the original data
 *
 * @param {string} peopleUrl - The url of the people api
 * @param {string} interestUrl - The url of the interest api
 * @returns {{
 *  id: string,
 *  name: string,
 *  age: number,
 *  height: number,
 *  interests: {interest: string, costPerAnnum: number, sizeOfCommunity: number, isDoneInGroups: boolean}[],
 *  isEmployed: boolean,
 * }[]}
 */
export const setInterestDetails = (peopleUrl, interestsUrl) => {
  return fetch(peopleUrl)
    .then((response) => response.json())
    .then((people) => {
      return fetch(interestsUrl)
        .then((response) => response.json())
        .then((interests) => {
          const peopleWithComplexInterets = people.map((person) => {
            const newPerson = { ...person };

            const newInterests = newPerson.interests.map((personsInterest) => {
              return interests.find((interest) => interest.interest === personsInterest);
            });

            newPerson.interests = newInterests;
            return newPerson;
          });

          return peopleWithComplexInterets;
        });
    });
};
