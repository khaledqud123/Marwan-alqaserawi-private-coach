/* =========================================================
   MARWAN ALQASRAWI — PERFORMANCE COACH
   Main JavaScript
========================================================= */

"use strict";


/* =========================================================
   CONFIG
========================================================= */

const WHATSAPP_NUMBER = "962780666720";

const INSTAGRAM_URL =
    "https://www.instagram.com/marwanalqasrawi/";

const VIDEO_URL = "./hero-video.mp4";

const STORAGE_KEY = "marwan-language";


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {

        navPhilosophy: "Philosophy",
        navPrograms: "Programs",
        navCoach: "Coach",
        navInstagram: "Instagram",
        navContact: "Contact",
        navCta: "START TRAINING",

        heroEyebrow: "PERSONAL PERFORMANCE COACHING",

        heroTitle1: "TRAIN",
        heroTitle2: "WITH",
        heroTitle3: "PURPOSE.",

        heroDescription:
            "Structured training. Intelligent programming. Long-term progress.",

        heroExplore: "EXPLORE",

        scroll: "SCROLL",

        philosophyLabel: "THE PHILOSOPHY",

        philosophyTitle:
            "TRAIN WITH INTENTION.",

        philosophyText:
            "Training should have direction. Every session, every movement and every progression has a purpose. Build strength, move better and create consistency that lasts.",

        viewPrograms:
            "VIEW PROGRAMS",

        statYears:
            "YEARS EXPERIENCE",

        statSessions:
            "CLIENT SESSIONS",

        statRetention:
            "CLIENT RETENTION",

        statApproach:
            "PERSONAL APPROACH",

        programsLabel:
            "THE PROGRAMS",

        programsTitle:
            "BUILT AROUND YOUR GOALS.",

        program01Label:
            "STRENGTH",

        program01Title:
            "BUILD REAL STRENGTH.",

        program01Text:
            "Progressive training designed to build strength, control and confidence.",

        program02Label:
            "PERFORMANCE",

        program02Title:
            "MOVE WITH PURPOSE.",

        program02Text:
            "Develop athletic performance, movement quality and physical capacity.",

        program03Label:
            "TRANSFORMATION",

        program03Title:
            "CHANGE THAT LASTS.",

        program03Text:
            "A structured approach built around sustainable progress and long-term results.",

        statement01:
            "DON'T TRAIN",

        statement02:
            "TO LOOK",

        statement03:
            "STRONG.",

        statementBottom:
            "Train to become stronger.",

        coachLabel:
            "THE COACH",

        coachTitle:
            "EXPERIENCE. KNOWLEDGE. PURPOSE.",

        coachRole:
            "PERFORMANCE COACH",

        coachDescription:
            "A performance-focused coaching approach built around intelligent programming, individual needs and long-term progress.",

        credential01:
            "STRENGTH",

        credential02:
            "PERFORMANCE",

        credential03:
            "LONG-TERM PROGRESS",

        instagramLabel:
            "INSTAGRAM",

        instagramTitle:
            "TRAIN. BUILD. REPEAT.",

        testimonial:
            "The biggest difference wasn't the workouts. It was finally having a plan I could believe in.",

        contactLabel:
            "GET STARTED",

        contactTitle:
            "START A CONVERSATION.",

        contactDescription:
            "Ready to train with purpose? Get in touch and let's build a plan around your goals.",

        contactWhatsApp:
            "WHATSAPP"

    },


    ar: {

        navPhilosophy: "الفلسفة",
        navPrograms: "البرامج",
        navCoach: "المدرب",
        navInstagram: "إنستغرام",
        navContact: "تواصل",
        navCta: "ابدأ التدريب",

        heroEyebrow:
            "التدريب الشخصي للأداء البدني",

        heroTitle1:
            "تَدَرَّب",

        heroTitle2:
            "بِـ",

        heroTitle3:
            "هَدَف.",

        heroDescription:
            "تدريب منظم. تخطيط ذكي. تطور مستمر على المدى الطويل.",

        heroExplore:
            "استكشف",

        scroll:
            "مرر",

        philosophyLabel:
            "الفلسفة",

        philosophyTitle:
            "تَدَرَّب بِهَدَف.",

        philosophyText:
            "التدريب يجب أن يكون له اتجاه واضح. كل حصة وكل حركة وكل مرحلة من مراحل التطور لها هدف. ابنِ قوتك، حسّن حركتك، واصنع استمرارية تدوم.",

        viewPrograms:
            "شاهد البرامج",

        statYears:
            "سنوات من الخبرة",

        statSessions:
            "حصة تدريبية",

        statRetention:
            "نسبة الاحتفاظ بالعملاء",

        statApproach:
            "تدريب شخصي",

        programsLabel:
            "البرامج",

        programsTitle:
            "مصممة حول أهدافك.",

        program01Label:
            "القوة",

        program01Title:
            "ابنِ قوة حقيقية.",

        program01Text:
            "تدريب تدريجي مصمم لبناء القوة والتحكم والثقة.",

        program02Label:
            "الأداء",

        program02Title:
            "تحرك بهدف.",

        program02Text:
            "طوّر الأداء الرياضي وجودة الحركة والقدرة البدنية.",

        program03Label:
            "التحول",

        program03Title:
            "تغيير يدوم.",

        program03Text:
            "منهج منظم مبني على التطور المستدام والنتائج طويلة المدى.",

        statement01:
            "لا تتدرب",

        statement02:
            "لتبدو",

        statement03:
            "قوياً.",

        statementBottom:
            "تدرب لتصبح أقوى.",

        coachLabel:
            "المدرب",

        coachTitle:
            "خبرة. معرفة. هدف.",

        coachRole:
            "مدرب أداء بدني",

        coachDescription:
            "منهج تدريبي يركز على الأداء، ويجمع بين التخطيط الذكي واحتياجات كل شخص والتطور طويل المدى.",

        credential01:
            "القوة",

        credential02:
            "الأداء",

        credential03:
            "التطور طويل المدى",

        instagramLabel:
            "إنستغرام",

        instagramTitle:
            "تَدَرَّب. تَطَوَّر. كَرِّر.",

        testimonial:
            "الفرق الأكبر لم يكن في التمارين نفسها، بل في امتلاك خطة واضحة أستطيع أن أؤمن بها.",

        contactLabel:
            "ابدأ الآن",

        contactTitle:
            "ابدأ محادثة.",

        contactDescription:
            "جاهز للتدرب بهدف واضح؟ تواصل معنا ولنضع خطة تناسب أهدافك.",

        contactWhatsApp:
            "واتساب"

    }

};


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage = "en";


