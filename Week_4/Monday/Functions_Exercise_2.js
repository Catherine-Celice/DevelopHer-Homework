// Week 4 Monday, 12 July, 2021
// Functions_Exercise_2
// Catherine Angela Celice

// 1 Dimensional
(function() {


    // Declare the variables needed for tracking the object and intialize

    let x = 0;
    let face_positive = true;


        
    // Define Functions

    // Define moveForward()
    function moveForward(distance) {
        
        // I am assuming the distance given will always be non-negative, so I will need to check
        // to see what dirction the object is facing before detrmining whether to add or subtract the distance.
        if(face_positive){
            x = x + distance;
        }else {
            x = x - distance;

        }
    }

    // Define moveBackward()
    function moveBackward(distance) {
        
        // I am assuming the distance given will always be non-negative, so I will need to check
        // to see what dirction the object is facing before detrmining whether to add or subtract the distance.
        if(face_positive){
            x = x - distance;
        }else {
            x = x + distance;

        }
    }

    // Define turnAround()
    function turnAround(){
        face_positive = !face_positive;
    }



    // Define printLocation()
    function printLocation(){
        if(face_positive){
            console.log("The character is at " + x + " facing in the positive direction.")
        }else {
            console.log("The character is at " + x + " facing in the negative direction.")
        }
        
    }

    var exercise_check_counter = 1;
    // Define checkPosition(posiion)
    function checkPosition(position){
        let correct_position;
        if(exercise_check_counter == 1){
            correct_position = 2;
        }else { 
            correct_position = -3;
        }
        
        if(position == correct_position){
            console.log("Correct");
        }else {
            console.log("Wrong");
        }
        exercise_check_counter++;
    }


    // Set up the sequence of actions
    console.log();
    console.log();
    moveForward(5);
    moveBackward(3);
    printLocation();
    checkPosition(x);
    console.log();
    turnAround();
    moveForward(10);
    moveBackward(5);
    printLocation();
    checkPosition(x);
    console.log();
    
})(); // end of 1-dimensional IIFE


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Extended Challenge 2 Dimensional
// See what an IIFE is first to determine if I need to put this in a separate script file or if I can keep it in this same script.


(function(){

    let North = 0;
    let East = 0;

    let facing = "N"
    // or let facing = "0"

    // ["f", "r", "f", "p", "l", "l", "f", "r", "b", "p"]
    // [5, 0, 2, 0, 0, 0, 7, 0, 3, 0]


    // Define Functions

    // Define moveForward()
    function moveForward(distance){
        switch (facing) {
            case 'N':
                North = North + distance;
                break;
            
            case 'E':
                East = East + distance;
                break;

            case 'S':
                North = North - distance;
                break;
            
            case 'W':
                East = East - distance;
                break;

        } //end of switch statement
    } // end of moveForward()

    // Define moveBackward()
    function moveBackward(distance){
        switch (facing) {
            case 'N':
                North = North - distance;
                break;
            
            case 'E':
                East = East - distance;
                break;

            case 'S':
                North = North + distance;
                break;
            
            case 'W':
                East = East + distance;
                break;

        } //end of switch statement
    } // end of moveBackward()

    // Define turnLeft()
    function turnLeft(){
        switch (facing) {
            case 'N':
                facing = 'W';
                break;
            
            case 'E':
                facing = 'N';
                break;

            case 'S':
                facing = 'E';
                break;
            
            case 'W':
                facing = 'S';
                break;

        } //end of switch statement
    } // end of turnLeft()



    // Define turnRight()
    function turnRight(){
        switch (facing) {
            case 'N':
                facing = 'E';
                break;
            
            case 'E':
                facing = 'S';
                break;

            case 'S':
                facing = 'W';
                break;
            
            case 'W':
                facing = 'N';
                break;

        } //end of switch statement
    } // end of turnRight()


    //Define printLocation()
    function printLocation() {
        console.log("current position:     N " + North + "   E " + East);
    } // end of printLocation()

    let check_counter = 1;
    function check() {
        let n;
        let e;
        if (check_counter == 1){
            n = 5;
            e = 2;
        } else {
            n = 2;
            e = -5;
        }
        check_counter++;

        if(North == n && East == e) {
            console.log("Correct");
        }else {
            console.log("Wrong");
        }


    } // end of check()


    // Set up the moves
    console.log();
    console.log();
    moveForward(5);
    turnRight();
    moveForward(2);
    printLocation();
    check();
    console.log();
    turnLeft();
    turnLeft();
    moveForward(7);
    turnRight();
    moveBackward(3);
    printLocation();
    check();
    console.log();
    console.log();



})(); // end of 2-dimensional IIFE


