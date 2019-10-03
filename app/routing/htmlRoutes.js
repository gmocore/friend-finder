// npm variables
const path = require("path");
const router = require("express").Router();

// routes for all files needed from server

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
  response.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

router.use((request, response, next) => {
  response
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "404.html"));
});

module.exports = router;