function getSavedLanguage() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (saved === "ar" || saved === "en") {
            return saved;
        }

    } catch (error) {

        console.warn(
            "Language storage unavailable:",
            error
        );

    }

    return "en";
}


function saveLanguage(language) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            language
        );

    } catch (error) {

        console.warn(
            "Could not save language:",
            error
        );

    }
}


function updateLanguageButtons() {

    $$("[data-lang]").forEach(button => {

        const language =
            button.getAttribute("data-lang");

        button.classList.toggle(
            "active",
            language === currentLanguage
        );

    });
}


function translatePage(language) {

    if (!translations[language]) {
        language = "en";
    }

    currentLanguage = language;

    const dictionary =
        translations[currentLanguage];


    $$("[data-i18n]").forEach(element => {

        const key =
            element.getAttribute("data-i18n");

        if (!dictionary[key]) {
            return;
        }

        element.textContent =
            dictionary[key];

    });


    document.documentElement.lang =
        currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";


    updateLanguageButtons();

    saveLanguage(currentLanguage);


    /*
        Give the layout a moment to recalculate
        after switching between LTR and RTL.
    */

    requestAnimationFrame(() => {

        window.dispatchEvent(
            new Event("resize")
        );

    });

}


function initializeLanguage() {

    currentLanguage =
        getSavedLanguage();

    translatePage(currentLanguage);


    $$("[data-lang]").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.getAttribute("data-lang");

                if (
                    language === currentLanguage
                ) {
                    return;
                }

                translatePage(language);

            }
        );

    });

}


/* =========================================================
   HERO VIDEO
   IMPORTANT:
   - Uses ./hero-video.mp4
   - Does NOT immediately hide the video
   - Waits for actual playback
   - Falls back to hero.jpg only when needed
========================================================= */

