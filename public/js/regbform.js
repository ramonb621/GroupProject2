$(document).ready(function() {
  var userBusiness = $("#business");
  var userContact = $("#contact");
  var userEmail = $("#email");
  var userCity = $("#city");
  var userState = $("#state");
  var userZip = $("#zip");

  $("#business-reg-form").on("submit", function(event) {
        // if (!userBusiness.val().trim() || !userContact.val().trim() || !userEmail.val().trim() || !userCity.val().trim() || !userState.val().trim() || !userZip.val().trim()) {
        //     event.preventDefault();
        //     return;
        // }
    if (!userBusiness.val().trim()){
        userBusiness.addClass("is-invalid");
        event.preventDefault();
        } else if(!userContact.val().trim()){
            userContact.addClass("is-invalid");
            event.preventDefault();
        } else if(!userEmail.val().trim()){
            userEmail.addClass("is-invalid");
            event.preventDefault();
        } else if(!userCity.val().trim()){
            userCity.addClass("is-invalid");
            event.preventDefault();
        }else if(!userState.val().trim()){
            userState.addClass("is-invalid");
            event.preventDefault();
        } else if(!userZip.val().trim()){
            userZip.addClass("is-invalid");
            event.preventDefault();
        }

        if (userBusiness.val().trim()){
            userBusiness.addClass("is-valid").removeClass("is-invalid");
        }
        if(userContact.val().trim()){
            userContact.addClass("is-valid").removeClass("is-invalid");
        }
        if(userEmail.val().trim()){
            userEmail.addClass("is-valid").removeClass("is-invalid");
        }
        if(userCity.val().trim()){
            userCity.addClass("is-valid").removeClass("is-invalid");
        }
        if(userState.val().trim()){
            userState.addClass("is-valid").removeClass("is-invalid");
        }
        if(userZip.val().trim()){
            userZip.addClass("is-valid").removeClass("is-invalid");
        }

    });
});