window.sr = ScrollReveal();
    // bring top nav bar in from top view
    // sr.reveal('.navbar-fixed', {
    //     duration: 1000,
    //     origin: 'top',
    //     distance: '200px',
    //     easing: 'ease'
    // });
    // rotate header into view on load
    sr.reveal('.header', {
        duration: 2000,
        rotate: {x: 20, y: 150, z: 60},
        delay: 500,
        interval: 4000
    });
    // display about text coming in from device view left
    sr.reveal('#about', {
        duration: 2000,
        delay: 2000,
        origin: 'left',
        distance: '300px',
        easing: 'ease'
    });
    // phase in base info container
    sr.reveal('#info', {
        delay: 3000,
        duration: 1000,
        origin: 'top',
        distance: '500px',
        easing: 'ease'

    });
    // info cards animation
    sr.reveal('#info1', {
        duration: 2000,
        distance: '300px',
        easing: 'ease'
    });
    sr.reveal('#info2', {
        duration: 2000,
        distance: '300px',
        easing: 'ease'
    });
    sr.reveal('#info3', {
        duration: 2000,
        distance: '300px',
        easing: 'ease'
    });

    // features section coming in from left 300px
    sr.reveal('#features', {
        duration: 2000,
        delay: 2000,
        origin: 'left',
        distance: '300px',
        easing: 'ease'
    });
    // more section coming in from the right 300px
    sr.reveal('#more', {
        duration: 2000,
        delay: 2000,
        origin: 'right',
        distance: '300px',
        easing: 'ease'
    });
    // contact section coming in from the bottom
    sr.reveal('#contact', {
        duration: 2000,
        distance: '500px',
        easing: 'ease-out'
    });
    

    



    