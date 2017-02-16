$(document).ready(function() {

    // Logic to toggle menu drawer
    $('.js-menu-drawer-toggle').on('click touch', function(e) {
        e.preventDefault();
        if ($('.header-main-menu').hasClass('drawer-open')) {
            $('.drawer-menu').removeClass('open');
            $('.header-main-menu').removeClass('drawer-open');
        } else {
            $('.drawer-menu').addClass('open');
            $('.header-main-menu').addClass('drawer-open');
        }
    });
    $('.js-drawer-close').on('click touch', function() {
        $('.drawer-menu').removeClass('open');
        $('.header-main-menu').removeClass('drawer-open');
    });

    // Logic to toggle menu drawer dropdowns
    $('.js-has-sub').filter('.active').find('.sub-drop').show();
    $('.js-has-sub').on('click touch', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).find('.sub-drop').slideUp();
            $(this).removeClass('active');
        } else {
            $('.sub-drop').slideUp();
            $('.js-has-sub').removeClass('active');
            $(this).find('.sub-drop').slideDown();
            $(this).addClass('active');
        }
    });

    // Prevent the dropdown from closing when clicking a child item
    $('.sub-drop').on('click touch', function(e) {
        e.stopPropagation();
    });
    
    // Instantiate testimonials slider
    $('.js-testimonial-slider').flickity({
        prevNextButtons: false,
    });

    // Fade and slide in hero text on page load
    $('.js-hero-text').addClass('ready');

    var gridWaypoint = new Waypoint({
        element: $('.flex-grid'),
        handler: function(direction) {
            if (direction === 'down') {
                $('.js-flex-item').addClass('fade-in');
            }
        },
        offset: '75%'
    });

    // Basic parallax effect on hero iamge and text. No jQuery plugins needed :)
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var imgPos = scrollTop / 4 + 'px';
        $('.hero').find('img').css('transform', 'translateY(' + imgPos + ')');
    });

});