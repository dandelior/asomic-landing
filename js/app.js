$(document).ready(function(){

  $('#button-menu-open').click(function(){
    $('html, body').toggleClass('lock-scroll');

    $('#main-menu').addClass('fadeIn header-slow');
    $('#button-menu-open').toggleClass('is-active');

    $('.rrss').toggleClass('active-rrss');
    $('#main-menu').toggleClass('active-menu');
    $('header.main-header').toggleClass('lock-header');
  });

  $('.active-menu a').click(function(){
    $('html, body').toggleClass('lock-scroll');

    // $('#main-menu').addClass('fadeIn header-slow');
    $('#button-menu-open').toggleClass('is-active');

    $('.rrss').toggleClass('active-rrss');
    $('#main-menu').toggleClass('active-menu');
    $('header.main-header').toggleClass('lock-header');
  });

// Scroll To
  $("#goToProyectos").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#proyectos").offset().top
    }, 2000);
    return false;
  });
  $("#goToServicios").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#servicios").offset().top-20
    }, 2000);
    return false;
  });
  $("#goToFilosofia").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#filosofia").offset().top-60
    }, 2000);
    return false;
  });
  $("#goToContacto").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contacto").offset().top
    }, 2000);
    return false;
  });

});
