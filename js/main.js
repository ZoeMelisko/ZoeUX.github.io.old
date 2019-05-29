$(window).ready(function() {
    $('.backToTop').hide();

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

$('.float-up')
    .css('opacity', 0);

document.addEventListener('scroll', () => {
    var waypoint = new Waypoint({
        element: document.getElementById('choisi-sec'),
        handler: function() {
            console.log('Scrolled to waypoint!');
            anime({
                targets: '.float-up',
                translateY: [200, 0],
                duration: 3000,
                easing: "easeOutExpo",
                opacity: [0, 1],
                delay: 200
            });
            this.destroy();
        },
        offset: 'bottom-in-view',
    })
});

//
// $('#choisi-sec')
//     .css('opacity', 0) // immediately hide element
//     .waypoint(function(direction) {
//         if (direction === 'down') {
//             $(this.element).animate({ opacity: 1 })
//         }
//         else {
//             $(this.element).animate({ opacity: 0 })
//         }
//     }, {
//         offset: 'bottom-in-view'
//     });
