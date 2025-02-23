// Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      navLinks.classList.remove('active');
    }
  });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScroll = currentScroll;
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// Enhanced Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation to the main element
      entry.target.classList.add('animate');
      
      // Animate child elements with delay
      if (entry.target.classList.contains('features-grid')) {
        entry.target.querySelectorAll('.feature-card').forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 100);
        });
      }
      
      if (entry.target.classList.contains('team-grid')) {
        entry.target.querySelectorAll('.team-member').forEach((member, index) => {
          setTimeout(() => {
            member.classList.add('animate');
          }, index * 100);
        });
      }
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section, .features-grid, .team-grid, .about-content, .contact-content').forEach(section => {
  observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});

// Animate tech stack items
const techIcons = document.querySelectorAll('.tech-icons span');
techIcons.forEach((icon, index) => {
  icon.style.animationDelay = `${index * 0.1}s`;
});








// document.addEventListener("DOMContentLoaded", function () {
//     var video1 = document.getElementById('video1');
//     var video2 = document.getElementById('video2');

//     video1.onended = function () {
//         video1.style.display = "none"; // Hide video 1
//         video2.style.display = "block"; // Show video 2
//         video2.play(); // Play video 2
//     };
// });
