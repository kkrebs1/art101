// Author: Karyssa Krebs
// Date: Oct 28, 2024

function main() {
  console.log("Main function started.");
}

main();


function sort_name() {
  //prompt user to input name
  var user_name = window.prompt("Please enter your name.");
  //print name to console
  console.log("user_name =", user_name);
  //splits string into an array, sorts array, and joins it back to string
  var sort_user_name = user_name.toLowerCase().split('').sort().join('');
  //return sorted user name
  return sort_user_name.charAt(0).toUpperCase() + sort_user_name.slice(1);

}
//call fuction and write new name to html file
document.writeln(sort_name(), "</br>");
