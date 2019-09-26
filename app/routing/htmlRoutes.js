const express = require("express");
const path = require("path");
const router = express.Router();

// GET route for survey.html

router.get("/", (request, response) => {
  //   response.send("this is the main page");
  response.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

router.get("/css/style.css", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "css", "style.css"));
});

router.get("/survey", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "survey.html"));
});

// router.get("/api/friends", (request, response) => {
//   response.send("friends api endpoint");
// });

// router.post("/api/friends", (request, response) => {
//   response.send("post route for friends api endpoint");
// });

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "..", "public", "404.html"));
});
//default catch all that routes to home.html

module.exports = router;
