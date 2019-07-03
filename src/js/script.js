// Menu toggle-button
$(document).ready(function() {
  $(".menu-icon").on("click", function(){
    $("nav ul").toggleClass("showing");
  })
})

// Scrolling Effect
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');
  }
})

// Menu burger
$("#wrapper").click( function() {
	$(".menu-icon").toggleClass("close");
});

// Parallax effects
const rellax = new Rellax('.rellax-effect', {
  callback: function(position){

  }
})
