/* ============================================
   Scroll Animations & Parallax Effects
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }
    
    // Helper function to immediately animate visible elements
    function animateIfVisible(element) {
        if (isInViewport(element)) {
            element.classList.add('animate');
            return true;
        }
        return false;
    }
    
    // Observe all elements with scroll-animate classes
    const animateElements = document.querySelectorAll(
        '.scroll-animate, .scroll-animate-up, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Parallax Effect for Hero Background
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // Parallax Effect for Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        window.addEventListener('scroll', function() {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight && cardTop > -card.offsetHeight) {
                const scrollProgress = (windowHeight - cardTop) / (windowHeight + card.offsetHeight);
                const parallaxOffset = (scrollProgress - 0.5) * 30;
                
                card.style.transform = `translateY(${parallaxOffset}px)`;
            }
        });
    });
    
    // Stagger Animation for Skills Grid
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.classList.add('scroll-animate-up');
        item.style.transitionDelay = `${(index % 4) * 0.1}s`;
        
        if (!animateIfVisible(item)) {
            observer.observe(item);
        }
    });
    
    // Stagger Animation for Project Cards
    projectCards.forEach((card, index) => {
        card.classList.add('scroll-animate-scale');
        card.style.transitionDelay = `${index * 0.15}s`;
        
        if (!animateIfVisible(card)) {
            observer.observe(card);
        }
    });
    
    // Smooth Page Transitions
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        if (index > 0) { // Skip hero section
            section.classList.add('scroll-animate-up');
            
            // Check and animate if visible, otherwise observe
            if (!animateIfVisible(section)) {
                observer.observe(section);
            }
        }
    });
    
    // Animate Hero Section Content
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroImage && heroContent) {
        heroImage.classList.add('scroll-animate-left');
        heroContent.classList.add('scroll-animate-right');
        
        // Hero section is always visible on load, so animate immediately
        heroImage.classList.add('animate');
        heroContent.classList.add('animate');
    }
    
    // Animate About Section Content
    const aboutText = document.querySelector('.about-text');
    
    if (aboutText) {
        aboutText.classList.add('scroll-animate-up');
        
        if (!animateIfVisible(aboutText)) {
            observer.observe(aboutText);
        }
    }
    
    // Animate Timeline Items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.classList.add('scroll-animate-left');
        item.style.transitionDelay = `${index * 0.2}s`;
        
        if (!animateIfVisible(item)) {
            observer.observe(item);
        }
    });
    
    // Animate Education Items
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach((item, index) => {
        item.classList.add('scroll-animate-up');
        item.style.transitionDelay = `${index * 0.2}s`;
        
        if (!animateIfVisible(item)) {
            observer.observe(item);
        }
    });
    
    // Animate Contact Section
    const contactInfo = document.querySelector('.contact-info');
    
    if (contactInfo) {
        contactInfo.classList.add('scroll-animate-up');
        
        if (!animateIfVisible(contactInfo)) {
            observer.observe(contactInfo);
        }
    }
    
    // Hover Effects Enhancement
    const hoverElements = document.querySelectorAll('.project-card, .skill-item, .contact-method');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
    
    // Scroll Progress Indicator (Optional)
    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        // You can add a progress bar here if desired
        // const progressBar = document.querySelector('.scroll-progress');
        // if (progressBar) {
        //     progressBar.style.width = scrollProgress + '%';
        // }
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initialize animations on page load - ensure all visible elements are animated
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(function() {
        const allAnimateElements = document.querySelectorAll(
            '.scroll-animate, .scroll-animate-up, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
        );
        
        allAnimateElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        });
    });
    
    // Also run on window load as backup
    window.addEventListener('load', function() {
        const allAnimateElements = document.querySelectorAll(
            '.scroll-animate, .scroll-animate-up, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
        );
        
        allAnimateElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        });
    });
});

