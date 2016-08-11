
var hello = function(){
  $(this).toggleClass('on').toggleClass('off');

  if ($(this).hasClass('on') ) {
    $('.status').text("It's so bright in here");
  }
  else {
    $('.status').text("Who turned off the lights?");
  }

  // Store body, don't keep looking it up
  var $body = $('body');

  var bodyBg = $body.css('background-color');
  var textCl = $body.css('color');

  $body.css('background-color', textCl);
  $body.css('color', bodyBg);

};

$('.switch>button').on('click', hello);
