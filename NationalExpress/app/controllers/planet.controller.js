const Planet = require("../models/planet.model.js");

exports.findAll = (req, res) => {
   Planet.getAll((err, data) => {
      if (err)
         res.status(500).send({
           message:
           err.message || "Some error occurred while retrieving all Planets."
          });
      else res.send(data);
  });
};
