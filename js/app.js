$(function() {

    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        let nav = $("#nav");

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 700);
    });

    /* Nav Toggle */
    $("#navToggle").on("click", function(event) {

        let nav = $("#nav");

        event.preventDefault();

        nav.toggleClass("show");
        header.toggleClass("fixed");

    });







});