(function(){
    var b2top = {
        // ID of the button
        btnID: 'b2top',
        // Default options
        option: {
            showafter: 300,
            scrolldelay: 500,
        },
        /**
         * This function will extend 'source' object with 'defaults' object.
         *
         * @param source    This is the source object
         * @param defaults  This is the default object
         * @returns {object}
         */
        extendSource: function (source, defaults) {
            var property;
            for (property in defaults) {
                if (source.hasOwnProperty(property) === false) {
                    source[property] = defaults[property];
                }
            }
            return source;
        },
        /**
         * This function will configure and initialize the button.
         *
         * option = {
         *  showafter : "integer"   // (optional) default: 300, show the button after scolling X pixels down.
         *  scrolldelay : "integer" // (optional) default: 500, delay the scrolling up action in milliseconds
         *  position : "string"     // (optional) values: "left|right" default: "right"
         *  image : "string"        // (optional) values: "path of the image" default: ""
         *  shape : "string"        // (optional) values: "other|circle" default: "circle"
         *  width : "integer"       // (optional) default: 32
         *  height : "integer"      // (optional) default: 32
         * }
         *
         * @param option     User preferences
         */
        init: function (option) {
            var self = this;
            if (typeof option !== "undefined") {
                self.option = self.extendSource(option, self.option);
            }
            self.onscroll();
            self.onclick();
        },
        /**
         * This will scroll the page back to top.
         */
        onscroll: function () {
            var self = this, btn = document.getElementById(self.btnID);
            window.onscroll = function () {
                if (document.body.scrollTop > self.option.showafter || document.documentElement.scrollTop > self.option.showafter) {
                    // Show the button if not yet visible
                    if ( btn.classList.contains("hide") ) {
                        btn.classList.remove('hide');
                        self.fadeIn(btn);
                    }
                    // If page is not scrolling back to the top after clicking
                    // the dyscrollup-btn then remove the click lock
                    if (!btn.classList.contains('b2top-scrolling')) {
                        btn.classList.remove('click-locked');
                    }
                }
                else {
                    // Hide the button when approaching the top
                    if ( btn.classList.contains("show") ) {
                        btn.classList.remove('show');
                        self.fadeOut(btn);
                    }
                    // Remove the click lock
                    btn.classList.remove('click-locked');
                }
            };
        },
        /**
         * This handles the click event.
         */
        onclick: function () {
            var self = this, btn = document.getElementById(self.btnID);
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                if (!btn.classList.contains('click-locked')) {
                    self.animate();
                    btn.classList.add('click-locked');
                }
                return false;
            });
        },
        /**
         * This will fadeIn the element.
         * @param element
         */
        fadeIn: function (element) {
            element.classList.add("show");
        },
        /**
         * This will fadeOut the element.
         * @param element
         */
        fadeOut: function (element) {
            element.classList.add("hide");
        },
        /**
         * This will animate the scroll up.
         */
        animate: function () {
            var self = this;
            // Get the button
            var btn = document.getElementById(self.btnID);
            // Find the distance that needs to be traversed to reach back to the top
            var distance = document.body.scrollTop || document.documentElement.scrollTop;
            // Divide the journey into N parts
            var divider = 50;
            // Compute the time interval for each N parts
            var intervalTimeout = self.option.scrolldelay / divider;
            // Compute the distance to travel for each N parts
            var travel = Number((distance * intervalTimeout) / self.option.scrolldelay);
            // If the time interval for each N parts is less than 1 ms
            // then, jump straight to top
            if (intervalTimeout < 1) {
                intervalTimeout = 1;
                travel = distance;
            }
            // Set the interval
            var intervalfn = setInterval(scrollUpdate, intervalTimeout);
            function scrollUpdate() {
                // Still scrolling
                btn.classList.add('b2top-scrolling');
                distance -= travel;
                document.body.scrollTop = distance;
                document.documentElement.scrollTop = distance;
                // Scrolling complete
                if (distance <= 0) {
                    clearInterval(intervalfn);
                    btn.classList.remove('b2top-scrolling');
                }
            }
        }
    };
    b2top.init();
})();