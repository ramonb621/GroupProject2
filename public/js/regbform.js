$(document).ready(function() {
<<<<<<< HEAD
  $("#form").parsley();
=======
>>>>>>> f917422842534da0600658799f9cf9f524c3ef1e
  var userBusiness = $("#business");
  var userContact = $("#contact");
  var userEmail = $("#email");
  var userCity = $("#city");
  var userState = $("#state");
  var userZip = $("#zip");

<<<<<<< HEAD
  $("#business-reg-form").on("submit", function(event) {
    // if (!userBusiness.val().trim() || !userContact.val().trim() || !userEmail.val().trim() || !userCity.val().trim() || !userState.val().trim() || !userZip.val().trim()) {
    //     event.preventDefault();
    //     return;
    // }
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
    // If User didn't insert an input
=======
  $(document).on("submit", "#business-reg-form", handleAuthorFormSubmit);
  // Business Registration
  var userBusiness = $("#business");
  var userContact = $("#contact");
  var userEmail = $("#email");
  var userCity = $("#city");
  var userState = $("#state");
  var userZip = $("#zip");
  // Services
  var foodD = $("#food-desc");
  var drinksD = $("#drinks-desc");
  var shelterD = $("#shelter-desc");
  var clothesD = $("#clothing-desc");
  var transD = $("#trans-desc");
  var otherD = $("#other-desc");
  // State Dropdown
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
  // Obj Data
  var allServices = [];
  var regData = {};

  // $("#business-reg-form").on("submit", function (event) {
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // If User didn't insert an input for Registration
>>>>>>> f917422842534da0600658799f9cf9f524c3ef1e
    if (!userBusiness.val().trim()) {
      userBusiness.addClass("is-invalid");
      event.preventDefault();
    } else if (!userContact.val().trim()) {
      userContact.addClass("is-invalid");
      event.preventDefault();
    } else if (!userEmail.val().trim()) {
      userEmail.addClass("is-invalid");
      event.preventDefault();
    } else if (!userCity.val().trim()) {
      userCity.addClass("is-invalid");
      event.preventDefault();
    } else if (!userState.val().trim()) {
      userState.addClass("is-invalid");
      event.preventDefault();
    } else if (!userZip.val().trim()) {
      userZip.addClass("is-invalid");
      event.preventDefault();
    }
<<<<<<< HEAD
    // If User Entered the Input
    if (userBusiness.val().trim()) {
      userBusiness.addClass("is-valid").removeClass("is-invalid");
    }
    if (userContact.val().trim()) {
      userContact.addClass("is-valid").removeClass("is-invalid");
    }
    if (userEmail.val().trim()) {
      userEmail.addClass("is-valid").removeClass("is-invalid");
    }
    if (userCity.val().trim()) {
      userCity.addClass("is-valid").removeClass("is-invalid");
    }
    if (userState.val().trim()) {
      if (states.indexOf(userState.val().trim()) !== -1) {
=======
    // If User Entered the Input for Registration
    if (userBusiness.val().trim()) {
      userBusiness.addClass("is-valid").removeClass("is-invalid");
      regData.business = userBusiness.val().trim();
    }
    if (userContact.val().trim()) {
      userContact.addClass("is-valid").removeClass("is-invalid");
      regData.contact = userContact.val().trim();
    }
    if (userEmail.val().trim()) {
      if (emailIsValid(userEmail.val().trim()) === false) {
        userEmail.addClass("is-invalid");
        event.preventDefault();
      } else {
        userEmail.addClass("is-valid").removeClass("is-invalid");
        regData.email = userEmail.val().trim();
      }
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
>>>>>>> f917422842534da0600658799f9cf9f524c3ef1e
        userState.addClass("is-valid").removeClass("is-invalid");
      } else {
        userState.addClass("is-invalid");
        event.preventDefault();
      }
    }
    if (userZip.val().trim()) {
<<<<<<< HEAD
      userZip.addClass("is-valid").removeClass("is-invalid");
    }
  });
=======
      if (userZip.val().trim().length !== 5 || isNaN(userZip.val().trim())) {
        userZip.addClass("is-invalid");
        event.preventDefault();
      } else {
        userZip.addClass("is-valid").removeClass("is-invalid");
        regData.zip = userZip.val().trim();
      }
    }
    // Services Check
    if (document.getElementById("Food").checked) {
      if (!foodD.val().trim()) {
        foodD.addClass("is-invalid");
        event.preventDefault();
      } else {
        var food = {
          category: $("#Food").attr("value"),
          description: foodD.val().trim()
        };
        addToServ(food);
        allServices.push(food);
      }
    }
    if (document.getElementById("Drinks").checked) {
      if (!drinksD.val().trim()) {
        drinksD.addClass("is-invalid");
        event.preventDefault();
      } else {
        var drinks = {
          category: $("#Drinks").attr("value"),
          description: drinksD.val().trim()
        };
        addToServ(drinks);
        allServices.push(drinks);
      }
    }
    if (document.getElementById("Shelter").checked) {
      if (!shelterD.val().trim()) {
        shelterD.addClass("is-invalid");
        event.preventDefault();
      } else {
        var shelter = {
          category: $("#Shelter").attr("value"),
          description: shelterD.val().trim()
        };
        addToServ(shelter);
        allServices.push(shelter);
      }
    }
    if (document.getElementById("Clothing").checked) {
      if (!clothesD.val().trim()) {
        clothesD.addClass("is-invalid");
        event.preventDefault();
      } else {
        var clothing = {
          category: $("#Clothing").attr("value"),
          description: clothesD.val().trim()
        };
        addToServ(clothing);
        allServices.push(clothing);
      }
    }
    if (document.getElementById("Transportation").checked) {
      if (!transD.val().trim()) {
        transD.addClass("is-invalid");
        event.preventDefault();
      } else {
        var transportation = {
          category: $("#Transportation").attr("value"),
          description: transD.val().trim()
        };
        addToServ(transportation);
        allServices.push(transportation);
      }
    }
    if (document.getElementById("Other").checked) {
      if (!otherD.val().trim()) {
        otherD.addClass("is-invalid");
        event.preventDefault();
      } else {
        var other = {
          category: $("#Other").attr("value"),
          description: otherD.val().trim()
        };
        addToServ(other);
        allServices.push(other);
      }
    }
    // if (allServices === []) {
    //     event.preventDefault();
    //     foodD.addClass("is-invalid");
    //     drinksD.addClass("is-invalid");
    //     shelterD.addClass("is-invalid");
    //     transD.addClass("is-invalid");
    //     otherD.addClass("is-invalid");
    // } else {
    // Add allServices into regData obj to pass into our creating row
    regData.services = allServices;
    console.log(regData);
    addToBusiness(regData);
    // }
  }

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  // Front-end ajax call to create Business Table in the back-end
  function addToBusiness(userData) {
    $.post("/api/businesses", userData).then(function(data) {
      console.log(data);
    });
  }
  // Front-end ajax call to
  function addToServ(serviceData) {
    $.post("/api/services", serviceData).then(function(data) {
      console.log(data);
    });
  }
>>>>>>> f917422842534da0600658799f9cf9f524c3ef1e
});
