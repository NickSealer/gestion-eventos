$(function(){
  'use strict';

  $('#login-form').submit(function(e){
    e.preventDefault();
    var user = $('#usuario').val();
    var pass = $('#password').val();

    if (user == "manager" && pass == "admin123456") {
      setTimeout(function(){
        window.location.href = "admin/index.html";
      }, 3000)
      login_success();
    } else {
      login_fail();
    }
  });

  function login_success(){
    if ($('#fail').length) {
      $('#fail').remove();
    }
    $('#password').after("<div class='text-center'><br><div class='spinner-border text-success' role='status'><span class='sr-only'>Loading...</span></div></div>")
    $('#login').text('');
    $('#login').append("<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>Loading...")
  }

  function login_fail(){
    if ($('#fail').length) {
      $('#fail').remove();
    }
    $('#password').after("<div id='fail' class='text-center'><br><div class='alert alert-danger' role='alert'>" +
                          "Datos incorrectos.</div></div>");
  }

  if ($("#academicos").length) {
    var query = window.location.search.replace("?query=", "");
    var title = $("#academicos").text() + query;
    $("#academicos").text(title);
  }

  $('#search-form button').click(function(){
    window.location.href = "results.html?query=" + $('#search-form input').val();
  });


  $("#search-form button").addClass("not_continue");
  $("#search-form input").on("keydown", function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
    }
    check_search();
  })

  function check_search(){
    if ($("#search-form input").val().length >= 3) {
      $("#search-form button").removeClass("not_continue");
    } else {
      $("#search-form button").addClass("not_continue");
    }
  }

});
