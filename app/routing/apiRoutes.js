const router = require("express").Router();

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/friends", (request, response) => {
  response.send("friends api endpoint");
});

router.post("/friends", (request, response) => {
  //   console.log("post route for friends api endpoint");
  response.send("post routed");
});

// A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = router;
