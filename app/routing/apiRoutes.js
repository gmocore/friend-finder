const express = require("express");
const app = express();
const router = express.Router();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

let userData = [];

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/friends", (request, response) => {
  return response.json(userData);
});

router.post("/friends", (request, response) => {
  //   console.log("post route for friends api endpoint");
  let newUser = request.body;
  userData.push(newUser);

  // response.send("post routed");
  console.log(request.body);
  response.send(userData);
});

// A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = router;
