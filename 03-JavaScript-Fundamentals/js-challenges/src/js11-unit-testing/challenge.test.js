import * as challenge from './js13';

const {greet} = challenge;

it('Should return a string "Hello, nice to meet you"', () => {
    const output = greet();
    expect(output).toBe('Hello, nice to meet you');
});
