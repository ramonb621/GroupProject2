var path = require("path");

// ROUTES
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/regbform", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/regbform.html"));
  });

  app.get("/regbform2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/regbform2.html"));
  });

  app.get("/regvform", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/regvform.html"));
  });

  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/services.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
  });

  app.get("/news", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/news.html"));
  });
};
