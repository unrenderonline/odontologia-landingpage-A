'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * GSAP Animations
 */

// Wait for GSAP to load
window.addEventListener('load', function() {
  
  // Register ScrollTrigger plugin
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from('.hero-content', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.hero-banner', {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power3.out'
    });

    // Floating animation for hero banner
    gsap.to('.hero-banner', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Service cards scroll animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.service',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Service icons floating animation
    gsap.to('.service-card .card-icon img', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.3,
        repeat: -1
      }
    });

    // About section animation
    gsap.from('.about-banner', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -80,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 80,
      duration: 1,
      ease: 'power3.out'
    });

    // Doctor cards animation
    gsap.from('.doctor-card', {
      scrollTrigger: {
        trigger: '.doctor',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    });

    // CTA section animation
    gsap.from('.cta-banner', {
      scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.7)'
    });

    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 80,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });

    // Section titles animation
    gsap.from('.section-title', {
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Footer animation
    gsap.from('.footer-brand, .footer-list', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });
  }
});



/**
 * Hover Animations with GSAP
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Service card hover effects
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        y: -10,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(this.querySelector('.card-icon'), {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    });

    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        y: 0,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(this.querySelector('.card-icon'), {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Doctor card hover effects
  const doctorCards = document.querySelectorAll('.doctor-card');
  doctorCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        y: -15,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(this.querySelector('.card-banner'), {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        y: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(this.querySelector('.card-banner'), {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.05,
        boxShadow: '0 8px 20px rgba(255, 101, 80, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        boxShadow: '0 0 0 rgba(255, 101, 80, 0)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Social links hover
  const socialLinks = document.querySelectorAll('.social-link, .card-social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.2,
        rotation: 360,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    });

    link.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Back to top button hover
  const backTopButton = document.querySelector('.back-top-btn');
  if (backTopButton) {
    backTopButton.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.15,
        backgroundColor: '#ff6550',
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    backTopButton.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        backgroundColor: '',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }
});
