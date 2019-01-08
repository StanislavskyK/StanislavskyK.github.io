$(function() {

	// Custom JS
    $('.owl-carousel').owlCarousel({
        smartSpeed: 800,
        dots: false,
        nav: true,
        navText: 0,
        responsiveClass: true,
        margin: 30,
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

});
