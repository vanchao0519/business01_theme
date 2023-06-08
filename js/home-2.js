console.log('home-2 js');

(function(){

function initBannerSwiper() {
    var swiperOptions = {
        speed: 500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        rewind: true,
    };
    var swiper = new Swiper("#slider-01", swiperOptions);
}

function videoTrigger002() {
    var videoTriggerEl = document.getElementById('videoTrigger002');
    var url = videoTriggerEl.getAttribute('data-tagVideo');
    var videoModalEl = document.getElementById('videoModal002');
    var videoContainerEl = document.getElementById('videoContainer002');
    var urlAuto = url + '?autoplay=1';
    videoModalEl.addEventListener('show.bs.modal', function () {
        videoContainerEl.setAttribute('src', urlAuto);
    });
    videoModalEl.addEventListener('hide.bs.modal', function () {
        videoContainerEl.setAttribute('src', url);
    });
};

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

function title_02_part_02_animation() {
    var part_02_elements = document.getElementsByClassName("part-02");
    for (var i = 0; i < part_02_elements.length; i++) {
        part_02_elements[i]._counter = 1;
        new Waypoint({
            element: part_02_elements[i],
            handler: function() {
                if( 2 <= this.element._counter) {
                    // console.log('more than twice');
                    return false;
                }
                this.element.classList.add('animation-part-02');
                this.element._counter += 1;
            },
            continuous: false,
            offset: '90%'
        });
    }
}

function countUp002WayPoints() {
    var _prefix = "countUp";
    var id_arrs = [ 
        { id: _prefix + "11", target: 4050 ,startVal: 30 }, 
        { id: _prefix + "12", target: 2500 ,startVal: 100 }, 
        { id: _prefix + "13", target: 6530 ,startVal: 200 }, 
        { id: _prefix + "14", target: 7150 ,startVal: 300 }, 
    ];
    id_arrs.forEach (function (item, key) {
        var cp_info = {id: key, counter: 1};
        document.getElementById(item.id)._counter = 1;
        //------------------------------------------------------------------------//
        //------------------------------------------------------------------------//
        //                           waypoint start                               //
        //------------------------------------------------------------------------//
        //------------------------------------------------------------------------//
        var wp = new Waypoint({
            element: document.getElementById(item.id),
            handler: function(d) {
                if(2 <= document.getElementById(item.id)._counter) {
                    return false;
                }
                //------------------------------------------------------------------------//
                //------------------------------------------------------------------------//
                //                           count up start                               //
                //------------------------------------------------------------------------//
                //------------------------------------------------------------------------//
                var countUp = new CountUp(item.id, item.startVal, item.target, 0, 2.5, {});  
                if (!countUp.error) { countUp.start( function() {
                        delete countUp;
                    } );
                } else {
                    console.error(countUp.error);
                }
                //------------------------------------------------------------------------//
                //------------------------------------------------------------------------//
                //                           count up  end                                //
                //------------------------------------------------------------------------//
                //------------------------------------------------------------------------//
                document.getElementById(item.id)._counter += 1;
            },
            offset: '90%'
        });
        //------------------------------------------------------------------------//
        //------------------------------------------------------------------------//
        //                           waypoint end                                 //
        //------------------------------------------------------------------------//
        //------------------------------------------------------------------------//
    });
}

function progress001WayPoints() {
    var _prefix = "components-012-block-01-";
    var id_arrs = [ 
        { id: _prefix + "01", addedClass: "animation-012-04" }, 
        { id: _prefix + "02", addedClass: "animation-012-03" }, 
    ];
    id_arrs.forEach (function (item, key) {
        var cp_info = {id: key, counter: 1};
        document.getElementById(item.id)._counter = 1;
        var wp = new Waypoint({
            element: document.getElementById(item.id),
            handler: function(d) {
                if(2 <= document.getElementById(item.id)._counter) {
                    return false;
                }
                document.getElementById(item.id).classList.add(item.addedClass);
                document.getElementById(item.id)._counter += 1;
            },
            offset: '90%'
        })
    });
}

_window_onload.initBannerSwiper = initBannerSwiper();
_window_onload.videoTrigger002 = videoTrigger002();
_window_onload.initSwiper002 = initSwiper002();
_window_onload.title_02_part_02_animation = title_02_part_02_animation();
_window_onload.countUp002WayPoints = countUp002WayPoints();
_window_onload.progress001WayPoints = progress001WayPoints();

})();
