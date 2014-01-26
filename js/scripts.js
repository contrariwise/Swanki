jQuery(document).ready(function ($) {

    $('body').scrollspy({target: '[role="navigation"]'});

    $.stellar();

    anchors = $('a[href^=#]');

    anchors.click(function(event) {

        // get ID from href
        id = $(this).attr('href');

        if ( id === '#' ) {
            // scroll to top
            $('html, body').animate({
                scrollTop: 0
            }, 2000, 'easeInOutQuint');
        } else {
            // scroll to element
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 2000, 'easeInOutQuint');
        }

        event.preventDefault();
    });

});
