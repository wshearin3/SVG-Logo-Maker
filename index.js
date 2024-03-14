//TODO Complete Project

const inquirer = require('inquirer');
const fs = require('fs');

const validateInitials = input => {
    if(input.length <= 3) {
        return true;
    } else {
        return "Input must be three characters or less";
    }
};

const validateColor = input => {
    
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
        message: "Please type the color you would like your logo background to be (color keyword or hexidecimal code)",
        name: "colorCode"
    },
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('User Answers', answers);
    })
};

init();
