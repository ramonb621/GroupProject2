$(document).ready(function() {

    // var state = "CA" 
    //STATE INPUT?
    
    
    //RETURNS 1000 BY STATE BEGINNING-PRESENT DEC 31, 2018
    // var query = "https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272018-12-31T04:00:00.000z%27%20and%20state%20eq%20%27" + state+ "%27";
    //RETURNS NATIONAL INCIDENTS AFTER JUNE 31, 2019
    var query = "https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272019-06-31T04:00:00.000z%27";
    
    
    //NEWS BUTTON
    
    $.ajax({
        url: query,
        method: "GET"
      }).then(function (response) {
        // Log the resulting Object 
    
      var res = response.DisasterDeclarationsSummaries;
      for(let i = 0; i < res.length; i++){
    
        // var elem = $("<p>").attr("id", "line");
        // $(".results").append(elem.append("FEMA Disaster #: " + + res[i].disasterNumber));
    // DISPLAY FEMA INFO FROM DEC 12, 2018 - PRESENT
          $(".results").append("<br>" + "FEMA Disaster #: " + res[i].disasterNumber +"<br>" + "Incident Type: " + res[i].incidentType + "<br>" + "Incident: " + res[i].title + "<br>" + "State: " + res[i].state +"<br>" + "County: " + res[i].declaredCountyArea + "<br>" + "Disaster Declared On: " + moment(res[i].declarationDate).format('MMMM Do YYYY, h:mm:ss a') + "<br>");
        }
    
    });
    //FEMA API TO SEARCH FOR 2019 IN CA
    // https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272018-09-01T04:00:00.000z%27%20and%20state%20eq%20%27CA%27
    
    //RETURNS 1000 RESULTS IN U.S. AFTER DEC 31, 2018
    //"https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272018-12-31T04:00:00.000z%27"
    
    //https://www.fema.gov/openfema-api-documentation
    
    
    // RELIEF WEB INFO
    // https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake&preset=latest&fileds[include][]=url
});