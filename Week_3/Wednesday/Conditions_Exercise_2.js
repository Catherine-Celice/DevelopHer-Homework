// Week 3 Wednesday
// Conditions Exercise 2

// Uncomment/Comment the different inputs to test the code in various ways.

//let name1 = "Jenny";
//let name2 = "Agatha";
//let name3 = "Elspeth";

let name1 = "Jenny";
let name2 = "Cathy";
let name3 = "Betty";

//let name1 = "Caroline";
//let name2 = "Agatha";
//let name3 = "Elspeth";

if(name1.length > name2.length){
    if(name1.length > name3.length){
        console.log(name1 + " has the longest name.");
    }else if(name1.length == name3.length){
        console.log(name1 + " and " + name3 + " tie for the longest name.");
    }else{
        // name 3 is the longest since name1 > name 2 already
        console.log(name3 + " has the longest name.");
    }
}else if(name2.length > name1.length){
    if(name2.length > name3.length){

    }else if(name2.length == name3.length){
        console.log(name2 + " and " + name3 + " tie for the longest name.");
    }else{
        // name 3 is the longest since name 2 is already longer than name 1
        console.log(name3 + " has the longest name.");
    }
}else if(name1.length == name2.length){
    if(name1.length > name3.length){
        console.log(name1 + " and " + name3 + " tie for the longest name.");
    }else if(name1.length == name3.length){
        console.log(name1 + " and " + name3 + " and " + name3 + " tie for the longest name.");
    }else{
        // name 3 is the longest since name1 == name 2 already
        console.log(name3 + " has the longest name.");
    }
}

