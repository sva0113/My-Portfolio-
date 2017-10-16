//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


function hand() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf25a;";
    setTimeout(function () {
        a.innerHTML = "&#xf256;";
    }, 500);
    setTimeout(function () {
        a.innerHTML = "&#xf259;";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf256;";
    }, 1500);
}
hand();
setInterval(hand, 2000);

