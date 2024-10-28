// VARIABLE ASSIGNMENT
let my_num = 10;


// CONSTANT (VARS THAT STAY THE SAME)
const int = 5;


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
