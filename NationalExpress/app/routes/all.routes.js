module.exports = app => {
  const planets = require("../controllers/planet.controller.js"); 
  const routes = require("../controllers/route.controller.js");
	
  // Retrieve all planets
  app.get("/planets", planets.findAll);

  // Retrieve route by destinationId
  app.get("/route/destination/:destinationId", routes.findDestination);
  app.get("/route/departure/:departureId", routes.findDeparture);
  app.get("/routes", routes.findAll);

};

