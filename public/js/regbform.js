$(document).ready(function () {

    var userBusiness = $("#business");
    var userContact = $("#contact");
    var userEmail = $("#email");
    var userCity = $("#city");
    var userState = $("#state");
    var userZip = $("#zip");

    $("#business-reg-form").on("submit", function (event) {
        // if (!userBusiness.val().trim() || !userContact.val().trim() || !userEmail.val().trim() || !userCity.val().trim() || !userState.val().trim() || !userZip.val().trim()) {
        //     event.preventDefault();
        //     return;
        // }
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
            userState.addClass("is-valid").removeClass("is-invalid");
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
        
            var n = states.length;
            function ac(value) {
                document.getElementById('datalist').innerHTML = '';
                l = value.length;
                for (var i = 0; i < n; i++) {
                    if (((states[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
                        var node = document.createElement("option");
                        var val = document.createTextNode(states[i]);
                        node.appendChild(val);
        
                        document.getElementById("datalist").appendChild(node);
                    }
                }
            }
        }
        if (userZip.val().trim()) {
            userZip.addClass("is-valid").removeClass("is-invalid");
        }

    });
});