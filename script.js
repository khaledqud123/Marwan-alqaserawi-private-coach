/* =========================================================
   MARWAN ALQASRAWI — MAIN SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIG
    ===================================================== */

    const WHATSAPP_NUMBER = "962780666720";

    const INSTAGRAM_URL =
        "https://www.instagram.com/marwanalqasrawi/";

    const STORAGE_KEY = "marwan-language";


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            brand: "MARWAN ALQASRAWI",

            nav_home: "HOME",
            nav_philosophy: "PHILOSOPHY",
            nav_coaching: "COACHING",
            nav_coach: "COACH",
            nav_instagram: "INSTAGRAM",
            nav_contact: "CONTACT",
            nav_cta: "WORK WITH ME",

            hero_eyebrow: "PRIVATE PERFORMANCE COACH",
            hero_title_1: "BUILD",
            hero_title_2: "WITH",
            hero_title_3: "PURPOSE.",
            hero_description:
                "Focused coaching built around strength, performance, discipline and long-term progress.",
            hero_link: "EXPLORE COACHING",
            hero_scroll: "SCROLL TO EXPLORE",

            marquee_1: "STRENGTH",
            marquee_2: "PERFORMANCE",
            marquee_3: "DISCIPLINE",
            marquee_4: "PROGRESS",

            philosophy_label: "THE PHILOSOPHY",
            philosophy_title: "TRAIN WITH INTENTION.",
            philosophy_heading:
                "Training is more than movement. It is a standard you choose to live by.",
            philosophy_text:
                "Every session has a purpose. Every movement has intention. The goal is not simply to train harder, but to train smarter and build lasting performance.",
            philosophy_link: "VIEW COACHING",
            philosophy_caption: "PURPOSE / PERFORMANCE",

            experience_small: "SINCE 2009",
            experience_title: "YEARS OF EXPERIENCE",

            programs_label: "COACHING MENU",
            programs_title: "CHOOSE YOUR DIRECTION.",
            programs_intro:
                "Every coaching path is designed around your goals, your current level and the standard you want to reach.",

            service_1_title: "PERSONAL TRAINING",
            service_1_text:
                "Focused one-to-one coaching built around your goals, movement and progress.",

            service_2_title: "STRENGTH COACHING",
            service_2_text:
                "Structured training designed to build strength, control and physical capacity.",

            service_3_title: "PERFORMANCE COACHING",
            service_3_text:
                "Develop physical performance through purposeful programming and consistent work.",

            service_4_title: "TRANSFORMATION",
            service_4_text:
                "A focused coaching path built around sustainable progress, discipline and consistency.",

            statement_label: "THE STANDARD",
            statement_title:
                "DISCIPLINE<br>CREATES<br>FREEDOM.",

            coach_label: "THE COACH",
            coach_title:
                "EXPERIENCE.<br>DISCIPLINE.<br>PURPOSE.",
            coach_role: "PRIVATE PERFORMANCE COACH",
            coach_text:
                "A coaching approach centered around purposeful training, consistency and meaningful progress.",

            credential_1: "SINCE 2009",
            credential_2: "PRIVATE COACHING",
            credential_3: "PERFORMANCE",

            instagram_label: "FOLLOW THE WORK",
            instagram_title: "INSTAGRAM.",
            instagram_link: "VISIT INSTAGRAM ↗",

            contact_label: "READY TO RAISE THE STANDARD?",
            contact_title: "LET'S WORK.",
            whatsapp_label: "WHATSAPP",
            instagram_contact_label: "INSTAGRAM",
            contact_location: "AMMAN, JORDAN",

            footer_copy: "PRIVATE COACHING 2009 — 2026"
        },


        ar: {

            brand: "مروان القصراوي",

            nav_home: "الرئيسية",
            nav_philosophy: "الفلسفة",
            nav_coaching: "التدريب",
            nav_coach: "المدرب",
            nav_instagram: "إنستغرام",
            nav_contact: "تواصل",
            nav_cta: "تواصل معي",

            hero_eyebrow: "مدرب أداء خاص",
            hero_title_1: "تدرّب",
            hero_title_2: "بـ",
            hero_title_3: "هدف.",

            hero_description:
                "تدريب مخصص يرتكز على القوة والأداء والانضباط والتطور المستمر.",

            hero_link: "اكتشف برامج التدريب",
            hero_scroll: "مرر للاستكشاف",

            marquee_1: "القوة",
            marquee_2: "الأداء",
            marquee_3: "الانضباط",
            marquee_4: "التطور",

            philosophy_label: "فلسفة التدريب",
            philosophy_title: "تدرّب بوعي.",
            philosophy_heading:
                "التدريب أكثر من مجرد حركة. إنه معيار تختار أن تعيش به.",
            philosophy_text:
                "كل جلسة لها هدف. وكل حركة لها معنى. الهدف ليس التدريب بقوة أكبر فقط، بل التدريب بذكاء وبناء أداء يدوم.",
            philosophy_link: "شاهد برامج التدريب",
            philosophy_caption: "الهدف / الأداء",

            experience_small: "منذ 2009",
            experience_title: "سنوات من الخبرة",

            programs_label: "برامج التدريب",
            programs_title: "اختر اتجاهك.",
            programs_intro:
                "كل مسار تدريبي مصمم وفق أهدافك ومستواك الحالي والمعيار الذي تريد الوصول إليه.",

            service_1_title: "التدريب الشخصي",
            service_1_text:
                "تدريب فردي مخصص يركز على أهدافك وحركتك وتطورك.",

            service_2_title: "تدريب القوة",
            service_2_text:
                "برنامج منظم لبناء القوة والتحكم والقدرة البدنية.",

            service_3_title: "تدريب الأداء",
            service_3_text:
                "تطوير الأداء البدني من خلال برامج هادفة وعمل مستمر.",

            service_4_title: "التحول",
            service_4_text:
                "مسار تدريبي يركز على التطور المستدام والانضباط والاستمرارية.",

            statement_label: "المعيار",
            statement_title:
                "الانضباط<br>يصنع<br>الحرية.",

            coach_label: "المدرب",
            coach_title:
                "خبرة.<br>انضباط.<br>هدف.",

            coach_role: "مدرب أداء خاص",

            coach_text:
                "نهج تدريبي يتمحور حول التدريب الهادف والاستمرارية والتطور الحقيقي.",

            credential_1: "منذ 2009",
            credential_2: "تدريب خاص",
            credential_3: "أداء",

            instagram_label: "تابع العمل",
            instagram_title: "إنستغرام.",
            instagram_link: "زيارة إنستغرام ↗",

            contact_label: "جاهز لرفع مستواك؟",
            contact_title: "لنعمل معًا.",
            whatsapp_label: "واتساب",
            instagram_contact_label: "إنستغرام",
            contact_location: "عمّان، الأردن",

            footer_copy: "تدريب خاص 2009 — 2026"
        }

    };


    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if (loader) {
            loader.classList.add("loaded");
        }

        document.body.classList.add("loaded");

    }, 1400);


    /* =====================================================
       LANGUAGE
    ===================================================== */

    const languageButtons = document.querySelectorAll(
        ".language-btn, .mobile-language-btn"
    );

    function applyLanguage(language) {

        const selected =
            translations[language]
                ? language
                : "en";

        document.documentElement.lang = selected;

        document.documentElement.dir =
            selected === "ar"
                ? "rtl"
                : "ltr";

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (!translations[selected][key]) {
                return;
            }

            element.innerHTML =
                translations[selected][key];

        });


        languageButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === selected
            );

        });


        localStorage.setItem(
            STORAGE_KEY,
            selected
        );
    }


    languageButtons.forEach(button => {

        button.addEventListener("click", () => {

            applyLanguage(button.dataset.lang);

        });

    });


    const savedLanguage =
        localStorage.getItem(STORAGE_KEY);

    applyLanguage(
        savedLanguage === "ar"
            ? "ar"
            : "en"
    );


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar =
        document.getElementById("navbar");

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 45
        );

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    function closeMobileMenu() {

        if (!mobileMenu || !menuToggle) {
            return;
        }

        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );
    }


    function openMobileMenu() {

        if (!mobileMenu || !menuToggle) {
            return;
        }

        mobileMenu.classList.add("open");
        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "menu-open"
        );
    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                if (
                    mobileMenu &&
                    mobileMenu.classList.contains("open")
                ) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }

            }
        );

    }


    document
        .querySelectorAll(".mobile-nav a, .mobile-cta")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        }
    );


    /* =====================================================
       HERO VIDEO
    ===================================================== */

    const heroVideo =
        document.getElementById("heroVideo");

    const heroImage =
        document.querySelector(".hero-image");

    if (heroVideo) {

        heroVideo.muted = true;
        heroVideo.playsInline = true;

        heroVideo.addEventListener(
            "playing",
            () => {

                heroVideo.classList.add("playing");

                if (heroImage) {
                    heroImage.style.opacity = "0";
                }

            }
        );

        heroVideo.addEventListener(
            "error",
            () => {

                heroVideo.classList.remove(
                    "playing"
                );

                if (heroImage) {
                    heroImage.style.opacity = "1";
                }

            }
        );

        heroVideo
            .play()
            .catch(() => {
                /* Browser may block autoplay. */
            });

    }


    /* =====================================================
       REVEAL ANIMATIONS
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       3D TILT
    ===================================================== */

    const tiltElements =
        document.querySelectorAll("[data-tilt]");

    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (finePointer) {

        tiltElements.forEach(element => {

            element.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        element.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 5;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -5;

                    element.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

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


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursor =
        document.getElementById("cursor");

    if (
        cursor &&
        finePointer
    ) {

        window.addEventListener(
            "mousemove",
            event => {

                cursor.style.left =
                    `${event.clientX}px`;

                cursor.style.top =
                    `${event.clientY}px`;

            },
            { passive: true }
        );


        document
            .querySelectorAll("a, button")
            .forEach(element => {

                element.addEventListener(
                    "mouseenter",
                    () => {
                        cursor.classList.add("hover");
                    }
                );

                element.addEventListener(
                    "mouseleave",
                    () => {
                        cursor.classList.remove("hover");
                    }
                );

            });

    } else if (cursor) {

        cursor.style.display = "none";

    }


    /* =====================================================
       SMOOTH ANCHOR NAVIGATION
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
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
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       INSTAGRAM LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href*="instagram.com"]'
        )
        .forEach(link => {

            link.href = INSTAGRAM_URL;

            link.target = "_blank";
            link.rel = "noopener noreferrer";

        });


    /* =====================================================
       WHATSAPP LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href*="wa.me"]'
        )
        .forEach(link => {

            link.href =
                `https://wa.me/${WHATSAPP_NUMBER}`;

            link.target = "_blank";
            link.rel = "noopener noreferrer";

        });


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.opacity = "0";

                }
            );

        });


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 1050
            ) {
                closeMobileMenu();
            }

        }
    );

});
