const sql = require("./db.js");

const Route = function(route){
        this.routeName = route.routeName;
 	this.departingWeekDay = route.departingWeekDay; 
 	this.departure = route.departure;
	this.destination = route.destination;
	this.legOne = route.legOne;
	this.legTwo = route.legTwo;
	this.legThree = route.legThree;
	this.legFour = route.legFour;
};

Route.getAll = result => {
  sql.query("SELECT * FROM route", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("routes: ", res);
    result(null, res);
  });
};
 

Route.findDeparturesById = (departureId, result) => {
  sql.query(`SELECT * FROM route WHERE departure = ${departureId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found departures: ", res);
      result(null, res);
      return;
    }

    // no departures to said planet
    result({ kind: "not_found" }, null);
  });
};


Route.findDestinationsById = (destinationId, result) => {
  sql.query(`SELECT * FROM route WHERE destination = ${destinationId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found destinations: ", res);
      result(null, res);
      return;
    }

    // no destinations to said planet
    result({ kind: "not_found" }, null);
  });
};

module.exports = Route;
