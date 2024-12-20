// Author: Karyssa Krebs
// Date: 10-30-2024

function add(x) {
  var results = x + 1234;
  return results;
}

console.log("Calculate 5 + 1234", add(5));
console.log("Calculate 256 + 1234", add(256));

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("My array: ", array);

var result = array.map(add);
console.log("Adding 1234 to each of the numbers in my array: ", result);

var result2 = array.map(function (x) {
  return x - 1234;
})

console.log("Subtracting 1234 to each of the numbers in my array: ", result2);

//your map results
var map_results = "Your map results here";

//use jQuery to select the elements by its ID and set the HTML content
$("#add1").html("Calculate 5 + 1234" + add(5));
$("#add2").html("Calculate 256 + 1234" + add(256));
$("#my_array").html("My array: " + array);
$("#add3").html("Adding 1234 to each of the numbers in my array: " + result);
$("#subtract").html("Subtracting 1234 to each of the numbers in my array: "+ result2);


function main() {
}

main();
