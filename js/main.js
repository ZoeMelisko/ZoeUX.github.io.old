
$(window).ready(function() {
    $('.backToTop').hide();
    // /*! Fades in page on load */
    // $('body').addClass('page-loaded');

    var choisiOffset = $('#choisi-sec').offset().top - 400;
    var upcomerOffset = $('#upcomer-sec').offset().top;
    var brgrOffset = $('#burger-rec-sec').offset().top;

    var shapeWrapper = document.getElementById('shapes-wrap');

    if (shapeWrapper) {
        var textEffectWatcher1 = scrollMonitor.create( shapeWrapper );

        textEffectWatcher1.enterViewport(function() {
            anime({
                targets: '.shape',
                opacity: [0, 1],
                duration: 2000,
                delay: anime.stagger(70, {from: 'center'}) // increase delay by 100ms for each elements.
            });
            // Remove scroll watcher so animation will only happen once
            textEffectWatcher1.destroy();

        });

    }

    $(window).on('resize', function () {
        choisiOffset = $('#choisi-sec').offset().top;
        upcomerOffset = $('#upcomer-sec').offset().top;
        brgrOffset = $('#burger-rec-sec').offset().top;
    });

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll >= 800) {
            $('.nav-wrapper').addClass("scrolled").fadeOut(300);
            $('.backToTop').fadeIn(300);
        } else {
            $('.nav-wrapper').removeClass("scrolled").fadeIn(300);
            $('.backToTop').fadeOut(300);
        }

        if (scroll >= choisiOffset) {
            $('#choisi-sec .choisi-des').addClass('text-scrolled');
            $('#choisi-sec .choisi-img').addClass('img-scrolled');
        }

        if (scroll >= upcomerOffset) {
            $('#upcomer-sec .upcomer-des').addClass('text-scrolled');
            $('#upcomer-sec .upcomer-img').addClass('img-scrolled');
        }

        if (scroll >= brgrOffset) {
            $('#burger-rec-sec .brgr-rec-des').addClass('text-scrolled');
            $('#burger-rec-sec .brgr-rec-img').addClass('img-scrolled');
        }
});

    $('.nav-container').on('hover', function () {
        $('.work').fadeIn('dropdown-content')
    });

    $('.backToTop').on('click', function () {
        $('')
    })


});
