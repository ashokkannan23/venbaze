

require([ "jquery" ], function($) {
    if( $(window).width() >= 768 ) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > $('.page-header').offset().top && !($('.page-header').hasClass('sticky')) && !($('.sections.nav-sections').hasClass('padding'))) {
                $('.page-header').addClass('sticky');
                $('.sections.nav-sections').addClass('padding');
            } else if ($(window).scrollTop() == 0) {
                $('.page-header').removeClass('sticky');
                $('.sections.nav-sections').removeClass('padding');
            }
        });
    }
    else
    {
        $(window).scroll(function() {
            if ($(window).scrollTop() > $('.page-header').offset().top && !($('.page-header').hasClass('sticky')) && !($('.page-main').hasClass('paddingm'))) {
                $('.page-header').addClass('sticky');
                $('.page-main').addClass('paddingm');
            } else if ($(window).scrollTop() == 0) {
                $('.page-header').removeClass('sticky');
                $('.page-main').removeClass('paddingm');
            }
        });
    }   
});