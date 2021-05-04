import * as challenge from "./challenge";
import people from "./mockPersonApi.json";

const {
  getData,
  getNames,
  getEmployedPeople,
  findPersonWithId,
  getPeopleWithMatchingInterests,
  setDescriptions,
  setInterestDetails
} = challenge;

beforeEach(() => {
  const mockFetch = jest.fn().mockImplementation((args) =>
    Promise.resolve({
      json: () => require(args)
    })
  );

  window.fetch = mockFetch;
});

describe("getData() tests", () => {
  it("Fetch should have been called once", () => {
    getData("./mockPersonApi.json");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Should return the data", async () => {
    const data = await getData("./mockPersonApi.json");
    expect(data).toStrictEqual(people);
  });
});

describe("getNames() tests", () => {
  it("Fetch should have been called once", () => {
    getNames("./mockPersonApi.json");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Should return an array of names", async () => {
    const namesArr = await getNames("./mockPersonApi.json");
    expect(Array.isArray(namesArr)).toBe(true);
    expect(namesArr).toStrictEqual(["Peter", "Georgia", "Joanna", "Buzz", "Travis", "Paula", "J"]);
  });
});

describe("getEmployedPeople() tests", () => {
  const mockApiResponse = [
    {
      id: "001",
      name: "Peter",
      age: 47,
      height: 170,
      interests: ["swimming", "reading", "juggling"],
      isEmployed: true
    },
    {
      id: "004",
      name: "Buzz",
      age: 32,
      height: 190,
      interests: ["shooting", "MMA", "writing"],
      isEmployed: true
    },
    {
      id: "005",
      name: "Travis",
      age: 22,
      height: 160,
      interests: ["swimming", "watching TV", "knitting"],
      isEmployed: true
    }
  ];

  it("Fetch should have been called once", () => {
    getEmployedPeople("./mockPersonApi.json");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Should return an array of employed people objects", async () => {
    const employedPeopleArr = await getEmployedPeople("./mockPersonApi.json");

    expect(Array.isArray(employedPeopleArr)).toBe(true);
    expect(employedPeopleArr.length).toBe(3);
    expect(employedPeopleArr).toStrictEqual(mockApiResponse);
  });
});

describe("findPersonWithId() tests", () => {
  const dummyId001 = {
    id: "001",
    name: "Peter",
    age: 47,
    height: 170,
    interests: ["swimming", "reading", "juggling"],
    isEmployed: true
  };

  const dummyId005 = {
    id: "005",
    name: "Travis",
    age: 22,
    height: 160,
    interests: ["swimming", "watching TV", "knitting"],
    isEmployed: true
  };

  it("Should return a single object", async () => {
    const returnFromFunction = await findPersonWithId("./mockPersonApi.json", "001");
    expect(typeof returnFromFunction).toBe("object");
    expect(returnFromFunction).toHaveProperty("id");
  });

  it("Should return a person with the id of 001", async () => {
    const personId001 = await findPersonWithId("./mockPersonApi.json", "001");
    expect(personId001).toStrictEqual(dummyId001);
  });

  it("Should return a person with the id of 005", async () => {
    const personId005 = await findPersonWithId("./mockPersonApi.json", "005");
    expect(personId005).toStrictEqual(dummyId005);
  });

  it("Should return a message of 'Person not found' when no person has a matching ID", async () => {
    const notFound = await findPersonWithId("./mockPersonApi.json", "020");
    expect(notFound).toBe("Person not found");
  });
});

describe("getPeopleWithMatchingInterests() tests", () => {
  const dummySwimming = [
    {
      id: "001",
      name: "Peter",
      age: 47,
      height: 170,
      interests: ["swimming", "reading", "juggling"],
      isEmployed: true
    },
    {
      id: "005",
      name: "Travis",
      age: 22,
      height: 160,
      interests: ["swimming", "watching TV", "knitting"],
      isEmployed: true
    }
  ];

  const dummyMma = [
    {
      id: "003",
      name: "Joanna",
      age: 78,
      height: 140,
      interests: ["knitting", "baking", "MMA"],
      isEmployed: false
    },
    {
      id: "004",
      name: "Buzz",
      age: 32,
      height: 190,
      interests: ["shooting", "MMA", "writing"],
      isEmployed: true
    }
  ];

  it("Should return an array if interests are found", async () => {
    const swimmingInterest = await getPeopleWithMatchingInterests("./mockPersonApi.json", "swimming");
    expect(Array.isArray(swimmingInterest)).toBe(true);
  });

  it("Should return all people with a matching interest (swimming)", async () => {
    const swimmingInterest = await getPeopleWithMatchingInterests("./mockPersonApi.json", "swimming");
    expect(swimmingInterest).toStrictEqual(dummySwimming);
  });

  it("Should return all people with a matching interest (mma)", async () => {
    const mmaInterests = await getPeopleWithMatchingInterests("./mockPersonApi.json", "MMA");
    expect(mmaInterests).toStrictEqual(dummyMma);
  });

  it("Should return 'No people with interest found' if no matching interests on people", async () => {
    const noInterests = await getPeopleWithMatchingInterests("./mockPersonApi.json", "whittling");
    expect(noInterests).toBe("No people with interest found");
  });
});

