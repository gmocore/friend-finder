// application and module variables
const express = require("express");
const app = express();
const router = express.Router();

//import data from friends.js
const users = require("../data/friends");

// compare user scores
function compareUsers(current) {
  // starts vars to compare users
  let maxDiff = 100;
  let bestMatch;
  // loop through users in array
  users.forEach(user => {
    // create array of user scores
    let userChoices = user.scores.map((score, i) => {
      // calculate difference in scores
      return Math.abs(score - current.scores[i]);
    });
    // combine scores to total difference
    let totalDiff = userChoices.reduce((total, num) => total + num);

    // reset values on each iteration if a better match is determined
    if (totalDiff < maxDiff) {
      // set best match to current user
      bestMatch = user;
      // set difference to current user
      maxDiff = totalDiff;
    }
  });
  // push new user to user data array
  users.push(current);

  // best match overall
  return bestMatch || "no match found";
}

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/friends", (request, response) => {
  // display user data on api/friends route
  return response.json(users);
});

//   posts new users to api-friends
router.post("/friends", (request, response) => {
  // set request body to new user to compare
  let newUser = request.body;
  // compare new user to Friends.js data
  let match = compareUsers(newUser);

  // send best match to api
  response.send(match);
});


module.exports = router;
