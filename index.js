//TODO Complete Project

const inquirer = require('inquirer');
const fs = require('fs');
const colorNames = require('./lib/colornames');
// const shapes = require('./lib/shapes');
const { Circle } = require('./lib/shapes');
const { Square } = require('./lib/shapes');
const { Triangle } = require('./lib/shapes');


const validateInitials = input => {
    if(input.length <= 3) {
        return true;
    } else {
        return "Input must be three characters or less";
    }
};



const validateColor = input => {
    let hexRegex = "^#[A-Fa-f0-9]{6}$";
    if (input.match(hexRegex) || colorNames.includes(input.toLowerCase())){
        return true;
    } else {
        return "Please enter a valid color keyword or hexadecimal code"
    }
    
};

const questions = [
    {
        type: "input",
        message: "Please enter up to three characters to be included in your logo.",
        name: "initials",
        validate: validateInitials
    },
    {
        type: "input",
        message: "Please type the color you would like your logo background to be (color keyword or hexadecimal code)",
        name: "backgroundColorCode",
        validate: validateColor
    },
    {
        type: "input",
        message: "Please type the color you would like your logo text to be (color keyword or hexadecimal code)",
        name: "textColorCode",
        validate: validateColor
    },
    {
        type: "list",
        message: "Please select the shape of your logo.",
        choices: ["Circle", "Square", "Triangle"],
        name: "logoShape"
    }
];



function generateLogo(answers) {
    if (answers.logoShape == "Square") {
    const square = new Square(answers);
    console.log(square.backgroundColorCode.initials);
    const svgString = square.render(answers);
    fs.writeFileSync('User Logo.svg', svgString, ()=> console.log("Generated logo.svg"));
    // console.log(svgString);
    } else if (answers.logoShape == "Circle") {
    const circle = new Circle(answers);
    console.log(circle.backgroundColorCode.initials);
    const svgString = circle.render(answers);
    fs.writeFileSync('User Logo.svg', svgString, ()=> console.log("Generated logo.svg"));

    } else if (answers.logoShape == "Triangle") {
        const triangle = new Triangle(answers);
        console.log(triangle.backgroundColorCode.initials);
        const svgString = triangle.render(answers);
        fs.writeFileSync('User Logo.svg', svgString, ()=> console.log("Generated logo.svg"));
    
    }
};


function init() {
    inquirer.prompt(questions).then((answers) => {
       
        generateLogo(answers);
        console.log(answers.logoShape);
        console.log('User Answers', answers);
        // console.log(svgString);
    })
};

init();
