//TODO Complete Project

const inquirer = require('inquirer');
const fs = require('fs');
const colorNames = require('./lib/colornames');

const validateInitials = input => {
    if(input.length <= 3) {
        return true;
    } else {
        return "Input must be three characters or less";
    }
};

const validateColor = input => {
    let hexRegex = "^#[A-Fa-f0-9]{6}$";
    if (input.match(hexRegex) || input){
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
        name: "colorCode",
        validate: validateColor
    },
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('User Answers', answers);
    })
};

init();
