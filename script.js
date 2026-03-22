document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById("navMenu");
    const navBar = document.getElementById("navBar");
    const navLinks = document.querySelectorAll(".navLink");
    const questions = document.getElementsByClassName("question");
    const contentElements = document.querySelectorAll(
        '.aboutItem, .scheduleItem, .profileContainer, .faqItem, ' +
        '#homeButtons, #footerLinks, #footerText'
    );
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('isVisible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);
    
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
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = (answer.scrollHeight + 16) + "px";
            }
        });
    }

    contentElements.forEach(element => {
        element.classList.add('fadeOnLoad');
        observer.observe(element);
    });
});