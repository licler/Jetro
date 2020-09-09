$(function(){
  
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__nav',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/previous.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg"></button>',
    responsive: [
      {
        breakpoint: 935,
        settings: {
          arrows: false,
        }
      },
    ]
    
  });
  $('.slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true
  });

  $('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1
   
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul'). slideToggle();
  });

  


}); 









