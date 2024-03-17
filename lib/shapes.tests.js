// Jest tests for shapes
const { Circle } = require('./shapes.js');
const { Square } = require('./shapes.js');
const { Triangle } = require('./shapes.js');

const generateFunction = require('../index.js');

describe('Circle', () => {
    it('render method should return correct SVG string', () => {
        // Define input values
        const backgroundColorCode = 'blue';
        const initials = 'TRE';
        const textColorCode = 'black';

        // Create an instance of the Circle class
        const circle = new Circle("blue", "TRE", "black");

        // Expected SVG string
        const expectedSVGString = `
        <svg version="1.1" 
        height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="blue" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="black">TRE</text>
        </svg>
        `

        const actualSVGString = Circle.render();

        
        expect(actualSVGString).toEqual(expectedSVGString);
    });
});

describe('Square', () => {
    it('render method should return correct SVG string', () => {
        // Define input values
        const backgroundColorCode = 'blue';
        const initials = 'TRE';
        const textColorCode = 'black';

        // Create an instance of the Circle class
        const square = new Circle("blue", "TRE", "black");

        // Expected SVG string
        const expectedSVGString = `
        <svg version="1.1" 
        height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="blue" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="black">TRE</text>
        </svg>
        `

        const actualSVGString = Square.render();

        
        expect(actualSVGString).toEqual(expectedSVGString);
    });
});