$(document).ready(function(){
  function mostrarCompetencias() {
    $("#competencias").css({"display" : "block"});
    $("#competencias").animate({opacity : "1"});
  }

  function mostrarDesarrollo() {
    $("#Desarrollo").css({"display" : "block"});
    $("#Desarrollo").animate({opacity : "1"});
  }

  function mostrarEntrevistas() {
    $("#Entrevistas").css({"display" : "block"});
    $("#Entrevistas").animate({opacity : "1"});
  }

  function mostrarTrabajo() {
    $("#Trabajo").css({"display" : "block"});
    $("#Trabajo").animate({opacity : "1"});
  }

  function mostrarInicio() {
    $("#competencias").animate({opacity : "0"});
    $("#competencias").css({"display" : "none"});
    $("#Desarrollo").animate({opacity : "0"});
    $("#Desarrollo").css({"display" : "none"});
    $("#Entrevistas").animate({opacity : "0"});
    $("#Entrevistas").css({"display" : "none"});
    $("#Trabajo").animate({opacity : "0"});
    $("#Trabajo").css({"display" : "none"});
  }

  $("#mostrarCompetencias").click(function(){
    mostrarInicio();
    mostrarCompetencias();
  });

  $("#mostrarDesarrollo").click(function(){
    mostrarInicio();
    mostrarDesarrollo();
  });

  $("#mostrarEntrevistas").click(function(){
    mostrarInicio();
    mostrarEntrevistas();
  });

  $("#mostrarTrabajo").click(function(){
    mostrarInicio();
    mostrarTrabajo();
  });

  $("#mostrarInicio").click(function(){
    mostrarInicio();
  });
});
