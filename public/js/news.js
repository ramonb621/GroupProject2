$(document).ready(function() {
  var images = {
    storm: "https://image.flaticon.com/icons/svg/263/263884.svg",
    earthquake: "https://image.flaticon.com/icons/svg/645/645712.svg",
    fire: "https://image.flaticon.com/icons/svg/599/599502.svg",
    flood: "https://image.flaticon.com/icons/svg/1098/1098150.svg",
    hurricane: "https://image.flaticon.com/icons/png/512/2120/2120367.png",
    tornadoes: "https://image.flaticon.com/icons/svg/284/284431.svg"
  };

  //RETURNS NATIONAL INCIDENTS AFTER JUNE 31, 2019
  var query =
    "https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272019-06-31T04:00:00.000z%27";

  //NEWS BUTTON

  $.ajax({
    url: query,
    method: "GET"
  }).then(function(response) {
    var res = response.DisasterDeclarationsSummaries;
    for (let i = 0; i < res.length; i++) {
      var icon = "";
      for (key in images) {
        if (res[i].incidentType.toLowerCase().includes(key.toLowerCase())) {
          icon = images[key];
        }
        console.log(i, key, res[i].incidentType, icon);
      }
      //
      // var elem = $("<p>").attr("id", "line");
      // $(".results").append(elem.append("FEMA Disaster #: " + + res[i].disasterNumber));
      // DISPLAY FEMA INFO FROM DEC 12, 2018 - PRESENT
      // $(".results").append("<br>" + "FEMA Disaster #: " + res[i].disasterNumber +"<br>" + "Incident Type: " + res[i].incidentType + "<br>" + "Incident: " + res[i].title + "<br>" + "State: " + res[i].state +"<br>" + "County: " + res[i].declaredCountyArea + "<br>" + "Disaster Declared On: " + moment(res[i].declarationDate).format('MMMM Do YYYY, h:mm:ss a') + "<br>");
      const resDeclarationDate = moment(res[i].declarationDate).format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      $("#bodynews").prepend(`
          <tr>
              <td>${resDeclarationDate}</td>
              <td>${res[i].state}</td>
              <td>${res[i].declaredCountyArea}</td>
              <td>${res[i].title}</td>
              <td><img src=${icon} height="30" width="30"></td>
          </tr>`);
    }
  });

  // });
  //FEMA API TO SEARCH FOR 2019 IN CA
  // https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272018-09-01T04:00:00.000z%27%20and%20state%20eq%20%27CA%27

  //RETURNS 1000 RESULTS IN U.S. AFTER DEC 31, 2018
  //"https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272018-12-31T04:00:00.000z%27"

  //https://www.fema.gov/openfema-api-documentation

  // RELIEF WEB INFO
  // https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake&preset=latest&fileds[include][]=url
});
