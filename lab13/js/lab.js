// Author: Karyssa Krebs
// Date: Nov 18 2024

function fizzbuzz() {
  let str = "";
  for(i = 1; i <=200; i++) {
    str += i + " ";
    if (i % 3 == 0)
      str += "Fizz!";
    if(i % 5 == 0)
      str += "Buzz!";
    if (i % 7 == 0)
      str += "Boom!";
    str += "<br>"
  }
  $("#output").html("<p>" + str + "</p>")
  console.log(str);
}

fizzbuzz(); 

function main() {
  console.log("Main function started.");
}

main();
