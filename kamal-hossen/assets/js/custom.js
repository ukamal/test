
(function($){ jQuery(document).ready(function($){
    "use strict";
//    start ready function

    $("#Our_Team_Members").owlCarousel({

        autoPlay: 5000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        pagination : false,
        navigation : true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        stopOnHover : true,

    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 30) {
            $('.header_area').addClass("Short_header");
        } else {
            $('.header_area').removeClass("Short_header");
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 60) {
            $('.header_area').addClass("Short_header_2");
        } else {
            $('.header_area').removeClass("Short_header_2");
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('.header_area').addClass("Short_header_3");
        } else {
            $('.header_area').removeClass("Short_header_3");
        }
    });

    $(".main_menu_show_button").on('click', function() {
        $(".main_menu").addClass("show_main_menu");
    });

    $(".close_main_menu").on('click', function() {
        $(".main_menu").removeClass("show_main_menu");
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scroll_to_top').fadeIn();
        } else {
            $('.scroll_to_top').fadeOut();
        }
    });
    
    $('.scroll_to_top').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });
    
//    end ready function
}); }(jQuery));