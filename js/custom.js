(function ($) {
    'use strict';

    // AOS.init();

    var swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 3.8,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    var swiper = new Swiper(".testimonial-top-swiper", {
        slidesPerView: 2,
        spaceBetween: 90,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $(this).prev('.count').val(parseInt($(this).prev('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $(this).next('.count').val(parseInt($(this).next('.count').val()) - 1);
        if ($(this).next('.count').val() < 0) {
            $(this).next('.count').val(0);
        }
    });


    $(window).scroll(function () {
        var scrollHeader = $(window).scrollTop();
        if (scrollHeader >= 10) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    });

    // $(document).ready(function () {

    // });

    //Avoid pinch zoom on iOS
    document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, false);
})(jQuery)