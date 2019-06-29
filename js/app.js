$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("grey darken-4");
    } else {
      $("nav").removeClass("grey darken-4");
    }
  });

  $(".sidenav").sidenav();
  $(".materialboxed").materialbox();
  $(".parallax").parallax();
  $(".tabs").tabs();
});
