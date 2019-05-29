$(window).ready(function() {
    $('.backToTop').hide();
    $('#choisi-sec').opacity(0);

    $(window).scroll(function() {
    const scroll = $(window).scrollTop();

    if (scroll >= 800) {
        $(".nav-wrapper").addClass("scrolled").fadeOut(300);
        $('.backToTop').fadeIn(300);
    } else {
        $(".nav-wrapper").removeClass("scrolled").fadeIn(300);
        $('.backToTop').fadeOut(300);
    }
});
    $('.nav-container').on('hover', function () {
        $('.work').fadeIn('dropdown-content')
    });
});
//
// $('.float-up')
//     .css('opacity', 0);
// //
// document.addEventListener('scroll', () => {
//     var waypoint = new Waypoint({
//         element: document.getElementById('choisi-sec'),
//         handler: function() {
//             this.destroy();
//         },
//         offset: 'bottom-in-view',
//     })
// });

$('#choisi-sec').waypoint(function() {
    $('#choisi-sec').css({
        animation: "move-and-fade 2s",
    })
});