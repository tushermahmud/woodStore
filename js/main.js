jQuery(document).ready(function() {
  //isotop
    jQuery(window).load(function(){
    var jQuerycontainer = jQuery('.portfolioContainer .row');
    jQuerycontainer.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
   jQuery('.gallery a').click(function(){
        jQuery('.gallery .current').removeClass('current');
    jQuery(this).addClass('current');
 
        var selector = jQuery(this).attr('data-filter');
        jQuerycontainer.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
       }); 

	// Header Scroll
	jQuery(window).on('scroll', function() {
		var scroll = jQuery(window).scrollTop();

		if (scroll >= 50) {
			jQuery('#header').addClass('fixed');
		} else {
			jQuery('#header').removeClass('fixed');
		}
	});
//   //scrooling
//   jQuery('#newAbout img').hide();
//           jQuery('#newAbout .feature').hide();


//   jQuery(window).load(function(){
//   var offset=jQuery('#newAbout').offset().top;
//   jQuery(window).scroll(function(){
//   var scrollpos=jQuery(window).scrollTop();
//   if(scrollpos>=(offset-550)){
//     jQuery('#newAbout img').show();
//           jQuery('#newAbout .feature').show();

//     jQuery('#newAbout img').addClass("fadeInLeft");
//     jQuery('#newAbout .feature').addClass("fadeInRight");

    
//   }else{
//     jQuery('.header-menu').removeClass("fixed");  
//   }
//   }); 
//   });
// //   jQuery(window).load(function(){
// //       jQuery(".flexslider .slides .img-responsive").addClass("fadeInRight");
// //             jQuery(".flexslider .slides h2").addClass("fadeInLeft");

// //   });
  

// 	// Waypoints
// 	jQuery('.work').waypoint(function() {
// 		jQuery('.work').addClass('animated fadeIn');
// 	}, {
// 		offset: '75%'
// 	});
// 	jQuery('.download').waypoint(function() {
// 		jQuery('.download .btn').addClass('animated tada');
// 	}, {
// 		offset: '75%'
// 	});

	

	// Flexslider
	jQuery('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = jQuery('section')
	sections.push(jQuery('footer'));
	
		nav = jQuery('nav[role="navigation"]');

	jQuery(window).on('scroll', function () {
	  	var cur_pos = jQuery(this).scrollTop();
	  	sections.each(function() {
	    	var top = jQuery(this).offset().top - 76
	        	bottom = top + jQuery(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+jQuery(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var jQueryel = jQuery(this)
	    	id = jQueryel.attr('href');
		jQuery('html, body').animate({
			scrollTop: jQuery(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	jQuery('.nav-toggle').on('click', function() {
		jQuery(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		jQuery('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
	
	jQuery('[data-fancybox^="quick-view"]').fancybox({
  animationEffect   : "fade",
  animationDuration : 300,
  margin : 0,
  gutter : 0,
  touch  : {
    vertical: false
  },
  baseTpl	:
  '<div class="fancybox-container" role="dialog" tabindex="-1">' +
  '<div class="fancybox-bg"></div>' +
  '<div class="fancybox-inner">' +
  '<div class="fancybox-stage"></div>' +
  '<div class="fancybox-form-wrap">' +
  '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
  '<svg viewBox="0 0 40 40">' +
  '<path d="M10,10 L30,30 M30,10 L10,30" />' +
  '</svg>' +
  '</button></div>' +
  '</div>' +
  '</div>',
  onInit: function(instance) {

    /*

        #1 Add product form
        ===================

    */

    // Find current form element ..
    var current = instance.group[instance.currIndex];
    instance.jQueryrefs.form = current.opts.jQueryorig.parent().find('.product-form');

    // .. and move to the container
    instance.jQueryrefs.form.appendTo( instance.jQueryrefs.container.find('.fancybox-form-wrap') );

    /*

        #2 Create bullet navigation links
        =================================

    */
    var list = '', 
        jQuerybullets;
    
    for ( var i = 0; i < instance.group.length; i++ ) {
      list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + ( i + 1 ) + '</span></a></li>';
    }

    jQuerybullets = jQuery( '<ul class="product-bullets">' + list + '</ul>' ).on('click touchstart', 'a', function() {
      var index = jQuery(this).data('index');

      jQuery.fancybox.getInstance(function() {
        this.jumpTo( index );
      });

    });
    
    instance.jQueryrefs.bullets = jQuerybullets.appendTo( instance.jQueryrefs.stage );

  },
  beforeShow : function( instance ) {

    // Mark current bullet navigation link as active
    instance.jQueryrefs.stage.find('ul:first')
      .children()
      .removeClass('active')
      .eq( instance.currIndex )
      .addClass('active');

  },
  afterClose: function(instance, current) {

    // Move form back to the place
    instance.jQueryrefs.form.appendTo( current.opts.jQueryorig.parent() );

  }
});
// Map Start
var get_latitude = jQuery('#google-map').data('latitude');
  var get_longitude = jQuery('#google-map').data('longitude');

  function initialize_google_map() {
    var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng,
      styles: [
    {
        "featureType": "road",
        "stylers": [
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -79
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -78
            },
            {
                "hue": "#6600ff"
            },
            {
                "lightness": -47
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#6600ff"
            },
            {
                "saturation": -11
            }
        ]
    },
    {},
    {},
    {
        "featureType": "water",
        "stylers": [
            {
                "saturation": -65
            },
            {
                "hue": "#1900ff"
            },
            {
                "lightness": 8
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "weight": 1.3
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -16
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "saturation": -72
            }
        ]
    },
    {}
]
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize_google_map);
// Map End

jQuery('#request').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             jQuery('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// Logo Slider
var logoslider = jQuery ("#partner-logo");
  if(logoslider.length) {
      logoslider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1600,
        autoWidth:false,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            992:{
                items:4
            }
        }
    })
  }

	
	
	
});