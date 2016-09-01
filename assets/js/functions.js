/*global $, alert, console*/
$(document).ready(function () {
  'use strict';

  $('.right-nav-btn, .close-menu').click(function (event) {
    event.preventDefault();

  if ($('.header').hasClass('is-open')) {
    $('.header').removeClass('is-open');
    $('.right-fixed-menu').removeClass('is-open');
    $('body > *:not(.unmove)').removeClass('is-slided');
  } else {
    $('.header').addClass('is-open');
    $('.right-fixed-menu').addClass('is-open');
    $('body > *:not(.unmove)').addClass('is-slided');
  }

  });

  // $('.testimonials').carousel();

  // Scroll To Top On Click Button
  $('.to-top .go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: '0px'
    }, 500);
  });

});

$(window).scroll(function () {
  'use strict';

  var wS = $(window).scrollTop();

  // Toggle Change Style of $header
  if (wS >= 5) {
    $('header.header').addClass('is-scrolling');
  } else {
    $('header.header').removeClass('is-scrolling');
  }

  // Toggle Show Th Up Button On $window Scrolling
  if (wS >= 500) {
    $('.to-top').addClass('is-show');
  } else {
    $('.to-top').removeClass('is-show');
  }


});
