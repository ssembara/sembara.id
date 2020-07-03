
$(document).ready(function () {
    $(window).on('scroll', function () {
        if (Math.round($(window).scrollTop()) > 100) {
            $('.navbar').addClass('floatingNav');
        } else {
            $('.navbar').removeClass('floatingNav');
        }
    });
});
