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

});