// Author: Karyssa Krebs
// Date: Nov 12

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  let houseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  return houseArray[mod];
  // if (mod == 1) {
  //   return houseArray[0];
  // }
  // else if (mod == 2) {
  //   return houseArray[1];
  // }
  // else if (mod == 3) {
  //   return houseArray[2];
  // }
  // else if (mod == 4){
  //   return houseArray[3];
  // }
}

$("button").click(function() {
  // get the value in the #input text box, assign to a variable
  var name = $("input").val()
  //get house
  var house = sortingHat(name);
  //add house to output div
  $("output").html("<h1>" + house + "</h1>");
})

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has sorted you into " + house + ".<p>";
  document.getElementById("output").innerHTML = newText;
})

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
