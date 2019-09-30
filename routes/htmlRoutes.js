var path = require("path");

// ROUTES
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/regbform", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/regbform.html"));
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

  // I DON'T KNOW IF YOU GUYS WANT TO INCLUDE A NEWS PAGE BUT HERE'S A PATH JUST IN CASE
  // app.get("/news", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/news.html"));
  // });
};
