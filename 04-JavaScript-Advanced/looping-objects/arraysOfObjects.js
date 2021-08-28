// const fruitObjectArray = [
//     {fruit: 'apple'},
//     {fruit: 'banana'},
//     {fruit: 'orange'},
// ];

// console.log(fruitObjectArray[1].fruit);

// const fruitValue = fruitObjectArray.map((fruitObject) => {
//     const value = fruitObject.fruit;

//     return value;
// });

// console.log(fruitValue);

// const searchTerm = 'apple';

// const allTermsWithApple = fruitObjectArray.filter((term) => {
//     const fruitMatch = term.fruit.includes(searchTerm);
//     return fruitMatch;
// });

// console.log(allTermsWithApple);

// const newFruit = function (fruitObjectArray) {
//     const fruitValue = fruitObjectArray.map((fruitObject) => {
//         return `<li>${fruitObject.fruit}</li>`;
//     });

//     return fruitValue.join('');
// };

// console.log(newFruit(fruitObjectArray));

const fruitObjectArray = [
    {fruit: 'apple', rating: 10, price: 150},
    {fruit: 'banana', rating: 6, price: 130},
    {fruit: 'orange', rating: 9, price: 120},
];

console.log(fruitObjectArray[2].price);

const newFruit = function (fruitObjectArray) {
    const fruitValue = fruitObjectArray.map((fruitObject) => {
        const price = (fruitObject.price / 100).toFixed(2);

        const capital =
            fruitObject.fruit.charAt(0).toUpperCase() +
            fruitObject.fruit.slice(1);

        const cardHTML = `
        <div>
        <h3>${capital}</h3>
        <p>This fruit is ${fruitObject.rating} out of 10.</p>
        <p>Buy now for £${price}</p>
        </div>`;

        return cardHTML;
    });

    return fruitValue.join('');
};

const sorted = fruitObjectArray.sort((a, b) => {
    return b.rating - a.rating;
});

console.log(newFruit(sorted));
