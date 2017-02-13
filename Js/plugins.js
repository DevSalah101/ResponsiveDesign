/*global $*/

$(document).ready(function () {
    
    "use strict";
    
    // Start Silder Of Blogs 
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        navText : ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots : true,
        autoplay: true
    });
    // End Silder Of Blogs
    
    // Start Box Color
    $(".color-box .fa-gear").on("click", function () {
        $(".color-box").toggleClass("open");
    });
    // Start Box Color
    
    // Change Theme Color
    $(".color-box ul li").on("click", function () {
        $("link[href*='color']").attr("href", "Css/theme-color/" + $(this).data("color") + ".css");
    });
    // Change Theme Color
    
    // Change Active Class Bettwen Li
    $(".header .navigation .menu ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    // Change Active Class Bettwen Li
    
    // Animate The Page When Click Li a
    $(".header .navigation .menu ul li a").on("click", function (e) {
        e.preventDefault();
        
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("id")).offset().top
        }, 1000);
        
    });
    // Animate The Page When Click Li
    
    // Show Menu In Meduim Secreen
    $(".header .navigation span").on("click", function () {
        
        if ($(this).hasClass("fa-bars")) {
            $(this).attr("class", "fa fa-close float-right");
        } else {
            $(this).attr("class", "fa fa-bars float-right");
        }
    });
    // Show Menu In Meduim Secreen
    
    // Change Selected Class Bettwen Li
    $(".portfolio .list li").on("click", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    // Change Selected Class Bettwen Li
    
    // Trigger Mixitup
    $("#Container").mixItUp();
    // Trigger Mixitup
    
    // When Click In Scroll Icon
    var Icon = $(".fa-arrow-up"),
        Scroll;
    
    $(window).on("scroll", function () {
        
        var ScrollTop = $(window).scrollTop();
        Scroll = ScrollTop > 1000 ? Icon.fadeIn() : Icon.fadeOut();
        
    });
    
    Icon.on("click", function () {
        
        $("body").animate({
            scrollTop: 0
        }, 1000);
        
    });
    // When Click In Scroll Icon
    
});









