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
        <circle cx="100" cy="100" r="50" fill="${this.backgroundColorCode}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColorCode}">${this.text}</text>
        `
    };
};

module.exports = {Circle, Square, Triangle};



 