$(function() {

	// Custom JS



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
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


    $( '.lightzoom' ).lightzoom( {
       speed:                 1,   // скорость появления
       imgPadding:            100,    // значение отступа у изображения
       overlayOpacity:        '0.1', // прозрачность фона (от 0 до 1)
       viewTitle:             false, // true, если надо показывать подпись к изобажению
       isOverlayClickClosing: false, // true, если надо закрывать окно при клике по затемненной области
       isWindowClickClosing:  true, // true, если надо закрывать окно при клике по любой области
       isEscClosing:          true  // true, если надо закрывать окно при нажатии на кнопку Esc
    });

});
