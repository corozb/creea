// Menu toggle-button
$(document).ready(function() {
  $(".header__burger-icon").on("click", function(){
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
$(".header__burger").click( function() {
	$(".header__burger-icon").toggleClass("close");
});

// Parallax effects
const rellax = new Rellax('.rellax-effect', {
  callback: function(position){
  }
})


// Swiper Team Section
const swiper = new Swiper('.team__swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// TweenMax animation in nav :
// TweenMax.from('class or id', animation-duration, which properties we want to animate ) 
TweenMax.from("#header", 1.5, {
  delay: 0.4,
  y: 30,
  opacity: 0,
  ease: Bounce.easeOut
})

TweenMax.staggerFrom('.header__menu li a', 1, {
  delay:0.4,
  opacity: 0,
  ease: Expo.easeInOut
}, 0,1)

// wow animation with scroll down
new WOW().init()