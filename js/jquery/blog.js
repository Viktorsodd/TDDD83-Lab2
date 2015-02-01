(function($) {
    "use strict";

    setTimeout(function() {
        $('body').removeClass('notransition');
    }, 300);

    if(!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
        $('body').addClass('no-touch');
    }

    $('.home-navHandler').click(function() {
        $('.blog-nav').toggleClass('active');
        $(this).toggleClass('active');
    });



})(jQuery);