const studentContainer = document.querySelector(".students-container");

const profile = {
    firstName: "Jade",
    surname: "True",
    birthYear: 1998,
    quote: "There's no reward in life without risk.",
    skills: ["HTML5", "CSS3", "JavaScript"],
    imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    getFullName() {
        return `${this.firstName} ${this.surname}`
    },
    getUserSkills() {
        const skillsList = this.skills.map(skill => `<li>${skill}</li>`);
        console.log(skillsList)
        return skillsList.join("\n");
    },
    getProfileCard() {
        const profileHTML = `
    <article class="student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getUserSkills()}</ul>
    </article>
    `
    return profileHTML;
    }
}

for(let index = 0; index < 4; index++) {
    studentContainer.innerHTML += `${profile.getProfileCard()}`;
}

class ExampleClass {
    constructor(firstName, lastName, age) {
        (this.firstName = firstName), (this.lastName = lastName), (this.age = age)
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}.`
    }
}

const exampleOne = new ExampleClass("Jade", "True", "23");
const exampleTwo = new ExampleClass("Paul", "Wilkinson", "34");

console.log(exampleOne.greet(), exampleTwo.greet());