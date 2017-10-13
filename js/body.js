$(document).ready(function(){
  var leer = "";

  $('.parallax1').parallax({imageSrc: '../Smite/Img/Matematica.jpg'});
  $('.parallax2').parallax({imageSrc: '../Smite/Img/Matematica2.jpg'});

  function LeerMas() {
    leer += "Esta página te va a contar un poco sobre la vida y la forma de pensar de Matías Andrés Tato González - sí, estas en lo correcto, esa persona soy yo -. Tengo 17 años (nací el 11/1/2000), a parte del curso de jóvenes a programar estudio en el liceo Zorrilla, en este momento estoy cursando sexto de ingeniería. También voy al gimnasio a hacer MMA y boxeo cuando los tiempos del liceo me dejan. Para distraerme me gusta jugar Smite, Clash of  Clans y ocasionalmente salgo algún viernes a jugar rol.";

    $(".descripcion").html(leer);
    leer = "";

    $("#mas").css({"display" : "none"});
    $("#menos").css({"display" : "block"});
  }

  function LeerMenos() {
    leer += "Esta página te va a contar un poco sobre la vida y la forma de pensar de Matías Andrés Tato González - sí, estas en lo correcto, esa persona soy yo -.";

    $(".descripcion").html(leer);
    leer = "";

    $("#mas").css({"display" : "block"});
    $("#menos").css({"display" : "none"});
  }

  $("#mas").click(function() {
    LeerMas();
  });

  $("#menos").click(function() {
    LeerMenos();
  });
});
