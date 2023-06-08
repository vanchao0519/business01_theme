console.log('core js is loaded');

var _window_onload = function () {};

window.onload = _window_onload();

if (document.querySelector(".datepicker")) {
    flatpickr(".datepicker", {});
}

_window_onload._mdt_input = _mdt_input();
_window_onload._mdt_ripple_effect = _mdt_ripple_effect();
_window_onload.collapseMenu01 = collapseMenu01();
// _window_onload._mdt_tabs_navigation = _mdt_tabs_navigation();

function _mdt_input() {
  // Material Design Input function
  console.log('mdt input loaded');
  var inputs = document.querySelectorAll('input');
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function(e) {
      this.parentElement.classList.add('is-focused');
    }, false);

    inputs[i].onkeyup = function(e) {
      if (this.value != "") {
        this.parentElement.classList.add('is-filled');
      } else {
        this.parentElement.classList.remove('is-filled');
      }
    };

    inputs[i].addEventListener('focusout', function(e) {
      if (this.value != "") {
        this.parentElement.classList.add('is-filled');
      }
      this.parentElement.classList.remove('is-focused');
    }, false);
  }
}

function _mdt_ripple_effect () {
    // Ripple Effect
    console.log('mdt ripple effect loaded');
    var ripples = document.querySelectorAll('.btn');
  
    for (var i = 0; i < ripples.length; i++) {
      ripples[i].addEventListener('click', function(e) {
        var targetEl = e.target;
        var rippleDiv = targetEl.querySelector('.ripple');
  
        rippleDiv = document.createElement('span');
        rippleDiv.classList.add('ripple');
        rippleDiv.style.width = rippleDiv.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
        targetEl.appendChild(rippleDiv);
  
        rippleDiv.style.left = (e.offsetX - rippleDiv.offsetWidth / 2) + 'px';
        rippleDiv.style.top = (e.offsetY - rippleDiv.offsetHeight / 2) + 'px';
        rippleDiv.classList.add('ripple');
        setTimeout(function() {
          rippleDiv.parentElement.removeChild(rippleDiv);
        }, 600);
      }, false);
    }
}

function collapseMenu01() {

  function _clickEventListener(_is_toggled, _dropdown, _subMenu) {
      if(_is_toggled) {
          _dropdown.classList.remove('open-mobile');
          _subMenu.removeAttribute('style');
          return false;
      } 
      _dropdown.classList.add('open-mobile');
      if (_subMenu) {
        _subMenu.style.maxHeight = _subMenu.scrollHeight + 'px';
      }
  }

  function _is_toggled ( d ) {
      return d.classList.contains('open-mobile');
  }

  var toggle_all = document.getElementsByClassName('subnav-toggle');
  for (i = 0; i < toggle_all.length; i++) {
      toggle_all[i].addEventListener('click', function (e) {
          var dropdown = e.target.parentElement.parentElement;
          var subMenu = e.target.parentElement.nextElementSibling;
          _clickEventListener(!_is_toggled(dropdown), dropdown, subMenu);
      }, false);
  }

  var li_dropdown_all = document.getElementsByClassName('dropdown');
  for (i = 0; i < li_dropdown_all.length; i++) {
      li_dropdown_all[i].addEventListener('click', function (e) {
          var dropdown = e.target;
          var subMenu = e.target.lastElementChild;
          _clickEventListener(_is_toggled(dropdown), dropdown, subMenu);
      }, false);
  }

  var nav_collapse_all = document.getElementsByClassName('nav-collapse-animate');
  for (i = 0; i < nav_collapse_all.length; i++) {
      nav_collapse_all[i].addEventListener('click', function (e) {
          var dropdown = e.target.parentElement;
          var subMenu = e.target.parentElement.lastElementChild;
          _clickEventListener(_is_toggled(dropdown), dropdown, subMenu);
      }, false);
  }
}

function _mdt_tabs_navigation() {
  var total = document.querySelectorAll('.nav-pills');
  total.forEach(function(item, i) {
    var moving_div = document.createElement('div');
    var first_li = item.querySelector('li:first-child .nav-link');
    var tab = first_li.cloneNode();
    tab.innerHTML = "&nbsp;";
  
    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
    moving_div.appendChild(tab);
    item.appendChild(moving_div);
  
    var list_length = item.getElementsByTagName("li").length;
  
    moving_div.style.padding = '0px';
    moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';
  
    item.onmouseover = function(event) {
      let target = getEventTarget(event);
      let li = target.closest('li'); // get reference
      if (li) {
        let nodes = Array.from(li.closest('ul').children); // get array
        let index = nodes.indexOf(li) + 1;
        item.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function() {
          moving_div = item.querySelector('.moving-tab');
          let sum = 0;
          if (item.classList.contains('flex-column')) {
            for (var j = 1; j <= nodes.indexOf(li); j++) {
              sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
            }
            moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
            moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
          } else {
            for (var j = 1; j <= nodes.indexOf(li); j++) {
              sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
            }
            moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
            moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
          }
        }
      }
    }
  });

  window.addEventListener('resize', function(event) {
    total.forEach(function(item, i) {
      item.querySelector('.moving-tab').remove();
      var moving_div = document.createElement('div');
      var tab = item.querySelector(".nav-link.active").cloneNode();
      tab.innerHTML = "&nbsp;";
  
      moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
      moving_div.appendChild(tab);
  
      item.appendChild(moving_div);
  
      moving_div.style.padding = '0px';
      moving_div.style.transition = '.5s ease';
  
      let li = item.querySelector(".nav-link.active").parentElement;
  
      if (li) {
        let nodes = Array.from(li.closest('ul').children); // get array
        let index = nodes.indexOf(li) + 1;
  
        let sum = 0;
        if (item.classList.contains('flex-column')) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
          }
          moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
          moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
          moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
          }
          moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
          moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
  
        }
      }
    });
  
    if (window.innerWidth < 768) {
      total.forEach(function(item, i) {
        if (!item.classList.contains('flex-column')) {
          item.classList.add('flex-column', 'on-resize');
        }
      });
    } else {
      total.forEach(function(item, i) {
        if (item.classList.contains('on-resize')) {
          item.classList.remove('flex-column', 'on-resize');
        }
      })
    }
  });
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}
