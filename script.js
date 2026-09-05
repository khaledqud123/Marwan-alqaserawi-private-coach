document.addEventListener("DOMContentLoaded", () => {
    /* =========================================================
       CONFIG
    ========================================================= */

    const WHATSAPP_NUMBER = "962780666720";
    const INSTAGRAM_URL = "https://www.instagram.com/marwanalqasrawi/";
    const STORAGE_KEY = "marwan-language";


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const body = document.body;
    const html = document.documentElement;

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    const heroVideo = document.getElementById("heroVideo");
    const heroImage = document.querySelector(".hero-image");

    const loader = document.querySelector(".loader");

    const languageButtons = document.querySelectorAll(
        ".language-btn, .mobile-language-btn"
    );


    /* =========================================================
       BILINGUAL CONTENT
    ========================================================= */

    const translations = {

        en: {
            nav_home: "HOME",
            nav_philosophy: "PHILOSOPHY",
            nav_programs: "PROGRAMS",
            nav_coach: "COACH",
            nav_contact: "CONTACT",

            nav_cta: "BOOK A SESSION",

            mobile_home: "Home",
            mobile_philosophy: "Philosophy",
            mobile_programs: "Programs",
            mobile_coach: "Coach",
            mobile_contact: "Contact",

            hero_eyebrow: "PRIVATE PERFORMANCE COACH",
            hero_line_1: "BUILD",
            hero_line_2: "YOUR",
            hero_line_3: "STANDARD",

            hero_description:
                "Personal performance coaching built around strength, discipline and long-term transformation.",

            hero_link: "EXPLORE THE METHOD",

            philosophy_label: "THE PHILOSOPHY",
            philosophy_title_1: "TRAIN",
            philosophy_title_2: "WITH",
            philosophy_title_3: "PURPOSE",

            philosophy_text:
                "Training is more than movement. It is the process of building discipline, confidence and a stronger standard for yourself.",

            philosophy_link: "DISCOVER THE APPROACH",

            stats_1: "CLIENTS COACHED",
            stats_2: "YEARS EXPERIENCE",
            stats_3: "COMMITMENT",
            stats_4: "PERSONAL APPROACH",

            programs_label: "COACHING PROGRAMS",
            programs_title_1: "CHOOSE",
            programs_title_2: "YOUR LEVEL",

            programs_intro:
                "Structured coaching designed around your goals, your lifestyle and the person you want to become.",

            program_1_label: "01 / FOUNDATION",
            program_1_title: "FOUNDATION",
            program_1_text:
                "Build the fundamentals. Improve movement, strength and consistency.",

            program_2_label: "02 / PERFORMANCE",
            program_2_title: "PERFORMANCE",
            program_2_text:
                "Push your capabilities with focused programming and progressive training.",

            program_3_label: "03 / ELITE",
            program_3_title: "ELITE",
            program_3_text:
                "A highly personalised approach for serious long-term performance.",

            statement_label: "THE STANDARD",
            statement_1: "DISCIPLINE",
            statement_2: "CREATES",
            statement_3: "FREEDOM",

            statement_text:
                "The goal isn't simply to train harder. It's to become harder to stop.",

            coach_label: "THE COACH",
            coach_role: "PRIVATE PERFORMANCE COACH",
            coach_title_1: "MARWAN",
            coach_title_2: "ALQASRAWI",

            coach_text:
                "A coaching approach focused on meaningful progress, intelligent training and building standards that last beyond the gym.",

            credential_1_label: "APPROACH",
            credential_1_value: "PERSONAL",

            credential_2_label: "FOCUS",
            credential_2_value: "PERFORMANCE",

            credential_3_label: "METHOD",
            credential_3_value: "PROGRESSIVE",

            instagram_label: "FOLLOW THE JOURNEY",
            instagram_title_1: "THE",
            instagram_title_2: "JOURNEY",

            instagram_link: "VIEW INSTAGRAM",

            testimonial_text:
                "Real progress starts when you stop negotiating with the standard you set for yourself.",

            testimonial_author: "MARWAN ALQASRAWI",
            testimonial_role: "PRIVATE PERFORMANCE COACH",

            contact_label: "START HERE",
            contact_title_1: "READY",
            contact_title_2: "TO MOVE",

            contact_text:
                "Tell me where you are now, where you want to go, and we'll build the path between them.",

            contact_whatsapp: "WHATSAPP",
            contact_instagram: "INSTAGRAM",

            contact_location: "AMMAN",
            contact_availability: "PRIVATE COACHING",
            contact_booking: "BY APPOINTMENT",

            footer_rights: "ALL RIGHTS RESERVED",
            footer_private: "PRIVATE PERFORMANCE COACHING"
        },


        ar: {
            nav_home: "الرئيسية",
            nav_philosophy: "الفلسفة",
            nav_programs: "البرامج",
            nav_coach: "المدرب",
            nav_contact: "تواصل",

            nav_cta: "احجز جلسة",

            mobile_home: "الرئيسية",
            mobile_philosophy: "الفلسفة",
            mobile_programs: "البرامج",
            mobile_coach: "المدرب",
            mobile_contact: "تواصل",

            hero_eyebrow: "مدرب أداء خاص",
            hero_line_1: "ابنِ",
            hero_line_2: "معيارك",
            hero_line_3: "الخاص",

            hero_description:
                "تدريب شخصي يركز على القوة والانضباط والتطور الحقيقي على المدى الطويل.",

            hero_link: "اكتشف المنهج",

            philosophy_label: "الفلسفة",
            philosophy_title_1: "تدرّب",
            philosophy_title_2: "بهدف",
            philosophy_title_3: "واضح",

            philosophy_text:
                "التدريب أكثر من مجرد حركة. إنه طريق لبناء الانضباط والثقة ورفع المستوى الذي تضعه لنفسك.",

            philosophy_link: "اكتشف المنهج",

            stats_1: "متدربون",
            stats_2: "سنوات خبرة",
            stats_3: "التزام",
            stats_4: "نهج شخصي",

            programs_label: "برامج التدريب",
            programs_title_1: "اختر",
            programs_title_2: "مستواك",

            programs_intro:
                "برامج تدريبية مصممة حول أهدافك ونمط حياتك والشخص الذي تريد أن تصبح عليه.",

            program_1_label: "01 / الأساس",
            program_1_title: "الأساس",
            program_1_text:
                "ابنِ الأساس الصحيح وطوّر الحركة والقوة والاستمرارية.",

            program_2_label: "02 / الأداء",
            program_2_title: "الأداء",
            program_2_text:
                "ارفع قدراتك من خلال تدريب منظم وتطور تدريجي.",

            program_3_label: "03 / النخبة",
            program_3_title: "النخبة",
            program_3_text:
                "نهج شخصي ومتقدم لمن يبحث عن تطور جاد ومستمر.",

            statement_label: "المعيار",
            statement_1: "الانضباط",
            statement_2: "يصنع",
            statement_3: "الحرية",

            statement_text:
                "الهدف ليس أن تتدرب بقوة أكبر فقط، بل أن تصبح أصعب على التوقف.",

            coach_label: "المدرب",
            coach_role: "مدرب أداء خاص",
            coach_title_1: "مروان",
            coach_title_2: "القصراوي",

            coach_text:
                "نهج تدريبي يركز على التطور الحقيقي، التدريب الذكي، وبناء معايير تستمر معك خارج صالة التدريب.",

            credential_1_label: "النهج",
            credential_1_value: "شخصي",

            credential_2_label: "التركيز",
            credential_2_value: "الأداء",

            credential_3_label: "المنهج",
            credential_3_value: "تدريجي",

            instagram_label: "تابع الرحلة",
            instagram_title_1: "ال",
            instagram_title_2: "رحلة",

            instagram_link: "شاهد إنستغرام",

            testimonial_text:
                "يبدأ التطور الحقيقي عندما تتوقف عن التفاوض مع المعيار الذي وضعته لنفسك.",

            testimonial_author: "مروان القصراوي",
            testimonial_role: "مدرب أداء خاص",

            contact_label: "ابدأ من هنا",
            contact_title_1: "هل أنت",
            contact_title_2: "مستعد؟",

            contact_text:
                "أخبرني أين أنت الآن وإلى أين تريد الوصول، وسنبني الطريق بينهما.",

            contact_whatsapp: "واتساب",
            contact_instagram: "إنستغرام",

            contact_location: "عمّان",
            contact_availability: "تدريب خاص",
            contact_booking: "بموعد مسبق",

            footer_rights: "جميع الحقوق محفوظة",
            footer_private: "تدريب أداء خاص"
        }
    };


    /* =========================================================
       LANGUAGE SYSTEM
    ========================================================= */

    function setLanguage(language) {

        if (!translations[language]) {
            language = "en";
        }

        const dictionary = translations[language];

        html.lang = language;
        html.dir = language === "ar" ? "rtl" : "ltr";

        body.classList.toggle("rtl", language === "ar");

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.getAttribute("data-i18n");

            if (dictionary[key] !== undefined) {
                element.textContent = dictionary[key];
            }

        });

        languageButtons.forEach(button => {

            const buttonLanguage =
                button.dataset.lang ||
                button.getAttribute("data-language");

            button.classList.toggle(
                "active",
                buttonLanguage === language
            );

        });

        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
            // Ignore storage restrictions.
        }
    }


    function getInitialLanguage() {

        try {

            const saved = localStorage.getItem(STORAGE_KEY);

            if (saved === "en" || saved === "ar") {
                return saved;
            }

        } catch (error) {
            // Ignore storage restrictions.
        }

        return "en";
    }


    languageButtons.forEach(button => {

        button.addEventListener("click", () => {

            const language =
                button.dataset.lang ||
                button.getAttribute("data-language");

            if (language) {
                setLanguage(language);
            }

        });

    });


    /* =========================================================
       HERO VIDEO
       IMPORTANT:
       - No timeout
       - No artificial error state
       - No replacing the video
       - Let the browser handle buffering naturally
    ========================================================= */

    function initializeHeroVideo() {

        if (!heroVideo) return;

        heroVideo.muted = true;

        heroVideo.setAttribute("muted", "");
        heroVideo.setAttribute("playsinline", "");
        heroVideo.setAttribute("webkit-playsinline", "");

        /*
         * Do NOT immediately hide the video.
         * The MP4 is hosted correctly, so we simply let
         * the browser load and play it.
         */

        const markPlaying = () => {

            if (
                !heroVideo.paused &&
                !heroVideo.ended &&
                heroVideo.readyState >= 2
            ) {
                heroVideo.classList.add("playing");

                if (heroImage) {
                    heroImage.style.opacity = "0";
                }
            }

        };


        heroVideo.addEventListener(
            "playing",
            markPlaying,
            { passive: true }
        );


        heroVideo.addEventListener(
            "canplay",
            () => {

                const playPromise = heroVideo.play();

                if (playPromise !== undefined) {

                    playPromise
                        .then(() => {
                            markPlaying();
                        })
                        .catch(() => {
                            /*
                             * Safari/iOS may delay autoplay.
                             * This is NOT treated as a video error.
                             */
                        });

                }

            },
            { passive: true }
        );


        heroVideo.addEventListener(
            "loadeddata",
            () => {

                const playPromise = heroVideo.play();

                if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                }

            },
            { passive: true }
        );


        /*
         * Initial attempt.
         */

        try {

            heroVideo.load();

            const playPromise = heroVideo.play();

            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }

        } catch (error) {
            /*
             * Do not add .error here.
             * Temporary playback issues should not
             * permanently hide the video.
             */
        }

    }


    /* =========================================================
       LOADER
    ========================================================= */

    function hideLoader() {

        document.body.classList.add("page-ready");

        if (!loader) return;

        setTimeout(() => {
            loader.classList.add("loaded");
        }, 450);

    }


    window.addEventListener(
        "load",
        hideLoader,
        { once: true }
    );


    setTimeout(hideLoader, 2200);


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    function closeMobileMenu() {

        if (!menuToggle || !mobileMenu) return;

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("open");
        body.classList.remove("menu-open");

    }


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            const open =
                mobileMenu.classList.toggle("open");

            menuToggle.classList.toggle("active", open);
            body.classList.toggle("menu-open", open);

        });


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            });

    }


    /* =========================================================
       NAVBAR SCROLL
    ========================================================= */

    let lastScrollY = window.scrollY;
    let ticking = false;


    function updateNavbar() {

        if (!navbar) return;

        const currentScrollY = window.scrollY;

        navbar.classList.toggle(
            "scrolled",
            currentScrollY > 50
        );


        if (
            currentScrollY > lastScrollY &&
            currentScrollY > 120 &&
            !body.classList.contains("menu-open")
        ) {

            navbar.classList.add("nav-hidden");

        } else {

            navbar.classList.remove("nav-hidden");

        }


        lastScrollY = currentScrollY;
        ticking = false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateNavbar
                );

                ticking = true;
            }

        },
        { passive: true }
    );


    /* =========================================================
       REVEAL ANIMATIONS
    ========================================================= */

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
                    threshold: 0.12,
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


    /* =========================================================
       STAT COUNTERS
    ========================================================= */

    const counters =
        document.querySelectorAll("[data-count]");


    function animateCounter(element) {

        const target =
            parseFloat(element.dataset.count);

        if (Number.isNaN(target)) return;

        const duration = 1500;
        const startTime = performance.now();


        function updateCounter(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) / duration,
                    1
                );


            const eased =
                1 - Math.pow(1 - progress, 4);


            const value =
                Math.round(target * eased);


            element.textContent = value;


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                element.textContent = target;

            }

        }


        requestAnimationFrame(updateCounter);

    }


    if ("IntersectionObserver" in window && counters.length) {

        const counterObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            animateCounter(
                                entry.target
                            );

                            counterObserver.unobserve(
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
            counterObserver.observe(counter);
        });

    }


    /* =========================================================
       PARALLAX
    ========================================================= */

    const parallaxElements =
        document.querySelectorAll(
            ".hero-image, .hero-video, .statement-image img"
        );


    let parallaxTicking = false;


    function updateParallax() {

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            parallaxTicking = false;
            return;
        }


        const scrollY = window.scrollY;


        parallaxElements.forEach(element => {

            const rect =
                element.parentElement.getBoundingClientRect();

            const center =
                rect.top + rect.height / 2;

            const viewportCenter =
                window.innerHeight / 2;

            const distance =
                (center - viewportCenter) * 0.025;


            element.style.transform =
                `scale(1.05) translate3d(0, ${distance}px, 0)`;

        });


        parallaxTicking = false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!parallaxTicking) {

                requestAnimationFrame(
                    updateParallax
                );

                parallaxTicking = true;

            }

        },
        { passive: true }
    );


    /* =========================================================
       MAGNETIC BUTTONS
    ========================================================= */

    const magneticElements =
        document.querySelectorAll(
            ".nav-cta, .hero-link, .text-link, .instagram-link, .contact-primary, .contact-secondary"
        );


    if (window.matchMedia("(hover: hover)").matches) {

        magneticElements.forEach(element => {

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


                    element.style.transform =
                        `translate3d(${x * 0.08}px, ${y * 0.08}px, 0)`;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform = "";

                }
            );

        });

    }


    /* =========================================================
       CUSTOM CURSOR
    ========================================================= */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorFollower =
        document.querySelector(".cursor-follower");


    if (
        cursorDot &&
        cursorFollower &&
        window.matchMedia("(hover: hover)").matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let followerX = 0;
        let followerY = 0;


        window.addEventListener(
            "mousemove",
            event => {

                mouseX = event.clientX;
                mouseY = event.clientY;


                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;

            },
            { passive: true }
        );


        function animateCursor() {

            followerX +=
                (mouseX - followerX) * 0.15;

            followerY +=
                (mouseY - followerY) * 0.15;


            cursorFollower.style.left =
                `${followerX}px`;

            cursorFollower.style.top =
                `${followerY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        document
            .querySelectorAll("a, button, .program-card, .instagram-item")
            .forEach(element => {

                element.addEventListener(
                    "mouseenter",
                    () => body.classList.add("cursor-hover")
                );

                element.addEventListener(
                    "mouseleave",
                    () => body.classList.remove("cursor-hover")
                );

            });

    }


    /* =========================================================
       3D PROGRAM CARDS
    ========================================================= */

    const programCards =
        document.querySelectorAll(".program-card");


    if (
        window.matchMedia("(hover: hover)").matches
    ) {

        programCards.forEach(card => {

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


                    const rotateY =
                        ((x / rect.width) - 0.5) * 7;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -7;


                    card.style.transform =
                        `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });

    }


    /* =========================================================
       SMOOTH ANCHOR LINKS
    ========================================================= */

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


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior:
                            window.matchMedia(
                                "(prefers-reduced-motion: reduce)"
                            ).matches
                                ? "auto"
                                : "smooth"
                    });

                }
            );

        });


    /* =========================================================
       WHATSAPP LINKS
    ========================================================= */

    document
        .querySelectorAll('a[href*="wa.me"]')
        .forEach(link => {

            link.href =
                `https://wa.me/${WHATSAPP_NUMBER}`;

            link.target = "_blank";
            link.rel = "noopener noreferrer";

        });


    /* =========================================================
       INSTAGRAM LINKS
    ========================================================= */

    document
        .querySelectorAll('a[href*="instagram.com"]')
        .forEach(link => {

            link.href = INSTAGRAM_URL;

            link.target = "_blank";
            link.rel = "noopener noreferrer";

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

                    console.error(
                        "IMAGE FAILED TO LOAD:",
                        image.src
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

            if (event.key === "Escape") {
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
                window.innerWidth > 760
            ) {
                closeMobileMenu();
            }

        },
        { passive: true }
    );


    /* =========================================================
       INITIALIZE
    ========================================================= */

    setLanguage(getInitialLanguage());

    initializeHeroVideo();

});
