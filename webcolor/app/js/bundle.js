(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function ($) {
  "use strict";

  var nav_offset_top = $('header').height();
  /*	  Navbar 	*/
  //* Navbar Fixed

  function navbarFixed() {
    if ($('.main_menu_area').length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= nav_offset_top) {
          $(".main_menu_area").addClass("navbar_fixed");
        } else {
          $(".main_menu_area").removeClass("navbar_fixed");
        }
      });
    }

    ;
  }

  ;
  navbarFixed();
  /*------------*/

  /*  Testimonials Slider
  /*---------------------*/

  function testimoninals_carousel() {
    if ($('.testimonials_slider').length) {
      $('.testimonials_slider').owlCarousel({
        loop: true,
        margin: 130,
        items: 3,
        nav: false,
        autoplay: false,
        smartSpeed: 1500,
        dots: true,
        center: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            center: false,
            margin: 0
          },
          700: {
            items: 2,
            center: false,
            margin: 30
          },
          992: {
            items: 3,
            margin: 70
          },
          1200: {
            items: 3,
            margin: 130
          }
        }
      });
    }
  }

  testimoninals_carousel();
  /*----------------------------------------------------*/

  /*  Shap Slider
  /*----------------------------------------------------*/

  function shap_carousel() {
    if ($('.shap_slider_inner').length) {
      $('.shap_slider_inner').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        autoplay: false,
        smartSpeed: 1500,
        dots: true,
        center: true
      });
    }
  }

  shap_carousel();
  /*----------------------------------------------------*/

  /*  Skill Bar
  /*----------------------------------------------------*/

  function progressBarConfig() {
    var progressBar = $('.progress');

    if (progressBar.length) {
      progressBar.each(function () {
        var Self = $(this);
        Self.appear(function () {
          var progressValue = Self.data('value');
          Self.find('.progress-bar').animate({
            width: progressValue + '%'
          }, 1000);
          Self.find('.number').countTo({
            from: 0,
            to: progressValue,
            speed: 1000
          });
        });
      });
    }
  }

  progressBarConfig();
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  /*----------------------------------------------------*/

  /*----------------------------------------------------*/

  /*  Google map js
  /*----------------------------------------------------*/
  // if ( $('#mapBox1').length ){
  //     var $lat = $('#mapBox1').data('lat');
  //     var $lon = $('#mapBox1').data('lon');
  //     var $zoom = $('#mapBox1').data('zoom');
  //     var $marker = $('#mapBox1').data('marker');
  //     var $info = $('#mapBox1').data('info');
  //     var $markerLat = $('#mapBox1').data('mlat');
  //     var $markerLon = $('#mapBox1').data('mlon');
  //     var map = new GMaps({
  //     el: '#mapBox1',
  //     lat: $lat,
  //     lng: $lon,
  //     scrollwheel: false,
  //     scaleControl: true,
  //     streetViewControl: false,
  //     panControl: true,
  //     disableDoubleClickZoom: true,
  //     mapTypeControl: false,
  //     zoom: $zoom,
  //         styles: [
  // {
  //     "featureType": "administrative.country",
  //     "elementType": "geometry",
  //     "stylers": [
  //                     {
  //                         "visibility": "simplified"
  //                     },
  //                     {
  //                         "hue": "#ff0000"
  //                     }
  //                 ]
  //             }
  //         ]
  //     });
  //     map.addMarker({
  //         lat: $markerLat,
  //         lng: $markerLon,
  //         icon: $marker,    
  //         infoWindow: {
  //           content: $info
  //         }
  //     })
  // }

  var map;
  var mapStyles = [{
    "elementType": "geometry",
    "stylers": [{
      "color": "#1d2c4d"
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#8ec3b9"
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#1a3646"
    }]
  }, {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#4b6878"
    }]
  }, {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#64779e"
    }]
  }, {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#4b6878"
    }]
  }, {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#334e87"
    }]
  }, {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [{
      "color": "#023e58"
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#283d6a"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#6f9ba5"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#1d2c4d"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#023e58"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#3C7680"
    }]
  }, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
      "color": "#304a7d"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#98a5be"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#1d2c4d"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
      "color": "#2c6675"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#255763"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#b0d5ce"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#023e58"
    }]
  }, {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#98a5be"
    }]
  }, {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#1d2c4d"
    }]
  }, {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#283d6a"
    }]
  }, {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{
      "color": "#3a4762"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#0e1626"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#4e6d70"
    }]
  }];

  function initMap() {
    var beetroot = {
      lat: 49.066589,
      lng: 33.413636
    };
    map = new google.maps.Map(document.getElementById('map'), {
      center: beetroot,
      zoom: 18,
      styles: mapStyles
    });
    var marker = new google.maps.Marker({
      position: beetroot,
      map: map,
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png'
    });
  }
})(jQuery);

(function ($) {
  "use strict";

  function initSkillBars() {
    var el = $('.circle_progress');

    if (el.length) {
      el.each(function () {
        var $this = $(this),
            inner = $this.find('.circle_progress_inner'),
            percentage = $this.attr('data-percentage') + '%';

        if ($this.hasClass('circular')) {
          var dataparcent = $this.attr('data-percentage');
          var progress = inner.circleProgress({
            value: 0,
            size: 175,
            thickness: $this.data('thickness'),
            startAngle: Math.PI * -0.501411705537642,
            emptyFill: $this.data('empty-fill'),
            animation: {
              duration: 1100
            },
            reverse: $this.data('inverse') == false ? false : false,
            fill: {
              gradient: [$this.data('start-color'), $this.data('end-color')],
              gradientAngle: Math.PI * 3.501411705537642
            }
          }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(dataparcent * progress) + '<i>%</i>');
          });
          progress.on('circle-animation-progress', function (e, p, v) {
            var progressBarInner = $(this),
                instance = progressBarInner.data('circle-progress'),
                size = instance.size,
                thickness = instance.getThickness(),
                radius = size / 2 - thickness / 2,
                angle = 2 * v * Math.PI + instance.startAngle,
                x = radius * Math.cos(angle),
                y = radius * Math.sin(angle);
            progressBarInner.parent().siblings().find('.percentage').text(parseInt(p * parseInt(percentage), 10), 10);
            progressBarInner.parents('.style-polygon').find('.percentage').css({
              left: x + size / 2 - 10,
              top: y + size / 2 - 11
            });
          });
        }

        ;
        $this.one('inview', function (event, visible) {
          if (visible) {
            if ($this.not('.circular').find('.percentage').length) {
              $this.find('.percentage').countTo({
                from: 0,
                to: parseInt(percentage, 0),
                speed: 900,
                refreshInterval: 5
              }).end().addClass('animated');
            }

            ;

            if ($this.hasClass('horizontal')) {
              inner.width(percentage);
            } else if ($this.hasClass('vertical')) {
              inner.height(percentage);
            }

            ;

            if ($this.hasClass('circular')) {
              inner.circleProgress({
                value: parseInt(percentage, 10) / 100
              });
            }

            ;
          }

          ;
        });
      });
    }

    ;
  }

  ;
  initSkillBars();
})(jQuery);
/*-- wow js-- */


new WOW().init();
/*-- end wow js-- */

/*----------------------------
  START - Preloader
  ------------------------------ */

jQuery(window).on('load', function () {
  jQuery("#preloader").fadeOut(500);
});
/*--   Portfolio    */

var modalId = $('#image-gallery');
$(document).ready(function () {
  loadGallery(true, 'a.thumbnail'); //This function disables buttons when needed

  function disableButtons(counter_max, counter_current) {
    $('#show-previous-image, #show-next-image').show();

    if (counter_max === counter_current) {
      $('#show-next-image').hide();
    } else if (counter_current === 1) {
      $('#show-previous-image').hide();
    }
  }
  /**
   *
   * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
   * @param setClickAttr  Sets the attribute for the click handler.
   */


  function loadGallery(setIDs, setClickAttr) {
    var current_image,
        selector,
        counter = 0;
    $('#show-next-image, #show-previous-image').click(function () {
      if ($(this).attr('id') === 'show-previous-image') {
        current_image--;
      } else {
        current_image++;
      }

      selector = $('[data-image-id="' + current_image + '"]');
      updateGallery(selector);
    });

    function updateGallery(selector) {
      var $sel = selector;
      current_image = $sel.data('image-id');
      $('#image-gallery-title').text($sel.data('title'));
      $('#image-gallery-image').attr('src', $sel.data('image'));
      disableButtons(counter, $sel.data('image-id'));
    }

    if (setIDs == true) {
      $('[data-image-id]').each(function () {
        counter++;
        $(this).attr('data-image-id', counter);
      });
    }

    $(setClickAttr).on('click', function () {
      updateGallery($(this));
    });
  }
}); // build key actions

