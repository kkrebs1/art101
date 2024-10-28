// Author: Karyssa Krebs
// Date: Oct 28, 2024

function main() {
  console.log("Main function started.");
}

main();


function sort_name() {
  var user_name = window.prompt("Please enter your name.");
  console.log("user_name =", user_name)
  var sort_user_name = user_name.split('').sort().join('');
  return sort_user_name;

}

document.writeln("Your sorted name: ",
  sort_name(), "</br>");
