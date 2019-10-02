$(document).ready(function (event) {
// event.preventDefault();
   

    

    // function handleServSub(event) {
    //     event.preventDefault();
    //     // Don't do anything if the name fields hasn't been filled out
    //     if (!input.val().trim().trim()) {
    //       return;
    //     }
    //     // Calling the upsertAuthor function and passing in the value of the name input
    //     addToServ({
    //       category: input
    //         .val()
    //         .trim()
    //     });
    //   }
    // function addToServ(serviceData) {
    //     $.post("/api/services", serviceData);
    //     }

        // if (!userBusiness.val().trim() || !userContact.val().trim() || !userEmail.val().trim() || !userCity.val().trim() || !userState.val().trim() || !userZip.val().trim()) {
        //     event.preventDefault();
        //     return;
        // }
        // checkbox = function(){
            

        // }
        // addToServ()
        $("#business-reg-form2").on("submit", function(event){
            event.preventDefault();
            var food = $("#food");
            var drinks = $("#drinks");
            var shelter = $("#shelter");
            var clothes = $("#clothing");
            var trans = $("#trans");
            var other = $("#other");
            // console.log(foodD);
            var foodD = $("#food-desc");
            var drinksD = $("#drinks-desc");
            var shelterD = $("#shelter-desc");
            var clothesD = $("#clothing-desc")
            var transD = $("#trans-desc");
            var otherD = $("#other-desc");

            var input = {
                food: food,
                drinks: drinks,
                shelter: shelter,
                clothes: clothes,
                trans: trans,
                other: other
            }

            $.post({
                url: '/api/services',
                contentType: 'application/json',
                data: JSON.stringify(input)

            }).then(function(response){
                console.log(response)
            });

    });
});