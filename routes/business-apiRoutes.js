var db = require("../models");

module.exports = function(app) {
  app.get("/api/businesses", function(req, res) {
    db.Business.findAll({}).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });
/// JOIN both tables based on the GEO DATA 
// app.get("/api/businesses/services", function(req, res) {
//   let where = {};
//   if (req.query.state) {
//     where.state = req.query.state;
//   }
//   if (req.query.city) {
//     where.city = req.query.city;
//   }
//   if (req.query.zip) {
//     where.zipCode = req.query.zip;
//   }
//   db.Business.findAll({ where }).then(function(dbBusiness) {
    
// });
///

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
      where: {
        state: req.params.state
      }
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  app.get("api/businesses/:city", function(req, res) {
    db.Business.findAll({
      where: {
        city: req.params.city
      }
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  app.get("api/businesses/:zip", function(req, res) {
    db.Business.findAll({
      where: {
        zipCode: req.params.zip
      }
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  app.post("/api/businesses", function(req, res) {
    console.log(req.body);
    db.Business.create({
      businessName: req.body.business,
      contactName: req.body.contact,
      email: req.body.email,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zip
    }).then(function(dbBusiness) {
      // res.json(dbBusiness);
      res.redirect("/regbform2");
    });
  });

  // Extra Routes
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
