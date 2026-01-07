document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById("navMenu");
    const navBar = document.getElementById("navBar");
    const navLinks = document.querySelectorAll(".navLink");

    navMenu.addEventListener("click", () => {
        navBar.classList.toggle("active");
    });
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navBar.classList.remove("active");
        });
    });
});