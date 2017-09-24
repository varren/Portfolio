/*=========================================

Template Name: Dreamhub - Personal Resume/CV/Portfolio HTML Template 
Author: Theme_Choices
Version: 1.0
Design and Developed by: Theme_Choices

=========================================*/

(function($) {
    "use strict";

    var $window = $(window),
            $body = $('body');
			
    /*=============================
                Sticky header
        ==============================*/
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });
        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });
     /*=============================
                Smoothscroll js
        ==============================*/
          $('.navbar-inverse a, a.scroll-btn, a.header-arrow').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1000);
            event.preventDefault();
          });
   
    /*======================================
        jquery scroll spy
    ========================================*/
        $body.scrollspy({
            target : ".navbar-collapse",
            offset : 95 
        });
        
     /*=================================
            Bootstrap menu fix
     ==================================*/
        $(".navbar-toggle").on("click", function(){
            $body.addClass("mobile-menu-activated");
        });
        $("ul.nav.navbar-nav li a").on("click", function(){
            $(".navbar-collapse").removeClass("in");
        });
	
	   /*=============================
                PRELOADER JS
        ==============================*/
	   $window.load(function(){
       $('.spinner').fadeOut();
       $('.preloader').delay(350).fadeOut(500);
       $body.delay(350).css({
        'overflow': 'visible'
      });     
      });
		
    /*=========================================
                jQuery mixItUp
    =======================================*/  
    $('.portfolio-wrapper').mixItUp();
	
    /*======================================
        MagnificPopup
    ========================================*/
    var magnifPopup = function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
            }
        });
    };
    // Call the functions 
    magnifPopup();

    /*==========================
            Intro typer
    ============================*/
        var win = $(window),
        foo = $('#typer');
        foo.typer(['Graphics Design','Creative Design', 'Web Template' ]);           
            win.resize(function(){
              var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
              foo.css({
              fontSize: fontSize * 0.12 + 'px'
            });
        }).resize();
		
    /*==========================
            Back To Top
    ============================*/
	$(".back-to-top").hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});
		$('.back-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

    /*=============================
            JQUERY FORM VALIDATION
    ==============================*/
		$("form").validate();
	
    /*=============================
            WOW js
    ==============================*/
        new WOW({ mobile: false }).init();
		
     /*===================================
            owl carousel testimonials
     ====================================*/
    $(".testimonial-list").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
	
     /*===================================
            START GOOGLE MAP
     ====================================*/
		function initialize() {
		  var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(34.031428,-118.2071542,17)
		  };
		  var map = new google.maps.Map(document.getElementById('map'),
			  mapOptions);
		  var marker = new google.maps.Marker({
			position: map.getCenter(),
			animation:google.maps.Animation.BOUNCE,
			icon: 'images/map-icon.png',
			map: map
		  });
		}
		google.maps.event.addDomListener(window, 'load', initialize);	
		/*END GOOGLE MAP*/	
		       
})(jQuery);