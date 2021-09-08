// document.querySelector('.btn').addEventListener('click', () => {
//     const input = document.querySelector('.input').value;

//     if (input === 'Hello') {
//         document.querySelector('.result').innerHTML = 'Bonjur';
//     } else if (input === 'Goodbye') {
//         document.querySelector('.result').innerHTML = 'Au Revoir';
//     } else {
//         document.querySelector('.result').innerHTML = 'Word not recognised';
//     }
// });

// Purified code :

const translator = (input) => {
    if (input === 'Hello') {
        return 'Bonjur';
    }
    if (input === 'Goodbye') {
        return 'Au Revior';
    } else return 'Word not recognised';
};

const btn = document.querySelector('.btn').addEventListener('click', () => {
    const value = document.querySelector('.input').value;
    const result = (document.querySelector('.result').innerHTML =
        translator(value));
});

// Challenge:
const aDate = new Date('02/16/2021');

const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
    const fullName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();
    console.log(fullName);

    const bday = new Date(birthday);
    const diff = aDate.getTime() - bday.getTime();

    let ms = 1000 * 3600 * 24;

    const result = diff / ms;
    console.log(result);

    let myArray = [];
    arrayName.forEach((item) => {
        if (item.includes('Tech')) {
            return myArray.push(item);
        } else {
            console.log('nope not tech');
        }
    });
};

const test = doesLotsOfThings('matt', 'Bickell', '09/26/1993', [
    'Tech is booming',
    'Covid 19 yada yada yada',
    'Economy due for a resurgance!',
    'You can retrain in tech too!',
]);

// MY CODE

const person = {
    firstName: 'Matt',
    surname: 'Bickell',
    birthday: '09/26/1993',
    quotes: [
        'Tech is booming',
        'Covid 19 yada yada yada',
        'Economy due for a resurgance!',
        'You can retrain in tech too!',
    ],
};

const makeFullName = () => {
    return person.firstName.toUpperCase() + ' ' + person.surname.toUpperCase();
};

const findDaysSinceBirthday = () => {
    const birthday = new Date(person.birthday);
    const sinceBirth = new Date('02/16/2021');

    const daysSince = birthday.getTime() - sinceBirth.getTime();

    let ms = 1000 * 3600 * 24;

    return daysSince / ms;
};

const findQuotesWithTech = () => {
    let techQuoteArray = [];
    person.quotes.forEach((quote) => {
        if (quote.includes('Tech')) {
            return techQuoteArray.push(quote);
        } else {
            console.log('nope not tech');
        }
    });

    return techQuoteArray;
};

console.log('---------------------------------');

console.log(makeFullName());
console.log(findDaysSinceBirthday());
console.log(findQuotesWithTech());
