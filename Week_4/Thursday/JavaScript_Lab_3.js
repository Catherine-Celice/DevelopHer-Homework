// Week 4 Thursday, 15 July, 2021
// Unit 3: JavaScript Lab 3
// Catherine Angela Celice






// 1. Declare a variable named submissions that is initialized to an array of objects as given

let submissions = [ {name:"Jane", score: 95, date: "2020-1-24", passed: true},
                    {name: "Joe", score: 77, date: "2018-05-12", passed: true},
                    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
                    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
                    ];

// Define Functions

// My functions that I wrote to help complee the tasks in the assingment
function isName(obj, nameToFind) {
    if(obj.name == nameToFind) {
        return true;
    } else {
        return false;
    }

} // end of isName()

function getLower(obj, currentScore) {
    console.log("f2 test currentScore");
    console.log(currentScore);
    console.log(obj.score);
    if(obj.score < currentScore) {
        
        return obj.score;
    } else {
        return currentScore;
    }
}

function isScore(obj, scoreToFind) {
    if(obj.score == scoreToFind) {
        return true;
    } else {
        return false;
    }

} // end of isScore()

function isPassing(obj) {
    return obj.passed;

}

function atLeast90(obj) {
    if(obj.score >= 90) {
        return true;
    } else {
        return false;
    }
}

// Functions requested in the assignment
// Define addSubmission()
function addSubmission(array, newName, newScore, newDate){
    let tempBool;
    if(newScore >= 60) {
        tempBool = true;
    } else {
        tempBool = false;
    }

    array.push({name: newName, score: newScore, date: newDate, passed: tempBool})
}


// Define deleteSubmissionByIndex()
function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);

}


// Define deleteSubmissionByName() -- REDO
function deleteSubmissionByName(array, name){

    // Find index of name
    //let i = findIndexOfName(array, name)
    let i = array.findIndex(isName, name)
    array.splice(i);

}



// Define editSubmission()
function editSubmission(array, index, score){
    let temp = array[index];
    temp.score = score;
    if(score >= 60){
        temp.passed = true;
    } else {
        temp.passed = false;
    }

    array.splice(index, 1, temp);

}


// Define findSubmissionByName()
function findSubmissionByName(array, name){
    
    const returnObject = array.find(isName, name);
    return returnObject;

}

// This is not working and I cannot figure out why.
// It seems to be passing the index of each object in the forEach function
// rather than the lowestScore value.
// The problem is that exampes on line of these array functions are:
// (1) hard to find -- they alre almost the same exct one on each site
// (2) poor examples and not well explained
// (3) too simplistc of our needs here.

// Define findLowestScore()
function findLowestScore(array){
    let lowestScore = 100;
    console.log("testing function here:");
    console.log(lowestScore);
    lowestScore = array.forEach(getLower, lowestScore);
    console.log(lowestScore);
    let ind = array.findIndex(isScore, lowestScore);
    console.log(ind);
    return array[ind];

}



// Define findAverageScore()
function findAverageScore(array){
    let sum = 0;
    let count = 0
    for(obj of array){
        sum = sum + obj.score;
        count++;
    }
    const ave = sum/count;
    return ave;

}




// Define filterPassing()
function filterPassing(array){
    let newArray;
    newArray = array.filter(isPassing);
    return newArray;

}


// Define filter90AndAbove()
function filter90AndAbove(array){
    let newArray;
    newArray = array.filter(atLeast90);
    return newArray;

}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Extended Challenges:

// Define createRange()
function createRange(start, end){
   
    let newArray = [start];

    if (start < end){
        for(let i = (start + 1); i <= end; i++){
            newArray.push(i);
        }

       
    }else if(start > end) {
        for(i = (start - 1); i >= end; i--){
            newArray.push(i);
        }

    } // note that if start = end, then just [start] will be returned

    return newArray;
}


// Define countElements()
function countElements(array){

    // I ran out of time and could not start this function.
}




//Test code
console.log("Start of test:")
console.log(submissions);
console.log();

addSubmission(submissions, "fred", 53, "2020-1-24");
// console.log("Added:");
// console.log(submissions);
// console.log();

// deleteSubmissionByName(submissions, "fred");
// console.log("Deleted:");
// console.log(submissions);
// console.log();

// addSubmission(submissions, "fred", 53, "2020-1-24");
// console.log("Added 2:");
// console.log(submissions);
// console.log();

// deleteSubmissionByIndex(submissions, 4);
// console.log("Deleted by Index:");
// console.log(submissions);
// console.log();


// addSubmission(submissions, "fred", 53, "2020-1-24");
// console.log("Added 2b:");
// console.log(submissions);
// console.log();

// deleteSubmissionByIndex(submissions, 2);
// console.log("Deleted by Index again:");
// console.log(submissions);
// console.log();

// editSubmission(submissions, 1, 47);
// console.log("Edited:");
// console.log(submissions);
// console.log();


// let testArray = filterPassing(submissions)
// console.log("passing:");
// console.log(testArray);
// console.log();

// let testArray2 = filter90AndAbove(submissions);
// console.log("A:");
// console.log(testArray2);
// console.log();

let low = findLowestScore(submissions);
console.log("lowest score:");
console.log(low);
console.log();



// let mean = findAverageScore(submissions);
// console.log("Average:");
// console.log(mean);
// console.log();


// let rangeArray1 = createRange(3, 7)
// console.log("range:");

// console.log(rangeArray1);
// console.log();

// let rangeArray2 = createRange(9, 2)
// console.log("range:");

// console.log(rangeArray2);
// console.log();

// let rangeArray3 = createRange(-14, -14)
// console.log("range:");

// console.log(rangeArray3);
// console.log();

