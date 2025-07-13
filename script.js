// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

// Animate each frame with Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// MatchMedia for responsive scroll animations
let mm = gsap.matchMedia();

// === SCROLLTRIGGER FOR SECTION 1 ===

// 👉 Desktop View (min-width: 800px)
mm.add("(min-width: 800px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section1',
            start: '50% 50%',
            end: '130% 50%',
            scrub: 1
        }
    });

    tl.to('#leaf1', {
        top: "120%",
        left: "80%",
        rotate: 90
    }, 'timeO')
    .to('#leaf2', {
        top: "105%",
        left: "5%",
        rotate: 120
    }, 'timeO')
    .to('#fanta', {
        top: "115%",
        left: "5%",
    }, 'timeO')
    .to('#orange2', {
        top: "150%",
        left: "25%",
    }, 'timeO')
    .to('#orange', {
        top: "160%",
        left: "70%",
    }, 'timeO');
});

// 👉 Mobile View (max-width: 799px)
mm.add("(max-width: 799px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section1',
            start: '50% 50%',
            end: '130% 50%',
            scrub: 1
        }
    });

    tl.to('#leaf1', {
        top: "120%",
        left: "80%",
        rotate: 90
    }, 'timeO')
    .to('#leaf2', {
        top: "105%",
        left: "5%",
        rotate: 120
    }, 'timeO')
    .to('#fanta', {
        top: "125%",
        left: "5%",
    }, 'timeO')
    .to('#orange2', {
        top: "110%",
        left: "15%",
    }, 'timeO')
    .to('#orange', {
        top: "160%",
        left: "35%",
        width: "65vw"
    }, 'timeO');
});

// === SCROLLTRIGGER FOR SECTION 2 & 3 ===
let mm2 = gsap.matchMedia();

// 👉 Desktop View (min-width: 800px)
mm2.add("(min-width: 800px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '50% 50%',
            end: '200% 100%',
            scrub: 1
        }
    });

    tl2.to('#fanta', {
        top: "220%",
        left: "35%",
        width: "30vw",
    }, 'time1')
    .to('#orange2', {
        top: "220%",
        left: "40%",
        width: "20vw",
    }, 'time1')
    .from('#pineapplecut', {
        y: 500,
        x: -900,
        rotate: -90,
    }, 'time1')
    .from('#pineapple', {
        y: 300,
        x: -700,
        rotate: -90,
    }, 'time1')
    .from('#orangefruit', {
        y: 500,
        x: 900,
        rotate: 90,
    }, 'time1')
    .from('#yellow', {
        y: 300,
        x: 700,
        rotate: 90,
    }, 'time1');
});

// 👉 Mobile View (max-width: 799px)
mm2.add("(max-width: 799px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section3',
            start: '0% 90%',
            end: '100% 100%',
            scrub: 1
            // 🔴 markers removed here
        }
    });

    tl2.from('#pineapplecut', {
        y: 500,
        x: -900,
        rotate: -90,
    }, 'time1')
    .from('#pineapple', {
        y: 300,
        x: -700,
        rotate: -90,
    }, 'time1')
    .from('#orangefruit', {
        y: 500,
        x: -900,
        rotate: -90,
    }, 'time1')
    .from('#yellow', {
        y: 300,
        x: -700,
        rotate: -90,
    }, 'time1')
    .from('#resp-orange', {
        y: 500,
        x: 900,
        rotate: 90,
    }, 'time1')
    .from('#resp-fanta', {
        y: 300,
        x: 700,
        rotate: 90,
    }, 'time1');
});
