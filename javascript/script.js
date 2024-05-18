// Example of a responsive navigation menu script
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll("nav ul li a");

    navToggle.addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("show-nav");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.querySelector("nav ul").classList.remove("show-nav");
        });
    });
});

