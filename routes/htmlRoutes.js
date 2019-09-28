var path = require("path");

// ROUTES
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"));
  });

  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });

  // I DON'T KNOW IF YOU GUYS WANT TO INCLUDE A NEWS PAGE BUT HERE'S A PATH JUST IN CASE
  // app.get("/news", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/news.html"));
  // });
};
