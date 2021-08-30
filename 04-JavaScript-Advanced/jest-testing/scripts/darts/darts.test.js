import {findScore} from './darts';

describe('Darts', () => {
    it('Should miss the target', () => {
        const output = findScore(-9, 9);
        expect(output).toEqual(0);
    });

    it('Outer circle', () => {
        const output = findScore(0, 10);
        expect(output).toEqual(1);
    });

    it('Middle circle', () => {
        const output = findScore(-5, 0);
        expect(output).toEqual(5);
    });

    it('Inner circle', () => {
        const output = findScore(0, -1);
        expect(output).toEqual(10);
    });

    it('Center', () => {
        const output = findScore(0, 0);
        expect(output).toEqual(10);
    });

    it('Invalid input', () => {
        const output = findScore('A', 0);
        expect(output).toEqual(null);
    });
});