describe("setDescription() tests", () => {
  const dummyDescriptions = [
    {
      age: 47,
      description:
        "My name is Peter, I am 47 years old and 170cm tall. I enjoy swimming, reading and juggling. I am currently employed",
      height: 170,
      id: "001",
      interests: ["swimming", "reading", "juggling"],
      isEmployed: true,
      name: "Peter"
    },
    {
      age: 16,
      description:
        "My name is Georgia, I am 16 years old and 130cm tall. I enjoy writing, hiking and watching TV. I am not currently employed",
      height: 130,
      id: "002",
      interests: ["writing", "hiking", "watching TV"],
      isEmployed: false,
      name: "Georgia"
    },
    {
      age: 78,
      description:
        "My name is Joanna, I am 78 years old and 140cm tall. I enjoy knitting, baking and MMA. I am not currently employed",
      height: 140,
      id: "003",
      interests: ["knitting", "baking", "MMA"],
      isEmployed: false,
      name: "Joanna"
    },
    {
      age: 32,
      description:
        "My name is Buzz, I am 32 years old and 190cm tall. I enjoy shooting, MMA and writing. I am currently employed",
      height: 190,
      id: "004",
      interests: ["shooting", "MMA", "writing"],
      isEmployed: true,
      name: "Buzz"
    },
    {
      age: 22,
      description:
        "My name is Travis, I am 22 years old and 160cm tall. I enjoy swimming, watching TV and knitting. I am currently employed",
      height: 160,
      id: "005",
      interests: ["swimming", "watching TV", "knitting"],
      isEmployed: true,
      name: "Travis"
    },
    {
      age: 27,
      description:
        "My name is Paula, I am 27 years old and 160cm tall. I enjoy baking, hiking and shooting. I am not currently employed",
      height: 160,
      id: "006",
      interests: ["baking", "hiking", "shooting"],
      isEmployed: false,
      name: "Paula"
    },
    {
      age: 50,
      description:
        "My name is J, I am 50 years old and 150cm tall. I enjoy reading, juggling and knitting. I am not currently employed",
      height: 150,
      id: "007",
      interests: ["reading", "juggling", "knitting"],
      isEmployed: false,
      name: "J"
    }
  ];

  it("Should not modify original data", async () => {
    const peopleWithDescriptions = await setDescriptions("./mockPersonApi.json");
    expect(peopleWithDescriptions).not.toStrictEqual(people);
  });

  it("Should add a description key", async () => {
    const peopleWithDescriptions = await setDescriptions("./mockPersonApi.json");
    expect(peopleWithDescriptions[0]).toHaveProperty("description");
  });

  it("Should add accurate description to each object", async () => {
    const peopleWthDescriptions = await setDescriptions("./mockPersonApi.json");
    expect(peopleWthDescriptions).toStrictEqual(dummyDescriptions);
  });
});

