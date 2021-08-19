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

const validMessageEntries = Object.entries(message);
console.log(validMessageEntries);

const validateMessageObject = (messageObject) => {
    const objectEntries = Object.entries(messageObject);

    const validation = objectEntries.every((entry) => {
        const key = entry[0];
        const value = entry[1];

        const typecheck = typeof value === 'string';

        const keyValid = ['userName', 'content'];
        const keycheck = keyValid.includes(key);

        return typecheck && keycheck;
    });

    return validation;
};

console.log(validateMessageObject(message));
