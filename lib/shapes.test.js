// Jest tests for shapes
const { Circle, Square, Triangle } = require('./shapes.js');

const generateFunction = require('../index.js');

describe('Circle', () => {
    it('render method should return correct SVG string', () => {
        // Define input values
        const backgroundColorCode = 'blue';
        const initials = 'TRE';
        const textColorCode = 'black';

        const circle = new Circle(backgroundColorCode, initials, textColorCode);

        // Expected SVG string
        const expectedSVGString = `
        <svg version="1.1" 
        height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="blue" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="black">TRE</text>
        </svg>
        `

        const actualSVGString = circle.render();

        
        expect(expectedSVGString).toEqual(expectedSVGString);
    });
});

describe('Square', () => {
    it('render method should return correct SVG string', () => {
        // Define input values
        const backgroundColorCode = 'blue';
        const initials = 'TRE';
        const textColorCode = 'black';

        const square = new Circle(backgroundColorCode, initials, textColorCode);

        // Expected SVG string
        const expectedSVGString = `
        <svg version="1.1" 
        height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="blue" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="black">TRE</text>
        </svg>
        `

        const actualSVGString = square.render();

        
        expect(expectedSVGString).toEqual(expectedSVGString);
    });
});

describe('Triangle', () => {
    it('render method should return correct SVG string', () => {
        // Define input values
        const backgroundColorCode = 'blue';
        const initials = 'TRE';
        const textColorCode = 'black';

        const triangle = new Triangle(backgroundColorCode, initials, textColorCode);

        // Expected SVG string
        const expectedSVGString = `
        <svg version="1.1" 
        height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="blue" />
        <text x="100" y="185" font-size="60" text-anchor="middle" fill="black">TRE</text>
        </svg>
        `

        const actualSVGString = triangle.render();

        
        expect(expectedSVGString).toEqual(expectedSVGString);
    });
});