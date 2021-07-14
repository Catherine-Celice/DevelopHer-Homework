// Week 4 Monday, 12 July, 2021
// Functions_Exercise_1 (optional)
// Catherine Angela Celice


// Declare radius, side, base, and height variables

const pi = 3.14;

// Declare variables for the results

var radius;
var side;
var base;
var height;

radius = 3;
side = 5;
base = 8;
height = 3;

// radius = 2;
// side = 47;
// base = 9;
// height = 8;


// radius = 4;
// side = 6;
// base = 4;
// height = 4;


// radius = 1;
// side = 7;
// base = 3;
// height = 5;


// radius = 6;
// side = 2;
// base = 7;
// height = 15;



// Write the function getAreaOfCircle()
function getAreaOfCircle(r) {
    return (pi * r**2);
}


// Write the function getCircumferenceOfCircle()
function getCircumferenceOfCircle(r) {
    return (2*pi*r);
}


// Write the function getAreaOfSquare()
function getAreaOfSquare(s) {
    return(s**2);
}


// Write the function getAreaOfTriangle()
function getAreaOfTriangle(b, h) {
    return((0.5) * b * h);
}



// log the results to the console
console.log();
console.log();
console.log("The area of a circle of radius " + radius + " is " + getAreaOfCircle(radius));
console.log("The circumference of tha circle is " + getCircumferenceOfCircle(radius));
console.log();
console.log("The area of a square whose sides of of length " + side + " is " + getAreaOfSquare(side));
console.log();
console.log("The area of a trianlge with base " + base + " and height " + height + " is " + getAreaOfTriangle(base, height));
console.log();
console.log();






