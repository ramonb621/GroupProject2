$(document).ready(function () {

    $(document).on("submit", "#business-reg-form2", handleAuthorFormSubmit);

    var foodD = $("#food-desc");
    var drinksD = $("#drinks-desc");
    // var shelterD = $("#shelter-desc");
    // var clothesD = $("#clothing-desc")
    // var transD = $("#trans-desc");
    // var otherD = $("#other-desc");

    // $("#business-reg-form2").on("submit", function (event) {
    function handleAuthorFormSubmit(event) {
        event.preventDefault();
        if (document.getElementById('Food').checked) {
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
        if (document.getElementById('Drinks').checked) {
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
    }
    function addToServ(serviceData) {
        $.post("/api/services", serviceData).then(function(data){
            console.log(data);
        });
    }
    // if ("input[type='checkbox'][name='shelter']:checked") {
    //     // return $(this).val();
    //     addToServ({
    //         category: $(this).val().trim()
    //     })
    // }
    // if ("input[type='checkbox'][name='clothing']:checked") {
    //     // return $(this).val();
    //     addToServ({
    //         category: $(this).val().trim()
    //     })
    // }
    // if ("input[type='checkbox'][name='trans']:checked") {
    //     // return $(this).val();
    //     addToServ({
    //         category: $(this).val().trim()
    //     })
    // }
    // if ("input[type='checkbox'][name='other']:checked") {
    //     // return $(this).val();
    //     addToServ({
    //         category: $(this).val().trim()
    //     })
    // }
    // function addToServ(serviceData) {
    //     $.post("/api/services", serviceData);
    // }

    //     if (food && foodD.val().trim() !== "") {
    //         foodD.addClass("is-valid");
    //     } else if (food && foodD.val().trim() === "") {
    //         foodD.addClass("is-invalid");
    //         event.preventDefault();
    //     }
    //     if (drinksD.val().trim() !== "") {
    //         drinksD.addClass("is-valid");
    //     } else {
    //         drinksD.addClass("is-invalid");
    //         event.preventDefault();
    //     }
    //     if (shelterD.val().trim() !== "") {
    //         shelterD.addClass("is-valid");
    //     } else {
    //         shelterD.addClass("is-invalid");
    //         event.preventDefault();
    //     }
    //     if (clothesD.val().trim() !== "") {
    //         clothesD.addClass("is-valid");
    //     } else {
    //         clothesD.addClass("is-invalid");
    //         event.preventDefault();
    //     }
    //     if (transD.val().trim() !== "") {
    //         transD.addClass("is-valid");
    //     } else {
    //         transD.addClass("is-invalid");
    //         event.preventDefault();
    //     }
    //     if (otherD.val().trim() !== "") {
    //         otherD.addClass("is-valid");
    //     } else {
    //         otherD.addClass("is-invalid");
    //         event.preventDefault();
    //     }

    // });

});