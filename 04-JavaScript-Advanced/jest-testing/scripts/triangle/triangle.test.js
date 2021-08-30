import {Triangle} from './triangle';

describe('Testing triangle sides to determine shape is a triangle', () => {
    describe('Should be an equilateral triangle', () => {
        test('All sides should be equal', () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEquilateral).toBe(true);
        });
    });
});
