import $ from 'jquery';
import 'slick-carousel';

// // Закомментированные значения - это значения по умолчанию

$('.choose-slider').slick({
  arrows: false, // Enable Next/Prev arrows
  autoplay: false, // Enables auto play of slides
  autoplaySpeed: 3000, // Auto play change interval
  centerMode: false, // Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
  dots: true, // Current slide indicator dots
  //   // focusOnChange: false, // Puts focus on slide after change
  //   // focusOnSelect: false, // Enable focus on selected element (click)
  //   // infinite: true, // Infinite looping
  //   // lazyLoad: 'ondemand', // Accepts 'ondemand' or 'progressive' for lazy load technique. 'ondemand' will load the image as soon as you slide to it, 'progressive' loads one image after the other when the page loads.
  //   // pauseOnHover: true, // Pauses autoplay on hover
  slidesToScroll: 1, // # of slides to scroll at a time
  slidesToShow: 1, // # of slides to show at a time
  speed: 300, // Transition speed
  //   // vertical: false, // Vertical slide direction
  //   cssEase: 'ease-out', // CSS3 easing
  mobileFirst: true, // Responsive settings use mobile first calculation
  //   nextArrow: '.some-next-btn', // Allows you to select a node or customize the HTML for the "Next" arrow.
  //   prevArrow: '.some-prev-btn', // Allows you to select a node or customize the HTML for the "Previous" arrow.
  //   variableWidth: true, // Disables automatic slide width calculation
  responsive: [
    {
      breakpoint: 1279.98,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$('.plans-slider').slick({
  mobileFirst: true,
  lazyLoad: 'ondemand',
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 400,
  cssEase: 'linear',
  centerPadding: 0,
  prevArrow: $('.learn-prev-but-js'),
  nextArrow: $('.learn-next-but-js'),
  responsive: [
    {
      breakpoint: 1279.98,
      settings: {
        slidesToShow: 3,
        centerMode: true, // Включаем центрирование на десктопе
        centerPadding: '0px', // Подгоняем отступы для центрирования карточек
      },
    },
    {
      breakpoint: 767.98,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: '200px', // Устанавливаем отступы для показа карточек с боков
        slidesToShow: 1,
      },
    },
  ],
});
