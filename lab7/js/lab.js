// Author: Karyssa Krebs
// Date: Oct 28, 2024


function sort_name() {
  var user_name = window.prompt("Please enter your name.");
  var sort_user_name = user_name.split('').sort().join().replace(/,/g, '');
  return sort_user_name;

}
new_name = sort_name();
document.writeln("Your sorted name: " + new_name);



function main() {
  console.log("Main function started.");
}

main();
