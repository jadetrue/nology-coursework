const fruitObjectArray = [
    {fruit: 'apple'},
    {fruit: 'banana'},
    {fruit: 'orange'},
];

console.log(fruitObjectArray[1].fruit);

const fruitValue = fruitObjectArray.map((fruitObject) => {
    const value = fruitObject.fruit;

    return value;
});

console.log(fruitValue);

const searchTerm = 'apple';

const allTermsWithApple = fruitObjectArray.filter((term) => {
    const fruitMatch = term.fruit.includes(searchTerm);
    return fruitMatch;
});

console.log(allTermsWithApple);

const newFruit = function (fruitObjectArray) {
    const fruitValue = fruitObjectArray.map((fruitObject) => {
        return `<li>${fruitObject.fruit}</li>`;
    });

    return fruitValue.join('');
};

console.log(newFruit(fruitObjectArray));
