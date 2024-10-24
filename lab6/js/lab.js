// Author: Karyssa Krebs
// Date: Oct 22, 2024

// ARRAYS
var my_transport = ["car", "bus"];

// OBJECTS
var my_main_ride = {
  make: "Hyundai",
  model: "Elantra",
  color: "red",
  year: 2005,
  current_year: 2024,
  age: function () {
    return 2024 - this.year;
  }
}

// OUTPUT
document.writeln("My main ride: <pre>",
  JSON.stringify(my_main_ride, null, '\t'), "</pre>");

document.writeln("Getting around school: " + my_transport[1] + "<br>");
document.writeln("Getting around town: " + my_transport[0] + "<br>");



function main() {
  console.log("Main function started.");

}

main();
