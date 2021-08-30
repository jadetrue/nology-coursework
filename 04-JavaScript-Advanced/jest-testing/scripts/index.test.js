import {getName} from './index';

it('Should return the string "Jade, 23 years old"', () => {
    const output = getName('Jade', 23);
    expect(output).toBe('Jade, 23 years old');
});

it('Should return the string "Paul, 34 years old" ', () => {
    const output = getName('Paul', 34);
    expect(output).toBe('Paul, 34 years old');
});
