const express = require("express");
const app = express();
const router = express.Router();

const users = require("../data/friends");

function compareUsers(current) {
  let maxDiff = 100;
  let bestMatch;
  users.forEach(user => {
    let userChoices = user.scores.map((score, i) => {
      return Math.abs(score - current.scores[i]);
    });

    let totalDiff = userChoices.reduce((total, num) => total + num);

    if (totalDiff < maxDiff) {
      bestMatch = user;
      maxDiff = totalDiff;
    }
  });
  users.push(current);

  return bestMatch || "no match found";
}

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/friends", (request, response) => {
  return response.json(users);
});

router.post("/friends", (request, response) => {
  //   console.log("post route for friends api endpoint");
  let newUser = request.body;
  let match = compareUsers(newUser);

  response.send(match);
});

// A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = router;
