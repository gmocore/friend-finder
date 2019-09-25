var express = require("express");
var app = express();
const PORT = 3000;

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", (request, response) => {
  response.send("friends api endpoint");
});

app.post("/api/friends", (request, response) => {
  response.send("post route for friends api endpoint");
});

// A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.listen(PORT, () => console.log(`listening on ${PORT}`));
