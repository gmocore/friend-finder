// application and module variables
const express = require("express");
const app = express();
const router = express.Router();

//import data from friends.js
const users = require("../data/friends");

// compare user scores
function compareUsers(current) {
  // variables to run comparison
  let maxDiff = 100;
  let bestMatch;

  //loop through each object in friends array
  users.forEach(user => {
    // create array for userchoices
    let userChoices = user.scores.map((score, i) => {
      // return differences in scores
      return Math.abs(score - current.scores[i]);
    });

    // calculate total differences in each scores array
    let totalDiff = userChoices.reduce((total, num) => total + num);

    // resets best match to lowest total difference on each iteration
    if (totalDiff < maxDiff) {
      // sets best user to current user if conditions are met
      bestMatch = user;
      // resets difference to the difference of the best match on each iteration
      maxDiff = totalDiff;
    }
  });
  // push new user to user's array
  users.push(current);

  // best match overall
  return bestMatch || "no match found";
}

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/friends", (request, response) => {
  // displays json data to api/friends
  return response.json(users);
});

//   posts new users to api-friends
router.post("/friends", (request, response) => {
  // constructed object set to request body
  let newUser = request.body;
  // new user is comparted to existing users
  let match = compareUsers(newUser);

  // send match through api
  response.send(match);
});

module.exports = router;
