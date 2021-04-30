
// Retirement Calculator 

function calculate(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge;
    alert(yearsLeft);
}

// English to French Calculator

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
        alert("bonjour");
    } else if (greeting == "Goodbye") {
        alert("Au revoir");
    } else {
        alert("Word not recognised");
    }
}