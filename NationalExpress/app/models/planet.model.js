const sql = require("./db.js");

// constructor
const Planet = function(planet) {
  this.planetName = planet.planetName;
};

Planet.getAll = result => {
  sql.query("SELECT * FROM planet", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("planets: ", res);
    result(null, res);
  });
};

module.exports = Planet;

