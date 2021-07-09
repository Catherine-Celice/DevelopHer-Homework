// Week 3 Thursday, 8 July, 2021
// Exercise:  Loops Exercise 1
// Catherine Angela Celice

// Use loops to log numbers from 1 to 10 and from 10 to 1
console.log("Part 1: for loops");
for(let n = 1; n <= 10; n++){
    console.log(n);
}

for(let m=10; m >= 1; m--){
    console.log(m);
}

// Repeat with while loops
console.log("Part 2: while loops");
n = 1;
while(n <= 10){
    console.log(n);
    n++;
}

m=10;
while(m >= 1){
    console.log(m);
    m--;
}

// Repeat with do while loops
console.log("Part 3: do while loops");
n = 1;
do {
    console.log(n);
    n++;

}while(n<=10);

m = 10;
do {
    console.log(m);
    m--;

}while(m >= 1);



// Create an array of the numbers from 1 to 10 and loop through it
console.log("Part 4: looping through an array");
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i of a){
    console.log(i)
}




// Extended Challenge/Second Exercise

// Given any string, add padding to the beginning so that it is 10 characters and log it.

console.log("Part Extra: padding strngs");
let str1 = "hello";
//let str1 = "abacadabra";
//let str1 = "obvious";
//let str1 = "furthermore"

let L = str1.length;

let need = 10 - L;

if(need < 10 && need > 0){
    let temp = ""
    for(let i = 1; i <= need; i++){
        temp = temp + " ";
    }
    temp = temp + str1;
    console.log(temp);

}else if(need == 10){
    console.log(str1);

}else {
    console.log("The string " + str1 + " is longer than 10 characters.");
}