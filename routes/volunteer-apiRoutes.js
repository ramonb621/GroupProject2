var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/volunteers", function(req, res) {
    db.Volunteer.findAll({}).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  app.post("/api/volunteers", function(req, res) {
    db.Volunteer.create({
      name: req.body.name,
      email: req.body.email,
      services: req.body.services,
      state: req.body.state,
      city: req.body.city,
      zipCode: req.body.zipCode
    }).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  app.put("/api/volunteers", function(req, res) {
    db.Volunteer.update({
      name: req.body.name,
      email: req.body.email,
      services: req.body.services,
      state: req.body.state,
      city: req.body.city,
      zipCode: req.body.zipCode
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  app.delete("/api/volunteers/:id", function(req, res) {
    db.Volunteer.destroy({ 
      where: { 
        id: req.params.id 
      }
    }).then(function(dbVolunteer){
      res.json(dbVolunteer);
    });
  });
};
