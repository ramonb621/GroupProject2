$(document).ready(function() {
  $(document).on("submit", "#business-reg-form2", handleAuthorFormSubmit);
  // $("#business-reg-form2").on("submit", function (event) {});

  var foodD = $("#food-desc");
  var drinksD = $("#drinks-desc");
  var shelterD = $("#shelter-desc");
  var clothesD = $("#clothing-desc");
  var transD = $("#trans-desc");
  var otherD = $("#other-desc");

  function handleAuthorFormSubmit(event) {
    event.preventDefault();
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
      }
    }

    $("#Food").val("");
    $("#Drinks").val("");
    $("#Shelter").val("");
    $("#Clothing").val("");
    $("#Transportation").val("");
    $("#Other").val("");

    $("#regbform2").empty();
    $("#regbform2").append(
      "<p id='confirm'><b> We've received your form. Thank you!</b></p>"
    );
    $("#regbform2").append(
      "<a href='/'><button class='btn btn-info' type='submit'>HOME</button></a>"
    );
  }

  function addToServ(serviceData) {
    $.post("/api/services", serviceData).then(function (data) {
      console.log(data);
    });
  }
});
