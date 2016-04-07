
$(document).ready(function() {

  var intervalDuration = 6000;
  var intervalId = setInterval(exposeFiles, intervalDuration);

  function exposeFiles () {
    $.ajax({
        url: "http://localhost:9082/assets"
    }).then(function(data) {
      console.debug(data);

      if (!data.content.length) {
          $(".expose-content").replaceWith("<h5 class='expose-content'>Vault is empty...</h5>");
          return;
      }

      var tmp = "<ul class='list-group expose-content'>";

      for(datum of data.content) {
        tmp += "<li class='list-group-item'><span class='badge'>" + (datum.price / 1024).toFixed(1) + " KB</span><a href='http://localhost:9082/assets/" + datum.id + "' target='_blank'>" + datum.fileName + "</a></li>"
      }

      tmp += "</ul>";

      $(".expose-content").replaceWith(tmp);
    });
  }

  $("#search-text").keypress(function (e) {
    if (e.which == 13) {
      $("#search-button").click();
      return false;
    }
  });

  $("#search-button").click(function() {
    if (intervalId !== undefined) {
      clearInterval(intervalId);
      intervalId = undefined;
    }

    var query = $("#search-text").val().trim();

    if (!query || query.length === 0) {
      intervalId = setInterval(exposeFiles, intervalDuration);
      alert("Please enter a valid search query.");
      $("#search-text").focus();
      return;
    }

    $(".expose-content").replaceWith("<h5 class='expose-content'>Searching vault...</h5>");

    $.ajax({
        url: "http://localhost:9088/search?userId=" + encodeURIComponent(query)
    }).then(function(data) {
      console.debug(data);

      if (data.length === 0) {
        $(".expose-content").replaceWith("<h5 class='expose-content'>Sorry nothing matches <b>" + encodeURIComponent(query) + "</b> in the vault...</h5>");
        intervalId = setInterval(exposeFiles, intervalDuration);
        return;
      }

      var tmp = "<ul class='list-group expose-content'>";

      for(datum of data) {
        tmp += "<li class='list-group-item'><span class='badge'>" + (datum.price / 1024).toFixed(1) + " KB</span><a href='http://localhost:9082/assets/" + datum.id + "' target='_blank'>" + datum.fileName + "</a></li>"
      }

      tmp += "</ul>";

      $(".expose-content").replaceWith(tmp);
    });

    $("#search-text").focus();
  });

  $("#clear-button").click(function() {
    if (intervalId === undefined) {
      intervalId = setInterval(exposeFiles, intervalDuration);
    }

    $("#search-text").val("");
    $("#search-text").focus();
    exposeFiles();
  });

  exposeFiles();

});
