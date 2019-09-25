var express = require("express");
const path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "public")));
const PORT = 3000;

// GET route for survey.html

app.get("/", (request, response) => {
  response.send("this is the main page");
});

app.get("/style.css", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "/css/style.css"));
});

app.get("/survey", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "survey.html"));
});

//default catch all that routes to home.html

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
