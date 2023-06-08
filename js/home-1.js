console.log('home-1 js start');

// call window onload function below lines
// _window_onload.your_function_name = your_function_name();


function videoTrigger001() {
    var videoTriggerEl = document.getElementById('videoTrigger001');
    var url = videoTriggerEl.getAttribute('data-tagVideo');
    var videoModalEl = document.getElementById('videoModal001');
    var videoContainerEl = document.getElementById('videoContainer001');
    var urlAuto = url + '?autoplay=1';
    videoModalEl.addEventListener('show.bs.modal', function () {
        videoContainerEl.setAttribute('src', urlAuto);
    });
    videoModalEl.addEventListener('hide.bs.modal', function () {
        videoContainerEl.setAttribute('src', url);
    });
};

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

function initBannerSwiper() {
    var swiperOptions = {
        speed: 500,
        effect: 'fade',
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

function initSwiper001() {
    var swiperOptions = {
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20
    };
    var swiper = new Swiper("#slider-02", swiperOptions);
}

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

function countUp001WayPoints() {
    var _prefix = "countUp";
    var id_arrs = [ 
        { id: _prefix + "01", target: 4050 ,startVal: 30 }, 
        { id: _prefix + "02", target: 2500 ,startVal: 100 }, 
        { id: _prefix + "03", target: 6530 ,startVal: 200 }, 
        { id: _prefix + "04", target: 7150 ,startVal: 300 }, 
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
                if (!countUp.error) {
                    countUp.start( function() {
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
        })
        //------------------------------------------------------------------------//
        //------------------------------------------------------------------------//
        //                           waypoint end                                 //
        //------------------------------------------------------------------------//
        //------------------------------------------------------------------------//
    })
}

function title_01_part_02_animation() {
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

function timeline_animation_01 () {
    var elements = document.getElementsByClassName("wrapper components-024-animation-toggle"); 
    for (var i = 0; i < elements.length; i++) {
        elements._counter = 1;
        new Waypoint({
            element: elements[i],
            handler: function() {
                if( 2 <= this.element._counter) {
                    // console.log('more than twice');
                    return false;
                }
                this.element.classList.add('animation-024');
                this.element._counter += 1;
            },
            continuous: false,
            offset: '90%'
        });
    }
}

function components_005_parralax_01 () {
}

function components_006_parralax_01 () {
    var rellax = new Rellax('.components-006-rellax-01');
}

function components_010_parralax_01 () {
    var rellax = new Rellax('.components-010-rellax-01');
}

function components_024_parralax_01 () {
    var rellax = new Rellax('.components-024-rellax-01');
}

_window_onload.videoTrigger001 = videoTrigger001();
_window_onload.initBannerSwiper = initBannerSwiper();
_window_onload.countUp001WayPoints = countUp001WayPoints();
_window_onload.title_01_part_02_animation = title_01_part_02_animation();
_window_onload.initSwiper001 = initSwiper001();
_window_onload.initSwiper002 = initSwiper002();
_window_onload.timeline_animation_01 = timeline_animation_01();
_window_onload.components_006_parralax_01 = components_006_parralax_01();
_window_onload.components_010_parralax_01 = components_010_parralax_01();
_window_onload.components_024_parralax_01 = components_024_parralax_01();


console.log('home-1 js end');