$(document).keydown(function (e) {
  switch (e.which) {
    case 37:
      // left
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
        $('#show-previous-image').click();
      }

      break;

    case 39:
      // right
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
        $('#show-next-image').click();
      }

      break;

    default:
      return;
    // exit this handler for other keys
  }

  e.preventDefault(); // prevent the default action (scroll / move caret)
});
/*----- End  Portfolio ----------   */

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy93ZWJjb2xvci9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0FBQ1Q7O0FBRUEsTUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLE1BQVosRUFBckI7QUFDQTtBQUVIOztBQUNHLFdBQVMsV0FBVCxHQUFzQjtBQUNsQixRQUFLLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE1BQTFCLEVBQWtDO0FBQzlCLE1BQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUN4QixZQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsU0FBVixFQUFiOztBQUNBLFlBQUksTUFBTSxJQUFJLGNBQWQsRUFBK0I7QUFDM0IsVUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixRQUFyQixDQUE4QixjQUE5QjtBQUNILFNBRkQsTUFFTztBQUNILFVBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsV0FBckIsQ0FBaUMsY0FBakM7QUFDSDtBQUNKLE9BUEQ7QUFRSDs7QUFBQTtBQUNKOztBQUFBO0FBQ0QsRUFBQSxXQUFXO0FBRVg7O0FBRUE7OztBQUVBLFdBQVMsc0JBQVQsR0FBaUM7QUFDN0IsUUFBSyxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQixNQUEvQixFQUF1QztBQUNuQyxNQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCLFdBQTFCLENBQXNDO0FBQ2xDLFFBQUEsSUFBSSxFQUFDLElBRDZCO0FBRWxDLFFBQUEsTUFBTSxFQUFFLEdBRjBCO0FBR2xDLFFBQUEsS0FBSyxFQUFFLENBSDJCO0FBSWxDLFFBQUEsR0FBRyxFQUFDLEtBSjhCO0FBS2xDLFFBQUEsUUFBUSxFQUFFLEtBTHdCO0FBTWxDLFFBQUEsVUFB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SCxLQUhDO0FBSUg7QUFDQSxDQWpFRyxFLENBbUVKOztBQUNBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FDQyxPQURELENBQ1MsVUFBVSxDQUFWLEVBQWE7QUFDbEIsVUFBUSxDQUFDLENBQUMsS0FBVjtBQUNFLFNBQUssRUFBTDtBQUFTO0FBQ1QsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFSLENBQWEsVUFBYixLQUE0QixFQUE3QixFQUFpQyxRQUFqQyxJQUE2QyxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQixFQUExQixDQUE2QixVQUE3QixDQUFqRCxFQUEyRjtBQUN2RixRQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQ0MsS0FERDtBQUVIOztBQUNEOztBQUVBLFNBQUssRUFBTDtBQUFTO0FBQ1QsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFSLENBQWEsVUFBYixLQUE0QixFQUE3QixFQUFpQyxRQUFqQyxJQUE2QyxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQixFQUF0QixDQUF5QixVQUF6QixDQUFqRCxFQUF1RjtBQUNuRixRQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQ0MsS0FERDtBQUVIOztBQUNEOztBQUVBO0FBQ0U7QUFBUTtBQWhCWjs7QUFrQkEsRUFBQSxDQUFDLENBQUMsY0FBRixHQW5Ca0IsQ0FtQkU7QUFDdkIsQ0FyQkQ7QUF3QkEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgbmF2X29mZnNldF90b3AgPSAkKCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgIC8qXHQgIE5hdmJhciBcdCovXHJcblxyXG5cdC8vKiBOYXZiYXIgRml4ZWRcclxuICAgIGZ1bmN0aW9uIG5hdmJhckZpeGVkKCl7XHJcbiAgICAgICAgaWYgKCAkKCcubWFpbl9tZW51X2FyZWEnKS5sZW5ndGggKXtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID49IG5hdl9vZmZzZXRfdG9wICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubWFpbl9tZW51X2FyZWFcIikuYWRkQ2xhc3MoXCJuYXZiYXJfZml4ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubWFpbl9tZW51X2FyZWFcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXJfZml4ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgbmF2YmFyRml4ZWQoKTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgLyogIFRlc3RpbW9uaWFscyBTbGlkZXJcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIGZ1bmN0aW9uIHRlc3RpbW9uaW5hbHNfY2Fyb3VzZWwoKXtcclxuICAgICAgICBpZiAoICQoJy50ZXN0aW1vbmlhbHNfc2xpZGVyJykubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICQoJy50ZXN0aW1vbmlhbHNfc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMzAsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDE1MDAsXHJcbiAgICAgICAgICAgICAgICBkb3RzOnRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgNzAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRlc3RpbW9uaW5hbHNfY2Fyb3VzZWwoKTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogIFNoYXAgU2xpZGVyXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgZnVuY3Rpb24gc2hhcF9jYXJvdXNlbCgpe1xyXG4gICAgICAgIGlmICggJCgnLnNoYXBfc2xpZGVyX2lubmVyJykubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICQoJy5zaGFwX3NsaWRlcl9pbm5lcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgbmF2OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc21hcnRTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgICAgIGRvdHM6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNoYXBfY2Fyb3VzZWwoKTtcclxuXHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qICBTa2lsbCBCYXJcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBmdW5jdGlvbiBwcm9ncmVzc0JhckNvbmZpZyAoKSB7XHJcbiAgICAgIHZhciBwcm9ncmVzc0JhciA9ICQoJy5wcm9ncmVzcycpO1xyXG4gICAgICBpZihwcm9ncmVzc0Jhci5sZW5ndGgpIHtcclxuICAgICAgICBwcm9ncmVzc0Jhci5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBTZWxmID0gJCh0aGlzKTtcclxuICAgICAgICAgIFNlbGYuYXBwZWFyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzVmFsdWUgPSBTZWxmLmRhdGEoJ3ZhbHVlJyk7XHJcblxyXG4gICAgICAgICAgICBTZWxmLmZpbmQoJy5wcm9ncmVzcy1iYXInKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB3aWR0aDpwcm9ncmVzc1ZhbHVlKyclJ1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBTZWxmLmZpbmQoJy5udW1iZXInKS5jb3VudFRvKHtcclxuICAgICAgICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgICAgICAgIHRvOiBwcm9ncmVzc1ZhbHVlLFxyXG4gICAgICAgICAgICAgIHNwZWVkOiAxMDAwXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxufVxyXG5wcm9ncmVzc0JhckNvbmZpZyAoKTtcclxuXHJcbiQoJy5jb3VudGVyJykuY291bnRlclVwKHtcclxuICAgIGRlbGF5OiAxMCxcclxuICAgIHRpbWU6IDEwMDBcclxufSk7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qICBHb29nbGUgbWFwIGpzXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIC8vIGlmICggJCgnI21hcEJveDEnKS5sZW5ndGggKXtcclxuICAgIC8vICAgICB2YXIgJGxhdCA9ICQoJyNtYXBCb3gxJykuZGF0YSgnbGF0Jyk7XHJcbiAgICAvLyAgICAgdmFyICRsb24gPSAkKCcjbWFwQm94MScpLmRhdGEoJ2xvbicpO1xyXG4gICAgLy8gICAgIHZhciAkem9vbSA9ICQoJyNtYXBCb3gxJykuZGF0YSgnem9vbScpO1xyXG4gICAgLy8gICAgIHZhciAkbWFya2VyID0gJCgnI21hcEJveDEnKS5kYXRhKCdtYXJrZXInKTtcclxuICAgIC8vICAgICB2YXIgJGluZm8gPSAkKCcjbWFwQm94MScpLmRhdGEoJ2luZm8nKTtcclxuICAgIC8vICAgICB2YXIgJG1hcmtlckxhdCA9ICQoJyNtYXBCb3gxJykuZGF0YSgnbWxhdCcpO1xyXG4gICAgLy8gICAgIHZhciAkbWFya2VyTG9uID0gJCgnI21hcEJveDEnKS5kYXRhKCdtbG9uJyk7XHJcbiAgICAvLyAgICAgdmFyIG1hcCA9IG5ldyBHTWFwcyh7XHJcbiAgICAvLyAgICAgZWw6ICcjbWFwQm94MScsXHJcbiAgICAvLyAgICAgbGF0OiAkbGF0LFxyXG4gICAgLy8gICAgIGxuZzogJGxvbixcclxuICAgIC8vICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAvLyAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxyXG4gICAgLy8gICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgIC8vICAgICBwYW5Db250cm9sOiB0cnVlLFxyXG4gICAgLy8gICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRydWUsXHJcbiAgICAvLyAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgLy8gICAgIHpvb206ICR6b29tLFxyXG4gICAgLy8gICAgICAgICBzdHlsZXM6IFtcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUuY291bnRyeVwiLFxyXG4gICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBcImh1ZVwiOiBcIiNmZjAwMDBcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgXVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBdXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIG1hcC5hZGRNYXJrZXIoe1xyXG4gICAgLy8gICAgICAgICBsYXQ6ICRtYXJrZXJMYXQsXHJcbiAgICAvLyAgICAgICAgIGxuZzogJG1hcmtlckxvbixcclxuICAgIC8vICAgICAgICAgaWNvbjogJG1hcmtlciwgICAgXHJcbiAgICAvLyAgICAgICAgIGluZm9XaW5kb3c6IHtcclxuICAgIC8vICAgICAgICAgICBjb250ZW50OiAkaW5mb1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgICAgIHZhciBtYXA7XHJcbiAgICAgICAgdmFyIG1hcFN0eWxlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzFkMmM0ZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzhlYzNiOVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMWEzNjQ2XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0YjY4NzhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNjQ3NzllXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNGI2ODc4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzMzNGU4N1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDIzZTU4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMjgzZDZhXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM2ZjliYTVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMWQyYzRkXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzAyM2U1OFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMzQzc2ODBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMzA0YTdkXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOThhNWJlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMxZDJjNGRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMyYzY2NzVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMjU1NzYzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNiMGQ1Y2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDIzZTU4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOThhNWJlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMxZDJjNGRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQubGluZVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzI4M2Q2YVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzNhNDc2MlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMGUxNjI2XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzRlNmQ3MFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZXRyb290ID0ge2xhdDogNDkuMDY2NTg5LCBsbmc6IDMzLjQxMzYzNn07XHJcbiAgICAgICAgICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IGJlZXRyb290LFxyXG4gICAgICAgICAgICAgICAgem9vbTogMTgsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG1hcFN0eWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGJlZXRyb290LFxyXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvZnVsbC9pbWFnZXMvcGFya2luZ19sb3RfbWFwcy5wbmcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG59KShqUXVlcnkpXHJcblxyXG47KGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNraWxsQmFycygpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKCcuY2lyY2xlX3Byb2dyZXNzJyk7XHJcblxyXG4gICAgICAgIGlmIChlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBpbm5lciA9ICR0aGlzLmZpbmQoJy5jaXJjbGVfcHJvZ3Jlc3NfaW5uZXInKSxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAkdGhpcy5hdHRyKCdkYXRhLXBlcmNlbnRhZ2UnKSArICclJztcclxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnY2lyY3VsYXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhcGFyY2VudCA9ICR0aGlzLmF0dHIoJ2RhdGEtcGVyY2VudGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGlubmVyLmNpcmNsZVByb2dyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6MTc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlja25lc3M6ICR0aGlzLmRhdGEoJ3RoaWNrbmVzcycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJICogLTAuNTAxNDExNzA1NTM3NjQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eUZpbGw6ICR0aGlzLmRhdGEoJ2VtcHR5LWZpbGwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7ZHVyYXRpb246IDExMDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlOiAoJHRoaXMuZGF0YSgnaW52ZXJzZScpID09IGZhbHNlKSA/IGZhbHNlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiBbJHRoaXMuZGF0YSgnc3RhcnQtY29sb3InKSwgJHRoaXMuZGF0YSgnZW5kLWNvbG9yJyldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRBbmdsZTogTWF0aC5QSSAqIDMuNTAxNDExNzA1NTM3NjQyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5vbignY2lyY2xlLWFuaW1hdGlvbi1wcm9ncmVzcycsIGZ1bmN0aW9uKGV2ZW50LCBwcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3N0cm9uZycpLmh0bWwoTWF0aC5yb3VuZChkYXRhcGFyY2VudCAqIHByb2dyZXNzKSArICc8aT4lPC9pPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLm9uKCdjaXJjbGUtYW5pbWF0aW9uLXByb2dyZXNzJywgZnVuY3Rpb24oZSwgcCwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NCYXJJbm5lciA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcHJvZ3Jlc3NCYXJJbm5lci5kYXRhKCdjaXJjbGUtcHJvZ3Jlc3MnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IGluc3RhbmNlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzcyA9IGluc3RhbmNlLmdldFRoaWNrbmVzcygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSBzaXplIC8gMiAtIHRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlID0gMiAqIHYgKiBNYXRoLlBJICsgaW5zdGFuY2Uuc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFySW5uZXIucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCcucGVyY2VudGFnZScpLnRleHQocGFyc2VJbnQocCAqIHBhcnNlSW50KHBlcmNlbnRhZ2UpLCAxMCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXJJbm5lci5wYXJlbnRzKCcuc3R5bGUtcG9seWdvbicpLmZpbmQoJy5wZXJjZW50YWdlJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHggKyBzaXplIC8gMiAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB5ICsgc2l6ZSAvIDIgLSAxMSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5vbmUoJ2ludmlldycsIGZ1bmN0aW9uKGV2ZW50LCB2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGlzLm5vdCgnLmNpcmN1bGFyJykuZmluZCgnLnBlcmNlbnRhZ2UnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5wZXJjZW50YWdlJykuY291bnRUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogcGFyc2VJbnQocGVyY2VudGFnZSwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDkwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoSW50ZXJ2YWw6IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmVuZCgpLmFkZENsYXNzKCdhbmltYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXIud2lkdGgocGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3ZlcnRpY2FsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyLmhlaWdodChwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdjaXJjdWxhcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lci5jaXJjbGVQcm9ncmVzcyh7dmFsdWU6IHBhcnNlSW50KHBlcmNlbnRhZ2UsIDEwKSAvIDEwMH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdFNraWxsQmFycygpO1xyXG5cclxufSkoalF1ZXJ5KVxyXG5cclxuXHJcbiAvKi0tIHdvdyBqcy0tICovXHJcblxyXG4gbmV3IFdPVygpLmluaXQoKTtcclxuXHJcbi8qLS0gZW5kIHdvdyBqcy0tICovXHJcblxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFNUQVJUIC0gUHJlbG9hZGVyXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIGpRdWVyeSh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoXCIjcHJlbG9hZGVyXCIpLmZhZGVPdXQoNTAwKTtcclxuICAgIH0pO1xyXG5cclxuLyotLSAgIFBvcnRmb2xpbyAgICAqL1xyXG4gICAgbGV0IG1vZGFsSWQgPSAkKCcjaW1hZ2UtZ2FsbGVyeScpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpXHJcbiAgICAucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsb2FkR2FsbGVyeSh0cnVlLCAnYS50aHVtYm5haWwnKTtcclxuXHJcbiAgICAvL1RoaXMgZnVuY3Rpb24gZGlzYWJsZXMgYnV0dG9ucyB3aGVuIG5lZWRlZFxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoY291bnRlcl9tYXgsIGNvdW50ZXJfY3VycmVudCkge1xyXG4gICAgICAkKCcjc2hvdy1wcmV2aW91cy1pbWFnZSwgI3Nob3ctbmV4dC1pbWFnZScpXHJcbiAgICAgIC5zaG93KCk7XHJcbiAgICAgIGlmIChjb3VudGVyX21heCA9PT0gY291bnRlcl9jdXJyZW50KSB7XHJcbiAgICAgICAgJCgnI3Nob3ctbmV4dC1pbWFnZScpXHJcbiAgICAgICAgLmhpZGUoKTtcclxuICAgIH0gZWxzZSBpZiAoY291bnRlcl9jdXJyZW50ID09PSAxKSB7XHJcbiAgICAgICAgJCgnI3Nob3ctcHJldmlvdXMtaW1hZ2UnKVxyXG4gICAgICAgIC5oaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2V0SURzICAgICAgICBTZXRzIElEcyB3aGVuIERPTSBpcyBsb2FkZWQuIElmIHVzaW5nIGEgUEhQIGNvdW50ZXIsIHNldCB0byBmYWxzZS5cclxuICAgICAqIEBwYXJhbSBzZXRDbGlja0F0dHIgIFNldHMgdGhlIGF0dHJpYnV0ZSBmb3IgdGhlIGNsaWNrIGhhbmRsZXIuXHJcbiAgICAgKi9cclxuXHJcbiAgICAgZnVuY3Rpb24gbG9hZEdhbGxlcnkoc2V0SURzLCBzZXRDbGlja0F0dHIpIHtcclxuICAgICAgbGV0IGN1cnJlbnRfaW1hZ2UsXHJcbiAgICAgIHNlbGVjdG9yLFxyXG4gICAgICBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICQoJyNzaG93LW5leHQtaW1hZ2UsICNzaG93LXByZXZpb3VzLWltYWdlJylcclxuICAgICAgLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpXHJcbiAgICAgICAgICAgIC5hdHRyKCdpZCcpID09PSAnc2hvdy1wcmV2aW91cy1pbWFnZScpIHtcclxuICAgICAgICAgICAgY3VycmVudF9pbWFnZS0tO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50X2ltYWdlKys7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0b3IgPSAkKCdbZGF0YS1pbWFnZS1pZD1cIicgKyBjdXJyZW50X2ltYWdlICsgJ1wiXScpO1xyXG4gICAgdXBkYXRlR2FsbGVyeShzZWxlY3Rvcik7XHJcbn0pO1xyXG5cclxuICAgICAgZnVuY3Rpb24gdXBkYXRlR2FsbGVyeShzZWxlY3Rvcikge1xyXG4gICAgICAgIGxldCAkc2VsID0gc2VsZWN0b3I7XHJcbiAgICAgICAgY3VycmVudF9pbWFnZSA9ICRzZWwuZGF0YSgnaW1hZ2UtaWQnKTtcclxuICAgICAgICAkKCcjaW1hZ2UtZ2FsbGVyeS10aXRsZScpXHJcbiAgICAgICAgLnRleHQoJHNlbC5kYXRhKCd0aXRsZScpKTtcclxuICAgICAgICAkKCcjaW1hZ2UtZ2FsbGVyeS1pbWFnZScpXHJcbiAgICAgICAgLmF0dHIoJ3NyYycsICRzZWwuZGF0YSgnaW1hZ2UnKSk7XHJcbiAgICAgICAgZGlzYWJsZUJ1dHRvbnMoY291bnRlciwgJHNlbC5kYXRhKCdpbWFnZS1pZCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2V0SURzID09IHRydWUpIHtcclxuICAgICAgICAkKCdbZGF0YS1pbWFnZS1pZF0nKVxyXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLWltYWdlLWlkJywgY291bnRlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKHNldENsaWNrQXR0cilcclxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHVwZGF0ZUdhbGxlcnkoJCh0aGlzKSk7XHJcbiAgfSk7XHJcbn1cclxufSk7XHJcblxyXG4vLyBidWlsZCBrZXkgYWN0aW9uc1xyXG4kKGRvY3VtZW50KVxyXG4ua2V5ZG93bihmdW5jdGlvbiAoZSkge1xyXG4gICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgIGNhc2UgMzc6IC8vIGxlZnRcclxuICAgICAgaWYgKChtb2RhbElkLmRhdGEoJ2JzLm1vZGFsJykgfHwge30pLl9pc1Nob3duICYmICQoJyNzaG93LXByZXZpb3VzLWltYWdlJykuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgJCgnI3Nob3ctcHJldmlvdXMtaW1hZ2UnKVxyXG4gICAgICAgICAgLmNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDM5OiAvLyByaWdodFxyXG4gICAgICBpZiAoKG1vZGFsSWQuZGF0YSgnYnMubW9kYWwnKSB8fCB7fSkuX2lzU2hvd24gJiYgJCgnI3Nob3ctbmV4dC1pbWFnZScpLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICQoJyNzaG93LW5leHQtaW1hZ2UnKVxyXG4gICAgICAgICAgLmNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybjsgLy8gZXhpdCB0aGlzIGhhbmRsZXIgZm9yIG90aGVyIGtleXNcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gKHNjcm9sbCAvIG1vdmUgY2FyZXQpXHJcbn0pO1xyXG5cclxuXHJcbi8qLS0tLS0gRW5kICBQb3J0Zm9saW8gLS0tLS0tLS0tLSAgICovXHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k5M1pXSmpiMnh2Y2k5emNtTXZhbk12WVhCd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN1FVTkJRU3hEUVVGRExGVkJRVk1zUTBGQlZDeEZRVUZaTzBGQlExUTdPMEZCUlVFc1RVRkJTU3hqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFVUXNRMEZCUkN4RFFVRlpMRTFCUVZvc1JVRkJja0k3UVVGRFFUdEJRVVZJT3p0QlFVTkhMRmRCUVZNc1YwRkJWQ3hIUVVGelFqdEJRVU5zUWl4UlFVRkxMRU5CUVVNc1EwRkJReXhwUWtGQlJDeERRVUZFTEVOQlFYRkNMRTFCUVRGQ0xFVkJRV3RETzBGQlF6bENMRTFCUVVFc1EwRkJReXhEUVVGRExFMUJRVVFzUTBGQlJDeERRVUZWTEUxQlFWWXNRMEZCYVVJc1dVRkJWenRCUVVONFFpeFpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJSQ3hEUVVGRUxFTkJRVlVzVTBGQlZpeEZRVUZpT3p0QlFVTkJMRmxCUVVrc1RVRkJUU3hKUVVGSkxHTkJRV1FzUlVGQkswSTdRVUZETTBJc1ZVRkJRU3hEUVVGRExFTkJRVU1zYVVKQlFVUXNRMEZCUkN4RFFVRnhRaXhSUVVGeVFpeERRVUU0UWl4alFVRTVRanRCUVVOSUxGTkJSa1FzVFVGRlR6dEJRVU5JTEZWQlFVRXNRMEZCUXl4RFFVRkRMR2xDUVVGRUxFTkJRVVFzUTBGQmNVSXNWMEZCY2tJc1EwRkJhVU1zWTBGQmFrTTdRVUZEU0R0QlFVTktMRTlCVUVRN1FVRlJTRHM3UVVGQlFUdEJRVU5LT3p0QlFVRkJPMEZCUTBRc1JVRkJRU3hYUVVGWE8wRkJSVmc3TzBGQlJVRTdPenRCUVVWQkxGZEJRVk1zYzBKQlFWUXNSMEZCYVVNN1FVRkROMElzVVVGQlN5eERRVUZETEVOQlFVTXNjMEpCUVVRc1EwRkJSQ3hEUVVFd1FpeE5RVUV2UWl4RlFVRjFRenRCUVVOdVF5eE5RVUZCTEVOQlFVTXNRMEZCUXl4elFrRkJSQ3hEUVVGRUxFTkJRVEJDTEZkQlFURkNMRU5CUVhORE8wRkJRMnhETEZGQlFVRXNTVUZCU1N4RlFVRkRMRWxCUkRaQ08wRkJSV3hETEZGQlFVRXNUVUZCVFN4RlFVRkZMRWRCUmpCQ08wRkJSMnhETEZGQlFVRXNTMEZCU3l4RlFVRkZMRU5CU0RKQ08wRkJTV3hETEZGQlFVRXNSMEZCUnl4RlFVRkRMRXRCU2poQ08wRkJTMnhETEZGQlFVRXNVVUZCVVN4RlFVRkZMRXRCVEhkQ08wRkJUV3hETEZGQlFVRXNWVUZCVlN4RlFVRkZMRWxCVG5OQ08wRkJUMnhETEZGQlFVRXNTVUZCU1N4RlFVRkRMRWxCVURaQ08wRkJVV3hETEZGQlFVRXNUVUZCVFN4RlFVRkZMRWxCVWpCQ08wRkJVMnhETEZGQlFVRXNaVUZCWlN4RlFVRkZMRWxCVkdsQ08wRkJWV3hETEZGQlFVRXNWVUZCVlN4RlFVRkZPMEZCUTFJc1lVRkJSenRCUVVORExGbEJRVUVzUzBGQlN5eEZRVUZGTEVOQlJGSTdRVUZGUXl4WlFVRkJMRTFCUVUwc1JVRkJSU3hMUVVaVU8wRkJSME1zV1VGQlFTeE5RVUZOTEVWQlFVVTdRVUZJVkN4WFFVUkxPMEZCVFZJc1pVRkJTenRCUVVORUxGbEJRVUVzUzBGQlN5eEZRVUZGTEVOQlJFNDdRVUZGUkN4WlFVRkJMRTFCUVUwc1JVRkJSU3hMUVVaUU8wRkJSMFFzV1VGQlFTeE5RVUZOTEVWQlFVVTdRVUZJVUN4WFFVNUhPMEZCVjFJc1pVRkJTenRCUVVORUxGbEJRVUVzUzBGQlN5eEZRVUZGTEVOQlJFNDdRVUZGUkN4WlFVRkJMRTFCUVUwc1JVRkJSVHRCUVVaUUxGZEJXRWM3UVVGbFVpeG5Ra0ZCVFR0QlFVTkdMRmxCUVVFc1MwRkJTeXhGUVVGRkxFTkJSRXc3UVVGRlJpeFpRVUZCTEUxQlFVMHNSVUZCUlR0QlFVWk9PMEZCWmtVN1FVRldjMElzVDBGQmRFTTdRVUVyUWtnN1FVRkRTanM3UVVGRFJDeEZRVUZCTEhOQ1FVRnpRanRCUVVWMFFqczdRVUZEUVRzN08wRkJSVUVzVjBGQlV5eGhRVUZVTEVkQlFYZENPMEZCUTNCQ0xGRkJRVXNzUTBGQlF5eERRVUZETEc5Q1FVRkVMRU5CUVVRc1EwRkJkMElzVFVGQk4wSXNSVUZCY1VNN1FVRkRha01zVFVGQlFTeERRVUZETEVOQlFVTXNiMEpCUVVRc1EwRkJSQ3hEUVVGM1FpeFhRVUY0UWl4RFFVRnZRenRCUVVOb1F5eFJRVUZCTEVsQlFVa3NSVUZCUXl4SlFVUXlRanRCUVVWb1F5eFJRVUZCTEUxQlFVMHNSVUZCUlN4RFFVWjNRanRCUVVkb1F5eFJRVUZCTEV0QlFVc3NSVUZCUlN4RFFVaDVRanRCUVVsb1F5eFJRVUZCTEVkQlFVY3NSVUZCUXl4TFFVbzBRanRCUVV0b1F5eFJRVUZCTEZGQlFWRXNSVUZCUlN4TFFVeHpRanRCUVUxb1F5eFJRVUZCTEZWQlFWVXNSVUZCUlN4SlFVNXZRanRCUVU5b1F5eFJRVUZCTEVsQlFVa3NSVUZCUXl4SlFWQXlRanRCUVZGb1F5eFJRVUZCTEUxQlFVMHNSVUZCUlR0QlFWSjNRaXhQUVVGd1F6dEJRVlZJTzBGQlEwbzdPMEZCUTBRc1JVRkJRU3hoUVVGaE8wRkJSMkk3TzBGQlEwRTdPenRCUVVWQkxGZEJRVk1zYVVKQlFWUXNSMEZCT0VJN1FVRkROVUlzVVVGQlNTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRmRCUVVRc1EwRkJia0k3TzBGQlEwRXNVVUZCUnl4WFFVRlhMRU5CUVVNc1RVRkJaaXhGUVVGMVFqdEJRVU55UWl4TlFVRkJMRmRCUVZjc1EwRkJReXhKUVVGYUxFTkJRV2xDTEZsQlFWazdRVUZETTBJc1dVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVUXNRMEZCV2p0QlFVTkJMRkZCUVVFc1NVRkJTU3hEUVVGRExFMUJRVXdzUTBGQldTeFpRVUZaTzBGQlEzUkNMR05CUVVrc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZNTEVOQlFWVXNUMEZCVml4RFFVRndRanRCUVVWQkxGVkJRVUVzU1VGQlNTeERRVUZETEVsQlFVd3NRMEZCVlN4bFFVRldMRVZCUVRKQ0xFOUJRVE5DTEVOQlFXMURPMEZCUTJwRExGbEJRVUVzUzBGQlN5eEZRVUZETEdGQlFXRXNSMEZCUXp0QlFVUmhMRmRCUVc1RExFVkJSVU1zU1VGR1JEdEJRVWxCTEZWQlFVRXNTVUZCU1N4RFFVRkRMRWxCUVV3c1EwRkJWU3hUUVVGV0xFVkJRWEZDTEU5QlFYSkNMRU5CUVRaQ08wRkJRek5DTEZsQlFVRXNTVUZCU1N4RlFVRkZMRU5CUkhGQ08wRkJSVE5DTEZsQlFVRXNSVUZCUlN4RlFVRkZMR0ZCUm5WQ08wRkJSek5DTEZsQlFVRXNTMEZCU3l4RlFVRkZPMEZCU0c5Q0xGZEJRVGRDTzBGQlMwZ3NVMEZhUXp0QlFXRklMRTlCWmtNN1FVRm5Ra2c3UVVGRFNqczdRVUZEUkN4RlFVRkJMR2xDUVVGcFFqdEJRVVZxUWl4RlFVRkJMRU5CUVVNc1EwRkJReXhWUVVGRUxFTkJRVVFzUTBGQll5eFRRVUZrTEVOQlFYZENPMEZCUTNCQ0xFbEJRVUVzUzBGQlN5eEZRVUZGTEVWQlJHRTdRVUZGY0VJc1NVRkJRU3hKUVVGSkxFVkJRVVU3UVVGR1l5eEhRVUY0UWp0QlFVdEJPenRCUVVsSk96dEJRVU5CT3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkpMRTFCUVVrc1IwRkJTanRCUVVOQkxFMUJRVWtzVTBGQlV5eEhRVUZITEVOQlEyaENPMEZCUTBrc2JVSkJRV1VzVlVGRWJrSTdRVUZGU1N4bFFVRlhMRU5CUTFnN1FVRkRTU3hsUVVGVE8wRkJSR0lzUzBGRVZ6dEJRVVptTEVkQlJHZENMRVZCVTJoQ08wRkJRMGtzYlVKQlFXVXNhMEpCUkc1Q08wRkJSVWtzWlVGQlZ5eERRVU5ZTzBGQlEwa3NaVUZCVXp0QlFVUmlMRXRCUkZjN1FVRkdaaXhIUVZSblFpeEZRV2xDYUVJN1FVRkRTU3h0UWtGQlpTeHZRa0ZFYmtJN1FVRkZTU3hsUVVGWExFTkJRMWc3UVVGRFNTeGxRVUZUTzBGQlJHSXNTMEZFVnp0QlFVWm1MRWRCYWtKblFpeEZRWGxDYUVJN1FVRkRTU3h0UWtGQlpTeDNRa0ZFYmtJN1FVRkZTU3h0UWtGQlpTeHBRa0ZHYmtJN1FVRkhTU3hsUVVGWExFTkJRMWc3UVVGRFNTeGxRVUZUTzBGQlJHSXNTMEZFVnp0QlFVaG1MRWRCZWtKblFpeEZRV3REYUVJN1FVRkRTU3h0UWtGQlpTdzBRa0ZFYmtJN1FVRkZTU3h0UWtGQlpTeHJRa0ZHYmtJN1FVRkhTU3hsUVVGWExFTkJRMWc3UVVGRFNTeGxRVUZUTzBGQlJHSXNTMEZFVnp0QlFVaG1MRWRCYkVOblFpeEZRVEpEYUVJN1FVRkRTU3h0UWtGQlpTeDVRa0ZFYmtJN1FVRkZTU3h0UWtGQlpTeHBRa0ZHYmtJN1FVRkhTU3hsUVVGWExFTkJRMWc3UVVGRFNTeGxRVUZUTzBGQlJHSXNTMEZFVnp0QlFVaG1MRWRCTTBOblFpeEZRVzlFYUVJN1FVRkRTU3h0UWtGQlpTeHZRa0ZFYmtJN1FVRkZTU3h0UWtGQlpTeHBRa0ZHYmtJN1FVRkhTU3hsUVVGWExFTkJRMWc3UVVGRFNTeGxRVUZUTzBGQlJHSXNTMEZFVnp0QlFVaG1MRWRCY0VSblFpeEZRVFpFYUVJN1FVRkRTU3h0UWtGQlpTeHRRa0ZFYmtJN1FVRkZTU3h0UWtGQlpTeFZRVVp1UWp0QlFVZEpMR1ZCUVZjc1EwRkRXRHRCUVVOSkxHVkJRVk03UVVGRVlpeExRVVJYTzBGQlNHWXNSMEUzUkdkQ0xFVkJjMFZvUWp0QlFVTkpMRzFDUVVGbExFdEJSRzVDTzBGQlJVa3NiVUpCUVdVc1ZVRkdia0k3UVVGSFNTeGxRVUZYTEVOQlExZzdRVUZEU1N4bFFVRlRPMEZCUkdJc1MwRkVWenRCUVVobUxFZEJkRVZuUWl4RlFTdEZhRUk3UVVGRFNTeHRRa0ZCWlN4TFFVUnVRanRCUVVWSkxHMUNRVUZsTEd0Q1FVWnVRanRCUVVkSkxHVkJRVmNzUTBGRFdEdEJRVU5KTEdWQlFWTTdRVUZFWWl4TFFVUlhPMEZCU0dZc1IwRXZSV2RDTEVWQmQwWm9RanRCUVVOSkxHMUNRVUZsTEV0QlJHNUNPMEZCUlVrc2JVSkJRV1VzYjBKQlJtNUNPMEZCUjBrc1pVRkJWeXhEUVVOWU8wRkJRMGtzWlVGQlV6dEJRVVJpTEV0QlJGYzdRVUZJWml4SFFYaEdaMElzUlVGcFIyaENPMEZCUTBrc2JVSkJRV1VzVlVGRWJrSTdRVUZGU1N4dFFrRkJaU3hsUVVadVFqdEJRVWRKTEdWQlFWY3NRMEZEV0R0QlFVTkpMR1ZCUVZNN1FVRkVZaXhMUVVSWE8wRkJTR1lzUjBGcVIyZENMRVZCTUVkb1FqdEJRVU5KTEcxQ1FVRmxMRlZCUkc1Q08wRkJSVWtzYlVKQlFXVXNhMEpCUm01Q08wRkJSMGtzWlVGQlZ5eERRVU5ZTzBGQlEwa3NaVUZCVXp0QlFVUmlMRXRCUkZjN1FVRklaaXhIUVRGSFowSXNSVUZ0U0doQ08wRkJRMGtzYlVKQlFXVXNUVUZFYmtJN1FVRkZTU3h0UWtGQlpTeFZRVVp1UWp0QlFVZEpMR1ZCUVZjc1EwRkRXRHRCUVVOSkxHVkJRVk03UVVGRVlpeExRVVJYTzBGQlNHWXNSMEZ1U0dkQ0xFVkJORWhvUWp0QlFVTkpMRzFDUVVGbExFMUJSRzVDTzBGQlJVa3NiVUpCUVdVc2EwSkJSbTVDTzBGQlIwa3NaVUZCVnl4RFFVTllPMEZCUTBrc1pVRkJVenRCUVVSaUxFdEJSRmM3UVVGSVppeEhRVFZJWjBJc1JVRnhTV2hDTzBGQlEwa3NiVUpCUVdVc1RVRkVia0k3UVVGRlNTeHRRa0ZCWlN4dlFrRkdia0k3UVVGSFNTeGxRVUZYTEVOQlExZzdRVUZEU1N4bFFVRlRPMEZCUkdJc1MwRkVWenRCUVVobUxFZEJja2xuUWl4RlFUaEphRUk3UVVGRFNTeHRRa0ZCWlN4alFVUnVRanRCUVVWSkxHMUNRVUZsTEZWQlJtNUNPMEZCUjBrc1pVRkJWeXhEUVVOWU8wRkJRMGtzWlVGQlV6dEJRVVJpTEV0QlJGYzdRVUZJWml4SFFUbEpaMElzUlVGMVNtaENPMEZCUTBrc2JVSkJRV1VzWTBGRWJrSTdRVUZGU1N4dFFrRkJaU3hwUWtGR2JrSTdRVUZIU1N4bFFVRlhMRU5CUTFnN1FVRkRTU3hsUVVGVE8wRkJSR0lzUzBGRVZ6dEJRVWhtTEVkQmRrcG5RaXhGUVdkTGFFSTdRVUZEU1N4dFFrRkJaU3hqUVVSdVFqdEJRVVZKTEcxQ1FVRmxMR3RDUVVadVFqdEJRVWRKTEdWQlFWY3NRMEZEV0R0QlFVTkpMR1ZCUVZNN1FVRkVZaXhMUVVSWE8wRkJTR1lzUjBGb1MyZENMRVZCZVV0b1FqdEJRVU5KTEcxQ1FVRmxMR05CUkc1Q08wRkJSVWtzYlVKQlFXVXNiMEpCUm01Q08wRkJSMGtzWlVGQlZ5eERRVU5ZTzBGQlEwa3NaVUZCVXp0QlFVUmlMRXRCUkZjN1FVRklaaXhIUVhwTFowSXNSVUZyVEdoQ08wRkJRMGtzYlVKQlFXVXNVMEZFYmtJN1FVRkZTU3h0UWtGQlpTeHJRa0ZHYmtJN1FVRkhTU3hsUVVGWExFTkJRMWc3UVVGRFNTeGxRVUZUTzBGQlJHSXNTMEZFVnp0QlFVaG1MRWRCYkV4blFpeEZRVEpNYUVJN1FVRkRTU3h0UWtGQlpTeFRRVVJ1UWp0QlFVVkpMRzFDUVVGbExHOUNRVVp1UWp0QlFVZEpMR1ZCUVZjc1EwRkRXRHRCUVVOSkxHVkJRVk03UVVGRVlpeExRVVJYTzBGQlNHWXNSMEV6VEdkQ0xFVkJiMDFvUWp0QlFVTkpMRzFDUVVGbExHTkJSRzVDTzBGQlJVa3NiVUpCUVdVc1pVRkdia0k3UVVGSFNTeGxRVUZYTEVOQlExZzdRVUZEU1N4bFFVRlRPMEZCUkdJc1MwRkVWenRCUVVobUxFZEJjRTFuUWl4RlFUWk5hRUk3UVVGRFNTeHRRa0ZCWlN4cFFrRkVia0k3UVVGRlNTeHRRa0ZCWlN4VlFVWnVRanRCUVVkSkxHVkJRVmNzUTBGRFdEdEJRVU5KTEdWQlFWTTdRVUZFWWl4TFFVUlhPMEZCU0dZc1IwRTNUV2RDTEVWQmMwNW9RanRCUVVOSkxHMUNRVUZsTEU5QlJHNUNPMEZCUlVrc2JVSkJRV1VzVlVGR2JrSTdRVUZIU1N4bFFVRlhMRU5CUTFnN1FVRkRTU3hsUVVGVE8wRkJSR0lzUzBGRVZ6dEJRVWhtTEVkQmRFNW5RaXhGUVN0T2FFSTdRVUZEU1N4dFFrRkJaU3hQUVVSdVFqdEJRVVZKTEcxQ1FVRmxMR3RDUVVadVFqdEJRVWRKTEdWQlFWY3NRMEZEV0R0QlFVTkpMR1ZCUVZNN1FVRkVZaXhMUVVSWE8wRkJTR1lzUjBFdlRtZENMRU5CUVdoQ096dEJRWGxQUVN4WFFVRlRMRTlCUVZRc1IwRkJiVUk3UVVGRFppeFJRVUZOTEZGQlFWRXNSMEZCUnp0QlFVRkRMRTFCUVVFc1IwRkJSeXhGUVVGRkxGTkJRVTQ3UVVGQmFVSXNUVUZCUVN4SFFVRkhMRVZCUVVVN1FVRkJkRUlzUzBGQmFrSTdRVUZEUVN4SlFVRkJMRWRCUVVjc1IwRkJSeXhKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZRTEVOQlFWa3NSMEZCYUVJc1EwRkJiMElzVVVGQlVTeERRVUZETEdOQlFWUXNRMEZCZDBJc1MwRkJlRUlzUTBGQmNFSXNSVUZCYjBRN1FVRkRkRVFzVFVGQlFTeE5RVUZOTEVWQlFVVXNVVUZFT0VNN1FVRkZkRVFzVFVGQlFTeEpRVUZKTEVWQlFVVXNSVUZHWjBRN1FVRkhkRVFzVFVGQlFTeE5RVUZOTEVWQlFVVTdRVUZJT0VNc1MwRkJjRVFzUTBGQlRqdEJRVXRCTEZGQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVkFzUTBGQldTeE5RVUZvUWl4RFFVRjFRanRCUVVOb1F5eE5RVUZCTEZGQlFWRXNSVUZCUlN4UlFVUnpRanRCUVVWb1F5eE5RVUZCTEVkQlFVY3NSVUZCUlN4SFFVWXlRanRCUVVkb1F5eE5RVUZCTEVsQlFVa3NSVUZCUlR0QlFVZ3dRaXhMUVVGMlFpeERRVUZpTzBGQlMwZzdRVUZKVWl4RFFXaGhSQ3hGUVdkaFJ5eE5RV2hoU0RzN1FVRnJZVU1zUTBGQlF5eFZRVUZUTEVOQlFWUXNSVUZCV1R0QlFVTldPenRCUVVsQkxGZEJRVk1zWVVGQlZDeEhRVUY1UWp0QlFVTnlRaXhSUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNhMEpCUVVRc1EwRkJWanM3UVVGRlFTeFJRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRlFMRVZCUVdVN1FVRkRXQ3hOUVVGQkxFVkJRVVVzUTBGQlF5eEpRVUZJTEVOQlFWRXNXVUZCVnp0QlFVTm1MRmxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZFTEVOQlFXSTdRVUZCUVN4WlFVTkJMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlRpeERRVUZYTEhkQ1FVRllMRU5CUkZJN1FVRkJRU3haUVVWQkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCVGl4RFFVRlhMR2xDUVVGWUxFbEJRV2RETEVkQlJqZERPenRCUVVkQkxGbEJRVWtzUzBGQlN5eERRVUZETEZGQlFVNHNRMEZCWlN4VlFVRm1MRU5CUVVvc1JVRkJaME03UVVGRE5VSXNZMEZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVTRzUTBGQlZ5eHBRa0ZCV0N4RFFVRnNRanRCUVVOQkxHTkJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4alFVRk9MRU5CUVhGQ08wRkJRMmhETEZsQlFVRXNTMEZCU3l4RlFVRkZMRU5CUkhsQ08wRkJSV2hETEZsQlFVRXNTVUZCU1N4RlFVRkRMRWRCUmpKQ08wRkJSMmhETEZsQlFVRXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhKUVVGT0xFTkJRVmNzVjBGQldDeERRVWh4UWp0QlFVbG9ReXhaUVVGQkxGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCVEN4SFFVRlZMRU5CUVVNc2FVSkJTbE03UVVGTGFFTXNXVUZCUVN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVTRzUTBGQlZ5eFpRVUZZTEVOQlRIRkNPMEZCVFdoRExGbEJRVUVzVTBGQlV5eEZRVUZGTzBGQlFVTXNZMEZCUVN4UlFVRlJMRVZCUVVVN1FVRkJXQ3hoUVU1eFFqdEJRVTlvUXl4WlFVRkJMRTlCUVU4c1JVRkJSeXhMUVVGTExFTkJRVU1zU1VGQlRpeERRVUZYTEZOQlFWZ3NTMEZCZVVJc1MwRkJNVUlzUjBGQmJVTXNTMEZCYmtNc1IwRkJNa01zUzBGUWNFSTdRVUZSYUVNc1dVRkJRU3hKUVVGSkxFVkJRVVU3UVVGRFJpeGpRVUZCTEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGT0xFTkJRVmNzWVVGQldDeERRVUZFTEVWQlFUUkNMRXRCUVVzc1EwRkJReXhKUVVGT0xFTkJRVmNzVjBGQldDeERRVUUxUWl4RFFVUlNPMEZCUlVZc1kwRkJRU3hoUVVGaExFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVd3NSMEZCVlR0QlFVWjJRanRCUVZJd1FpeFhRVUZ5UWl4RlFWbGFMRVZCV2xrc1EwRlpWQ3d5UWtGYVV5eEZRVmx2UWl4VlFVRlRMRXRCUVZRc1JVRkJaMElzVVVGQmFFSXNSVUZCTUVJN1FVRkRla1FzV1VGQlFTeERRVUZETEVOQlFVTXNTVUZCUkN4RFFVRkVMRU5CUVZFc1NVRkJVaXhEUVVGaExGRkJRV0lzUlVGQmRVSXNTVUZCZGtJc1EwRkJORUlzU1VGQlNTeERRVUZETEV0QlFVd3NRMEZCVnl4WFFVRlhMRWRCUVVjc1VVRkJla0lzU1VGQmNVTXNWVUZCYWtVN1FVRkRTQ3hYUVdSakxFTkJRV1k3UVVGbFFTeFZRVUZCTEZGQlFWRXNRMEZCUXl4RlFVRlVMRU5CUVZrc01rSkJRVm9zUlVGQmVVTXNWVUZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhGUVVGbExFTkJRV1lzUlVGQmEwSTdRVUZEZGtRc1owSkJRVWtzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVVFzUTBGQmVFSTdRVUZCUVN4blFrRkRRU3hSUVVGUkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1NVRkJha0lzUTBGQmMwSXNhVUpCUVhSQ0xFTkJSRmc3UVVGQlFTeG5Ra0ZGUVN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJSbWhDTzBGQlFVRXNaMEpCUjBFc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eFpRVUZVTEVWQlNGbzdRVUZCUVN4blFrRkpRU3hOUVVGTkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFWQXNSMEZCVnl4VFFVRlRMRWRCUVVjc1EwRkthRU03UVVGQlFTeG5Ra0ZMUVN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGS0xFZEJRVkVzU1VGQlNTeERRVUZETEVWQlFXSXNSMEZCYTBJc1VVRkJVU3hEUVVGRExGVkJURzVETzBGQlFVRXNaMEpCVFVFc1EwRkJReXhIUVVGSExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRk9ZanRCUVVGQkxHZENRVTlCTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlVHSTdRVUZUUVN4WlFVRkJMR2RDUVVGblFpeERRVUZETEUxQlFXcENMRWRCUVRCQ0xGRkJRVEZDTEVkQlFYRkRMRWxCUVhKRExFTkJRVEJETEdGQlFURkRMRVZCUVhsRUxFbEJRWHBFTEVOQlFUaEVMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFVUXNRMEZCWWl4RlFVRXlRaXhGUVVFelFpeERRVUYwUlN4RlFVRnpSeXhGUVVGMFJ6dEJRVU5CTEZsQlFVRXNaMEpCUVdkQ0xFTkJRVU1zVDBGQmFrSXNRMEZCZVVJc1owSkJRWHBDTEVWQlFUSkRMRWxCUVRORExFTkJRV2RFTEdGQlFXaEVMRVZCUVN0RUxFZEJRUzlFTEVOQlFXMUZPMEZCUXk5RUxHTkJRVUVzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJXQ3hIUVVGbExFVkJSREJETzBGQlJTOUVMR05CUVVFc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCV0N4SFFVRmxPMEZCUmpKRExHRkJRVzVGTzBGQlNVZ3NWMEZtUkR0QlFXZENTRHM3UVVGQlFUdEJRVU5FTEZGQlFVRXNTMEZCU3l4RFFVRkRMRWRCUVU0c1EwRkJWU3hSUVVGV0xFVkJRVzlDTEZWQlFWTXNTMEZCVkN4RlFVRm5RaXhQUVVGb1FpeEZRVUY1UWp0QlFVTjZReXhqUVVGSkxFOUJRVW9zUlVGQllUdEJRVU5VTEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhIUVVGT0xFTkJRVlVzVjBGQlZpeEZRVUYxUWl4SlFVRjJRaXhEUVVFMFFpeGhRVUUxUWl4RlFVRXlReXhOUVVFdlF5eEZRVUYxUkR0QlFVTnVSQ3hqUVVGQkxFdEJRVXNzUTBGQlF5eEpRVUZPTEVOQlFWY3NZVUZCV0N4RlFVRXdRaXhQUVVFeFFpeERRVUZyUXp0QlFVTTVRaXhuUWtGQlFTeEpRVUZKTEVWQlFVVXNRMEZFZDBJN1FVRkZPVUlzWjBKQlFVRXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhWUVVGRUxFVkJRV0VzUTBGQllpeERRVVpyUWp0QlFVYzVRaXhuUWtGQlFTeExRVUZMTEVWQlFVVXNSMEZJZFVJN1FVRkpPVUlzWjBKQlFVRXNaVUZCWlN4RlFVRkZPMEZCU21Fc1pVRkJiRU1zUlVGTFJ5eEhRVXhJTEVkQlMxTXNVVUZNVkN4RFFVdHJRaXhWUVV4c1FqdEJRVTFJT3p0QlFVRkJPenRCUVVORUxHZENRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRk9MRU5CUVdVc1dVRkJaaXhEUVVGS0xFVkJRV3RETzBGQlF6bENMR05CUVVFc1MwRkJTeXhEUVVGRExFdEJRVTRzUTBGQldTeFZRVUZhTzBGQlEwZ3NZVUZHUkN4TlFVVlBMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVTRzUTBGQlpTeFZRVUZtTEVOQlFVb3NSVUZCWjBNN1FVRkRia01zWTBGQlFTeExRVUZMTEVOQlFVTXNUVUZCVGl4RFFVRmhMRlZCUVdJN1FVRkRTRHM3UVVGQlFUczdRVUZEUkN4blFrRkJTU3hMUVVGTExFTkJRVU1zVVVGQlRpeERRVUZsTEZWQlFXWXNRMEZCU2l4RlFVRm5RenRCUVVNMVFpeGpRVUZCTEV0QlFVc3NRMEZCUXl4alFVRk9MRU5CUVhGQ08wRkJRVU1zWjBKQlFVRXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhWUVVGRUxFVkJRV0VzUlVGQllpeERRVUZTTEVkQlFUSkNPMEZCUVc1RExHVkJRWEpDTzBGQlEwZzdPMEZCUVVFN1FVRkRTanM3UVVGQlFUdEJRVU5LTEZOQmJrSkVPMEZCYjBKSUxFOUJNVVJFTzBGQk1rUklPenRCUVVGQk8wRkJRMG83TzBGQlFVRTdRVUZGUkN4RlFVRkJMR0ZCUVdFN1FVRkZhRUlzUTBGNlJVRXNSVUY1UlVVc1RVRjZSVVk3UVVFMFJVRTdPenRCUVVWQkxFbEJRVWtzUjBGQlNpeEhRVUZWTEVsQlFWWTdRVUZGUkRzN1FVRkhSVHM3T3p0QlFVZEZMRTFCUVUwc1EwRkJReXhOUVVGRUxFTkJRVTRzUTBGQlpTeEZRVUZtTEVOQlFXdENMRTFCUVd4Q0xFVkJRVEJDTEZsQlFWVTdRVUZEYUVNc1JVRkJRU3hOUVVGTkxFTkJRVU1zV1VGQlJDeERRVUZPTEVOQlFYRkNMRTlCUVhKQ0xFTkJRVFpDTEVkQlFUZENPMEZCUTBnc1EwRkdSRHRCUVVsS096dEJRVU5KTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhuUWtGQlJDeERRVUZtTzBGQlJVRXNRMEZCUXl4RFFVRkRMRkZCUVVRc1EwRkJSQ3hEUVVORExFdEJSRVFzUTBGRFR5eFpRVUZaTzBGQlJXWXNSVUZCUVN4WFFVRlhMRU5CUVVNc1NVRkJSQ3hGUVVGUExHRkJRVkFzUTBGQldDeERRVVpsTEVOQlNXNUNPenRCUVVOQkxGZEJRVk1zWTBGQlZDeERRVUYzUWl4WFFVRjRRaXhGUVVGeFF5eGxRVUZ5UXl4RlFVRnpSRHRCUVVOd1JDeEpRVUZCTEVOQlFVTXNRMEZCUXl4M1EwRkJSQ3hEUVVGRUxFTkJRME1zU1VGRVJEczdRVUZGUVN4UlFVRkpMRmRCUVZjc1MwRkJTeXhsUVVGd1FpeEZRVUZ4UXp0QlFVTnVReXhOUVVGQkxFTkJRVU1zUTBGQlF5eHJRa0ZCUkN4RFFVRkVMRU5CUTBNc1NVRkVSRHRCUVVWSUxFdEJTRU1zVFVGSFN5eEpRVUZKTEdWQlFXVXNTMEZCU3l4RFFVRjRRaXhGUVVFeVFqdEJRVU01UWl4TlFVRkJMRU5CUVVNc1EwRkJReXh6UWtGQlJDeERRVUZFTEVOQlEwTXNTVUZFUkR0QlFVVklPMEZCUTBvN1FVRkZSenM3T3pzN096dEJRVTFETEZkQlFWTXNWMEZCVkN4RFFVRnhRaXhOUVVGeVFpeEZRVUUyUWl4WlFVRTNRaXhGUVVFeVF6dEJRVU14UXl4UlFVRkpMR0ZCUVVvN1FVRkJRU3hSUVVOQkxGRkJSRUU3UVVGQlFTeFJRVVZCTEU5QlFVOHNSMEZCUnl4RFFVWldPMEZCU1VFc1NVRkJRU3hEUVVGRExFTkJRVU1zZDBOQlFVUXNRMEZCUkN4RFFVTkRMRXRCUkVRc1EwRkRUeXhaUVVGWk8wRkJRMllzVlVGQlNTeERRVUZETEVOQlFVTXNTVUZCUkN4RFFVRkVMRU5CUTBRc1NVRkVReXhEUVVOSkxFbEJSRW9zVFVGRFl5eHhRa0ZFYkVJc1JVRkRlVU03UVVGRGRrTXNVVUZCUVN4aFFVRmhPMEZCUTNCQ0xFOUJTRXNzVFVGSFF6dEJRVU5JTEZGQlFVRXNZVUZCWVR0QlFVTm9RanM3UVVGRlJDeE5RVUZCTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNc2NVSkJRWEZDTEdGQlFYSkNMRWRCUVhGRExFbEJRWFJETEVOQlFWbzdRVUZEUVN4TlFVRkJMR0ZCUVdFc1EwRkJReXhSUVVGRUxFTkJRV0k3UVVGRFNDeExRVmhMT3p0QlFXRkJMR0ZCUVZNc1lVRkJWQ3hEUVVGMVFpeFJRVUYyUWl4RlFVRnBRenRCUVVNdlFpeFZRVUZKTEVsQlFVa3NSMEZCUnl4UlFVRllPMEZCUTBFc1RVRkJRU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVd3NRMEZCVlN4VlFVRldMRU5CUVdoQ08wRkJRMEVzVFVGQlFTeERRVUZETEVOQlFVTXNjMEpCUVVRc1EwRkJSQ3hEUVVORExFbEJSRVFzUTBGRFRTeEpRVUZKTEVOQlFVTXNTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkVUanRCUVVWQkxFMUJRVUVzUTBGQlF5eERRVUZETEhOQ1FVRkVMRU5CUVVRc1EwRkRReXhKUVVSRUxFTkJRMDBzUzBGRVRpeEZRVU5oTEVsQlFVa3NRMEZCUXl4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVSaU8wRkJSVUVzVFVGQlFTeGpRVUZqTEVOQlFVTXNUMEZCUkN4RlFVRlZMRWxCUVVrc1EwRkJReXhKUVVGTUxFTkJRVlVzVlVGQlZpeERRVUZXTEVOQlFXUTdRVUZEU0RzN1FVRkZSQ3hSUVVGSkxFMUJRVTBzU1VGQlNTeEpRVUZrTEVWQlFXOUNPMEZCUTJoQ0xFMUJRVUVzUTBGQlF5eERRVUZETEdsQ1FVRkVMRU5CUVVRc1EwRkRReXhKUVVSRUxFTkJRMDBzV1VGQldUdEJRVU5rTEZGQlFVRXNUMEZCVHp0QlFVTlFMRkZCUVVFc1EwRkJReXhEUVVGRExFbEJRVVFzUTBGQlJDeERRVU5ETEVsQlJFUXNRMEZEVFN4bFFVUk9MRVZCUTNWQ0xFOUJSSFpDTzBGQlJVZ3NUMEZNUkR0QlFVMUlPenRCUVVORUxFbEJRVUVzUTBGQlF5eERRVUZETEZsQlFVUXNRMEZCUkN4RFFVTkRMRVZCUkVRc1EwRkRTU3hQUVVSS0xFVkJRMkVzV1VGQldUdEJRVU4yUWl4TlFVRkJMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlJDeERRVUZHTEVOQlFXSTdRVUZEU0N4TFFVaERPMEZCU1VnN1FVRkRRU3hEUVdwRlJ5eEZMRU5CYlVWS096dEJRVU5CTEVOQlFVTXNRMEZCUXl4UlFVRkVMRU5CUVVRc1EwRkRReXhQUVVSRUxFTkJRMU1zVlVGQlZTeERRVUZXTEVWQlFXRTdRVUZEYkVJc1ZVRkJVU3hEUVVGRExFTkJRVU1zUzBGQlZqdEJRVU5GTEZOQlFVc3NSVUZCVER0QlFVRlRPMEZCUTFRc1ZVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZTTEVOQlFXRXNWVUZCWWl4TFFVRTBRaXhGUVVFM1FpeEZRVUZwUXl4UlFVRnFReXhKUVVFMlF5eERRVUZETEVOQlFVTXNjMEpCUVVRc1EwRkJSQ3hEUVVFd1FpeEZRVUV4UWl4RFFVRTJRaXhWUVVFM1FpeERRVUZxUkN4RlFVRXlSanRCUVVOMlJpeFJRVUZCTEVOQlFVTXNRMEZCUXl4elFrRkJSQ3hEUVVGRUxFTkJRME1zUzBGRVJEdEJRVVZJT3p0QlFVTkVPenRCUVVWQkxGTkJRVXNzUlVGQlREdEJRVUZUTzBGQlExUXNWVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGU0xFTkJRV0VzVlVGQllpeExRVUUwUWl4RlFVRTNRaXhGUVVGcFF5eFJRVUZxUXl4SlFVRTJReXhEUVVGRExFTkJRVU1zYTBKQlFVUXNRMEZCUkN4RFFVRnpRaXhGUVVGMFFpeERRVUY1UWl4VlFVRjZRaXhEUVVGcVJDeEZRVUYxUmp0QlFVTnVSaXhSUVVGQkxFTkJRVU1zUTBGQlF5eHJRa0ZCUkN4RFFVRkVMRU5CUTBNc1MwRkVSRHRCUVVWSU96dEJRVU5FT3p0QlFVVkJPMEZCUTBVN1FVRkJVVHRCUVdoQ1dqczdRVUZyUWtFc1JVRkJRU3hEUVVGRExFTkJRVU1zWTBGQlJpeEhRVzVDYTBJc1EwRnRRa1U3UVVGRGRrSXNRMEZ5UWtRN1FVRjNRa0VpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJSElvWlN4dUxIUXBlMloxYm1OMGFXOXVJRzhvYVN4bUtYdHBaaWdoYmx0cFhTbDdhV1lvSVdWYmFWMHBlM1poY2lCalBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVTdhV1lvSVdZbUptTXBjbVYwZFhKdUlHTW9hU3doTUNrN2FXWW9kU2x5WlhSMWNtNGdkU2hwTENFd0tUdDJZWElnWVQxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzJrclhDSW5YQ0lwTzNSb2NtOTNJR0V1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhoZlhaaGNpQndQVzViYVYwOWUyVjRjRzl5ZEhNNmUzMTlPMlZiYVYxYk1GMHVZMkZzYkNod0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b2NpbDdkbUZ5SUc0OVpWdHBYVnN4WFZ0eVhUdHlaWFIxY200Z2J5aHVmSHh5S1gwc2NDeHdMbVY0Y0c5eWRITXNjaXhsTEc0c2RDbDljbVYwZFhKdUlHNWJhVjB1Wlhod2IzSjBjMzFtYjNJb2RtRnlJSFU5WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlN4cFBUQTdhVHgwTG14bGJtZDBhRHRwS3lzcGJ5aDBXMmxkS1R0eVpYUjFjbTRnYjMxeVpYUjFjbTRnY24wcEtDa2lMQ0lvWm5WdVkzUnBiMjRvSkNrZ2UxeHlYRzRnSUNBZ1hDSjFjMlVnYzNSeWFXTjBYQ0k3WEhKY2JseHlYRzRnSUNBZ2RtRnlJRzVoZGw5dlptWnpaWFJmZEc5d0lEMGdKQ2duYUdWaFpHVnlKeWt1YUdWcFoyaDBLQ2s3WEhKY2JpQWdJQ0F2S2x4MElDQk9ZWFppWVhJZ1hIUXFMMXh5WEc1Y2NseHVYSFF2THlvZ1RtRjJZbUZ5SUVacGVHVmtYSEpjYmlBZ0lDQm1kVzVqZEdsdmJpQnVZWFppWVhKR2FYaGxaQ2dwZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnSkNnbkxtMWhhVzVmYldWdWRWOWhjbVZoSnlrdWJHVnVaM1JvSUNsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNRb2QybHVaRzkzS1M1elkzSnZiR3dvWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYzJOeWIyeHNJRDBnSkNoM2FXNWtiM2NwTG5OamNtOXNiRlJ2Y0NncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hOamNtOXNiQ0ErUFNCdVlYWmZiMlptYzJWMFgzUnZjQ0FwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0Z3aUxtMWhhVzVmYldWdWRWOWhjbVZoWENJcExtRmtaRU5zWVhOektGd2libUYyWW1GeVgyWnBlR1ZrWENJcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tGd2lMbTFoYVc1ZmJXVnVkVjloY21WaFhDSXBMbkpsYlc5MlpVTnNZWE56S0Z3aWJtRjJZbUZ5WDJacGVHVmtYQ0lwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNGdJQ0FnZlR0Y2NseHVJQ0FnSUc1aGRtSmhja1pwZUdWa0tDazdYSEpjYmx4eVhHNGdJQ0FnTHlvdExTMHRMUzB0TFMwdExTMHFMMXh5WEc1Y2NseHVJQ0FnSUM4cUlDQlVaWE4wYVcxdmJtbGhiSE1nVTJ4cFpHVnlYSEpjYmlBZ0lDQXZLaTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFNvdlhISmNiaUFnSUNCbWRXNWpkR2x2YmlCMFpYTjBhVzF2Ym1sdVlXeHpYMk5oY205MWMyVnNLQ2w3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0FrS0NjdWRHVnpkR2x0YjI1cFlXeHpYM05zYVdSbGNpY3BMbXhsYm1kMGFDQXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWtLQ2N1ZEdWemRHbHRiMjVwWVd4elgzTnNhV1JsY2ljcExtOTNiRU5oY205MWMyVnNLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4dmIzQTZkSEoxWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWhjbWRwYmpvZ01UTXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJYTTZJRE1zWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVlYWTZabUZzYzJVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkWFJ2Y0d4aGVUb2dabUZzYzJVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpiV0Z5ZEZOd1pXVmtPaUF4TlRBd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzkwY3pwMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJWdWRHVnlPaUIwY25WbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6Y0c5dWMybDJaVU5zWVhOek9pQjBjblZsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpjRzl1YzJsMlpUb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEQTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJYTTZJREVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdObGJuUmxjam9nWm1Gc2MyVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFoY21kcGJqb2dNQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEY3dNRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRjem9nTWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyVnVkR1Z5T2lCbVlXeHpaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldGeVoybHVPaUF6TUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRGs1TWpvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBkR1Z0Y3pvZ015eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV0Z5WjJsdU9pQTNNQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lERXlNREE2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiWE02SURNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWhjbWRwYmpvZ01UTXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNCMFpYTjBhVzF2Ym1sdVlXeHpYMk5oY205MWMyVnNLQ2s3WEhKY2JseHlYRzRnSUNBZ0x5b3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdEtpOWNjbHh1SUNBZ0lDOHFJQ0JUYUdGd0lGTnNhV1JsY2x4eVhHNGdJQ0FnTHlvdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0S2k5Y2NseHVJQ0FnSUdaMWJtTjBhVzl1SUhOb1lYQmZZMkZ5YjNWelpXd29LWHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9JQ1FvSnk1emFHRndYM05zYVdSbGNsOXBibTVsY2ljcExteGxibWQwYUNBcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBa0tDY3VjMmhoY0Y5emJHbGtaWEpmYVc1dVpYSW5LUzV2ZDJ4RFlYSnZkWE5sYkNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNiMjl3T25SeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhKbmFXNDZJREFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRjem9nTVN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhkanBtWVd4elpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YxZEc5d2JHRjVPaUJtWVd4elpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE50WVhKMFUzQmxaV1E2SURFMU1EQXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjNSek9uUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCalpXNTBaWEk2SUhSeWRXVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J6YUdGd1gyTmhjbTkxYzJWc0tDazdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTb3ZYSEpjYmlBZ0lDQXZLaUFnVTJ0cGJHd2dRbUZ5WEhKY2JpQWdJQ0F2S2kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzBxTDF4eVhHNGdJQ0FnWm5WdVkzUnBiMjRnY0hKdlozSmxjM05DWVhKRGIyNW1hV2NnS0NrZ2UxeHlYRzRnSUNBZ0lDQjJZWElnY0hKdlozSmxjM05DWVhJZ1BTQWtLQ2N1Y0hKdlozSmxjM01uS1R0Y2NseHVJQ0FnSUNBZ2FXWW9jSEp2WjNKbGMzTkNZWEl1YkdWdVozUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NISnZaM0psYzNOQ1lYSXVaV0ZqYUNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNCMllYSWdVMlZzWmlBOUlDUW9kR2hwY3lrN1hISmNiaUFnSUNBZ0lDQWdJQ0JUWld4bUxtRndjR1ZoY2lobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ3Y205bmNtVnpjMVpoYkhWbElEMGdVMlZzWmk1a1lYUmhLQ2QyWVd4MVpTY3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnVTJWc1ppNW1hVzVrS0NjdWNISnZaM0psYzNNdFltRnlKeWt1WVc1cGJXRjBaU2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZjSEp2WjNKbGMzTldZV3gxWlNzbkpTZGNjbHh1SUNBZ0lDQWdJQ0FnSUgwc0lERXdNREFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1UyVnNaaTVtYVc1a0tDY3ViblZ0WW1WeUp5a3VZMjkxYm5SVWJ5aDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdabkp2YlRvZ01DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiem9nY0hKdlozSmxjM05XWVd4MVpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR1ZsWkRvZ01UQXdNRnh5WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lIMHBYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVjSEp2WjNKbGMzTkNZWEpEYjI1bWFXY2dLQ2s3WEhKY2JseHlYRzRrS0NjdVkyOTFiblJsY2ljcExtTnZkVzUwWlhKVmNDaDdYSEpjYmlBZ0lDQmtaV3hoZVRvZ01UQXNYSEpjYmlBZ0lDQjBhVzFsT2lBeE1EQXdYSEpjYm4wcE8xeHlYRzVjY2x4dUx5b3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdEtpOWNjbHh1WEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMU292WEhKY2JpQWdJQ0F2S2lBZ1IyOXZaMnhsSUcxaGNDQnFjMXh5WEc0Z0lDQWdMeW90TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRLaTljY2x4dVhISmNiaUFnSUNBdkx5QnBaaUFvSUNRb0p5TnRZWEJDYjNneEp5a3ViR1Z1WjNSb0lDbDdYSEpjYmlBZ0lDQXZMeUFnSUNBZ2RtRnlJQ1JzWVhRZ1BTQWtLQ2NqYldGd1FtOTRNU2NwTG1SaGRHRW9KMnhoZENjcE8xeHlYRzRnSUNBZ0x5OGdJQ0FnSUhaaGNpQWtiRzl1SUQwZ0pDZ25JMjFoY0VKdmVERW5LUzVrWVhSaEtDZHNiMjRuS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0IyWVhJZ0pIcHZiMjBnUFNBa0tDY2piV0Z3UW05NE1TY3BMbVJoZEdFb0ozcHZiMjBuS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0IyWVhJZ0pHMWhjbXRsY2lBOUlDUW9KeU50WVhCQ2IzZ3hKeWt1WkdGMFlTZ25iV0Z5YTJWeUp5azdYSEpjYmlBZ0lDQXZMeUFnSUNBZ2RtRnlJQ1JwYm1adklEMGdKQ2duSTIxaGNFSnZlREVuS1M1a1lYUmhLQ2RwYm1adkp5azdYSEpjYmlBZ0lDQXZMeUFnSUNBZ2RtRnlJQ1J0WVhKclpYSk1ZWFFnUFNBa0tDY2piV0Z3UW05NE1TY3BMbVJoZEdFb0oyMXNZWFFuS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0IyWVhJZ0pHMWhjbXRsY2t4dmJpQTlJQ1FvSnlOdFlYQkNiM2d4SnlrdVpHRjBZU2duYld4dmJpY3BPMXh5WEc0Z0lDQWdMeThnSUNBZ0lIWmhjaUJ0WVhBZ1BTQnVaWGNnUjAxaGNITW9lMXh5WEc0Z0lDQWdMeThnSUNBZ0lHVnNPaUFuSTIxaGNFSnZlREVuTEZ4eVhHNGdJQ0FnTHk4Z0lDQWdJR3hoZERvZ0pHeGhkQ3hjY2x4dUlDQWdJQzh2SUNBZ0lDQnNibWM2SUNSc2IyNHNYSEpjYmlBZ0lDQXZMeUFnSUNBZ2MyTnliMnhzZDJobFpXdzZJR1poYkhObExGeHlYRzRnSUNBZ0x5OGdJQ0FnSUhOallXeGxRMjl1ZEhKdmJEb2dkSEoxWlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0J6ZEhKbFpYUldhV1YzUTI5dWRISnZiRG9nWm1Gc2MyVXNYSEpjYmlBZ0lDQXZMeUFnSUNBZ2NHRnVRMjl1ZEhKdmJEb2dkSEoxWlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0JrYVhOaFlteGxSRzkxWW14bFEyeHBZMnRhYjI5dE9pQjBjblZsTEZ4eVhHNGdJQ0FnTHk4Z0lDQWdJRzFoY0ZSNWNHVkRiMjUwY205c09pQm1ZV3h6WlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0I2YjI5dE9pQWtlbTl2YlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ2MzUjViR1Z6T2lCYlhISmNiaUFnSUNBdkx5QjdYSEpjYmlBZ0lDQXZMeUFnSUNBZ1hDSm1aV0YwZFhKbFZIbHdaVndpT2lCY0ltRmtiV2x1YVhOMGNtRjBhWFpsTG1OdmRXNTBjbmxjSWl4Y2NseHVJQ0FnSUM4dklDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpWjJWdmJXVjBjbmxjSWl4Y2NseHVJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0x5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0F2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW5acGMybGlhV3hwZEhsY0lqb2dYQ0p6YVcxd2JHbG1hV1ZrWENKY2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0x5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hDSm9kV1ZjSWpvZ1hDSWpabVl3TURBd1hDSmNjbHh1SUNBZ0lDOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnTHk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUYxY2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0FnWFZ4eVhHNGdJQ0FnTHk4Z0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDOHZJQ0FnSUNCdFlYQXVZV1JrVFdGeWEyVnlLSHRjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0FnYkdGME9pQWtiV0Z5YTJWeVRHRjBMRnh5WEc0Z0lDQWdMeThnSUNBZ0lDQWdJQ0JzYm1jNklDUnRZWEpyWlhKTWIyNHNYSEpjYmlBZ0lDQXZMeUFnSUNBZ0lDQWdJR2xqYjI0NklDUnRZWEpyWlhJc0lDQWdJRnh5WEc0Z0lDQWdMeThnSUNBZ0lDQWdJQ0JwYm1adlYybHVaRzkzT2lCN1hISmNiaUFnSUNBdkx5QWdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWREb2dKR2x1Wm05Y2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0x5OGdJQ0FnSUgwcFhISmNiaUFnSUNBdkx5QjlYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2JXRndPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnRZWEJUZEhsc1pYTWdQU0JiWEhKY2JpQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0ltVnNaVzFsYm5SVWVYQmxYQ0k2SUZ3aVoyVnZiV1YwY25sY0lpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSnpkSGxzWlhKelhDSTZJRnRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKamIyeHZjbHdpT2lCY0lpTXhaREpqTkdSY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUYxY2NseHVJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWENKbGJHVnRaVzUwVkhsd1pWd2lPaUJjSW14aFltVnNjeTUwWlhoMExtWnBiR3hjSWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWENKemRIbHNaWEp6WENJNklGdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0pqYjJ4dmNsd2lPaUJjSWlNNFpXTXpZamxjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRjFjY2x4dUlDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0psYkdWdFpXNTBWSGx3WlZ3aU9pQmNJbXhoWW1Wc2N5NTBaWGgwTG5OMGNtOXJaVndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpGaE16WTBObHdpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2lZV1J0YVc1cGMzUnlZWFJwZG1VdVkyOTFiblJ5ZVZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0ltVnNaVzFsYm5SVWVYQmxYQ0k2SUZ3aVoyVnZiV1YwY25rdWMzUnliMnRsWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpWTI5c2IzSmNJam9nWENJak5HSTJPRGM0WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JkWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRndpWm1WaGRIVnlaVlI1Y0dWY0lqb2dYQ0poWkcxcGJtbHpkSEpoZEdsMlpTNXNZVzVrWDNCaGNtTmxiRndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpYkdGaVpXeHpMblJsZUhRdVptbHNiRndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpZME56YzVaVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2lZV1J0YVc1cGMzUnlZWFJwZG1VdWNISnZkbWx1WTJWY0lpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0ltZGxiMjFsZEhKNUxuTjBjbTlyWlZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW1OdmJHOXlYQ0k2SUZ3aUl6UmlOamczT0Z3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpYkdGdVpITmpZWEJsTG0xaGJsOXRZV1JsWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVpXeGxiV1Z1ZEZSNWNHVmNJam9nWENKblpXOXRaWFJ5ZVM1emRISnZhMlZjSWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWENKemRIbHNaWEp6WENJNklGdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0pqYjJ4dmNsd2lPaUJjSWlNek16UmxPRGRjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRjFjY2x4dUlDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0ptWldGMGRYSmxWSGx3WlZ3aU9pQmNJbXhoYm1SelkyRndaUzV1WVhSMWNtRnNYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRndpWld4bGJXVnVkRlI1Y0dWY0lqb2dYQ0puWlc5dFpYUnllVndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpBeU0yVTFPRndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2ljRzlwWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVpXeGxiV1Z1ZEZSNWNHVmNJam9nWENKblpXOXRaWFJ5ZVZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW1OdmJHOXlYQ0k2SUZ3aUl6STRNMlEyWVZ3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpY0c5cFhDSXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2laV3hsYldWdWRGUjVjR1ZjSWpvZ1hDSnNZV0psYkhNdWRHVjRkQzVtYVd4c1hDSXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2ljM1I1YkdWeWMxd2lPaUJiWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ3aVkyOXNiM0pjSWpvZ1hDSWpObVk1WW1FMVhDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCZFhISmNiaUFnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVptVmhkSFZ5WlZSNWNHVmNJam9nWENKd2IybGNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0psYkdWdFpXNTBWSGx3WlZ3aU9pQmNJbXhoWW1Wc2N5NTBaWGgwTG5OMGNtOXJaVndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpGa01tTTBaRndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2ljRzlwTG5CaGNtdGNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0psYkdWdFpXNTBWSGx3WlZ3aU9pQmNJbWRsYjIxbGRISjVMbVpwYkd4Y0lpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSnpkSGxzWlhKelhDSTZJRnRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKamIyeHZjbHdpT2lCY0lpTXdNak5sTlRoY0lseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUYxY2NseHVJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWENKbVpXRjBkWEpsVkhsd1pWd2lPaUJjSW5CdmFTNXdZWEpyWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVpXeGxiV1Z1ZEZSNWNHVmNJam9nWENKc1lXSmxiSE11ZEdWNGRDNW1hV3hzWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpWTI5c2IzSmNJam9nWENJak0wTTNOamd3WENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JkWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRndpWm1WaGRIVnlaVlI1Y0dWY0lqb2dYQ0p5YjJGa1hDSXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2laV3hsYldWdWRGUjVjR1ZjSWpvZ1hDSm5aVzl0WlhSeWVWd2lMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbk4wZVd4bGNuTmNJam9nVzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJek13TkdFM1pGd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hWeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0ltWmxZWFIxY21WVWVYQmxYQ0k2SUZ3aWNtOWhaRndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpYkdGaVpXeHpMblJsZUhRdVptbHNiRndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXprNFlUVmlaVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2ljbTloWkZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0ltVnNaVzFsYm5SVWVYQmxYQ0k2SUZ3aWJHRmlaV3h6TG5SbGVIUXVjM1J5YjJ0bFhDSXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2ljM1I1YkdWeWMxd2lPaUJiWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ3aVkyOXNiM0pjSWpvZ1hDSWpNV1F5WXpSa1hDSmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCZFhISmNiaUFnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVptVmhkSFZ5WlZSNWNHVmNJam9nWENKeWIyRmtMbWhwWjJoM1lYbGNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0psYkdWdFpXNTBWSGx3WlZ3aU9pQmNJbWRsYjIxbGRISjVYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRndpYzNSNWJHVnljMXdpT2lCYlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGd2lZMjlzYjNKY0lqb2dYQ0lqTW1NMk5qYzFYQ0pjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmRYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2labVZoZEhWeVpWUjVjR1ZjSWpvZ1hDSnliMkZrTG1ocFoyaDNZWGxjSWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWENKbGJHVnRaVzUwVkhsd1pWd2lPaUJjSW1kbGIyMWxkSEo1TG5OMGNtOXJaVndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpJMU5UYzJNMXdpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2ljbTloWkM1b2FXZG9kMkY1WENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVpXeGxiV1Z1ZEZSNWNHVmNJam9nWENKc1lXSmxiSE11ZEdWNGRDNW1hV3hzWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpWTI5c2IzSmNJam9nWENJallqQmtOV05sWENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JkWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRndpWm1WaGRIVnlaVlI1Y0dWY0lqb2dYQ0p5YjJGa0xtaHBaMmgzWVhsY0lpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0lteGhZbVZzY3k1MFpYaDBMbk4wY205clpWd2lMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbk4wZVd4bGNuTmNJam9nVzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJekF5TTJVMU9Gd2lYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hWeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0ltWmxZWFIxY21WVWVYQmxYQ0k2SUZ3aWRISmhibk5wZEZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0ltVnNaVzFsYm5SVWVYQmxYQ0k2SUZ3aWJHRmlaV3h6TG5SbGVIUXVabWxzYkZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW1OdmJHOXlYQ0k2SUZ3aUl6azRZVFZpWlZ3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpZEhKaGJuTnBkRndpTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpYkdGaVpXeHpMblJsZUhRdWMzUnliMnRsWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpWTI5c2IzSmNJam9nWENJak1XUXlZelJrWENKY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JkWEhKY2JpQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRndpWm1WaGRIVnlaVlI1Y0dWY0lqb2dYQ0owY21GdWMybDBMbXhwYm1WY0lpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0ltZGxiMjFsZEhKNUxtWnBiR3hjSWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWENKemRIbHNaWEp6WENJNklGdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0pqYjJ4dmNsd2lPaUJjSWlNeU9ETmtObUZjSWx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRjFjY2x4dUlDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0ptWldGMGRYSmxWSGx3WlZ3aU9pQmNJblJ5WVc1emFYUXVjM1JoZEdsdmJsd2lMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJbVZzWlcxbGJuUlVlWEJsWENJNklGd2laMlZ2YldWMGNubGNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0p6ZEhsc1pYSnpYQ0k2SUZ0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hDSmpiMnh2Y2x3aU9pQmNJaU16WVRRM05qSmNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGMWNjbHh1SUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSm1aV0YwZFhKbFZIbHdaVndpT2lCY0luZGhkR1Z5WENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVpXeGxiV1Z1ZEZSNWNHVmNJam9nWENKblpXOXRaWFJ5ZVZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW1OdmJHOXlYQ0k2SUZ3aUl6QmxNVFl5Tmx3aVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpZDJGMFpYSmNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0psYkdWdFpXNTBWSGx3WlZ3aU9pQmNJbXhoWW1Wc2N5NTBaWGgwTG1acGJHeGNJaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0p6ZEhsc1pYSnpYQ0k2SUZ0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hDSmpiMnh2Y2x3aU9pQmNJaU0wWlRaa056QmNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ1hUdGNjbHh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJwYm1sMFRXRndLQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmlaV1YwY205dmRDQTlJSHRzWVhRNklEUTVMakEyTmpVNE9Td2diRzVuT2lBek15NDBNVE0yTXpaOU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYQWdQU0J1WlhjZ1oyOXZaMnhsTG0xaGNITXVUV0Z3S0dSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R0WVhBbktTd2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJWdWRHVnlPaUJpWldWMGNtOXZkQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhwdmIyMDZJREU0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6T2lCdFlYQlRkSGxzWlhOY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnRZWEpyWlhJZ1BTQnVaWGNnWjI5dloyeGxMbTFoY0hNdVRXRnlhMlZ5S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnZjMmwwYVc5dU9pQmlaV1YwY205dmRDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFoY0RvZ2JXRndMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdOdmJqb2dKMmgwZEhCek9pOHZaR1YyWld4dmNHVnljeTVuYjI5bmJHVXVZMjl0TDIxaGNITXZaRzlqZFcxbGJuUmhkR2x2Ymk5cVlYWmhjMk55YVhCMEwyVjRZVzF3YkdWekwyWjFiR3d2YVcxaFoyVnpMM0JoY210cGJtZGZiRzkwWDIxaGNITXVjRzVuSjF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWEhKY2JpQWdJQ0JjY2x4dWZTa29hbEYxWlhKNUtWeHlYRzVjY2x4dU95aG1kVzVqZEdsdmJpZ2tLU0I3WEhKY2JpQWdJQ0JjSW5WelpTQnpkSEpwWTNSY0lqdGNjbHh1WEhKY2JseHlYRzVjY2x4dUlDQWdJR1oxYm1OMGFXOXVJR2x1YVhSVGEybHNiRUpoY25Nb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHVnNJRDBnSkNnbkxtTnBjbU5zWlY5d2NtOW5jbVZ6Y3ljcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9aV3d1YkdWdVozUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzTG1WaFkyZ29ablZ1WTNScGIyNG9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdKSFJvYVhNZ1BTQWtLSFJvYVhNcExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzV1WlhJZ1BTQWtkR2hwY3k1bWFXNWtLQ2N1WTJseVkyeGxYM0J5YjJkeVpYTnpYMmx1Ym1WeUp5a3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3WlhKalpXNTBZV2RsSUQwZ0pIUm9hWE11WVhSMGNpZ25aR0YwWVMxd1pYSmpaVzUwWVdkbEp5a2dLeUFuSlNjN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSkhSb2FYTXVhR0Z6UTJ4aGMzTW9KMk5wY21OMWJHRnlKeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1pHRjBZWEJoY21ObGJuUWdQU0FrZEdocGN5NWhkSFJ5S0Nka1lYUmhMWEJsY21ObGJuUmhaMlVuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NISnZaM0psYzNNZ1BTQnBibTVsY2k1amFYSmpiR1ZRY205bmNtVnpjeWg3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxPaUF3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemFYcGxPakUzTlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBZMnR1WlhOek9pQWtkR2hwY3k1a1lYUmhLQ2QwYUdsamEyNWxjM01uS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmhjblJCYm1kc1pUb2dUV0YwYUM1UVNTQXFJQzB3TGpVd01UUXhNVGN3TlRVek56WTBNaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlcxd2RIbEdhV3hzT2lBa2RHaHBjeTVrWVhSaEtDZGxiWEIwZVMxbWFXeHNKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGdWFXMWhkR2x2YmpvZ2UyUjFjbUYwYVc5dU9pQXhNVEF3ZlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjJaWEp6WlRvZ0tDUjBhR2x6TG1SaGRHRW9KMmx1ZG1WeWMyVW5LU0E5UFNCbVlXeHpaU2tnUHlCbVlXeHpaU0E2SUdaaGJITmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYVd4c09pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbmNtRmthV1Z1ZERvZ1d5UjBhR2x6TG1SaGRHRW9KM04wWVhKMExXTnZiRzl5Snlrc0lDUjBhR2x6TG1SaGRHRW9KMlZ1WkMxamIyeHZjaWNwWFN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2R5WVdScFpXNTBRVzVuYkdVNklFMWhkR2d1VUVrZ0tpQXpMalV3TVRReE1UY3dOVFV6TnpZME1seHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTa3ViMjRvSjJOcGNtTnNaUzFoYm1sdFlYUnBiMjR0Y0hKdlozSmxjM01uTENCbWRXNWpkR2x2YmlobGRtVnVkQ3dnY0hKdlozSmxjM01wSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDaDBhR2x6S1M1bWFXNWtLQ2R6ZEhKdmJtY25LUzVvZEcxc0tFMWhkR2d1Y205MWJtUW9aR0YwWVhCaGNtTmxiblFnS2lCd2NtOW5jbVZ6Y3lrZ0t5QW5QR2srSlR3dmFUNG5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTluY21WemN5NXZiaWduWTJseVkyeGxMV0Z1YVcxaGRHbHZiaTF3Y205bmNtVnpjeWNzSUdaMWJtTjBhVzl1S0dVc0lIQXNJSFlwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSEJ5YjJkeVpYTnpRbUZ5U1c1dVpYSWdQU0FrS0hSb2FYTXBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm5OMFlXNWpaU0E5SUhCeWIyZHlaWE56UW1GeVNXNXVaWEl1WkdGMFlTZ25ZMmx5WTJ4bExYQnliMmR5WlhOekp5a3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5wZW1VZ1BTQnBibk4wWVc1alpTNXphWHBsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbGphMjVsYzNNZ1BTQnBibk4wWVc1alpTNW5aWFJVYUdsamEyNWxjM01vS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtRmthWFZ6SUQwZ2MybDZaU0F2SURJZ0xTQjBhR2xqYTI1bGMzTWdMeUF5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGJtZHNaU0E5SURJZ0tpQjJJQ29nVFdGMGFDNVFTU0FySUdsdWMzUmhibU5sTG5OMFlYSjBRVzVuYkdVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZ2dQU0J5WVdScGRYTWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGtnUFNCeVlXUnBkWE1nS2lCTllYUm9Mbk5wYmloaGJtZHNaU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTluY21WemMwSmhja2x1Ym1WeUxuQmhjbVZ1ZENncExuTnBZbXhwYm1kektDa3VabWx1WkNnbkxuQmxjbU5sYm5SaFoyVW5LUzUwWlhoMEtIQmhjbk5sU1c1MEtIQWdLaUJ3WVhKelpVbHVkQ2h3WlhKalpXNTBZV2RsS1N3Z01UQXBMQ0F4TUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliMmR5WlhOelFtRnlTVzV1WlhJdWNHRnlaVzUwY3lnbkxuTjBlV3hsTFhCdmJIbG5iMjRuS1M1bWFXNWtLQ2N1Y0dWeVkyVnVkR0ZuWlNjcExtTnpjeWg3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaV1owT2lCNElDc2djMmw2WlNBdklESWdMU0F4TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0RvZ2VTQXJJSE5wZW1VZ0x5QXlJQzBnTVRFZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pIUm9hWE11YjI1bEtDZHBiblpwWlhjbkxDQm1kVzVqZEdsdmJpaGxkbVZ1ZEN3Z2RtbHphV0pzWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJhWE5wWW14bEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNna2RHaHBjeTV1YjNRb0p5NWphWEpqZFd4aGNpY3BMbVpwYm1Rb0p5NXdaWEpqWlc1MFlXZGxKeWt1YkdWdVozUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtkR2hwY3k1bWFXNWtLQ2N1Y0dWeVkyVnVkR0ZuWlNjcExtTnZkVzUwVkc4b2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnliMjA2SURBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHODZJSEJoY25ObFNXNTBLSEJsY21ObGJuUmhaMlVzSURBcExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITndaV1ZrT2lBNU1EQXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtY21WemFFbHVkR1Z5ZG1Gc09pQTFYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtTNWxibVFvS1M1aFpHUkRiR0Z6Y3lnbllXNXBiV0YwWldRbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDUjBhR2x6TG1oaGMwTnNZWE56S0Nkb2IzSnBlbTl1ZEdGc0p5a3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVibVZ5TG5kcFpIUm9LSEJsY21ObGJuUmhaMlVwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDUjBhR2x6TG1oaGMwTnNZWE56S0NkMlpYSjBhV05oYkNjcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJtNWxjaTVvWldsbmFIUW9jR1Z5WTJWdWRHRm5aU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2drZEdocGN5NW9ZWE5EYkdGemN5Z25ZMmx5WTNWc1lYSW5LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzV1WlhJdVkybHlZMnhsVUhKdlozSmxjM01vZTNaaGJIVmxPaUJ3WVhKelpVbHVkQ2h3WlhKalpXNTBZV2RsTENBeE1Da2dMeUF4TURCOUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JpQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lHbHVhWFJUYTJsc2JFSmhjbk1vS1R0Y2NseHVYSEpjYm4wcEtHcFJkV1Z5ZVNsY2NseHVYSEpjYmx4eVhHNGdMeW90TFNCM2IzY2dhbk10TFNBcUwxeHlYRzVjY2x4dUlHNWxkeUJYVDFjb0tTNXBibWwwS0NrN1hISmNibHh5WEc0dktpMHRJR1Z1WkNCM2IzY2dhbk10TFNBcUwxeHlYRzVjY2x4dVhISmNiaUFnTHlvdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhISmNiaUFnSUNCVFZFRlNWQ0F0SUZCeVpXeHZZV1JsY2x4eVhHNGdJQ0FnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdElDb3ZYSEpjYmlBZ0lDQnFVWFZsY25rb2QybHVaRzkzS1M1dmJpZ25iRzloWkNjc0lHWjFibU4wYVc5dUtDbDdYSEpjYmlBZ0lDQWdJQ0FnYWxGMVpYSjVLRndpSTNCeVpXeHZZV1JsY2x3aUtTNW1ZV1JsVDNWMEtEVXdNQ2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYmk4cUxTMGdJQ0JRYjNKMFptOXNhVzhnSUNBZ0tpOWNjbHh1SUNBZ0lHeGxkQ0J0YjJSaGJFbGtJRDBnSkNnbkkybHRZV2RsTFdkaGJHeGxjbmtuS1R0Y2NseHVYSEpjYmlBZ0lDQWtLR1J2WTNWdFpXNTBLVnh5WEc0Z0lDQWdMbkpsWVdSNUtHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdiRzloWkVkaGJHeGxjbmtvZEhKMVpTd2dKMkV1ZEdoMWJXSnVZV2xzSnlrN1hISmNibHh5WEc0Z0lDQWdMeTlVYUdseklHWjFibU4wYVc5dUlHUnBjMkZpYkdWeklHSjFkSFJ2Ym5NZ2QyaGxiaUJ1WldWa1pXUmNjbHh1SUNBZ0lHWjFibU4wYVc5dUlHUnBjMkZpYkdWQ2RYUjBiMjV6S0dOdmRXNTBaWEpmYldGNExDQmpiM1Z1ZEdWeVgyTjFjbkpsYm5RcElIdGNjbHh1SUNBZ0lDQWdKQ2duSTNOb2IzY3RjSEpsZG1sdmRYTXRhVzFoWjJVc0lDTnphRzkzTFc1bGVIUXRhVzFoWjJVbktWeHlYRzRnSUNBZ0lDQXVjMmh2ZHlncE8xeHlYRzRnSUNBZ0lDQnBaaUFvWTI5MWJuUmxjbDl0WVhnZ1BUMDlJR052ZFc1MFpYSmZZM1Z5Y21WdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNRb0p5TnphRzkzTFc1bGVIUXRhVzFoWjJVbktWeHlYRzRnSUNBZ0lDQWdJQzVvYVdSbEtDazdYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR052ZFc1MFpYSmZZM1Z5Y21WdWRDQTlQVDBnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ1FvSnlOemFHOTNMWEJ5WlhacGIzVnpMV2x0WVdkbEp5bGNjbHh1SUNBZ0lDQWdJQ0F1YUdsa1pTZ3BPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhObGRFbEVjeUFnSUNBZ0lDQWdVMlYwY3lCSlJITWdkMmhsYmlCRVQwMGdhWE1nYkc5aFpHVmtMaUJKWmlCMWMybHVaeUJoSUZCSVVDQmpiM1Z1ZEdWeUxDQnpaWFFnZEc4Z1ptRnNjMlV1WEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnYzJWMFEyeHBZMnRCZEhSeUlDQlRaWFJ6SUhSb1pTQmhkSFJ5YVdKMWRHVWdabTl5SUhSb1pTQmpiR2xqYXlCb1lXNWtiR1Z5TGx4eVhHNGdJQ0FnSUNvdlhISmNibHh5WEc0Z0lDQWdJR1oxYm1OMGFXOXVJR3h2WVdSSFlXeHNaWEo1S0hObGRFbEVjeXdnYzJWMFEyeHBZMnRCZEhSeUtTQjdYSEpjYmlBZ0lDQWdJR3hsZENCamRYSnlaVzUwWDJsdFlXZGxMRnh5WEc0Z0lDQWdJQ0J6Wld4bFkzUnZjaXhjY2x4dUlDQWdJQ0FnWTI5MWJuUmxjaUE5SURBN1hISmNibHh5WEc0Z0lDQWdJQ0FrS0NjamMyaHZkeTF1WlhoMExXbHRZV2RsTENBamMyaHZkeTF3Y21WMmFXOTFjeTFwYldGblpTY3BYSEpjYmlBZ0lDQWdJQzVqYkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvSkNoMGFHbHpLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVZWFIwY2lnbmFXUW5LU0E5UFQwZ0ozTm9iM2N0Y0hKbGRtbHZkWE10YVcxaFoyVW5LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUmZhVzFoWjJVdExUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRGOXBiV0ZuWlNzck8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSE5sYkdWamRHOXlJRDBnSkNnblcyUmhkR0V0YVcxaFoyVXRhV1E5WENJbklDc2dZM1Z5Y21WdWRGOXBiV0ZuWlNBcklDZGNJbDBuS1R0Y2NseHVJQ0FnSUhWd1pHRjBaVWRoYkd4bGNua29jMlZzWldOMGIzSXBPMXh5WEc1OUtUdGNjbHh1WEhKY2JpQWdJQ0FnSUdaMWJtTjBhVzl1SUhWd1pHRjBaVWRoYkd4bGNua29jMlZzWldOMGIzSXBJSHRjY2x4dUlDQWdJQ0FnSUNCc1pYUWdKSE5sYkNBOUlITmxiR1ZqZEc5eU8xeHlYRzRnSUNBZ0lDQWdJR04xY25KbGJuUmZhVzFoWjJVZ1BTQWtjMlZzTG1SaGRHRW9KMmx0WVdkbExXbGtKeWs3WEhKY2JpQWdJQ0FnSUNBZ0pDZ25JMmx0WVdkbExXZGhiR3hsY25rdGRHbDBiR1VuS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBaWGgwS0NSelpXd3VaR0YwWVNnbmRHbDBiR1VuS1NrN1hISmNiaUFnSUNBZ0lDQWdKQ2duSTJsdFlXZGxMV2RoYkd4bGNua3RhVzFoWjJVbktWeHlYRzRnSUNBZ0lDQWdJQzVoZEhSeUtDZHpjbU1uTENBa2MyVnNMbVJoZEdFb0oybHRZV2RsSnlrcE8xeHlYRzRnSUNBZ0lDQWdJR1JwYzJGaWJHVkNkWFIwYjI1ektHTnZkVzUwWlhJc0lDUnpaV3d1WkdGMFlTZ25hVzFoWjJVdGFXUW5LU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLSE5sZEVsRWN5QTlQU0IwY25WbEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSkNnblcyUmhkR0V0YVcxaFoyVXRhV1JkSnlsY2NseHVJQ0FnSUNBZ0lDQXVaV0ZqYUNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZkVzUwWlhJckt6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pDaDBhR2x6S1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WVhSMGNpZ25aR0YwWVMxcGJXRm5aUzFwWkNjc0lHTnZkVzUwWlhJcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnSkNoelpYUkRiR2xqYTBGMGRISXBYSEpjYmlBZ0lDQXViMjRvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQjFjR1JoZEdWSFlXeHNaWEo1S0NRb2RHaHBjeWtwTzF4eVhHNGdJSDBwTzF4eVhHNTlYSEpjYm4wcE8xeHlYRzVjY2x4dUx5OGdZblZwYkdRZ2EyVjVJR0ZqZEdsdmJuTmNjbHh1SkNoa2IyTjFiV1Z1ZENsY2NseHVMbXRsZVdSdmQyNG9ablZ1WTNScGIyNGdLR1VwSUh0Y2NseHVJQ0FnSUhOM2FYUmphQ0FvWlM1M2FHbGphQ2tnZTF4eVhHNGdJQ0FnSUNCallYTmxJRE0zT2lBdkx5QnNaV1owWEhKY2JpQWdJQ0FnSUdsbUlDZ29iVzlrWVd4SlpDNWtZWFJoS0NkaWN5NXRiMlJoYkNjcElIeDhJSHQ5S1M1ZmFYTlRhRzkzYmlBbUppQWtLQ2NqYzJodmR5MXdjbVYyYVc5MWN5MXBiV0ZuWlNjcExtbHpLRndpT25acGMybGliR1ZjSWlrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNRb0p5TnphRzkzTFhCeVpYWnBiM1Z6TFdsdFlXZGxKeWxjY2x4dUlDQWdJQ0FnSUNBZ0lDNWpiR2xqYXlncE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJR0p5WldGck8xeHlYRzVjY2x4dUlDQWdJQ0FnWTJGelpTQXpPVG9nTHk4Z2NtbG5hSFJjY2x4dUlDQWdJQ0FnYVdZZ0tDaHRiMlJoYkVsa0xtUmhkR0VvSjJKekxtMXZaR0ZzSnlrZ2ZId2dlMzBwTGw5cGMxTm9iM2R1SUNZbUlDUW9KeU56YUc5M0xXNWxlSFF0YVcxaFoyVW5LUzVwY3loY0lqcDJhWE5wWW14bFhDSXBLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWtLQ2NqYzJodmR5MXVaWGgwTFdsdFlXZGxKeWxjY2x4dUlDQWdJQ0FnSUNBZ0lDNWpiR2xqYXlncE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJR0p5WldGck8xeHlYRzVjY2x4dUlDQWdJQ0FnWkdWbVlYVnNkRHBjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3SUM4dklHVjRhWFFnZEdocGN5Qm9ZVzVrYkdWeUlHWnZjaUJ2ZEdobGNpQnJaWGx6WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3SUM4dklIQnlaWFpsYm5RZ2RHaGxJR1JsWm1GMWJIUWdZV04wYVc5dUlDaHpZM0p2Ykd3Z0x5QnRiM1psSUdOaGNtVjBLVnh5WEc1OUtUdGNjbHh1WEhKY2JseHlYRzR2S2kwdExTMHRJRVZ1WkNBZ1VHOXlkR1p2YkdsdklDMHRMUzB0TFMwdExTMGdJQ0FxTDF4eVhHNGlYWDA9In0=
