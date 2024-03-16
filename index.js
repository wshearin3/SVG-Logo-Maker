//TODO Complete Project

const inquirer = require('inquirer');
const fs = require('fs');
const colorNames = require('./lib/colornames');
const circleShape = require('./lib/circle.js');

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

// function generateLogo(answers) {
//     const svg = circleShape;
//     fs.writeFileSync('User Logo.svg', circleShape, ()=> console.log("Generated logo.svg"));
// }

function init() {
    inquirer.prompt(questions).then((answers) => {
        // generateLogo(answers);
        console.log(Circle);
        console.log('User Answers', answers);
    })
};

init();