function initializeHeroVideo() {

    const video =
        $("#heroVideo");

    if (!video) {
        return;
    }


    const heroMedia =
        $(".hero-media");

    const heroImage =
        $(".hero-image");


    /*
        Make absolutely sure the video has the
        correct source.
    */

    let source =
        video.querySelector("source");


    if (source) {

        source.src =
            VIDEO_URL;

        /*
            Reload the source after setting it.
        */

        video.load();

    } else {

        video.src =
            VIDEO_URL;

    }


    /*
        Required attributes for mobile Safari.
    */

    video.muted = true;

    video.defaultMuted = true;

    video.autoplay = true;

    video.loop = true;

    video.playsInline = true;

    video.setAttribute(
        "muted",
        ""
    );

    video.setAttribute(
        "autoplay",
        ""
    );

    video.setAttribute(
        "playsinline",
        ""
    );

    video.setAttribute(
        "webkit-playsinline",
        ""
    );

    video.setAttribute(
        "preload",
        "auto"
    );


    let videoLoaded = false;


    function showVideo() {

        videoLoaded = true;

        video.classList.add(
            "video-ready"
        );

        video.classList.remove(
            "video-error"
        );

        if (heroMedia) {

            heroMedia.classList.add(
                "video-loaded"
            );

            heroMedia.classList.remove(
                "video-failed"
            );

        }

        /*
            Keep the image underneath the video.
            This prevents a visual flash.
        */

        if (heroImage) {

            heroImage.style.opacity =
                "";

        }

    }


    function showFallback() {

        if (videoLoaded) {
            return;
        }

        video.classList.add(
            "video-error"
        );

        if (heroMedia) {

            heroMedia.classList.add(
                "video-failed"
            );

        }

        /*
            The CSS already contains the hero image
            fallback. We intentionally do not remove it.
        */

        console.warn(
            "Hero video could not be played. Using hero.jpg fallback."
        );

    }


    /*
        Metadata successfully loaded.
    */

    video.addEventListener(
        "loadedmetadata",
        () => {

            console.log(
                "Hero video metadata loaded:",
                video.videoWidth,
                "x",
                video.videoHeight
            );

        }
    );


    /*
        Enough data has arrived to begin playback.
    */

    video.addEventListener(
        "canplay",
        () => {

            video
                .play()
                .then(() => {

                    showVideo();

                })
                .catch(error => {

                    console.warn(
                        "Hero video autoplay was blocked:",
                        error
                    );

                    /*
                        Try again after a user interaction.
                    */

                    showFallback();

                });

        }
    );


    /*
        This event confirms actual playback.
    */

    video.addEventListener(
        "playing",
        () => {

            showVideo();

        }
    );


    /*
        Any actual loading/decode error.
    */

    video.addEventListener(
        "error",
        () => {

            const mediaError =
                video.error;

            console.error(
                "HERO VIDEO ERROR:",
                mediaError
            );

            showFallback();

        }
    );


    video.addEventListener(
        "stalled",
        () => {

            console.warn(
                "Hero video stalled."
            );

        }
    );


    video.addEventListener(
        "waiting",
        () => {

            console.warn(
                "Hero video is waiting for data."
            );

        }
    );


    /*
        Safari/iOS sometimes needs a playback attempt
        after the page becomes visible.
    */

    const attemptPlayback =
        () => {

            if (
                document.visibilityState !==
                "visible"
            ) {
                return;
            }

            video.muted = true;

            const promise =
                video.play();

            if (
                promise &&
                typeof promise.catch ===
                "function"
            ) {

                promise
                    .then(() => {

                        showVideo();

                    })
                    .catch(() => {

                        /*
                            Do not immediately treat this as
                            a file failure. Safari may simply
                            be waiting for user interaction.
                        */

                    });

            }

        };


    /*
        First playback attempt.
    */

    attemptPlayback();


    /*
        Try again when the page becomes visible.
    */

    document.addEventListener(
        "visibilitychange",
        attemptPlayback
    );


    /*
        iOS sometimes unlocks autoplay after the
        first touch/click.
    */

    const unlockVideo =
        () => {

            if (videoLoaded) {
                return;
            }

            video.muted = true;

            const promise =
                video.play();

            if (
                promise &&
                typeof promise.catch ===
                "function"
            ) {

                promise
                    .then(() => {

                        showVideo();

                    })
                    .catch(() => {});

            }

        };


    document.addEventListener(
        "touchstart",
        unlockVideo,
        {
            once: true,
            passive: true
        }
    );


    document.addEventListener(
        "click",
        unlockVideo,
        {
            once: true
        }
    );


    /*
        Safety fallback.
        If the browser hasn't managed to load the video
        after a reasonable amount of time, the hero image
        remains visible instead of showing a broken video.
    */

    setTimeout(() => {

        if (!videoLoaded) {

            /*
                One final attempt.
            */

            video.load();

            attemptPlayback();

        }

    }, 4000);

}


/* =========================================================
   LOADER
========================================================= */

