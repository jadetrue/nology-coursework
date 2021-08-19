const message = {
    userName: 'Jade',
    content: 'This is random content',
};

// for (let key in message) {
//     console.log(key);
//     console.log(message[key]);
// }

const loopFunction = function (messageObject) {
    for (let key in messageObject) {
        const typeCheck = typeof messageObject[key] !== 'string';

        if (typeCheck) {
            return true;
        }
        return false;
    }
};
console.log(loopFunction(message));

const validMessageValues = Object.values(message);
console.log(validMessageValues);

// Array iterator

console.log(
    validMessageValues.every((validMessage) => {
        const typeCheck = typeof validMessage === 'string';

        return typeCheck;
    })
);

const validObject = function (correctObject) {
    const checkObjectType = Object.keys(correctObject);

    const correct1 = checkObjectType.every((key) => {
        const correct = ['userName', 'content'];
        return correct.includes(key);
    });
    return correct1;
};

console.log(validObject(message));


const jade = {
    name = 
}
