var db = require("../models");

module.exports = function(app) {
  app.get("/api/businesses", function(req, res) {
    let where = {};
    if (req.query.state) {
      where.state = req.query.state;
    }
    if (req.query.city) {
      where.city = req.query.city;
    }
    if (req.query.zip) {
      where.zipCode = req.query.zip;
    }
    db.Business.findAll({ where }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });
<<<<<<< HEAD

=======
>>>>>>> f917422842534da0600658799f9cf9f524c3ef1e
  app.get("/api/businesses/:category", function(req, res) {
    let where = {};
    if (req.query.state) {
      where.state = req.query.state;
    }
    if (req.query.city) {
      where.city = req.query.city;
    }
    if (req.query.zip) {
      where.zipCode = req.query.zip;
    }
    db.Business.findAll({
      where,
      include: [
        {
          model: db.Services,
          where: {
            BusinessId: db.Sequelize.col("Business.id"),
            category: req.params.category
          }
        }
      ]
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  app.post("/api/businesses", function(req, res) {
    console.log(req.body);
    let Services = req.body.services.map(function(service) {
      return service.category;
    });
    db.Business.create(
      {
        businessName: req.body.business,
        contactName: req.body.contact,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zip,
        Service: Services
      },
      {
        include: [db.Services]
      }
    ).then(function(dbBusiness) {
      res.json(dbBusiness);
      // res.redirect("/regbform2");
    });
  });

  // Extra Routes
  app.put("/api/businesses", function(req, res) {
    db.Business.update(
      {
        businessName: req.body.name,
        contactName: req.body.contactName,
        email: req.body.email,
        state: req.body.state,
        city: req.body.city,
        zipCode: req.body.zipCode
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbBusiness) {
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