function initializeLoader() {

    const loader =
        $("#loader");

    if (!loader) {
        return;
    }


    const hideLoader =
        () => {

            loader.classList.add(
                "loaded"
            );

            document.body.classList.add(
                "page-loaded"
            );

        };


    /*
        Normal page loading.
    */

    if (
        document.readyState ===
        "complete"
    ) {

        setTimeout(
            hideLoader,
            500
        );

    } else {

        window.addEventListener(
            "load",
            () => {

                setTimeout(
                    hideLoader,
                    500
                );

            },
            {
                once: true
            }
        );

    }


    /*
        Never allow the loader to stay forever.
    */

    setTimeout(
        hideLoader,
        3000
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const toggle =
        $("#mobileMenuToggle");

    const menu =
        $("#mobileMenu");

    if (!toggle || !menu) {
        return;
    }


    function openMenu() {

        toggle.classList.add(
            "active"
        );

        menu.classList.add(
            "active"
        );

        document.body.classList.add(
            "menu-open"
        );

        toggle.setAttribute(
            "aria-expanded",
            "true"
        );

        toggle.setAttribute(
            "aria-label",
            "Close menu"
        );

    }


    function closeMenu() {

        toggle.classList.remove(
            "active"
        );

        menu.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "menu-open"
        );

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        toggle.setAttribute(
            "aria-label",
            "Open menu"
        );

    }


    toggle.addEventListener(
        "click",
        () => {

            if (
                menu.classList.contains(
                    "active"
                )
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    /*
        Close when clicking a menu link.
    */

    $(
        "a",
        menu
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    });


    /*
        Close with Escape.
    */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeMenu();

            }

        }
    );


    /*
        Close when resizing to desktop.
    */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900
            ) {

                closeMenu();

            }

        }
    );

}


/* =========================================================
   NAVBAR SCROLL
========================================================= */

