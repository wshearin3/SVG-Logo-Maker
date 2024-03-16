 // Exports `Triangle`, `Circle`, and `Square` classes
 class Shape {
    constructor(backgroundColorCode, initials, textColorCode) {
        this.backgroundColorCode = backgroundColorCode;
        this.initials = initials;
        this.textColorCode = textColorCode;
    }
 };

 class Circle extends Shape {
    constructor(backgroundColorCode, initials, textColorCode) {
        super(backgroundColorCode, initials, textColorCode)
    };
    render() {
        return `
        <svg version="1.1" 
        height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.backgroundColorCode.backgroundColorCode}" />
        <text x="150" y="125" font-size=" 50" text-anchor="middle" fill="${this.backgroundColorCode.textColorCode}">${this.backgroundColorCode.initials}</text>
        </svg>
        `
    };
};

module.exports = Circle;



 