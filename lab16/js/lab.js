// Define the API endpoint
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  contentType: "json", // Payload type
  data: { 
    api_key: "pZ4AoYgNRFUers4BNlKdIwk56HibjAzvXI0YaaCi",
  },
  success: function(data) { // Success handler
    console.log(data);
     $("#output").append("<h1>" + data.title + "</h1>");
     $("#output").append("<p>" + data.explanation + "</p");
     $("#output").append("<img src="+ data.url + ">");
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 

  } 
};


// Send the AJAX request
$.ajax(ajaxConfig);
