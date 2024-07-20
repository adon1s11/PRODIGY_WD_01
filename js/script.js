// JavaScript to change navigation styles on scroll and hover

// Add scroll event listener to change navigation style on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust as needed based on scroll position
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add hover event listeners to change navigation style on hover
var navLinks = document.querySelectorAll('#main-nav ul li a');

navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
        this.style.color = '#ff0000'; // Change font color on hover
    });

    navLink.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Restore default font color on mouseout
    });
});
