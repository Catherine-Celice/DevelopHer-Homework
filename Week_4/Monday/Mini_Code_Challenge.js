//


// Write a function logRectInfo(topLeft, bottomRight)
function logRectInfo(topLeft, bottomRight) {
    let length = Math.abs(topLeft[0] - bottomRight[0]);
    let width = Math.abs(topLeft[1] - bottomRight[1]);
    let area = length*width;
    let perimeter = 2*length + 2*width;
   
    console.log("The area of the rectangle is " + area + ".");
    console.log("The perimeter of the rectangle is " + perimeter + ".");
    console.log();

    //let tempArray = [area, perimeter];
    //return tempArray;
}

console.log();
console.log();

console.log("[3, 3], [2, 4]");
logRectInfo([3, 3], [2, 4]);

console.log("[7, 2], [4, 3]");
logRectInfo([7, 2], [4, 3]);

console.log("[ 0,], [7, -2]");
logRectInfo([0, 0], [7, -2]);

console.log("[6, 1], [5, 14]");
logRectInfo([6, 1], [5, 14]);

console.log("[14, 8], [6, 3]");
logRectInfo([14, 8], [6, 3]);

console.log("9, 2], [-6, -3]");
logRectInfo([9, 2], [-6, -3]);

console.log("[5, 5], [3, 2]");
logRectInfo([5, 5], [3, 2]);

console.log();
console.log();

