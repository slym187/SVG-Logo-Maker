const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
    test('Triangle renders correctly', () => {
        const shape = new Triangle('red');
        expect(shape.render()).toContain('fill="red"');
    });

    test('Circle renders correctly', () => {
        const shape = new Circle('blue');
        expect(shape.render()).toContain('fill="blue"');
    });

    test('Square renders correctly', () => {
        const shape = new Square('green');
        expect(shape.render()).toContain('fill="green"');
    });
});
