// npm vars
const path = require("path");
const express = require("express");

// setup express app
const app = express();

// set port
const PORT = process.env.PORT || 3000;

// import routes
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

// implement express components
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// use routes 
app.use("/api/", require("./app/routing/apiRoutes"));
app.use(require("./app/routing/htmlRoutes"));

// start server
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
