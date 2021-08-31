import * as challenge from './js13';

const {greet, sumTwoNumbers, checkLarger, filterByLength, reduceNumbers} =
    challenge;

it('Should return a string "Hello, nice to meet you"', () => {
    const output = greet();
    expect(output).toBe('Hello, nice to meet you');
});

it('Should add two numbers together and return the sum', () => {
    const output = sumTwoNumbers(10, 10);
    expect(output).toBe(20);
});

describe('Check Larger number', () => {
    let x = 5;
    let y = 5;

    it('Should be equal', () => {
        const output = checkLarger(x, y);

        expect(output).toEqual(`Both numbers are equal`);
    });

    it('Should be larger than y', () => {
        let y = 2;

        const output = checkLarger(x, y);
        expect(output).toEqual(`${x} is bigger than ${y}`);
    });

    it('Should be larger than x', () => {
        let x = 2;

        const output = checkLarger(x, y);
        expect(output).toEqual(`${y} is bigger than ${x}`);
    });
});

describe('Filtering an array by length', () => {
    it('Shouldnt work - no names entered', () => {
        const output = filterByLength([]);
        expect(output).toMatch('Sorry, no valid names supplied');
    });

    it('Should return the first mapped name listed in a new array', () => {
        const listOfNames = ['Jade', 'Paul', 'Frankie'];

        const func = filterByLength(listOfNames);
        const newArr = {...func};

        const output = newArr[0];

        expect(output).toEqual('Jade');
    });
});
