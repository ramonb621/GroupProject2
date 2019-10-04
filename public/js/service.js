// When the page loads, grab all of our businesses
$.get("/api/all", function(data) {
  let creationTime = moment(data[i].created_at).format("h:mma on dddd");
  console.log(data);
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + creationTime + "</p>");

      $("#chirp-area").prepend(row);
    }
  }
});
