const calculatePerimeter = (width, height) => {
    return width + width + height + height;
}

console.log(calculatePerimeter(1,1));

const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;
    console.log(area)
}

calculateArea(2);

//const calculatePerimeter = (radius) => {
//    return 2 * Math.PI * radius;
//}


// Second Lesson

const getDescription = (amountOfChildren, partnerName, location, jobTitle) => {

    const message = `I am currently a ${jobTitle} living in ${location}, and in a relationship with ${partnerName} with ${amountOfChildren} children.`;

    console.log(message);
}

getDescription(0, "Paul", "Clevedon", "Client Services Technial Assistant")

// next mini challenge 

const calculateSupply = (age, amountOfSnickers) => {
    const maxAge = 80;
    const totalSnickers = (amountOfSnickers * 365) * (maxAge - age);
    const messageSnickers = `You  will need ${totalSnickers} to last you until the ripe old age of ${maxAge}`;
    console.log(messageSnickers);
}

calculateSupply(23, 1);
calculateSupply(34, 2);

const calculateCelsiusToFahrenheit = (celsius) => {
    const celsiusInFahrenheit = (celsius * 9) / 5 + 32;

    console.log(celsius + '℃ is ' + celsiusInFahrenheit + '℉');
}

calculateCelsiusToFahrenheit(24);

const calculateDogAge = (age) => {
    const dogHumanAge = age * 7;

    console.log('Your dog is ' + dogHumanAge + 'years old in human years');
}

calculateDogAge(1);