// Author: Karyssa Krebs
// Date: Oct 28, 2024

function main() {
  console.log("Main function started.");
  //prompt user to input name
  var user_name = window.prompt("Please enter your name.");
  //call fuction and write new name to html file
  document.writeln(sort_name(user_name), "</br>");
}

main();


function sort_name(user_name) {
  //prompt user to input name
  //var user_name = window.prompt("Please enter your name.");
  //print name to console
  console.log("user_name =", user_name);
  //omits whitespace from user input
  var no_space = user_name.split(' ').join(''); 
  console.log(no_space);
  //splits string into an array, sorts array, and joins it back to string
  var sort_user_name = no_space.toLowerCase().split('').sort().join('');
  //return sorted user name
  return sort_user_name.charAt(0).toUpperCase() + sort_user_name.slice(1);

}
//call fuction and write new name to html file
//document.writeln(sort_name(), "</br>");
