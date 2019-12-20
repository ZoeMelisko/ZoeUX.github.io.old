// Make it rain!


$(window).ready(function() {
    $(window).load(function () {
        $('#heuristics-img').show();
        $('#heuristic-text').show();
        $('#affinity-img').show();
        $('#affinity-text').show();
        $('#prototype-vid').show();
        $('#prototype-text').show();
    });

    let burger = $('#burger');
    $(burger).on('click', function() {
        $('.open-nav').toggleClass('open');
        $('.container').toggleClass('open-container');
        $(this).toggleClass('active');
        $('#about-tab').addClass('active-1');
        // $('.grid-1 div').toggleClass('behind');
        // $('.cs-content-right a div').toggleClass('behind');
        return false;
    });

    $('#about-tab').on('click', function() {
        $(this).addClass('active-1');
        $('#services-tab').removeClass('active-1');
        $('#contact-tab').removeClass('active-1');
        $('.services').hide();
        $('.contact').hide();
        $('.about').fadeIn(400);
        return false;
    });

    $('#services-tab').on('click', function() {
        $(this).addClass('active-1');
        $('#about-tab').removeClass('active-1');
        $('#contact-tab').removeClass('active-1');
        $('.about').hide();
        $('.contact').hide();
        $('.services').fadeIn(400);
        return false;
    });

    $('#contact-tab').on('click', function() {
        $(this).addClass('active-1');
        $('#about-tab').removeClass('active-1');
        $('#services-tab').removeClass('active-1');
        $('.services').hide();
        $('.about').hide();
        $('.contact').fadeIn(400);
        return false;
    });

    $('#affinity-button').on('click', function() {
        $(this).addClass('active-2');
        $('#FeatPrioritization-button').removeClass('active-2');
        $('#Persona-button').removeClass('active-2');
        $('#JourneyMapping-button').removeClass('active-2');
        $('#persona-img').hide();
        $('#feature-img').hide();
        $('#journey-map-img').hide();
        $('#feat-prior-text').hide();
        $('#persona-text').hide();
        $('#journey-map-text').hide();
        $('#affinity-text').fadeIn(400);
        $('#affinity-img').fadeIn(400);
        return false;
    });

    $('#FeatPrioritization-button').on('click', function() {
        $(this).addClass('active-2');
        $('#affinity-button').removeClass('active-2');
        $('#FeatPrioritization-button').addClass('active-2');
        $('#Persona-button').removeClass('active-2');
        $('#JourneyMapping-button').removeClass('active-2');
        $('#affinity-img').hide();
        $('#persona-img').hide();
        $('#journey-map-img').hide();
        $('#affinity-text').hide();
        $('#journey-map-text').hide();
        $('#persona-text').hide();
        $('#feat-prior-text').fadeIn(400);
        $('#feature-img').fadeIn(400);
        return false;
    });

    $('#Persona-button').on('click', function() {
        $(this).addClass('active-2');
        $('#FeatPrioritization-button').removeClass('active-2');
        $('#affinity-button').removeClass('active-2');
        $('#JourneyMapping-button').removeClass('active-2');
        $('#affinity-img').hide();
        $('#feature-img').hide();
        $('#journey-map-img').hide();
        $('#feat-prior-text').hide();
        $('#affinity-text').hide();
        $('#journey-map-text').hide();
        $('#persona-text').fadeIn(400);
        $('#persona-img').fadeIn(400);
        return false;
    });

    $('#JourneyMapping-button').on('click', function() {
        $(this).addClass('active-2');
        $('#FeatPrioritization-button').removeClass('active-2');
        $('#Persona-button').removeClass('active-2');
        $('#affinity-button').removeClass('active-2');
        $('#affinity-img').hide();
        $('#feature-img').hide();
        $('#persona-img').hide();
        $('#persona-text').hide();
        $('#feat-prior-text').hide();
        $('#affinity-text').hide();
        $('#journey-map-text').fadeIn(400);
        $('#journey-map-img').fadeIn(400);
        return false;
    });

    $('#HeuristicEval-button').on('click', function() {
        $(this).addClass('active-2');
        $('#CCAnalysis-button').removeClass('active-2');
        $('#UserFlow-button').removeClass('active-2');
        $('#UserInterviews-button').removeClass('active-2');
        $('#user-quotes-img').hide();
        $('#cc-text').hide();
        $('#user-flow-text').hide();
        $('#user-quotes-text').hide();
        $('#cc-img').hide();
        $('#user-flow-img').hide();
        $('#heuristics-img').fadeIn(400);
        $('#heuristic-text').fadeIn(400);
        return false;
    });

    $('#UserInterviews-button').on('click', function() {
        $(this).addClass('active-2');
        $('#HeuristicEval-button').removeClass('active-2');
        $('#CCAnalysis-button').removeClass('active-2');
        $('#UserFlow-button').removeClass('active-2');
        $('#heuristics-img').hide();
        $('#cc-img').hide();
        $('#user-flow-img').hide();
        $('#user-flow-text').hide();
        $('#heuristic-text').hide();
        $('#cc-text').hide();
        $('#user-quotes-img').fadeIn(400);
        $('#user-quotes-text').fadeIn(400);
        return false;
    });

    $('#CCAnalysis-button').on('click', function() {
        $(this).addClass('active-2');
        $('#HeuristicEval-button').removeClass('active-2');
        $('#UserInterviews-button').removeClass('active-2');
        $('#UserFlow-button').removeClass('active-2');
        $('#user-quotes-img').hide();
        $('#heuristics-img').hide();
        $('#user-flow-img').hide();
        $('#heuristic-text').hide();
        $('#user-quotes-text').hide();
        $('#user-flow-text').hide();
        $('#cc-img').fadeIn(400);
        $('#cc-text').fadeIn(400);
        return false;
    });

    $('#UserFlow-button').on('click', function() {
        $(this).addClass('active-2');
        $('#HeuristicEval-button').removeClass('active-2');
        $('#UserInterviews-button').removeClass('active-2');
        $('#CCAnalysis-button').removeClass('active-2');
        $('#UsabilityTest-button').removeClass('active-2');
        $('#cc-img').hide();
        $('#user-quotes-img').hide();
        $('#heuristics-img').hide();
        $('#cc-text').hide();
        $('#user-quotes-text').hide();
        $('#heuristic-text').hide();
        $('#user-flow-img').fadeIn(400);
        $('#user-flow-text').fadeIn(400);
        return false;
    });


    $('#PrototypeVid-button').on('click', function() {
        $(this).addClass('active-2');
        $('#RevisedSiteMap-button').removeClass('active-2');
        $('#RevisedUserFlow-button').removeClass('active-2');
        $('#revised-site-map-img').hide();
        $('#revised-site-map-text').hide();
        $('#revised-user-flow-img').hide();
        $('#revised-user-flow-text').hide();
        $('#next-steps-img').hide();
        $('#next-steps-text').hide();
        $('#prototype-vid').fadeIn(400);
        $('#prototype-text').fadeIn(400);
        return false;
    });



    $('#RevisedUserFlow-button').on('click', function() {
        $(this).addClass('active-2');
        $('#RevisedSiteMap-button').removeClass('active-2');
        $('#PrototypeVid-button-button').removeClass('active-2');
        $('#NextSteps-button').removeClass('active-2');
        $('#revised-site-map-img').hide();
        $('#revised-site-map-text').hide();
        $('#prototype-vid').hide();
        $('#prototype-text').hide();
        $('#revised-user-flow-text').fadeIn(400);
        $('#revised-user-flow-img').fadeIn(400);
        return false;
    });


    $('#RevisedSiteMap-button').on('click', function() {
        $(this).addClass('active-2');
        $('#RevisedUserFlow-button').removeClass('active-2');
        $('#PrototypeVid-button').removeClass('active-2');
        $('#NextSteps-button').removeClass('active-2');
        $('#revised-user-flow-img').hide();
        $('#revised-user-flow-text').hide();
        $('#prototype-vid').hide();
        $('#prototype-text').hide();
        $('#revised-site-map-img').fadeIn(400);
        $('#revised-site-map-text').fadeIn(400);
        return false;
    });
    
    // let choisiOffset = $('#choisi-sec').offset().top - 300;
    // let upcomerOffset = $('#upcomer-sec').offset().top - 500;
    // let brgrOffset = $('#brgr-sec').offset().top - 700;
    //
    // $(window).on('resize', function () {
    //     choisiOffset = $('#choisi-sec').offset().top;
    //     upcomerOffset = $('#upcomer-sec').offset().top;
    //     brgrOffset = $('#brgr-sec').offset().top;
    // });
    //
    // $(window).scroll(function() {
    //     const scroll = $(window).scrollTop();
    //
    //     if (scroll >= choisiOffset) {
    //         $('#choisi-sec .cs-info-l').addClass('text-scrolled');
    //         $('#choisi-sec .choisi-img').addClass('img-scrolled');
    //     }
    //
    //     if (scroll >= upcomerOffset) {
    //         $('#upcomer-sec .cs-info-r').addClass('text-scrolled');
    //         $('#upcomer-sec .upcomer-img').addClass('img-scrolled');
    //     }
    //
    //     if (scroll >= brgrOffset) {
    //         $('#brgr-sec .brgr-cs-info-l').addClass('text-scrolled');
    //         $('#brgr-sec .brgr-img').addClass('img-scrolled');
    //     }
    // });'

});
