const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {
    test('Triangle renders correctly', () => {
        const shape = new Triangle('red');
        expect(shape.render()).toBe('<polygon points="150,20 280,180 20,180" fill="red" />');
    });

    test('Circle renders correctly', () => {
        const shape = new Circle('blue');
        expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
    });

    test('Square renders correctly', () => {
        const shape = new Square('green');
        expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});
