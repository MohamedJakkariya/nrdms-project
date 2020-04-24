$(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('.navbar').css({
        'background':'linear-gradient(45deg, #1de099, #1dc8cd)'
      });
    } else {
      $('.back-to-top').fadeOut('slow');
      $('.navbar').css({
        'background':'none'
      });
    }
  });

  // header-fixed {
  //   background: linear-gradient(45deg, #1de099, #1dc8cd);
  //   padding: 20px 0;
  //   height: 72px;
  //   transition: all 0.5s;
  // }
   // Back to top button functionality
   $('.back-to-top').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 800);

    return false;
  });

  // Initiate the wowjs animation library
  // new WOW().init();

  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

});
