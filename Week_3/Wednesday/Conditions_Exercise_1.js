// Week 3 Wednesday
// Conditions Exercise 1

// Heating and Cooling Exercise:

let actualTemp = 74;
let desiredTemp = 65;

if(actualTemp > desiredTemp){
	console.log("Run A/C");
}else if(actualTemp < desiredTemp){
	console.log("Heat");
}else{
	console.log("Standby");
}

// Extended Challenges second exercise:

let tempCelsius = 42;
let targetUnit = "F";

switch(targetUnit){

	case "F":
		
		break;
	case "C":
		console.log(tempCelsius);
		break;
	case "K":
		console.log(tempCelsius + 273);
		break;
	default:
		console.log("That is not a known unit for temperature.")
		break;
}
		