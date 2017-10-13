$(document).ready(function(){
  function navBarOn() {
    $("#navbar-example2").animate({opacity : "1.0"}, "fast");
  }

  function navBarOff() {
    $("#navbar-example2").animate({opacity : "0.2"}, "fast");
  }

  $("#navbar-example2").mouseenter(function(){
    navBarOn();
  });

  $("#navbar-example2").mouseleave(function(){
    navBarOff();
  });
});
