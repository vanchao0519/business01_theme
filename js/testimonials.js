(function(){
    function initSwiper002() {
        var swiperOptions = {
            speed: 500,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 32,
            breakpoints: {
                // when window width is >= 767.5px
                767.5: {
                  slidesPerView: 2,
                },
            },
            rewind: true,
        };
        var swiper = new Swiper("#slider-03", swiperOptions);
    }
    _window_onload.initSwiper002 = initSwiper002();
})();