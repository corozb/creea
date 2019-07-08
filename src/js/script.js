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


// Swiper Team Section
const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination'
  },
});