describe("setInterestDetails() tests", () => {
  const dummyDetailedInterests = [
    {
      age: 47,
      height: 170,
      id: "001",
      interests: [
        {
          costPerAnnum: 800,
          interest: "swimming",
          isDoneInGroups: false,
          sizeOfCommunity: 20000000
        },
        {
          costPerAnnum: 500,
          interest: "reading",
          isDoneInGroups: false,
          sizeOfCommunity: 30000000
        },
        {
          costPerAnnum: 100,
          interest: "juggling",
          isDoneInGroups: false,
          sizeOfCommunity: 1000000
        }
      ],
      isEmployed: true,
      name: "Peter"
    },
    {
      age: 16,
      height: 130,
      id: "002",
      interests: [
        {
          costPerAnnum: 200,
          interest: "writing",
          isDoneInGroups: false,
          sizeOfCommunity: 15000000
        },
        {
          costPerAnnum: 1000,
          interest: "hiking",
          isDoneInGroups: true,
          sizeOfCommunity: 25000000
        },
        {
          costPerAnnum: 200,
          interest: "watching TV",
          isDoneInGroups: true,
          sizeOfCommunity: 450000000
        }
      ],
      isEmployed: false,
      name: "Georgia"
    },
    {
      age: 78,
      height: 140,
      id: "003",
      interests: [
        {
          costPerAnnum: 400,
          interest: "knitting",
          isDoneInGroups: false,
          sizeOfCommunity: 10000000
        },
        {
          costPerAnnum: 400,
          interest: "baking",
          isDoneInGroups: false,
          sizeOfCommunity: 20000000
        },
        {
          costPerAnnum: 1000,
          interest: "MMA",
          isDoneInGroups: true,
          sizeOfCommunity: 20000000
        }
      ],
      isEmployed: false,
      name: "Joanna"
    },
    {
      age: 32,
      height: 190,
      id: "004",
      interests: [
        {
          costPerAnnum: 10000,
          interest: "shooting",
          isDoneInGroups: true,
          sizeOfCommunity: 5000000
        },
        {
          costPerAnnum: 1000,
          interest: "MMA",
          isDoneInGroups: true,
          sizeOfCommunity: 20000000
        },
        {
          costPerAnnum: 200,
          interest: "writing",
          isDoneInGroups: false,
          sizeOfCommunity: 15000000
        }
      ],
      isEmployed: true,
      name: "Buzz"
    },
    {
      age: 22,
      height: 160,
      id: "005",
      interests: [
        {
          costPerAnnum: 800,
          interest: "swimming",
          isDoneInGroups: false,
          sizeOfCommunity: 20000000
        },
        {
          costPerAnnum: 200,
          interest: "watching TV",
          isDoneInGroups: true,
          sizeOfCommunity: 450000000
        },
        {
          costPerAnnum: 400,
          interest: "knitting",
          isDoneInGroups: false,
          sizeOfCommunity: 10000000
        }
      ],
      isEmployed: true,
      name: "Travis"
    },
    {
      age: 27,
      height: 160,
      id: "006",
      interests: [
        {
          costPerAnnum: 400,
          interest: "baking",
          isDoneInGroups: false,
          sizeOfCommunity: 20000000
        },
        {
          costPerAnnum: 1000,
          interest: "hiking",
          isDoneInGroups: true,
          sizeOfCommunity: 25000000
        },
        {
          costPerAnnum: 10000,
          interest: "shooting",
          isDoneInGroups: true,
          sizeOfCommunity: 5000000
        }
      ],
      isEmployed: false,
      name: "Paula"
    },
    {
      age: 50,
      height: 150,
      id: "007",
      interests: [
        {
          costPerAnnum: 500,
          interest: "reading",
          isDoneInGroups: false,
          sizeOfCommunity: 30000000
        },
        {
          costPerAnnum: 100,
          interest: "juggling",
          isDoneInGroups: false,
          sizeOfCommunity: 1000000
        },
        {
          costPerAnnum: 400,
          interest: "knitting",
          isDoneInGroups: false,
          sizeOfCommunity: 10000000
        }
      ],
      isEmployed: false,
      name: "J"
    }
  ];

  it("should call fetch twice", async () => {
    await setInterestDetails("./mockPersonApi.json", "./mockInterestsApi.json");
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("Should not modify original data", async () => {
    const detailedInterestsResponse = await setInterestDetails("./mockPersonApi.json", "./mockInterestsApi.json");
    expect(detailedInterestsResponse).not.toStrictEqual(people);
  });

  it("Should turn the interests key into an array of objects", async () => {
    const detailedInterestsResponse = await setInterestDetails("./mockPersonApi.json", "./mockInterestsApi.json");
    expect(Array.isArray(detailedInterestsResponse[0].interests)).toBe(true);
    expect(detailedInterestsResponse[0].interests[0]).toHaveProperty("costPerAnnum");
    expect(detailedInterestsResponse[0].interests[0]).toHaveProperty("interest");
    expect(detailedInterestsResponse[0].interests[0]).toHaveProperty("isDoneInGroups");
    expect(detailedInterestsResponse[0].interests[0]).toHaveProperty("sizeOfCommunity");
  });

  it("Should match the exact dummy array of objects", async () => {
    const detailedInterestsResponse = await setInterestDetails("./mockPersonApi.json", "./mockInterestsApi.json");
    expect(detailedInterestsResponse).toStrictEqual(dummyDetailedInterests);
  });
});
