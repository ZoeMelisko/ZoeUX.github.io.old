$(window).ready(function() {
    var choisiOffset = $('#choisi-sec').offset().top;
    $('.backToTop').hide();

    $(window).on('resize', function () {
        choisiOffset = $('#choisi-sec').offset().top;
    });

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll >= 800) {
            $(".nav-wrapper").addClass("scrolled").fadeOut(300);
            $('.backToTop').fadeIn(300);
        } else {
            $(".nav-wrapper").removeClass("scrolled").fadeIn(300);
            $('.backToTop').fadeOut(300);
        }

        if (scroll >= choisiOffset) {
            $('#choisi-sec .caseStudy-des').addClass('text-scrolled')
        }
    });
    $('.nav-container').on('hover', function () {
        $('.work').fadeIn('dropdown-content')
    });
});

// $('#choisi-sec').waypoint(function() {
//     $('#choisi-sec').css({
//         animation: "move-and-fade 2s",
//     })
// });