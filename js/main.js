 AOS.init({
     duration: 800,
     easing: 'slide'
 });

 (function($) {

     "use strict";

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


     $(window).stellar({
         responsive: true,
         parallaxBackgrounds: true,
         parallaxElements: true,
         horizontalScrolling: false,
         hideDistantElements: false,
         scrollProperty: 'scroll'
     });


     var fullHeight = function() {

         $('.js-fullheight').css('height', $(window).height());
         $(window).resize(function() {
             $('.js-fullheight').css('height', $(window).height());
         });

     };
     fullHeight();

     // loader
     var loader = function() {
         setTimeout(function() {
             if ($('#ftco-loader').length > 0) {
                 $('#ftco-loader').removeClass('show');
             }
         }, 1);
     };
     loader();

     // Scrollax
     $.Scrollax();

     //layerslider

     var lsjQuery = jQuery;
     lsjQuery(document).ready(function() {
         if (typeof lsjQuery.fn.layerSlider == "undefined") {
             if (window._layerSlider && window._layerSlider.showNotice) {
                 window._layerSlider.showNotice('layerslider_40', 'jquery');
             }
         } else {
             lsjQuery("#layerslider_40").layerSlider({
                 sliderVersion: '6.0.0',
                 type: 'fullsize',
                 responsiveUnder: 0,
                 fullSizeMode: 'hero',
                 maxRatio: 1,
                 hideUnder: 0,
                 hideOver: 100000,
                 skin: 'outline',
                 sliderFadeInDuration: 800,
                 tnContainerWidth: '100%',
                 tnWidth: 170,
                 tnHeight: 100,
                 allowRestartOnResize: true,
                 skinsPath: 'https://layerslider.kreaturamedia.com/wp-content/plugins/LayerSlider/static/layerslider/skins/',
                 height: 600
             });
         }
     });

     var carousel = function() {
         $('.home-slider').owlCarousel({
             loop: true,
             autoplay: true,
             margin: 0,
             animateOut: 'fadeOut',
             animateIn: 'fadeIn',
             nav: false,
             autoplayHoverPause: false,
             items: 1,
             navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 1
                 },
                 1000: {
                     items: 1
                 }
             }
         });

         $('.carousel-testimony').owlCarousel({
             center: true,
             loop: false,
             items: 1,
             margin: 30,
             stagePadding: 0,
             nav: false,
             navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 3
                 },
                 1000: {
                     items: 3
                 }
             }
         });

     };
     carousel();

     $('nav .dropdown').hover(function() {
         var $this = $(this);
         // 	 timer;
         // clearTimeout(timer);
         $this.addClass('show');
         $this.find('> a').attr('aria-expanded', true);
         // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').addClass('show');
     }, function() {
         var $this = $(this);
         // timer;
         // timer = setTimeout(function(){
         $this.removeClass('show');
         $this.find('> a').attr('aria-expanded', false);
         // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').removeClass('show');
         // }, 100);
     });


     $('#dropdown04').on('show.bs.dropdown', function() {
         console.log('show');
     });

     // scroll
     var scrollWindow = function() {
         $(window).scroll(function() {
             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.ftco_navbar'),
                 fixed = $('.bg-black'),
                 navHeaderSection = $('.nav-header-section'),
                 sd = $('.js-scroll-wrap');


             if (st > 150) {
                 if (!navbar.hasClass('scrolled')) {
                     navbar.addClass('scrolled');
                     fixed.addClass('IsVisible');
                     navHeaderSection.addClass('bg-trans');
                 }

             }
             if (st < 150) {
                 if (navbar.hasClass('scrolled')) {
                     navbar.removeClass('scrolled sleep');
                     fixed.removeClass('IsVisible');
                     navHeaderSection.removeClass('.bg-trans');
                 }
             }
             if (st > 350) {
                 if (!navbar.hasClass('awake')) {
                     navbar.addClass('awake');
                 }

                 if (sd.length > 0) {
                     sd.addClass('sleep');
                 }
             }
             if (st < 350) {
                 if (navbar.hasClass('awake')) {
                     navbar.removeClass('awake');
                     navbar.addClass('sleep');
                 }
                 if (sd.length > 0) {
                     sd.removeClass('sleep');
                 }
             }
         });
     };
     scrollWindow();


     var counter = function() {

         $('#section-counter').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                 $('.number').each(function() {
                     var $this = $(this),
                         num = $this.data('number');
                     console.log(num);
                     $this.animateNumber({
                         number: num,
                         numberStep: comma_separator_number_step
                     }, 7000);
                 });

             }

         }, { offset: '95%' });

     }
     counter();

     var contentWayPoint = function() {
         var i = 0;
         $('.ftco-animate').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 i++;

                 $(this.element).addClass('item-animate');
                 setTimeout(function() {

                     $('body .ftco-animate.item-animate').each(function(k) {
                         var el = $(this);
                         setTimeout(function() {
                             var effect = el.data('animate-effect');
                             if (effect === 'fadeIn') {
                                 el.addClass('fadeIn ftco-animated');
                             } else if (effect === 'fadeInLeft') {
                                 el.addClass('fadeInLeft ftco-animated');
                             } else if (effect === 'fadeInRight') {
                                 el.addClass('fadeInRight ftco-animated');
                             } else {
                                 el.addClass('fadeInUp ftco-animated');
                             }
                             el.removeClass('item-animate');
                         }, k * 50, 'easeInOutExpo');
                     });

                 }, 100);

             }

         }, { offset: '95%' });
     };
     contentWayPoint();


     // navigation
     var OnePageNav = function() {
         $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
             e.preventDefault();

             var hash = this.hash,
                 navToggler = $('.navbar-toggler');
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 700, 'easeInOutExpo', function() {
                 window.location.hash = hash;
             });


             if (navToggler.is(':visible')) {
                 navToggler.click();
             }
         });
         $('body').on('activate.bs.scrollspy', function() {
             console.log('nice');
         })
     };
     OnePageNav();

     //hover card bos
     $(document).ready(function() {
         $(".hover-box").hover(
             //trigger when mouse hover
             function() {

                 $(this).animate({
                     marginTop: "-=1%",
                 }, 200)
             },
             //trigger when mouse out
             function() {
                 $(this).animate({
                     marginTop: "0%",
                 }, 200)
             }
         );
     })


     // magnific popup
     $('.image-popup').magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         closeBtnInside: false,
         fixedContentPos: true,
         mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
             verticalFit: true
         },
         zoom: {
             enabled: true,
             duration: 300 // don't foget to change the duration also in CSS
         }
     });

     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,

         fixedContentPos: false
     });



     var goHere = function() {

         $('.mouse-icon').on('click', function(event) {

             event.preventDefault();

             $('html,body').animate({
                 scrollTop: $('.goto-here').offset().top
             }, 500, 'easeInOutExpo');

             return false;
         });
     };
     goHere();



     $('.customer-logos').slick({
         dots: true,
         infinite: false,
         speed: 300,
         slidesToShow: 4,
         slidesToScroll: 1,
         asNavFor: '.slider-nav',
         responsive: [{
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
         ]
     });

     $('a[data-slide]').click(function(e) {
         e.preventDefault();
         var slideno = $(this).data('slide');
         $('.customer-logos').slick('slickGoTo', slideno - 1);
     });


 })(jQuery);