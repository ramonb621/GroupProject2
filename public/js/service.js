// When the page loads, grab all of our businesses
$.get("/api/all", function(data) {
<<<<<<< HEAD
=======
  let creationTime = moment(data[i].created_at).format("h:mma on dddd");
>>>>>>> f917422842534da0600658799f9cf9f524c3ef1e
  console.log(data);
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
<<<<<<< HEAD
      row.append(
        "<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>"
      );
=======
      row.append("<p>At " + creationTime + "</p>");
>>>>>>> f917422842534da0600658799f9cf9f524c3ef1e

      $("#chirp-area").prepend(row);
    }
  }
});
