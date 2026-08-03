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
