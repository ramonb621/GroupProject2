$(document).ready(function () {


    var food = $("#food");
    var drinks = $("#drinks");
    var shelter = $("#shelter");
    var clothes = $("#clothing");
    var trans = $("#trans");
    var other = $("#other");

    var foodD = $("#food-desc");
    var drinksD = $("#drinks-desc");
    var shelterD = $("#shelter-desc");
    var clothesD = $("#clothing-desc")
    var transD = $("#trans-desc");
    var otherD = $("#other-desc");

    $("#business-reg-form2").on("submit", function(event){
        // if (!userBusiness.val().trim() || !userContact.val().trim() || !userEmail.val().trim() || !userCity.val().trim() || !userState.val().trim() || !userZip.val().trim()) {
        //     event.preventDefault();
        //     return;
        // }
        if("input[type='checkbox'][name='food']:checked") {
            return true;
        }
        if("input[type='checkbox'][name='drinks']:checked") {
            return true;
        }
        if("input[type='checkbox'][name='shelter']:checked") {
            return true;
        }
        if("input[type='checkbox'][name='clothing']:checked") {
            return true;
        }
        if("input[type='checkbox'][name='trans']:checked") {
            return true;
        }
        if("input[type='checkbox'][name='other']:checked") {
            return true;
        }

        if(food && foodD.val().trim() !== ""){
            foodD.addClass("is-valid");
        } else if (food && foodD.val().trim() === ""){
            foodD.addClass("is-invalid");
            event.preventDefault();
        }
        if(drinksD.val().trim() !== ""){
            drinksD.addClass("is-valid");
        } else {
            drinksD.addClass("is-invalid");
            event.preventDefault();
        }
        if(shelterD.val().trim() !== ""){
            shelterD.addClass("is-valid");
        } else {
            shelterD.addClass("is-invalid");
            event.preventDefault();
        }
        if(clothesD.val().trim() !== ""){
            clothesD.addClass("is-valid");
        } else {
            clothesD.addClass("is-invalid");
            event.preventDefault();
        }
        if(transD.val().trim() !== ""){
            transD.addClass("is-valid");
        } else {
            transD.addClass("is-invalid");
            event.preventDefault();
        }
        if(otherD.val().trim() !== ""){
            otherD.addClass("is-valid");
        } else {
            otherD.addClass("is-invalid");
            event.preventDefault();
        }
        // if (!userBusiness.val().trim()){
        //     userBusiness.addClass("is-invalid");
        //     event.preventDefault();
        // }else if(!userContact.val().trim()){
        //     userContact.addClass("is-invalid");
        //     event.preventDefault();
        // }else if(!userEmail.val().trim()){
        //     userEmail.addClass("is-invalid");
        //     event.preventDefault();
        // }else if(!userCity.val().trim()){
        //     userCity.addClass("is-invalid");
        //     event.preventDefault();
        // }else if(!userState.val().trim()){
        //     userState.addClass("is-invalid");
        //     event.preventDefault();
        // }else if(!userZip.val().trim()){
        //     userZip.addClass("is-invalid");
        //     event.preventDefault();
        // }

        // if (userBusiness.val().trim()){
        //     userBusiness.addClass("is-valid").removeClass("is-invalid");
        // }
        // if(userContact.val().trim()){
        //     userContact.addClass("is-valid").removeClass("is-invalid");
        // }
        // if(userEmail.val().trim()){
        //     userEmail.addClass("is-valid").removeClass("is-invalid");
        // }
        // if(userCity.val().trim()){
        //     userCity.addClass("is-valid").removeClass("is-invalid");
        // }
        // if(userState.val().trim()){
        //     userState.addClass("is-valid").removeClass("is-invalid");
        // }
        // if(userZip.val().trim()){
        //     userZip.addClass("is-valid").removeClass("is-invalid");
        // }

    });
});