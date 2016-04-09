
$(document).ready(function() {

  var services = null;
  var wabiServicesData = [];
  var intervalDuration = 30000;
  var intervalId = setInterval(updateStatus, intervalDuration);

  var template = $.templates("#wabiServicesTemplate");
  template.link("#wabiServicesContainer", wabiServicesData);

  function updateServiceStatus (service) {
    $.ajax({
        url: service + "/info"
    }).then(function(data) {
      $.observable(wabiServicesData).insert(data);
    });
  }

  function updateWabiStatus() {
    for (service of services.wabiServices) {
      $.observable(wabiServicesData).remove(0);
      updateServiceStatus(service);
    }

    console.log(wabiServicesData);
  }

  function updateSabiStatus() {
  }

  function updateStatus () {
    updateWabiStatus();
    updateSabiStatus();
  }

  $('.closeall').click(function(){
    $('.panel-collapse.in')
      .collapse('hide');
  });
  $('.openall').click(function(){
    $('.panel-collapse:not(".in")')
      .collapse('show');
  });

  $.getJSON("status.json", function(json) {
    console.log(json);
    services = json;
    updateStatus();
  });

});
