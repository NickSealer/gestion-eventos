$(function(){
  'use strict';

  $("#create-event").submit(function(e){
    e.preventDefault();
    setTimeout(function(){
      $('#close-modal').click();
      location.reload();
    }, 2000);
    var name = $('#create-event #name').val();
    $('#create-event #event-image').after("<div class='text-center'><br><div class='alert alert-success' role='alert'>" +
                                        "<div class='d-flex align-items-center'><strong>Creando evento " + name + "...</strong>" +
                                        "<div class='spinner-border ml-auto' role='status' aria-hidden='true'></div></div></div>");
  });

  $('#edit-event').submit(function(e){
    e.preventDefault();
    setTimeout(function(){
      location.reload();
    }, 1500)
    var name = $('#edit-event #name').val();
    $('#edit-event #event-image').after("<div class='text-center'><br><div class='alert alert-success' role='alert'>" +
                                        "<div class='d-flex align-items-center'><strong>Actualizando evento " + name + "...</strong>" +
                                        "<div class='spinner-border ml-auto' role='status' aria-hidden='true'></div></div></div>");
  });

  $('#edit-event-tecnico').submit(function(e){
    e.preventDefault();
    setTimeout(function(){
      location.reload();
    }, 1500)
    var name = $('#edit-event-tecnico #name').val();
    $('#edit-event-tecnico #event-image').after("<div class='text-center'><br><div class='alert alert-success' role='alert'>" +
                                                "<div class='d-flex align-items-center'><strong>Actualizando evento " + name + "...</strong>" +
                                                "<div class='spinner-border ml-auto' role='status' aria-hidden='true'></div></div></div>");
  });

  $('#delete-event').submit(function(e){
    e.preventDefault();
    setTimeout(function(){
      location.reload();
    }, 1000);
    $('#delete-event .modal-body').text('');
    $('#delete-event .modal-body').append("<div class='alert alert-danger' role='alert'>" +
                                          "<div class='d-flex align-items-center'><strong>Eliminando evento...</strong>"+
                                          "<div class='spinner-border ml-auto' role='status' aria-hidden='true'></div></div></div>")
  });

  $('#logout').click(function(){
    setTimeout(function(){
      window.location.href = "../index.html";
    }, 2000);
  });

  if ($("#academicos").length) {
    var query = window.location.search.replace("?query=", "");
    var title = $("#academicos").text() + query;
    $("#academicos").text(title);
  }

  $('#search-form button').click(function(){
    window.location.href = "results.html?query=" + $('#search-form input').val();
  });

  $('.validate_field').on("keyup", function(){
    check_data();
  });

  $("#search-form button").addClass("not_continue");
  $("#search-form input").on("keydown", function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
    }
    check_search();
  })

  function check_data(){
    var name_validated = check_name();
    var city_validated = check_city();
    var description_validated = check_description();

    if (name_validated && city_validated && description_validated) {
      $('#send-data').removeClass('not_continue');
    } else {
      $('#send-data').addClass('not_continue');
    }
  }

  function check_name(){
    if ($('#name').length) {
      if ($('#name').val().length >= 3) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function check_city(){
    if ($('#city').length) {
      if ($('#city').val().length > 3) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function check_description(){
    if ($('#description').length) {
      if ($('#description').val().length > 10) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function check_search(){
    // $('.toast').toast('show')
    if ($("#search-form input").val().length >= 3) {
      $("#search-form button").removeClass("not_continue");
    } else {
      $("#search-form button").addClass("not_continue");
    }
  }

});
