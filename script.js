// update the footer year automatically
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// open and close the mobile navigation
const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".nav-links");

if (menuButton && navigationLinks) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navigationLinks.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    });

    navigationLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigationLinks.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// reveal panels as they enter the page
const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.14 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
