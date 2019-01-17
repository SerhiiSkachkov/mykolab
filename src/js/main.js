
$(document).ready(function(){
    //TOGGLE MENU
    if ($(window).width() < 992) {
      $("#header").removeClass("default");

      $(window).scroll(function(){
        if ($(this).scrollTop() > 2) {
          $("#header").addClass("default").fadeIn('fast');
        } else {
          $("#header").removeClass("default").fadeIn('fast');
        };
      });
    }


    if ($('.js-hamburger').length) {
        $('.js-hamburger').click(function(){

          var nav = $('.nav-box'),
              nav_height = nav.height();

          $(this).toggleClass('is-active');
          nav.slideToggle();
          $('body').toggleClass('menu-open');
          nav.css('height', nav_height)
      }); 
    };

    if ($('.js-poll-drop').length) {
      $('.js-poll-drop').click(function(e){
          e.preventDefault()
          $(this).toggleClass('poll-drop-toggle');
          $(this).next().slideToggle();
        });
    };

    if ($('.js-check-modal').length) {
        $('.js-check-modal').fancybox();
    };

$('input[name*="code"]').keyup(function() {
  var foo = $(this).val().split("-").join("");
  if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  $(this).val(foo);
});

});

