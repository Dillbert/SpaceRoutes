const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server application running." });
});

// set port, listen for requests
require("./app/routes/all.routes.js")(app);
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
