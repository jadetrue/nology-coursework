// EMPLOYEE PROMOTION CHALLENGE

class Employee {
    constructor(name, rating, grade, nextGrade) {
        this.name = name;
        this.rating = rating;
        this.grade = grade;
        this.nextGrade = nextGrade;
    }

    handlePromotion() {
        if (this.rating > 7)
            return `${this.name}, you are likely to be promoted to the next grade, being ${this.nextGrade}`;
        if (this.rating < 7)
            return `Unfortunately, ${this.name}, youve not got a high enough rating`;
    }
}

const employeeOne = new Employee("Jade", 2, "Junior Developer", "Developer");
const employeeTwo = new Employee(
    "Paul",
    8,
    "Operations Manager",
    "Senior Operations Manager"
);

console.log(employeeOne.handlePromotion());
console.log(employeeTwo.handlePromotion());

// CAR CHALLENGE - RECENTLY DONE VIA A DIFF COURSE

// https://github.com/jadetruexo/the-complete-javascript-course/blob/main/s14-oop/challenge.js
