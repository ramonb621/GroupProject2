require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/business-apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/services-apiRoutes")(app);
require("./routes/volunteer-apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

function seedServices(Services) {
  Services.create({
    category: "Food",
    description: "Provide food in case of an emergency"
  }).catch(() => {
    console.info("Already created");
  });
  Services.create({
    category: "Drinks",
    description:
      "Provide water and other beverages in case of an emergency or natural disaster"
  }).catch(() => {
    console.info("Already created");
  });
  Services.create({
    category: "Shelter",
    description:
      "Provide a safe space for shelter in case of an emergency or natural disaster"
  }).catch(() => {
    console.info("Already created");
  });
  Services.create({
    category: "Clothing",
    description: "Provide clothes in case of an emergency or natural disaster"
  }).catch(() => {
    console.info("Already created");
  });
  Services.create({
    category: "Transportation",
    description:
      "Provide transportation in case of an emergency or natural disaster"
  }).catch(() => {
    console.info("Already created");
  });
  Services.create({
    category: "Medical",
    description:
      "Provide basic medical attention in case of an emergency or natural disaster"
  }).catch(() => {
    console.info("Already created");
  });
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  seedServices(db.Services);
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
