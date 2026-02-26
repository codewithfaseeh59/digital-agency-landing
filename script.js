function loader() {
    const tl = gsap.timeline()
    tl.to(".loader-text span", {
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
    })

        .to(".loader-text span", {
            y: -100,
            duration: 0.6,
            ease: "power3.in",
            delay: 0.1,
            stagger: 0.4,
        })

        .to(".loader", {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
                document.querySelector(".loader").style.display = "none"
            }
        })
};


let scroll;


function locoAnime() {
    gsap.registerPlugin(ScrollTrigger)
    scroll = new LocomotiveScroll({
        el: document.querySelector('#wrapper'),
        smooth: true,
    });

    scroll.on("scroll", ScrollTrigger.update)
    ScrollTrigger.scrollerProxy("#wrapper", {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        },
        pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
    })
    ScrollTrigger.addEventListener("refresh", () => scroll.update())
    ScrollTrigger.refresh()
};

function heroGSAPAnime() {
    gsap.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
    });

    gsap.from(".nav-menu", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
    });

    gsap.from(".hero-heading .line", {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.2,
    });

    gsap.from(".hero-sub", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1,
    });

    gsap.from(".hero-image", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.2,
    });

    const navMenu = document.querySelector(".nav-menu");
    const navOverlay = document.querySelector(".nav-overlay");
    const navLinks = document.querySelectorAll(".nav-overlay ul li a");

    navMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        navOverlay.classList.toggle("active")
        if (navOverlay.classList.contains("active")) {
            gsap.from(navLinks, {
                y: 80,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.3,
                stagger: 0.1,
            })
        }

    })
};

function scrollTriggerAnime() {

    gsap.from(".marquee", {
        scrollTrigger: {
            trigger: ".marquee",
            scroller: "#wrapper",
            start: "top 85%",
        },
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    })

    gsap.from(".about-left", {
        scrollTrigger: {
            trigger: ".about",
            scroller: "#wrapper",
            start: "top 75%",
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    })

    gsap.from(".about-right", {
        scrollTrigger: {
            trigger: ".about",
            scroller: "#wrapper",
            start: "top 85%",
        },
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    })

    gsap.from(".stat", {
        scrollTrigger: {
            trigger: ".about-stats",
            scroller: "#wrapper",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
    })

    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            scroller: "#wrapper",
            start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
    })

    gsap.from(".work-card", {
        scrollTrigger: {
            trigger: ".work-grid",
            scroller: "#wrapper",
            start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
    })

    gsap.from(".footer-top", {
        scrollTrigger: {
            trigger: ".footer",
            scroller: "#wrapper",
            start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    })
};

function sheryAnime() {
    Shery.mouseFollower({
        skewSelf: true,
    })


    Shery.imageEffect(".about-image img", {
        style: 3,
        config:
            { "uFrequencyX": { "value": 12, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 47.65 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.5616071428571427 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.37, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        mouseFollower: true,
    })

    Shery.imageEffect("#work-image-1 img", {
        style: 3,
        config: { "uFrequencyX": { "value": 17.56, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 16.87 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.6227272727272728 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.24, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        mouseFollower: true,
    });

    Shery.imageEffect("#work-image-2 img", {
        style: 3,
        config: { "uFrequencyX": { "value": 17.56, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 16.87 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.6227272727272728 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.24, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        mouseFollower: true,
    });
}

function navbar() {
    
const navLinks = document.querySelectorAll(".nav-overlay ul li a");
const navMenu = document.querySelector(".nav-menu");
const navOverlay = document.querySelector(".nav-overlay");

navLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault()
        const target = link.getAttribute("href")
        navMenu.classList.remove("active")
        scroll.scrollTo(document.querySelector(target))
    })
})

};


loader();
locoAnime();
scrollTriggerAnime();
heroGSAPAnime();
sheryAnime();
navbar();
