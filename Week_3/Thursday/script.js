// Week 3 Thursday, 8 July, 2021
// Unit 3: JavaScript Lab 1
// Catherine Angela Celice



// Initialize the variables

let name = "Catherine Angela Celice";
let age = 60;
let birthday = "St. Patrick's Day";
// let detroitGC = true;
let detroitGC = false;
let lifeEvents = ["I was born in Detroit.", "In my first career I was a flight attendant", "In my 2nd career I was a university math lecturer.", "I'm starting my 3rd career as a data scientist."];



// Write if/else statement

console.log();
console.log();

if(detroitGC){
    console.log("My name is " + name + " and I am a student at Grand Circus in Detroit, Michigan.  I am currently " + age + " years old and my birthday is on " + birthday + ".");
  

}else{
    console.log("my name is " + name + " and I am a student at Grand Circus in Grand Rapids, Michigan.  I am currently " + age + " years old and my birthday is on " + birthday + ".");
}

// write the for loop

for(let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}


// declare an initialize counter
let counter = 0;


// write a while loop
while(true){

   // pick a random integer between 1 and 10
    let randomNumber = Math.floor(Math.random()*10 + 1);

    // write if/else statement with two conditions
    // if randomNumber != 5
    if(randomNumber != 5){
        // increment counter
        counter++;

        // print that the random number is not 5
        console.log("randomNumber !== 5");

    }else {
    // else
        // increment counter
        counter++;
        
        // print "5===5" it took counter iterations to randomly generate the number 5
        console.log("5===5.  It took " + counter + " iterations to randomly generate the number 5");

        // break
        break;

    } // end of if/else


} // end of while loop

 


console.log();
console.log();

// Extended Challenge


