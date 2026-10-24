const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Resolves once the hero image and font are ready, or after 1.5s at most.
function criticalAssetsReady() {
    const hero = document.querySelector(".hero-image img");
    const heroLoaded = hero.complete
        ? Promise.resolve()
        : new Promise(resolve => {
            hero.addEventListener("load", resolve, { once: true });
            hero.addEventListener("error", resolve, { once: true });
        });
    const cap = new Promise(resolve => setTimeout(resolve, 1500));
    return Promise.race([Promise.all([heroLoaded, document.fonts.ready]), cap]);
}

function loader(onExit) {
    const loaderEl = document.querySelector(".loader");
    if (reduceMotion) {
        loaderEl.style.display = "none";
        return;
    }
    const ready = criticalAssetsReady();
    const tl = gsap.timeline()
    tl.to(".loader-text span", {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
    })

        .to(".loader-text span", {
            y: -100,
            duration: 0.4,
            ease: "power3.in",
            delay: 0.05,
            stagger: 0.15,
        })

        .add(() => {
            tl.pause();
            ready.then(() => tl.resume());
        })

        .to(".loader", {
            yPercent: -100,
            duration: 0.6,
            ease: "power3.inOut",
            onStart: onExit,
            onComplete: () => {
                loaderEl.style.display = "none"
            }
        })
};


let scroll;


function locoAnime() {
    gsap.registerPlugin(ScrollTrigger)
    scroll = new LocomotiveScroll({
        el: document.querySelector('#wrapper'),
        smooth: !reduceMotion,
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
    window.addEventListener("load", () => scroll.update())
};

function heroGSAPAnime() {
    gsap.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });

    gsap.from(".nav-menu", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
    });

    gsap.from(".hero-heading .line", {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.15,
    });

    gsap.from(".hero-sub", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.45,
    });

    gsap.from(".hero-image", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
    });
};

function reveal(targets, trigger, vars = {}) {
    gsap.from(targets, {
        scrollTrigger: {
            trigger,
            scroller: "#wrapper",
            start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        ...vars,
    })
}

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

    gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                scroller: "#wrapper",
                start: "top 88%",
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: (i % 2) * 0.2,
        })
    })

    gsap.utils.toArray(".work-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                scroller: "#wrapper",
                start: "top 88%",
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: (i % 2) * 0.2,
        })
    })

    reveal(".process-top", ".process-top");
    reveal(".process-step", ".process-grid", { stagger: 0.15 });
    reveal(".testimonials-top", ".testimonials-top");
    reveal(".testimonial-card", ".testimonials-grid", { stagger: 0.15 });
    reveal(".contact-left", ".contact");
    reveal(".contact-form", ".contact", { delay: 0.15 });

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
    const navMenu = document.querySelector(".nav-menu");
    const navOverlay = document.querySelector(".nav-overlay");
    const navLinks = document.querySelectorAll(".nav-overlay ul li a");

    function setMenu(open) {
        navMenu.classList.toggle("active", open)
        navOverlay.classList.toggle("active", open)
        navMenu.setAttribute("aria-expanded", open)
    }

    navMenu.addEventListener("click", () => {
        setMenu(!navOverlay.classList.contains("active"))
        if (navOverlay.classList.contains("active") && !reduceMotion) {
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

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const target = document.querySelector(link.getAttribute("href"))
            if (!target) return
            e.preventDefault()
            setMenu(false)
            scroll.scrollTo(target)
        })
    })
};

function contactForm() {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");
    const rules = {
        name: v => v.trim().length >= 2 || "Please enter your name (at least 2 characters).",
        email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
        type: v => v !== "" || "Please choose a service.",
        message: v => v.trim().length >= 20 || "Please tell us a little more (at least 20 characters).",
    };

    function validate(name) {
        const input = form.elements[name];
        const result = rules[name](input.value);
        const valid = result === true;
        form.querySelector("#" + input.id + "-error").textContent = valid ? "" : result;
        input.closest(".field").classList.toggle("invalid", !valid);
        input.setAttribute("aria-invalid", !valid);
        return valid;
    }

    Object.keys(rules).forEach(name => {
        const input = form.elements[name];
        input.addEventListener("blur", () => validate(name));
        input.addEventListener("input", () => {
            if (input.closest(".field").classList.contains("invalid")) validate(name);
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        status.className = "form-status";
        const invalid = Object.keys(rules).filter(name => !validate(name));
        if (invalid.length) {
            status.textContent = "Please fix the highlighted fields.";
            status.classList.add("error");
            form.elements[invalid[0]].focus();
            return;
        }
        status.textContent = "Thanks! Your message is valid, but this is a concept site so nothing was sent.";
        form.reset();
    });
};


loader(heroGSAPAnime);
locoAnime();
if (!reduceMotion) {
    scrollTriggerAnime();
    sheryAnime();
}
navbar();
contactForm();
