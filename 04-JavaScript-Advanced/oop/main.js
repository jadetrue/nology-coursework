// CREATING A NEW CLASS
class Person {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getSummary() {
        `ID:${this.id} NAME:${this.name} EMAIL:${this.email}`;
    }
}

const personOne = new Person(123, "Jade", "jadetruexo@gmail.com");

console.log(personOne.getSummary());

// EXTENDING A CLASS

class PersonWithPasscode extends Person {
    constructor(id, name, email, passcode) {
        super(id, name, email);
        this.passcode = passcode;
    }
}

const personTwo = new PersonWithPasscode(
    124,
    "Paul",
    "paul.a.wilkinson2@btineternet.com",
    "9999"
);

console.log(personTwo.getSummary());
