//

/*----------------------------------------------------*/
/* MOBILE DETECT FUNCTION
/*----------------------------------------------------*/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



/////////////////////// ready
$(document).ready(function() {





  // Accordion.
  $( ".accordion" ).accordion({
    active: 1,
    heightStyle: "content"
  });






  /*----------------------------------------------------*/
  // carouFredSel.
  /*----------------------------------------------------*/
  var o = $('#slider .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 7000
      },
      responsive: true,
      // prev: '.slider_prev',
      // next: '.slider_next',
      // pagination: '.slider_pagination',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '1000',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('#partners .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.partners_prev',
      next: '.partners_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '240',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 6
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('#man .carousel.main  .man_ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      // prev: '.man_prev',
      // next: '.man_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '240',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 6
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('#testimonials .carousel.main > ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      // prev: '.testimonials_prev',
      // next: '.testimonials_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '750',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 2
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('#group .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.group_prev',
      next: '.group_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '240',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 4
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }










  $(window).bind("resize",updateSizes_vat).bind("load",updateSizes_vat);
  function updateSizes_vat(){
    $('#slider .carousel.main ul').trigger("updateSizes");
    $('#partners .carousel.main ul').trigger("updateSizes");
    $('#man .carousel.main .man_ul').trigger("updateSizes");
    $('#testimonials .carousel.main > ul').trigger("updateSizes");
    $('#group .carousel.main ul').trigger("updateSizes");



  }
  updateSizes_vat();


  /*----------------------------------------------------*/
  // Sticky.
  /*----------------------------------------------------*/
  $("#top2").sticky({
    topSpacing:0,
    getWidthFrom: 'body',
    responsiveWidth: true
  });





	/*----------------------------------------------------*/
	// PARALLAX CALLING
	/*----------------------------------------------------*/
	$(window).bind('load', function () {
		parallaxInit();
	});
	function parallaxInit() {
		testMobile = isMobile.any();

		if (testMobile == null)
		{
			$('.parallax .bg1').addClass("bg-fixed").parallax("50%", 0.5);
      $('.parallax .bg2').addClass("bg-fixed").parallax("50%", 0.5);

		}
	}
	parallaxInit();




  /*----------------------------------------------------*/
  // prettyPhoto
  /*----------------------------------------------------*/
  //$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});


  /*----------------------------------------------------*/
  // MENU SMOOTH SCROLLING
  /*----------------------------------------------------*/
  $(".navbar_ .nav a, .menu_bot a, .scroll-to").bind('click',function(event){

      //$(".navbar_ .nav a a").removeClass('active');
      //$(this).addClass('active');
      // var headerH = $('#top1').outerHeight();
      var headerH = $('#top2').outerHeight();

      if ($(this).attr("href")=="#home") {
        $("html, body").animate({
          scrollTop: 0 + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }
      else {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - headerH + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }



      event.preventDefault();
  });

  /*----------------------------------------------------*/
  // Appear
  /*----------------------------------------------------*/
  $('.animated').appear(function() {
    // console.log("111111111111");
      var elem = $(this);
      var animation = elem.data('animation');
      if ( !elem.hasClass('visible') ) {
        var animationDelay = elem.data('animation-delay');
        if ( animationDelay ) {
          setTimeout(function(){
              elem.addClass( animation + " visible" );
          }, animationDelay);
        } else {
          elem.addClass( animation + " visible" );
        }
      }
  });






});

/////////////////////// load
$(window).load(function() {



});