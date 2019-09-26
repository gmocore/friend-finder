const path = require("path");
const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const app = express();

const PORT = 3000;

app.use(htmlRoutes, apiRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
