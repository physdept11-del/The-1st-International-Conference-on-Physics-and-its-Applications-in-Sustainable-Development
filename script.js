// Main JavaScript for ICPASD Conference Website

document.addEventListener('DOMContentLoaded', function() {
    // Force background colors
    document.body.style.backgroundColor = '#f8f9fa';
    
    // Initialize animations
    initAnimations();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize logo hover effects
    initLogoEffects();
    
    // Initialize email link tracking
    initEmailTracking();
    
    // Add animation classes to elements
    addAnimationClasses();
    
    // Console greeting
    console.log('ICPASD-1 Conference Website loaded successfully!');
    console.log('Conference: 1st International Conference on Physics and its Applications in Sustainable Development');
    console.log('Date: 20–24 April 2026');
    console.log('Venue: Mansoura-Sharm ElSheikh');
});

// Add animation classes to elements
function addAnimationClasses() {
    // Add fade-in class to all cards
    const cards = document.querySelectorAll('.content-card, .committee-card, .speaker-card, .topic-item');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        // Stagger the animations
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize animations for elements on scroll
function initAnimations() {
    const animatedElements = document.querySelectorAll('.topic-item, .speaker-card, .committee-card, .content-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL hash
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Initialize logo hover effects
function initLogoEffects() {
    const logoCircles = document.querySelectorAll('.logo-circle');
    logoCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });
}

// Initialize email link tracking
function initEmailTracking() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Email link clicked:', this.href);
            // You can add analytics tracking here
            trackEvent('Email Click', this.href);
        });
    });
}

// Track custom events (placeholder for analytics)
function trackEvent(eventName, eventValue) {
    // This is a placeholder for analytics tracking
    // You can implement Google Analytics, Facebook Pixel, etc.
    console.log(`Event tracked: ${eventName} - ${eventValue}`);
}

// Add scroll effect to fixed registration button
window.addEventListener('scroll', function() {
    const fixedBtn = document.querySelector('.fixed-registration');
    if (window.scrollY > 300) {
        fixedBtn.classList.add('scrolled');
    } else {
        fixedBtn.classList.remove('scrolled');
    }
});

// Add current year to footer
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Call updateCurrentYear on page load
updateCurrentYear();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Focus trap for accessibility
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Ensure all elements are visible
window.addEventListener('load', function() {
    // Force display of all elements
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        el.style.visibility = 'visible';
        el.style.display = 'block';
    });
    
    // Force background color
    document.body.style.backgroundColor = '#f8f9fa';
    document.body.style.backgroundImage = 'none';
});
