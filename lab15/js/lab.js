// index.js - purpose and description here
// Author: Karyssa Krebs
// Date: 11/25/24

// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "http://www.yerkee.com/api/fortune/science",
  // The data to send (will be converted to a query string)
  data: {
    "fortune": "I do not remember ever having seen a sustained argument by an author which,\nstarting from philosophical premises likely to meet with general acceptance,\nreached the conclusion that a praiseworthy ordering of one's life is to\ndevote it to research in mathematics.\n\t\t-- Sir Edmund Whittaker, \"Scientific American\", Vol. 183"
  },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})


function main() {
  console.log("Main function started.");
}

main();
