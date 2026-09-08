// Smooth scrolling for navigation links

const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach(function (link) {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        const targetId = link.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});
// Dark Mode

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }

});