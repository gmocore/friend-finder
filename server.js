const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", require("./app/routing/apiRoutes"));
app.use(require("./app/routing/htmlRoutes"));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
