//Extend Circle from Parent Shape Class
const shape = require("./shapes");

class circle extends shape {
    render() {
        return `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="50" fill="${this.backgroundColorCode}" />
        <text x="50%" y="50%" text-anchor="middle" fill="$this.textColorCode}">${this.text}</text>
        `
    };
};

module.exports = circle;