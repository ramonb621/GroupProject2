var db = require("../models");

module.exports = function(app) {
  app.get("/api/services", function(req, res) {
    db.Services.findAll({}).then(function(dbServices) {
      res.json(dbServices);
    });
  });

  app.post("/api/services", function(req, res) {
    db.Services.create({
      category: req.body.category,
      description: req.body.description
    }).then(function(dbServices) {
      res.json(dbServices);
    });
  });

  app.put("/api/services", function(req, res) {
    db.Services.update({
      category: req.body.category,
      description: req.body.description
      },
      {
      where: {
        id: req.body.id
      }
    }).then(function(dbServices) {
      res.json(dbServices);
    });
  });

  app.delete("/api/services/:id", function(req, res) {
    db.Services.destroy({ 
      where: { 
        id: req.params.id 
      }
    }).then(function(dbServices) {
      res.json(dbServices);
    });
  });
};
