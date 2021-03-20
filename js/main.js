$(function(){
  
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__nav',
    
  });
  $('.slider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.slider__inner',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/previous.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg"></button>',
    responsive: [
      {
        breakpoint: 935,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });

  $('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button class="slick-works slick-prev--works"><img src="images/previous.svg"></button>',
    nextArrow: '<button class="slick-works slick-next--works"><img src="images/next.svg"></button>',
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul'). slideToggle();
  });

  


}); 









