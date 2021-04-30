console.log("Hello");

const coachName = 'Andy';

if (coachName == "Andy") {
    console.log("It's a coach");
}

const greeting = "bonjouro";
if (greeting == "bonjour") {
    console.log("comment ca va");
} else {
    console.log("boo");
}

const score = 10;
if (score == "10") {
    console.log("You won the game");
}

let age = 65;
if (age >= 65) {
   console.log("Time to retire");
}

const hasCovid = false;
const isolating = true; 
if (hasCovid || isolating) {
    console.log("Keep isolating");
} else {
    console.log("Keep social distancing");
}

const isBritish = true;
age = 18;

if (age > 17 && isBritish) {
    console.log("You can vote in the next election");
}

age = 45; 
if (age < 30) {
    console.log("You cant get vaccinated yet");
} else {
    console.log("You will be invited for you next vaccination soon")
}