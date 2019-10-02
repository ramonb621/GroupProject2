var db = require("../models");

module.exports = function(app) {
  app.get("/api/services", function(req, res) {
    db.Services.findAll({}).then(function(dbServices) {
      res.json(dbServices);
    });
  });

  app.get("api/services/:category", function(req, res) {
    db.Services.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbServices) {
      res.json(dbServices);
    });
  });

  app.get("api/services/:description", function(req, res) {
    db.Services.findAll({
      where: {
        description: req.params.description
      }
    }).then(function(dbServices) {
      res.json(dbServices);
    });
  });
  // WILL WORK ON THIS WHEN FRONT-END IS DONE
  app.get("api/services", function(req, res) {
    var query = {};
    if (req.query.business_service_id) {
      query.BusinessId = req.query.author_id;
    }
    db.Services.findAll({
      where: query,
      include: [db.Business]
    }).then(function(dbServices) {
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
    db.Services.update(
      {
        category: req.body.category,
        description: req.body.description
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbServices) {
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
