/* =========================================================
   MARWAN ALQASRAWI — PRIVATE COACH
   PREMIUM BILINGUAL EXPERIENCE
   SCRIPT.JS
   ========================================================= */

(() => {
    "use strict";

    /* =========================================================
       CONFIG
       ========================================================= */

    const WHATSAPP_NUMBER = "962780666720";
    const INSTAGRAM_URL = "https://www.instagram.com/marwanalqasrawi/";
    const STORAGE_KEY = "marwan-language";


    /* =========================================================
       TRANSLATIONS
       ========================================================= */

    const translations = {

        en: {

            brand: "MARWAN ALQASRAWI",

            nav_home: "Home",
            nav_philosophy: "Philosophy",
            nav_coaching: "Coaching",
            nav_coach: "Coach",
            nav_instagram: "Instagram",
            nav_contact: "Contact",
            nav_cta: "Start Your Journey",

            hero_eyebrow: "PRIVATE PERFORMANCE COACH",
            hero_title_1: "DISCIPLINE",
            hero_title_2: "BUILDS",
            hero_title_3: "DISTINCTION",
            hero_description:
                "Private coaching built around strength, performance, discipline and long-term transformation.",
            hero_link: "Explore Coaching",
            hero_scroll: "Scroll to discover",

            marquee_1: "PRIVATE COACHING",
            marquee_2: "STRENGTH",
            marquee_3: "PERFORMANCE",
            marquee_4: "TRANSFORMATION",

            philosophy_label: "01 — PHILOSOPHY",
            philosophy_title: "THE STANDARD",
            philosophy_heading: "Train with intention.",
            philosophy_text:
                "Every session has a purpose. Every movement has a reason. Coaching is not about chasing temporary results — it is about building strength, confidence and discipline that stay with you.",
            philosophy_link: "Discover the philosophy",
            philosophy_caption: "PRECISION OVER EGO",

            experience_small: "SINCE 2009",
            experience_title: "A STANDARD BUILT OVER TIME",

            programs_label: "02 — COACHING MENU",
            programs_title: "PRIVATE COACHING",
            programs_intro:
                "Focused coaching designed around your goals, your performance and your progression.",

            service_1_number: "01",
            service_1_title: "PERSONAL TRAINING",
            service_1_text:
                "One-to-one coaching with structured sessions built around your individual goals and ability.",

            service_2_number: "02",
            service_2_title: "STRENGTH COACHING",
            service_2_text:
                "Progressive strength development focused on technique, control and measurable performance.",

            service_3_number: "03",
            service_3_title: "PERFORMANCE COACHING",
            service_3_text:
                "Performance-driven training designed to improve movement, athletic ability and physical capacity.",

            service_4_number: "04",
            service_4_title: "TRANSFORMATION",
            service_4_text:
                "A complete coaching approach built around consistency, discipline and sustainable progress.",

            statement_label: "THE MINDSET",
            statement_title: "YOUR STANDARD<br>DEFINES YOUR RESULT.",

            coach_label: "03 — THE COACH",
            coach_title: "COACHING WITH PURPOSE",
            coach_role: "PRIVATE PERFORMANCE COACH",
            coach_text:
                "Marwan Alqrasawi approaches coaching through structure, discipline and attention to detail — creating an environment where every session moves you forward.",

            credential_1: "PRIVATE COACHING",
            credential_2: "PERFORMANCE",
            credential_3: "STRENGTH",

            instagram_label: "04 — FOLLOW THE JOURNEY",
            instagram_title: "THE COACHING<br>IN MOTION",
            instagram_link: "View Instagram",

            contact_title: "READY TO<br>RAISE YOUR<br>STANDARD?",
            whatsapp_label: "WHATSAPP",
            instagram_contact_label: "INSTAGRAM",
            contact_location: "AMMAN, JORDAN",

            footer_copy: "PRIVATE PERFORMANCE COACH"
        },


        ar: {

            brand: "مروان القصراوي",

            nav_home: "الرئيسية",
            nav_philosophy: "الفلسفة",
            nav_coaching: "التدريب",
            nav_coach: "المدرب",
            nav_instagram: "إنستغرام",
            nav_contact: "تواصل",
            nav_cta: "ابدأ رحلتك",

            hero_eyebrow: "مدرب أداء خاص",
            hero_title_1: "الانضباط",
            hero_title_2: "يصنع",
            hero_title_3: "التميّز",
            hero_description:
                "تدريب خاص مبني على القوة والأداء والانضباط والتحول طويل المدى.",
            hero_link: "اكتشف التدريب",
            hero_scroll: "مرر لاكتشاف المزيد",

            marquee_1: "تدريب خاص",
            marquee_2: "القوة",
            marquee_3: "الأداء",
            marquee_4: "التحول",

            philosophy_label: "01 — فلسفة التدريب",
            philosophy_title: "المعيار",
            philosophy_heading: "تدرّب بوعي.",
            philosophy_text:
                "كل حصة لها هدف. وكل حركة لها سبب. التدريب لا يتعلق بالنتائج المؤقتة، بل ببناء القوة والثقة والانضباط الذي يبقى معك.",
            philosophy_link: "اكتشف فلسفة التدريب",
            philosophy_caption: "الدقة قبل الأنا",

            experience_small: "منذ 2009",
            experience_title: "معيار بُني عبر الزمن",

            programs_label: "02 — قائمة التدريب",
            programs_title: "التدريب الخاص",
            programs_intro:
                "تدريب متخصص مصمم حول أهدافك وأدائك وتطورك.",

            service_1_number: "01",
            service_1_title: "التدريب الشخصي",
            service_1_text:
                "تدريب فردي بجلسات منظمة ومصممة وفق أهدافك وقدراتك الشخصية.",

            service_2_number: "02",
            service_2_title: "تدريب القوة",
            service_2_text:
                "تطوير تدريجي للقوة يركز على التقنية والتحكم والأداء القابل للقياس.",

            service_3_number: "03",
            service_3_title: "تدريب الأداء",
            service_3_text:
                "تدريب قائم على الأداء لتحسين الحركة والقدرة الرياضية والكفاءة البدنية.",

            service_4_number: "04",
            service_4_title: "التحول",
            service_4_text:
                "منهج تدريبي متكامل قائم على الاستمرارية والانضباط والتقدم المستدام.",

            statement_label: "العقلية",
            statement_title: "معيارك<br>يحدد نتيجتك.",

            coach_label: "03 — المدرب",
            coach_title: "تدريب له هدف",
            coach_role: "مدرب أداء خاص",
            coach_text:
                "يعتمد مروان القصراوي في التدريب على التنظيم والانضباط والاهتمام بالتفاصيل، ليخلق بيئة تجعل كل حصة خطوة جديدة إلى الأمام.",

            credential_1: "تدريب خاص",
            credential_2: "الأداء",
            credential_3: "القوة",

            instagram_label: "04 — تابع الرحلة",
            instagram_title: "التدريب<br>في حركة",
            instagram_link: "شاهد إنستغرام",

            contact_title: "جاهز<br>لرفع<br>معيارك؟",
            whatsapp_label: "واتساب",
            instagram_contact_label: "إنستغرام",
            contact_location: "عمّان، الأردن",

            footer_copy: "مدرب أداء خاص"
        }
    };


    /* =========================================================
       DOM
       ========================================================= */

    const loader = document.querySelector(".loader");
    const navbar = document.querySelector(".navbar");

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    const cursor = document.querySelector(".cursor");

    const heroVideo = document.getElementById("heroVideo");
    const heroFallback = document.querySelector(".hero-image");


    /* =========================================================
       LOADER
       ========================================================= */

    function hideLoader() {

        if (!loader) return;

        window.setTimeout(() => {

            loader.classList.add("loaded");

            window.setTimeout(() => {
                loader.remove();
            }, 1000);

        }, 500);
    }

    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader, {
            once: true
        });
    }


    /* =========================================================
       HERO VIDEO
       MOBILE + DESKTOP AUTOPLAY FIX
       ========================================================= */

    function initializeHeroVideo() {

        const video = document.getElementById("heroVideo");

        if (!video) return;

        const fallback = document.querySelector(".hero-image");

        /* -----------------------------------------------------
           Force the attributes browsers look for
           ----------------------------------------------------- */

        video.muted = true;
        video.defaultMuted = true;

        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("loop", "");
        video.setAttribute("preload", "auto");

        /* -----------------------------------------------------
           Make sure the browser knows this video is muted
           before attempting autoplay
           ----------------------------------------------------- */

        try {
            video.volume = 0;
        } catch (error) {
            // Ignore browsers that restrict volume changes.
        }


        /* -----------------------------------------------------
           Show video
           ----------------------------------------------------- */

        const showVideo = () => {

            video.classList.add("playing");
            video.classList.remove("error");

            if (fallback) {
                fallback.style.opacity = "0";
            }
        };


        /* -----------------------------------------------------
           Show fallback image
           ----------------------------------------------------- */

        const showFallback = () => {

            /*
             * Only use the fallback if the video genuinely
             * cannot load.
             *
             * We do NOT immediately hide the video just because
             * autoplay was rejected.
             */

            if (
                video.error ||
                video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE
            ) {

                video.classList.remove("playing");
                video.classList.add("error");

                if (fallback) {
                    fallback.style.opacity = "1";
                }
            }
        };


        /* -----------------------------------------------------
           Attempt playback
           ----------------------------------------------------- */

        const attemptPlay = () => {

            if (!video) return;

            video.muted = true;
            video.defaultMuted = true;

            if (video.readyState < 2) {
                return;
            }

            try {

                const playPromise = video.play();

                if (
                    playPromise &&
                    typeof playPromise.then === "function"
                ) {

                    playPromise
                        .then(() => {
                            showVideo();
                        })
                        .catch(() => {
                            /*
                             * Mobile Safari / Chrome can reject
                             * autoplay temporarily.
                             *
                             * Do NOT show fallback here.
                             * We retry when the browser gives us
                             * another opportunity.
                             */
                        });
                }

            } catch (error) {
                // Autoplay can be blocked temporarily.
            }
        };


        /* -----------------------------------------------------
           Video events
           ----------------------------------------------------- */

        video.addEventListener("playing", showVideo);

        video.addEventListener("canplay", attemptPlay);

        video.addEventListener("canplaythrough", attemptPlay);

        video.addEventListener("loadeddata", attemptPlay);

        video.addEventListener("loadedmetadata", attemptPlay);

        video.addEventListener("error", showFallback);


        /* -----------------------------------------------------
           Initial attempts
           ----------------------------------------------------- */

        attemptPlay();

        window.setTimeout(attemptPlay, 300);

        window.setTimeout(attemptPlay, 1000);

        window.setTimeout(attemptPlay, 2000);


        /* -----------------------------------------------------
           Retry when page becomes visible
           ----------------------------------------------------- */

        document.addEventListener("visibilitychange", () => {

            if (!document.hidden) {
                attemptPlay();
            }

        });


        /* -----------------------------------------------------
           Mobile interaction fallback
           ----------------------------------------------------- */

        const retryAfterInteraction = () => {

            attemptPlay();

            window.setTimeout(attemptPlay, 250);
            window.setTimeout(attemptPlay, 1000);

        };

        window.addEventListener(
            "touchstart",
            retryAfterInteraction,
            {
                once: true,
                passive: true
            }
        );

        window.addEventListener(
            "pointerdown",
            retryAfterInteraction,
            {
                once: true,
                passive: true
            }
        );

        window.addEventListener(
            "scroll",
            retryAfterInteraction,
            {
                once: true,
                passive: true
            }
        );
    }

    initializeHeroVideo();


    /* =========================================================
       NAVBAR SCROLL
       ========================================================= */

    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener(
        "scroll",
        handleNavbarScroll,
        {
            passive: true
        }
    );

    handleNavbarScroll();


    /* =========================================================
       MOBILE MENU
       ========================================================= */

    function openMobileMenu() {

        if (!menuToggle || !mobileMenu) return;

        menuToggle.classList.add("active");
        mobileMenu.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add("menu-open");
    }


    function closeMobileMenu() {

        if (!menuToggle || !mobileMenu) return;

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");
    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                if (
                    mobileMenu &&
                    mobileMenu.classList.contains("active")
                ) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }

            }
        );
    }


    /* =========================================================
       MOBILE MENU LINKS
       ========================================================= */

    document
        .querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    /* =========================================================
       LANGUAGE SYSTEM
       ========================================================= */

    function applyLanguage(language) {

        if (!translations[language]) {
            language = "en";
        }

        const dictionary = translations[language];

        /* -----------------------------------------------------
           HTML direction
           ----------------------------------------------------- */

        document.documentElement.lang = language;

        document.documentElement.dir =
            language === "ar"
                ? "rtl"
                : "ltr";

        document.body.classList.toggle(
            "rtl",
            language === "ar"
        );


        /* -----------------------------------------------------
           Text translations
           ----------------------------------------------------- */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (
                    dictionary[key] !== undefined
                ) {

                    element.innerHTML =
                        dictionary[key];

                }

            });


        /* -----------------------------------------------------
           Active language buttons
           ----------------------------------------------------- */

        document
            .querySelectorAll("[data-lang]")
            .forEach(button => {

                const buttonLanguage =
                    button.getAttribute("data-lang");

                button.classList.toggle(
                    "active",
                    buttonLanguage === language
                );

                button.setAttribute(
                    "aria-pressed",
                    buttonLanguage === language
                        ? "true"
                        : "false"
                );

            });


        /* -----------------------------------------------------
           Store preference
           ----------------------------------------------------- */

        try {
            localStorage.setItem(
                STORAGE_KEY,
                language
            );
        } catch (error) {
            // Storage may be unavailable.
        }
    }


    /* =========================================================
       LANGUAGE BUTTONS
       ========================================================= */

    document
        .querySelectorAll("[data-lang]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.getAttribute("data-lang");

                    applyLanguage(language);

                    closeMobileMenu();

                }
            );

        });


    /* =========================================================
       INITIAL LANGUAGE
       ========================================================= */

    let savedLanguage = "en";

    try {

        const stored =
            localStorage.getItem(STORAGE_KEY);

        if (
            stored === "en" ||
            stored === "ar"
        ) {
            savedLanguage = stored;
        }

    } catch (error) {
        savedLanguage = "en";
    }

    applyLanguage(savedLanguage);


    /* =========================================================
       REVEAL ANIMATIONS
       ========================================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal, [data-reveal]"
        );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -60px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "revealed"
            );

        });
    }


    /* =========================================================
       3D TILT
       ========================================================= */

    const tiltElements =
        document.querySelectorAll(
            "[data-tilt]"
        );


    tiltElements.forEach(element => {

        element.addEventListener(
            "pointermove",
            event => {

                if (window.innerWidth < 900) {
                    return;
                }

                const rect =
                    element.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    ((x - centerX) / centerX) * 4;

                const rotateX =
                    ((centerY - y) / centerY) * 4;

                element.style.transform =
                    `perspective(1200px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(0)`;

            }
        );


        element.addEventListener(
            "pointerleave",
            () => {

                element.style.transform =
                    "";

            }
        );

    });


    /* =========================================================
       CUSTOM CURSOR
       ========================================================= */

    if (
        cursor &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        let cursorX = 0;
        let cursorY = 0;

        let targetX = 0;
        let targetY = 0;


        window.addEventListener(
            "pointermove",
            event => {

                targetX =
                    event.clientX;

                targetY =
                    event.clientY;

            },
            {
                passive: true
            }
        );


        const animateCursor = () => {

            cursorX +=
                (targetX - cursorX) * 0.18;

            cursorY +=
                (targetY - cursorY) * 0.18;

            cursor.style.transform =
                `translate3d(
                    ${cursorX}px,
                    ${cursorY}px,
                    0
                )`;

            requestAnimationFrame(
                animateCursor
            );
        };

        animateCursor();


        document
            .querySelectorAll(
                "a, button, [data-tilt]"
            )
            .forEach(element => {

                element.addEventListener(
                    "mouseenter",
                    () => {
                        cursor.classList.add(
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
                    }
                );

            });
    }


    /* =========================================================
       STATEMENT PARALLAX
       ========================================================= */

    const statement =
        document.querySelector(
            ".statement"
        );


    if (statement) {

        window.addEventListener(
            "scroll",
            () => {

                const rect =
                    statement.getBoundingClientRect();

                const viewportHeight =
                    window.innerHeight;

                if (
                    rect.bottom > 0 &&
                    rect.top < viewportHeight
                ) {

                    const progress =
                        (
                            viewportHeight - rect.top
                        ) /
                        (
                            viewportHeight +
                            rect.height
                        );

                    const movement =
                        (progress - 0.5) * 40;

                    statement.style.setProperty(
                        "--parallax-y",
                        `${movement}px`
                    );

                }

            },
            {
                passive: true
            }
        );

    }


    /* =========================================================
       SMOOTH ANCHOR SCROLL
       ========================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

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
                        document.querySelector(
                            href
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;

                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                    closeMobileMenu();

                }
            );

        });


    /* =========================================================
       IMAGE ERROR HANDLING
       ========================================================= */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-error"
                    );

                }
            );

        });


    /* =========================================================
       ESCAPE KEY
       ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {
                closeMobileMenu();
            }

        }
    );


    /* =========================================================
       RESIZE
       ========================================================= */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900
            ) {
                closeMobileMenu();
            }

        }
    );


    /* =========================================================
       WHATSAPP LINKS
       ========================================================= */

    document
        .querySelectorAll(
            'a[href*="wa.me"], [data-whatsapp]'
        )
        .forEach(link => {

            link.setAttribute(
                "href",
                `https://wa.me/${WHATSAPP_NUMBER}`
            );

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* =========================================================
       INSTAGRAM LINKS
       ========================================================= */

    document
        .querySelectorAll(
            'a[href*="instagram.com"], [data-instagram]'
        )
        .forEach(link => {

            link.setAttribute(
                "href",
                INSTAGRAM_URL
            );

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* =========================================================
       PAGE READY
       ========================================================= */

    document.body.classList.add(
        "js-ready"
    );

})();
