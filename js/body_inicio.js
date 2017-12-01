$(document).ready(function(){

  var leer = "";

  function LeerMas() {
    leer += "Esta página te va a contar un poco sobre la vida y la forma de pensar de Matías Andrés Tato González - sí, estas en lo correcto, esa persona soy yo -. Tengo 17 años, voy al club a hacer Calistenia, un deporte semejante a la gimnasia olímpica, considero que tengo facilidad para aprender cosas nuevas, sobre todo las que estén relacionadas con la lógica y la matemática. Mi principal objetivo para el 2018 es anotarme en alguna carrera de grado de la Facultad de Ingeniería y continuar desarrollando las competencias sobre las cuales aprendí este año como la puntualidad, el trabajo en equipo, etc. Cuando tengo tiempo libre me gusta jugar algún juego ya sea de computadora o ceulular y salir a jugar rol algún que otro viernes por la noche.";

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

  $("#leerMenos").click(function() {
    LeerMenos();
  });
});
