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
  // var map;
  // var mapStyles = [
  // {
  //     "elementType": "geometry",
  //     "stylers": [
  //     {
  //         "color": "#1d2c4d"
  //     }
  //     ]
  // },
  // {
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#8ec3b9"
  //     }
  //     ]
  // },
  // {
  //     "elementType": "labels.text.stroke",
  //     "stylers": [
  //     {
  //         "color": "#1a3646"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "administrative.country",
  //     "elementType": "geometry.stroke",
  //     "stylers": [
  //     {
  //         "color": "#4b6878"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "administrative.land_parcel",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#64779e"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "administrative.province",
  //     "elementType": "geometry.stroke",
  //     "stylers": [
  //     {
  //         "color": "#4b6878"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "landscape.man_made",
  //     "elementType": "geometry.stroke",
  //     "stylers": [
  //     {
  //         "color": "#334e87"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "landscape.natural",
  //     "elementType": "geometry",
  //     "stylers": [
  //     {
  //         "color": "#023e58"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "poi",
  //     "elementType": "geometry",
  //     "stylers": [
  //     {
  //         "color": "#283d6a"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "poi",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#6f9ba5"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "poi",
  //     "elementType": "labels.text.stroke",
  //     "stylers": [
  //     {
  //         "color": "#1d2c4d"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "poi.park",
  //     "elementType": "geometry.fill",
  //     "stylers": [
  //     {
  //         "color": "#023e58"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "poi.park",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#3C7680"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "road",
  //     "elementType": "geometry",
  //     "stylers": [
  //     {
  //         "color": "#304a7d"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "road",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#98a5be"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "road",
  //     "elementType": "labels.text.stroke",
  //     "stylers": [
  //     {
  //         "color": "#1d2c4d"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "road.highway",
  //     "elementType": "geometry",
  //     "stylers": [
  //     {
  //         "color": "#2c6675"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "road.highway",
  //     "elementType": "geometry.stroke",
  //     "stylers": [
  //     {
  //         "color": "#255763"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "road.highway",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#b0d5ce"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "road.highway",
  //     "elementType": "labels.text.stroke",
  //     "stylers": [
  //     {
  //         "color": "#023e58"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "transit",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#98a5be"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "transit",
  //     "elementType": "labels.text.stroke",
  //     "stylers": [
  //     {
  //         "color": "#1d2c4d"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "transit.line",
  //     "elementType": "geometry.fill",
  //     "stylers": [
  //     {
  //         "color": "#283d6a"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "transit.station",
  //     "elementType": "geometry",
  //     "stylers": [
  //     {
  //         "color": "#3a4762"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "water",
  //     "elementType": "geometry",
  //     "stylers": [
  //     {
  //         "color": "#0e1626"
  //     }
  //     ]
  // },
  // {
  //     "featureType": "water",
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //     {
  //         "color": "#4e6d70"
  //     }
  //     ]
  // }
  // ];
  // function initMap() {
  //     const beetroot = {lat: 49.066589, lng: 33.413636};
  //     map = new google.maps.Map(document.getElementById('map'), {
  //         center: beetroot,
  //         zoom: 18,
  //         styles: mapStyles
  //     });
  //     var marker = new google.maps.Marker({
  //         position: beetroot,
  //         map: map,
  //         icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png'
  //     });
  // }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy93ZWJjb2xvci9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0FBQ1Q7O0FBRUEsTUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLE1BQVosRUFBckI7QUFDQTtBQUVIOztBQUNHLFdBQVMsV0FBVCxHQUFzQjtBQUNsQixRQUFLLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE1BQTFCLEVBQWtDO0FBQzlCLE1BQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUN4QixZQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsU0FBVixFQUFiOztBQUNBLFlBQUksTUFBTSxJQUFJLGNBQWQsRUFBK0I7QUFDM0IsVUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQixRQUFyQixDQUE4QixjQUE5QjtBQUNILFNBRkQsTUFFTztBQUNILFVBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsV0FBckIsQ0FBaUMsY0FBakM7QUFDSDtBQUNKLE9BUEQ7QUFRSDs7QUFBQTtBQUNKOztBQUFBO0FBQ0QsRUFBQSxXQUFXO0FBRVg7O0FBRUE7OztBQUVBLFdBQVMsc0JBQVQsR0FBaUM7QUFDN0IsUUFBSyxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQixNQUEvQixFQUF1QztBQUNuQyxNQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCLFdBQTFCLENBQXNDO0FBQ2xDLFFBQUEsSUFBSSxFQUFDLElBRDZCO0FBRWxDLFFBQUEsTUFBTSxFQUFFLEdBRjBCO0FBR2xDLFFBQUEsS0FBSyxFQUFFLENBSDJCO0FBSWxDLFFBQUEsR0FBRyxFQUFDLEtBSjhCO0FBS2xDLFFBQUEsUUFBUSxFQUFFLEtBTHdCO0FBTWxDLFFBQUEsVUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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ZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgbmF2X29mZnNldF90b3AgPSAkKCdoZWFkZXInKS5oZWlnaHQoKTtcclxuICAgIC8qXHQgIE5hdmJhciBcdCovXHJcblxyXG5cdC8vKiBOYXZiYXIgRml4ZWRcclxuICAgIGZ1bmN0aW9uIG5hdmJhckZpeGVkKCl7XHJcbiAgICAgICAgaWYgKCAkKCcubWFpbl9tZW51X2FyZWEnKS5sZW5ndGggKXtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID49IG5hdl9vZmZzZXRfdG9wICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubWFpbl9tZW51X2FyZWFcIikuYWRkQ2xhc3MoXCJuYXZiYXJfZml4ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIubWFpbl9tZW51X2FyZWFcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXJfZml4ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgbmF2YmFyRml4ZWQoKTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgLyogIFRlc3RpbW9uaWFscyBTbGlkZXJcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIGZ1bmN0aW9uIHRlc3RpbW9uaW5hbHNfY2Fyb3VzZWwoKXtcclxuICAgICAgICBpZiAoICQoJy50ZXN0aW1vbmlhbHNfc2xpZGVyJykubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICQoJy50ZXN0aW1vbmlhbHNfc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMzAsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDE1MDAsXHJcbiAgICAgICAgICAgICAgICBkb3RzOnRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgNzAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRlc3RpbW9uaW5hbHNfY2Fyb3VzZWwoKTtcclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogIFNoYXAgU2xpZGVyXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgZnVuY3Rpb24gc2hhcF9jYXJvdXNlbCgpe1xyXG4gICAgICAgIGlmICggJCgnLnNoYXBfc2xpZGVyX2lubmVyJykubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICQoJy5zaGFwX3NsaWRlcl9pbm5lcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgbmF2OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc21hcnRTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgICAgIGRvdHM6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNoYXBfY2Fyb3VzZWwoKTtcclxuXHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qICBTa2lsbCBCYXJcclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICBmdW5jdGlvbiBwcm9ncmVzc0JhckNvbmZpZyAoKSB7XHJcbiAgICAgIHZhciBwcm9ncmVzc0JhciA9ICQoJy5wcm9ncmVzcycpO1xyXG4gICAgICBpZihwcm9ncmVzc0Jhci5sZW5ndGgpIHtcclxuICAgICAgICBwcm9ncmVzc0Jhci5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBTZWxmID0gJCh0aGlzKTtcclxuICAgICAgICAgIFNlbGYuYXBwZWFyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzVmFsdWUgPSBTZWxmLmRhdGEoJ3ZhbHVlJyk7XHJcblxyXG4gICAgICAgICAgICBTZWxmLmZpbmQoJy5wcm9ncmVzcy1iYXInKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB3aWR0aDpwcm9ncmVzc1ZhbHVlKyclJ1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBTZWxmLmZpbmQoJy5udW1iZXInKS5jb3VudFRvKHtcclxuICAgICAgICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgICAgICAgIHRvOiBwcm9ncmVzc1ZhbHVlLFxyXG4gICAgICAgICAgICAgIHNwZWVkOiAxMDAwXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxufVxyXG5wcm9ncmVzc0JhckNvbmZpZyAoKTtcclxuXHJcbiQoJy5jb3VudGVyJykuY291bnRlclVwKHtcclxuICAgIGRlbGF5OiAxMCxcclxuICAgIHRpbWU6IDEwMDBcclxufSk7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qICBHb29nbGUgbWFwIGpzXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIC8vIGlmICggJCgnI21hcEJveDEnKS5sZW5ndGggKXtcclxuICAgIC8vICAgICB2YXIgJGxhdCA9ICQoJyNtYXBCb3gxJykuZGF0YSgnbGF0Jyk7XHJcbiAgICAvLyAgICAgdmFyICRsb24gPSAkKCcjbWFwQm94MScpLmRhdGEoJ2xvbicpO1xyXG4gICAgLy8gICAgIHZhciAkem9vbSA9ICQoJyNtYXBCb3gxJykuZGF0YSgnem9vbScpO1xyXG4gICAgLy8gICAgIHZhciAkbWFya2VyID0gJCgnI21hcEJveDEnKS5kYXRhKCdtYXJrZXInKTtcclxuICAgIC8vICAgICB2YXIgJGluZm8gPSAkKCcjbWFwQm94MScpLmRhdGEoJ2luZm8nKTtcclxuICAgIC8vICAgICB2YXIgJG1hcmtlckxhdCA9ICQoJyNtYXBCb3gxJykuZGF0YSgnbWxhdCcpO1xyXG4gICAgLy8gICAgIHZhciAkbWFya2VyTG9uID0gJCgnI21hcEJveDEnKS5kYXRhKCdtbG9uJyk7XHJcbiAgICAvLyAgICAgdmFyIG1hcCA9IG5ldyBHTWFwcyh7XHJcbiAgICAvLyAgICAgZWw6ICcjbWFwQm94MScsXHJcbiAgICAvLyAgICAgbGF0OiAkbGF0LFxyXG4gICAgLy8gICAgIGxuZzogJGxvbixcclxuICAgIC8vICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAvLyAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxyXG4gICAgLy8gICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgIC8vICAgICBwYW5Db250cm9sOiB0cnVlLFxyXG4gICAgLy8gICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRydWUsXHJcbiAgICAvLyAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgLy8gICAgIHpvb206ICR6b29tLFxyXG4gICAgLy8gICAgICAgICBzdHlsZXM6IFtcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUuY291bnRyeVwiLFxyXG4gICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBcImh1ZVwiOiBcIiNmZjAwMDBcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgXVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBdXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIG1hcC5hZGRNYXJrZXIoe1xyXG4gICAgLy8gICAgICAgICBsYXQ6ICRtYXJrZXJMYXQsXHJcbiAgICAvLyAgICAgICAgIGxuZzogJG1hcmtlckxvbixcclxuICAgIC8vICAgICAgICAgaWNvbjogJG1hcmtlciwgICAgXHJcbiAgICAvLyAgICAgICAgIGluZm9XaW5kb3c6IHtcclxuICAgIC8vICAgICAgICAgICBjb250ZW50OiAkaW5mb1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgICAgIC8vIHZhciBtYXA7XHJcbiAgICAgICAgLy8gdmFyIG1hcFN0eWxlcyA9IFtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNvbG9yXCI6IFwiIzFkMmM0ZFwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNvbG9yXCI6IFwiIzhlYzNiOVwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMWEzNjQ2XCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJjb2xvclwiOiBcIiM0YjY4NzhcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjNjQ3NzllXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjNGI2ODc4XCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNvbG9yXCI6IFwiIzMzNGU4N1wiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMDIzZTU4XCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMjgzZDZhXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJjb2xvclwiOiBcIiM2ZjliYTVcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMWQyYzRkXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNvbG9yXCI6IFwiIzAyM2U1OFwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJjb2xvclwiOiBcIiMzQzc2ODBcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMzA0YTdkXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjOThhNWJlXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJjb2xvclwiOiBcIiMxZDJjNGRcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJjb2xvclwiOiBcIiMyYzY2NzVcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMjU1NzYzXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJjb2xvclwiOiBcIiNiMGQ1Y2VcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMDIzZTU4XCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjOThhNWJlXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAvLyAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgXCJjb2xvclwiOiBcIiMxZDJjNGRcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQubGluZVwiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNvbG9yXCI6IFwiIzI4M2Q2YVwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uXCIsXHJcbiAgICAgICAgLy8gICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNvbG9yXCI6IFwiIzNhNDc2MlwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAvLyAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgLy8gICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29sb3JcIjogXCIjMGUxNjI2XCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgIC8vICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgIC8vICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNvbG9yXCI6IFwiIzRlNmQ3MFwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBdO1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGJlZXRyb290ID0ge2xhdDogNDkuMDY2NTg5LCBsbmc6IDMzLjQxMzYzNn07XHJcbiAgICAgICAgLy8gICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IGJlZXRyb290LFxyXG4gICAgICAgIC8vICAgICAgICAgem9vbTogMTgsXHJcbiAgICAgICAgLy8gICAgICAgICBzdHlsZXM6IG1hcFN0eWxlc1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IGJlZXRyb290LFxyXG4gICAgICAgIC8vICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgLy8gICAgICAgICBpY29uOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvZnVsbC9pbWFnZXMvcGFya2luZ19sb3RfbWFwcy5wbmcnXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG59KShqUXVlcnkpXHJcblxyXG47KGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNraWxsQmFycygpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKCcuY2lyY2xlX3Byb2dyZXNzJyk7XHJcblxyXG4gICAgICAgIGlmIChlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBpbm5lciA9ICR0aGlzLmZpbmQoJy5jaXJjbGVfcHJvZ3Jlc3NfaW5uZXInKSxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAkdGhpcy5hdHRyKCdkYXRhLXBlcmNlbnRhZ2UnKSArICclJztcclxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnY2lyY3VsYXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhcGFyY2VudCA9ICR0aGlzLmF0dHIoJ2RhdGEtcGVyY2VudGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGlubmVyLmNpcmNsZVByb2dyZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6MTc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlja25lc3M6ICR0aGlzLmRhdGEoJ3RoaWNrbmVzcycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJICogLTAuNTAxNDExNzA1NTM3NjQyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eUZpbGw6ICR0aGlzLmRhdGEoJ2VtcHR5LWZpbGwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7ZHVyYXRpb246IDExMDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlOiAoJHRoaXMuZGF0YSgnaW52ZXJzZScpID09IGZhbHNlKSA/IGZhbHNlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiBbJHRoaXMuZGF0YSgnc3RhcnQtY29sb3InKSwgJHRoaXMuZGF0YSgnZW5kLWNvbG9yJyldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRBbmdsZTogTWF0aC5QSSAqIDMuNTAxNDExNzA1NTM3NjQyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5vbignY2lyY2xlLWFuaW1hdGlvbi1wcm9ncmVzcycsIGZ1bmN0aW9uKGV2ZW50LCBwcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3N0cm9uZycpLmh0bWwoTWF0aC5yb3VuZChkYXRhcGFyY2VudCAqIHByb2dyZXNzKSArICc8aT4lPC9pPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLm9uKCdjaXJjbGUtYW5pbWF0aW9uLXByb2dyZXNzJywgZnVuY3Rpb24oZSwgcCwgdikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NCYXJJbm5lciA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcHJvZ3Jlc3NCYXJJbm5lci5kYXRhKCdjaXJjbGUtcHJvZ3Jlc3MnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IGluc3RhbmNlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzcyA9IGluc3RhbmNlLmdldFRoaWNrbmVzcygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSBzaXplIC8gMiAtIHRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlID0gMiAqIHYgKiBNYXRoLlBJICsgaW5zdGFuY2Uuc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFySW5uZXIucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCcucGVyY2VudGFnZScpLnRleHQocGFyc2VJbnQocCAqIHBhcnNlSW50KHBlcmNlbnRhZ2UpLCAxMCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXJJbm5lci5wYXJlbnRzKCcuc3R5bGUtcG9seWdvbicpLmZpbmQoJy5wZXJjZW50YWdlJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHggKyBzaXplIC8gMiAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB5ICsgc2l6ZSAvIDIgLSAxMSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5vbmUoJ2ludmlldycsIGZ1bmN0aW9uKGV2ZW50LCB2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGlzLm5vdCgnLmNpcmN1bGFyJykuZmluZCgnLnBlcmNlbnRhZ2UnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5wZXJjZW50YWdlJykuY291bnRUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogcGFyc2VJbnQocGVyY2VudGFnZSwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDkwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoSW50ZXJ2YWw6IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmVuZCgpLmFkZENsYXNzKCdhbmltYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXIud2lkdGgocGVyY2VudGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3ZlcnRpY2FsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyLmhlaWdodChwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdjaXJjdWxhcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lci5jaXJjbGVQcm9ncmVzcyh7dmFsdWU6IHBhcnNlSW50KHBlcmNlbnRhZ2UsIDEwKSAvIDEwMH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdFNraWxsQmFycygpO1xyXG5cclxufSkoalF1ZXJ5KVxyXG5cclxuXHJcbiAvKi0tIHdvdyBqcy0tICovXHJcblxyXG4gbmV3IFdPVygpLmluaXQoKTtcclxuXHJcbi8qLS0gZW5kIHdvdyBqcy0tICovXHJcblxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFNUQVJUIC0gUHJlbG9hZGVyXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIGpRdWVyeSh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBqUXVlcnkoXCIjcHJlbG9hZGVyXCIpLmZhZGVPdXQoNTAwKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbi8qLS0gICBQb3J0Zm9saW8gICAgKi9cclxuICAgIGxldCBtb2RhbElkID0gJCgnI2ltYWdlLWdhbGxlcnknKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KVxyXG4gICAgLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbG9hZEdhbGxlcnkodHJ1ZSwgJ2EudGh1bWJuYWlsJyk7XHJcblxyXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGRpc2FibGVzIGJ1dHRvbnMgd2hlbiBuZWVkZWRcclxuICAgIGZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKGNvdW50ZXJfbWF4LCBjb3VudGVyX2N1cnJlbnQpIHtcclxuICAgICAgJCgnI3Nob3ctcHJldmlvdXMtaW1hZ2UsICNzaG93LW5leHQtaW1hZ2UnKVxyXG4gICAgICAuc2hvdygpO1xyXG4gICAgICBpZiAoY291bnRlcl9tYXggPT09IGNvdW50ZXJfY3VycmVudCkge1xyXG4gICAgICAgICQoJyNzaG93LW5leHQtaW1hZ2UnKVxyXG4gICAgICAgIC5oaWRlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGNvdW50ZXJfY3VycmVudCA9PT0gMSkge1xyXG4gICAgICAgICQoJyNzaG93LXByZXZpb3VzLWltYWdlJylcclxuICAgICAgICAuaGlkZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNldElEcyAgICAgICAgU2V0cyBJRHMgd2hlbiBET00gaXMgbG9hZGVkLiBJZiB1c2luZyBhIFBIUCBjb3VudGVyLCBzZXQgdG8gZmFsc2UuXHJcbiAgICAgKiBAcGFyYW0gc2V0Q2xpY2tBdHRyICBTZXRzIHRoZSBhdHRyaWJ1dGUgZm9yIHRoZSBjbGljayBoYW5kbGVyLlxyXG4gICAgICovXHJcblxyXG4gICAgIGZ1bmN0aW9uIGxvYWRHYWxsZXJ5KHNldElEcywgc2V0Q2xpY2tBdHRyKSB7XHJcbiAgICAgIGxldCBjdXJyZW50X2ltYWdlLFxyXG4gICAgICBzZWxlY3RvcixcclxuICAgICAgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAkKCcjc2hvdy1uZXh0LWltYWdlLCAjc2hvdy1wcmV2aW91cy1pbWFnZScpXHJcbiAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKVxyXG4gICAgICAgICAgICAuYXR0cignaWQnKSA9PT0gJ3Nob3ctcHJldmlvdXMtaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRfaW1hZ2UtLTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudF9pbWFnZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdG9yID0gJCgnW2RhdGEtaW1hZ2UtaWQ9XCInICsgY3VycmVudF9pbWFnZSArICdcIl0nKTtcclxuICAgIHVwZGF0ZUdhbGxlcnkoc2VsZWN0b3IpO1xyXG59KTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZUdhbGxlcnkoc2VsZWN0b3IpIHtcclxuICAgICAgICBsZXQgJHNlbCA9IHNlbGVjdG9yO1xyXG4gICAgICAgIGN1cnJlbnRfaW1hZ2UgPSAkc2VsLmRhdGEoJ2ltYWdlLWlkJyk7XHJcbiAgICAgICAgJCgnI2ltYWdlLWdhbGxlcnktdGl0bGUnKVxyXG4gICAgICAgIC50ZXh0KCRzZWwuZGF0YSgndGl0bGUnKSk7XHJcbiAgICAgICAgJCgnI2ltYWdlLWdhbGxlcnktaW1hZ2UnKVxyXG4gICAgICAgIC5hdHRyKCdzcmMnLCAkc2VsLmRhdGEoJ2ltYWdlJykpO1xyXG4gICAgICAgIGRpc2FibGVCdXR0b25zKGNvdW50ZXIsICRzZWwuZGF0YSgnaW1hZ2UtaWQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNldElEcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtaW1hZ2UtaWRdJylcclxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAuYXR0cignZGF0YS1pbWFnZS1pZCcsIGNvdW50ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJChzZXRDbGlja0F0dHIpXHJcbiAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB1cGRhdGVHYWxsZXJ5KCQodGhpcykpO1xyXG4gIH0pO1xyXG59XHJcbn0pO1xyXG5cclxuLy8gYnVpbGQga2V5IGFjdGlvbnNcclxuJChkb2N1bWVudClcclxuLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICBjYXNlIDM3OiAvLyBsZWZ0XHJcbiAgICAgIGlmICgobW9kYWxJZC5kYXRhKCdicy5tb2RhbCcpIHx8IHt9KS5faXNTaG93biAmJiAkKCcjc2hvdy1wcmV2aW91cy1pbWFnZScpLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICQoJyNzaG93LXByZXZpb3VzLWltYWdlJylcclxuICAgICAgICAgIC5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOTogLy8gcmlnaHRcclxuICAgICAgaWYgKChtb2RhbElkLmRhdGEoJ2JzLm1vZGFsJykgfHwge30pLl9pc1Nob3duICYmICQoJyNzaG93LW5leHQtaW1hZ2UnKS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAkKCcjc2hvdy1uZXh0LWltYWdlJylcclxuICAgICAgICAgIC5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm47IC8vIGV4aXQgdGhpcyBoYW5kbGVyIGZvciBvdGhlciBrZXlzXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIChzY3JvbGwgLyBtb3ZlIGNhcmV0KVxyXG59KTtcclxuXHJcblxyXG4vKi0tLS0tIEVuZCAgUG9ydGZvbGlvIC0tLS0tLS0tLS0gICAqL1xyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OTNaV0pqYjJ4dmNpOXpjbU12YW5NdllYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdRVU5CUVN4RFFVRkRMRlZCUVZNc1EwRkJWQ3hGUVVGWk8wRkJRMVE3TzBGQlJVRXNUVUZCU1N4alFVRmpMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVVFzUTBGQlJDeERRVUZaTEUxQlFWb3NSVUZCY2tJN1FVRkRRVHRCUVVWSU96dEJRVU5ITEZkQlFWTXNWMEZCVkN4SFFVRnpRanRCUVVOc1FpeFJRVUZMTEVOQlFVTXNRMEZCUXl4cFFrRkJSQ3hEUVVGRUxFTkJRWEZDTEUxQlFURkNMRVZCUVd0RE8wRkJRemxDTEUxQlFVRXNRMEZCUXl4RFFVRkRMRTFCUVVRc1EwRkJSQ3hEUVVGVkxFMUJRVllzUTBGQmFVSXNXVUZCVnp0QlFVTjRRaXhaUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCUkN4RFFVRkVMRU5CUVZVc1UwRkJWaXhGUVVGaU96dEJRVU5CTEZsQlFVa3NUVUZCVFN4SlFVRkpMR05CUVdRc1JVRkJLMEk3UVVGRE0wSXNWVUZCUVN4RFFVRkRMRU5CUVVNc2FVSkJRVVFzUTBGQlJDeERRVUZ4UWl4UlFVRnlRaXhEUVVFNFFpeGpRVUU1UWp0QlFVTklMRk5CUmtRc1RVRkZUenRCUVVOSUxGVkJRVUVzUTBGQlF5eERRVUZETEdsQ1FVRkVMRU5CUVVRc1EwRkJjVUlzVjBGQmNrSXNRMEZCYVVNc1kwRkJha003UVVGRFNEdEJRVU5LTEU5QlVFUTdRVUZSU0RzN1FVRkJRVHRCUVVOS096dEJRVUZCTzBGQlEwUXNSVUZCUVN4WFFVRlhPMEZCUlZnN08wRkJSVUU3T3p0QlFVVkJMRmRCUVZNc2MwSkJRVlFzUjBGQmFVTTdRVUZETjBJc1VVRkJTeXhEUVVGRExFTkJRVU1zYzBKQlFVUXNRMEZCUkN4RFFVRXdRaXhOUVVFdlFpeEZRVUYxUXp0QlFVTnVReXhOUVVGQkxFTkJRVU1zUTBGQlF5eHpRa0ZCUkN4RFFVRkVMRU5CUVRCQ0xGZEJRVEZDTEVOQlFYTkRPMEZCUTJ4RExGRkJRVUVzU1VGQlNTeEZRVUZETEVsQlJEWkNPMEZCUld4RExGRkJRVUVzVFVGQlRTeEZRVUZGTEVkQlJqQkNPMEZCUjJ4RExGRkJRVUVzUzBGQlN5eEZRVUZGTEVOQlNESkNPMEZCU1d4RExGRkJRVUVzUjBGQlJ5eEZRVUZETEV0QlNqaENPMEZCUzJ4RExGRkJRVUVzVVVGQlVTeEZRVUZGTEV0QlRIZENPMEZCVFd4RExGRkJRVUVzVlVGQlZTeEZRVUZGTEVsQlRuTkNPMEZCVDJ4RExGRkJRVUVzU1VGQlNTeEZRVUZETEVsQlVEWkNPMEZCVVd4RExGRkJRVUVzVFVGQlRTeEZRVUZGTEVsQlVqQkNPMEZCVTJ4RExGRkJRVUVzWlVGQlpTeEZRVUZGTEVsQlZHbENPMEZCVld4RExGRkJRVUVzVlVGQlZTeEZRVUZGTzBGQlExSXNZVUZCUnp0QlFVTkRMRmxCUVVFc1MwRkJTeXhGUVVGRkxFTkJSRkk3UVVGRlF5eFpRVUZCTEUxQlFVMHNSVUZCUlN4TFFVWlVPMEZCUjBNc1dVRkJRU3hOUVVGTkxFVkJRVVU3UVVGSVZDeFhRVVJMTzBGQlRWSXNaVUZCU3p0QlFVTkVMRmxCUVVFc1MwRkJTeXhGUVVGRkxFTkJSRTQ3UVVGRlJDeFpRVUZCTEUxQlFVMHNSVUZCUlN4TFFVWlFPMEZCUjBRc1dVRkJRU3hOUVVGTkxFVkJRVVU3UVVGSVVDeFhRVTVITzBGQlYxSXNaVUZCU3p0QlFVTkVMRmxCUVVFc1MwRkJTeXhGUVVGRkxFTkJSRTQ3UVVGRlJDeFpRVUZCTEUxQlFVMHNSVUZCUlR0QlFVWlFMRmRCV0VjN1FVRmxVaXhuUWtGQlRUdEJRVU5HTEZsQlFVRXNTMEZCU3l4RlFVRkZMRU5CUkV3N1FVRkZSaXhaUVVGQkxFMUJRVTBzUlVGQlJUdEJRVVpPTzBGQlprVTdRVUZXYzBJc1QwRkJkRU03UVVFclFrZzdRVUZEU2pzN1FVRkRSQ3hGUVVGQkxITkNRVUZ6UWp0QlFVVjBRanM3UVVGRFFUczdPMEZCUlVFc1YwRkJVeXhoUVVGVUxFZEJRWGRDTzBGQlEzQkNMRkZCUVVzc1EwRkJReXhEUVVGRExHOUNRVUZFTEVOQlFVUXNRMEZCZDBJc1RVRkJOMElzUlVGQmNVTTdRVUZEYWtNc1RVRkJRU3hEUVVGRExFTkJRVU1zYjBKQlFVUXNRMEZCUkN4RFFVRjNRaXhYUVVGNFFpeERRVUZ2UXp0QlFVTm9ReXhSUVVGQkxFbEJRVWtzUlVGQlF5eEpRVVF5UWp0QlFVVm9ReXhSUVVGQkxFMUJRVTBzUlVGQlJTeERRVVozUWp0QlFVZG9ReXhSUVVGQkxFdEJRVXNzUlVGQlJTeERRVWg1UWp0QlFVbG9ReXhSUVVGQkxFZEJRVWNzUlVGQlF5eExRVW8wUWp0QlFVdG9ReXhSUVVGQkxGRkJRVkVzUlVGQlJTeExRVXh6UWp0QlFVMW9ReXhSUVVGQkxGVkJRVlVzUlVGQlJTeEpRVTV2UWp0QlFVOW9ReXhSUVVGQkxFbEJRVWtzUlVGQlF5eEpRVkF5UWp0QlFWRm9ReXhSUVVGQkxFMUJRVTBzUlVGQlJUdEJRVkozUWl4UFFVRndRenRCUVZWSU8wRkJRMG83TzBGQlEwUXNSVUZCUVN4aFFVRmhPMEZCUjJJN08wRkJRMEU3T3p0QlFVVkJMRmRCUVZNc2FVSkJRVlFzUjBGQk9FSTdRVUZETlVJc1VVRkJTU3hYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEZkQlFVUXNRMEZCYmtJN08wRkJRMEVzVVVGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCWml4RlFVRjFRanRCUVVOeVFpeE5RVUZCTEZkQlFWY3NRMEZCUXl4SlFVRmFMRU5CUVdsQ0xGbEJRVms3UVVGRE0wSXNXVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVVFzUTBGQldqdEJRVU5CTEZGQlFVRXNTVUZCU1N4RFFVRkRMRTFCUVV3c1EwRkJXU3haUVVGWk8wRkJRM1JDTEdOQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGTUxFTkJRVlVzVDBGQlZpeERRVUZ3UWp0QlFVVkJMRlZCUVVFc1NVRkJTU3hEUVVGRExFbEJRVXdzUTBGQlZTeGxRVUZXTEVWQlFUSkNMRTlCUVROQ0xFTkJRVzFETzBGQlEycERMRmxCUVVFc1MwRkJTeXhGUVVGRExHRkJRV0VzUjBGQlF6dEJRVVJoTEZkQlFXNURMRVZCUlVNc1NVRkdSRHRCUVVsQkxGVkJRVUVzU1VGQlNTeERRVUZETEVsQlFVd3NRMEZCVlN4VFFVRldMRVZCUVhGQ0xFOUJRWEpDTEVOQlFUWkNPMEZCUXpOQ0xGbEJRVUVzU1VGQlNTeEZRVUZGTEVOQlJIRkNPMEZCUlROQ0xGbEJRVUVzUlVGQlJTeEZRVUZGTEdGQlJuVkNPMEZCUnpOQ0xGbEJRVUVzUzBGQlN5eEZRVUZGTzBGQlNHOUNMRmRCUVRkQ08wRkJTMGdzVTBGYVF6dEJRV0ZJTEU5QlprTTdRVUZuUWtnN1FVRkRTanM3UVVGRFJDeEZRVUZCTEdsQ1FVRnBRanRCUVVWcVFpeEZRVUZCTEVOQlFVTXNRMEZCUXl4VlFVRkVMRU5CUVVRc1EwRkJZeXhUUVVGa0xFTkJRWGRDTzBGQlEzQkNMRWxCUVVFc1MwRkJTeXhGUVVGRkxFVkJSR0U3UVVGRmNFSXNTVUZCUVN4SlFVRkpMRVZCUVVVN1FVRkdZeXhIUVVGNFFqdEJRVXRCT3p0QlFVbEpPenRCUVVOQk96dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVWs3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZKVUN4RFFXaGhSQ3hGUVdkaFJ5eE5RV2hoU0RzN1FVRnJZVU1zUTBGQlF5eFZRVUZUTEVOQlFWUXNSVUZCV1R0QlFVTldPenRCUVVsQkxGZEJRVk1zWVVGQlZDeEhRVUY1UWp0QlFVTnlRaXhSUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNhMEpCUVVRc1EwRkJWanM3UVVGRlFTeFJRVUZKTEVWQlFVVXNRMEZCUXl4TlFVRlFMRVZCUVdVN1FVRkRXQ3hOUVVGQkxFVkJRVVVzUTBGQlF5eEpRVUZJTEVOQlFWRXNXVUZCVnp0QlFVTm1MRmxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZFTEVOQlFXSTdRVUZCUVN4WlFVTkJMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlRpeERRVUZYTEhkQ1FVRllMRU5CUkZJN1FVRkJRU3haUVVWQkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCVGl4RFFVRlhMR2xDUVVGWUxFbEJRV2RETEVkQlJqZERPenRCUVVkQkxGbEJRVWtzUzBGQlN5eERRVUZETEZGQlFVNHNRMEZCWlN4VlFVRm1MRU5CUVVvc1JVRkJaME03UVVGRE5VSXNZMEZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVTRzUTBGQlZ5eHBRa0ZCV0N4RFFVRnNRanRCUVVOQkxHTkJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4alFVRk9MRU5CUVhGQ08wRkJRMmhETEZsQlFVRXNTMEZCU3l4RlFVRkZMRU5CUkhsQ08wRkJSV2hETEZsQlFVRXNTVUZCU1N4RlFVRkRMRWRCUmpKQ08wRkJSMmhETEZsQlFVRXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhKUVVGT0xFTkJRVmNzVjBGQldDeERRVWh4UWp0QlFVbG9ReXhaUVVGQkxGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCVEN4SFFVRlZMRU5CUVVNc2FVSkJTbE03UVVGTGFFTXNXVUZCUVN4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVTRzUTBGQlZ5eFpRVUZZTEVOQlRIRkNPMEZCVFdoRExGbEJRVUVzVTBGQlV5eEZRVUZGTzBGQlFVTXNZMEZCUVN4UlFVRlJMRVZCUVVVN1FVRkJXQ3hoUVU1eFFqdEJRVTlvUXl4WlFVRkJMRTlCUVU4c1JVRkJSeXhMUVVGTExFTkJRVU1zU1VGQlRpeERRVUZYTEZOQlFWZ3NTMEZCZVVJc1MwRkJNVUlzUjBGQmJVTXNTMEZCYmtNc1IwRkJNa01zUzBGUWNFSTdRVUZSYUVNc1dVRkJRU3hKUVVGSkxFVkJRVVU3UVVGRFJpeGpRVUZCTEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGT0xFTkJRVmNzWVVGQldDeERRVUZFTEVWQlFUUkNMRXRCUVVzc1EwRkJReXhKUVVGT0xFTkJRVmNzVjBGQldDeERRVUUxUWl4RFFVUlNPMEZCUlVZc1kwRkJRU3hoUVVGaExFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFVd3NSMEZCVlR0QlFVWjJRanRCUVZJd1FpeFhRVUZ5UWl4RlFWbGFMRVZCV2xrc1EwRlpWQ3d5UWtGYVV5eEZRVmx2UWl4VlFVRlRMRXRCUVZRc1JVRkJaMElzVVVGQmFFSXNSVUZCTUVJN1FVRkRla1FzV1VGQlFTeERRVUZETEVOQlFVTXNTVUZCUkN4RFFVRkVMRU5CUVZFc1NVRkJVaXhEUVVGaExGRkJRV0lzUlVGQmRVSXNTVUZCZGtJc1EwRkJORUlzU1VGQlNTeERRVUZETEV0QlFVd3NRMEZCVnl4WFFVRlhMRWRCUVVjc1VVRkJla0lzU1VGQmNVTXNWVUZCYWtVN1FVRkRTQ3hYUVdSakxFTkJRV1k3UVVGbFFTeFZRVUZCTEZGQlFWRXNRMEZCUXl4RlFVRlVMRU5CUVZrc01rSkJRVm9zUlVGQmVVTXNWVUZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhGUVVGbExFTkJRV1lzUlVGQmEwSTdRVUZEZGtRc1owSkJRVWtzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVVFzUTBGQmVFSTdRVUZCUVN4blFrRkRRU3hSUVVGUkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1NVRkJha0lzUTBGQmMwSXNhVUpCUVhSQ0xFTkJSRmc3UVVGQlFTeG5Ra0ZGUVN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJSbWhDTzBGQlFVRXNaMEpCUjBFc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eFpRVUZVTEVWQlNGbzdRVUZCUVN4blFrRkpRU3hOUVVGTkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFWQXNSMEZCVnl4VFFVRlRMRWRCUVVjc1EwRkthRU03UVVGQlFTeG5Ra0ZMUVN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGS0xFZEJRVkVzU1VGQlNTeERRVUZETEVWQlFXSXNSMEZCYTBJc1VVRkJVU3hEUVVGRExGVkJURzVETzBGQlFVRXNaMEpCVFVFc1EwRkJReXhIUVVGSExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRk9ZanRCUVVGQkxHZENRVTlCTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlVHSTdRVUZUUVN4WlFVRkJMR2RDUVVGblFpeERRVUZETEUxQlFXcENMRWRCUVRCQ0xGRkJRVEZDTEVkQlFYRkRMRWxCUVhKRExFTkJRVEJETEdGQlFURkRMRVZCUVhsRUxFbEJRWHBFTEVOQlFUaEVMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFVUXNRMEZCWWl4RlFVRXlRaXhGUVVFelFpeERRVUYwUlN4RlFVRnpSeXhGUVVGMFJ6dEJRVU5CTEZsQlFVRXNaMEpCUVdkQ0xFTkJRVU1zVDBGQmFrSXNRMEZCZVVJc1owSkJRWHBDTEVWQlFUSkRMRWxCUVRORExFTkJRV2RFTEdGQlFXaEVMRVZCUVN0RUxFZEJRUzlFTEVOQlFXMUZPMEZCUXk5RUxHTkJRVUVzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJXQ3hIUVVGbExFVkJSREJETzBGQlJTOUVMR05CUVVFc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCV0N4SFFVRmxPMEZCUmpKRExHRkJRVzVGTzBGQlNVZ3NWMEZtUkR0QlFXZENTRHM3UVVGQlFUdEJRVU5FTEZGQlFVRXNTMEZCU3l4RFFVRkRMRWRCUVU0c1EwRkJWU3hSUVVGV0xFVkJRVzlDTEZWQlFWTXNTMEZCVkN4RlFVRm5RaXhQUVVGb1FpeEZRVUY1UWp0QlFVTjZReXhqUVVGSkxFOUJRVW9zUlVGQllUdEJRVU5VTEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhIUVVGT0xFTkJRVlVzVjBGQlZpeEZRVUYxUWl4SlFVRjJRaXhEUVVFMFFpeGhRVUUxUWl4RlFVRXlReXhOUVVFdlF5eEZRVUYxUkR0QlFVTnVSQ3hqUVVGQkxFdEJRVXNzUTBGQlF5eEpRVUZPTEVOQlFWY3NZVUZCV0N4RlFVRXdRaXhQUVVFeFFpeERRVUZyUXp0QlFVTTVRaXhuUWtGQlFTeEpRVUZKTEVWQlFVVXNRMEZFZDBJN1FVRkZPVUlzWjBKQlFVRXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhWUVVGRUxFVkJRV0VzUTBGQllpeERRVVpyUWp0QlFVYzVRaXhuUWtGQlFTeExRVUZMTEVWQlFVVXNSMEZJZFVJN1FVRkpPVUlzWjBKQlFVRXNaVUZCWlN4RlFVRkZPMEZCU21Fc1pVRkJiRU1zUlVGTFJ5eEhRVXhJTEVkQlMxTXNVVUZNVkN4RFFVdHJRaXhWUVV4c1FqdEJRVTFJT3p0QlFVRkJPenRCUVVORUxHZENRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRk9MRU5CUVdVc1dVRkJaaXhEUVVGS0xFVkJRV3RETzBGQlF6bENMR05CUVVFc1MwRkJTeXhEUVVGRExFdEJRVTRzUTBGQldTeFZRVUZhTzBGQlEwZ3NZVUZHUkN4TlFVVlBMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVTRzUTBGQlpTeFZRVUZtTEVOQlFVb3NSVUZCWjBNN1FVRkRia01zWTBGQlFTeExRVUZMTEVOQlFVTXNUVUZCVGl4RFFVRmhMRlZCUVdJN1FVRkRTRHM3UVVGQlFUczdRVUZEUkN4blFrRkJTU3hMUVVGTExFTkJRVU1zVVVGQlRpeERRVUZsTEZWQlFXWXNRMEZCU2l4RlFVRm5RenRCUVVNMVFpeGpRVUZCTEV0QlFVc3NRMEZCUXl4alFVRk9MRU5CUVhGQ08wRkJRVU1zWjBKQlFVRXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhWUVVGRUxFVkJRV0VzUlVGQllpeERRVUZTTEVkQlFUSkNPMEZCUVc1RExHVkJRWEpDTzBGQlEwZzdPMEZCUVVFN1FVRkRTanM3UVVGQlFUdEJRVU5LTEZOQmJrSkVPMEZCYjBKSUxFOUJNVVJFTzBGQk1rUklPenRCUVVGQk8wRkJRMG83TzBGQlFVRTdRVUZGUkN4RlFVRkJMR0ZCUVdFN1FVRkZhRUlzUTBGNlJVRXNSVUY1UlVVc1RVRjZSVVk3UVVFMFJVRTdPenRCUVVWQkxFbEJRVWtzUjBGQlNpeEhRVUZWTEVsQlFWWTdRVUZGUkRzN1FVRkhSVHM3T3p0QlFVZEZMRTFCUVUwc1EwRkJReXhOUVVGRUxFTkJRVTRzUTBGQlpTeEZRVUZtTEVOQlFXdENMRTFCUVd4Q0xFVkJRVEJDTEZsQlFWVTdRVUZEYUVNc1JVRkJRU3hOUVVGTkxFTkJRVU1zV1VGQlJDeERRVUZPTEVOQlFYRkNMRTlCUVhKQ0xFTkJRVFpDTEVkQlFUZENPMEZCUTBnc1EwRkdSRHRCUVV0S096dEJRVU5KTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhuUWtGQlJDeERRVUZtTzBGQlJVRXNRMEZCUXl4RFFVRkRMRkZCUVVRc1EwRkJSQ3hEUVVORExFdEJSRVFzUTBGRFR5eFpRVUZaTzBGQlJXWXNSVUZCUVN4WFFVRlhMRU5CUVVNc1NVRkJSQ3hGUVVGUExHRkJRVkFzUTBGQldDeERRVVpsTEVOQlNXNUNPenRCUVVOQkxGZEJRVk1zWTBGQlZDeERRVUYzUWl4WFFVRjRRaXhGUVVGeFF5eGxRVUZ5UXl4RlFVRnpSRHRCUVVOd1JDeEpRVUZCTEVOQlFVTXNRMEZCUXl4M1EwRkJSQ3hEUVVGRUxFTkJRME1zU1VGRVJEczdRVUZGUVN4UlFVRkpMRmRCUVZjc1MwRkJTeXhsUVVGd1FpeEZRVUZ4UXp0QlFVTnVReXhOUVVGQkxFTkJRVU1zUTBGQlF5eHJRa0ZCUkN4RFFVRkVMRU5CUTBNc1NVRkVSRHRCUVVWSUxFdEJTRU1zVFVGSFN5eEpRVUZKTEdWQlFXVXNTMEZCU3l4RFFVRjRRaXhGUVVFeVFqdEJRVU01UWl4TlFVRkJMRU5CUVVNc1EwRkJReXh6UWtGQlJDeERRVUZFTEVOQlEwTXNTVUZFUkR0QlFVVklPMEZCUTBvN1FVRkZSenM3T3pzN096dEJRVTFETEZkQlFWTXNWMEZCVkN4RFFVRnhRaXhOUVVGeVFpeEZRVUUyUWl4WlFVRTNRaXhGUVVFeVF6dEJRVU14UXl4UlFVRkpMR0ZCUVVvN1FVRkJRU3hSUVVOQkxGRkJSRUU3UVVGQlFTeFJRVVZCTEU5QlFVOHNSMEZCUnl4RFFVWldPMEZCU1VFc1NVRkJRU3hEUVVGRExFTkJRVU1zZDBOQlFVUXNRMEZCUkN4RFFVTkRMRXRCUkVRc1EwRkRUeXhaUVVGWk8wRkJRMllzVlVGQlNTeERRVUZETEVOQlFVTXNTVUZCUkN4RFFVRkVMRU5CUTBRc1NVRkVReXhEUVVOSkxFbEJSRW9zVFVGRFl5eHhRa0ZFYkVJc1JVRkRlVU03UVVGRGRrTXNVVUZCUVN4aFFVRmhPMEZCUTNCQ0xFOUJTRXNzVFVGSFF6dEJRVU5JTEZGQlFVRXNZVUZCWVR0QlFVTm9RanM3UVVGRlJDeE5RVUZCTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNc2NVSkJRWEZDTEdGQlFYSkNMRWRCUVhGRExFbEJRWFJETEVOQlFWbzdRVUZEUVN4TlFVRkJMR0ZCUVdFc1EwRkJReXhSUVVGRUxFTkJRV0k3UVVGRFNDeExRVmhMT3p0QlFXRkJMR0ZCUVZNc1lVRkJWQ3hEUVVGMVFpeFJRVUYyUWl4RlFVRnBRenRCUVVNdlFpeFZRVUZKTEVsQlFVa3NSMEZCUnl4UlFVRllPMEZCUTBFc1RVRkJRU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVd3NRMEZCVlN4VlFVRldMRU5CUVdoQ08wRkJRMEVzVFVGQlFTeERRVUZETEVOQlFVTXNjMEpCUVVRc1EwRkJSQ3hEUVVORExFbEJSRVFzUTBGRFRTeEpRVUZKTEVOQlFVTXNTVUZCVEN4RFFVRlZMRTlCUVZZc1EwRkVUanRCUVVWQkxFMUJRVUVzUTBGQlF5eERRVUZETEhOQ1FVRkVMRU5CUVVRc1EwRkRReXhKUVVSRUxFTkJRMDBzUzBGRVRpeEZRVU5oTEVsQlFVa3NRMEZCUXl4SlFVRk1MRU5CUVZVc1QwRkJWaXhEUVVSaU8wRkJSVUVzVFVGQlFTeGpRVUZqTEVOQlFVTXNUMEZCUkN4RlFVRlZMRWxCUVVrc1EwRkJReXhKUVVGTUxFTkJRVlVzVlVGQlZpeERRVUZXTEVOQlFXUTdRVUZEU0RzN1FVRkZSQ3hSUVVGSkxFMUJRVTBzU1VGQlNTeEpRVUZrTEVWQlFXOUNPMEZCUTJoQ0xFMUJRVUVzUTBGQlF5eERRVUZETEdsQ1FVRkVMRU5CUVVRc1EwRkRReXhKUVVSRUxFTkJRMDBzV1VGQldUdEJRVU5rTEZGQlFVRXNUMEZCVHp0QlFVTlFMRkZCUVVFc1EwRkJReXhEUVVGRExFbEJRVVFzUTBGQlJDeERRVU5ETEVsQlJFUXNRMEZEVFN4bFFVUk9MRVZCUTNWQ0xFOUJSSFpDTzBGQlJVZ3NUMEZNUkR0QlFVMUlPenRCUVVORUxFbEJRVUVzUTBGQlF5eERRVUZETEZsQlFVUXNRMEZCUkN4RFFVTkRMRVZCUkVRc1EwRkRTU3hQUVVSS0xFVkJRMkVzV1VGQldUdEJRVU4yUWl4TlFVRkJMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlJDeERRVUZHTEVOQlFXSTdRVUZEU0N4TFFVaERPMEZCU1VnN1FVRkRRU3hEUVdwRlJ5eEZMRU5CYlVWS096dEJRVU5CTEVOQlFVTXNRMEZCUXl4UlFVRkVMRU5CUVVRc1EwRkRReXhQUVVSRUxFTkJRMU1zVlVGQlZTeERRVUZXTEVWQlFXRTdRVUZEYkVJc1ZVRkJVU3hEUVVGRExFTkJRVU1zUzBGQlZqdEJRVU5GTEZOQlFVc3NSVUZCVER0QlFVRlRPMEZCUTFRc1ZVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZTTEVOQlFXRXNWVUZCWWl4TFFVRTBRaXhGUVVFM1FpeEZRVUZwUXl4UlFVRnFReXhKUVVFMlF5eERRVUZETEVOQlFVTXNjMEpCUVVRc1EwRkJSQ3hEUVVFd1FpeEZRVUV4UWl4RFFVRTJRaXhWUVVFM1FpeERRVUZxUkN4RlFVRXlSanRCUVVOMlJpeFJRVUZCTEVOQlFVTXNRMEZCUXl4elFrRkJSQ3hEUVVGRUxFTkJRME1zUzBGRVJEdEJRVVZJT3p0QlFVTkVPenRCUVVWQkxGTkJRVXNzUlVGQlREdEJRVUZUTzBGQlExUXNWVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGU0xFTkJRV0VzVlVGQllpeExRVUUwUWl4RlFVRTNRaXhGUVVGcFF5eFJRVUZxUXl4SlFVRTJReXhEUVVGRExFTkJRVU1zYTBKQlFVUXNRMEZCUkN4RFFVRnpRaXhGUVVGMFFpeERRVUY1UWl4VlFVRjZRaXhEUVVGcVJDeEZRVUYxUmp0QlFVTnVSaXhSUVVGQkxFTkJRVU1zUTBGQlF5eHJRa0ZCUkN4RFFVRkVMRU5CUTBNc1MwRkVSRHRCUVVWSU96dEJRVU5FT3p0QlFVVkJPMEZCUTBVN1FVRkJVVHRCUVdoQ1dqczdRVUZyUWtFc1JVRkJRU3hEUVVGRExFTkJRVU1zWTBGQlJpeEhRVzVDYTBJc1EwRnRRa1U3UVVGRGRrSXNRMEZ5UWtRN1FVRjNRa0VpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJSElvWlN4dUxIUXBlMloxYm1OMGFXOXVJRzhvYVN4bUtYdHBaaWdoYmx0cFhTbDdhV1lvSVdWYmFWMHBlM1poY2lCalBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVTdhV1lvSVdZbUptTXBjbVYwZFhKdUlHTW9hU3doTUNrN2FXWW9kU2x5WlhSMWNtNGdkU2hwTENFd0tUdDJZWElnWVQxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzJrclhDSW5YQ0lwTzNSb2NtOTNJR0V1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhoZlhaaGNpQndQVzViYVYwOWUyVjRjRzl5ZEhNNmUzMTlPMlZiYVYxYk1GMHVZMkZzYkNod0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b2NpbDdkbUZ5SUc0OVpWdHBYVnN4WFZ0eVhUdHlaWFIxY200Z2J5aHVmSHh5S1gwc2NDeHdMbVY0Y0c5eWRITXNjaXhsTEc0c2RDbDljbVYwZFhKdUlHNWJhVjB1Wlhod2IzSjBjMzFtYjNJb2RtRnlJSFU5WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlN4cFBUQTdhVHgwTG14bGJtZDBhRHRwS3lzcGJ5aDBXMmxkS1R0eVpYUjFjbTRnYjMxeVpYUjFjbTRnY24wcEtDa2lMQ0lvWm5WdVkzUnBiMjRvSkNrZ2UxeHlYRzRnSUNBZ1hDSjFjMlVnYzNSeWFXTjBYQ0k3WEhKY2JseHlYRzRnSUNBZ2RtRnlJRzVoZGw5dlptWnpaWFJmZEc5d0lEMGdKQ2duYUdWaFpHVnlKeWt1YUdWcFoyaDBLQ2s3WEhKY2JpQWdJQ0F2S2x4MElDQk9ZWFppWVhJZ1hIUXFMMXh5WEc1Y2NseHVYSFF2THlvZ1RtRjJZbUZ5SUVacGVHVmtYSEpjYmlBZ0lDQm1kVzVqZEdsdmJpQnVZWFppWVhKR2FYaGxaQ2dwZTF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnSkNnbkxtMWhhVzVmYldWdWRWOWhjbVZoSnlrdWJHVnVaM1JvSUNsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNRb2QybHVaRzkzS1M1elkzSnZiR3dvWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYzJOeWIyeHNJRDBnSkNoM2FXNWtiM2NwTG5OamNtOXNiRlJ2Y0NncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hOamNtOXNiQ0ErUFNCdVlYWmZiMlptYzJWMFgzUnZjQ0FwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrS0Z3aUxtMWhhVzVmYldWdWRWOWhjbVZoWENJcExtRmtaRU5zWVhOektGd2libUYyWW1GeVgyWnBlR1ZrWENJcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0tGd2lMbTFoYVc1ZmJXVnVkVjloY21WaFhDSXBMbkpsYlc5MlpVTnNZWE56S0Z3aWJtRjJZbUZ5WDJacGVHVmtYQ0lwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNGdJQ0FnZlR0Y2NseHVJQ0FnSUc1aGRtSmhja1pwZUdWa0tDazdYSEpjYmx4eVhHNGdJQ0FnTHlvdExTMHRMUzB0TFMwdExTMHFMMXh5WEc1Y2NseHVJQ0FnSUM4cUlDQlVaWE4wYVcxdmJtbGhiSE1nVTJ4cFpHVnlYSEpjYmlBZ0lDQXZLaTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFNvdlhISmNiaUFnSUNCbWRXNWpkR2x2YmlCMFpYTjBhVzF2Ym1sdVlXeHpYMk5oY205MWMyVnNLQ2w3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0FrS0NjdWRHVnpkR2x0YjI1cFlXeHpYM05zYVdSbGNpY3BMbXhsYm1kMGFDQXBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWtLQ2N1ZEdWemRHbHRiMjVwWVd4elgzTnNhV1JsY2ljcExtOTNiRU5oY205MWMyVnNLSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4dmIzQTZkSEoxWlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWhjbWRwYmpvZ01UTXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJYTTZJRE1zWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVlYWTZabUZzYzJVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkWFJ2Y0d4aGVUb2dabUZzYzJVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpiV0Z5ZEZOd1pXVmtPaUF4TlRBd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzkwY3pwMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJWdWRHVnlPaUIwY25WbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6Y0c5dWMybDJaVU5zWVhOek9pQjBjblZsTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpjRzl1YzJsMlpUb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEQTZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJYTTZJREVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdObGJuUmxjam9nWm1Gc2MyVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzFoY21kcGJqb2dNQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEY3dNRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRjem9nTWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyVnVkR1Z5T2lCbVlXeHpaU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldGeVoybHVPaUF6TUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRGs1TWpvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBkR1Z0Y3pvZ015eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV0Z5WjJsdU9pQTNNQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lERXlNREE2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiWE02SURNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWhjbWRwYmpvZ01UTXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNCMFpYTjBhVzF2Ym1sdVlXeHpYMk5oY205MWMyVnNLQ2s3WEhKY2JseHlYRzRnSUNBZ0x5b3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdEtpOWNjbHh1SUNBZ0lDOHFJQ0JUYUdGd0lGTnNhV1JsY2x4eVhHNGdJQ0FnTHlvdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0S2k5Y2NseHVJQ0FnSUdaMWJtTjBhVzl1SUhOb1lYQmZZMkZ5YjNWelpXd29LWHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9JQ1FvSnk1emFHRndYM05zYVdSbGNsOXBibTVsY2ljcExteGxibWQwYUNBcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBa0tDY3VjMmhoY0Y5emJHbGtaWEpmYVc1dVpYSW5LUzV2ZDJ4RFlYSnZkWE5sYkNoN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNiMjl3T25SeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhKbmFXNDZJREFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRjem9nTVN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhkanBtWVd4elpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YxZEc5d2JHRjVPaUJtWVd4elpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE50WVhKMFUzQmxaV1E2SURFMU1EQXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjNSek9uUnlkV1VzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCalpXNTBaWEk2SUhSeWRXVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J6YUdGd1gyTmhjbTkxYzJWc0tDazdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTb3ZYSEpjYmlBZ0lDQXZLaUFnVTJ0cGJHd2dRbUZ5WEhKY2JpQWdJQ0F2S2kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzBxTDF4eVhHNGdJQ0FnWm5WdVkzUnBiMjRnY0hKdlozSmxjM05DWVhKRGIyNW1hV2NnS0NrZ2UxeHlYRzRnSUNBZ0lDQjJZWElnY0hKdlozSmxjM05DWVhJZ1BTQWtLQ2N1Y0hKdlozSmxjM01uS1R0Y2NseHVJQ0FnSUNBZ2FXWW9jSEp2WjNKbGMzTkNZWEl1YkdWdVozUm9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NISnZaM0psYzNOQ1lYSXVaV0ZqYUNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNCMllYSWdVMlZzWmlBOUlDUW9kR2hwY3lrN1hISmNiaUFnSUNBZ0lDQWdJQ0JUWld4bUxtRndjR1ZoY2lobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ3Y205bmNtVnpjMVpoYkhWbElEMGdVMlZzWmk1a1lYUmhLQ2QyWVd4MVpTY3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnVTJWc1ppNW1hVzVrS0NjdWNISnZaM0psYzNNdFltRnlKeWt1WVc1cGJXRjBaU2g3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZjSEp2WjNKbGMzTldZV3gxWlNzbkpTZGNjbHh1SUNBZ0lDQWdJQ0FnSUgwc0lERXdNREFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1UyVnNaaTVtYVc1a0tDY3ViblZ0WW1WeUp5a3VZMjkxYm5SVWJ5aDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdabkp2YlRvZ01DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiem9nY0hKdlozSmxjM05XWVd4MVpTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR1ZsWkRvZ01UQXdNRnh5WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lIMHBYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVjSEp2WjNKbGMzTkNZWEpEYjI1bWFXY2dLQ2s3WEhKY2JseHlYRzRrS0NjdVkyOTFiblJsY2ljcExtTnZkVzUwWlhKVmNDaDdYSEpjYmlBZ0lDQmtaV3hoZVRvZ01UQXNYSEpjYmlBZ0lDQjBhVzFsT2lBeE1EQXdYSEpjYm4wcE8xeHlYRzVjY2x4dUx5b3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdEtpOWNjbHh1WEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMU292WEhKY2JpQWdJQ0F2S2lBZ1IyOXZaMnhsSUcxaGNDQnFjMXh5WEc0Z0lDQWdMeW90TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRLaTljY2x4dVhISmNiaUFnSUNBdkx5QnBaaUFvSUNRb0p5TnRZWEJDYjNneEp5a3ViR1Z1WjNSb0lDbDdYSEpjYmlBZ0lDQXZMeUFnSUNBZ2RtRnlJQ1JzWVhRZ1BTQWtLQ2NqYldGd1FtOTRNU2NwTG1SaGRHRW9KMnhoZENjcE8xeHlYRzRnSUNBZ0x5OGdJQ0FnSUhaaGNpQWtiRzl1SUQwZ0pDZ25JMjFoY0VKdmVERW5LUzVrWVhSaEtDZHNiMjRuS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0IyWVhJZ0pIcHZiMjBnUFNBa0tDY2piV0Z3UW05NE1TY3BMbVJoZEdFb0ozcHZiMjBuS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0IyWVhJZ0pHMWhjbXRsY2lBOUlDUW9KeU50WVhCQ2IzZ3hKeWt1WkdGMFlTZ25iV0Z5YTJWeUp5azdYSEpjYmlBZ0lDQXZMeUFnSUNBZ2RtRnlJQ1JwYm1adklEMGdKQ2duSTIxaGNFSnZlREVuS1M1a1lYUmhLQ2RwYm1adkp5azdYSEpjYmlBZ0lDQXZMeUFnSUNBZ2RtRnlJQ1J0WVhKclpYSk1ZWFFnUFNBa0tDY2piV0Z3UW05NE1TY3BMbVJoZEdFb0oyMXNZWFFuS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0IyWVhJZ0pHMWhjbXRsY2t4dmJpQTlJQ1FvSnlOdFlYQkNiM2d4SnlrdVpHRjBZU2duYld4dmJpY3BPMXh5WEc0Z0lDQWdMeThnSUNBZ0lIWmhjaUJ0WVhBZ1BTQnVaWGNnUjAxaGNITW9lMXh5WEc0Z0lDQWdMeThnSUNBZ0lHVnNPaUFuSTIxaGNFSnZlREVuTEZ4eVhHNGdJQ0FnTHk4Z0lDQWdJR3hoZERvZ0pHeGhkQ3hjY2x4dUlDQWdJQzh2SUNBZ0lDQnNibWM2SUNSc2IyNHNYSEpjYmlBZ0lDQXZMeUFnSUNBZ2MyTnliMnhzZDJobFpXdzZJR1poYkhObExGeHlYRzRnSUNBZ0x5OGdJQ0FnSUhOallXeGxRMjl1ZEhKdmJEb2dkSEoxWlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0J6ZEhKbFpYUldhV1YzUTI5dWRISnZiRG9nWm1Gc2MyVXNYSEpjYmlBZ0lDQXZMeUFnSUNBZ2NHRnVRMjl1ZEhKdmJEb2dkSEoxWlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0JrYVhOaFlteGxSRzkxWW14bFEyeHBZMnRhYjI5dE9pQjBjblZsTEZ4eVhHNGdJQ0FnTHk4Z0lDQWdJRzFoY0ZSNWNHVkRiMjUwY205c09pQm1ZV3h6WlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0I2YjI5dE9pQWtlbTl2YlN4Y2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ2MzUjViR1Z6T2lCYlhISmNiaUFnSUNBdkx5QjdYSEpjYmlBZ0lDQXZMeUFnSUNBZ1hDSm1aV0YwZFhKbFZIbHdaVndpT2lCY0ltRmtiV2x1YVhOMGNtRjBhWFpsTG1OdmRXNTBjbmxjSWl4Y2NseHVJQ0FnSUM4dklDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpWjJWdmJXVjBjbmxjSWl4Y2NseHVJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0x5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0F2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW5acGMybGlhV3hwZEhsY0lqb2dYQ0p6YVcxd2JHbG1hV1ZrWENKY2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UxeHlYRzRnSUNBZ0x5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hDSm9kV1ZjSWpvZ1hDSWpabVl3TURBd1hDSmNjbHh1SUNBZ0lDOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnTHk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUYxY2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0FnWFZ4eVhHNGdJQ0FnTHk4Z0lDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lDOHZJQ0FnSUNCdFlYQXVZV1JrVFdGeWEyVnlLSHRjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0FnYkdGME9pQWtiV0Z5YTJWeVRHRjBMRnh5WEc0Z0lDQWdMeThnSUNBZ0lDQWdJQ0JzYm1jNklDUnRZWEpyWlhKTWIyNHNYSEpjYmlBZ0lDQXZMeUFnSUNBZ0lDQWdJR2xqYjI0NklDUnRZWEpyWlhJc0lDQWdJRnh5WEc0Z0lDQWdMeThnSUNBZ0lDQWdJQ0JwYm1adlYybHVaRzkzT2lCN1hISmNiaUFnSUNBdkx5QWdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWREb2dKR2x1Wm05Y2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0x5OGdJQ0FnSUgwcFhISmNiaUFnSUNBdkx5QjlYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0F2THlCMllYSWdiV0Z3TzF4eVhHNGdJQ0FnSUNBZ0lDOHZJSFpoY2lCdFlYQlRkSGxzWlhNZ1BTQmJYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2UxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbVZzWlcxbGJuUlVlWEJsWENJNklGd2laMlZ2YldWMGNubGNJaXhjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKemRIbHNaWEp6WENJNklGdGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0FnSUNBZ1hDSmpiMnh2Y2x3aU9pQmNJaU14WkRKak5HUmNJbHh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUYxY2NseHVJQ0FnSUNBZ0lDQXZMeUI5TEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKbGJHVnRaVzUwVkhsd1pWd2lPaUJjSW14aFltVnNjeTUwWlhoMExtWnBiR3hjSWl4Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSnpkSGxzWlhKelhDSTZJRnRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNBZ0lDQWdYQ0pqYjJ4dmNsd2lPaUJjSWlNNFpXTXpZamxjSWx4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lGMWNjbHh1SUNBZ0lDQWdJQ0F2THlCOUxGeHlYRzRnSUNBZ0lDQWdJQzh2SUh0Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0lteGhZbVZzY3k1MFpYaDBMbk4wY205clpWd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJekZoTXpZME5sd2lYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSDBzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpWVdSdGFXNXBjM1J5WVhScGRtVXVZMjkxYm5SeWVWd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpWjJWdmJXVjBjbmt1YzNSeWIydGxYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnSUNBZ0lGd2lZMjlzYjNKY0lqb2dYQ0lqTkdJMk9EYzRYQ0pjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCZFhISmNiaUFnSUNBZ0lDQWdMeThnZlN4Y2NseHVJQ0FnSUNBZ0lDQXZMeUI3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aVptVmhkSFZ5WlZSNWNHVmNJam9nWENKaFpHMXBibWx6ZEhKaGRHbDJaUzVzWVc1a1gzQmhjbU5sYkZ3aUxGeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbVZzWlcxbGJuUlVlWEJsWENJNklGd2liR0ZpWld4ekxuUmxlSFF1Wm1sc2JGd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJelkwTnpjNVpWd2lYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSDBzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpWVdSdGFXNXBjM1J5WVhScGRtVXVjSEp2ZG1sdVkyVmNJaXhjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKbGJHVnRaVzUwVkhsd1pWd2lPaUJjSW1kbGIyMWxkSEo1TG5OMGNtOXJaVndpTEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpSaU5qZzNPRndpWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hWeHlYRzRnSUNBZ0lDQWdJQzh2SUgwc1hISmNiaUFnSUNBZ0lDQWdMeThnZTF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0ltWmxZWFIxY21WVWVYQmxYQ0k2SUZ3aWJHRnVaSE5qWVhCbExtMWhibDl0WVdSbFhDSXNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRndpWld4bGJXVnVkRlI1Y0dWY0lqb2dYQ0puWlc5dFpYUnllUzV6ZEhKdmEyVmNJaXhjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKemRIbHNaWEp6WENJNklGdGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0FnSUNBZ1hDSmpiMnh2Y2x3aU9pQmNJaU16TXpSbE9EZGNJbHh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUYxY2NseHVJQ0FnSUNBZ0lDQXZMeUI5TEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKbVpXRjBkWEpsVkhsd1pWd2lPaUJjSW14aGJtUnpZMkZ3WlM1dVlYUjFjbUZzWENJc1hISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lGd2laV3hsYldWdWRGUjVjR1ZjSWpvZ1hDSm5aVzl0WlhSeWVWd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJekF5TTJVMU9Gd2lYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSDBzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpY0c5cFhDSXNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRndpWld4bGJXVnVkRlI1Y0dWY0lqb2dYQ0puWlc5dFpYUnllVndpTEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpJNE0yUTJZVndpWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hWeHlYRzRnSUNBZ0lDQWdJQzh2SUgwc1hISmNiaUFnSUNBZ0lDQWdMeThnZTF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0ltWmxZWFIxY21WVWVYQmxYQ0k2SUZ3aWNHOXBYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aVpXeGxiV1Z1ZEZSNWNHVmNJam9nWENKc1lXSmxiSE11ZEdWNGRDNW1hV3hzWENJc1hISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lGd2ljM1I1YkdWeWMxd2lPaUJiWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUh0Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ0lDQWdJRndpWTI5c2IzSmNJam9nWENJak5tWTVZbUUxWENKY2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmRYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2ZTeGNjbHh1SUNBZ0lDQWdJQ0F2THlCN1hISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lGd2labVZoZEhWeVpWUjVjR1ZjSWpvZ1hDSndiMmxjSWl4Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0lteGhZbVZzY3k1MFpYaDBMbk4wY205clpWd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJekZrTW1NMFpGd2lYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSDBzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpY0c5cExuQmhjbXRjSWl4Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0ltZGxiMjFsZEhKNUxtWnBiR3hjSWl4Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSnpkSGxzWlhKelhDSTZJRnRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnZTF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNBZ0lDQWdYQ0pqYjJ4dmNsd2lPaUJjSWlNd01qTmxOVGhjSWx4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lGMWNjbHh1SUNBZ0lDQWdJQ0F2THlCOUxGeHlYRzRnSUNBZ0lDQWdJQzh2SUh0Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSm1aV0YwZFhKbFZIbHdaVndpT2lCY0luQnZhUzV3WVhKclhDSXNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRndpWld4bGJXVnVkRlI1Y0dWY0lqb2dYQ0pzWVdKbGJITXVkR1Y0ZEM1bWFXeHNYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnSUNBZ0lGd2lZMjlzYjNKY0lqb2dYQ0lqTTBNM05qZ3dYQ0pjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCZFhISmNiaUFnSUNBZ0lDQWdMeThnZlN4Y2NseHVJQ0FnSUNBZ0lDQXZMeUI3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aVptVmhkSFZ5WlZSNWNHVmNJam9nWENKeWIyRmtYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aVpXeGxiV1Z1ZEZSNWNHVmNJam9nWENKblpXOXRaWFJ5ZVZ3aUxGeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbk4wZVd4bGNuTmNJam9nVzF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lDQWdJQ0JjSW1OdmJHOXlYQ0k2SUZ3aUl6TXdOR0UzWkZ3aVhISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUM4dklIMHNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2UxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2ljbTloWkZ3aUxGeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbVZzWlcxbGJuUlVlWEJsWENJNklGd2liR0ZpWld4ekxuUmxlSFF1Wm1sc2JGd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJems0WVRWaVpWd2lYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSDBzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpY205aFpGd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpYkdGaVpXeHpMblJsZUhRdWMzUnliMnRsWENJc1hISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lGd2ljM1I1YkdWeWMxd2lPaUJiWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUh0Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ0lDQWdJRndpWTI5c2IzSmNJam9nWENJak1XUXlZelJrWENKY2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmRYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2ZTeGNjbHh1SUNBZ0lDQWdJQ0F2THlCN1hISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lGd2labVZoZEhWeVpWUjVjR1ZjSWpvZ1hDSnliMkZrTG1ocFoyaDNZWGxjSWl4Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0ltZGxiMjFsZEhKNVhDSXNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRndpYzNSNWJHVnljMXdpT2lCYlhISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdJQ0FnSUZ3aVkyOXNiM0pjSWpvZ1hDSWpNbU0yTmpjMVhDSmNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JkWEhKY2JpQWdJQ0FnSUNBZ0x5OGdmU3hjY2x4dUlDQWdJQ0FnSUNBdkx5QjdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRndpWm1WaGRIVnlaVlI1Y0dWY0lqb2dYQ0p5YjJGa0xtaHBaMmgzWVhsY0lpeGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdYQ0psYkdWdFpXNTBWSGx3WlZ3aU9pQmNJbWRsYjIxbGRISjVMbk4wY205clpWd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW5OMGVXeGxjbk5jSWpvZ1cxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCY0ltTnZiRzl5WENJNklGd2lJekkxTlRjMk0xd2lYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWFZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSDBzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1abFlYUjFjbVZVZVhCbFhDSTZJRndpY205aFpDNW9hV2RvZDJGNVhDSXNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRndpWld4bGJXVnVkRlI1Y0dWY0lqb2dYQ0pzWVdKbGJITXVkR1Y0ZEM1bWFXeHNYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnSUNBZ0lGd2lZMjlzYjNKY0lqb2dYQ0lqWWpCa05XTmxYQ0pjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCZFhISmNiaUFnSUNBZ0lDQWdMeThnZlN4Y2NseHVJQ0FnSUNBZ0lDQXZMeUI3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aVptVmhkSFZ5WlZSNWNHVmNJam9nWENKeWIyRmtMbWhwWjJoM1lYbGNJaXhjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKbGJHVnRaVzUwVkhsd1pWd2lPaUJjSW14aFltVnNjeTUwWlhoMExuTjBjbTlyWlZ3aUxGeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbk4wZVd4bGNuTmNJam9nVzF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lDQWdJQ0JjSW1OdmJHOXlYQ0k2SUZ3aUl6QXlNMlUxT0Z3aVhISmNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdYVnh5WEc0Z0lDQWdJQ0FnSUM4dklIMHNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2UxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbVpsWVhSMWNtVlVlWEJsWENJNklGd2lkSEpoYm5OcGRGd2lMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0JjSW1Wc1pXMWxiblJVZVhCbFhDSTZJRndpYkdGaVpXeHpMblJsZUhRdVptbHNiRndpTEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXprNFlUVmlaVndpWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hWeHlYRzRnSUNBZ0lDQWdJQzh2SUgwc1hISmNiaUFnSUNBZ0lDQWdMeThnZTF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0ltWmxZWFIxY21WVWVYQmxYQ0k2SUZ3aWRISmhibk5wZEZ3aUxGeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmNJbVZzWlcxbGJuUlVlWEJsWENJNklGd2liR0ZpWld4ekxuUmxlSFF1YzNSeWIydGxYQ0lzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aWMzUjViR1Z5YzF3aU9pQmJYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnSUNBZ0lGd2lZMjlzYjNKY0lqb2dYQ0lqTVdReVl6UmtYQ0pjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCZFhISmNiaUFnSUNBZ0lDQWdMeThnZlN4Y2NseHVJQ0FnSUNBZ0lDQXZMeUI3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUZ3aVptVmhkSFZ5WlZSNWNHVmNJam9nWENKMGNtRnVjMmwwTG14cGJtVmNJaXhjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKbGJHVnRaVzUwVkhsd1pWd2lPaUJjSW1kbGIyMWxkSEo1TG1acGJHeGNJaXhjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKemRIbHNaWEp6WENJNklGdGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0FnSUNBZ1hDSmpiMnh2Y2x3aU9pQmNJaU15T0ROa05tRmNJbHh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUYxY2NseHVJQ0FnSUNBZ0lDQXZMeUI5TEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnWENKbVpXRjBkWEpsVkhsd1pWd2lPaUJjSW5SeVlXNXphWFF1YzNSaGRHbHZibHdpTEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0ltVnNaVzFsYm5SVWVYQmxYQ0k2SUZ3aVoyVnZiV1YwY25sY0lpeGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdYQ0p6ZEhsc1pYSnpYQ0k2SUZ0Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQWdJQ0FnWENKamIyeHZjbHdpT2lCY0lpTXpZVFEzTmpKY0lseHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRjFjY2x4dUlDQWdJQ0FnSUNBdkx5QjlMRnh5WEc0Z0lDQWdJQ0FnSUM4dklIdGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdYQ0ptWldGMGRYSmxWSGx3WlZ3aU9pQmNJbmRoZEdWeVhDSXNYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRndpWld4bGJXVnVkRlI1Y0dWY0lqb2dYQ0puWlc5dFpYUnllVndpTEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0luTjBlV3hsY25OY0lqb2dXMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUNBZ0lDQmNJbU52Ykc5eVhDSTZJRndpSXpCbE1UWXlObHdpWEhKY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hWeHlYRzRnSUNBZ0lDQWdJQzh2SUgwc1hISmNiaUFnSUNBZ0lDQWdMeThnZTF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCY0ltWmxZWFIxY21WVWVYQmxYQ0k2SUZ3aWQyRjBaWEpjSWl4Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ1hDSmxiR1Z0Wlc1MFZIbHdaVndpT2lCY0lteGhZbVZzY3k1MFpYaDBMbVpwYkd4Y0lpeGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdYQ0p6ZEhsc1pYSnpYQ0k2SUZ0Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ2UxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQWdJQ0FnWENKamIyeHZjbHdpT2lCY0lpTTBaVFprTnpCY0lseHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJRjFjY2x4dUlDQWdJQ0FnSUNBdkx5QjlYSEpjYmlBZ0lDQWdJQ0FnTHk4Z1hUdGNjbHh1SUNBZ0lDQWdJQ0F2THlCbWRXNWpkR2x2YmlCcGJtbDBUV0Z3S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQmpiMjV6ZENCaVpXVjBjbTl2ZENBOUlIdHNZWFE2SURRNUxqQTJOalU0T1N3Z2JHNW5PaUF6TXk0ME1UTTJNelo5TzF4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNCdFlYQWdQU0J1WlhjZ1oyOXZaMnhsTG0xaGNITXVUV0Z3S0dSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R0WVhBbktTd2dlMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0FnSUNBZ1kyVnVkR1Z5T2lCaVpXVjBjbTl2ZEN4Y2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ0lDQWdJSHB2YjIwNklERTRMRnh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0FnSUNBZ2MzUjViR1Z6T2lCdFlYQlRkSGxzWlhOY2NseHVJQ0FnSUNBZ0lDQXZMeUFnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJSFpoY2lCdFlYSnJaWElnUFNCdVpYY2daMjl2WjJ4bExtMWhjSE11VFdGeWEyVnlLSHRjY2x4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnSUNBZ0lIQnZjMmwwYVc5dU9pQmlaV1YwY205dmRDeGNjbHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdJQ0FnSUcxaGNEb2diV0Z3TEZ4eVhHNGdJQ0FnSUNBZ0lDOHZJQ0FnSUNBZ0lDQWdhV052YmpvZ0oyaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeWN5NW5iMjluYkdVdVkyOXRMMjFoY0hNdlpHOWpkVzFsYm5SaGRHbHZiaTlxWVhaaGMyTnlhWEIwTDJWNFlXMXdiR1Z6TDJaMWJHd3ZhVzFoWjJWekwzQmhjbXRwYm1kZmJHOTBYMjFoY0hNdWNHNW5KMXh5WEc0Z0lDQWdJQ0FnSUM4dklDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQXZMeUI5WEhKY2JseHlYRzRnSUNBZ1hISmNiaUFnSUNCY2NseHVmU2tvYWxGMVpYSjVLVnh5WEc1Y2NseHVPeWhtZFc1amRHbHZiaWdrS1NCN1hISmNiaUFnSUNCY0luVnpaU0J6ZEhKcFkzUmNJanRjY2x4dVhISmNibHh5WEc1Y2NseHVJQ0FnSUdaMWJtTjBhVzl1SUdsdWFYUlRhMmxzYkVKaGNuTW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR1ZzSUQwZ0pDZ25MbU5wY21Oc1pWOXdjbTluY21WemN5Y3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvWld3dWJHVnVaM1JvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWc0xtVmhZMmdvWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnSkhSb2FYTWdQU0FrS0hSb2FYTXBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1dVpYSWdQU0FrZEdocGN5NW1hVzVrS0NjdVkybHlZMnhsWDNCeWIyZHlaWE56WDJsdWJtVnlKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1pYSmpaVzUwWVdkbElEMGdKSFJvYVhNdVlYUjBjaWduWkdGMFlTMXdaWEpqWlc1MFlXZGxKeWtnS3lBbkpTYzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0pIUm9hWE11YUdGelEyeGhjM01vSjJOcGNtTjFiR0Z5SnlrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR0YwWVhCaGNtTmxiblFnUFNBa2RHaHBjeTVoZEhSeUtDZGtZWFJoTFhCbGNtTmxiblJoWjJVbktUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjSEp2WjNKbGMzTWdQU0JwYm01bGNpNWphWEpqYkdWUWNtOW5jbVZ6Y3loN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsT2lBd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnphWHBsT2pFM05TeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwWTJ0dVpYTnpPaUFrZEdocGN5NWtZWFJoS0NkMGFHbGphMjVsYzNNbktTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JoY25SQmJtZHNaVG9nVFdGMGFDNVFTU0FxSUMwd0xqVXdNVFF4TVRjd05UVXpOelkwTWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXMXdkSGxHYVd4c09pQWtkR2hwY3k1a1lYUmhLQ2RsYlhCMGVTMW1hV3hzSnlrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnVhVzFoZEdsdmJqb2dlMlIxY21GMGFXOXVPaUF4TVRBd2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYyWlhKelpUb2dLQ1IwYUdsekxtUmhkR0VvSjJsdWRtVnljMlVuS1NBOVBTQm1ZV3h6WlNrZ1B5Qm1ZV3h6WlNBNklHWmhiSE5sTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5jbUZrYVdWdWREb2dXeVIwYUdsekxtUmhkR0VvSjNOMFlYSjBMV052Ykc5eUp5a3NJQ1IwYUdsekxtUmhkR0VvSjJWdVpDMWpiMnh2Y2ljcFhTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkeVlXUnBaVzUwUVc1bmJHVTZJRTFoZEdndVVFa2dLaUF6TGpVd01UUXhNVGN3TlRVek56WTBNbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2t1YjI0b0oyTnBjbU5zWlMxaGJtbHRZWFJwYjI0dGNISnZaM0psYzNNbkxDQm1kVzVqZEdsdmJpaGxkbVZ1ZEN3Z2NISnZaM0psYzNNcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKQ2gwYUdsektTNW1hVzVrS0NkemRISnZibWNuS1M1b2RHMXNLRTFoZEdndWNtOTFibVFvWkdGMFlYQmhjbU5sYm5RZ0tpQndjbTluY21WemN5a2dLeUFuUEdrK0pUd3ZhVDRuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205bmNtVnpjeTV2YmlnblkybHlZMnhsTFdGdWFXMWhkR2x2Ymkxd2NtOW5jbVZ6Y3ljc0lHWjFibU4wYVc5dUtHVXNJSEFzSUhZcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhCeWIyZHlaWE56UW1GeVNXNXVaWElnUFNBa0tIUm9hWE1wTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJuTjBZVzVqWlNBOUlIQnliMmR5WlhOelFtRnlTVzV1WlhJdVpHRjBZU2duWTJseVkyeGxMWEJ5YjJkeVpYTnpKeWtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOcGVtVWdQU0JwYm5OMFlXNWpaUzV6YVhwbExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2xqYTI1bGMzTWdQU0JwYm5OMFlXNWpaUzVuWlhSVWFHbGphMjVsYzNNb0tTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbUZrYVhWeklEMGdjMmw2WlNBdklESWdMU0IwYUdsamEyNWxjM01nTHlBeUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhibWRzWlNBOUlESWdLaUIySUNvZ1RXRjBhQzVRU1NBcklHbHVjM1JoYm1ObExuTjBZWEowUVc1bmJHVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGdnUFNCeVlXUnBkWE1nS2lCTllYUm9MbU52Y3loaGJtZHNaU2tzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrZ1BTQnlZV1JwZFhNZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205bmNtVnpjMEpoY2tsdWJtVnlMbkJoY21WdWRDZ3BMbk5wWW14cGJtZHpLQ2t1Wm1sdVpDZ25MbkJsY21ObGJuUmhaMlVuS1M1MFpYaDBLSEJoY25ObFNXNTBLSEFnS2lCd1lYSnpaVWx1ZENod1pYSmpaVzUwWVdkbEtTd2dNVEFwTENBeE1DazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjJkeVpYTnpRbUZ5U1c1dVpYSXVjR0Z5Wlc1MGN5Z25Mbk4wZVd4bExYQnZiSGxuYjI0bktTNW1hVzVrS0NjdWNHVnlZMlZ1ZEdGblpTY3BMbU56Y3loN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWldaME9pQjRJQ3NnYzJsNlpTQXZJRElnTFNBeE1DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdmNEb2dlU0FySUhOcGVtVWdMeUF5SUMwZ01URWdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKSFJvYVhNdWIyNWxLQ2RwYm5acFpYY25MQ0JtZFc1amRHbHZiaWhsZG1WdWRDd2dkbWx6YVdKc1pTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyYVhOcFlteGxLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2tkR2hwY3k1dWIzUW9KeTVqYVhKamRXeGhjaWNwTG1acGJtUW9KeTV3WlhKalpXNTBZV2RsSnlrdWJHVnVaM1JvS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrZEdocGN5NW1hVzVrS0NjdWNHVnlZMlZ1ZEdGblpTY3BMbU52ZFc1MFZHOG9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklEQXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkRzg2SUhCaGNuTmxTVzUwS0hCbGNtTmxiblJoWjJVc0lEQXBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE53WldWa09pQTVNREFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbWNtVnphRWx1ZEdWeWRtRnNPaUExWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLUzVsYm1Rb0tTNWhaR1JEYkdGemN5Z25ZVzVwYldGMFpXUW5LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ1IwYUdsekxtaGhjME5zWVhOektDZG9iM0pwZW05dWRHRnNKeWtwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x1Ym1WeUxuZHBaSFJvS0hCbGNtTmxiblJoWjJVcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ1IwYUdsekxtaGhjME5zWVhOektDZDJaWEowYVdOaGJDY3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibTVsY2k1b1pXbG5hSFFvY0dWeVkyVnVkR0ZuWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNna2RHaHBjeTVvWVhORGJHRnpjeWduWTJseVkzVnNZWEluS1NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1dVpYSXVZMmx5WTJ4bFVISnZaM0psYzNNb2UzWmhiSFZsT2lCd1lYSnpaVWx1ZENod1pYSmpaVzUwWVdkbExDQXhNQ2tnTHlBeE1EQjlLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNiaUFnSUNCOU8xeHlYRzVjY2x4dUlDQWdJR2x1YVhSVGEybHNiRUpoY25Nb0tUdGNjbHh1WEhKY2JuMHBLR3BSZFdWeWVTbGNjbHh1WEhKY2JseHlYRzRnTHlvdExTQjNiM2NnYW5NdExTQXFMMXh5WEc1Y2NseHVJRzVsZHlCWFQxY29LUzVwYm1sMEtDazdYSEpjYmx4eVhHNHZLaTB0SUdWdVpDQjNiM2NnYW5NdExTQXFMMXh5WEc1Y2NseHVYSEpjYmlBZ0x5b3RMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYSEpjYmlBZ0lDQlRWRUZTVkNBdElGQnlaV3h2WVdSbGNseHlYRzRnSUNBZ0xTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRJQ292WEhKY2JpQWdJQ0JxVVhWbGNua29kMmx1Wkc5M0tTNXZiaWduYkc5aFpDY3NJR1oxYm1OMGFXOXVLQ2w3WEhKY2JpQWdJQ0FnSUNBZ2FsRjFaWEo1S0Z3aUkzQnlaV3h2WVdSbGNsd2lLUzVtWVdSbFQzVjBLRFV3TUNrN1hISmNiaUFnSUNCOUtUdGNjbHh1WEhKY2JseHlYRzR2S2kwdElDQWdVRzl5ZEdadmJHbHZJQ0FnSUNvdlhISmNiaUFnSUNCc1pYUWdiVzlrWVd4SlpDQTlJQ1FvSnlOcGJXRm5aUzFuWVd4c1pYSjVKeWs3WEhKY2JseHlYRzRnSUNBZ0pDaGtiMk4xYldWdWRDbGNjbHh1SUNBZ0lDNXlaV0ZrZVNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHeHZZV1JIWVd4c1pYSjVLSFJ5ZFdVc0lDZGhMblJvZFcxaWJtRnBiQ2NwTzF4eVhHNWNjbHh1SUNBZ0lDOHZWR2hwY3lCbWRXNWpkR2x2YmlCa2FYTmhZbXhsY3lCaWRYUjBiMjV6SUhkb1pXNGdibVZsWkdWa1hISmNiaUFnSUNCbWRXNWpkR2x2YmlCa2FYTmhZbXhsUW5WMGRHOXVjeWhqYjNWdWRHVnlYMjFoZUN3Z1kyOTFiblJsY2w5amRYSnlaVzUwS1NCN1hISmNiaUFnSUNBZ0lDUW9KeU56YUc5M0xYQnlaWFpwYjNWekxXbHRZV2RsTENBamMyaHZkeTF1WlhoMExXbHRZV2RsSnlsY2NseHVJQ0FnSUNBZ0xuTm9iM2NvS1R0Y2NseHVJQ0FnSUNBZ2FXWWdLR052ZFc1MFpYSmZiV0Y0SUQwOVBTQmpiM1Z1ZEdWeVgyTjFjbkpsYm5RcElIdGNjbHh1SUNBZ0lDQWdJQ0FrS0NjamMyaHZkeTF1WlhoMExXbHRZV2RsSnlsY2NseHVJQ0FnSUNBZ0lDQXVhR2xrWlNncE8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiM1Z1ZEdWeVgyTjFjbkpsYm5RZ1BUMDlJREVwSUh0Y2NseHVJQ0FnSUNBZ0lDQWtLQ2NqYzJodmR5MXdjbVYyYVc5MWN5MXBiV0ZuWlNjcFhISmNiaUFnSUNBZ0lDQWdMbWhwWkdVb0tUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0J6WlhSSlJITWdJQ0FnSUNBZ0lGTmxkSE1nU1VSeklIZG9aVzRnUkU5TklHbHpJR3h2WVdSbFpDNGdTV1lnZFhOcGJtY2dZU0JRU0ZBZ1kyOTFiblJsY2l3Z2MyVjBJSFJ2SUdaaGJITmxMbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSE5sZEVOc2FXTnJRWFIwY2lBZ1UyVjBjeUIwYUdVZ1lYUjBjbWxpZFhSbElHWnZjaUIwYUdVZ1kyeHBZMnNnYUdGdVpHeGxjaTVjY2x4dUlDQWdJQ0FxTDF4eVhHNWNjbHh1SUNBZ0lDQm1kVzVqZEdsdmJpQnNiMkZrUjJGc2JHVnllU2h6WlhSSlJITXNJSE5sZEVOc2FXTnJRWFIwY2lrZ2UxeHlYRzRnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRjlwYldGblpTeGNjbHh1SUNBZ0lDQWdjMlZzWldOMGIzSXNYSEpjYmlBZ0lDQWdJR052ZFc1MFpYSWdQU0F3TzF4eVhHNWNjbHh1SUNBZ0lDQWdKQ2duSTNOb2IzY3RibVY0ZEMxcGJXRm5aU3dnSTNOb2IzY3RjSEpsZG1sdmRYTXRhVzFoWjJVbktWeHlYRzRnSUNBZ0lDQXVZMnhwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ1FvZEdocGN5bGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtRjBkSElvSjJsa0p5a2dQVDA5SUNkemFHOTNMWEJ5WlhacGIzVnpMV2x0WVdkbEp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFgybHRZV2RsTFMwN1hISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNGdJQ0FnSUNBZ0lHTjFjbkpsYm5SZmFXMWhaMlVyS3p0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnpaV3hsWTNSdmNpQTlJQ1FvSjF0a1lYUmhMV2x0WVdkbExXbGtQVndpSnlBcklHTjFjbkpsYm5SZmFXMWhaMlVnS3lBblhDSmRKeWs3WEhKY2JpQWdJQ0IxY0dSaGRHVkhZV3hzWlhKNUtITmxiR1ZqZEc5eUtUdGNjbHh1ZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0JtZFc1amRHbHZiaUIxY0dSaGRHVkhZV3hzWlhKNUtITmxiR1ZqZEc5eUtTQjdYSEpjYmlBZ0lDQWdJQ0FnYkdWMElDUnpaV3dnUFNCelpXeGxZM1J2Y2p0Y2NseHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFgybHRZV2RsSUQwZ0pITmxiQzVrWVhSaEtDZHBiV0ZuWlMxcFpDY3BPMXh5WEc0Z0lDQWdJQ0FnSUNRb0p5TnBiV0ZuWlMxbllXeHNaWEo1TFhScGRHeGxKeWxjY2x4dUlDQWdJQ0FnSUNBdWRHVjRkQ2drYzJWc0xtUmhkR0VvSjNScGRHeGxKeWtwTzF4eVhHNGdJQ0FnSUNBZ0lDUW9KeU5wYldGblpTMW5ZV3hzWlhKNUxXbHRZV2RsSnlsY2NseHVJQ0FnSUNBZ0lDQXVZWFIwY2lnbmMzSmpKeXdnSkhObGJDNWtZWFJoS0NkcGJXRm5aU2NwS1R0Y2NseHVJQ0FnSUNBZ0lDQmthWE5oWW14bFFuVjBkRzl1Y3loamIzVnVkR1Z5TENBa2MyVnNMbVJoZEdFb0oybHRZV2RsTFdsa0p5a3BPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDaHpaWFJKUkhNZ1BUMGdkSEoxWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ1FvSjF0a1lYUmhMV2x0WVdkbExXbGtYU2NwWEhKY2JpQWdJQ0FnSUNBZ0xtVmhZMmdvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIzVnVkR1Z5S3lzN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNRb2RHaHBjeWxjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbUYwZEhJb0oyUmhkR0V0YVcxaFoyVXRhV1FuTENCamIzVnVkR1Z5S1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQ1FvYzJWMFEyeHBZMnRCZEhSeUtWeHlYRzRnSUNBZ0xtOXVLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ2RYQmtZWFJsUjJGc2JHVnllU2drS0hSb2FYTXBLVHRjY2x4dUlDQjlLVHRjY2x4dWZWeHlYRzU5S1R0Y2NseHVYSEpjYmk4dklHSjFhV3hrSUd0bGVTQmhZM1JwYjI1elhISmNiaVFvWkc5amRXMWxiblFwWEhKY2JpNXJaWGxrYjNkdUtHWjFibU4wYVc5dUlDaGxLU0I3WEhKY2JpQWdJQ0J6ZDJsMFkyZ2dLR1V1ZDJocFkyZ3BJSHRjY2x4dUlDQWdJQ0FnWTJGelpTQXpOem9nTHk4Z2JHVm1kRnh5WEc0Z0lDQWdJQ0JwWmlBb0tHMXZaR0ZzU1dRdVpHRjBZU2duWW5NdWJXOWtZV3duS1NCOGZDQjdmU2t1WDJselUyaHZkMjRnSmlZZ0pDZ25JM05vYjNjdGNISmxkbWx2ZFhNdGFXMWhaMlVuS1M1cGN5aGNJanAyYVhOcFlteGxYQ0lwS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FrS0NjamMyaHZkeTF3Y21WMmFXOTFjeTFwYldGblpTY3BYSEpjYmlBZ0lDQWdJQ0FnSUNBdVkyeHBZMnNvS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQmljbVZoYXp0Y2NseHVYSEpjYmlBZ0lDQWdJR05oYzJVZ016azZJQzh2SUhKcFoyaDBYSEpjYmlBZ0lDQWdJR2xtSUNnb2JXOWtZV3hKWkM1a1lYUmhLQ2RpY3k1dGIyUmhiQ2NwSUh4OElIdDlLUzVmYVhOVGFHOTNiaUFtSmlBa0tDY2pjMmh2ZHkxdVpYaDBMV2x0WVdkbEp5a3VhWE1vWENJNmRtbHphV0pzWlZ3aUtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0pDZ25JM05vYjNjdGJtVjRkQzFwYldGblpTY3BYSEpjYmlBZ0lDQWdJQ0FnSUNBdVkyeHBZMnNvS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQmljbVZoYXp0Y2NseHVYSEpjYmlBZ0lDQWdJR1JsWm1GMWJIUTZYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPeUF2THlCbGVHbDBJSFJvYVhNZ2FHRnVaR3hsY2lCbWIzSWdiM1JvWlhJZ2EyVjVjMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPeUF2THlCd2NtVjJaVzUwSUhSb1pTQmtaV1poZFd4MElHRmpkR2x2YmlBb2MyTnliMnhzSUM4Z2JXOTJaU0JqWVhKbGRDbGNjbHh1ZlNrN1hISmNibHh5WEc1Y2NseHVMeW90TFMwdExTQkZibVFnSUZCdmNuUm1iMnhwYnlBdExTMHRMUzB0TFMwdElDQWdLaTljY2x4dUlsMTkifQ==
