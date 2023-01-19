// const request = require("request");
// request("http://www.example.edu/ ./index.html", (error, response, body) => {
//   console.log("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
// });

const request = require("request");
const fs = require("fs");
const path = process.argv[3];
const domain = process.argv[2];
request(domain, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(`${path}`, body, function (error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(
        `Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`
      );
    }
  });
});


