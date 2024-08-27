// Parent Shape class
class Shape {
    constructor(color) {
        this.color = color;
    }
}

// Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
}

// Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Square class
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
