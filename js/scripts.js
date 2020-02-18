$(document).ready(function() {

    let $headerSlider = $('.header-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: false,
        fade: true, 
    });

    $(document).on('keydown', function(e) {
        if(e.keyCode == 37) {
            $headerSlider.slick('slickPrev');
            $newsSlider.slick('slickPrev');
        }
        if(e.keyCode == 39) {
            $headerSlider.slick('slickNext');
            $newsSlider.slick('slickNext');
        }
    });

    let $newsSlider = $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        prevArrow: '<button class="header__scroller header__scroller--rotate-left"></button>',
        nextArrow: '<button class="header__scroller header__scroller--rotate-right"></button>',
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]
        
      });
      
/*Скролл*/
    let $page = $('html');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000, "swing");
    });
});

// скрипт открывания и закрывания меню 
(function() {
  'use strict';

  let navMenu = document.querySelector('.nav__links'),
      nav  = document.getElementById('nav'),
      toggle  = document.querySelector('.toggle'),
      body    = document.body;

      toggle.addEventListener('click', () => {
          body.classList.toggle('open');
        });
        
        navMenu.addEventListener('click', () => {
          body.classList.remove('open');          
      });
})();
