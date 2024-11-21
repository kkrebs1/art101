
// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
// Author: Karyssa Krebs
// Date: Nov 4 2024

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

// BUTTON FOR PROBLEMS
$("#problems").append("<button id='button-problems'>Make Unique</button>");
$("#button-problems").click(function(){
  $("#problems").toggleClass("unique");
})

// BUTTOM FOR RESULTS
$("#results").append("<button id='button-results'> Make Groovey </button>");
$("#button-results").click(function(){
  $("#results").toggleClass("groove");
})

function main() {
  console.log("Main function started.");

}


main();
