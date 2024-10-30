// VARIABLE ASSIGNMENT
let my_num = 10;

// CONSTANT (VARS THAT STAY THE SAME)
const int = 5;

// _________________________________________________________________________________________________________

// FUNCTION STRUCTURE
function myFunction(parameter) {
     //some code here
     return value;
}

function reverseSortArray(array) {
	// sort array
  let sortedArray = array.sort();
  // reverse array
  let reverseSortedArray = sortedArray.reverse();
  // return array
  return reverseSortedArray;
}

const mixedArray = ["olives", "pickles", "bone broth", "salt lick", 6, 
	"salted carmel"];

reverseSortArray(mixedArray);

// _________________________________________________________________________________________________________

// CALLBACK FUNCTIONS: A callback is code that responds to an event

function pressed() {
  //respond to button
  //display something or do something else
}



// example of using a callback
function allDone() {
  console.log("I'm dont waiting!");
}
setTimeout(allDone, 5000);
//setTimeout(callback(as a reference), time);




function spiceItUp(str) {
  console.log(str + " but spicy!");
}
var myArray = ["tomatoes", "persimmons", "pumpkin spiced latte"];
myArray.map(spiceItUp);
