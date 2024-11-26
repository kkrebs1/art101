// index.js - purpose and description here
// Author: Karyssa Krebs
// Date: 11/25/24


$.ajax({
  // The URL for the request (from the api docs)
  url: "http://www.yerkee.com/api/fortune",
  // The data to send (this API does not require additional parameters)
  data: {}, 
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the API call is successful
  // All the action goes in here
  success: function(data) {
      // Log the fortune to the console
      console.log("Fortune:", data.fortune);
  },
  // What we do if the API call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // Log the error details
      console.log("Error:", textStatus, errorThrown);
  }
});



function main() {
  console.log("Main function started.");
}

main();
