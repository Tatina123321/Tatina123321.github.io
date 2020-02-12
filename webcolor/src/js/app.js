(function($) {
    "use strict";

    var nav_offset_top = $('header').height();
    /*	  Navbar 	*/

	//* Navbar Fixed
    function navbarFixed(){
        if ( $('.main_menu_area').length ){
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top ) {
                    $(".main_menu_area").addClass("navbar_fixed");
                } else {
                    $(".main_menu_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    /*------------*/

    /*  Testimonials Slider
    /*---------------------*/
    function testimoninals_carousel(){
        if ( $('.testimonials_slider').length ){
            $('.testimonials_slider').owlCarousel({
                loop:true,
                margin: 130,
                items: 3,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
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
                        margin: 70,
                    },
                    1200: {
                        items: 3,
                        margin: 130,
                    }
                }
            })
        }
    }
    testimoninals_carousel();

    /*----------------------------------------------------*/
    /*  Shap Slider
    /*----------------------------------------------------*/
    function shap_carousel(){
        if ( $('.shap_slider_inner').length ){
            $('.shap_slider_inner').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                center: true
            })
        }
    }
    shap_carousel();


    /*----------------------------------------------------*/
    /*  Skill Bar
    /*----------------------------------------------------*/
    function progressBarConfig () {
      var progressBar = $('.progress');
      if(progressBar.length) {
        progressBar.each(function () {
          var Self = $(this);
          Self.appear(function () {
            var progressValue = Self.data('value');

            Self.find('.progress-bar').animate({
              width:progressValue+'%'
          }, 1000);

            Self.find('.number').countTo({
              from: 0,
              to: progressValue,
              speed: 1000
          });
        });
      })
    }
}
progressBarConfig ();

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/*----------------------------------------------------*/




})(jQuery)

;(function($) {
    "use strict";



    function initSkillBars() {
        var el = $('.circle_progress');

        if (el.length) {
            el.each(function() {
                var $this = $(this),
                inner = $this.find('.circle_progress_inner'),
                percentage = $this.attr('data-percentage') + '%';
                if ($this.hasClass('circular')) {
                    var dataparcent = $this.attr('data-percentage');
                    var progress = inner.circleProgress({
                        value: 0,
                        size:175,
                        thickness: $this.data('thickness'),
                        startAngle: Math.PI * -0.501411705537642,
                        emptyFill: $this.data('empty-fill'),
                        animation: {duration: 1100},
                        reverse: ($this.data('inverse') == false) ? false : false,
                        fill: {
                            gradient: [$this.data('start-color'), $this.data('end-color')],
                            gradientAngle: Math.PI * 3.501411705537642
                        }
                    }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(dataparcent * progress) + '<i>%</i>');
                    });
                    progress.on('circle-animation-progress', function(e, p, v) {
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
                        })
                    });
                };
                $this.one('inview', function(event, visible) {
                    if (visible) {
                        if ($this.not('.circular').find('.percentage').length) {
                            $this.find('.percentage').countTo({
                                from: 0,
                                to: parseInt(percentage, 0),
                                speed: 900,
                                refreshInterval: 5
                            }).end().addClass('animated');
                        };
                        if ($this.hasClass('horizontal')) {
                            inner.width(percentage);
                        } else if ($this.hasClass('vertical')) {
                            inner.height(percentage);
                        };
                        if ($this.hasClass('circular')) {
                            inner.circleProgress({value: parseInt(percentage, 10) / 100});
                        };
                    };
                });
            });
        };
    };

    initSkillBars();

})(jQuery)


 /*-- wow js-- */

 new WOW().init();

/*-- end wow js-- */


  /*----------------------------
    START - Preloader
    ------------------------------ */
    jQuery(window).on('load', function(){
        jQuery("#preloader").fadeOut(500);
    });


/*--   Portfolio    */
    let modalId = $('#image-gallery');

    $(document)
    .ready(function () {

        loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
      .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
        .hide();
    } else if (counter_current === 1) {
        $('#show-previous-image')
        .hide();
    }
}

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

     function loadGallery(setIDs, setClickAttr) {
      let current_image,
      selector,
      counter = 0;

      $('#show-next-image, #show-previous-image')
      .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
    } else {
        current_image++;
    }

    selector = $('[data-image-id="' + current_image + '"]');
    updateGallery(selector);
});

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
        .text($sel.data('title'));
        $('#image-gallery-image')
        .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
    }

    if (setIDs == true) {
        $('[data-image-id]')
        .each(function () {
            counter++;
            $(this)
            .attr('data-image-id', counter);
        });
    }
    $(setClickAttr)
    .on('click', function () {
      updateGallery($(this));
  });
}
});

// build key actions
$(document)
.keydown(function (e) {
    switch (e.which) {
      case 37: // left
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
          .click();
      }
      break;

      case 39: // right
      if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
          .click();
      }
      break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


/*----- End  Portfolio ----------   */