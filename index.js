const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Ensure the examples directory exists
const examplesDir = './examples';
if (!fs.existsSync(examplesDir)) {
    fs.mkdirSync(examplesDir);
}

function generateSVG(text, textColor, shapeInstance) {
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
}

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 || 'Text must be three characters or less.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):'
    }
]).then(answers => {
    let shape;
    if (answers.shape === 'triangle') {
        shape = new Triangle(answers.shapeColor);
    } else if (answers.shape === 'circle') {
        shape = new Circle(answers.shapeColor);
    } else if (answers.shape === 'square') {
        shape = new Square(answers.shapeColor);
    }

    const svgContent = generateSVG(answers.text, answers.textColor, shape);

    // Write SVG content to a file
    fs.writeFileSync(`${examplesDir}/logo.svg`, svgContent);

    console.log('Generated logo.svg');
});
