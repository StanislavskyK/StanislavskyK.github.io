$(function(){
      var   $button    = $('.button-redirection'),
            $button1   = $('.modal-window__button'),
            $container = $('.section-services__modal-window'),
            $container1 = $('.section-services__main');


        $button.on('click', function(){

        $container1.toggleClass('hidden'),
        $container.toggleClass('hidden');
  });
        $button1.on('click', function(){

        $container1.toggleClass('hidden'),
        $container.toggleClass('hidden');
  });
        // Portfolio

      var   $buttonPortfolio1     = $('.button-redirection__portfolio-one'),
            $buttonPortfolio2     = $('.button-redirection__portfolio-two'),
            $buttonPortfolio3     = $('.button-redirection__portfolio-three'),
            $buttonPortfolio4     = $('.button-redirection__portfolio-four'),
            $buttonPortfolio5     = $('.button-redirection__portfolio-five'),
            $buttonPortfolio11    = $('.button-redirection__portfolio-inactive-one'),
            $buttonPortfolio22    = $('.button-redirection__portfolio-inactive-two'),
            $buttonPortfolio33    = $('.button-redirection__portfolio-inactive-three'),
            $buttonPortfolio44    = $('.button-redirection__portfolio-inactive-four'),
            $buttonPortfolio55    = $('.button-redirection__portfolio-inactive-five'),
            $containerPortfolio1  = $('.Portfolio__inactive-one'),
            $containerPortfolio2  = $('.Portfolio__inactive-two');
            $containerPortfolio3  = $('.Portfolio__inactive-three');
            $containerPortfolio4  = $('.Portfolio__inactive-four');
            $containerPortfolio5  = $('.Portfolio__inactive-five');
            $containerPortfolio11  = $('.Portfolio__active-one');
            $containerPortfolio22  = $('.Portfolio__active-two');
            $containerPortfolio33  = $('.Portfolio__active-three');
            $containerPortfolio44  = $('.Portfolio__active-four');
            $containerPortfolio55  = $('.Portfolio__active-five');




            // Button1
            $buttonPortfolio1.on('click', function(){

            $containerPortfolio1.toggleClass('d-none, d-flex'),
            $containerPortfolio11.toggleClass('d-none');
      });
            $buttonPortfolio11.on('click', function(){

            $containerPortfolio1.toggleClass('d-none, d-flex'),
            $containerPortfolio11.toggleClass('d-none');
      });
            // Button2
            $buttonPortfolio2.on('click', function(){

            $containerPortfolio2.toggleClass('d-none, d-flex'),
            $containerPortfolio22.toggleClass('d-none');
      });
            $buttonPortfolio22.on('click', function(){

            $containerPortfolio2.toggleClass('d-none, d-flex'),
            $containerPortfolio22.toggleClass('d-none');
      });
            // Button3
            $buttonPortfolio3.on('click', function(){

            $containerPortfolio3.toggleClass('d-none, d-flex'),
            $containerPortfolio33.toggleClass('d-none');
      });
            $buttonPortfolio33.on('click', function(){

            $containerPortfolio3.toggleClass('d-none, d-flex'),
            $containerPortfolio33.toggleClass('d-none');
      });
            // Button4
            $buttonPortfolio4.on('click', function(){

            $containerPortfolio4.toggleClass('d-none, d-flex'),
            $containerPortfolio44.toggleClass('d-none');
      });
            $buttonPortfolio44.on('click', function(){

            $containerPortfolio4.toggleClass('d-none, d-flex'),
            $containerPortfolio44.toggleClass('d-none');
      });
            // Button5
            $buttonPortfolio5.on('click', function(){

            $containerPortfolio5.toggleClass('d-none, d-flex'),
            $containerPortfolio55.toggleClass('d-none');
      });
            $buttonPortfolio55.on('click', function(){

            $containerPortfolio5.toggleClass('d-none, d-flex'),
            $containerPortfolio55.toggleClass('d-none');
      });


        // Wow.js library
        wow = new WOW (
    {
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 100,
        mobile: true, // default
        live: true // default
    })


     wow.init ( );


        // Owl.Carousel
        $('.section-services__services').owlCarousel({
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


        $('.Portfolio_carousel').owlCarousel({
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-minus"></i>', '<i class="fa fa-minus"></i>', '<i class="fa fa-minus"></i>', '<i class="fa fa-minus"></i>', '<i class="fa fa-minus"></i>',],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

});
