jQuery(document).ready(function ($) {

	"use strict";

    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();

    //     var target = this.hash,
    //         $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top - 80
    //     }, 900, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });

    // navbar effect
    var nav_height = $("#navbar").height();

    $(window).scroll(function () {

        var postion = window.scrollY;

        if (postion > nav_height) {

            $("#navbar").removeClass("navbar_no-background");

        } else {

            $("#navbar").addClass("navbar_no-background");

        }
    });
    // navbar effect

    // navbar scroll

      // smooth scroll
    $('.scroll-anchor ul a[href*=\\#]:not([href=\\#]) , .to-top').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
          var target = $(this.hash);
          var href = $.attr(this, 'href');
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
             scrollTop: target.offset().top - $('#navigation-container').outerHeight()-50 + 1
            }, 1000, function () {
                window.location.hash = href;
            });
            return false;
          }
        }
    });

    	// nav scroll
    var navLinkIDs = "";
    $('.nav-bar ul a[href*=\\#]:not([href=\\#])').each(function(index) {
        if(navLinkIDs != "") {
            navLinkIDs += ", ";
        }
        navLinkIDs += $('.nav-bar ul a[href*=\\#]:not([href=\\#])').eq(index).attr("href");
    });
    if( navLinkIDs ) {
       $(navLinkIDs).waypoint(function(direction) {
           if(direction=='down') {
               $('.nav-bar ul a').parent().removeClass("active");
               $('.nav-bar ul a[href="\\#'+$(this).attr('id')+'"]').parent().addClass("active");
           }
       }, { offset: 56 });
        $(navLinkIDs).waypoint(function(direction) {
           if(direction=='up') {
               $('.nav-bar ul a').parent().removeClass("active");
               $('.nav-bar ul a[href="\\#'+$(this).attr('id')+'"]').parent().addClass("active");
           }
       }, {  offset: function() {
           return -$(this).height() + 20;
       } });
    }
    
    // navbar scroll
});