/* =========================================================
   MARWAN ALQASRAWI — PRIVATE COACH
   BILINGUAL INTERACTION SYSTEM
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

            philosophy_title:
                "TRAIN WITH INTENTION.",

            philosophy_heading:
                "Training is more than movement. It is a standard you choose to live by.",

            philosophy_text:
                "Every session has a purpose. Every movement has intention. The goal is not simply to train harder, but to train smarter and build lasting performance.",

            philosophy_link:
                "VIEW COACHING",

            philosophy_caption:
                "PURPOSE / PERFORMANCE",

            experience_small:
                "SINCE 2009",

            experience_title:
                "YEARS OF EXPERIENCE",

            programs_label:
                "COACHING MENU",

            programs_title:
                "CHOOSE YOUR DIRECTION.",

            programs_intro:
                "Every coaching path is designed around your goals, your current level and the standard you want to reach.",

            service_1_number: "01",

            service_1_title:
                "PERSONAL TRAINING",

            service_1_text:
                "Focused one-to-one coaching built around your goals, movement and progress.",

            service_2_number: "02",

            service_2_title:
                "STRENGTH COACHING",

            service_2_text:
                "Structured training designed to build strength, control and physical capacity.",

            service_3_number: "03",

            service_3_title:
                "PERFORMANCE COACHING",

            service_3_text:
                "Develop physical performance through purposeful programming and consistent work.",

            service_4_number: "04",

            service_4_title:
                "TRANSFORMATION",

            service_4_text:
                "A focused coaching path built around sustainable progress, discipline and consistency.",

            statement_label:
                "THE STANDARD",

            statement_title:
                "DISCIPLINE CREATES FREEDOM.",

            coach_label:
                "THE COACH",

            coach_title:
                "EXPERIENCE. DISCIPLINE. PURPOSE.",

            coach_role:
                "PRIVATE PERFORMANCE COACH",

            coach_text:
                "A coaching approach centered around purposeful training, consistency and meaningful progress.",

            credential_1:
                "SINCE 2009",

            credential_2:
                "PRIVATE COACHING",

            credential_3:
                "PERFORMANCE",

            instagram_label:
                "FOLLOW THE WORK",

            instagram_title:
                "INSTAGRAM.",

            instagram_link:
                "VISIT INSTAGRAM",

            contact_title:
                "READY TO RAISE THE STANDARD?",

            whatsapp_label:
                "WHATSAPP",

            instagram_contact_label:
                "INSTAGRAM",

            contact_location:
                "PRIVATE COACHING",

            footer_copy:
                "PRIVATE PERFORMANCE COACH"
        },

        ar: {

            brand:
                "مروان القصراوي",

            nav_home:
                "الرئيسية",

            nav_philosophy:
                "الفلسفة",

            nav_coaching:
                "التدريب",

            nav_coach:
                "المدرب",

            nav_instagram:
                "إنستغرام",

            nav_contact:
                "تواصل",

            nav_cta:
                "ابدأ التدريب",

            hero_eyebrow:
                "مدرب أداء خاص",

            hero_title_1:
                "تدرّب",

            hero_title_2:
                "بـ",

            hero_title_3:
                "هدف.",

            hero_description:
                "تدريب متخصص يرتكز على القوة والأداء والانضباط والتطور المستمر.",

            hero_link:
                "استكشف برامج التدريب",

            hero_scroll:
                "مرر للاستكشاف",

            marquee_1:
                "القوة",

            marquee_2:
                "الأداء",

            marquee_3:
                "الانضباط",

            marquee_4:
                "التطور",

            philosophy_label:
                "فلسفة التدريب",

            philosophy_title:
                "تدرّب بوعي.",

            philosophy_heading:
                "التدريب ليس مجرد حركة، بل معيار تختار أن تعيش وفقه.",

            philosophy_text:
                "لكل جلسة هدف، ولكل حركة معنى. الهدف ليس أن تتدرب بقوة أكبر فقط، بل أن تتدرب بذكاء وتبني أداءً مستداماً.",

            philosophy_link:
                "استكشف التدريب",

            philosophy_caption:
                "الهدف / الأداء",

            experience_small:
                "منذ 2009",

            experience_title:
                "عاماً من الخبرة",

            programs_label:
                "قائمة التدريب",

            programs_title:
                "اختر اتجاهك.",

            programs_intro:
                "كل مسار تدريبي مصمم وفق أهدافك ومستواك الحالي والمعيار الذي تريد الوصول إليه.",

            service_1_number:
                "01",

            service_1_title:
                "التدريب الشخصي",

            service_1_text:
                "تدريب فردي متخصص يتمحور حول أهدافك وحركتك وتطورك.",

            service_2_number:
                "02",

            service_2_title:
                "تدريب القوة",

            service_2_text:
                "برنامج تدريبي منظم لبناء القوة والتحكم والقدرة البدنية.",

            service_3_number:
                "03",

            service_3_title:
                "تدريب الأداء",

            service_3_text:
                "تطوير الأداء البدني من خلال التخطيط الهادف والعمل المستمر.",

            service_4_number:
                "04",

            service_4_title:
                "التحول",

            service_4_text:
                "مسار تدريبي يركز على التطور المستدام والانضباط والاستمرارية.",

            statement_label:
                "المعيار",

            statement_title:
                "الانضباط يصنع الحرية.",

            coach_label:
                "المدرب",

            coach_title:
                "خبرة. انضباط. هدف.",

            coach_role:
                "مدرب أداء خاص",

            coach_text:
                "منهج تدريبي يرتكز على التدريب الهادف والاستمرارية والتطور الحقيقي.",

            credential_1:
                "منذ 2009",

            credential_2:
                "تدريب خاص",

            credential_3:
                "الأداء",

            instagram_label:
                "تابع العمل",

            instagram_title:
                "إنستغرام.",

            instagram_link:
                "زيارة إنستغرام",

            contact_title:
                "جاهز لرفع المستوى؟",

            whatsapp_label:
                "واتساب",

            instagram_contact_label:
                "إنستغرام",

            contact_location:
                "تدريب خاص",

            footer_copy:
                "مدرب أداء خاص"
        }

    };

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const body =
        document.body;

    const loader =
        document.getElementById("loader");

    const navbar =
        document.getElementById("navbar");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const cursor =
        document.getElementById("cursor");

    const heroVideo =
        document.getElementById("heroVideo");

    /* =====================================================
       LOADER
       ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("loaded");
            }

        }, 450);

    });

    /* =====================================================
       HERO VIDEO
       IMPORTANT:
       No artificial timeout.
       Fallback only happens if the video genuinely errors.
       ===================================================== */

    function initializeHeroVideo() {

        if (!heroVideo) return;

        const fallback =
            document.querySelector(".hero-image");

        const showVideo = () => {

            heroVideo.classList.add("playing");
            heroVideo.classList.remove("error");

            if (fallback) {
                fallback.style.opacity = "0";
            }

        };

        const showFallback = () => {

            heroVideo.classList.remove("playing");
            heroVideo.classList.add("error");

            if (fallback) {
                fallback.style.opacity = "1";
            }

        };

        heroVideo.muted = true;

        heroVideo.setAttribute(
            "muted",
            ""
        );

        heroVideo.setAttribute(
            "playsinline",
            ""
        );

        heroVideo.setAttribute(
            "webkit-playsinline",
            ""
        );

        heroVideo.addEventListener(
            "playing",
            showVideo
        );

        heroVideo.addEventListener(
            "error",
            showFallback
        );

        const attemptPlay = () => {

            if (heroVideo.readyState >= 2) {

                const promise =
                    heroVideo.play();

                if (
                    promise &&
                    typeof promise.catch === "function"
                ) {

                    promise
                        .then(showVideo)
                        .catch(() => {});

                }

            }

        };

        heroVideo.addEventListener(
            "loadeddata",
            attemptPlay,
            { once: true }
        );

        heroVideo.addEventListener(
            "canplay",
            attemptPlay,
            { once: true }
        );

        attemptPlay();

    }

    initializeHeroVideo();

    /* =====================================================
       NAVBAR
       ===================================================== */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 45) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

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

    function closeMobileMenu() {

        if (!mobileMenu || !menuToggle) return;

        mobileMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        body.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    function openMobileMenu() {

        if (!mobileMenu || !menuToggle) return;

        mobileMenu.classList.add("active");
        menuToggle.classList.add("active");

        body.classList.add("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu &&
                    mobileMenu.classList.contains("active");

                if (isOpen) {

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

    /* =====================================================
       LANGUAGE SYSTEM
       ===================================================== */

    function applyLanguage(language) {

        const lang =
            translations[language]
                ? language
                : "en";

        const dictionary =
            translations[lang];

        document.documentElement.lang =
            lang;

        document.documentElement.dir =
            lang === "ar"
                ? "rtl"
                : "ltr";

        if (lang === "ar") {

            body.classList.add("rtl");

        } else {

            body.classList.remove("rtl");

        }

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (
                    dictionary[key] !== undefined
                ) {

                    element.textContent =
                        dictionary[key];

                }

            });

        /*
         * Keep the loader name synchronized
         * with the selected language.
         */

        const loaderBrand =
            document.querySelector(".loader-brand");

        if (loaderBrand) {

            loaderBrand.textContent =
                dictionary.brand;

        }

        document
            .querySelectorAll(
                ".language-btn, .mobile-language-btn"
            )
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.lang === lang
                );

            });

        localStorage.setItem(
            STORAGE_KEY,
            lang
        );

    }

    document
        .querySelectorAll(
            ".language-btn, .mobile-language-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.lang;

                    applyLanguage(language);

                }
            );

        });

    const savedLanguage =
        localStorage.getItem(STORAGE_KEY);

    applyLanguage(
        savedLanguage === "ar"
            ? "ar"
            : "en"
    );

    /* =====================================================
       REVEAL ON SCROLL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

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
                    threshold: .12,
                    rootMargin: "0px 0px -50px 0px"
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

    tiltElements.forEach(element => {

        element.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth <= 760) {
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

                const rotateX =
                    ((y - centerY) / centerY) * -3;

                const rotateY =
                    ((x - centerX) / centerX) * 3;

                element.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(0)`;

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

    /* =====================================================
       CUSTOM CURSOR
       ===================================================== */

    if (
        cursor &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        document.addEventListener(
            "mousemove",
            event => {

                cursor.style.left =
                    `${event.clientX}px`;

                cursor.style.top =
                    `${event.clientY}px`;

            }
        );

        document
            .querySelectorAll("a, button")
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

    /* =====================================================
       PARALLAX
       ===================================================== */

    const statementImage =
        document.querySelector(
            ".statement-image img"
        );

    if (statementImage) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.innerWidth <= 760) {
                    return;
                }

                const rect =
                    statementImage.getBoundingClientRect();

                const viewportHeight =
                    window.innerHeight;

                if (
                    rect.bottom < 0 ||
                    rect.top > viewportHeight
                ) {
                    return;
                }

                const progress =
                    (viewportHeight - rect.top) /
                    (viewportHeight + rect.height);

                const movement =
                    (progress - .5) * 35;

                statementImage.style.transform =
                    `translateY(${movement}px) scale(1.06)`;

            },
            { passive: true }
        );

    }

    /* =====================================================
       SMOOTH ANCHOR LINKS
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
                        document.querySelector(targetId);

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
       IMAGE ERROR HANDLING
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
       ESCAPE KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeMobileMenu();

            }

        }
    );

    /* =====================================================
       RESIZE
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 1050 &&
                mobileMenu &&
                mobileMenu.classList.contains("active")
            ) {

                closeMobileMenu();

            }

        }
    );

    /* =====================================================
       WHATSAPP LINK SAFETY
       ===================================================== */

    document
        .querySelectorAll('a[href*="wa.me"]')
        .forEach(link => {

            link.href =
                `https://wa.me/${WHATSAPP_NUMBER}`;

        });

    /* =====================================================
       INSTAGRAM LINK CONSISTENCY
       ===================================================== */

    document
        .querySelectorAll('a[href*="instagram.com"]')
        .forEach(link => {

            link.href =
                INSTAGRAM_URL;

        });

});
