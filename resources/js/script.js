//waypoint lib stuff:
  //nav bar sticky-ness during scroll event
  //as soon as we hit the features section our nav bar appears
$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction){
      if (direction == 'down'){
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    })
}, {
  offset: '60px;'
  });

  //scroll on Buttons
  //seclect the class and when we click on it
  //animation which scrolls to the top of the js section plan section at the speed of 1 second
  $('.js--scroll-to-plans').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });
