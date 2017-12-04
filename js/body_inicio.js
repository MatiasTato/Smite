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

  function LeerEng() {
    leer += "This page is going to show you a little bit about the life and thoughts of Matías Andrés Tato González -that's right, you're gonna read some things about me-. I'm 17 years old, I practice Calistenia, which is a sport similar to Olympic Gymnastics. I consider that I have the ability of larning things very faster, especially if they are related to math and logic. My main objective for next year is to sing up in Engineering College and to continuing on the development of all the proficiencies, such as punctuality, teamwork, etc., that I've learned over this year. When I have free time, I enjoy playing videogames and sometimes going out with friends toplay rol games on Friday's nights.";

    $(".descripcion").html(leer);
    leer = "";

    $("#mas").css({"display" : "none"});
    $("#menos").css({"display" : "block"});
  }

  $("#mas").click(function() {
    LeerMas();
  });

  $("#leerMenos").click(function() {
    LeerMenos();
  });

  $("#leerEng").click(function() {
    LeerEng();
  });
});
