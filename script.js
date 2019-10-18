

var t1 = new TimelineMax({
    paused: true
});

t1.to(".menu", 0.2, {
    autoAlpha: 1
});

t1.staggerFrom(".main-menu li a:not(.submenu li a)", 1, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
}, 0.1);

t1.from(".submenu", 0.2, {
    autoAlpha: 0
});

t1.staggerFrom(".media ul li", 1, {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
}, 0.1, "-=2");

t1.from(".call", 1, {
    delay: -2,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
});

t1.from(".mail", 1, {
    delay: -1.6,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
});

t1.reverse();

$(document).on("click", ".menu-btn", function () {
    t1.reversed(!t1.reversed());
});

$(document).on("click", ".close-menu", function () {
    t1.reversed(!t1.reversed());
});

//
var t2 = new TimelineMax();

t2.from(".ringOne", 4, {
    delay: .1,
    opacity: 0,
    y: 1,
    ease: Expo.easeInOut
}).to(".ringOne", 4, {
    delay: .1,
    y: -240,
    ease: Expo.easeInOut
}).to(".ringOne", 4, {
    delay: .1,
    y: 200,
    ease: Expo.easeInOut
}).to(".ringOne", 4, {
    delay: .1,
    y: -240,
    ease: Expo.easeInOut
}).to(".ringOne", 4, {
    delay: .1,
    y: 40,
    ease: Expo.easeInOut
})
//

var t3 = new TimelineMax();

t3.from(".header", 4, {
    delay: .1,
    opacity: 0,
    y: 1,
    ease: Expo.easeInOut
}).to(".header", 4, {
    delay: .1,
    y: 100,
    ease: Expo.easeInOut
}).to(".header", 4, {
    delay: .1,
    y: -300,
    ease: Expo.easeInOut
}).to(".header", 4, {
    delay: .1,
    y: 100,
    ease: Expo.easeInOut
}).to(".header", 4, {
    delay: .1,
    y: -200,
    ease: Expo.easeInOut
})
var t4 = new TimelineMax();

t4.from(".headerAbout", 4, {
    delay: .1,
    opacity: 0,
    y: 10,
    ease: Expo.easeInOut
}).to(".headerAbout", 4, {
    delay: .1,
    y: -300,
    ease: Expo.easeInOut
})
            
var t5 = new TimelineMax();
            
t5.from(".headerAboutTwo", 4, {
    delay: 4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

var t6 = new TimelineMax();

t6.from(".headerProjects", 4, {
    delay: .1,
    opacity: 0,
    x: 10,
    ease: Expo.easeInOut
})

var t7 = new TimelineMax();

t7.from(".headerContact", 4, {
    delay: .1,
    opacity: 0,
    x: 10,
    ease: Expo.easeInOut
}).to(".headerContact", 4, {
    delay: .1,
    y: -200,
    ease: Expo.easeInOut
})

var t8 = new TimelineMax();
            
t8.from(".headerContactTwo", 4, {
    delay: 4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

// loading screen

TweenMax.from(".bottom-text", 6, {
    delay: 3.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".menu-btn", 6, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

//


