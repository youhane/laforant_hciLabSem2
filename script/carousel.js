$(function () {
    var slideCount = $(".slide").length;
    var currentSlide = 1;
    var slideWidth = $(".slide").width();
    var interval;

    function autoSlide() {
        interval = setInterval(function () {
            if (currentSlide == slideCount) {
                $(".sliderWrapper").animate({
                    "margin-left": "0px",
                },
                    1000
                );
                currentSlide = 1;
            } else {
                $(".sliderWrapper").animate({
                    "margin-left": "-=" + slideWidth + "px",
                },
                    1000
                );
                currentSlide++;
            }
        }, 3000);
    }
    $("#prev").click(function () {
        if (currentSlide == 1) currentSlide = slideCount;
        else currentSlide--;
        $(".sliderWrapper").animate({
            "margin-left": "-" + (currentSlide - 1) * slideWidth + "px",
        },
            1000
        );
        clearInterval(interval);
        autoSlide();
    });

    $("#next").click(function () {
        if (currentSlide == slideCount) currentSlide = slideCount;
        else currentSlide++;
        $(".sliderWrapper").animate({
            "margin-left": "-" + (currentSlide - 1) * slideWidth + "px",
        },
            1000
        );
        clearInterval(interval);
        autoSlide();
    });

    autoSlide();
});

// maps
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    infinite: true
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true
});