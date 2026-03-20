document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById("navMenu");
    const navBar = document.getElementById("navBar");
    const navLinks = document.querySelectorAll(".navLink");
    const questions = document.getElementsByClassName("question");

    navMenu.addEventListener("click", () => {
        navBar.classList.toggle("active");
    });
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navBar.classList.remove("active");
        });
    });

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let answer = this.nextElementSibling;
            let faqItem = this.parentElement;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    }
});