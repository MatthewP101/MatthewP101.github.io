const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".nav-links");

if (menuButton && navigationLinks) {
    const closeMenu = () => {
        navigationLinks.classList.remove("open");
        menuButton.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
        const menuIsOpen = navigationLinks.classList.toggle("open");
        menuButton.classList.toggle("is-open", menuIsOpen);
        menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    });

    navigationLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!navigationLinks.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 820) {
            closeMenu();
        }
    });
}

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px",
        }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

if (sections.length && navLinks.length) {
    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + 140;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}` || link.getAttribute("href") === `index.html#${id}`);
                });
            }
        });
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
}
