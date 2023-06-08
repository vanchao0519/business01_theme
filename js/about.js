(function(){
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

    function components_024_parralax_01 () {
        var rellax = new Rellax('.components-024-rellax-01');
    }

    _window_onload.videoTrigger002 = videoTrigger002();
    _window_onload.progress001WayPoints = progress001WayPoints();
    _window_onload.components_024_parralax_01 = components_024_parralax_01();
})();