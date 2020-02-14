$(document).ready(function() {

    let $headerSlider = $('.header-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        fade: true,
        // vertical: true,
        // verticalSwiping: true,  
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

      });

/*Скролл*/
    let $page = $('html');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000, "swing");
    });
})
