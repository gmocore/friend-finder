// npm variables
const path = require("path");
const express = require("express");

// express application init
const app = express();

const PORT = process.env.PORT || 3000;

// reference to routes
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

// express components
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// use routes defined in imported files
app.use("/api/", require("./app/routing/apiRoutes"));
app.use(require("./app/routing/htmlRoutes"));

// start server

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
