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
