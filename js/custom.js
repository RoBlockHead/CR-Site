$('#frc').hover(
  function() {
    $('#teamsb').css('background-image', "url('images/frcback.jpg')");
  }, function() {
    defaultBack();
  }
);
$('#grits').hover(
  function() {
    $('#teamsb').css('background-image', "url('images/gritsback.jpg')");
  }, function() {
    defaultBack();
  }
);
$('#best').hover(
  function() {
    $('#teamsb').css('background-image', "url('images/bestback.jpg')");
  }, function() {
    defaultBack();
  }
);
$('#ftc').hover(
  function() {
    $('#teamsb').css('background-image', "url('images/ftcback.jpg')");
  }, function() {
    defaultBack();
  }
);

function defaultBack() {
  $('#teamsb').css('background-image', "url('images/circuitrunners.jpg')");
}