function initializeNavbar() {

    const navbar =
        $("#navbar");

    if (!navbar) {
        return;
    }


    let lastScroll =
        window.scrollY;


    function updateNavbar() {

        const currentScroll =
            window.scrollY;


        if (currentScroll > 40) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }


        /*
            Hide navbar while scrolling down.
            Show it again while scrolling up.
        */

        if (
            currentScroll > lastScroll &&
            currentScroll > 180
        ) {

            navbar.classList.add(
                "nav-hidden"
            );

        } else {

            navbar.classList.remove(
                "nav-hidden"
            );

        }


        lastScroll =
            currentScroll;

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );


    updateNavbar();

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function initializeRevealAnimations() {

    const elements =
        $$(".reveal");

    if (!elements.length) {
        return;
    }


    /*
        Respect reduced-motion preferences.
    */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        elements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

        return;

    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -60px 0px"
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   IMAGE REVEALS
========================================================= */

function initializeImageReveals() {

    const elements =
        $$(".image-reveal");

    if (!elements.length) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   STAT COUNTERS
========================================================= */

function initializeCounters() {

    const counters =
        $$(".counter");

    if (!counters.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    function setFinalValue(counter) {

        const target =
            Number(
                counter.dataset.target
            );

        counter.textContent =
            target.toLocaleString(
                currentLanguage === "ar"
                    ? "ar"
                    : "en"
            );

    }


    function animateCounter(counter) {

        const target =
            Number(
                counter.dataset.target
            );

        if (
            !Number.isFinite(target)
        ) {
            return;
        }


        if (reducedMotion) {

            setFinalValue(counter);

            return;

        }


        const duration =
            target >= 500
                ? 1800
                : 1300;


        const startTime =
            performance.now();


        function updateCounter(now) {

            const elapsed =
                now - startTime;

            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /*
                Smooth ease-out.
            */

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                Math.floor(
                    target * eased
                );


            counter.textContent =
                value.toLocaleString(
                    currentLanguage === "ar"
                        ? "ar"
                        : "en"
                );


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                setFinalValue(
                    counter
                );

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    }


    if (
        !("IntersectionObserver" in window)
    ) {

        counters.forEach(
            setFinalValue
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================================
   PARALLAX
========================================================= */

function initializeParallax() {

    const elements =
        $$(
            ".hero-image, .hero-video, .statement-image img"
        );


    if (!elements.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {
        return;
    }


    let ticking = false;


    function updateParallax() {

        const scrollY =
            window.scrollY;


        elements.forEach(element => {

            const rect =
                element.getBoundingClientRect();


            /*
                Only animate elements close to viewport.
            */

            if (
                rect.bottom < -200 ||
                rect.top >
                    window.innerHeight + 200
            ) {
                return;
            }


            const center =
                rect.top +
                rect.height / 2;


            const distance =
                center -
                window.innerHeight / 2;


            const amount =
                distance * -0.025;


            element.style.transform =
                `translate3d(0, ${amount}px, 0)`;

        });


        ticking = false;

    }


    function requestParallax() {

        if (!ticking) {

            requestAnimationFrame(
                updateParallax
            );

            ticking = true;

        }

    }


    window.addEventListener(
        "scroll",
        requestParallax,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestParallax
    );


    requestParallax();

}


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

function initializeMagneticButtons() {

    const elements =
        $$(".magnetic");

    if (!elements.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {
        return;
    }


    elements.forEach(element => {

        element.addEventListener(
            "mousemove",
            event => {

                const rect =
                    element.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                const strength =
                    0.18;


                element.style.transform =
                    `translate3d(${x * strength}px, ${y * strength}px, 0)`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

function initializeCursor() {

    const cursor =
        $("#cursor");

    const follower =
        $("#cursorFollower");


    if (
        !cursor ||
        !follower
    ) {
        return;
    }


    /*
        Don't use the custom cursor on touch devices.
    */

    const isTouchDevice =
        window.matchMedia(
            "(hover: none), (pointer: coarse)"
        ).matches;


    if (isTouchDevice) {

        cursor.style.display =
            "none";

        follower.style.display =
            "none";

        return;

    }


    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            cursor.style.transform =
                `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        }
    );


    function animateFollower() {

        followerX +=
            (mouseX - followerX) *
            0.14;

        followerY +=
            (mouseY - followerY) *
            0.14;


        follower.style.transform =
            `translate3d(${followerX}px, ${followerY}px, 0)`;


        requestAnimationFrame(
            animateFollower
        );

    }


    animateFollower();


    /*
        Interactive cursor state.
    */

    const interactiveElements =
        $$(
            "a, button, .program-card, .instagram-item"
        );


    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursor.classList.add(
                    "hover"
                );

                follower.classList.add(
                    "hover"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursor.classList.remove(
                    "hover"
                );

                follower.classList.remove(
                    "hover"
                );

            }
        );

    });

}


/* =========================================================
   3D TILT
========================================================= */

function initializeTilt() {

    const cards =
        $$(".program-card");

    if (!cards.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const touchDevice =
        window.matchMedia(
            "(hover: none), (pointer: coarse)"
        ).matches;


    if (
        reducedMotion ||
        touchDevice
    ) {
        return;
    }


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -3;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    3;


                card.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   SMOOTH ANCHOR SCROLLING
========================================================= */

function initializeSmoothScrolling() {

    $$(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }


                const target =
                    $(href);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navbar =
                    $("#navbar");


                const offset =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    offset;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

function initializeImageHandling() {

    $$("img").forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

                console.error(
                    "IMAGE FAILED TO LOAD:",
                    image.src
                );

            }
        );

    });

}


/* =========================================================
   EXTERNAL LINKS
========================================================= */

function initializeExternalLinks() {

    /*
        Instagram
    */

    $$(
        'a[href*="instagram.com"]'
    ).forEach(link => {

        link.href =
            INSTAGRAM_URL;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

    });


    /*
        WhatsApp
    */

    $$(
        'a[href*="wa.me"]'
    ).forEach(link => {

        link.href =
            `https://wa.me/${WHATSAPP_NUMBER}`;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

    });

}


/* =========================================================
   RESIZE HANDLING
========================================================= */

function initializeResizeHandling() {

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        /*
                            Clear transforms that could
                            become awkward after rotation.
                        */

                        $$(".magnetic").forEach(
                            element => {

                                element.style.transform =
                                    "";

                            }
                        );


                    },
                    150
                );

        }
    );

}


/* =========================================================
   WEBSITE INITIALIZATION
========================================================= */

function initializeWebsite() {

    initializeLanguage();

    initializeLoader();

    initializeHeroVideo();

    initializeMobileMenu();

    initializeNavbar();

    initializeRevealAnimations();

    initializeImageReveals();

    initializeCounters();

    initializeParallax();

    initializeMagneticButtons();

    initializeCursor();

    initializeTilt();

    initializeSmoothScrolling();

    initializeImageHandling();

    initializeExternalLinks();

    initializeResizeHandling();

}


/* =========================================================
   START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite,
        {
            once: true
        }
    );

} else {

    initializeWebsite();

}
