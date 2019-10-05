$(document).ready(function() {
  // When the page loads, grab all of our businesses
  // $.get("/api/all", function(data) {
  //   let creationTime = moment(data[i].created_at).format("h:mma on dddd");
  //   console.log(data);
  //   if (data.length !== 0) {
  //     for (var i = 0; i < data.length; i++) {
  //       var row = $("<div>");
  //       row.addClass("chirp");

  //       row.append("<p>" + data[i].author + " chirped.. </p>");
  //       row.append("<p>" + data[i].body + "</p>");
  //       row.append("<p>At " + creationTime + "</p>");

  //       $("#chirp-area").prepend(row);
  //     }
  //   }
  // });
  var userCity = $("#city");
  var userState = $("#state");
  var userZip = $("#zip");

  $(document).on("submit", "#service-form", handleAuthorFormSubmit);
  var desiredService = $("#service");
  var servies = [
    "Food",
    "Drinks",
    "Shelter",
    "Clothing",
    "Transportation",
    "Other"
  ];

  var states = [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MP",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UM",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
  ];

  // var allServices = [];
  var regData = {};

  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // If User didn't insert an input for Registration
    if (!userCity.val().trim()) {
      userCity.addClass("is-invalid");
      event.preventDefault();
    } else if (!userState.val().trim()) {
      userState.addClass("is-invalid");
      event.preventDefault();
    } else if (!userZip.val().trim()) {
      userZip.addClass("is-invalid");
      event.preventDefault();
    }

    if (userCity.val().trim()) {
      if (!isNaN(userCity.val().trim())) {
        userCity.addClass("is-invalid");
        event.preventDefault();
      } else {
        userCity.addClass("is-valid").removeClass("is-invalid");
        regData.city = userCity.val().trim();
      }
    }

    if (userState.val().trim()) {
      if (states.indexOf(userState.val().trim()) !== -1) {
        regData.state = userState.val().trim();
        userState.addClass("is-valid").removeClass("is-invalid");
      } else {
        userState.addClass("is-invalid");
        event.preventDefault();
      }
    }

    if (userZip.val().trim()) {
      if (userZip.val().trim().length !== 5 || isNaN(userZip.val().trim())) {
        userZip.addClass("is-invalid");
        event.preventDefault();
      } else {
        userZip.addClass("is-valid").removeClass("is-invalid");
        regData.zip = userZip.val().trim();
      }
    }

    if (desiredService.val().trim()) {
      if (servies.indexOf(desiredService.val().trim()) !== -1) {
        regData.state = desiredService.val().trim();
        desiredService.addClass("is-valid").removeClass("is-invalid");
      } else {
        desiredService.addClass("is-invalid");
        event.preventDefault();
      }
    }
  }
});

app.get("/api/businesses", function(req, res) {
  db.Business.findAll({
    include: [
      {
        model: db.Services
      }
    ]
  }).then(function(dbBusiness) {
    res.json(dbBusiness);
  });
});
