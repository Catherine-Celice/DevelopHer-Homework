// Week 3 Thursday, 8 July, 2021
// Unit 3: JavaScript Lab 1 - Extended Challenge
// Catherine Angela Celice


// Declare and assign the variables

/* const wage = 15;
const hours = 45; */


/* const wage = 10;
const hours = 20; */

/* const wage = 10;
const hours = 40; */

/* const wage = 10;
const hours = 50; */

const wage = 12;
const hours = 60;


// Compute the weekly paycheck

if(hours > 40){
    var paycheck = (hours - 40)*(1.5)*wage + 40*wage;
}else{
    var paycheck = (hours * wage);
}

console.log();
console.log();
console.log("This person's weekly paycheck is " + paycheck + " dollars.");



// count the number of weeks it will take this person to earn 1 million dollars

let weeks = 0;
let total = 0;

while(total <= 1000000){
    weeks++;
    total = total + paycheck;

}

weeks = Math.floor(weeks);

console.log("It would take this person " + weeks + " weeks to earn at least 1 million dollars.")
console.log();
console.log();
