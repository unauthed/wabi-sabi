
$(document).ready(function() {

  var intervalDuration = 6000;
  var intervalId = setInterval(updateStatus, intervalDuration);

  function updateStatus () {
    $.ajax({
        url: "//" + location.host + ":9081/info"
    }).then(function(data) {
      console.debug(data);

      if (!data.content.length) {
          $(".expose-content").replaceWith("<h5 class='expose-content'>Service not responding...</h5>");
          return;
      }

      var tmp = "<ul class='list-group expose-content'>";

      for(datum of data.content) {
        tmp += "<li class='list-group-item'><span class='badge' title='" + datum.price + " Bytes'>" + bytesToSize(datum.price) + "</span><a href='//" + location.host + ":9082/assets/" + datum.id + "' target='_blank'>" + datum.fileName + "</a></li>"
      }

      tmp += "</ul>";

      $(".expose-content").replaceWith(tmp);
    });
  }

  updateStatus();

});
