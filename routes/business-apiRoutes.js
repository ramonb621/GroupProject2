var db = require("../models");

module.exports = function(app) {
  app.get("/api/businesses", function(req, res) {
    db.Business.findAll({}).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  app.post("/api/businesses", function(req, res) {
    db.Business.create({
      businessName: req.body.name,
      contactName: req.body.contactName,
      email: req.body.email,
      state: req.body.state,
      city: req.body.city,
      zipCode: req.body.zipCode
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  app.put("/api/businesses", function(req, res) {
    db.Business.update({
      businessName: req.body.name,
      contactName: req.body.contactName,
      email: req.body.email,
      state: req.body.state,
      city: req.body.city,
      zipCode: req.body.zipCode
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  app.delete("/api/businesses/:id", function(req, res) {
    db.Business.destroy({ 
      where: { 
        id: req.params.id 
      }
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });
};
