// const profile = {
//     firstName: "Jade",
//     surname: "True",
//     birthYear: 1998,
//     quote: "There's no reward in life without risk.",
//     skills: ["HTML5", "CSS3", "JavaScript"],
//     imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
//     getFullName() {
//         return `${this.firstName} ${this.surname}`
//     },
//     getUserSkills() {
//         const skillsList = this.skills.map(skill => `<li>${skill}</li>`);
//         console.log(skillsList)
//         return skillsList.join("\n");
//     },
//     getProfileCard() {
//         const profileHTML = `
//     <article class="student-card">
//         <img src=${this.imgURL} />
//         <h2>${this.getFullName()}</h2>
//         <blockquote>${this.quote}</blockquote>
//         <h3>Skills</h3>
//         <ul>${this.getUserSkills()}</ul>
//     </article>
//     `
//     return profileHTML;
//     }
// }

// for(let index = 0; index < 12; index++) {
//     studentContainer.innerHTML += `${profile.getProfileCard()}`;
// }

// class ExampleClass {
//     constructor(firstName, lastName, age) {
//         (this.firstName = firstName), (this.lastName = lastName), (this.age = age)
//     }

//     greet() {
//         return `Hello ${this.firstName} ${this.lastName}.`
//     }
// }

// Class inheritance

// class ExtendedClass extends ExampleClass {
//   constructor(firstName, lastName, age, subject) {
//     super(firstName, lastName, age),
//     (this.subject = subject);
// } 
// }

// const exampleOne = new ExampleClass("Jade", "True", "23");
// const exampleTwo = new ExampleClass("Paul", "Wilkinson", "34");

// console.log(exampleOne.greet(), exampleTwo.greet());

class Profile { 
    constructor(
        firstName,
        surname,
        quote,
        skills,
        imgURL
    ) {
        (this.firstName = firstName),
        (this.surname = surname),
        (this.quote = quote),
        (this.skills = skills),
        (this.imgURL = imgURL)
    }

    getFullName() {
        return `${this.firstName} ${this.surname}`
    }

    getUserSkills() {
        const skillsList = this.skills.map(skill => `<li>${skill}</li>`);
        console.log(skillsList)
        return skillsList.join("\n");
    }

    getProfileCard() {
        const profileHTML = `
    <article class="student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getUserSkills()}</ul>
    </article>
    `;
    return profileHTML;
    }
}

class ProfileExtended extends Profile {
    constructor(firstName, surname, quote, skills, imgURL, newProperty) {
        super(firstName, surname, quote, skills, imgURL),
        this.newProperty = newProperty;
        }

        getProfileCard() {
            const profileHTML = `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2>${this.getFullName()}</h2>
            <blockquote>${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul>${this.getUserSkills()}</ul>
            <p>${this.newProperty}</p>
        </article>
        `;
        return profileHTML;
        }
}

const studentContainer = document.querySelector(".students-container");

const jade = new ProfileExtended("Jade", "True", "There's no reward in life without risk.", ["HTML5", "CSS3", "JavaScript"], "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png", "anything");

studentContainer.innerHTML += jade.getProfileCard();