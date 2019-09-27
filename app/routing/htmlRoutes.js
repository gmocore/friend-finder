const path = require("path");
const router = require("express").Router();

// GET route for survey.html

router.get("/css/style.css", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "css", "style.css"));
});

router.get("/js/survey.js", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "js", "survey.js"));
});

router.get("/survey", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "survey.html"));
});

router.get("/", (request, response) => {
  //   response.send("this is the main page");
  response.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

router.use((request, response, next) => {
  response
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "404.html"));
});

//default catch all that routes to home.html

module.exports = router;
