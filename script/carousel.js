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
                    "margin-left": "-=" + 1550 + "px",
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
            "margin-left": "-" + (currentSlide - 1) * 1550 + "px",
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
            "margin-left": "-" + (currentSlide - 1) * 1550 + "px",
        },
            1000
        );
        clearInterval(interval);
        autoSlide();
    });

    autoSlide();
});