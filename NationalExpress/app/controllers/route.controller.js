const Route = require("../models/route.model.js");

exports.findAll = (req, res) => {
   Route.getAll((err, data) => {
      if (err)
         res.status(500).send({
           message:
           err.message || "Some error occurred while retrieving all routes."
          });
      else res.send(data);
  });
};

exports.findDeparture = (req, res) => {
Route.findDeparturesById(req.params.departureId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving departure routes planets."
      });
    else res.send(data);
  });
};

exports.findDestination = (req, res) => {
Route.findDestinationsById(req.params.destinationId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving destination planets."
      });
    else res.send(data);
  });
};


