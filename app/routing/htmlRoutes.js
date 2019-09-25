var express = require("express");
var app = express();
const PORT = 3000;

// GET route for survey.html

app.get("/", (request, response) => {
  response.send("this is the main page");
});

app.get("/survey", (request, response) => {
  response.send("survey page here");
});

//default catch all that routes to home.html

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
