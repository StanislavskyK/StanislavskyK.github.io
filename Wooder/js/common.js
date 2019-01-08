$(function() {

	// Custom JS
    jQuery('.slider').bxSlider({
        mode: 'horizontal',
        responsive: false,
        touchEnabled: true,
        controls: false,
        auto: true,
        pause: 4500,
        autoDirection: "prev",
        pager: false,
        nextText: '', // отключаем текст кнопки Next
        prevText: '' // отключаем текст кнопки Prev
  });

    wow = new WOW (
    {
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 150,
        mobile: true, // default
        live: true // default
    })


     wow.init ( );

});
