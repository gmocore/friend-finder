const express = require("express");
const app = express();
const router = express.Router();

const users = require("../data/friends");

function compareUsers(current) {
  users.forEach(user => {
    let userChoices = user.choices.map((choice, i) => {
      return Math.abs(choice - current.scores[i]);
    });

    let totalDiff = userChoices.reduce((total, num) => total + num);
    console.log("total diff", totalDiff);
    let maxDiff = 100;
    let bestMatch;

    if (totalDiff < maxDiff) {
      bestMatch = user;
      maxDiff = totalDiff;
      console.log("best match: ", bestMatch);
    }
    return bestMatch;
  });
  users.push(current);
  console.log(users);
}

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/friends", (request, response) => {
  return response.json(userData);
});

router.post("/friends", (request, response) => {
  //   console.log("post route for friends api endpoint");
  let newUser = request.body;
  let match = compareUsers(newUser);

  response.json(match);
});

// A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = router;
