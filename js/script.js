document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Animate Hamburger
            hamburger.classList.toggle('toggle');
        });
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Simulate sending the form
            alert('Thank you for your message! We will get back to you soon.');

            // Clear the form
            contactForm.reset();
        });
    }
});