// Author: Karyssa Krebs
// Date: Dec 2 2024

// Define the API endpoint
let endpoint = "https://xkcd.com/info.0.json";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  contentType: "json", // Payload type
  data: { 
  },
  success: function(data) { // Success handler
    console.log("success!");
    console.log(data);
     $("#output").append("<h1>" + data.safe_title + "</h1>");
     $("#output").append("<img src=" + data.img + ">");
     $("#output").append("<p>" + data.alt + "</p>");
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 

  } 
};

// Send the AJAX request
$.ajax(ajaxConfig);

function main() {
  console.log("Main function started.");
}

main();
